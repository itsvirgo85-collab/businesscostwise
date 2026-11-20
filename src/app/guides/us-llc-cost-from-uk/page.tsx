import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import ArticleJsonLd from "@/components/seo/ArticleJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import NonResidentCalculator from "@/components/calculators/NonResidentCalculator";
import { FX_RATE_DATE, countryGuideFigures } from "@/lib/countryGuideFigures";

export const metadata: Metadata = {
  title: { absolute: "US LLC Cost from the UK (2026) — Year-1 & 5-Year Fees in GBP" },
  description:
    "Forming a US LLC from the UK? Year-1 and 5-year costs in GBP for Wyoming, Delaware and New Mexico, the Companies House £100 benchmark, and UK Ltd strike-off costs.",
  alternates: { canonical: "/guides/us-llc-cost-from-uk" },
  openGraph: {
    title: "US LLC Cost from the UK (2026) — Year-1 & 5-Year Fees in GBP",
    description:
      "Forming a US LLC from the UK? Year-1 and 5-year costs in GBP for Wyoming, Delaware and New Mexico, the Companies House £100 benchmark, and UK Ltd strike-off costs.",
    type: "website",
    url: "/guides/us-llc-cost-from-uk",
  },
  twitter: {
    card: "summary_large_image",
    title: "US LLC Cost from the UK (2026) — Year-1 & 5-Year Fees in GBP",
    description:
      "Forming a US LLC from the UK? Year-1 and 5-year costs in GBP for Wyoming, Delaware and New Mexico, the Companies House £100 benchmark, and UK Ltd strike-off costs.",
  },
};

