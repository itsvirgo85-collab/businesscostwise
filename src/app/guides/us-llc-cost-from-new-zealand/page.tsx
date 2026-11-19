import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import NonResidentCalculator from "@/components/calculators/NonResidentCalculator";
import { FX_RATE_DATE, countryGuideFigures } from "@/lib/countryGuideFigures";

export const metadata: Metadata = {
  title: { absolute: "US LLC Cost from New Zealand (2026) — Official Fees in NZD" },
  description:
    "Forming a US LLC from New Zealand? Year-1 and 5-year costs in NZD for Wyoming, Delaware and New Mexico, the NZ$118.74 benchmark, and agency fees in the hundreds.",
  alternates: { canonical: "/guides/us-llc-cost-from-new-zealand" },
  openGraph: {
    title: "US LLC Cost from New Zealand (2026) — Official Fees in NZD",
    description:
      "Forming a US LLC from New Zealand? Year-1 and 5-year costs in NZD for Wyoming, Delaware and New Mexico, the NZ$118.74 benchmark, and agency fees in the hundreds.",
    type: "website",
    url: "/guides/us-llc-cost-from-new-zealand",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "US LLC Cost from New Zealand (2026) — Official Fees in NZD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "US LLC Cost from New Zealand (2026) — Official Fees in NZD",
    description:
      "Forming a US LLC from New Zealand? Year-1 and 5-year costs in NZD for Wyoming, Delaware and New Mexico, the NZ$118.74 benchmark, and agency fees in the hundreds.",
    images: ["/twitter-image"],
  },
};

