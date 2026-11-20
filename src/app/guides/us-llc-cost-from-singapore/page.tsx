import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import ArticleJsonLd from "@/components/seo/ArticleJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import NonResidentCalculator from "@/components/calculators/NonResidentCalculator";
import { FX_RATE_DATE, countryGuideFigures } from "@/lib/countryGuideFigures";

export const metadata: Metadata = {
  title: { absolute: "US LLC Cost from Singapore (2026) — Filing Fees in SGD" },
  description:
    "Forming a US LLC from Singapore? Year-1 and 5-year costs in SGD for Wyoming, Delaware and New Mexico, the ACRA S$315 benchmark, and US LLC dissolution costs.",
  alternates: { canonical: "/guides/us-llc-cost-from-singapore" },
  openGraph: {
    title: "US LLC Cost from Singapore (2026) — Filing Fees in SGD",
    description:
      "Forming a US LLC from Singapore? Year-1 and 5-year costs in SGD for Wyoming, Delaware and New Mexico, the ACRA S$315 benchmark, and US LLC dissolution costs.",
    type: "website",
    url: "/guides/us-llc-cost-from-singapore",
  },
  twitter: {
    card: "summary_large_image",
    title: "US LLC Cost from Singapore (2026) — Filing Fees in SGD",
    description:
      "Forming a US LLC from Singapore? Year-1 and 5-year costs in SGD for Wyoming, Delaware and New Mexico, the ACRA S$315 benchmark, and US LLC dissolution costs.",
  },
};

