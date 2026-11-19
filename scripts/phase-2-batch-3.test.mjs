import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { countryGuideFigures } from "../src/lib/countryGuideFigures.ts";

/** Intl formats SGD/AED with a non-breaking space; normalise for asserts. */
const norm = (s) => s.replace(/\u00a0/g, " ");

const PAGES = {
  singapore: {
    slug: "us-llc-cost-from-singapore",
    currency: "SGD",
    title: "US LLC Cost from Singapore (2026) — Filing Fees in SGD",
    h1: "US LLC Cost from Singapore (2026): Official Fees &amp; Renewal Costs in SGD",
    boundary: /consult a qualified Singapore tax or legal adviser regarding IRAS/,
  },
  dubai: {
    slug: "us-llc-cost-from-dubai",
    currency: "AED",
    title: "US LLC Cost from Dubai & UAE (2026) — Fees in AED",
    h1: "US LLC Cost from Dubai &amp; UAE (2026): Complete Fee Breakdown in AED",
    boundary: /consult a qualified UAE or international tax adviser regarding local compliance/,
  },
  india: {
    slug: "us-llc-cost-from-india",
    currency: "INR",
    title: "US LLC Cost from India (2026) — Filing Fees in INR",
    h1: "US LLC Cost from India (2026): Complete Setup &amp; Annual Fees in INR",
    boundary: /consult a qualified Chartered Accountant or legal adviser in India regarding FEMA, ODI/,
  },
};

const VS_UK = {
  slug: "us-llc-vs-uk-ltd-cost",
  currency: "GBP",
  title: "US LLC vs. UK Ltd Cost (2026) — 5-Year Fee Comparison",
  h1: "US LLC vs. UK Ltd Cost (2026): Year-1 &amp; 5-Year Operational Fee Breakdown",
  boundary: /consult a qualified UK\/US cross-border tax adviser before choosing an entity structure/,
};

const EARLIER_SLUGS = [
  "us-llc-cost-from-ireland",
  "us-llc-cost-from-new-zealand",
  "us-llc-cost-from-netherlands",
  "us-llc-cost-from-germany",
  "us-llc-cost-from-uk",
  "us-llc-cost-from-canada",
  "us-llc-cost-from-australia",
];

const BATCH_3_SLUGS = [
  "us-llc-cost-from-singapore",
  "us-llc-cost-from-dubai",
  "us-llc-cost-from-india",
  "us-llc-vs-uk-ltd-cost",
];

function pageSrc(slug) {
  return readFileSync(
    new URL(`../src/app/guides/${slug}/page.tsx`, import.meta.url),
    "utf8",
  );
}

