import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import NonResidentCalculator from "@/components/calculators/NonResidentCalculator";
import { FX_RATE_DATE, countryGuideFigures } from "@/lib/countryGuideFigures";

export const metadata: Metadata = {
  title: { absolute: "US LLC Cost from the Netherlands (2026) — Filing Fees in EUR" },
  description:
    "Forming a US LLC from the Netherlands? Year-1 and 5-year costs in EUR for Wyoming, Delaware and New Mexico, the KvK €85.15 benchmark, and a US EIN for €0.",
  alternates: { canonical: "/guides/us-llc-cost-from-netherlands" },
  openGraph: {
    title: "US LLC Cost from the Netherlands (2026) — Filing Fees in EUR",
    description:
      "Forming a US LLC from the Netherlands? Year-1 and 5-year costs in EUR for Wyoming, Delaware and New Mexico, the KvK €85.15 benchmark, and a US EIN for €0.",
    type: "website",
    url: "/guides/us-llc-cost-from-netherlands",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "US LLC Cost from the Netherlands (2026) — Filing Fees in EUR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "US LLC Cost from the Netherlands (2026) — Filing Fees in EUR",
    description:
      "Forming a US LLC from the Netherlands? Year-1 and 5-year costs in EUR for Wyoming, Delaware and New Mexico, the KvK €85.15 benchmark, and a US EIN for €0.",
    images: ["/twitter-image"],
  },
};

export default function UsLlcCostFromNetherlandsPage() {
  const f = countryGuideFigures("EUR");

  const faqs = [
    {
      question: "What is the real annual maintenance cost of a US LLC in Euros?",
      answer: `A Wyoming LLC costs ${f.wyOngoingUsd} (${f.wyOngoingLocal}) a year to keep active — a ${f.wyAnnualReport} annual report plus a ${f.agentPerYear}-a-year registered agent. A New Mexico LLC costs ${f.nmOngoingUsd} (${f.nmOngoingLocal}) a year, because New Mexico charges no annual report fee and the only recurring cost is the agent. Converted figures are estimates at the ${FX_RATE_DATE} rate of €${f.rate} per $1. The Delaware ongoing cost is ${f.deOngoingUsd} a year, driven by its ${f.deAnnualTax} yearly tax.`,
    },
    {
      question: "Which US state has the lowest 5-year EUR running cost for founders in the Netherlands?",
      answer: `New Mexico is the lowest: state fees alone over five years are ${f.nmFiveYearStateOnly} (${f.nmFiveYearLocal} with a ${f.agentPerYear}-a-year agent — ${f.nmFiveYearUsd} in total). Wyoming is second, at ${f.wyFiveYearStateOnly} in state fees over five years (${f.wyFiveYearLocal} with the agent — ${f.wyFiveYearUsd} in total). Delaware is the most expensive of the three at ${f.deFiveYearStateOnly} in state fees, because of its yearly tax. Use the calculator above to compare all three with your own agent cost.`,
    },
    {
      question: "Can a founder in the Netherlands get a US EIN for €0 without paying a formation agency?",
      answer:
        "Yes. The IRS issues EINs for $0 — there is no filing fee. File Form SS-4 by fax or mail and enter “Foreign” on Line 7b where it asks for a Social Security Number; the online EIN application will not work without an SSN or ITIN. Agencies charge $75–$300 to file the same free form for you. Fax processing typically takes about a week.",
    },
    {
      question: "What happens operationally if a Dutch founder misses a US state annual report deadline?",
      answer:
        "The state adds an automatic late fee first — for example, $400 in Florida for a late annual report — and the LLC becomes delinquent. If the report stays unfiled, the state eventually dissolves the LLC administratively, which means it can no longer legally operate. Getting it back requires a reinstatement filing plus the reinstatement fee and all back-owed reports. Set a calendar reminder for the report deadline in your formation state.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "US LLC Cost from the Netherlands", item: "/guides/us-llc-cost-from-netherlands" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        US LLC Cost from the Netherlands (2026): Complete Fee Breakdown in EUR
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        A founder in the Netherlands can form a US LLC entirely online — no US
        visit, no local director, and no minimum share capital. The calculator
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
          How this compares with registering in the Netherlands
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          For scale, the Dutch Chamber of Commerce (KvK) charges a one-off
          registration fee of €85.15 (2026) to register a business, and there
          is no annual KvK fee. A US LLC is in the same range to set up — the
          state filing fee is {f.nmFormation} in New Mexico and{" "}
          {f.wyFormation} in Wyoming — but the ongoing cost is different: a US
          LLC needs a registered agent every year ({f.agentPerYear} in the
          calculator), while a KvK registration has no yearly renewal fee.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          State fees alone over five years are {f.nmFiveYearStateOnly} in New
          Mexico, {f.wyFiveYearStateOnly} in Wyoming and{" "}
          {f.deFiveYearStateOnly} in Delaware. The agent is what makes the
          five-year totals higher than the state fees alone — and it is the
          one recurring service a Dutch founder cannot skip, because a foreign
          address does not qualify as a registered agent address.
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
          <li><Link href="/guides/us-llc-cost-from-germany" className="text-[#1769AA] hover:underline">US LLC Cost from Germany — fees in EUR</Link></li>
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
        Operational and published registry fees only; consult a qualified Dutch tax or legal adviser regarding Belastingdienst and local compliance.
      </p>
    </div>
  );
}
