import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { getStateBySlug } from "../src/data/stateFees.ts";
import { calculateFiveYearStateCost } from "../src/lib/stateCost.ts";
import {
  DEFAULT_AGENT_COST_PER_YEAR,
  DEFAULT_EIN_SERVICE_COST,
  DEFAULT_MAIL_FORWARDING_COST_PER_MONTH,
  FX_RATE_DATE,
  NON_RESIDENT_CURRENCIES,
  calculateNonResidentCost,
  calculateStateOnlyTotals,
  convertUsd,
  getDefaultRate,
  isNonResidentCurrencyCode,
} from "../src/lib/nonResidentCost.ts";

function state(slug) {
  const match = getStateBySlug(slug);
  assert.ok(match, `Missing state record: ${slug}`);
  return match;
}

function totals(slug, overrides = {}) {
  return calculateNonResidentCost({
    state: state(slug),
    includeRegisteredAgent: false,
    registeredAgentCostPerYear: DEFAULT_AGENT_COST_PER_YEAR,
    includeMailForwarding: false,
    mailForwardingCostPerMonth: DEFAULT_MAIL_FORWARDING_COST_PER_MONTH,
    einService: "diy",
    einServiceCost: DEFAULT_EIN_SERVICE_COST,
    ...overrides,
  });
}

test("Default FX rates are the verified 18 Nov 2026 rates (9 currencies)", () => {
  assert.equal(NON_RESIDENT_CURRENCIES.length, 9);
  assert.deepEqual(
    NON_RESIDENT_CURRENCIES.map((c) => c.code),
    ["GBP", "EUR", "CAD", "AUD", "NZD", "CHF", "SGD", "AED", "INR"],
  );
  assert.equal(getDefaultRate("GBP"), 0.75);
  assert.equal(getDefaultRate("EUR"), 0.89);
  assert.equal(getDefaultRate("CAD"), 1.41);
  assert.equal(getDefaultRate("AUD"), 1.49);
  assert.equal(getDefaultRate("NZD"), 1.81);
  assert.equal(getDefaultRate("CHF"), 0.84);
  assert.equal(getDefaultRate("SGD"), 1.29);
  assert.equal(getDefaultRate("AED"), 3.67);
  assert.equal(getDefaultRate("INR"), 93.5);
  assert.equal(FX_RATE_DATE, "18 November 2026");
  assert.equal(isNonResidentCurrencyCode("INR"), true);
  assert.equal(isNonResidentCurrencyCode("USD"), false);
  assert.equal(isNonResidentCurrencyCode("xxx"), false);
});

test("Currency conversion uses foreign-per-USD rates", () => {
  assert.equal(convertUsd(1025, 0.75), 768.75);
  assert.equal(convertUsd(225, 93.5), 21037.5);
  assert.ok(Number.isNaN(convertUsd(100, 0)));
  assert.ok(Number.isNaN(convertUsd(100, -1)));
});

test("Five-year convention: 5 recurring payments — NM $50, WY $400, DE $2,110", () => {
  // State-only totals, no agent/mail/EIN. The four-payment figures
  // (WY $340 / DE $1,710) must never appear here.
  assert.deepEqual(calculateStateOnlyTotals(state("new-mexico")), {
    year1Usd: 50,
    fiveYearUsd: 50,
  });
  assert.deepEqual(calculateStateOnlyTotals(state("wyoming")), {
    year1Usd: 160,
    fiveYearUsd: 400,
  });
  assert.deepEqual(calculateStateOnlyTotals(state("delaware")), {
    year1Usd: 510,
    fiveYearUsd: 2110,
  });
  assert.equal(calculateFiveYearStateCost(state("wyoming")), 400);
  assert.equal(calculateFiveYearStateCost(state("delaware")), 2110);
});

