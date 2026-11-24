import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import ArticleJsonLd from "@/components/seo/ArticleJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import NonResidentCalculator from "@/components/calculators/NonResidentCalculator";
import { FX_RATE_DATE, countryGuideFigures } from "@/lib/countryGuideFigures";

export const metadata: Metadata = {
  title: { absolute: "US LLC Cost from Australia (2026) — Filing Fees in AUD" },
  description:
    "Forming a US LLC from Australia? Year-1 and 5-year costs in AUD for Wyoming, New Mexico and Delaware, the ASIC A$636 benchmark, and a US EIN without an SSN.",
  alternates: { canonical: "/guides/us-llc-cost-from-australia" },
  openGraph: {
    title: "US LLC Cost from Australia (2026) — Filing Fees in AUD",
    description:
      "Forming a US LLC from Australia? Year-1 and 5-year costs in AUD for Wyoming, New Mexico and Delaware, the ASIC A$636 benchmark, and a US EIN without an SSN.",
    type: "website",
    url: "/guides/us-llc-cost-from-australia",
  },
  twitter: {
    card: "summary_large_image",
    title: "US LLC Cost from Australia (2026) — Filing Fees in AUD",
    description:
      "Forming a US LLC from Australia? Year-1 and 5-year costs in AUD for Wyoming, New Mexico and Delaware, the ASIC A$636 benchmark, and a US EIN without an SSN.",
  },
};

