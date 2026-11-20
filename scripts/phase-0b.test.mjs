import test from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { STATE_FEES, getStateBySlug } from "../src/data/stateFees.ts";
import { DISSOLUTION_FEES } from "../src/data/dissolutionFees.ts";
import {
  calculateFiveYearStateCost,
  calculateRecurringStateFees,
  getRenewalSummary,
} from "../src/lib/stateCost.ts";

function state(slug) {
  const match = getStateBySlug(slug);
  assert.ok(match, `Missing state record: ${slug}`);
  return match;
}

test("Hawaii formation fee is $51 ($50 articles + $1 archives fee), annual stays $12.50", () => {
  const hi = state("hawaii");
  assert.equal(hi.formationFee, 51);
  assert.equal(hi.annualFee, 12.5);
  assert.equal(hi.annualFrequency, "annual");
  assert.match(hi.notes, /\$51 total/);
  assert.equal(calculateFiveYearStateCost(hi), 113.5);
});

test("Delaware annual LLC tax is $400 (HB 400) — verified, not changed", () => {
  const de = state("delaware");
  assert.equal(de.formationFee, 110);
  assert.equal(de.franchiseTax, 400);
  assert.equal(calculateRecurringStateFees(de, 5), 2000);
  assert.equal(calculateFiveYearStateCost(de), 2110);
});

test("Renewal summary: Minnesota $0 annual filing, Wyoming $60/yr, Delaware tax-only", () => {
  const mn = getRenewalSummary(state("minnesota"));
  assert.equal(mn.perFilingFee, 0);
  assert.equal(mn.frequencyLabel, "Every year");
  assert.equal(mn.fiveYearRenewal, 0);

  // New Mexico has no annual report at all (frequency "none"), not a $0 filing.
  const nm = getRenewalSummary(state("new-mexico"));
  assert.equal(nm.perFilingFee, null);
  assert.equal(nm.frequencyLabel, "No annual/biennial report");
  assert.equal(nm.fiveYearRenewal, 0);

  const wy = getRenewalSummary(state("wyoming"));
  assert.equal(wy.perFilingFee, 60);
  assert.equal(wy.frequencyLabel, "Every year");
  assert.equal(wy.fiveYearRenewal, 300);

  const de = getRenewalSummary(state("delaware"));
  assert.equal(de.perFilingFee, null);
  assert.equal(de.frequencyLabel, "No annual/biennial report");
  assert.equal(de.fiveYearRenewal, 2000);
});

test("Q11 five-year state costs match the site calculator convention", () => {
  // Site convention (lib + published state pages): five recurring payments
  // inside a five-year horizon. New Mexico $50, Wyoming $400, Delaware $2,110.
  assert.equal(calculateFiveYearStateCost(state("new-mexico")), 50);
  assert.equal(calculateFiveYearStateCost(state("wyoming")), 400);
  assert.equal(calculateFiveYearStateCost(state("delaware")), 2110);
  // With a $125/yr registered agent.
  assert.equal(50 + 5 * 125, 675);
  assert.equal(400 + 5 * 125, 1025);
  assert.equal(2110 + 5 * 125, 2735);
});

test("Dissolution fees used by the Q5 FAQ: NM $25, NC $30, WY $60, max $220", () => {
  const fee = (slug) => DISSOLUTION_FEES.find((d) => d.slug === slug)?.fee;
  assert.equal(fee("new-mexico"), 25);
  assert.equal(fee("north-carolina"), 30);
  assert.equal(fee("wyoming"), 60);
  assert.equal(Math.max(...DISSOLUTION_FEES.map((d) => d.fee)), 220);
  assert.equal(fee("delaware"), 220);
});

test("Every page except the homepage emits BreadcrumbList JSON-LD", () => {
  const appDir = new URL("../src/app", import.meta.url).pathname;
  const pages = [];
  const walk = (dir) => {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (statSync(full).isDirectory()) walk(full);
      else if (entry === "page.tsx") pages.push(full);
    }
  };
  walk(appDir);
  assert.ok(pages.length >= 40, `Expected 40+ pages, found ${pages.length}`);
  // The homepage is exempt: a single-item BreadcrumbList is invalid per
  // Google (a BreadcrumbList needs at least two ListItems), and the
  // homepage needs no breadcrumb trail at all (SEO guide audit, Nov 2026).
  const homepage = join(appDir, "page.tsx");
  const homeSrc = readFileSync(homepage, "utf8");
  assert.doesNotMatch(homeSrc, /BreadcrumbList/);
  assert.doesNotMatch(homeSrc, /BreadcrumbJsonLd/);
  const missing = pages
    .filter((p) => p !== homepage)
    .filter((p) => {
      const src = readFileSync(p, "utf8");
      return !src.includes("Breadcrumbs") && !src.includes("BreadcrumbJsonLd");
    });
  assert.deepEqual(missing, []);
});

test("All 51 jurisdictions have verified fee records for the annual-report table", () => {
  const verified = STATE_FEES.filter((s) => s.status === "verified");
  assert.equal(verified.length, 51);
  for (const s of verified) {
    const summary = getRenewalSummary(s);
    assert.ok(Number.isFinite(summary.fiveYearRenewal), `${s.slug} renewal total`);
  }
});
