import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import ArticleJsonLd from "@/components/seo/ArticleJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import NonResidentCalculator from "@/components/calculators/NonResidentCalculator";
import { FX_RATE_DATE, countryGuideFigures } from "@/lib/countryGuideFigures";

export const metadata: Metadata = {
  title: { absolute: "US LLC Cost from Dubai & UAE (2026) — Fees in AED" },
  description:
    "Forming a US LLC from Dubai or the UAE? Year-1 and 5-year costs in AED for Wyoming, Delaware and New Mexico, the Free Zone licence benchmark, and IRS EIN costs.",
  alternates: { canonical: "/guides/us-llc-cost-from-dubai" },
  openGraph: {
    title: "US LLC Cost from Dubai & UAE (2026) — Fees in AED",
    description:
      "Forming a US LLC from Dubai or the UAE? Year-1 and 5-year costs in AED for Wyoming, Delaware and New Mexico, the Free Zone licence benchmark, and IRS EIN costs.",
    type: "website",
    url: "/guides/us-llc-cost-from-dubai",
  },
  twitter: {
    card: "summary_large_image",
    title: "US LLC Cost from Dubai & UAE (2026) — Fees in AED",
    description:
      "Forming a US LLC from Dubai or the UAE? Year-1 and 5-year costs in AED for Wyoming, Delaware and New Mexico, the Free Zone licence benchmark, and IRS EIN costs.",
  },
};

