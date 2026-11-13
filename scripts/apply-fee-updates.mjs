#!/usr/bin/env node
/**
 * Apply high-confidence fee-change proposals to src/data/stateFees.ts.
 *
 * Reads data/fee-update-proposals.json (written by
 * scripts/extract-fee-changes.mjs) and applies ONLY "high" proposals, by
 * targeted replacement of the specific field line inside that state's block
 * — the rest of the file (notes, waiver fields, formatting) is preserved
 * byte-for-byte. Each changed state gets verifiedAt set to today.
 *
 * Safety tripwire: after applying, the test suite runs. If it FAILS, the
 * file is restored from git (git checkout) and every applied proposal moves
 * to the review list. A revert is a handled outcome, not a crash.
 *
 * Writes data/fee-updates-applied.json:
 *   { generatedAt, applied: [...], reverted: bool, review: [...] }
 * where review = "review"-confidence proposals + any reverted highs +
 * extraction failures passed through from the proposals file.
 *
 * Path / behaviour overrides (used by simulations; defaults are the repo):
 *   FEE_STATEFEES_PATH, FEE_PROPOSALS_PATH, FEE_OUTPUT_PATH,
 *   FEE_TEST_COMMAND (default "npm test"), FEE_TODAY (YYYY-MM-DD).
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync, spawnSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const stateFeesPath =
  process.env.FEE_STATEFEES_PATH || join(root, "src", "data", "stateFees.ts");
const proposalsPath =
  process.env.FEE_PROPOSALS_PATH || join(root, "data", "fee-update-proposals.json");
const outputPath =
  process.env.FEE_OUTPUT_PATH || join(root, "data", "fee-updates-applied.json");
const testCommand = process.env.FEE_TEST_COMMAND || "npm test";
const today =
  process.env.FEE_TODAY || new Date().toISOString().slice(0, 10);

const FIELDS = ["formationFee", "annualFee", "franchiseTax"];

function findStateBlock(text, slug) {
  // A state block starts at the line `    slug: "<slug>",` and ends at the
  // next line that is exactly `  },` (or `  }` for the last entry).
  const slugRe = new RegExp(`^    slug: "${slug}",$`, "m");
  const m = slugRe.exec(text);
  if (!m) return null;
  const blockStart = text.lastIndexOf("  {\n", m.index);
  const endRe = /\n  \},?\n/g;
  endRe.lastIndex = m.index;
  const end = endRe.exec(text);
  if (blockStart === -1 || !end) return null;
  return { start: blockStart, end: end.index + end[0].length, text: text.slice(blockStart, end.index + end[0].length) };
}

function replaceFieldLine(blockText, field, oldValue, newValue) {
  const re = new RegExp(`^    ${field}: (\\d+(?:\\.\\d+)?|null),$`, "m");
  const m = re.exec(blockText);
  if (!m) return { ok: false, reason: `field line ${field} not found` };
  if (m[1] !== String(oldValue)) {
    return { ok: false, reason: `current ${field} is ${m[1]}, proposal expected ${oldValue} (stale proposal)` };
  }
  return {
    ok: true,
    text: blockText.slice(0, m.index) + `    ${field}: ${newValue},` + blockText.slice(m.index + m[0].length),
  };
}

function replaceVerifiedAt(blockText) {
  const re = /^    verifiedAt: "\d{4}-\d{2}-\d{2}",$/m;
  const m = re.exec(blockText);
  if (!m) return { ok: false, reason: "verifiedAt line not found" };
  return {
    ok: true,
    text: blockText.slice(0, m.index) + `    verifiedAt: "${today}",` + blockText.slice(m.index + m[0].length),
  };
}

function restoreFromGit() {
  try {
    execSync(`git checkout -- ${stateFeesPath}`, { cwd: root, stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
}

function runTests() {
  const result = spawnSync(testCommand, {
    cwd: root,
    shell: true,
    encoding: "utf8",
    timeout: 300000,
  });
  return result.status === 0;
}

function main() {
  const output = { generatedAt: new Date().toISOString(), applied: [], reverted: false, review: [] };

  if (!existsSync(proposalsPath)) {
    console.warn(`No proposals file at ${proposalsPath}; writing empty applied report.`);
    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, JSON.stringify(output, null, 2));
    return;
  }
  const input = JSON.parse(readFileSync(proposalsPath, "utf8"));
  const proposals = input.proposals || [];
  const extractionFailures = input.extractionFailures || [];

  const highs = proposals.filter((p) => p.confidence === "high");
  const review = proposals.filter((p) => p.confidence !== "high");
  output.review = [...review, ...extractionFailures];

  if (highs.length === 0) {
    console.log("No high-confidence proposals; nothing to apply.");
    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, JSON.stringify(output, null, 2));
    return;
  }

  const originalText = readFileSync(stateFeesPath, "utf8");
  let text = originalText;
  const applied = [];
  const skipped = [];

  for (const p of highs) {
    if (!FIELDS.includes(p.field)) {
      skipped.push({ ...p, reason: `unsupported field ${p.field}` });
      continue;
    }
    const block = findStateBlock(text, p.slug);
    if (!block) {
      skipped.push({ ...p, reason: "state block not found" });
      continue;
    }
    const fieldResult = replaceFieldLine(block.text, p.field, p.oldValue, p.newValue);
    if (!fieldResult.ok) {
      skipped.push({ ...p, reason: fieldResult.reason });
      continue;
    }
    const verifiedResult = replaceVerifiedAt(fieldResult.text);
    if (!verifiedResult.ok) {
      skipped.push({ ...p, reason: verifiedResult.reason });
      continue;
    }
    text = text.slice(0, block.start) + verifiedResult.text + text.slice(block.end);
    applied.push(p);
    console.log(`Applied: ${p.state} ${p.field} ${p.oldValue} -> ${p.newValue}`);
  }

  if (applied.length === 0) {
    console.log("No proposals could be applied; all moved to review.");
    output.review = [...review, ...skipped, ...extractionFailures];
    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, JSON.stringify(output, null, 2));
    return;
  }

  writeFileSync(stateFeesPath, text);
  console.log(`Wrote ${applied.length} change(s) to ${stateFeesPath}; running tests...`);

  if (runTests()) {
    console.log("Tests pass; changes kept.");
    output.applied = applied;
    output.review = [...review, ...skipped, ...extractionFailures];
  } else {
    console.error("Tests FAILED after applying fee updates — reverting.");
    const restored = restoreFromGit();
    if (!restored) {
      // Fallback for non-repo paths (simulations): write back the original.
      writeFileSync(stateFeesPath, originalText);
      console.error("git restore failed; wrote back the original file contents.");
    }
    output.applied = [];
    output.reverted = true;
    output.review = [...review, ...applied, ...skipped, ...extractionFailures];
  }

  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, JSON.stringify(output, null, 2));
  console.log(`Wrote ${outputPath} (applied: ${output.applied.length}, reverted: ${output.reverted})`);
}

main();
