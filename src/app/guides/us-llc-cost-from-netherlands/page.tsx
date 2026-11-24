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
      answer: `New Mexico. After year one it costs ${f.nmOngoingUsd} (${f.nmOngoingLocal}) a year — the ${f.agentPerYear}-a-year agent alone, because there is no annual report fee. Wyoming is next at ${f.wyOngoingUsd} (${f.wyOngoingLocal}) a year, a ${f.wyAnnualReport} annual report plus the agent, and Delaware is the most expensive at ${f.deOngoingUsd} (${f.deOngoingLocal}) a year, driven by its ${f.deAnnualTax} yearly tax. Converted figures are estimates at the ${FX_RATE_DATE} rate of €${f.rate} per $1.`,
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
    {
      question: "How do I form US LLC from Netherlands?",
      answer: `File online in Wyoming, New Mexico or Delaware — no US visit, no US address and no minimum capital are needed. Appoint a registered agent, file the Articles of Organization (${f.nmFormation} in New Mexico, ${f.wyFormation} in Wyoming), then get your EIN free from the IRS by faxing Form SS-4. The LLC itself needs no KvK registration or UBO entry.`,
    },
    {
      question: "What is the US LLC cost from Netherlands?",
      answer: `Year one with the agent is ${f.nmYear1Usd} (${f.nmYear1Local}) in New Mexico, ${f.wyYear1Usd} (${f.wyYear1Local}) in Wyoming and ${f.deYear1Usd} (${f.deYear1Local}) in Delaware. After that the yearly cost is ${f.nmOngoingUsd} (${f.nmOngoingLocal}), ${f.wyOngoingUsd} (${f.wyOngoingLocal}) and ${f.deOngoingUsd} (${f.deOngoingLocal}) — Delaware is dearest because of its {f.deAnnualTax} annual tax, and New Mexico charges no annual report fee.`,
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
        <NonResidentCalculator initialCurrencyCode="EUR" initialStateSlug="wyoming"
          compact
          heading="Your LLC in euros — Wyoming first"
          intro="Wyoming is the starting point below. Switch to New Mexico in the buttons to see the cheapest five-year total — it files no annual report at all — or to Delaware to compare."
          stateNote="The three states priced here are Wyoming, New Mexico and Delaware; the full calculator covers all fifty."
          currencyNote={`The euro figures use the default rate of €${f.rate} per $1 (${FX_RATE_DATE}). That is an estimate, not a bank rate — your bank converts at its own rate on the day you pay.`}
          einNote="The IRS charges $0 for an EIN. Because the online application needs an SSN or ITIN, a Dutch founder files Form SS-4 by fax or mail with “Foreign” on Line 7b."
          agentHint="Most commercial agents charge $99–$199 a year — this guide uses $125."
          excludesBody="Taxes, bank fees, operating-agreement drafting and professional advice are not included. This tool shows operational and published state filing fees only — consult a qualified Dutch tax or legal adviser regarding Belastingdienst and local compliance, as the disclaimer below notes."
          resultNote={`Converted at €${f.rate} per $1 (${FX_RATE_DATE}) — state fees from verified state data, euro figures are estimates.`}
          fiveYearNote="Five recurring payments over five years, plus formation and one-time items. The state-fees-only column is the bill before the agent — New Mexico's is just the $50 formation fee."
          scenarioTitle="Five years of state fees, with and without the agent — in EUR"
          scenarioIntro="Same settings as above. The middle columns strip the agent out, so you can see what the state itself charges over five years versus what the agent adds."
          scenarioVariant="stateOnly"
          scenarioFootnote={`Five-year totals count five recurring payments. The state-fees-only columns count formation plus five annual state charges, with no agent. At the defaults above, five years in Wyoming with the agent are ${f.wyFiveYearLocal}.`}
        />
      </div>

      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        The calculator above covers Wyoming, Delaware and New Mexico in EUR. The full <Link href="/tools/non-resident-llc-cost-calculator?currency=EUR" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator in EUR</Link> covers all fifty states and lets you change the agent price, the exchange rate and the EIN option. The general <Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">non-resident LLC guide</Link> walks through the filing steps.
      </p>

            <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Getting the EIN by fax from the Netherlands
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The online EIN application asks for a Social Security Number or ITIN, which a Dutch founder does not have — so the route is Form SS-4 by fax or mail, with “Foreign” written on Line 7b. The IRS charges $0 for the number itself; fax processing typically takes about a week, and the confirmation letter arrives by post. Agencies charge $75–$300 to file the same free form, so the only thing you are paying for is someone else sending the fax.
        </p>
      </section>

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
          KvK registration vs US LLC — one-off and yearly fees
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The Dutch side is a single €85.15 visit with no yearly charge; the US side is a small filing fee plus a yearly agent. The table puts both shapes next to each other.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-3 font-semibold">Item</th>
                <th className="py-2 pr-3 font-semibold">Netherlands</th>
                <th className="py-2 font-semibold">US LLC</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Registration / formation fee</td>
                <td className="py-2 pr-3">€85.15 one-off (KvK)</td>
                <td className="py-2">New Mexico {f.nmFormation} · Wyoming {f.wyFormation}</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Yearly registry fee</td>
                <td className="py-2 pr-3">€0 — no annual KvK fee</td>
                <td className="py-2">Wyoming {f.wyAnnualReport} annual report · New Mexico $0</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Registered agent</td>
                <td className="py-2 pr-3">Not required</td>
                <td className="py-2">{f.agentPerYear} a year (calculator default)</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-semibold text-[#102A43]">UBO / owner register</td>
                <td className="py-2 pr-3">UBO entry for Dutch entities</td>
                <td className="py-2">No KvK or UBO entry</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-slate-500">
          The agent is the line a KvK registration does not have — it repeats every year, while the KvK fee is paid once.
        </p>
      </section>

      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        Before you compare quotes, check the Delaware line: several guides still show the old $300 annual tax, but Delaware charges {f.deAnnualTax} a year for tax year 2026 — first payable 1 June 2027 — on {f.deFormation} formation.
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
          <li><Link href="/tools/non-resident-llc-cost-calculator?currency=EUR" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator — in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-germany" className="text-[#1769AA] hover:underline">US LLC Cost from Germany — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-ireland" className="text-[#1769AA] hover:underline">US LLC Cost from Ireland — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-uk" className="text-[#1769AA] hover:underline">US LLC Cost from the UK — fees in GBP</Link></li>
          <li><Link href="/guides/us-llc-cost-from-australia" className="text-[#1769AA] hover:underline">US LLC Cost from Australia — fees in AUD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-canada" className="text-[#1769AA] hover:underline">US LLC Cost from Canada — fees in CAD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-new-zealand" className="text-[#1769AA] hover:underline">US LLC Cost from New Zealand — fees in NZD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-india" className="text-[#1769AA] hover:underline">US LLC Cost from India — fees in INR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-singapore" className="text-[#1769AA] hover:underline">US LLC Cost from Singapore — fees in SGD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-dubai" className="text-[#1769AA] hover:underline">US LLC Cost from Dubai & UAE — fees in AED</Link></li>
          <li><Link href="/llc-cost-by-state/new-mexico" className="text-[#1769AA] hover:underline">New Mexico LLC Cost — formation &amp; $0 annual report</Link></li>
          <li><Link href="/llc-cost-by-state/wyoming" className="text-[#1769AA] hover:underline">Wyoming LLC Cost — formation &amp; annual report fees</Link></li>
          <li><Link href="/llc-cost-by-state/delaware" className="text-[#1769AA] hover:underline">Delaware LLC Cost — formation &amp; annual tax</Link></li>
          <li><Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">Non-Resident LLC Guide — Can a Non-Resident Form an LLC in the USA?</Link></li>
          <li><Link href="/annual-report-requirements-by-state" className="text-[#1769AA] hover:underline">Annual Report Requirements by State</Link></li>
          <li><Link href="/guides/us-llc-vs-uk-ltd-cost" className="text-[#1769AA] hover:underline">US LLC vs. UK Ltd Cost — 5-year operational fee comparison</Link></li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Operational and published registry fees only; consult a qualified Dutch tax or legal adviser regarding Belastingdienst and local compliance.
      </p>
    </div>
  );
}
