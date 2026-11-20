import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import ArticleJsonLd from "@/components/seo/ArticleJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import NonResidentCalculator from "@/components/calculators/NonResidentCalculator";
import { FX_RATE_DATE, countryGuideFigures } from "@/lib/countryGuideFigures";

export const metadata: Metadata = {
  title: { absolute: "US LLC Cost from India (2026) — Filing Fees in INR" },
  description:
    "Forming a US LLC from India? Year-1 and 5-year costs in INR for Wyoming, Delaware and New Mexico, the MCA SPICe+ ₹0 benchmark, and a US EIN for ₹0 without an SSN.",
  alternates: { canonical: "/guides/us-llc-cost-from-india" },
  openGraph: {
    title: "US LLC Cost from India (2026) — Filing Fees in INR",
    description:
      "Forming a US LLC from India? Year-1 and 5-year costs in INR for Wyoming, Delaware and New Mexico, the MCA SPICe+ ₹0 benchmark, and a US EIN for ₹0 without an SSN.",
    type: "website",
    url: "/guides/us-llc-cost-from-india",
  },
  twitter: {
    card: "summary_large_image",
    title: "US LLC Cost from India (2026) — Filing Fees in INR",
    description:
      "Forming a US LLC from India? Year-1 and 5-year costs in INR for Wyoming, Delaware and New Mexico, the MCA SPICe+ ₹0 benchmark, and a US EIN for ₹0 without an SSN.",
  },
};

