import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { STATE_FEES, getStateBySlug } from "../src/data/stateFees.ts";
import { calculateFiveYearStateCost } from "../src/lib/stateCost.ts";

// Rankify guides optimization, 27 Nov 2026: the two existing guides that rank
// ~31 on Google ("how to form an llc" and "llc cost by state") were
// strengthened in place. Source-level regression tests: exact keyword in H1 +
// first paragraph + an H2, fees derived from stateFees.ts (no hardcoded state
// fee literals), FAQ list in sync with FaqJsonLd, and hub-and-spoke links.

const root = new URL("..", import.meta.url).pathname;

function read(rel) {
  return readFileSync(join(root, rel), "utf8");
}

const formation = read("src/app/how-to-form-an-llc/page.tsx");
const costByState = read("src/app/llc-cost-by-state/page.tsx");

function h1(src) {
  const m = src.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  assert.ok(m, "no <h1> found");
  return m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function firstParagraph(src) {
  const m = src.match(/<p className="mt-4[^"]*"[^>]*>([\s\S]*?)<\/p>/);
  assert.ok(m, "no first paragraph found");
  return m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function h2s(src) {
  return [...src.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) =>
    m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
  );
}

test("formation guide: exact keyword in H1, first paragraph, and an H2", () => {
  assert.match(h1(formation), /how to form an llc/i);
  assert.match(firstParagraph(formation), /how to form an llc/i);
  assert.ok(
    h2s(formation).some((h) => /how to form an llc/i.test(h)),
    `no H2 contains the keyword; H2s: ${h2s(formation).join(" | ")}`,
  );
});

test("cost-by-state guide: exact keyword in H1, first paragraph, and an H2", () => {
  assert.match(h1(costByState), /llc cost by state/i);
  assert.match(firstParagraph(costByState), /llc cost by state/i);
  assert.ok(
    h2s(costByState).some((h) => /llc cost by state/i.test(h)),
    `no H2 contains the keyword; H2s: ${h2s(costByState).join(" | ")}`,
  );
});

test("both guides derive fees from stateFees.ts / stateCost", () => {
  for (const [name, src] of [
    ["how-to-form-an-llc", formation],
    ["llc-cost-by-state", costByState],
  ]) {
    assert.match(src, /from "@\/data\/stateFees"/, `${name}: missing stateFees import`);
    assert.match(src, /calculateFiveYearStateCost/, `${name}: missing stateCost import`);
  }
});

test("no hardcoded state-fee literals remain in either guide", () => {
  // Distinctive state-fee figures (formation fees, franchise taxes, 5-year
  // totals). The $50–$300 registered-agent market range and the $0 IRS EIN
  // are not state fees and are allowed. The Delaware callout's historical
  // "up from $300" is also pre-existing context, not a current fee.
  const banned = [/\$35\b/, /\$500\b/, /\$800\b/, /\$110\b/, /\$400\b/, /\$2,110/, /\$4,130/, /\$3,000/];
  for (const [name, src] of [
    ["how-to-form-an-llc", formation],
    ["llc-cost-by-state", costByState],
  ]) {
    for (const re of banned) {
      assert.doesNotMatch(src, re, `${name}: hardcoded fee literal ${re}`);
    }
  }
});

test("computed fee facts the narratives rely on", () => {
  const verified = STATE_FEES.filter((s) => s.status === "verified");
  const withFormation = verified.filter((s) => s.formationFee != null);
  const minFormation = withFormation.reduce((a, b) =>
    (a.formationFee ?? Infinity) < (b.formationFee ?? Infinity) ? a : b,
  );
  const maxFormation = withFormation.reduce((a, b) =>
    (a.formationFee ?? 0) > (b.formationFee ?? 0) ? a : b,
  );
  assert.equal(minFormation.state, "Montana");
  assert.equal(minFormation.formationFee, 35);
  assert.equal(maxFormation.state, "Massachusetts");
  assert.equal(maxFormation.formationFee, 500);
  const byFiveYear = [...verified]
    .map((s) => ({ fee: s, total: calculateFiveYearStateCost(s) }))
    .sort((a, b) => a.total - b.total);
  assert.equal(byFiveYear[0].fee.state, "Missouri");
  assert.equal(byFiveYear[0].total, 45);
  assert.equal(byFiveYear[byFiveYear.length - 1].fee.state, "California");
  assert.equal(byFiveYear[byFiveYear.length - 1].total, 4130);
  assert.equal(calculateFiveYearStateCost(getStateBySlug("delaware")), 2110);
  assert.equal(calculateFiveYearStateCost(getStateBySlug("wyoming")), 400);
  assert.equal(calculateFiveYearStateCost(getStateBySlug("new-mexico")), 50);
});

test("FAQ lists stay in sync with FaqJsonLd (same array renders both)", () => {
  for (const [name, src, count] of [
    ["how-to-form-an-llc", formation, 12],
    ["llc-cost-by-state", costByState, 6],
  ]) {
    assert.match(src, /<FaqJsonLd faqs=\{faqs\} \/>/, `${name}: FaqJsonLd not fed from the faqs array`);
    const questions = src.match(/question: /g) ?? [];
    assert.equal(questions.length, count, `${name}: expected ${count} FAQs, found ${questions.length}`);
  }
  assert.match(
    formation,
    /<HowToJsonLd[\s\S]*?steps=\{steps\.map\(\(s\) => \(\{\s*name: s\.title, text: s\.detail\s*\}\)\)\}/,
    "formation guide: HowToJsonLd must map the same steps array (name + detail)",
  );
});

test("hub-and-spoke internal links are present", () => {
  for (const href of [
    "/llc-cost-by-state/montana",
    "/llc-cost-by-state/wyoming",
    "/llc-cost-by-state/delaware",
    "/llc-cost-by-state/new-mexico",
    "/cheapest-states-to-form-an-llc",
    "/most-expensive-states-to-form-an-llc",
    "/llc-cost-calculator",
    "/how-to-get-an-ein-for-free",
    "/hidden-costs-of-forming-an-llc",
    "/how-long-does-it-take-to-start-an-llc",
    "/llc-cost-by-state",
  ]) {
    assert.ok(formation.includes(href), `formation guide: missing link ${href}`);
  }
  for (const href of [
    "/how-to-form-an-llc",
    "/cheapest-states-to-form-an-llc",
    "/most-expensive-states-to-form-an-llc",
    "/llc-cost-by-state/california",
    "/llc-cost-by-state/delaware",
    "/llc-cost-by-state/new-mexico",
    "/llc-cost-by-state/wyoming",
    "/llc-cost-calculator",
  ]) {
    assert.ok(costByState.includes(href), `cost-by-state guide: missing link ${href}`);
  }
});

test("both guides are registered in the sitemap and navigation", () => {
  const sitemap = read("src/app/sitemap.ts");
  const nav = read("src/data/navigation.ts");
  assert.match(sitemap, /path: "\/how-to-form-an-llc"/);
  assert.match(sitemap, /path: "\/llc-cost-by-state"/);
  assert.match(nav, /href: "\/how-to-form-an-llc"/);
  assert.match(nav, /href: "\/llc-cost-by-state"/);
});
