#!/usr/bin/env node
/**
 * Extract fee-change proposals from official sources flagged as changed by
 * scripts/monitor-fee-sources.mjs.
 *
 * Reads data/fee-monitor-report.json (the `changed` list) and
 * src/data/stateFees.ts, re-fetches each changed source, extracts its text
 * (HTML or PDF), and looks for dollar amounts near field keywords. Emits
 * data/fee-update-proposals.json for scripts/apply-fee-updates.mjs.
 *
 * Confidence rules — "high" ONLY when ALL of these hold:
 *   1. The amount is the single unambiguous match for that field: keyword
 *      occurrences are linked to the FIRST amount after them (or the nearest
 *      amount before them) on the same or an adjacent line, and the winning
 *      amount clearly outscores any runner-up. A bare "within 120 chars"
 *      window is NOT enough — fee tables put many amounts near one keyword.
 *   2. The amount is a plain number: an integer, or a decimal of .00/.50
 *      (e.g. $12.50). Amounts like $138.75 are never auto-applied.
 *   3. The amount is within sane bounds: at most 2x the current maximum for
 *      that field across the dataset, with a floor so a small dataset cannot
 *      make the cap absurdly tight (formation $1,000 / annual $1,000 /
 *      franchise $2,000). See FIELD_BOUND_FLOORS below.
 *   4. The amount differs from the current value.
 *   5. A field keyword is linked to the amount by rule 1 (same/adjacent line).
 *   6. The winning amount's line contains exactly one distinct amount
 *      (a line with $60 / $80 / $80 is a price table with variants, not a fee).
 *   7. The amount is not one component of the current fee: if winner + any
 *      other amount on the page equals the current value, the page is
 *      itemising the current total (e.g. $100 + $25 = $125), not a change.
 *   8. The change is modest: at most a 50% move from the current value. A
 *      bigger move goes to human review however clear it looks.
 * Everything else is confidence "review" and is never auto-applied.
 *
 * Never proposed: a null/removal, a value for annualFee when the state's
 * annualFrequency is "none" (structural change — "review" only), any change
 * to notes / waiver fields / frequencies, or anything for a source whose
 * text could not be extracted (recorded as an extraction failure instead).
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { PDFParse } from "pdf-parse";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const reportPath = join(root, "data", "fee-monitor-report.json");
const proposalsPath = join(root, "data", "fee-update-proposals.json");
const stateFeesPath = join(root, "src", "data", "stateFees.ts");

const USER_AGENT =
  "GetLLCCostCalculator-FeeMonitor/1.0 (+https://www.getllccostcalculator.com/about/sources-and-methodology; educational fee verification)";

// Keyword phrases per fee field, longest first so a regex alternation
// matches "certificate of formation" instead of the bare "formation" inside it.
export const FIELD_KEYWORDS = {
  formationFee: [
    "certificate of formation",
    "articles of organization",
    "formation fee",
    "filing fee",
    "formation",
  ],
  annualFee: ["annual report fee", "annual report", "annual fee"],
  franchiseTax: ["franchise tax", "annual tax", "business privilege tax"],
};

const FIELDS = ["formationFee", "annualFee", "franchiseTax"];

// Floors for the per-field sanity cap (see header). The cap is
// max(2 * current dataset max for the field, floor).
const FIELD_BOUND_FLOORS = {
  formationFee: 1000,
  annualFee: 1000,
  franchiseTax: 2000,
};

const KEYWORD_FORWARD_MAX = 80; // chars from a keyword to the amount after it
const KEYWORD_BACKWARD_MAX = 40; // chars from an amount to the keyword after it
const MAX_LINE_BREAKS_BETWEEN = 1; // keyword and amount may span one line break
const MAX_RELATIVE_CHANGE = 0.5; // rule 8: at most a 50% move from current value
const EVIDENCE_MAX_LENGTH = 300;

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function keywordPattern(keywords) {
  return new RegExp(keywords.map(escapeRegExp).join("|"), "gi");
}

// True when the captured amount string is a plain number: an integer, or a
// decimal ending .00 / .0 / .50 / .5. Anything else (e.g. $138.75) is real
// money but too easy to misread from a schedule, so it never auto-applies.
export function isPlainAmount(raw) {
  if (!raw.includes(".")) return true;
  const frac = raw.split(".")[1];
  return frac === "0" || frac === "00" || frac === "5" || frac === "50";
}

const AMOUNT_RE = /\$[ \t]*(\d{1,3}(?:,\d{3})*(?:\.\d{1,2})?|\d+(?:\.\d{1,2})?)/g;

/** Every distinct dollar amount anywhere in the text (for the component check). */
export function extractAllAmounts(text) {
  const values = new Set();
  for (const m of text.matchAll(AMOUNT_RE)) {
    const v = Number(m[1].replace(/,/g, ""));
    if (Number.isFinite(v)) values.add(v);
  }
  return values;
}