export default function UsLlcCostFromUkPage() {
  const f = countryGuideFigures("GBP");

  const faqs = [
    {
      question: "How much does a Wyoming or Delaware LLC cost per year in GBP?",
      answer: `Wyoming costs ${f.wyYear1Usd} (${f.wyYear1Local}) in year one and ${f.wyOngoingUsd} (${f.wyOngoingLocal}) a year after that, agent included at ${f.agentPerYear} a year. Delaware costs ${f.deYear1Usd} (${f.deYear1Local}) in year one and ${f.deOngoingUsd} (${f.deOngoingLocal}) a year after that, because Delaware charges a ${f.deAnnualTax} flat annual tax on top of the agent. Converted figures are estimates at the ${FX_RATE_DATE} rate of £${f.rate} per $1.`,
    },
    {
      question: "Do UK founders pay higher US state fees than US residents?",
      answer: `No. US state filing fees are identical regardless of nationality or residency — a UK founder pays the same official fee as a US citizen forming in the same state. The only extra cost for a non-resident is a commercial registered agent ($99–$150 a year), which provides the in-state street address the state requires because a foreign address does not qualify.`,
    },
    {
      question: "Can a UK founder form a US LLC without visiting the US or having a US address?",
      answer: `Yes. Formation is 100% online — no US travel and no US address of your own are needed. Your registered agent provides the mandatory in-state street address for official state and legal notices. If you also need a mailing address for banks, vendors, or customers, an optional US virtual mailbox costs roughly $10–$30 a month.`,
    },
    {
      question: "What does closing a US LLC cost from the UK, versus a Ltd strike-off?",
      answer: `A UK Ltd voluntary strike-off (form DS01) costs £13 online or £18 on paper. Closing a US LLC costs ${f.nmDissolution} in New Mexico and ${f.wyDissolution} in Wyoming in official dissolution filing fees, plus any final annual report or tax that is still due. Dissolution is filed online with the formation state’s Secretary of State — no US visit is needed.`,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <ArticleJsonLd
        headline="US LLC Cost from the UK (2026) — Year-1 &amp; 5-Year Fees in GBP"
        description="Forming a US LLC from the UK? Year-1 and 5-year costs in GBP for Wyoming, Delaware and New Mexico, the Companies House £100 benchmark, and UK Ltd strike-off costs."
        datePublished="2026-11-19"
        dateModified="2026-11-20"
        url="https://www.getllccostcalculator.com/guides/us-llc-cost-from-uk"
      />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "US LLC Cost from the UK", item: "/guides/us-llc-cost-from-uk" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        US LLC Cost from the UK (2026): Official State &amp; Annual Fees in GBP
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        Incorporating a Ltd at Companies House costs £100 online and takes about a day. A US LLC is filed the same way — online, no US visit, no minimum capital — but the price tag is split across a state filing fee and a registered agent you renew every year. The calculator below is pre-loaded in pounds with Wyoming, so the Year-1 and 5-year totals are in GBP before you look at the table.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        Start with the five-year view, because that is where the states separate: New Mexico {f.nmFiveYearUsd} ({f.nmFiveYearLocal}), Wyoming {f.wyFiveYearUsd} ({f.wyFiveYearLocal}) and Delaware {f.deFiveYearUsd} ({f.deFiveYearLocal}), each with the {f.agentPerYear}-a-year agent included. Year one is {f.nmYear1Usd} ({f.nmYear1Local}), {f.wyYear1Usd} ({f.wyYear1Local}) and {f.deYear1Usd} ({f.deYear1Local}). Figures are converted at the {FX_RATE_DATE} rate of £{f.rate} per $1; change the rate in the calculator to match your bank or card provider.
      </p>

      <div className="mt-10">
        <NonResidentCalculator initialCurrencyCode="GBP" initialStateSlug="wyoming" />
      </div>

      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        The full <Link href="/tools/non-resident-llc-cost-calculator?currency=GBP" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator in GBP</Link> prices every state and lets you change the agent cost, the exchange rate and the EIN option. The general <Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">non-resident LLC guide</Link> covers the filing steps.
      </p>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Wyoming vs Delaware vs New Mexico — Year-1 and 5-year costs in GBP
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
        The table below prices three US states against the same yardstick: the formation fee, the yearly state charge, and the year-one and five-year totals with the agent included. Five-year totals count five recurring payments, the same convention the site uses everywhere.
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
        Take the agent out of the numbers and five years of state charges alone are {f.nmFiveYearStateOnly} in New Mexico, {f.wyFiveYearStateOnly} in Wyoming and {f.deFiveYearStateOnly} in Delaware. Almost the whole Delaware gap is its {f.deAnnualTax} yearly tax, not the formation fee.
      </p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          How this compares with forming a company in the UK
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          For scale, Companies House charges £100 to incorporate a company
          online (£124 on paper) and £50 a year for the annual confirmation
          statement. A voluntary strike-off (form DS01) costs £13 online or
          £18 on paper. A US LLC has no equivalent confirmation-statement
          regime: the state filing fee ({f.nmFormation} in New Mexico,{" "}
          {f.wyFormation} in Wyoming) plus a registered agent is the whole
          formation cost, and a New Mexico LLC pays no annual report fee at
          all.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
        The yearly routine is lighter on the US side in one respect and heavier in another. A UK Ltd files a £50 confirmation statement every year; a Wyoming LLC files a {f.wyAnnualReport} annual report plus its agent, and a New Mexico LLC files no annual report at all. The agent ({f.agentPerYear} a year in the calculator) is the line a UK founder cannot skip, because a foreign address does not qualify as a registered office.
      </p>
      </section>

            <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Keeping the LLC current from the UK
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The yearly routine is short but it does not run itself. A Wyoming LLC has an annual report of {f.wyAnnualReport} plus the agent renewal each year; a New Mexico LLC has the agent renewal only. Put a calendar reminder on the deadline in your formation state when the LLC is approved — a missed report brings a late fee first (Florida charges $400 for a late annual report), then delinquency, and eventually administrative dissolution if it stays unfiled.
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
          <li><Link href="/tools/non-resident-llc-cost-calculator?currency=GBP" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator — in GBP</Link></li>
          <li><Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">Non-Resident LLC Guide — Can a Non-Resident Form an LLC in the USA?</Link></li>
          <li><Link href="/annual-report-requirements-by-state" className="text-[#1769AA] hover:underline">Annual Report Requirements by State</Link></li>
          <li><Link href="/llc-cost-by-state/wyoming" className="text-[#1769AA] hover:underline">Wyoming LLC Cost — formation &amp; annual report fees</Link></li>
          <li><Link href="/llc-cost-by-state/delaware" className="text-[#1769AA] hover:underline">Delaware LLC Cost — formation &amp; annual tax</Link></li>
          <li><Link href="/llc-cost-by-state/new-mexico" className="text-[#1769AA] hover:underline">New Mexico LLC Cost — formation &amp; $0 annual report</Link></li>
          <li><Link href="/guides/us-llc-cost-from-ireland" className="text-[#1769AA] hover:underline">US LLC Cost from Ireland — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-new-zealand" className="text-[#1769AA] hover:underline">US LLC Cost from New Zealand — fees in NZD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-netherlands" className="text-[#1769AA] hover:underline">US LLC Cost from the Netherlands — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-germany" className="text-[#1769AA] hover:underline">US LLC Cost from Germany — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-canada" className="text-[#1769AA] hover:underline">US LLC Cost from Canada — fees in CAD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-australia" className="text-[#1769AA] hover:underline">US LLC Cost from Australia — fees in AUD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-singapore" className="text-[#1769AA] hover:underline">US LLC Cost from Singapore — fees in SGD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-dubai" className="text-[#1769AA] hover:underline">US LLC Cost from Dubai &amp; UAE — fees in AED</Link></li>
          <li><Link href="/guides/us-llc-cost-from-india" className="text-[#1769AA] hover:underline">US LLC Cost from India — fees in INR</Link></li>
          <li><Link href="/guides/us-llc-vs-uk-ltd-cost" className="text-[#1769AA] hover:underline">US LLC vs. UK Ltd Cost — 5-year operational fee comparison</Link></li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Operational and published registry fees only; consult a qualified UK tax or legal adviser regarding HMRC and cross-border compliance.
      </p>
    </div>
  );
}
