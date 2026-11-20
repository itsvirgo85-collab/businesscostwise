import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import ArticleJsonLd from "@/components/seo/ArticleJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import NonResidentCalculator from "@/components/calculators/NonResidentCalculator";
import { FX_RATE_DATE, countryGuideFigures } from "@/lib/countryGuideFigures";

export const metadata: Metadata = {
  title: { absolute: "US LLC Cost from the Netherlands (2026) — Filing Fees in EUR" },
  description:
    "Forming a US LLC from the Netherlands? Year-1 and 5-year costs in EUR for Wyoming, Delaware and New Mexico, the KvK €85.15 benchmark, and a US EIN for €0.",
  alternates: { canonical: "/guides/us-llc-cost-from-netherlands" },
  openGraph: {
    title: "US LLC Cost from the Netherlands (2026) — Filing Fees in EUR",
    description:
      "Forming a US LLC from the Netherlands? Year-1 and 5-year costs in EUR for Wyoming, Delaware and New Mexico, the KvK €85.15 benchmark, and a US EIN for €0.",
    type: "website",
    url: "/guides/us-llc-cost-from-netherlands",
  },
  twitter: {
    card: "summary_large_image",
    title: "US LLC Cost from the Netherlands (2026) — Filing Fees in EUR",
    description:
      "Forming a US LLC from the Netherlands? Year-1 and 5-year costs in EUR for Wyoming, Delaware and New Mexico, the KvK €85.15 benchmark, and a US EIN for €0.",
  },
};

