import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { countryGuideFigures } from "../src/lib/countryGuideFigures.ts";

const PAGES = {
  uk: {
    slug: "us-llc-cost-from-uk",
    currency: "GBP",
    title: "US LLC Cost from the UK (2026) — Year-1 & 5-Year Fees in GBP",
    h1: "US LLC Cost from the UK (2026): Official State &amp; Annual Fees in GBP",
    boundary: /consult a qualified UK tax or legal adviser regarding HMRC/,
  },
  canada: {
    slug: "us-llc-cost-from-canada",
    currency: "CAD",
    title: "US LLC Cost from Canada (2026) — Filing & Annual Fees in CAD",
    h1: "US LLC Cost from Canada (2026): Complete Setup &amp; Renewal Fees in CAD",
    boundary: /consult a qualified Canadian tax or legal adviser regarding CRA/,
  },
  australia: {
    slug: "us-llc-cost-from-australia",
    currency: "AUD",
    title: "US LLC Cost from Australia (2026) — Filing Fees in AUD",
    h1: "US LLC Cost from Australia (2026): Year-1 &amp; 5-Year Fees in AUD",
    boundary: /consult a qualified Australian tax or legal adviser regarding ATO/,
  },
};

const BATCH_1_SLUGS = [
  "us-llc-cost-from-ireland",
  "us-llc-cost-from-new-zealand",
  "us-llc-cost-from-netherlands",
  "us-llc-cost-from-germany",
];

function pageSrc(slug) {
  return readFileSync(
    new URL(`../src/app/guides/${slug}/page.tsx`, import.meta.url),
    "utf8",
  );
}

test("Country-guide figures: corrected FX (GBP 0.75 / CAD 1.41 / AUD 1.49), 5-payment 5-year convention, agent-on totals", () => {
  const gbp = countryGuideFigures("GBP");
  assert.equal(gbp.rate, 0.75);
  // Spec rounded figures: WY £214/£769, NM £131/£506, DE £476/£2,051.
  assert.equal(gbp.wyYear1Local, "£213.75");
  assert.equal(gbp.wyFiveYearLocal, "£768.75");
  assert.equal(gbp.nmYear1Local, "£131.25");
  assert.equal(gbp.nmFiveYearLocal, "£506.25");
  assert.equal(gbp.deYear1Local, "£476.25");
  assert.equal(gbp.deFiveYearLocal, "£2,051.25");
  assert.equal(gbp.wyOngoingLocal, "£138.75");
  assert.equal(gbp.nmOngoingLocal, "£93.75");
  assert.equal(gbp.deOngoingLocal, "£393.75");

  const cad = countryGuideFigures("CAD");
  assert.equal(cad.rate, 1.41);
  // Spec rounded figures: WY C$402/C$1,445, NM C$247/C$952, DE C$895/C$3,856.
  assert.equal(cad.wyYear1Local, "CA$401.85");
  assert.equal(cad.wyFiveYearLocal, "CA$1,445.25");
  assert.equal(cad.nmYear1Local, "CA$246.75");
  assert.equal(cad.nmFiveYearLocal, "CA$951.75");
  assert.equal(cad.deYear1Local, "CA$895.35");
  assert.equal(cad.deFiveYearLocal, "CA$3,856.35");

  const aud = countryGuideFigures("AUD");
  assert.equal(aud.rate, 1.49);
  // Spec rounded figures: WY A$425/A$1,527, NM A$261/A$1,006, DE A$946/A$4,075.
  assert.equal(aud.wyYear1Local, "A$424.65");
  assert.equal(aud.wyFiveYearLocal, "A$1,527.25");
  assert.equal(aud.nmYear1Local, "A$260.75");
  assert.equal(aud.nmFiveYearLocal, "A$1,005.75");
  assert.equal(aud.deYear1Local, "A$946.15");
  assert.equal(aud.deFiveYearLocal, "A$4,075.15");

  // Shared USD totals (site conventions) + the 4-payment figures must never appear.
  for (const f of [gbp, cad, aud]) {
    assert.equal(f.wyYear1Usd, "$285");
    assert.equal(f.wyFiveYearUsd, "$1,025");
    assert.equal(f.nmYear1Usd, "$175");
    assert.equal(f.nmFiveYearUsd, "$675");
    assert.equal(f.deYear1Usd, "$635");
    assert.equal(f.deFiveYearUsd, "$2,735");
    assert.equal(f.wyOngoingUsd, "$185");
    assert.equal(f.nmOngoingUsd, "$125");
    assert.equal(f.deOngoingUsd, "$525");
    assert.equal(f.nmFiveYearStateOnly, "$50");
    assert.equal(f.wyFiveYearStateOnly, "$400");
    assert.equal(f.deFiveYearStateOnly, "$2,110");
    assert.equal(f.nmDissolution, "$25");
    assert.equal(f.wyDissolution, "$60");
  }
});