export default function UsLlcCostFromSingaporePage() {
  const f = countryGuideFigures("SGD");

  const faqs = [
    {
      question: "What is the yearly bill for a Wyoming or Delaware LLC in SGD?",
      answer: `Take the five-year view first: Wyoming is ${f.wyFiveYearUsd} (${f.wyFiveYearLocal}) and Delaware is ${f.deFiveYearUsd} (${f.deFiveYearLocal}), agent included at ${f.agentPerYear} a year. Year one is ${f.wyYear1Usd} (${f.wyYear1Local}) for Wyoming and ${f.deYear1Usd} (${f.deYear1Local}) for Delaware; after that the yearly cost is ${f.wyOngoingUsd} (${f.wyOngoingLocal}) and ${f.deOngoingUsd} (${f.deOngoingLocal}). Converted figures are estimates at the ${FX_RATE_DATE} rate of ${f.rate} SGD per $1.`,
    },
    {
      question: "Does a US LLC need a resident director or company secretary like a Singapore company?",
      answer: `No. A US LLC has no director-residency rule and no company secretary requirement. The only mandatory local presence is a commercial registered agent ($99–$150 a year), who provides the in-state street address the formation state requires for official notices. Members and managers can all be based in Singapore.`,
    },
    {
      question: "Are US state fees different for Singapore residents?",
      answer: `No. The state fee schedule makes no distinction by residency — a Singapore founder pays the same filing and renewal fees as a US citizen in the same state. The only additional cost is the commercial registered agent, because a foreign address does not qualify as a registered office.`,
    },
    {
      question: "How much does it cost to dissolve a US LLC from Singapore?",
      answer: `Dissolution filing fees are ${f.nmDissolution} in New Mexico and ${f.wyDissolution} in Wyoming — well under $100 — plus any final annual report or tax that is still due. Once the dissolution is processed, future annual renewal obligations stop. The filing itself is done online with the formation state’s Secretary of State, with no US visit needed.`,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <ArticleJsonLd
        headline="US LLC Cost from Singapore (2026) — Filing Fees in SGD"
        description="Forming a US LLC from Singapore? Year-1 and 5-year costs in SGD for Wyoming, Delaware and New Mexico, the ACRA S$315 benchmark, and US LLC dissolution costs."
        datePublished="2026-11-19"
        dateModified="2026-11-20"
        url="https://www.getllccostcalculator.com/guides/us-llc-cost-from-singapore"
      />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "US LLC Cost from Singapore", item: "/guides/us-llc-cost-from-singapore" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        US LLC Cost from Singapore (2026): Official Fees &amp; Renewal Costs in SGD
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        Incorporating in Singapore means ACRA, a locally resident director, and a company secretary — S$315 in government fees before any of that. A US LLC needs none of those three: no resident director, no secretary, no name-application step. The calculator below is pre-loaded in Singapore dollars with Wyoming, so Year-1 and 5-year totals are in SGD.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        The five-year totals, agent included, are {f.wyFiveYearUsd} ({f.wyFiveYearLocal}) for Wyoming, {f.nmFiveYearUsd} ({f.nmFiveYearLocal}) for New Mexico and {f.deFiveYearUsd} ({f.deFiveYearLocal}) for Delaware. Year one is {f.wyYear1Usd} ({f.wyYear1Local}), {f.nmYear1Usd} ({f.nmYear1Local}) and {f.deYear1Usd} ({f.deYear1Local}); after that Wyoming costs {f.wyOngoingUsd} ({f.wyOngoingLocal}) a year and New Mexico {f.nmOngoingUsd} ({f.nmOngoingLocal}). Converted at the {FX_RATE_DATE} rate of {f.rate} SGD per $1 — the calculator lets you overwrite the rate.
      </p>

      <div className="mt-10">
        <NonResidentCalculator initialCurrencyCode="SGD" initialStateSlug="wyoming" />
      </div>

      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        Open the full <Link href="/tools/non-resident-llc-cost-calculator?currency=SGD" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator in SGD</Link> for every state, with the agent price, exchange rate and EIN option all adjustable. The general <Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">non-resident LLC guide</Link> covers the filing steps in order.
      </p>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Wyoming vs Delaware vs New Mexico — Year-1 and 5-year costs in SGD
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
        The table below puts the US side in one place: formation fee, yearly state charge, and the year-one and five-year totals once the agent is counted in. Five-year totals count five recurring payments — the convention this site uses on every page.
      </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-3 font-semibold">State</th>
                <th className="py-2 pr-3 font-semibold">Formation fee</th>
                <th className="py-2 pr-3 font-semibold">Ongoing / year</th>
                <th className="py-2 pr-3 font-semibold">Year 1 (with agent)</th>
                <th className="py-2 font-semibold">5 years (with agent)</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Wyoming</td>
                <td className="py-2 pr-3">{f.wyFormation}</td>
                <td className="py-2 pr-3">{f.wyOngoingUsd} ({f.wyOngoingLocal})</td>
                <td className="py-2 pr-3">{f.wyYear1Usd} ({f.wyYear1Local})</td>
                <td className="py-2">{f.wyFiveYearUsd} ({f.wyFiveYearLocal})</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Delaware</td>
                <td className="py-2 pr-3">{f.deFormation}</td>
                <td className="py-2 pr-3">{f.deOngoingUsd} ({f.deOngoingLocal})</td>
                <td className="py-2 pr-3">{f.deYear1Usd} ({f.deYear1Local})</td>
                <td className="py-2">{f.deFiveYearUsd} ({f.deFiveYearLocal})</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-semibold text-[#102A43]">New Mexico</td>
                <td className="py-2 pr-3">{f.nmFormation}</td>
                <td className="py-2 pr-3">{f.nmOngoingUsd} ({f.nmOngoingLocal})</td>
                <td className="py-2 pr-3">{f.nmYear1Usd} ({f.nmYear1Local})</td>
                <td className="py-2">{f.nmFiveYearUsd} ({f.nmFiveYearLocal})</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-slate-500">
        Strip out the agent and the state-only five-year totals are {f.nmFiveYearStateOnly} in New Mexico, {f.wyFiveYearStateOnly} in Wyoming and {f.deFiveYearStateOnly} in Delaware. Delaware&apos;s {f.deAnnualTax} yearly tax is the reason its row is the most expensive.
      </p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          How this compares with incorporating in Singapore
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          For scale, ACRA charges S$15 for a name application plus S$300 for
          company registration — S$315 in total government fees — and S$60 a
          year for the annual return filing. A late annual return carries a
          penalty of S$300 if filed within 3 months of the due date, or S$600
          after that. A US LLC has no name-application step and no equivalent annual-return penalty regime. Formation is the state fee on its own — {f.nmFormation} in New Mexico, {f.wyFormation} in Wyoming — with a registered agent on top, and a New Mexico LLC has no annual report to pay at all.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
        The structural difference is the local-officer rules. A Singapore company needs at least one locally resident director and a company secretary; a US LLC needs neither — only the registered agent ({f.agentPerYear} a year in the calculator), because a foreign address does not qualify as a registered office.
      </p>
      </section>

            <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          The annual return you do not file
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          A Singapore company files a S$60 annual return with ACRA every year, and a late one carries a penalty of S$300 if filed within three months of the due date, or S$600 after that. The US side is thinner: a Wyoming LLC files a {f.wyAnnualReport} annual report and a New Mexico LLC files no annual report at all. The only yearly US line that never goes away is the registered agent — and a missed report can still bring a late fee, so the deadline is worth a calendar reminder.
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
          <li><Link href="/tools/non-resident-llc-cost-calculator?currency=SGD" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator — in SGD</Link></li>
          <li><Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">Non-Resident LLC Guide — Can a Non-Resident Form an LLC in the USA?</Link></li>
          <li><Link href="/annual-report-requirements-by-state" className="text-[#1769AA] hover:underline">Annual Report Requirements by State</Link></li>
          <li><Link href="/llc-cost-by-state/wyoming" className="text-[#1769AA] hover:underline">Wyoming LLC Cost — formation &amp; annual report fees</Link></li>
          <li><Link href="/llc-cost-by-state/delaware" className="text-[#1769AA] hover:underline">Delaware LLC Cost — formation &amp; annual tax</Link></li>
          <li><Link href="/llc-cost-by-state/new-mexico" className="text-[#1769AA] hover:underline">New Mexico LLC Cost — formation &amp; $0 annual report</Link></li>
          <li><Link href="/guides/us-llc-cost-from-ireland" className="text-[#1769AA] hover:underline">US LLC Cost from Ireland — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-new-zealand" className="text-[#1769AA] hover:underline">US LLC Cost from New Zealand — fees in NZD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-netherlands" className="text-[#1769AA] hover:underline">US LLC Cost from the Netherlands — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-germany" className="text-[#1769AA] hover:underline">US LLC Cost from Germany — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-uk" className="text-[#1769AA] hover:underline">US LLC Cost from the UK — fees in GBP</Link></li>
          <li><Link href="/guides/us-llc-cost-from-canada" className="text-[#1769AA] hover:underline">US LLC Cost from Canada — fees in CAD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-australia" className="text-[#1769AA] hover:underline">US LLC Cost from Australia — fees in AUD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-dubai" className="text-[#1769AA] hover:underline">US LLC Cost from Dubai &amp; UAE — fees in AED</Link></li>
          <li><Link href="/guides/us-llc-cost-from-india" className="text-[#1769AA] hover:underline">US LLC Cost from India — fees in INR</Link></li>
          <li><Link href="/guides/us-llc-vs-uk-ltd-cost" className="text-[#1769AA] hover:underline">US LLC vs. UK Ltd Cost — 5-year operational fee comparison</Link></li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Operational and published registry fees only; consult a qualified Singapore tax or legal adviser regarding IRAS and cross-border compliance.
      </p>
    </div>
  );
}