export default function UsLlcCostFromNewZealandPage() {
  const f = countryGuideFigures("NZD");

  const faqs = [
    {
      question: "What is the Year-1 and annual renewal cost of a US LLC in NZD?",
      answer: `A Wyoming LLC costs ${f.wyYear1Usd} (${f.wyYear1Local}) in year one and ${f.wyOngoingUsd} (${f.wyOngoingLocal}) a year after that, with a ${f.agentPerYear}-a-year registered agent. A New Mexico LLC costs ${f.nmYear1Usd} (${f.nmYear1Local}) in year one and ${f.nmOngoingUsd} (${f.nmOngoingLocal}) a year after that. Over five years the totals are ${f.wyFiveYearUsd} (${f.wyFiveYearLocal}) for Wyoming and ${f.nmFiveYearUsd} (${f.nmFiveYearLocal}) for New Mexico. Converted figures are estimates at the ${FX_RATE_DATE} rate of NZ$${f.rate} per $1.`,
    },
    {
      question: "Does a US LLC require a New Zealand or Australian resident director?",
      answer:
        "No. A US LLC can be 100% owned and managed remotely — there is no nationality or residency requirement for members or managers. That is the key difference from a New Zealand company, which must have at least one director who lives in New Zealand or Australia. A US LLC only needs a registered agent with a physical address in the formation state.",
    },
    {
      question: "Why do formation websites charge several hundred New Zealand dollars when state filing fees start at $35 USD?",
      answer: `The official state filing fee is ${f.nmFormation} in New Mexico and ${f.wyFormation} in Wyoming — the same whether you file yourself or pay an agency. Agencies add several hundred New Zealand dollars for rush filing, document templates, EIN faxing, and Year-1 registered-agent bundles. The extra money buys services, not a different filing fee. Use the calculator above with the DIY EIN option ($0) to see the no-agency total for your state.`,
    },
    {
      question: "What happens operationally if a New Zealand founder misses a US annual report deadline?",
      answer:
        "The state adds a late penalty first — for example, $400 in Florida for a late annual report — and the LLC becomes delinquent. If the report stays unfiled, the state eventually dissolves the LLC administratively, which means it can no longer legally operate. Getting it back requires a reinstatement filing plus the reinstatement fee and all back-owed reports. Set a calendar reminder for the report deadline in your formation state.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "US LLC Cost from New Zealand", item: "/guides/us-llc-cost-from-new-zealand" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        US LLC Cost from New Zealand (2026): Complete Fee Breakdown in NZD
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        A New Zealand founder can form a US LLC entirely online — no US visit,
        no local director, and no minimum share capital. The calculator below
        is pre-loaded with New Zealand dollars and Wyoming, the usual
        low-cost pick, so you can see the Year-1 and 5-year totals in NZD
        before you choose a state.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        At a glance, with a {f.agentPerYear}-a-year registered agent: Wyoming
        costs {f.wyYear1Usd} ({f.wyYear1Local}) in year one and{" "}
        {f.wyFiveYearUsd} ({f.wyFiveYearLocal}) over five years; New Mexico
        costs {f.nmYear1Usd} ({f.nmYear1Local}) in year one and{" "}
        {f.nmFiveYearUsd} ({f.nmFiveYearLocal}) over five years; Delaware costs{" "}
        {f.deYear1Usd} ({f.deYear1Local}) in year one and {f.deFiveYearUsd} (
        {f.deFiveYearLocal}) over five years. Converted figures are estimates
        at the {FX_RATE_DATE} rate of NZ${f.rate} per $1 — change the rate in
        the calculator to match your bank or card provider.
      </p>

      <div className="mt-10">
        <NonResidentCalculator initialCurrencyCode="NZD" initialStateSlug="wyoming" />
      </div>

      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        Prefer the full tool? Open the{" "}
        <Link href="/tools/non-resident-llc-cost-calculator?currency=NZD" className="text-[#1769AA] hover:underline">
          Non-Resident LLC Cost Calculator in NZD
        </Link>{" "}
        or read the general{" "}
        <Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">
          non-resident LLC guide
        </Link>
        .
      </p>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          How this compares with forming a company in New Zealand
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          For scale, the New Zealand Companies Office charges NZ$118.74 plus
          GST to incorporate a company (NZ$136.55 including GST), NZ$10 plus
          GST to reserve a company name (NZ$11.50 including GST), and NZ$49.74
          plus GST a year for the annual return (NZ$57.20 including GST).
          MBIE reviewed these fees in 2025, but no new amounts had been
          published as of November 2026 — check the Companies Office schedule
          of fees on the day you file, in case it has moved.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          A US LLC is cheaper on the state-fee side and has no resident
          director requirement. State fees alone over five years are{" "}
          {f.nmFiveYearStateOnly} in New Mexico, {f.wyFiveYearStateOnly} in
          Wyoming and {f.deFiveYearStateOnly} in Delaware, before the
          registered agent. The agent ({f.agentPerYear} a year in the
          calculator) is the one recurring service cost a New Zealand founder
          cannot skip, because a foreign address does not qualify.
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
          <li><Link href="/tools/non-resident-llc-cost-calculator?currency=NZD" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator — in NZD</Link></li>
          <li><Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">Non-Resident LLC Guide — Can a Non-Resident Form an LLC in the USA?</Link></li>
          <li><Link href="/annual-report-requirements-by-state" className="text-[#1769AA] hover:underline">Annual Report Requirements by State</Link></li>
          <li><Link href="/llc-cost-by-state/wyoming" className="text-[#1769AA] hover:underline">Wyoming LLC Cost — formation &amp; annual report fees</Link></li>
          <li><Link href="/llc-cost-by-state/delaware" className="text-[#1769AA] hover:underline">Delaware LLC Cost — formation &amp; annual tax</Link></li>
          <li><Link href="/llc-cost-by-state/new-mexico" className="text-[#1769AA] hover:underline">New Mexico LLC Cost — formation &amp; $0 annual report</Link></li>
          <li><Link href="/guides/us-llc-cost-from-ireland" className="text-[#1769AA] hover:underline">US LLC Cost from Ireland — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-netherlands" className="text-[#1769AA] hover:underline">US LLC Cost from the Netherlands — fees in EUR</Link></li>
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
        Operational and published registry fees only; consult a qualified New Zealand tax or legal adviser regarding IRD and cross-border compliance.
      </p>
    </div>
  );
}
