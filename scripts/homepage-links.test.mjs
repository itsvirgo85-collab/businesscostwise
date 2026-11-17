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
  assert.match(annualReport, /miss the annual report deadline/i);
});