export default function UsLlcCostFromNetherlandsPage() {
  const f = countryGuideFigures("EUR");

  const faqs = [
    {
      question: "What is the yearly upkeep of a US LLC in euros for a Dutch founder?",
      answer: `After year one, Wyoming costs ${f.wyOngoingUsd} (${f.wyOngoingLocal}) a year — a ${f.wyAnnualReport} annual report plus a ${f.agentPerYear}-a-year registered agent. New Mexico costs ${f.nmOngoingUsd} (${f.nmOngoingLocal}) a year, because there is no annual report fee and the agent is the only recurring cost. Delaware costs ${f.deOngoingUsd} a year, driven by its ${f.deAnnualTax} yearly tax. Converted figures are estimates at the ${FX_RATE_DATE} rate of €${f.rate} per $1.`,
    },
    {
      question: "Does a US LLC need a KvK registration or a UBO entry in the Netherlands?",
      answer: `No. The KvK registers Dutch businesses, and the UBO register records the owners of Dutch entities. A US LLC is registered with a US Secretary of State, not the KvK, so the LLC itself has no KvK or UBO entry. The only address the US side requires is the registered agent’s in-state street address.`,
    },
    {
      question: "Which US state is cheapest over five years in EUR?",
      answer: `New Mexico. State fees alone over five years are ${f.nmFiveYearStateOnly}, which is ${f.nmFiveYearLocal} with a ${f.agentPerYear}-a-year agent (${f.nmFiveYearUsd} in total). Wyoming is second at ${f.wyFiveYearStateOnly} in state fees (${f.wyFiveYearLocal} with the agent — ${f.wyFiveYearUsd} in total). Delaware is the most expensive of the three at ${f.deFiveYearStateOnly} in state fees, because of its yearly tax. Run the calculator above with your own agent cost to compare all three.`,
    },
    {
      question: "Can a Dutch founder get a US EIN for €0 without a formation agency?",
      answer: `Yes — and the number itself is free. The online EIN application needs an SSN or ITIN, so a Dutch founder files Form SS-4 by fax or mail instead, entering “Foreign” on Line 7b. The IRS charges $0; agencies charge $75–$300 for filing the same form, and fax processing typically takes about a week.`,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <ArticleJsonLd
        headline="US LLC Cost from the Netherlands (2026) — Filing Fees in EUR"
        description="Forming a US LLC from the Netherlands? Year-1 and 5-year costs in EUR for Wyoming, Delaware and New Mexico, the KvK €85.15 benchmark, and a US EIN for €0."
        datePublished="2026-11-19"
        dateModified="2026-11-20"
        url="https://www.getllccostcalculator.com/guides/us-llc-cost-from-netherlands"
      />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "US LLC Cost from the Netherlands", item: "/guides/us-llc-cost-from-netherlands" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        US LLC Cost from the Netherlands (2026): Complete Fee Breakdown in EUR
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        Registering a business in the Netherlands is a single KvK visit and a €85.15 one-off fee, with no annual KvK charge. A US LLC is a different shape of cost: the formation fee is comparably small, but a registered agent repeats every year. The calculator below is pre-loaded in euros with Wyoming, so you can see the Year-1 and 5-year totals in EUR before choosing a state.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        The yearly cost after year one is what separates the three states. Wyoming runs {f.wyOngoingUsd} ({f.wyOngoingLocal}) a year, New Mexico {f.nmOngoingUsd} ({f.nmOngoingLocal}) and Delaware {f.deOngoingUsd} ({f.deOngoingLocal}) — each including the {f.agentPerYear}-a-year agent. Year one lands at {f.wyYear1Usd} ({f.wyYear1Local}), {f.nmYear1Usd} ({f.nmYear1Local}) and {f.deYear1Usd} ({f.deYear1Local}); five years at {f.wyFiveYearUsd} ({f.wyFiveYearLocal}), {f.nmFiveYearUsd} ({f.nmFiveYearLocal}) and {f.deFiveYearUsd} ({f.deFiveYearLocal}). Conversions use the {FX_RATE_DATE} rate of €{f.rate} per $1, adjustable in the calculator.
      </p>

      <div className="mt-10">
        <NonResidentCalculator initialCurrencyCode="EUR" initialStateSlug="wyoming" />
      </div>

      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        The full <Link href="/tools/non-resident-llc-cost-calculator?currency=EUR" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator in EUR</Link> covers all fifty states and lets you change the agent price, the exchange rate and the EIN option. The general <Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">non-resident LLC guide</Link> walks through the filing steps.
      </p>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          How this compares with registering in the Netherlands
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          For scale, the Dutch Chamber of Commerce (KvK) charges a one-off
          registration fee of €85.15 (2026) to register a business, and there
          is no annual KvK fee. A US LLC is in the same range to set up — the
          state filing fee is {f.nmFormation} in New Mexico and{" "}
          {f.wyFormation} in Wyoming — but the ongoing cost is different: a US
          LLC needs a registered agent every year ({f.agentPerYear} in the
          calculator), while a KvK registration has no yearly renewal fee.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
        The contrast with home is the renewal. A KvK registration has no yearly fee at all; a US LLC always carries the agent ({f.agentPerYear} a year in the calculator), and Wyoming adds a {f.wyAnnualReport} annual report on top. New Mexico has no annual report, so the agent is the only recurring line there. A foreign address does not qualify as a registered office, so the agent cannot be skipped.
      </p>
      </section>

            <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Getting the EIN by fax from the Netherlands
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The online EIN application asks for a Social Security Number or ITIN, which a Dutch founder does not have — so the route is Form SS-4 by fax or mail, with “Foreign” written on Line 7b. The IRS charges $0 for the number itself; fax processing typically takes about a week, and the confirmation letter arrives by post. Agencies charge $75–$300 to file the same free form, so the only thing you are paying for is someone else sending the fax.
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
          <li><Link href="/guides/us-llc-cost-from-ireland" className="text-[#1769AA] hover:underline">US LLC Cost from Ireland — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-new-zealand" className="text-[#1769AA] hover:underline">US LLC Cost from New Zealand — fees in NZD</Link></li>
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
        Operational and published registry fees only; consult a qualified Dutch tax or legal adviser regarding Belastingdienst and local compliance.
      </p>
    </div>
  );
}
