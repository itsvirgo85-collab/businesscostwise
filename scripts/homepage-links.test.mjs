import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const homepage = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");
const annualReport = readFileSync(
  new URL("../src/app/annual-report-requirements-by-state/page.tsx", import.meta.url),
  "utf8",
);

const NEW_TOOLS = [
  "/tools/llc-vs-s-corp-tax-savings-calculator",
  "/tools/llc-tax-estimator",
  "/tools/best-state-to-form-an-llc",
  "/tools/anonymous-llc-state-finder",
  "/tools/llc-dissolution-cost-calculator",
];

const NEW_GUIDES = [
  "/guides/franchise-tax-explained",
  "/guides/what-is-an-operating-agreement",
  "/guides/how-to-dissolve-an-llc",
  "/guides/non-resident-llc",
  "/guides/move-llc-to-another-state",
  "/guides/llc-for-real-estate",
  "/business-structures/llc-vs-dba",
  "/business-structures/llc-vs-partnership",
];

test("homepage links to all 5 new tools (strongest internal links for crawl + ranking)", () => {
  for (const href of NEW_TOOLS) {
    assert.ok(homepage.includes(`href: "${href}"`), `Homepage missing new tool link ${href}`);
  }
});

test("homepage links to all 8 new guides", () => {
  for (const href of NEW_GUIDES) {
    assert.ok(homepage.includes(`href="${href}"`), `Homepage missing new guide link ${href}`);
  }
});

test("annual report page title carries a CTR hook ($0 states) that the page content supports", () => {
  assert.match(annualReport, /\$0 States/);
  // The page must actually discuss $0-fee states and missed deadlines, or the title overpromises.
  assert.match(annualReport, /\$0/);
  assert.match(annualReport, /miss .* annual report deadline/i);
});

// Rankify homepage fixes, 27 Nov 2026: Key points summary + readability + title length.
function keyPointsSection() {
  const after = homepage.split("{/* Key points */}")[1];
  assert.ok(after, "Key points section missing from homepage");
  return after.split("{/* Why this platform */}")[0];
}

test("homepage has a Key points summary near the top with 5 bullets and the right links", () => {
  const summary = keyPointsSection();
  assert.match(summary, />Key points<\/h2>/);
  assert.strictEqual((summary.match(/<li>/g) || []).length, 5, "summary must have exactly 5 bullets");
  for (const href of [
    "/llc-cost-by-state",
    "/cheapest-states-to-form-an-llc",
    "/most-expensive-states-to-form-an-llc",
    "/hidden-costs-of-forming-an-llc",
    "/how-to-form-an-llc",
    "/llc-cost-calculator",
  ]) {
    assert.ok(summary.includes(`href="${href}"`), `summary missing link ${href}`);
  }
  // State names link to their own state pages (dynamic slugs).
  assert.ok(summary.includes("llc-cost-by-state/${minFormation.slug}"), "summary missing cheapest-formation state link");
  assert.ok(summary.includes("llc-cost-by-state/${maxFormation.slug}"), "summary missing priciest-formation state link");
});

test("homepage Key points figures are computed from stateFees, not hardcoded", () => {
  const summary = keyPointsSection();
  for (const v of [
    "minFormationFee",
    "maxFormationFee",
    "cheapestFiveYear",
    "priciestFiveYear",
    "californiaAnnualTax",
  ]) {
    assert.ok(summary.includes(v), `summary must use computed value ${v}`);
  }
  for (const lit of ["$35", "$500", "$4,130", "$800"]) {
    assert.ok(!summary.includes(lit), `summary must not hardcode ${lit}`);
  }
  // The two "$35 – $500" cost cards must use the computed range too.
  assert.ok(!homepage.includes('"$35 – $500"'), "filing-fee range cards must use the computed range");
  assert.ok(
    homepage.includes("minFormationFee} – $${maxFormationFee}"),
    "filing-fee range cards must render the computed min–max range",
  );
});

test("homepage title is 50-60 chars and OG/Twitter titles stay in sync", () => {
  // Scope to the metadata export only: the tools/structures arrays below
  // also have `title:` fields that must not be counted.
  const meta = homepage.match(/export const metadata: Metadata = \{([\s\S]*?)\n\};/);
  assert.ok(meta, "homepage metadata block not found");
  const titles = [...meta[1].matchAll(/title:\s*(?:\{\s*absolute:\s*)?"([^"]+)"/g)].map((m) => m[1]);
  assert.strictEqual(titles.length, 3, `expected 3 metadata titles, found ${titles.length}`);
  assert.ok(
    titles[0].length >= 50 && titles[0].length <= 60,
    `homepage title ${titles[0].length} chars (want 50-60): ${titles[0]}`,
  );
  assert.ok(
    titles.every((t) => t === titles[0]),
    "OG/Twitter titles must match the metadata title",
  );
  const alt = meta[1].match(/alt: "([^"]+)"/);
  assert.ok(alt && alt[1] === titles[0], "OG image alt must match the title");
});