export default function UsLlcCostFromDubaiPage() {
  const f = countryGuideFigures("AED");

  const faqs = [
    {
      question: "What is the total Year-1 and renewal cost of a US LLC in AED?",
      answer: `Wyoming costs ${f.wyYear1Usd} (${f.wyYear1Local}) in year one and ${f.wyOngoingUsd} (${f.wyOngoingLocal}) a year after that, with a ${f.agentPerYear}-a-year registered agent. New Mexico costs ${f.nmYear1Usd} (${f.nmYear1Local}) in year one and ${f.nmOngoingUsd} (${f.nmOngoingLocal}) a year after that, because New Mexico charges a $0 state renewal fee. Converted figures are estimates at the ${FX_RATE_DATE} rate of ${f.rate} AED per $1 — the dirham is pegged to the US dollar, so the rate barely moves.`,
    },
    {
      question: "Does a US LLC need an Ejari office lease or annual trade licence renewal?",
      answer: `No. A US LLC needs no physical office lease, no Ejari registration, and no activity-based trade licence. The only mandatory recurring items are a commercial registered agent ($99–$150 a year) and a simple annual or biennial state report — Wyoming’s is ${f.wyAnnualReport} a year, and New Mexico has no annual report at all.`,
    },
    {
      question: "Can UAE residents form a US LLC remotely without visiting the US?",
      answer: `Yes. Formation is 100% online regardless of passport nationality or UAE residency — expats and UAE citizens alike can form without visiting the US. Your registered agent provides the mandatory in-state street address for official state and legal notices, and the IRS EIN is obtained by fax or mail.`,
    },
    {
      question: "How much does an IRS EIN cost for founders in Dubai?",
      answer: `An EIN costs $0 (0 AED) direct from the IRS: file Form SS-4 by fax or mail, writing “Foreign” on Line 7b if you have no SSN. Agencies charge $75–$300 only as an optional convenience fee for filing the same free form on your behalf — there is no IRS fee to pay.`,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <ArticleJsonLd
        headline="US LLC Cost from Dubai &amp; UAE (2026) — Fees in AED"
        description="Forming a US LLC from Dubai or the UAE? Year-1 and 5-year costs in AED for Wyoming, Delaware and New Mexico, the Free Zone licence benchmark, and IRS EIN costs."
        datePublished="2026-11-19"
        dateModified="2026-11-20"
        url="https://www.getllccostcalculator.com/guides/us-llc-cost-from-dubai"
      />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "US LLC Cost from Dubai & UAE", item: "/guides/us-llc-cost-from-dubai" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        US LLC Cost from Dubai &amp; UAE (2026): Complete Fee Breakdown in AED
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        A UAE free-zone licence starts around AED 5,500 a year and a Dubai mainland licence from AED 12,000, before the Ejari office lease. A US LLC has no licence renewal and no office lease at all — the formation fee and a yearly agent are the whole bill. The calculator below is pre-loaded in dirhams with Wyoming, so Year-1 and 5-year totals are in AED.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        In dirhams, year one is {f.wyYear1Usd} ({f.wyYear1Local}) for Wyoming, {f.nmYear1Usd} ({f.nmYear1Local}) for New Mexico and {f.deYear1Usd} ({f.deYear1Local}) for Delaware, agent included at {f.agentPerYear} a year. Five years: {f.wyFiveYearUsd} ({f.wyFiveYearLocal}), {f.nmFiveYearUsd} ({f.nmFiveYearLocal}) and {f.deFiveYearUsd} ({f.deFiveYearLocal}). The dirham is pegged to the US dollar, so the {FX_RATE_DATE} rate of {f.rate} AED per $1 barely moves — the calculator still lets you change it.
      </p>

      <div className="mt-10">
        <NonResidentCalculator initialCurrencyCode="AED" initialStateSlug="wyoming" />
      </div>

      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        The full <Link href="/tools/non-resident-llc-cost-calculator?currency=AED" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator in AED</Link> covers every state, with the agent price, exchange rate and EIN option adjustable. The general <Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">non-resident LLC guide</Link> covers the filing steps.
      </p>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Wyoming vs Delaware vs New Mexico — Year-1 and 5-year costs in AED
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
        The table prices the three US states the same way a licence quote is priced: a one-off formation fee, a yearly charge, and the year-one and five-year totals with the agent. Five-year totals count five recurring payments, the site-wide convention.
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
        Without the agent, five years of state fees alone are {f.nmFiveYearStateOnly} in New Mexico, {f.wyFiveYearStateOnly} in Wyoming and {f.deFiveYearStateOnly} in Delaware. Delaware&apos;s {f.deAnnualTax} yearly tax is what makes its row the most expensive of the three.
      </p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          How this compares with a UAE Free Zone or Mainland licence
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          For scale, UAE Free Zone basic licence packages run from AED
          5,500–12,500 a year for a zero-visa licence (Meydan from AED 5,500;
          IFZA and RAKEZ from AED 5,750), while a Dubai DET Mainland
          commercial licence starts from AED 12,000 a year, excluding the
          mandatory Ejari office lease. A US LLC has no licence-renewal or
          office-lease cost at all: the state filing fee ({f.nmFormation} in
          New Mexico, {f.wyFormation} in Wyoming) plus a registered agent is
          the whole formation cost, and a New Mexico LLC pays no annual report
          fee at all.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
        A UAE licence renews every year with its full package fee. A Wyoming LLC pays a {f.wyAnnualReport} annual report plus its agent ({f.agentPerYear} a year in the calculator), while a New Mexico LLC pays only the agent. The agent is the one recurring service a UAE founder cannot skip, because a foreign address does not qualify as a registered office.
      </p>
      </section>

            <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          The dirham peg makes the maths stable
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The UAE dirham is pegged to the US dollar, so the AED figures on this page barely move between visits — the {FX_RATE_DATE} rate of {f.rate} AED per $1 is the rate your bank works from, give or take its own spread. The registered agent also bills in US dollars once a year. What does change year to year is the US side: the agent renewal and, in Wyoming, the {f.wyAnnualReport} annual report. New Mexico has no annual report, so the agent is the only recurring line there.
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
          <li><Link href="/tools/non-resident-llc-cost-calculator?currency=AED" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator — in AED</Link></li>
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
          <li><Link href="/guides/us-llc-cost-from-singapore" className="text-[#1769AA] hover:underline">US LLC Cost from Singapore — fees in SGD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-india" className="text-[#1769AA] hover:underline">US LLC Cost from India — fees in INR</Link></li>
          <li><Link href="/guides/us-llc-vs-uk-ltd-cost" className="text-[#1769AA] hover:underline">US LLC vs. UK Ltd Cost — 5-year operational fee comparison</Link></li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Operational and published registry fees only; consult a qualified UAE or international tax adviser regarding local compliance.
      </p>
    </div>
  );
}