test("Year-1 + 5-year totals with a $125/yr agent: NM $675, WY $1,025, DE $2,735", () => {
  const withAgent = { includeRegisteredAgent: true };
  const nm = totals("new-mexico", withAgent);
  assert.equal(nm.year1Usd, 175);
  assert.equal(nm.fiveYearUsd, 675);

  const wy = totals("wyoming", withAgent);
  assert.equal(wy.year1Usd, 285);
  assert.equal(wy.fiveYearUsd, 1025);

  const de = totals("delaware", withAgent);
  assert.equal(de.year1Usd, 635);
  assert.equal(de.fiveYearUsd, 2735);
});

test("Mail forwarding and EIN service are added once per period, not per year for EIN", () => {
  const wy = totals("wyoming", {
    includeMailForwarding: true,
    einService: "paid",
  });
  // State-only WY: year 1 $160, 5-year $400. Mail $15/mo, EIN $99 once.
  assert.equal(wy.year1Usd, 160 + 15 * 12 + 99);
  assert.equal(wy.fiveYearUsd, 400 + 15 * 60 + 99);
  const diy = totals("wyoming", { includeMailForwarding: true });
  assert.equal(diy.year1Usd, 160 + 15 * 12);
  assert.equal(diy.fiveYearUsd, 400 + 15 * 60);
});

test("Breakdown line items sum to the totals", () => {
  const de = totals("delaware", {
    includeRegisteredAgent: true,
    includeMailForwarding: true,
    einService: "paid",
  });
  const sum = (key) => de.items.reduce((s, item) => s + item[key], 0);
  assert.equal(sum("year1"), de.year1Usd);
  assert.equal(sum("fiveYear"), de.fiveYearUsd);
  assert.equal(de.items.find((i) => i.label === "EIN filing").year1, 99);
  assert.equal(de.items.find((i) => i.label === "EIN filing").fiveYear, 99);
});

const toolPage = readFileSync(
  new URL("../src/app/tools/non-resident-llc-cost-calculator/page.tsx", import.meta.url),
  "utf8",
);
const calculatorComponent = readFileSync(
  new URL("../src/components/calculators/NonResidentCalculator.tsx", import.meta.url),
  "utf8",
);
const libSource = readFileSync(
  new URL("../src/lib/nonResidentCost.ts", import.meta.url),
  "utf8",
);

