import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import NonResidentCalculator from "@/components/calculators/NonResidentCalculator";
import { FX_RATE_DATE, countryGuideFigures } from "@/lib/countryGuideFigures";

export const metadata: Metadata = {
  title: { absolute: "US LLC Cost from Ireland (2026) — Filing Fees in EUR" },
  description:
    "Forming a US LLC from Ireland? Year-1 and 5-year costs in EUR for Wyoming, Delaware and New Mexico, the CRO €50 benchmark, and agency fees of several hundred euros.",
  alternates: { canonical: "/guides/us-llc-cost-from-ireland" },
  openGraph: {
    title: "US LLC Cost from Ireland (2026) — Filing Fees in EUR",
    description:
      "Forming a US LLC from Ireland? Year-1 and 5-year costs in EUR for Wyoming, Delaware and New Mexico, the CRO €50 benchmark, and agency fees of several hundred euros.",
    type: "website",
    url: "/guides/us-llc-cost-from-ireland",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "US LLC Cost from Ireland (2026) — Filing Fees in EUR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "US LLC Cost from Ireland (2026) — Filing Fees in EUR",
    description:
      "Forming a US LLC from Ireland? Year-1 and 5-year costs in EUR for Wyoming, Delaware and New Mexico, the CRO €50 benchmark, and agency fees of several hundred euros.",
    images: ["/twitter-image"],
  },
};

export default function UsLlcCostFromIrelandPage() {
  const f = countryGuideFigures("EUR");

  const faqs = [
    {
      question: "What does it cost in EUR to keep a US LLC active every year from Ireland?",
      answer: `A Wyoming LLC costs ${f.wyOngoingUsd} (${f.wyOngoingLocal} at the ${FX_RATE_DATE} rate of €${f.rate} per $1) a year to keep active — a ${f.wyAnnualReport} annual report plus a ${f.agentPerYear}-a-year registered agent. A New Mexico LLC costs ${f.nmOngoingUsd} (${f.nmOngoingLocal}) a year, because New Mexico charges no annual report fee and the only recurring cost is the agent. Those are the ongoing costs after year one; the calculator above shows the full Year-1 and 5-year totals.`,
    },
    {
      question: "Why do online LLC packages cost several hundred euros when official US state fees start at $35?",
      answer: `The official state filing fee is ${f.nmFormation} in New Mexico and ${f.wyFormation} in Wyoming — the same whether you file yourself or pay an agency. Agencies add several hundred euros for rush filing, document templates, EIN faxing, and Year-1 registered-agent bundles. The extra money buys services, not a different filing fee. Use the calculator above with the DIY EIN option ($0) to see the no-agency total for your state.`,
    },
    {
      question: "Does a US LLC require an EEA-resident director or €25,000 bond like an Irish company?",
      answer:
        "No. A US LLC has no nationality or residency requirements for its members or managers — an Irish founder can own and run it 100% remotely. That is the key difference from an Irish limited company, which needs an EEA-resident director or, failing that, a Section 137 bond of €25,000. A US LLC only needs a registered agent with a physical address in the formation state.",
    },
    {
      question: "Can an Irish founder dissolve a US LLC remotely, and what are the official fees?",
      answer: `Yes. Dissolution is filed online with the formation state's Secretary of State — no US visit is needed. The official filing fee is ${f.nmDissolution} in New Mexico and ${f.wyDissolution} in Wyoming. Once the filing is approved, the state stops billing future annual fees, so dissolving promptly is what stops the yearly cost. Make sure all annual fees or taxes are paid first, as some states will not accept a dissolution while money is owed.`,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "US LLC Cost from Ireland", item: "/guides/us-llc-cost-from-ireland" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        US LLC Cost from Ireland (2026): Year-1 &amp; Ongoing Fees in EUR
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        An Irish founder can form a US LLC entirely online — no US visit, no
        EEA-resident director, and no minimum share capital. The calculator
        below is pre-loaded with euros and Wyoming, the usual low-cost pick,
        so you can see the Year-1 and 5-year totals in EUR before you choose a
        state.
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
          How this compares with forming a company in Ireland
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          For scale, the Irish Companies Registration Office (CRO) charges
          €50 to incorporate a company online with Form A1, and €25 to reserve
          a company name — the reservation fee is credited if the company is
          filed within 28 days. An Irish company without an EEA-resident
          director must also put up a Section 137 bond of €25,000. A US LLC
          has no equivalent director, bond, or minimum-capital requirement:
          the state filing fee ({f.nmFormation} in New Mexico, {f.wyFormation}{" "}
          in Wyoming) plus a registered agent is the whole formation cost.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The ongoing picture is similar. An Irish company files an annual
          return with the CRO every year; a US LLC in Wyoming pays a{" "}
          {f.wyAnnualReport} annual report plus its agent, while a New Mexico
          LLC pays no annual report fee at all. State fees alone over five
          years are {f.nmFiveYearStateOnly} in New Mexico,{" "}
          {f.wyFiveYearStateOnly} in Wyoming and {f.deFiveYearStateOnly} in
          Delaware (Delaware&apos;s {f.deAnnualTax} yearly tax is the reason it
          costs more).
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
          <li><Link href="/guides/us-llc-cost-from-new-zealand" className="text-[#1769AA] hover:underline">US LLC Cost from New Zealand — fees in NZD</Link></li>
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
        Operational and published registry fees only; consult a qualified Irish tax or legal adviser regarding Revenue and local compliance.
      </p>
    </div>
  );
}
