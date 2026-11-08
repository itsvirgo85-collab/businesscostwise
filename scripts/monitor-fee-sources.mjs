#!/usr/bin/env node
/**
 * Automated fee-source monitor for Get LLC Cost Calculator.
 *
 * Reads official source URLs from src/data/stateFees.ts, fetches each page,
 * records HTTP status + content fingerprint, and writes a report. When a source
 * page changes materially, the state is flagged for fee review so verified
 * figures can be updated.
 *
 * This is the backbone of the auto-fetch latest information process:
 * official government pages are checked on a schedule; changes surface as
 * actionable review items rather than silent drift.
 */

import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const snapshotPath = join(root, "data", "fee-source-snapshot.json");
const reportPath = join(root, "data", "fee-monitor-report.json");
const stateFeesPath = join(root, "src", "data", "stateFees.ts");

const USER_AGENT =
  "GetLLCCostCalculator-FeeMonitor/1.0 (+https://www.getllccostcalculator.com/about/sources-and-methodology; educational fee verification)";

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
      sourceName: get("sourceName"),
      verifiedAt: get("verifiedAt"),
      formationFee: get("formationFee"),
      annualFee: get("annualFee"),
      franchiseTax: get("franchiseTax"),
      status: get("status"),
    });
  }
  return states;
}

function fingerprint(text) {
  const normalized = text.replace(/\s+/g, " ").trim().slice(0, 500000);
  return createHash("sha256").update(normalized).digest("hex");
}

async function fetchPage(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 25000);
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "text/html,application/xhtml+xml,application/pdf,text/plain,*/*",
      },
      redirect: "follow",
      signal: controller.signal,
    });
    const text = await res.text();
    return {
      ok: res.ok,
      status: res.status,
      finalUrl: res.url,
      bytes: text.length,
      fingerprint: fingerprint(text),
    };
  } catch (err) {
    return {
      ok: false,
      status: 0,
      finalUrl: url,
      bytes: 0,
      fingerprint: null,
      error: String(err?.message || err),
    };
  } finally {
    clearTimeout(timer);
  }
}

async function main() {
  const ts = readFileSync(stateFeesPath, "utf8");
  const states = extractStatesFromTs(ts);
  if (states.length === 0) {
    console.error("No states extracted from stateFees.ts");
    process.exit(1);
  }

  const previous = existsSync(snapshotPath)
    ? JSON.parse(readFileSync(snapshotPath, "utf8"))
    : { checkedAt: null, sources: {} };

  const results = [];
  const changed = [];
  const unreachable = [];

  for (const s of states) {
    process.stdout.write(`Checking ${s.slug}... `);
    const result = await fetchPage(s.sourceUrl);
    const prev = previous.sources?.[s.slug];
    const changedFlag =
      result.ok && prev?.fingerprint && prev.fingerprint !== result.fingerprint;

    const row = {
      ...s,
      check: {
        ok: result.ok,
        status: result.status,
        finalUrl: result.finalUrl,
        bytes: result.bytes,
        fingerprint: result.fingerprint,
        error: result.error || null,
        changedSinceLastRun: Boolean(changedFlag),
        previousFingerprint: prev?.fingerprint || null,
      },
    };
    results.push(row);

    if (!result.ok) {
      unreachable.push(s.slug);
      console.log(`FAIL (${result.status || result.error})`);
    } else if (changedFlag) {
      changed.push(s.slug);
      console.log("CHANGED");
    } else {
      console.log(result.ok ? "ok" : "fail");
    }

    await new Promise((r) => setTimeout(r, 400));
  }

  const report = {
    generatedAt: new Date().toISOString(),
    totalStates: results.length,
    reachable: results.filter((r) => r.check.ok).length,
    unreachable,
    changed,
    summary:
      changed.length === 0 && unreachable.length === 0
        ? "All monitored official sources reachable; no content fingerprint changes detected."
        : `${changed.length} source page(s) changed; ${unreachable.length} unreachable.`,
    results,
  };

  mkdirSync(dirname(reportPath), { recursive: true });
  writeFileSync(reportPath, JSON.stringify(report, null, 2));

  const nextSnapshot = {
    checkedAt: report.generatedAt,
    sources: Object.fromEntries(
      results.map((r) => [
        r.slug,
        {
          sourceUrl: r.sourceUrl,
          status: r.check.status,
          fingerprint: r.check.fingerprint,
          finalUrl: r.check.finalUrl,
        },
      ])
    ),
  };
  writeFileSync(snapshotPath, JSON.stringify(nextSnapshot, null, 2));

  console.log("\n" + report.summary);
  console.log(`Report written to ${reportPath}`);

  if (unreachable.length > Math.max(5, Math.floor(results.length * 0.2))) {
    process.exit(2);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