test("Country-guide figures: corrected FX (SGD 1.29 / AED 3.67 / INR 93.50), 5-payment 5-year convention, agent-on totals", () => {
  const sgd = countryGuideFigures("SGD");
  assert.equal(sgd.rate, 1.29);
  // Spec rounded figures: WY S$368/S$1,322, NM S$226/S$871, DE S$819/S$3,528.
  assert.equal(norm(sgd.wyYear1Local), "SGD 367.65");
  assert.equal(norm(sgd.wyFiveYearLocal), "SGD 1,322.25");
  assert.equal(norm(sgd.nmYear1Local), "SGD 225.75");
  assert.equal(norm(sgd.nmFiveYearLocal), "SGD 870.75");
  assert.equal(norm(sgd.deYear1Local), "SGD 819.15");
  assert.equal(norm(sgd.deFiveYearLocal), "SGD 3,528.15");
  assert.equal(norm(sgd.wyOngoingLocal), "SGD 238.65");
  assert.equal(norm(sgd.nmOngoingLocal), "SGD 161.25");
  assert.equal(norm(sgd.deOngoingLocal), "SGD 677.25");

  const aed = countryGuideFigures("AED");
  assert.equal(aed.rate, 3.67);
  // Spec rounded figures: WY 1,046/3,762, NM 642/2,477, DE 2,330/10,038.
  assert.equal(norm(aed.wyYear1Local), "AED 1,045.95");
  assert.equal(norm(aed.wyFiveYearLocal), "AED 3,761.75");
  assert.equal(norm(aed.nmYear1Local), "AED 642.25");
  assert.equal(norm(aed.nmFiveYearLocal), "AED 2,477.25");
  assert.equal(norm(aed.deYear1Local), "AED 2,330.45");
  assert.equal(norm(aed.deFiveYearLocal), "AED 10,037.45");
  assert.equal(norm(aed.wyOngoingLocal), "AED 678.95");
  assert.equal(norm(aed.nmOngoingLocal), "AED 458.75");
  assert.equal(norm(aed.deOngoingLocal), "AED 1,926.75");

  const inr = countryGuideFigures("INR");
  assert.equal(inr.rate, 93.5);
  // Spec rounded figures: WY ₹26,648/₹95,838, NM ₹16,363/₹63,113, DE ₹59,373/₹2,55,723.
  assert.equal(inr.wyYear1Local, "₹26,647.5");
  assert.equal(inr.wyFiveYearLocal, "₹95,837.5");
  assert.equal(inr.nmYear1Local, "₹16,362.5");
  assert.equal(inr.nmFiveYearLocal, "₹63,112.5");
  assert.equal(inr.deYear1Local, "₹59,372.5");
  assert.equal(inr.deFiveYearLocal, "₹255,722.5");
  assert.equal(inr.wyOngoingLocal, "₹17,297.5");
  assert.equal(inr.nmOngoingLocal, "₹11,687.5");
  assert.equal(inr.deOngoingLocal, "₹49,087.5");

  // Shared USD totals (site conventions) + the 4-payment figures must never appear.
  for (const f of [sgd, aed, inr]) {
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
    assert.equal(f.deDissolution, "$220");
  }

  // Dissolution fees converted at GBP 0.75 for the vs-UK-Ltd page:
  // NM $25 → £18.75, WY $60 → £45, DE $220 → £165.
  const gbp = countryGuideFigures("GBP");
  assert.equal(gbp.nmDissolutionLocal, "£18.75");
  assert.equal(gbp.wyDissolutionLocal, "£45");
  assert.equal(gbp.deDissolutionLocal, "£165");
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
    if (key === "singapore") {
      assert.match(src, /ACRA/);
      assert.match(src, /S\$15 for a name application plus S\$300 for/);
      assert.match(src, /S\$315 in total government fees/);
      assert.match(src, /S\$60 a/);
      assert.match(src, /annual return filing/);
      assert.match(src, /S\$300 if filed within 3 months/);
      assert.match(src, /or S\$600/);
    }
    if (key === "dubai") {
      assert.match(src, /Free Zone/);
      assert.match(src, /AED\s+5,500–12,500 a year/);
      assert.match(src, /Meydan from AED 5,500/);
      assert.match(src, /IFZA and RAKEZ from AED 5,750/);
      assert.match(src, /DET Mainland\s+commercial licence starts from AED 12,000/);
      assert.match(src, /Ejari office lease/);
    }
    if (key === "india") {
      assert.match(src, /SPICe\+ government filing fee is ₹0 \(Nil\)/);
      assert.match(src, /authorised capital up to ₹15 lakh/);
      assert.match(src, /₹200–₹12,600/);
      assert.match(src, /₹1,000 name reservation fee/);
      assert.match(src, /Digital Signature Certificate \(DSC\) charges/);
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
    for (const slug of EARLIER_SLUGS) {
      assert.ok(src.includes(`/guides/${slug}`), `missing cross-link to ${slug}`);
    }
    for (const slug of BATCH_3_SLUGS) {
      if (slug === cfg.slug) continue;
      assert.ok(src.includes(`/guides/${slug}`), `missing cross-link to ${slug}`);
    }
  });

  test(`${key}: the 4 custom FAQs are present`, () => {
    const src = pageSrc(cfg.slug);
    const questions = {
      singapore: [
        "How much does a Wyoming or Delaware LLC cost per year in SGD?",
        "Does a US LLC require a locally resident director or company secretary like Singapore?",
        "Are US state filing fees different for Singapore residents?",
        "How much does it cost to dissolve a US LLC from Singapore?",
      ],
      dubai: [
        "What is the total Year-1 and annual renewal cost of a US LLC in AED?",
        "Does a US LLC require an Ejari office lease or annual trade license renewal?",
        "Can UAE residents (expats or citizens) form a US LLC remotely without visiting the US?",
        "How much does an IRS EIN cost for founders in Dubai?",
      ],
      india: [
        "How much does a Wyoming or New Mexico LLC cost per year in INR?",
        "Do Indian founders pay higher US state filing fees than US residents?",
        "Can an Indian resident get a US EIN for ₹0 without an SSN?",
        "What is the difference between a Registered Agent address and a US Virtual Mailbox?",
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

test("vs-UK-Ltd: exact title + H1, GBP calculator, US LLC vs UK Ltd table, 3 FAQs", () => {
  const src = pageSrc(VS_UK.slug);
  assert.ok(src.includes(`title: { absolute: "${VS_UK.title}" }`), "title");
  assert.ok(src.includes(VS_UK.h1), "H1");
  assert.ok(
    src.includes(
      `NonResidentCalculator initialCurrencyCode="GBP" initialStateSlug="wyoming"`,
    ),
    "pre-loaded calculator",
  );
  assert.match(src, /FaqJsonLd faqs=\{faqs\}/);
  assert.match(src, /Breadcrumbs/);
  assert.match(src, /\{faqs\.map\(/);
  assert.match(src, VS_UK.boundary);
  assert.match(src, /<table/);
  assert.match(src, /US LLC vs UK Ltd — Year-1 and 5-year operational fees/);
  // UK Ltd row: verified Companies House figures.
  assert.match(src, /UK Ltd \(Companies House\)/);
  assert.match(src, /£100 \(£124 on paper\)/);
  assert.match(src, /£50 \/ year/);
  assert.match(src, /£100 incorporation plus four £50 confirmation statements/);
  assert.match(src, /confirmation statement is first due in year 2/);
  // Closing costs section: UK strike-off + all three US dissolutions.
  assert.match(src, /£13 online or £18 on paper/);
  assert.match(src, /f\.nmDissolution/);
  assert.match(src, /f\.wyDissolution/);
  assert.match(src, /f\.deDissolution/);
  // Pure operational comparison — no tax/legal advice.
  assert.doesNotMatch(src, /tax advice/i);
  // The 3 custom FAQs are present.
  for (const q of [
    "Is a UK Ltd or a US LLC cheaper to maintain over 5 years in pure filing fees?",
    "Why do UK founders compare Delaware vs. Wyoming against a UK Ltd?",
    "Which entity is cheaper to close if a project stops operating?",
  ]) {
    assert.ok(src.includes(q), `missing FAQ: ${q}`);
  }
  // No US state-fee totals hardcoded.
  for (const literal of ["2,110", "2110", "1,025", "1025", "2,735", "2735"]) {
    assert.doesNotMatch(
      src,
      new RegExp(literal.replace(",", ",?")),
      `page hardcodes ${literal}`,
    );
  }
});

test("vs-UK-Ltd: required internal links + cross-links to all country pages, both ways with the UK guide", () => {
  const src = pageSrc(VS_UK.slug);
  assert.match(src, /\/tools\/non-resident-llc-cost-calculator\?currency=GBP/);
  assert.match(src, /\/guides\/non-resident-llc/);
  assert.match(src, /\/annual-report-requirements-by-state/);
  assert.match(src, /\/llc-cost-by-state\/wyoming/);
  assert.match(src, /\/llc-cost-by-state\/delaware/);
  assert.match(src, /\/llc-cost-by-state\/new-mexico/);
  for (const slug of [...EARLIER_SLUGS, ...BATCH_3_SLUGS]) {
    if (slug === VS_UK.slug) continue;
    assert.ok(src.includes(`/guides/${slug}`), `missing cross-link to ${slug}`);
  }
  // Both-ways link with the UK guide.
  const ukSrc = pageSrc("us-llc-cost-from-uk");
  assert.ok(
    ukSrc.includes(`/guides/${VS_UK.slug}`),
    "UK guide missing link to vs-UK-Ltd page",
  );
});

test("All 4 Batch 3 pages are registered in the sitemap and Guides / International navigation", () => {
  const sitemap = readFileSync(new URL("../src/app/sitemap.ts", import.meta.url), "utf8");
  const navigation = readFileSync(new URL("../src/data/navigation.ts", import.meta.url), "utf8");
  for (const slug of BATCH_3_SLUGS) {
    assert.match(sitemap, new RegExp(`path:\\s*["']/guides/${slug}["']`));
    assert.match(navigation, new RegExp(`href:\\s*["']/guides/${slug}["']`));
  }
  assert.doesNotMatch(sitemap, /sitemap\.xml/);
});

test("Batch 1 + Batch 2 pages link back to all 4 Batch 3 pages", () => {
  for (const slug of EARLIER_SLUGS) {
    const src = pageSrc(slug);
    for (const newSlug of BATCH_3_SLUGS) {
      assert.ok(
        src.includes(`/guides/${newSlug}`),
        `${slug} missing back-link to ${newSlug}`,
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
  assert.match(src, /deDissolution/);
  assert.match(src, /deDissolutionLocal/);
});
