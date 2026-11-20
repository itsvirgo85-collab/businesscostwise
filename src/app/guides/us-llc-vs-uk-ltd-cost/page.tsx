import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import ArticleJsonLd from "@/components/seo/ArticleJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import NonResidentCalculator from "@/components/calculators/NonResidentCalculator";
import { FX_RATE_DATE, countryGuideFigures } from "@/lib/countryGuideFigures";

export const metadata: Metadata = {
  title: { absolute: "US LLC vs. UK Ltd Cost (2026) — 5-Year Fee Comparison" },
  description:
    "US LLC vs UK Ltd over 5 years in pure operational fees: UK Ltd £300 at Companies House vs New Mexico, Wyoming and Delaware LLCs with a registered agent.",
  alternates: { canonical: "/guides/us-llc-vs-uk-ltd-cost" },
  openGraph: {
    title: "US LLC vs. UK Ltd Cost (2026) — 5-Year Fee Comparison",
    description:
      "US LLC vs UK Ltd over 5 years in pure operational fees: UK Ltd £300 at Companies House vs New Mexico, Wyoming and Delaware LLCs with a registered agent.",
    type: "website",
    url: "/guides/us-llc-vs-uk-ltd-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "US LLC vs. UK Ltd Cost (2026) — 5-Year Fee Comparison",
    description:
      "US LLC vs UK Ltd over 5 years in pure operational fees: UK Ltd £300 at Companies House vs New Mexico, Wyoming and Delaware LLCs with a registered agent.",
  },
};

