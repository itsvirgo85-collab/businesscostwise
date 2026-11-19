import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { countryGuideFigures } from "../src/lib/countryGuideFigures.ts";

const PAGES = {
  ireland: {
    slug: "us-llc-cost-from-ireland",
    currency: "EUR",
    title:
      "US LLC Cost from Ireland (2026) — Filing Fees in EUR",
    h1: "US LLC Cost from Ireland (2026): Year-1 &amp; Ongoing Fees in EUR",
    boundary: /consult a qualified Irish tax or legal adviser regarding Revenue/,
  },
  newZealand: {
    slug: "us-llc-cost-from-new-zealand",
    currency: "NZD",
    title: "US LLC Cost from New Zealand (2026) — Official Fees in NZD",
    h1: "US LLC Cost from New Zealand (2026): Complete Fee Breakdown in NZD",
    boundary: /consult a qualified New Zealand tax or legal adviser regarding IRD/,
  },
  netherlands: {
    slug: "us-llc-cost-from-netherlands",
    currency: "EUR",
    title:
      "US LLC Cost from the Netherlands (2026) — Filing Fees in EUR",
    h1: "US LLC Cost from the Netherlands (2026): Complete Fee Breakdown in EUR",
    boundary: /consult a qualified Dutch tax or legal adviser regarding Belastingdienst/,
  },
  germany: {
    slug: "us-llc-cost-from-germany",
    currency: "EUR",
    title: "US LLC Cost from Germany (2026) — Filing Fees in EUR",
    h1: "US LLC Cost from Germany (2026): Setup &amp; Annual Fees in EUR",
    boundary: /consult a qualified German Steuerberater or legal adviser/,
  },
};

function pageSrc(slug) {
  return readFileSync(
    new URL(`../src/app/guides/${slug}/page.tsx`, import.meta.url),
    "utf8",
  );
}

test("Country-guide figures: corrected FX, 5-payment 5-year convention, agent-on totals", () => {
  const eur = countryGuideFigures("EUR");
  assert.equal(eur.rate, 0.89);
  // Exact computed values; the spec's rounded figures are €254/€912,
  // €156/€601 and €565/€2,434.
  assert.equal(eur.wyYear1Local, "€253.65");
  assert.equal(eur.wyFiveYearLocal, "€912.25");
  assert.equal(eur.nmYear1Local, "€155.75");
  assert.equal(eur.nmFiveYearLocal, "€600.75");
  assert.equal(eur.deYear1Local, "€565.15");
  assert.equal(eur.deFiveYearLocal, "€2,434.15");
  assert.equal(eur.wyOngoingUsd, "$185");
  assert.equal(eur.nmOngoingUsd, "$125");
  assert.equal(eur.deOngoingUsd, "$525");
  assert.equal(eur.wyYear1Usd, "$285");
  assert.equal(eur.wyFiveYearUsd, "$1,025");
  assert.equal(eur.nmFiveYearUsd, "$675");
  assert.equal(eur.deFiveYearUsd, "$2,735");
  assert.equal(eur.nmFiveYearStateOnly, "$50");
  assert.equal(eur.wyFiveYearStateOnly, "$400");
  assert.equal(eur.deFiveYearStateOnly, "$2,110");
  assert.equal(eur.nmDissolution, "$25");
  assert.equal(eur.wyDissolution, "$60");

  const nzd = countryGuideFigures("NZD");
  assert.equal(nzd.rate, 1.81);
  // Spec rounded figures: NZ$516/NZ$1,855, NZ$317/NZ$1,222, NZ$1,149/NZ$4,950.
  assert.equal(nzd.wyYear1Local, "NZ$515.85");
  assert.equal(nzd.wyFiveYearLocal, "NZ$1,855.25");
  assert.equal(nzd.nmYear1Local, "NZ$316.75");
  assert.equal(nzd.nmFiveYearLocal, "NZ$1,221.75");
  assert.equal(nzd.deYear1Local, "NZ$1,149.35");
  assert.equal(nzd.deFiveYearLocal, "NZ$4,950.35");
  // The four-payment figures (WY $340 / DE $1,710) must never appear.
  assert.equal(nzd.wyFiveYearStateOnly, "$400");
  assert.equal(nzd.deFiveYearStateOnly, "$2,110");
});

test("$0 annual-report states come from stateFees.ts (NM, MO, AZ, OH + SC)", () => {
  const f = countryGuideFigures("EUR");
  for (const state of ["New Mexico", "Missouri", "Arizona", "Ohio"]) {
    assert.ok(f.zeroReportStates.includes(state), `missing ${state}`);
  }
});