function countNewlines(s) {
  let n = 0;
  for (const ch of s) if (ch === "\n") n++;
  return n;
}

function lineAround(text, pos) {
  const start = text.lastIndexOf("\n", pos - 1) + 1;
  let end = text.indexOf("\n", pos);
  if (end === -1) end = text.length;
  return text.slice(start, end);
}

/**
 * Find dollar amounts in `text` that a field keyword actually points at.
 * A keyword occurrence points at the FIRST amount after it (within
 * KEYWORD_FORWARD_MAX chars and at most one line break), or at the NEAREST
 * amount before it (within KEYWORD_BACKWARD_MAX chars, same line-break
 * limit). This is what stops a fee table from attributing every amount on
 * the page to one keyword.
 * Returns one entry per distinct amount, best score first:
 * { value, score, evidence, raw, lineDistinctAmounts }.
 */
export function extractAmountCandidates(text, keywords) {
  const pattern = keywordPattern(keywords);
  const amounts = [...text.matchAll(AMOUNT_RE)].map((m) => ({
    raw: m[1],
    value: Number(m[1].replace(/,/g, "")),
    start: m.index ?? 0,
    end: (m.index ?? 0) + m[0].length,
  })).filter((a) => Number.isFinite(a.value));

  const byValue = new Map();
  // One point per (amount, keyword phrase): the same phrase restated next to
  // its own amount ("Filing fee: $150. The filing fee is due…") must not
  // inflate that amount's score over a rival amount.
  const addPoint = (amount, keywordMatch) => {
    const line = lineAround(text, amount.start);
    const lineAmounts = new Set(
      [...line.matchAll(AMOUNT_RE)].map((m) => Number(m[1].replace(/,/g, "")))
    );
    const kwStart = Math.max(0, keywordMatch.index - 60);
    const kwEnd = Math.min(text.length, keywordMatch.index + keywordMatch[0].length + 120);
    const evidence = text
      .slice(kwStart, kwEnd)
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, EVIDENCE_MAX_LENGTH);
    const existing = byValue.get(amount.value);
    const phrase = keywordMatch[0].toLowerCase();
    const phrases = existing?.phrases ?? new Set();
    if (phrases.has(phrase)) return;
    phrases.add(phrase);
    byValue.set(amount.value, {
      value: amount.value,
      score: (existing?.score ?? 0) + 1,
      evidence,
      raw: amount.raw,
      phrases,
      // Best (cleanest) line this amount was linked from: a multi-amount
      // line is a price table with variants, so only a single-amount line
      // can support a high-confidence proposal.
      lineDistinctAmounts: Math.min(existing?.lineDistinctAmounts ?? Infinity, lineAmounts.size),
    });
  };

  for (const kw of text.matchAll(pattern)) {
    const kwStart = kw.index ?? 0;
    const kwEnd = kwStart + kw[0].length;
    const forward = amounts.find(
      (a) =>
        a.start >= kwEnd &&
        a.start - kwEnd <= KEYWORD_FORWARD_MAX &&
        countNewlines(text.slice(kwEnd, a.start)) <= MAX_LINE_BREAKS_BETWEEN
    );
    // One amount per keyword occurrence: prefer the amount after the keyword;
    // only fall back to the amount before it when there is none after.
    if (forward) {
      addPoint(forward, kw);
      continue;
    }
    const backward = [...amounts]
      .reverse()
      .find(
        (a) =>
          a.end <= kwStart &&
          kwStart - a.end <= KEYWORD_BACKWARD_MAX &&
          countNewlines(text.slice(a.end, kwStart)) <= MAX_LINE_BREAKS_BETWEEN
      );
    if (backward) addPoint(backward, kw);
  }
  return [...byValue.values()].sort((a, b) => b.score - a.score);
}