test("Tool page is registered in the sitemap and the tools navigation", () => {
  const sitemap = readFileSync(new URL("../src/app/sitemap.ts", import.meta.url), "utf8");
  assert.match(sitemap, /path:\s*["']\/tools\/non-resident-llc-cost-calculator["']/);
  assert.doesNotMatch(sitemap, /sitemap\.xml/);
  const navigation = readFileSync(new URL("../src/data/navigation.ts", import.meta.url), "utf8");
  assert.match(navigation, /href:\s*["']\/tools\/non-resident-llc-cost-calculator["']/);
});

test("Tool page has FAQ JSON-LD, Breadcrumbs, and ?currency=/?state= support", () => {
  // No SoftwareApplication block: SEMrush flagged it as invalid (missing
  // aggregateRating/review) and no real reviews exist, so the block was
  // removed rather than inventing ratings. FAQPage JSON-LD stays.
  assert.doesNotMatch(toolPage, /SoftwareApplication/);
  assert.match(toolPage, /FaqJsonLd faqs=\{faqs\}/);
  assert.match(toolPage, /Breadcrumbs/);
  assert.match(toolPage, /searchParams/);
  assert.match(toolPage, /currency/);
  assert.match(toolPage, /initialCurrencyCode/);
  assert.match(toolPage, /initialStateSlug/);
  assert.match(toolPage, /wyoming/);
  assert.match(toolPage, /NonResidentCalculator/);
  // Visible FAQ text and JSON-LD come from the same array (synced by construction).
  assert.match(toolPage, /\{faqs\.map\(/);
  // No tax/legal advice: the page states the operational-fees-only boundary.
  assert.match(toolPage, /not tax or legal advice/i);
});

test("Calculator supports 9 currencies, editable FX rate, WY/DE/NM toggle, agent/mail/EIN options", () => {
  assert.match(calculatorComponent, /NON_RESIDENT_CURRENCIES/);
  assert.match(calculatorComponent, /fxRate/);
  assert.match(calculatorComponent, /FX_RATE_DATE/);
  assert.match(calculatorComponent, /estimate/);
  assert.match(calculatorComponent, /wyoming/);
  assert.match(calculatorComponent, /delaware/);
  assert.match(calculatorComponent, /new-mexico/);
  assert.match(calculatorComponent, /includeAgent/);
  assert.match(calculatorComponent, /includeMail/);
  assert.match(calculatorComponent, /einService/);
  assert.match(calculatorComponent, /Form SS-4/);
  assert.match(calculatorComponent, /scenario/i);
});

test("No US state fees are hardcoded in the new lib, component or tool page", () => {
  // The mandated totals ($2,110 / $1,025 / $2,735 / $675) must be computed
  // from stateFees.ts at render time, never written as literals.
  for (const [name, src] of [
    ["lib", libSource],
    ["component", calculatorComponent],
    ["tool page", toolPage],
  ]) {
    for (const literal of ["2,110", "2110", "1,025", "1025", "2,735", "2735"]) {
      assert.doesNotMatch(src, new RegExp(literal.replace(",", ",?")), `${name} hardcodes ${literal}`);
    }
  }
  assert.match(libSource, /calculateRecurringStateFees/);
  assert.match(libSource, /formationFee/);
});

test("Tool is linked from the tools hub (via navigation), all state pages, and the guide", () => {
  const related = readFileSync(
    new URL("../src/components/calculators/RelatedCalculators.tsx", import.meta.url),
    "utf8",
  );
  assert.match(related, /\/tools\/non-resident-llc-cost-calculator/);
  const guide = readFileSync(
    new URL("../src/app/guides/non-resident-llc/page.tsx", import.meta.url),
    "utf8",
  );
  assert.match(guide, /\/tools\/non-resident-llc-cost-calculator/);
  assert.match(guide, /\?currency=GBP&state=wyoming/);
  const ein = readFileSync(
    new URL("../src/app/how-to-get-an-ein-for-free/page.tsx", import.meta.url),
    "utf8",
  );
  assert.match(ein, /\/tools\/non-resident-llc-cost-calculator/);
  const agent = readFileSync(
    new URL("../src/app/tools/registered-agent-cost-calculator/page.tsx", import.meta.url),
    "utf8",
  );
  assert.match(agent, /\/tools\/non-resident-llc-cost-calculator/);
});

test("Q17–Q20 FAQs are present on the guide, EIN page and agent tool page", () => {
  const guide = readFileSync(
    new URL("../src/app/guides/non-resident-llc/page.tsx", import.meta.url),
    "utf8",
  );
  assert.match(guide, /Can I form a US LLC from abroad without visiting the US\?/);
  assert.match(guide, /Is a registered agent the same as a virtual mailbox\?/);
  assert.match(guide, /\$10–\$30 a month/);
  const ein = readFileSync(
    new URL("../src/app/how-to-get-an-ein-for-free/page.tsx", import.meta.url),
    "utf8",
  );
  assert.match(ein, /How much does it cost to get an EIN as a non-resident\?/);
  assert.match(ein, /\$75–\$300/);
  assert.match(ein, /How does a non-resident get an EIN without an SSN\?/);
  const agent = readFileSync(
    new URL("../src/app/tools/registered-agent-cost-calculator/page.tsx", import.meta.url),
    "utf8",
  );
  assert.match(agent, /Is a registered agent the same as a virtual mailbox\?/);
  assert.match(agent, /\$10–\$30 a month/);
  // Every edited page keeps visible FAQs and JSON-LD in sync via one array.
  for (const src of [guide, ein, agent]) {
    assert.match(src, /FaqJsonLd faqs=\{faqs\}/);
    assert.match(src, /\{faqs\.map\(/);
  }
});
