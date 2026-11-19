import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import NonResidentCalculator from "@/components/calculators/NonResidentCalculator";
import { FX_RATE_DATE, countryGuideFigures } from "@/lib/countryGuideFigures";

export const metadata: Metadata = {
  title: { absolute: "US LLC Cost from Germany (2026) — Filing Fees in EUR" },
  description:
    "Forming a US LLC from Germany? Year-1 and 5-year costs in EUR for Wyoming, Delaware and New Mexico, the German UG/GmbH benchmark, and a US EIN for €0.",
  alternates: { canonical: "/guides/us-llc-cost-from-germany" },
  openGraph: {
    title: "US LLC Cost from Germany (2026) — Filing Fees in EUR",
    description:
      "Forming a US LLC from Germany? Year-1 and 5-year costs in EUR for Wyoming, Delaware and New Mexico, the German UG/GmbH benchmark, and a US EIN for €0.",
    type: "website",
    url: "/guides/us-llc-cost-from-germany",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "US LLC Cost from Germany (2026) — Filing Fees in EUR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "US LLC Cost from Germany (2026) — Filing Fees in EUR",
    description:
      "Forming a US LLC from Germany? Year-1 and 5-year costs in EUR for Wyoming, Delaware and New Mexico, the German UG/GmbH benchmark, and a US EIN for €0.",
    images: ["/twitter-image"],
  },
};