export default function UsLlcCostFromIndiaPage() {
  const f = countryGuideFigures("INR");

  const faqs = [
    {
      question: "How much does a Wyoming or New Mexico LLC cost per year in INR?",
      answer: `Wyoming costs ${f.wyYear1Usd} (${f.wyYear1Local}) in year one and ${f.wyOngoingUsd} (${f.wyOngoingLocal}) a year after that, with a ${f.agentPerYear}-a-year registered agent. New Mexico costs ${f.nmYear1Usd} (${f.nmYear1Local}) in year one and ${f.nmOngoingUsd} (${f.nmOngoingLocal}) a year after that, because New Mexico charges a $0 state renewal fee. Converted figures are estimates at the ${FX_RATE_DATE} rate of ${f.rate} INR per $1.`,
    },
    {
      question: "Do Indian founders pay higher US state fees than US residents?",
      answer: `No. The state fee schedule makes no distinction by nationality — an Indian founder pays the same filing and renewal fees as a US citizen in the same state. The only additional cost is the commercial registered agent ($99–$150 a year), which provides the in-state street address the state requires.`,
    },
    {
      question: "Can an Indian resident get a US EIN for ₹0 without an SSN?",
      answer: `Yes. The IRS charges $0 (₹0) for an EIN: file Form SS-4 by fax or mail and write “Foreign” on Line 7b, since you have no SSN. No third-party filing fee is needed — agencies that charge for EIN filing are selling a convenience service for a free IRS form.`,
    },
    {
      question: "What is the difference between a registered agent address and a US virtual mailbox?",
      answer: `A registered agent ($99–$150 a year) is strictly for official Secretary of State and legal notices — it is the address the state has on record and where legal papers are served. A US virtual mailbox ($10–$30 a month) is for everyday mail: banking letters, vendor mail, and mail scanning. The agent cannot be replaced by a mailbox, and a mailbox cannot receive legal service.`,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <ArticleJsonLd
        headline="US LLC Cost from India (2026) — Filing Fees in INR"
        description="Forming a US LLC from India? Year-1 and 5-year costs in INR for Wyoming, Delaware and New Mexico, the MCA SPICe+ ₹0 benchmark, and a US EIN for ₹0 without an SSN."
        datePublished="2026-11-19"
        dateModified="2026-11-20"
        url="https://www.getllccostcalculator.com/guides/us-llc-cost-from-india"
      />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "US LLC Cost from India", item: "/guides/us-llc-cost-from-india" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        US LLC Cost from India (2026): Complete Setup &amp; Annual Fees in INR
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        Incorporating in India runs through the MCA and its SPICe+ form — the government filing fee is ₹0 up to ₹15 lakh of authorised capital, plus stamp duty, a ₹1,000 name reservation and DSC charges. A US LLC has no stamp-duty layer and no DSC: the state filing fee plus a registered agent is the whole formation cost. The calculator below is pre-loaded in rupees with Wyoming, so Year-1 and 5-year totals are in INR.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        Five years with the agent: Wyoming {f.wyFiveYearUsd} ({f.wyFiveYearLocal}), New Mexico {f.nmFiveYearUsd} ({f.nmFiveYearLocal}), Delaware {f.deFiveYearUsd} ({f.deFiveYearLocal}). Year one: {f.wyYear1Usd} ({f.wyYear1Local}), {f.nmYear1Usd} ({f.nmYear1Local}), {f.deYear1Usd} ({f.deYear1Local}). All conversions use the {FX_RATE_DATE} rate of {f.rate} INR per $1 — change the rate in the calculator to match your bank or card provider.
      </p>

      <div className="mt-10">
        <NonResidentCalculator initialCurrencyCode="INR" initialStateSlug="wyoming" />
      </div>

      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        For every state and full control of the agent price, exchange rate and EIN option, open the <Link href="/tools/non-resident-llc-cost-calculator?currency=INR" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator in INR</Link>. The general <Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">non-resident LLC guide</Link> covers the filing steps.
      </p>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Wyoming vs Delaware vs New Mexico — Year-1 and 5-year costs in INR
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
        The table adds up the same three states three ways: the one-off formation fee, the yearly state charge, and the year-one and five-year totals with the agent. Five-year totals count five recurring payments, the convention this site uses on every page.
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
        Count only what the states charge and five years come to {f.nmFiveYearStateOnly} in New Mexico, {f.wyFiveYearStateOnly} in Wyoming and {f.deFiveYearStateOnly} in Delaware. Delaware&apos;s {f.deAnnualTax} yearly tax is the whole reason its total runs higher.
      </p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          How this compares with incorporating in India
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          For scale, the MCA&apos;s SPICe+ government filing fee is ₹0 (Nil)
          for authorised capital up to ₹15 lakh, with state stamp duty of
          ₹200–₹12,600 depending on the state, a ₹1,000 name reservation fee
          (SPICe+ Part A), and Digital Signature Certificate (DSC) charges
          separate. A US LLC has no stamp-duty layer and no DSC requirement:
          the state filing fee ({f.nmFormation} in New Mexico, {f.wyFormation}{" "}
          in Wyoming) plus a registered agent is the whole formation cost, and
          a New Mexico LLC pays no annual report fee at all.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
        Yearly filings tell the same story. An Indian company files annual returns with the MCA every year; a Wyoming LLC files a {f.wyAnnualReport} annual report plus its agent, and a New Mexico LLC files no annual report at all. The agent ({f.agentPerYear} a year in the calculator) is the recurring line an Indian founder cannot drop, because a foreign address does not qualify as a registered office.
      </p>
      </section>

            <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Paying US fees from India
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The state filing fee and the agent are both paid in US dollars — usually by card or wire from an Indian bank, which converts the rupees at its own rate. Before you pay, set the calculator’s rate field to the rate your bank quotes, so the INR totals match the debit you will actually see. The agent renews in dollars once a year. The only other dollar payment in year one is the EIN — $0 from the IRS if you file Form SS-4 yourself.
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
          <li><Link href="/tools/non-resident-llc-cost-calculator?currency=INR" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator — in INR</Link></li>
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
          <li><Link href="/guides/us-llc-cost-from-dubai" className="text-[#1769AA] hover:underline">US LLC Cost from Dubai &amp; UAE — fees in AED</Link></li>
          <li><Link href="/guides/us-llc-vs-uk-ltd-cost" className="text-[#1769AA] hover:underline">US LLC vs. UK Ltd Cost — 5-year operational fee comparison</Link></li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Operational and published registry fees only; consult a qualified Chartered Accountant or legal adviser in India regarding FEMA, ODI, and local compliance.
      </p>
    </div>
  );
}
