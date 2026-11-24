import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import ArticleJsonLd from "@/components/seo/ArticleJsonLd";
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
  },
  twitter: {
    card: "summary_large_image",
    title: "US LLC Cost from New Zealand (2026) — Official Fees in NZD",
    description:
      "Forming a US LLC from New Zealand? Year-1 and 5-year costs in NZD for Wyoming, Delaware and New Mexico, the NZ$118.74 benchmark, and agency fees in the hundreds.",
  },
};

export default function UsLlcCostFromNewZealandPage() {
  const f = countryGuideFigures("NZD");

  const faqs = [
    {
      question: "What does a US LLC cost in NZD in year one and every year after?",
      answer: `Start with Wyoming: ${f.wyYear1Usd} (${f.wyYear1Local}) in year one, then ${f.wyOngoingUsd} (${f.wyOngoingLocal}) a year, agent included. New Mexico is ${f.nmYear1Usd} (${f.nmYear1Local}) in year one and ${f.nmOngoingUsd} (${f.nmOngoingLocal}) a year after that. Over five years that is ${f.wyFiveYearUsd} (${f.wyFiveYearLocal}) for Wyoming and ${f.nmFiveYearUsd} (${f.nmFiveYearLocal}) for New Mexico, converted at the ${FX_RATE_DATE} rate of NZ$${f.rate} per $1.`,
    },
    {
      question: "Does a US LLC need a director who lives in New Zealand or Australia?",
      answer: `No. A US LLC can be 100% owned and managed remotely — there is no nationality or residency requirement for members or managers. That is the key difference from a New Zealand company, which must have at least one director who lives in New Zealand or Australia. A US LLC only needs a registered agent with a physical address in the formation state.`,
    },
    {
      question: "Why do formation websites quote several hundred New Zealand dollars when the state fee starts at $35?",
      answer: `Because the state fee is only one line of their bundle. The official filing fee is ${f.nmFormation} in New Mexico and ${f.wyFormation} in Wyoming, whoever files it. Agencies add several hundred New Zealand dollars for rush filing, document templates, EIN faxing and a Year-1 registered-agent bundle — services, not a different state fee. Run the calculator above with the DIY EIN option ($0) to see the no-agency total.`,
    },
    {
      question: "What happens if a New Zealand founder misses a US annual report deadline?",
      answer: `The state adds a late penalty first — for example, $400 in Florida for a late annual report — and the LLC becomes delinquent. If the report stays unfiled, the state eventually dissolves the LLC administratively, which means it can no longer legally operate. Getting it back requires a reinstatement filing plus the reinstatement fee and all back-owed reports. Set a calendar reminder for the report deadline in your formation state.`,
    },
    {
      question: "How do I form US LLC from New Zealand?",
      answer: `File online in Wyoming, New Mexico or Delaware — no US visit, no US address and no minimum capital are needed. Appoint a registered agent, file the Articles of Organization (${f.nmFormation} in New Mexico, ${f.wyFormation} in Wyoming), then get your EIN free from the IRS by faxing Form SS-4. No director needs to live in New Zealand or Australia.`,
    },
    {
      question: "What is the US LLC cost from New Zealand?",
      answer: `Year one with the agent is ${f.nmYear1Usd} (${f.nmYear1Local}) in New Mexico, ${f.wyYear1Usd} (${f.wyYear1Local}) in Wyoming and ${f.deYear1Usd} (${f.deYear1Local}) in Delaware. After that the yearly cost is ${f.nmOngoingUsd} (${f.nmOngoingLocal}), ${f.wyOngoingUsd} (${f.wyOngoingLocal}) and ${f.deOngoingUsd} (${f.deOngoingLocal}) — Delaware is dearest because of its {f.deAnnualTax} annual tax, not its formation fee.`,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <ArticleJsonLd
        headline="US LLC Cost from New Zealand (2026) — Official Fees in NZD"
        description="Forming a US LLC from New Zealand? Year-1 and 5-year costs in NZD for Wyoming, Delaware and New Mexico, the NZ$118.74 benchmark, and agency fees in the hundreds."
        datePublished="2026-11-19"
        dateModified="2026-11-20"
        url="https://www.getllccostcalculator.com/guides/us-llc-cost-from-new-zealand"
      />

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
        Incorporating at home means the Companies Office, NZ$118.74 plus GST, and a director who lives in New Zealand or Australia. A US LLC drops both conditions — no resident director and no local filing — and the whole formation is done online. The calculator below is pre-loaded in New Zealand dollars with Wyoming, so the Year-1 and 5-year totals are in NZD from the start.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        Year one breaks down as {f.wyYear1Usd} ({f.wyYear1Local}) for Wyoming, {f.nmYear1Usd} ({f.nmYear1Local}) for New Mexico and {f.deYear1Usd} ({f.deYear1Local}) for Delaware, with a {f.agentPerYear}-a-year registered agent counted in each. Over five years those become {f.wyFiveYearUsd} ({f.wyFiveYearLocal}), {f.nmFiveYearUsd} ({f.nmFiveYearLocal}) and {f.deFiveYearUsd} ({f.deFiveYearLocal}). Converted figures are estimates at the {FX_RATE_DATE} rate of NZ${f.rate} per $1; the calculator lets you swap in the rate your bank actually gives you.
      </p>

      <div className="mt-10">
        <NonResidentCalculator initialCurrencyCode="NZD" initialStateSlug="wyoming"
          compact
          heading="Price it in New Zealand dollars — Wyoming first"
          intro="Wyoming is the starting point below: the state this guide works through first, with a $60 annual report plus the agent. Switch to New Mexico or Delaware to compare."
          stateNote="Wyoming, New Mexico and Delaware are the three states this guide prices. The full calculator covers all fifty."
          currencyNote={`Default rate NZ$${f.rate} per $1, as of ${FX_RATE_DATE} (Bank of England spot rates and Federal Reserve H.10). Converted figures are estimates — the calculator lets you swap in the rate your bank actually gives you.`}
          einNote="The IRS charges $0 for an EIN: file Form SS-4 by fax or mail with “Foreign” on Line 7b. No SSN is needed, and no third-party service is required."
          agentHint="Agents typically charge $99–$199 a year, and $125 is the default in the calculator."
          excludesBody="Taxes, bank fees, operating-agreement drafting and professional advice are not included. This tool shows operational and published state filing fees only — consult a qualified New Zealand tax or legal adviser regarding IRD and cross-border compliance, as the disclaimer below notes."
          resultNote={`Converted at NZ$${f.rate} per $1 (${FX_RATE_DATE}). State fees are from verified state data; dollar figures are estimates.`}
          fiveYearNote="Five recurring payments over five years, plus formation and one-time items. Wyoming's yearly line is its $60 annual report plus the agent; New Mexico's is the agent alone."
          scenarioTitle="Wyoming vs Delaware vs New Mexico — year 1 and 5 years in NZD"
          scenarioIntro="Same settings as above — the agent, mailbox and EIN choices apply to all three states. The NZD column is an estimate at the rate above."
          scenarioVariant="totals"
          scenarioFootnote={`Five-year totals count five recurring payments (formation plus five annual charges). At the defaults above — $125-a-year agent, no mailbox, DIY EIN — five years in Wyoming are ${f.wyFiveYearLocal}.`}
        />
      </div>

      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        The calculator above covers Wyoming, Delaware and New Mexico in NZD. For the full version, open the <Link href="/tools/non-resident-llc-cost-calculator?currency=NZD" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator in NZD</Link> — it covers every state and lets you adjust the agent price, the exchange rate and the EIN option. The general <Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">non-resident LLC guide</Link> covers the filing steps in order.
      </p>

            <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          What arrives by post, and where it goes
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          A registered agent receives official Secretary of State and legal notices at its in-state street address — that is the address the state has on record. Everyday mail such as banking letters and vendor mail goes elsewhere: a US virtual mailbox costs roughly $10–$30 a month and scans it for you. The two are not interchangeable — a mailbox cannot receive legal service, and an agent does not handle general commercial mail. If you run the business from New Zealand, plan for both addresses from the start.
        </p>
      </section>

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
        On the home side, a New Zealand company pays NZ$49.74 plus GST a year for its annual return. A Wyoming LLC pays a {f.wyAnnualReport} annual report plus the agent, and a New Mexico LLC pays no annual report at all — the {f.agentPerYear}-a-year agent is the only line that repeats every year, and it is the one a New Zealand founder cannot drop, because a foreign address does not qualify.
       Strip the agent out and five years of state fees alone are {f.nmFiveYearStateOnly} in New Mexico, {f.wyFiveYearStateOnly} in Wyoming and {f.deFiveYearStateOnly} in Delaware; the Delaware gap is its {f.deAnnualTax} yearly tax, not the formation fee.</p>
      <p className="mt-3 text-slate-700 leading-relaxed">
        One New Zealand-side line the US fee tables do not cover: the IRD treats a US LLC as a foreign company, and it can fall under New Zealand’s controlled foreign company (CFC) rules — check with a qualified New Zealand tax adviser before you choose a structure.
      </p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Companies Office vs US LLC — formation and yearly fees
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The New Zealand side is a single incorporation fee plus a yearly return; the US side is a filing fee plus a yearly agent. The table compares the same lines.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-3 font-semibold">Item</th>
                <th className="py-2 pr-3 font-semibold">New Zealand</th>
                <th className="py-2 font-semibold">US LLC</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Incorporation filing</td>
                <td className="py-2 pr-3">NZ$118.74 plus GST (NZ$136.55 incl. GST)</td>
                <td className="py-2">New Mexico {f.nmFormation} · Wyoming {f.wyFormation}</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Name reservation</td>
                <td className="py-2 pr-3">NZ$10 plus GST (NZ$11.50 incl. GST)</td>
                <td className="py-2">Optional — a separate state filing, not part of formation</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Resident director</td>
                <td className="py-2 pr-3">At least one director in NZ or Australia</td>
                <td className="py-2">No resident director required</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Annual filing</td>
                <td className="py-2 pr-3">NZ$49.74 plus GST a year (NZ$57.20 incl. GST)</td>
                <td className="py-2">Wyoming {f.wyAnnualReport} annual report · New Mexico none</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-slate-500">
          MBIE reviewed the Companies Office fees in 2025, but no new amounts had been published as of November 2026 — check the schedule of fees on the day you file.
        </p>
      </section>

      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        When you compare quotes, check the Delaware line: several guides still show the old $300 annual tax, but Delaware charges {f.deAnnualTax} a year for tax year 2026 — first payable 1 June 2027 — on {f.deFormation} formation.
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
          <li><Link href="/tools/non-resident-llc-cost-calculator?currency=NZD" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator — in NZD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-australia" className="text-[#1769AA] hover:underline">US LLC Cost from Australia — fees in AUD</Link></li>
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
        Operational and published registry fees only; consult a qualified New Zealand tax or legal adviser regarding IRD and cross-border compliance.
      </p>
    </div>
  );
}