for (const [key, cfg] of Object.entries(PAGES)) {
  test(`${key}: exact title + H1, embedded calculator, FAQ + Breadcrumb schema`, () => {
    const src = pageSrc(cfg.slug);
    assert.ok(src.includes(`title: { absolute: "${cfg.title}" }`), "title");
    assert.ok(src.includes(cfg.h1), "H1");
    assert.ok(
      src.includes(
        `NonResidentCalculator initialCurrencyCode="${cfg.currency}" initialStateSlug="wyoming"`,
      ),
      "pre-loaded calculator",
    );
    assert.match(src, /FaqJsonLd faqs=\{faqs\}/);
    assert.match(src, /Breadcrumbs/);
    assert.match(src, /\{faqs\.map\(/);
    assert.match(src, cfg.boundary);
    // No tax/legal advice anywhere: the page states the boundary only.
    assert.doesNotMatch(src, /tax advice/i);
  });

  test(`${key}: verified local benchmark figures`, () => {
    const src = pageSrc(cfg.slug);
    if (key === "ireland") {
      assert.match(src, /CRO/);
      assert.match(src, /€50 to incorporate/);
      assert.match(src, /€25,000/);
      assert.match(src, /Section 137/);
    }
    if (key === "newZealand") {
      assert.match(src, /NZ\$118\.74/);
      assert.match(src, /NZ\$136\.55/);
      assert.match(src, /NZ\$49\.74/);
      assert.match(src, /MBIE reviewed these fees in 2025/);
    }
    if (key === "netherlands") {
      assert.match(src, /KvK/);
      assert.match(src, /€85\.15/);
    }
    if (key === "germany") {
      assert.match(src, /€225/);
      assert.match(src, /€105–€165/);
      assert.match(src, /€276–€720/);
      assert.doesNotMatch(src, /€250–€450/);
    }
  });

  test(`${key}: required internal links + cross-links to the other 3 country pages`, () => {
    const src = pageSrc(cfg.slug);
    assert.match(
      src,
      new RegExp(`/tools/non-resident-llc-cost-calculator\\?currency=${cfg.currency}`),
    );
    assert.match(src, /\/guides\/non-resident-llc/);
    assert.match(src, /\/annual-report-requirements-by-state/);
    assert.match(src, /\/llc-cost-by-state\/wyoming/);
    assert.match(src, /\/llc-cost-by-state\/delaware/);
    assert.match(src, /\/llc-cost-by-state\/new-mexico/);
    for (const other of Object.values(PAGES)) {
      if (other.slug === cfg.slug) continue;
      assert.ok(
        src.includes(`/guides/${other.slug}`),
        `missing cross-link to ${other.slug}`,
      );
    }
  });

  test(`${key}: the 4 custom FAQs are present`, () => {
    const src = pageSrc(cfg.slug);
    const questions = {
      ireland: [
        "What does it cost in EUR to keep a US LLC active every year from Ireland?",
        "Why do online LLC packages cost several hundred euros when official US state fees start at $35?",
        "Does a US LLC require an EEA-resident director or €25,000 bond like an Irish company?",
        "Can an Irish founder dissolve a US LLC remotely, and what are the official fees?",
      ],
      newZealand: [
        "What is the Year-1 and annual renewal cost of a US LLC in NZD?",
        "Does a US LLC require a New Zealand or Australian resident director?",
        "Why do formation websites charge several hundred New Zealand dollars when state filing fees start at $35 USD?",
        "What happens operationally if a New Zealand founder misses a US annual report deadline?",
      ],
      netherlands: [
        "What is the real annual maintenance cost of a US LLC in Euros?",
        "Which US state has the lowest 5-year EUR running cost for founders in the Netherlands?",
        "Can a founder in the Netherlands get a US EIN for €0 without paying a formation agency?",
        "What happens operationally if a Dutch founder misses a US state annual report deadline?",
      ],
      germany: [
        "What are the exact ongoing US LLC fees in EUR for founders living in Germany?",
        "Does forming a US LLC require a notary appointment or minimum share capital like a GmbH?",
        "Which US states have no annual report to file at all, and what operational costs still apply?",
        "Can a founder in Germany get a US EIN for €0 without paying a formation agency?",
      ],
    }[key];
    for (const q of questions) {
      assert.ok(src.includes(q), `missing FAQ: ${q}`);
    }
  });

  test(`${key}: no US state-fee totals are hardcoded in the page source`, () => {
    const src = pageSrc(cfg.slug);
    for (const literal of ["2,110", "2110", "1,025", "1025", "2,735", "2735"]) {
      assert.doesNotMatch(
        src,
        new RegExp(literal.replace(",", ",?")),
        `page hardcodes ${literal}`,
      );
    }
  });
}

test("All 4 country pages are registered in the sitemap and Guides / International navigation", () => {
  const sitemap = readFileSync(new URL("../src/app/sitemap.ts", import.meta.url), "utf8");
  const navigation = readFileSync(new URL("../src/data/navigation.ts", import.meta.url), "utf8");
  for (const cfg of Object.values(PAGES)) {
    assert.match(
      sitemap,
      new RegExp(`path:\\s*["']/guides/${cfg.slug}["']`),
    );
    assert.match(
      navigation,
      new RegExp(`href:\\s*["']/guides/${cfg.slug}["']`),
    );
  }
  assert.doesNotMatch(sitemap, /sitemap\.xml/);
  assert.match(navigation, /label:\s*"International"/);
  const hub = readFileSync(new URL("../src/app/guides/page.tsx", import.meta.url), "utf8");
  assert.match(hub, /international/);
});

test("No US state-fee totals are hardcoded in the country-guide figures lib", () => {
  const src = readFileSync(
    new URL("../src/lib/countryGuideFigures.ts", import.meta.url),
    "utf8",
  );
  for (const literal of ["2,110", "2110", "1,025", "1025", "2,735", "2735"]) {
    assert.doesNotMatch(
      src,
      new RegExp(literal.replace(",", ",?")),
      `lib hardcodes ${literal}`,
    );
  }
  assert.match(src, /getStateBySlug/);
  assert.match(src, /calculateRecurringStateFees/);
});