export default function UsLlcCostFromGermanyPage() {
  const f = countryGuideFigures("EUR");

  const faqs = [
    {
      question: "What are the exact ongoing US LLC fees in EUR for founders living in Germany?",
      answer: `A Wyoming LLC costs ${f.wyOngoingUsd} (${f.wyOngoingLocal}) a year to keep active — a ${f.wyAnnualReport} annual report plus a ${f.agentPerYear}-a-year registered agent. A New Mexico LLC costs ${f.nmOngoingUsd} (${f.nmOngoingLocal}) a year, because New Mexico charges no annual report fee and the only recurring cost is the agent. Converted figures are estimates at the ${FX_RATE_DATE} rate of €${f.rate} per $1. The Delaware ongoing cost is ${f.deOngoingUsd} a year, driven by its ${f.deAnnualTax} yearly tax.`,
    },
    {
      question: "Does forming a US LLC require a notary appointment or minimum share capital like a GmbH?",
      answer:
        "No. A US LLC has $0 minimum share capital and is filed online directly with the Secretary of State — there is no notary appointment, no articles of association to notarise, and no Handelsregister entry to pay for. Compare that with a German UG or GmbH, where the notary alone costs roughly €105–€165 for a UG template deed and €276–€720 including VAT for a GmbH, before the €225 Handelsregister entry.",
    },
    {
      question: "Which US states have no annual report to file at all, and what operational costs still apply?",
      answer: `Several states charge no annual report fee for LLCs: ${f.zeroReportStates}. New Mexico is the usual pick of the group — its state fees over five years are ${f.nmFiveYearStateOnly} in total. Founders still budget for a commercial registered agent, typically $99–$150 a year (${f.agentPerYear} in the calculator above), because a foreign address does not qualify. See the full list on the annual report requirements page.`,
    },
    {
      question: "Can a founder in Germany get a US EIN for €0 without paying a formation agency?",
      answer:
        "Yes. The IRS issues EINs for $0 — there is no filing fee. File Form SS-4 by fax or mail and enter “Foreign” on Line 7b where it asks for a Social Security Number; the online EIN application will not work without an SSN or ITIN. Agencies charge $75–$300 to file the same free form for you. Fax processing typically takes about a week.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "US LLC Cost from Germany", item: "/guides/us-llc-cost-from-germany" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        US LLC Cost from Germany (2026): Setup &amp; Annual Fees in EUR
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        A founder in Germany can form a US LLC entirely online — no US visit,
        no notary appointment, and no minimum share capital. The calculator
        below is pre-loaded with euros and Wyoming, the usual low-cost pick,
        so you can see the Year-1 and 5-year totals in EUR before you choose
        a state.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        At a glance, with a {f.agentPerYear}-a-year registered agent: Wyoming
        costs {f.wyYear1Usd} ({f.wyYear1Local}) in year one and{" "}
        {f.wyFiveYearUsd} ({f.wyFiveYearLocal}) over five years; New Mexico
        costs {f.nmYear1Usd} ({f.nmYear1Local}) in year one and{" "}
        {f.nmFiveYearUsd} ({f.nmFiveYearLocal}) over five years; Delaware costs{" "}
        {f.deYear1Usd} ({f.deYear1Local}) in year one and {f.deFiveYearUsd} (
        {f.deFiveYearLocal}) over five years. Converted figures are estimates
        at the {FX_RATE_DATE} rate of €{f.rate} per $1 — change the rate in
        the calculator to match your bank or card provider.
      </p>

      <div className="mt-10">
        <NonResidentCalculator initialCurrencyCode="EUR" initialStateSlug="wyoming" />
      </div>

      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        Prefer the full tool? Open the{" "}
        <Link href="/tools/non-resident-llc-cost-calculator?currency=EUR" className="text-[#1769AA] hover:underline">
          Non-Resident LLC Cost Calculator in EUR
        </Link>{" "}
        or read the general{" "}
        <Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">
          non-resident LLC guide
        </Link>
        .
      </p>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          How this compares with a German UG or GmbH
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          For scale, forming a German UG or GmbH starts with a Handelsregister
          entry of €225 (about €300 all-in including online publication, or
          €360 if the contribution is in kind), plus a Gewerbeanmeldung of
          €15–€60. The notary costs roughly €105–€165 for a UG template deed
          and €276–€720 including VAT for a GmbH. A US LLC needs no notary and
          has $0 minimum share capital — the state filing fee is{" "}
          {f.nmFormation} in New Mexico and {f.wyFormation} in Wyoming, plus
          a registered agent.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          State fees alone over five years are {f.nmFiveYearStateOnly} in New
          Mexico, {f.wyFiveYearStateOnly} in Wyoming and{" "}
          {f.deFiveYearStateOnly} in Delaware. The registered agent (
          {f.agentPerYear} a year in the calculator) is the one recurring
          service cost a German founder cannot skip, because a foreign address
          does not qualify as a registered agent address.
        </p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Frequently asked questions</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer list-none font-semibold text-[#102A43]">
                <span className="flex items-center justify-between">
                  {faq.question}
                  <span className="ml-4 text-slate-400 transition group-open:rotate-180">▼</span>
                </span>
              </summary>
              <p className="mt-3 text-slate-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-12 max-w-3xl rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Related guides &amp; tools</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/tools/non-resident-llc-cost-calculator?currency=EUR" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator — in EUR</Link></li>
          <li><Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">Non-Resident LLC Guide — Can a Non-Resident Form an LLC in the USA?</Link></li>
          <li><Link href="/annual-report-requirements-by-state" className="text-[#1769AA] hover:underline">Annual Report Requirements by State</Link></li>
          <li><Link href="/llc-cost-by-state/wyoming" className="text-[#1769AA] hover:underline">Wyoming LLC Cost — formation &amp; annual report fees</Link></li>
          <li><Link href="/llc-cost-by-state/delaware" className="text-[#1769AA] hover:underline">Delaware LLC Cost — formation &amp; annual tax</Link></li>
          <li><Link href="/llc-cost-by-state/new-mexico" className="text-[#1769AA] hover:underline">New Mexico LLC Cost — formation &amp; $0 annual report</Link></li>
          <li><Link href="/guides/us-llc-cost-from-ireland" className="text-[#1769AA] hover:underline">US LLC Cost from Ireland — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-new-zealand" className="text-[#1769AA] hover:underline">US LLC Cost from New Zealand — fees in NZD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-netherlands" className="text-[#1769AA] hover:underline">US LLC Cost from the Netherlands — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-uk" className="text-[#1769AA] hover:underline">US LLC Cost from the UK — fees in GBP</Link></li>
          <li><Link href="/guides/us-llc-cost-from-canada" className="text-[#1769AA] hover:underline">US LLC Cost from Canada — fees in CAD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-australia" className="text-[#1769AA] hover:underline">US LLC Cost from Australia — fees in AUD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-singapore" className="text-[#1769AA] hover:underline">US LLC Cost from Singapore — fees in SGD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-dubai" className="text-[#1769AA] hover:underline">US LLC Cost from Dubai &amp; UAE — fees in AED</Link></li>
          <li><Link href="/guides/us-llc-cost-from-india" className="text-[#1769AA] hover:underline">US LLC Cost from India — fees in INR</Link></li>
          <li><Link href="/guides/us-llc-vs-uk-ltd-cost" className="text-[#1769AA] hover:underline">US LLC vs. UK Ltd Cost — 5-year operational fee comparison</Link></li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Operational and published registry fees only; consult a qualified German Steuerberater or legal adviser regarding local tax and compliance rules.
      </p>
    </div>
  );
}
