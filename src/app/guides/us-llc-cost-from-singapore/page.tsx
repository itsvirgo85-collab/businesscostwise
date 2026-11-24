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
    {
      question: "How do I form US LLC from Singapore?",
      answer: `File online in Wyoming, New Mexico or Delaware — no US visit, no US address and no minimum capital are needed. Appoint a registered agent, file the Articles of Organization (${f.nmFormation} in New Mexico, ${f.wyFormation} in Wyoming), then get your EIN free from the IRS by faxing Form SS-4. No resident director or company secretary is needed.`,
    },
    {
      question: "What is the US LLC cost from Singapore?",
      answer: `In Singapore dollars, year one with the agent is ${f.nmYear1Usd} (${f.nmYear1Local}) in New Mexico, ${f.wyYear1Usd} (${f.wyYear1Local}) in Wyoming and ${f.deYear1Usd} (${f.deYear1Local}) in Delaware. After that the yearly cost is ${f.nmOngoingUsd} (${f.nmOngoingLocal}), ${f.wyOngoingUsd} (${f.wyOngoingLocal}) and ${f.deOngoingUsd} (${f.deOngoingLocal}) — Delaware is dearest because of its {f.deAnnualTax} annual tax.`,
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
        Year one, agent included, is {f.wyYear1Usd} ({f.wyYear1Local}) for Wyoming, {f.nmYear1Usd} ({f.nmYear1Local}) for New Mexico and {f.deYear1Usd} ({f.deYear1Local}) for Delaware. Five years out those become {f.wyFiveYearUsd} ({f.wyFiveYearLocal}), {f.nmFiveYearUsd} ({f.nmFiveYearLocal}) and {f.deFiveYearUsd} ({f.deFiveYearLocal}); after that Wyoming costs {f.wyOngoingUsd} ({f.wyOngoingLocal}) a year and New Mexico {f.nmOngoingUsd} ({f.nmOngoingLocal}). Converted at the {FX_RATE_DATE} rate of {f.rate} SGD per $1 — the calculator lets you overwrite the rate.
      </p>

      <div className="mt-10">
        <NonResidentCalculator initialCurrencyCode="SGD" initialStateSlug="wyoming"
          compact
          heading="Price it in Singapore dollars — Wyoming first"
          intro="Wyoming is the starting point below. Switch to New Mexico in the buttons to see the state that files no annual return at all — the agent is its only yearly line — or to Delaware to compare."
          stateNote="The three states priced here are Wyoming, New Mexico and Delaware; the full calculator covers all fifty."
          currencyNote={`Default rate ${f.rate} SGD per $1, as of ${FX_RATE_DATE} (Bank of England spot rates and Federal Reserve H.10). Converted figures are estimates — the calculator lets you overwrite the rate.`}
          einNote="An EIN costs $0 from the IRS: file Form SS-4 by fax or mail, writing “Foreign” on Line 7b if you have no SSN. The online application needs an SSN or ITIN."
          agentHint="Typical range: $99–$199 per year. The calculator's default is $125."
          excludesBody="Taxes, bank fees, operating-agreement drafting and professional advice are not included. This tool shows operational and published state filing fees only — consult a qualified Singapore tax or legal adviser regarding IRAS and cross-border compliance, as the disclaimer below notes."
          resultNote={`Converted at ${f.rate} SGD per $1 (${FX_RATE_DATE}). State fees are from verified state data; dollar figures are estimates.`}
          fiveYearNote="Five recurring payments over five years, plus formation and one-time items. Wyoming's yearly line is its $60 annual report plus the agent; New Mexico's is the agent alone."
          scenarioTitle="Formation fee and yearly bill, state by state — in SGD"
          scenarioIntro="Same settings as above. The ongoing column is the bill that repeats every year — annual tax plus agent in Delaware, annual report plus agent in Wyoming, agent alone in New Mexico."
          scenarioVariant="formation"
          scenarioFootnote={`Five-year totals count five recurring payments (formation plus five annual charges). At the defaults above — $125-a-year agent, no mailbox, DIY EIN — five years in Wyoming are ${f.wyFiveYearLocal}.`}
        />
      </div>

      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        The calculator above covers Wyoming, Delaware and New Mexico in SGD. Open the full <Link href="/tools/non-resident-llc-cost-calculator?currency=SGD" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator in SGD</Link> for every state, with the agent price, exchange rate and EIN option all adjustable. The general <Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">non-resident LLC guide</Link> covers the filing steps in order.
      </p>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Wyoming vs Delaware vs New Mexico — Year 1, 5 years and the cost of closing, in SGD
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
        This table answers the two questions Singapore founders ask most: what the LLC costs to run, and what it costs to close. Formation and ongoing lines are in the calculator above.
      </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-3 font-semibold">State</th>
                <th className="py-2 pr-3 font-semibold">Year 1 (with agent)</th>
                <th className="py-2 pr-3 font-semibold">5 years (with agent)</th>
                <th className="py-2 font-semibold">Dissolution filing fee</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Wyoming</td>
                <td className="py-2 pr-3">{f.wyYear1Usd} ({f.wyYear1Local})</td>
                <td className="py-2 pr-3">{f.wyFiveYearUsd} ({f.wyFiveYearLocal})</td>
                <td className="py-2">{f.wyDissolution} ({f.wyDissolutionLocal})</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Delaware</td>
                <td className="py-2 pr-3">{f.deYear1Usd} ({f.deYear1Local})</td>
                <td className="py-2 pr-3">{f.deFiveYearUsd} ({f.deFiveYearLocal})</td>
                <td className="py-2">{f.deDissolution} ({f.deDissolutionLocal})</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-semibold text-[#102A43]">New Mexico</td>
                <td className="py-2 pr-3">{f.nmYear1Usd} ({f.nmYear1Local})</td>
                <td className="py-2 pr-3">{f.nmFiveYearUsd} ({f.nmFiveYearLocal})</td>
                <td className="py-2">{f.nmDissolution} ({f.nmDissolutionLocal})</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-slate-500">
        The dissolution column is the official filing fee for closing the LLC — {f.nmDissolution} in New Mexico and {f.wyDissolution} in Wyoming — plus any final annual report or tax still due. Five-year totals count five recurring payments, the convention this site uses on every page.
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
      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        The Delaware line is the one rival quotes most often get wrong: several guides still show the old $300 annual tax, but Delaware charges {f.deAnnualTax} a year for tax year 2026 — first payable 1 June 2027 — on {f.deFormation} formation.
      </p>

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
          <li><Link href="/guides/us-llc-cost-from-india" className="text-[#1769AA] hover:underline">US LLC Cost from India — fees in INR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-dubai" className="text-[#1769AA] hover:underline">US LLC Cost from Dubai & UAE — fees in AED</Link></li>
          <li><Link href="/guides/us-llc-cost-from-australia" className="text-[#1769AA] hover:underline">US LLC Cost from Australia — fees in AUD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-new-zealand" className="text-[#1769AA] hover:underline">US LLC Cost from New Zealand — fees in NZD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-uk" className="text-[#1769AA] hover:underline">US LLC Cost from the UK — fees in GBP</Link></li>
          <li><Link href="/guides/us-llc-cost-from-canada" className="text-[#1769AA] hover:underline">US LLC Cost from Canada — fees in CAD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-ireland" className="text-[#1769AA] hover:underline">US LLC Cost from Ireland — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-netherlands" className="text-[#1769AA] hover:underline">US LLC Cost from the Netherlands — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-germany" className="text-[#1769AA] hover:underline">US LLC Cost from Germany — fees in EUR</Link></li>
          <li><Link href="/llc-cost-by-state/new-mexico" className="text-[#1769AA] hover:underline">New Mexico LLC Cost — formation &amp; $0 annual report</Link></li>
          <li><Link href="/llc-cost-by-state/wyoming" className="text-[#1769AA] hover:underline">Wyoming LLC Cost — formation &amp; annual report fees</Link></li>
          <li><Link href="/llc-cost-by-state/delaware" className="text-[#1769AA] hover:underline">Delaware LLC Cost — formation &amp; annual tax</Link></li>
          <li><Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">Non-Resident LLC Guide — Can a Non-Resident Form an LLC in the USA?</Link></li>
          <li><Link href="/annual-report-requirements-by-state" className="text-[#1769AA] hover:underline">Annual Report Requirements by State</Link></li>
          <li><Link href="/guides/us-llc-vs-uk-ltd-cost" className="text-[#1769AA] hover:underline">US LLC vs. UK Ltd Cost — 5-year operational fee comparison</Link></li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Operational and published registry fees only; consult a qualified Singapore tax or legal adviser regarding IRAS and cross-border compliance.
      </p>
    </div>
  );
}