/**
 * Propose a new value for one field of one state, or null when there is no
 * usable candidate. Pure function — unit-tested in extract-fee-changes.test.mjs.
 */
export function proposeFieldChange({ text, field, currentValue, maxValue, annualFrequency }) {
  const candidates = extractAmountCandidates(text, FIELD_KEYWORDS[field]);
  if (candidates.length === 0) return null;
  const winner = candidates[0];
  const runnerUp = candidates[1];
  if (winner.value === currentValue) return null;

  const cap = Math.max(2 * (maxValue ?? 0), FIELD_BOUND_FLOORS[field]);
  const unambiguous =
    candidates.length === 1 || winner.score > (runnerUp?.score ?? 0);
  const inBounds = winner.value >= 0 && winner.value <= cap;
  const plain = isPlainAmount(winner.raw);
  // Rule 6: the winning amount must sit alone on its line.
  const singleAmountLine = winner.lineDistinctAmounts === 1;
  // Rule 7: the page must not be itemising the current fee. If the winner
  // plus any other amount on the page equals the current value, the fee did
  // not change — the source just lists its components (e.g. $100 + $25 = $125).
  const componentSplit =
    currentValue != null &&
    [...extractAllAmounts(text)].some(
      (other) =>
        other !== winner.value &&
        Math.abs(winner.value + other - currentValue) < 0.01
    );
  // Rule 8: at most a 50% move from the current value (skipped when there is
  // no current value to compare against).
  const modestChange =
    currentValue == null ||
    currentValue === 0 ||
    Math.abs(winner.value - currentValue) / currentValue <= MAX_RELATIVE_CHANGE;

  let confidence = "review";
  if (unambiguous && inBounds && plain && singleAmountLine && !componentSplit && modestChange) {
    // A structural change (adding a recurring fee where the state has none)
    // is never auto-applied, however clear the amount looks.
    if (!(field === "annualFee" && annualFrequency === "none")) {
      confidence = "high";
    }
  }
  return { newValue: winner.value, confidence, evidence: winner.evidence };
}