export default function UsLlcVsUkLtdCostPage() {
  const f = countryGuideFigures("GBP");

  const faqs = [
    {
      question: "Is a UK Ltd or a US LLC cheaper to maintain over 5 years in pure filing fees?",
      answer: `A UK Ltd is cheaper in pure statutory registry fees: £300 over 5 years (£100 incorporation plus four £50 confirmation statements), if you use your own UK address. A non-resident US LLC starts at ${f.nmFiveYearUsd} (${f.nmFiveYearLocal}) in New Mexico or ${f.wyFiveYearUsd} (${f.wyFiveYearLocal}) in Wyoming over 5 years, because a commercial US registered agent is required every year. Converted figures are estimates at the ${FX_RATE_DATE} rate of £${f.rate} per $1.`,
    },
    {
      question: "Why do UK founders compare Delaware vs. Wyoming against a UK Ltd?",
      answer: `Delaware's ${f.deAnnualTax}-a-year flat tax pushes a Delaware LLC to ${f.deFiveYearLocal} (${f.deFiveYearUsd}) over 5 years — nearly 7× the UK Companies House total of £300. Wyoming's ${f.wyAnnualReport}-a-year annual report and New Mexico's $0 annual report keep ongoing US costs close to UK administrative levels, so the state choice, not the entity type, decides the gap.`,
    },
    {
      question: "Which entity is cheaper to close if a project stops operating?",
      answer: `A UK Ltd digital strike-off (form DS01) costs £13 online or £18 on paper. Closing a US LLC costs ${f.nmDissolution} (${f.nmDissolutionLocal}) in New Mexico, ${f.wyDissolution} (${f.wyDissolutionLocal}) in Wyoming, or ${f.deDissolution} (${f.deDissolutionLocal}) in Delaware in official dissolution filing fees, plus any final annual report or tax still due.`,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <ArticleJsonLd
        headline="US LLC vs. UK Ltd Cost (2026) — 5-Year Fee Comparison"
        description="US LLC vs UK Ltd over 5 years in pure operational fees: UK Ltd £300 at Companies House vs New Mexico, Wyoming and Delaware LLCs with a registered agent."
        datePublished="2026-11-19"
        dateModified="2026-11-20"
        url="https://www.getllccostcalculator.com/guides/us-llc-vs-uk-ltd-cost"
      />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "US LLC vs. UK Ltd Cost", item: "/guides/us-llc-vs-uk-ltd-cost" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        US LLC vs. UK Ltd Cost (2026): Year-1 &amp; 5-Year Operational Fee Breakdown
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        Only published registry and filing fees are compared here — this page carries no tax or legal analysis. Test the US side first: the calculator below opens in pounds with Wyoming selected, and the Companies House numbers sit in the table underneath it.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        A UK Ltd costs £100 to incorporate and £300 over five years. A New Mexico LLC, agent included at {f.agentPerYear} a year, is {f.nmYear1Usd} ({f.nmYear1Local}) in year one and {f.nmFiveYearUsd} ({f.nmFiveYearLocal}) over five years; Wyoming is {f.wyYear1Usd} ({f.wyYear1Local}) and {f.wyFiveYearUsd} ({f.wyFiveYearLocal}); Delaware is {f.deYear1Usd} ({f.deYear1Local}) and {f.deFiveYearUsd} ({f.deFiveYearLocal}). Conversions use the {FX_RATE_DATE} rate of £{f.rate} per $1 — the calculator lets you change the rate to match your bank or card provider.
      </p>

      <div className="mt-10">
        <NonResidentCalculator initialCurrencyCode="GBP" initialStateSlug="wyoming" />
      </div>

      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        The full <Link href="/tools/non-resident-llc-cost-calculator?currency=GBP" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator in GBP</Link> prices every state with the agent, exchange rate and EIN options adjustable, and the <Link href="/guides/us-llc-cost-from-uk" className="text-[#1769AA] hover:underline">US LLC cost guide for UK founders</Link> covers the filing steps.
      </p>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          US LLC vs UK Ltd — Year-1 and 5-year operational fees
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
        The table puts the UK Ltd registry fees published by Companies House next to US LLC costs calculated from the site&apos;s state fee data, with a {f.agentPerYear}-a-year registered agent included on the US side. Five-year totals count five recurring payments, the same convention the site uses everywhere. The UK confirmation statement is first due in year 2, so the 5-year UK total is £100 incorporation plus four £50 statements.
      </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-3 font-semibold">Entity</th>
                <th className="py-2 pr-3 font-semibold">Formation fee</th>
                <th className="py-2 pr-3 font-semibold">Ongoing / year</th>
                <th className="py-2 pr-3 font-semibold">Year 1 (with agent)</th>
                <th className="py-2 font-semibold">5 years (with agent)</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">UK Ltd (Companies House)</td>
                <td className="py-2 pr-3">£100 (£124 on paper)</td>
                <td className="py-2 pr-3">£50 / year</td>
                <td className="py-2 pr-3">£100</td>
                <td className="py-2">£300</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">US LLC — New Mexico</td>
                <td className="py-2 pr-3">{f.nmFormation}</td>
                <td className="py-2 pr-3">{f.nmOngoingUsd} ({f.nmOngoingLocal})</td>
                <td className="py-2 pr-3">{f.nmYear1Usd} ({f.nmYear1Local})</td>
                <td className="py-2">{f.nmFiveYearUsd} ({f.nmFiveYearLocal})</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">US LLC — Wyoming</td>
                <td className="py-2 pr-3">{f.wyFormation}</td>
                <td className="py-2 pr-3">{f.wyOngoingUsd} ({f.wyOngoingLocal})</td>
                <td className="py-2 pr-3">{f.wyYear1Usd} ({f.wyYear1Local})</td>
                <td className="py-2">{f.wyFiveYearUsd} ({f.wyFiveYearLocal})</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-semibold text-[#102A43]">US LLC — Delaware</td>
                <td className="py-2 pr-3">{f.deFormation}</td>
                <td className="py-2 pr-3">{f.deOngoingUsd} ({f.deOngoingLocal})</td>
                <td className="py-2 pr-3">{f.deYear1Usd} ({f.deYear1Local})</td>
                <td className="py-2">{f.deFiveYearUsd} ({f.deFiveYearLocal})</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-slate-500">
        Before the agent, five years of state fees alone are {f.nmFiveYearStateOnly} in New Mexico, {f.wyFiveYearStateOnly} in Wyoming and {f.deFiveYearStateOnly} in Delaware — Delaware&apos;s {f.deAnnualTax} yearly tax is the gap. The UK side has no agent equivalent when you use your own UK address; a UK founder forming a US LLC cannot skip the agent, because a foreign address does not qualify as a registered office.
      </p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Closing costs: UK strike-off vs US dissolution
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
        Ending a UK Ltd is a DS01 strike-off: £13 online, £18 on paper. Ending a US LLC is a dissolution filing with the formation state&apos;s Secretary of State — {f.nmDissolution} in New Mexico, {f.wyDissolution} in Wyoming, {f.deDissolution} in Delaware — plus any final annual report or tax still owed. Delaware will not accept the filing until all annual LLC taxes are paid, so settle arrears before filing.
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
          <li><Link href="/guides/us-llc-cost-from-uk" className="text-[#1769AA] hover:underline">US LLC Cost from the UK — fees in GBP</Link></li>
          <li><Link href="/guides/us-llc-cost-from-ireland" className="text-[#1769AA] hover:underline">US LLC Cost from Ireland — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-new-zealand" className="text-[#1769AA] hover:underline">US LLC Cost from New Zealand — fees in NZD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-netherlands" className="text-[#1769AA] hover:underline">US LLC Cost from the Netherlands — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-germany" className="text-[#1769AA] hover:underline">US LLC Cost from Germany — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-canada" className="text-[#1769AA] hover:underline">US LLC Cost from Canada — fees in CAD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-australia" className="text-[#1769AA] hover:underline">US LLC Cost from Australia — fees in AUD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-singapore" className="text-[#1769AA] hover:underline">US LLC Cost from Singapore — fees in SGD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-dubai" className="text-[#1769AA] hover:underline">US LLC Cost from Dubai &amp; UAE — fees in AED</Link></li>
          <li><Link href="/guides/us-llc-cost-from-india" className="text-[#1769AA] hover:underline">US LLC Cost from India — fees in INR</Link></li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Operational and published registry fee comparison only; consult a qualified UK/US cross-border tax adviser before choosing an entity structure.
      </p>
    </div>
  );
}