for (const [key, cfg] of Object.entries(PAGES)) {
  test(`${key}: exact title + H1, embedded calculator, FAQ + Breadcrumb schema, comparison table`, () => {
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
    // Dynamic 3-state comparison table (WY vs DE vs NM, Year-1 + 5-year).
    assert.match(src, /<table/);
    assert.match(src, /Wyoming vs Delaware vs New Mexico/);
    assert.match(src, /Year 1 \(with agent\)/);
    assert.match(src, /5 years \(with agent\)/);
    // No tax/legal advice anywhere: the page states the boundary only.
    assert.doesNotMatch(src, /tax advice/i);
  });

  test(`${key}: verified local benchmark figures`, () => {
    const src = pageSrc(cfg.slug);
    if (key === "uk") {
      assert.match(src, /Companies House/);
      assert.match(src, /£100 to incorporate/);
      assert.match(src, /£124 on paper/);
      assert.match(src, /£50 a year for the annual confirmation/);
      assert.match(src, /£13 online or £18 on paper/);
    }
    if (key === "canada") {
      assert.match(src, /Corporations Canada/);
      assert.match(src, /\$200 CAD to incorporate/);
      assert.match(src, /\$12 a year for the annual return/);
      assert.match(src, /\$100 for express service/);
    }
    if (key === "australia") {
      assert.match(src, /ASIC/);
      assert.match(src, /A\$636 to register/);
      assert.match(src, /A\$342 a year for the annual review fee/);
      assert.match(src, /A\$52\n?\s*for voluntary deregistration/);
      assert.match(src, /Form 6010/);
      assert.match(src, /Director ID and an ABN/);
    }
  });

  test(`${key}: required internal links + cross-links to all other country pages`, () => {
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
    for (const slug of BATCH_1_SLUGS) {
      assert.ok(src.includes(`/guides/${slug}`), `missing cross-link to ${slug}`);
    }
  });

  test(`${key}: the 4 custom FAQs are present`, () => {
    const src = pageSrc(cfg.slug);
    const questions = {
      uk: [
        "How much does a Wyoming or Delaware LLC cost per year in GBP?",
        "Do UK residents pay higher US state filing fees than US citizens?",
        "Can I form a US LLC from the UK without visiting the US or having a US address?",
        "How much does it cost to close a US LLC from the UK compared to a UK Ltd strike-off?",
      ],
      canada: [
        "How much is a Wyoming vs. Delaware LLC in CAD over 5 years including agent renewal?",
        "Do Canadian founders need a separate US virtual address on top of a Registered Agent?",
        "Can Canadians obtain a US EIN without a Social Security Number (SSN)?",
        "What is the difference between Foreign Qualification and forming a new US LLC from Canada?",
      ],
      australia: [
        "How much does a Wyoming or New Mexico LLC cost per year in AUD?",
        "Are US state filing fees higher for Australian non-residents?",
        "Can an Australian resident obtain a US EIN without an SSN or ITIN?",
        "How much does it cost to close a US LLC from Australia compared to ASIC deregistration?",
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

test("Canada: the unverified $100–$750 foreign-qualification range is NOT published", () => {
  const src = pageSrc("us-llc-cost-from-canada");
  assert.doesNotMatch(src, /\$100–\$750/);
  assert.doesNotMatch(src, /100–750/);
  // The mechanism is still explained, with a link to the FQ calculator.
  assert.match(src, /Foreign Qualification Cost Calculator/);
  assert.match(src, /\/tools\/foreign-qualification-cost-calculator/);
});

test("All 3 Batch 2 pages are registered in the sitemap and Guides / International navigation", () => {
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
});

test("Batch 1 pages link back to all 3 Batch 2 pages", () => {
  for (const slug of BATCH_1_SLUGS) {
    const src = pageSrc(slug);
    for (const cfg of Object.values(PAGES)) {
      assert.ok(
        src.includes(`/guides/${cfg.slug}`),
        `${slug} missing back-link to ${cfg.slug}`,
      );
    }
  }
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
  assert.match(src, /deOngoingLocal/);
});