function extractStatesFromTs(source) {
  const states = [];
  const blocks = source.split(/\n\s*\{\s*\n/).slice(1);
  for (const block of blocks) {
    const get = (key) => {
      const m = block.match(new RegExp(`${key}:\\s*("(?:\\\\.|[^"])*"|null|\\d+(?:\\.\\d+)?)`));
      if (!m) return null;
      const v = m[1];
      if (v === "null") return null;
      if (v.startsWith('"')) return JSON.parse(v);
      return Number(v);
    };
    const state = get("state");
    const slug = get("slug");
    const sourceUrl = get("sourceUrl");
    if (!state || !slug || !sourceUrl) continue;
    states.push({
      state,
      slug,
      sourceUrl,
      formationFee: get("formationFee"),
      annualFee: get("annualFee"),
      franchiseTax: get("franchiseTax"),
      annualFrequency: get("annualFrequency"),
    });
  }
  return states;
}

function decodeEntities(s) {
  return s
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'");
}

function htmlToText(html) {
  // Line structure matters for extraction: a fee-table row must stay on one
  // line (label + amount together) while list items and paragraphs break.
  // Row boundaries become newlines; cell boundaries become spaces.
  const withBreaks = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<\/(tr|p|div|li|h1|h2|h3|h4|h5|h6|ul|ol|table|section|article)>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ");
  return decodeEntities(withBreaks)
    .split("\n")
    .map((line) => line.replace(/[ \t]+/g, " ").trim())
    .filter(Boolean)
    .join("\n");
}

// Same line handling for PDF text: collapse spaces inside a line, keep the
// line breaks — a fee schedule's rows are its structure.
function normalizeLines(text) {
  return text
    .split("\n")
    .map((line) => line.replace(/[ \t]+/g, " ").trim())
    .filter(Boolean)
    .join("\n");
}

async function fetchSourceText(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 30000);
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": USER_AGENT, Accept: "text/html,application/xhtml+xml,application/pdf,text/plain,*/*" },
      redirect: "follow",
      signal: controller.signal,
    });
    if (!res.ok) return { error: `HTTP ${res.status}` };
    const contentType = res.headers.get("content-type") || "";
    const isPdf = /\.pdf(\?|#|$)/i.test(url) || contentType.includes("application/pdf");
    if (isPdf) {
      const buf = Buffer.from(await res.arrayBuffer());
      const parser = new PDFParse({ data: buf });
      try {
        const result = await parser.getText();
        return { text: normalizeLines(result.text) };
      } finally {
        await parser.destroy();
      }
    }
    return { text: htmlToText(await res.text()) };
  } catch (err) {
    return { error: String(err?.message || err) };
  } finally {
    clearTimeout(timer);
  }
}

async function main() {
  const empty = { generatedAt: new Date().toISOString(), proposals: [], extractionFailures: [] };
  if (!existsSync(reportPath)) {
    console.warn(`No monitor report at ${reportPath}; writing empty proposals.`);
    mkdirSync(dirname(proposalsPath), { recursive: true });
    writeFileSync(proposalsPath, JSON.stringify(empty, null, 2));
    return;
  }
  const report = JSON.parse(readFileSync(reportPath, "utf8"));
  const changed = report.changed || [];
  if (changed.length === 0) {
    console.log("No changed sources in the monitor report; writing empty proposals.");
    mkdirSync(dirname(proposalsPath), { recursive: true });
    writeFileSync(proposalsPath, JSON.stringify(empty, null, 2));
    return;
  }

  const ts = readFileSync(stateFeesPath, "utf8");
  const states = extractStatesFromTs(ts);
  const bySlug = new Map(states.map((s) => [s.slug, s]));
  const maxValue = {};
  for (const field of FIELDS) {
    maxValue[field] = Math.max(
      0,
      ...states.map((s) => s[field]).filter((v) => typeof v === "number")
    );
  }

  const proposals = [];
  const extractionFailures = [];
  for (const slug of changed) {
    const entry = bySlug.get(slug);
    if (!entry) {
      extractionFailures.push({ slug, state: slug, sourceUrl: null, error: "No matching entry in stateFees.ts" });
      continue;
    }
    process.stdout.write(`Extracting ${slug}... `);
    const { text, error } = await fetchSourceText(entry.sourceUrl);
    if (!text || text.length < 50) {
      extractionFailures.push({
        slug,
        state: entry.state,
        sourceUrl: entry.sourceUrl,
        error: error || "Extracted text was empty or too short",
      });
      console.log("EXTRACTION FAILED");
      continue;
    }
    let found = 0;
    for (const field of FIELDS) {
      const result = proposeFieldChange({
        text,
        field,
        currentValue: entry[field],
        maxValue: maxValue[field],
        annualFrequency: entry.annualFrequency,
      });
      if (!result) continue;
      proposals.push({
        slug,
        state: entry.state,
        field,
        oldValue: entry[field],
        newValue: result.newValue,
        confidence: result.confidence,
        evidence: result.evidence,
        sourceUrl: entry.sourceUrl,
      });
      found++;
    }
    console.log(`${found} proposal(s)`);
    await new Promise((r) => setTimeout(r, 400));
  }

  const output = { generatedAt: new Date().toISOString(), proposals, extractionFailures };
  mkdirSync(dirname(proposalsPath), { recursive: true });
  writeFileSync(proposalsPath, JSON.stringify(output, null, 2));
  console.log(
    `${proposals.length} proposal(s) (${proposals.filter((p) => p.confidence === "high").length} high-confidence), ` +
      `${extractionFailures.length} extraction failure(s). Wrote ${proposalsPath}`
  );
}

const invokedAsScript =
  process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (invokedAsScript) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