export default function UsLlcCostFromAustraliaPage() {
  const f = countryGuideFigures("AUD");

  const faqs = [
    {
      question: "How much does a Wyoming or New Mexico LLC cost per year in AUD?",
      answer: `Five years with the agent come to ${f.nmFiveYearUsd} (${f.nmFiveYearLocal}) in New Mexico, ${f.wyFiveYearUsd} (${f.wyFiveYearLocal}) in Wyoming and ${f.deFiveYearUsd} (${f.deFiveYearLocal}) in Delaware. Year one is ${f.nmYear1Usd} (${f.nmYear1Local}), ${f.wyYear1Usd} (${f.wyYear1Local}) and ${f.deYear1Usd} (${f.deYear1Local}); after that the yearly cost is ${f.nmOngoingUsd} (${f.nmOngoingLocal}) in New Mexico and ${f.wyOngoingUsd} (${f.wyOngoingLocal}) in Wyoming. Converted figures are estimates at the ${FX_RATE_DATE} rate of A$${f.rate} per $1.`,
    },
    {
      question: "Are US state filing fees higher for Australian non-residents?",
      answer: `No — the fee schedule does not distinguish by nationality or residency. An Australian founder pays the same filing and renewal fees as a US citizen in the same state; the only extra line is the registered agent, because a foreign address does not qualify as a registered office.`,
    },
    {
      question: "Can an Australian resident get a US EIN without an SSN or ITIN?",
      answer: `Yes, and it costs $0. The IRS issues the EIN free: file Form SS-4 by fax or mail, write “Foreign” on Line 7b, and allow about a week for fax processing. No SSN or ITIN is needed — agencies charging $75–$300 are selling a convenience service for a free form.`,
    },
    {
      question: "What does closing a US LLC cost from Australia, versus ASIC deregistration?",
      answer: `A US LLC closes for ${f.wyDissolution} in Wyoming and ${f.nmDissolution} in New Mexico in official dissolution filing fees — less than the A$52 ASIC deregistration (Form 6010) on the Australian side — plus any final annual report or tax still due. The filing is done online with the formation state’s Secretary of State, with no US visit needed.`,
    },
    {
      question: "How do I form US LLC from Australia?",
      answer: `File online in Wyoming, New Mexico or Delaware — no US visit, no US address and no minimum capital are needed. Appoint a registered agent, file the Articles of Organization (${f.nmFormation} in New Mexico, ${f.wyFormation} in Wyoming), then get your EIN free from the IRS by faxing Form SS-4. There is no Director ID, no ABN and no local-director rule.`,
    },
    {
      question: "What is the US LLC cost for Australian citizen?",
      answer: `Year one with the agent is ${f.nmYear1Usd} (${f.nmYear1Local}) in New Mexico, ${f.wyYear1Usd} (${f.wyYear1Local}) in Wyoming and ${f.deYear1Usd} (${f.deYear1Local}) in Delaware. After that the yearly cost is ${f.nmOngoingUsd} (${f.nmOngoingLocal}), ${f.wyOngoingUsd} (${f.wyOngoingLocal}) and ${f.deOngoingUsd} (${f.deOngoingLocal}) — Delaware is dearest because of its ${f.deAnnualTax} annual tax, while New Mexico has no annual report at all.`,
    },
    {
      question: "Is a Wyoming LLC for Australian founders the cheapest US option?",
      answer: `Wyoming is usually the cheapest of the three states priced here: ${f.wyYear1Usd} (${f.wyYear1Local}) in year one and ${f.wyOngoingUsd} (${f.wyOngoingLocal}) a year after that, agent included. New Mexico is cheaper still on state fees alone, at ${f.nmFiveYearStateOnly} over five years, while Delaware costs the most because of its ${f.deAnnualTax} annual tax.`,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <ArticleJsonLd
        headline="US LLC Cost from Australia (2026) — Filing Fees in AUD"
        description="Forming a US LLC from Australia? Year-1 and 5-year costs in AUD for Wyoming, New Mexico and Delaware, the ASIC A$636 benchmark, and a US EIN without an SSN."
        datePublished="2026-11-19"
        dateModified="2026-11-20"
        url="https://www.getllccostcalculator.com/guides/us-llc-cost-from-australia"
      />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "US LLC Cost from Australia", item: "/guides/us-llc-cost-from-australia" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        US LLC Cost from Australia (2026): Year-1 &amp; 5-Year Fees in AUD
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        Registering a proprietary company with ASIC costs A$636, plus A$342 a year for the annual review and a Director ID for every director. A US LLC has no annual review fee in New Mexico, no Director ID, and no local director rule — the filing is a single online form. The calculator below is pre-loaded in Australian dollars with Wyoming, so the Year-1 and 5-year totals are in AUD.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        Five years out, agent included, the totals are {f.wyFiveYearUsd} ({f.wyFiveYearLocal}) for Wyoming, {f.nmFiveYearUsd} ({f.nmFiveYearLocal}) for New Mexico and {f.deFiveYearUsd} ({f.deFiveYearLocal}) for Delaware. Year one is {f.wyYear1Usd} ({f.wyYear1Local}), {f.nmYear1Usd} ({f.nmYear1Local}) and {f.deYear1Usd} ({f.deYear1Local}); after that the yearly cost is {f.wyOngoingUsd} ({f.wyOngoingLocal}) in Wyoming and {f.nmOngoingUsd} ({f.nmOngoingLocal}) in New Mexico. Converted at the {FX_RATE_DATE} rate of A${f.rate} per $1; change the rate in the calculator to match your bank.
      </p>

      <div className="mt-10">
        <NonResidentCalculator initialCurrencyCode="AUD" initialStateSlug="wyoming"
          compact
          heading="Price it in Australian dollars — Wyoming first"
          intro="Wyoming is the starting point below: a $60 annual report plus the agent, and no Director ID or annual review fee anywhere in the process. Switch to New Mexico or Delaware to compare."
          stateNote="Wyoming, New Mexico and Delaware are the three states this guide prices. The full calculator covers all fifty."
          currencyNote={`Default rate A$${f.rate} per $1, as of ${FX_RATE_DATE} (Bank of England spot rates and Federal Reserve H.10). Converted figures are estimates — change the rate field to match your bank.`}
          einNote="File Form SS-4 by fax or mail and write “Foreign” on Line 7b. The EIN is $0 from the IRS — no SSN or ITIN is needed."
          agentHint="Typical range: $99–$199 per year — $125 is the mid-range default."
          excludesBody="Taxes, bank fees, operating-agreement drafting and professional advice are not included. This tool shows operational and published state filing fees only — consult a qualified Australian tax or legal adviser regarding ATO and cross-border compliance, as the disclaimer below notes."
          resultNote={`Converted at A$${f.rate} per $1 (${FX_RATE_DATE}). State fees are from verified state data; dollar figures are estimates.`}
          fiveYearNote="Five recurring payments over five years, plus formation and one-time items. The state-fees-only column shows the bill before the agent — New Mexico's is just the $50 formation fee."
          scenarioTitle="Five years of state fees, with and without the agent — in AUD"
          scenarioIntro="Same settings as above. The middle columns strip the agent out, so the state's own five-year bill is visible next to the all-in total."
          scenarioVariant="stateOnly"
          scenarioFootnote={`Five-year totals count five recurring payments. The state-fees-only columns count formation plus five annual state charges, with no agent. At the defaults above, five years in Wyoming with the agent are ${f.wyFiveYearLocal}.`}
        />
      </div>

      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        The calculator above covers Wyoming, Delaware and New Mexico in AUD. For every state and full control of the agent price, exchange rate and EIN option, open the <Link href="/tools/non-resident-llc-cost-calculator?currency=AUD" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator in AUD</Link>. The general <Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">non-resident LLC guide</Link> covers the filing steps.
      </p>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Wyoming vs Delaware vs New Mexico — Year-1 and 5-year costs in AUD, state fees vs all-in totals
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
        This table splits the five-year figure in two: the all-in total with the agent, and the state-only total without it. The gap between the last two columns is five years of agent fees.
      </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-3 font-semibold">State</th>
                <th className="py-2 pr-3 font-semibold">Formation fee</th>
                <th className="py-2 pr-3 font-semibold">Year 1 (with agent)</th>
                <th className="py-2 pr-3 font-semibold">5 years (with agent)</th>
                <th className="py-2 font-semibold">5 years, state fees only</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Wyoming</td>
                <td className="py-2 pr-3">{f.wyFormation}</td>
                <td className="py-2 pr-3">{f.wyYear1Usd} ({f.wyYear1Local})</td>
                <td className="py-2 pr-3">{f.wyFiveYearUsd} ({f.wyFiveYearLocal})</td>
                <td className="py-2">{f.wyFiveYearStateOnly}</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Delaware</td>
                <td className="py-2 pr-3">{f.deFormation}</td>
                <td className="py-2 pr-3">{f.deYear1Usd} ({f.deYear1Local})</td>
                <td className="py-2 pr-3">{f.deFiveYearUsd} ({f.deFiveYearLocal})</td>
                <td className="py-2">{f.deFiveYearStateOnly}</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-semibold text-[#102A43]">New Mexico</td>
                <td className="py-2 pr-3">{f.nmFormation}</td>
                <td className="py-2 pr-3">{f.nmYear1Usd} ({f.nmYear1Local})</td>
                <td className="py-2 pr-3">{f.nmFiveYearUsd} ({f.nmFiveYearLocal})</td>
                <td className="py-2">{f.nmFiveYearStateOnly}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-slate-500">
        The state-only column counts formation plus five annual state charges and nothing else — {f.nmFiveYearStateOnly} in New Mexico, {f.wyFiveYearStateOnly} in Wyoming and {f.deFiveYearStateOnly} in Delaware. Delaware&apos;s {f.deAnnualTax} yearly tax is the reason its row is the highest.
      </p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          How this compares with registering a company with ASIC
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          For scale, ASIC charges A$636 to register a proprietary company
          (from 1 July 2026), A$342 a year for the annual review fee, and A$52
          for voluntary deregistration (Form 6010). A Director ID and an ABN
          are both $0. A US LLC has no equivalent annual review fee in New
          Mexico at all — the state filing fee ({f.nmFormation} in New Mexico,{" "}
          {f.wyFormation} in Wyoming) plus a registered agent is the whole
          formation cost.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
        An Australian company pays its A$342 annual review fee every year. A Wyoming LLC pays a {f.wyAnnualReport} annual report plus its agent, while a New Mexico LLC pays only the agent. The agent ({f.agentPerYear} a year in the calculator) is the one recurring service an Australian founder cannot skip, because a foreign address does not qualify as a registered office.
      </p>
      <p className="mt-3 text-slate-700 leading-relaxed">
        One Australian-side line no US fee table covers: the ATO can treat a US LLC as a foreign hybrid company under Division 830 — ask a qualified Australian tax adviser how that treatment applies to your LLC.
      </p>
      </section>

            <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Director ID and ABN have no US equivalent
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Every director of an Australian company needs a Director ID, and the company needs an ABN — both are $0, but both are mandatory. A US LLC has neither: no director register, no Director ID, no ABN, and no local director rule at all. The only US-side requirement is the registered agent, and the only number you apply for after formation is the EIN — Form SS-4 by fax or mail, $0 from the IRS, with “Foreign” on Line 7b if you have no SSN.
        </p>
      </section>
      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        One figure to check in rival quotes is Delaware’s annual tax: several guides still show the old $300 annual tax, but Delaware charges {f.deAnnualTax} a year for tax year 2026 — first payable 1 June 2027 — on {f.deFormation} formation.
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
          <li><Link href="/tools/non-resident-llc-cost-calculator?currency=AUD" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator — in AUD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-new-zealand" className="text-[#1769AA] hover:underline">US LLC Cost from New Zealand — fees in NZD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-singapore" className="text-[#1769AA] hover:underline">US LLC Cost from Singapore — fees in SGD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-india" className="text-[#1769AA] hover:underline">US LLC Cost from India — fees in INR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-uk" className="text-[#1769AA] hover:underline">US LLC Cost from the UK — fees in GBP</Link></li>
          <li><Link href="/guides/us-llc-cost-from-canada" className="text-[#1769AA] hover:underline">US LLC Cost from Canada — fees in CAD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-dubai" className="text-[#1769AA] hover:underline">US LLC Cost from Dubai & UAE — fees in AED</Link></li>
          <li><Link href="/guides/us-llc-cost-from-ireland" className="text-[#1769AA] hover:underline">US LLC Cost from Ireland — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-netherlands" className="text-[#1769AA] hover:underline">US LLC Cost from the Netherlands — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-germany" className="text-[#1769AA] hover:underline">US LLC Cost from Germany — fees in EUR</Link></li>
          <li><Link href="/llc-cost-by-state/wyoming" className="text-[#1769AA] hover:underline">Wyoming LLC Cost — formation &amp; annual report fees</Link></li>
          <li><Link href="/llc-cost-by-state/new-mexico" className="text-[#1769AA] hover:underline">New Mexico LLC Cost — formation &amp; $0 annual report</Link></li>
          <li><Link href="/llc-cost-by-state/delaware" className="text-[#1769AA] hover:underline">Delaware LLC Cost — formation &amp; annual tax</Link></li>
          <li><Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">Non-Resident LLC Guide — Can a Non-Resident Form an LLC in the USA?</Link></li>
          <li><Link href="/annual-report-requirements-by-state" className="text-[#1769AA] hover:underline">Annual Report Requirements by State</Link></li>
          <li><Link href="/guides/us-llc-vs-uk-ltd-cost" className="text-[#1769AA] hover:underline">US LLC vs. UK Ltd Cost — 5-year operational fee comparison</Link></li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Operational and published registry fees only; consult a qualified Australian tax or legal adviser regarding ATO and cross-border compliance.
      </p>
    </div>
  );
}
