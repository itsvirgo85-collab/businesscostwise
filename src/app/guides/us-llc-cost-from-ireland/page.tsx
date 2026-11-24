import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import ArticleJsonLd from "@/components/seo/ArticleJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import NonResidentCalculator from "@/components/calculators/NonResidentCalculator";
import { FX_RATE_DATE, countryGuideFigures } from "@/lib/countryGuideFigures";

export const metadata: Metadata = {
  title: { absolute: "US LLC Cost from Ireland (2026) — Filing Fees in EUR" },
  description:
    "Forming a US LLC from Ireland? Year-1 and 5-year costs in EUR for Wyoming, Delaware and New Mexico, the CRO €50 benchmark, and agency fees in the hundreds.",
  alternates: { canonical: "/guides/us-llc-cost-from-ireland" },
  openGraph: {
    title: "US LLC Cost from Ireland (2026) — Filing Fees in EUR",
    description:
      "Forming a US LLC from Ireland? Year-1 and 5-year costs in EUR for Wyoming, Delaware and New Mexico, the CRO €50 benchmark, and agency fees in the hundreds.",
    type: "website",
    url: "/guides/us-llc-cost-from-ireland",
  },
  twitter: {
    card: "summary_large_image",
    title: "US LLC Cost from Ireland (2026) — Filing Fees in EUR",
    description:
      "Forming a US LLC from Ireland? Year-1 and 5-year costs in EUR for Wyoming, Delaware and New Mexico, the CRO €50 benchmark, and agency fees in the hundreds.",
  },
};

export default function UsLlcCostFromIrelandPage() {
  const f = countryGuideFigures("EUR");

  const faqs = [
    {
      question: "How much does a US LLC cost an Irish founder in EUR each year after year one?",
      answer: `After year one the yearly bill is ${f.nmOngoingUsd} (${f.nmOngoingLocal}) in New Mexico, ${f.wyOngoingUsd} (${f.wyOngoingLocal}) in Wyoming and ${f.deOngoingUsd} (${f.deOngoingLocal}) in Delaware. Year one itself, with the agent, is ${f.nmYear1Usd} (${f.nmYear1Local}), ${f.wyYear1Usd} (${f.wyYear1Local}) and ${f.deYear1Usd} (${f.deYear1Local}). Converted figures are estimates at the ${FX_RATE_DATE} rate of €${f.rate} per $1.`,
    },
    {
      question: "What is the Section 137 bond, and does a US LLC need anything like it?",
      answer: `An Irish limited company without an EEA-resident director must put up a Section 137 bond of €25,000. A US LLC has no director-residency rule at all, so there is no bond, no minimum capital and no resident-director requirement — the only mandatory US-side presence is a registered agent with a physical address in the formation state.`,
    },
    {
      question: "How does an Irish founder get a US EIN without an SSN?",
      answer: `The online EIN application asks for a Social Security Number or ITIN, which an Irish founder does not have — so the online route is closed and the paper route is the only one. File Form SS-4 by fax or mail, write “Foreign” on Line 7b where it asks for a Social Security Number, and the IRS issues the EIN for $0. Agencies charge $75–$300 to file the same free form; fax processing typically takes about a week.`,
    },
    {
      question: "Can an Irish founder close a US LLC from Ireland, and what does it cost?",
      answer: `Yes. Dissolution is filed online with the formation state’s Secretary of State — no US visit is needed. The official filing fee is ${f.nmDissolution} in New Mexico and ${f.wyDissolution} in Wyoming. Pay any annual fees or taxes still owed first, because some states will not accept a dissolution while money is owed, and once the filing is approved the state stops billing future annual fees.`,
    },
    {
      question: "How do I form US LLC from Ireland?",
      answer: `File online in Wyoming, New Mexico or Delaware — no US visit, no US address and no minimum capital are needed. Appoint a registered agent, file the Articles of Organization (${f.nmFormation} in New Mexico, ${f.wyFormation} in Wyoming), then get your EIN free from the IRS by faxing Form SS-4. There is no €25,000 bond and no resident-director rule.`,
    },
    {
      question: "What is the US LLC cost from Ireland?",
      answer: `Year one with the agent is ${f.nmYear1Usd} (${f.nmYear1Local}) in New Mexico, ${f.wyYear1Usd} (${f.wyYear1Local}) in Wyoming and ${f.deYear1Usd} (${f.deYear1Local}) in Delaware. After that the yearly cost is ${f.nmOngoingUsd} (${f.nmOngoingLocal}), ${f.wyOngoingUsd} (${f.wyOngoingLocal}) and ${f.deOngoingUsd} (${f.deOngoingLocal}) — Delaware is dearest because of its {f.deAnnualTax} annual tax.`,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <ArticleJsonLd
        headline="US LLC Cost from Ireland (2026) — Filing Fees in EUR"
        description="Forming a US LLC from Ireland? Year-1 and 5-year costs in EUR for Wyoming, Delaware and New Mexico, the CRO €50 benchmark, and agency fees in the hundreds."
        datePublished="2026-11-19"
        dateModified="2026-11-20"
        url="https://www.getllccostcalculator.com/guides/us-llc-cost-from-ireland"
      />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "US LLC Cost from Ireland", item: "/guides/us-llc-cost-from-ireland" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        US LLC Cost from Ireland (2026): Year-1 &amp; Ongoing Fees in EUR
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        Forming a company in Ireland runs through the CRO: Form A1, a €50 online filing fee, and a €25,000 Section 137 bond unless one of the directors lives in the EEA. A US LLC works the other way round — one online filing with the Secretary of State, no director-residency rule, no bond and no minimum capital. The calculator below is pre-loaded in euros with Wyoming, so the Year-1 and 5-year totals are visible in EUR before any paperwork starts.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        Stretch the view to five years and the order stays the same: New Mexico {f.nmFiveYearUsd} ({f.nmFiveYearLocal}), Wyoming {f.wyFiveYearUsd} ({f.wyFiveYearLocal}) and Delaware {f.deFiveYearUsd} ({f.deFiveYearLocal}), each with a {f.agentPerYear}-a-year registered agent counted in. Year one is {f.nmYear1Usd} ({f.nmYear1Local}) in New Mexico, {f.wyYear1Usd} ({f.wyYear1Local}) in Wyoming and {f.deYear1Usd} ({f.deYear1Local}) in Delaware. Converted figures are estimates at the {FX_RATE_DATE} rate of €{f.rate} per $1 — the calculator lets you overwrite the rate with the one your bank quotes.
      </p>

      <div className="mt-10">
        <NonResidentCalculator initialCurrencyCode="EUR" initialStateSlug="wyoming"
          compact
          heading="Price it in euros from Ireland — Wyoming first"
          intro="Wyoming is the starting point below. Delaware — the incorporation state Irish founders most often meet when dealing with US companies — is one click away in the buttons, as is New Mexico with its cheaper yearly bill."
          stateNote="Wyoming, Delaware and New Mexico are the three states priced on this page — the full calculator covers all fifty."
          currencyNote={`Converted at the default rate of €${f.rate} per $1 (${FX_RATE_DATE}). Euro totals are estimates: the calculator's rate field exists so you can overwrite it with the rate your Irish bank quotes.`}
          einNote="File Form SS-4 by fax or mail and write “Foreign” on Line 7b where it asks for a Social Security Number. The IRS issues EINs for $0 — the online application does not work without an SSN or ITIN."
          agentHint="Typical range: $99–$199 per year; the calculator defaults to $125."
          excludesBody="Taxes, bank fees, operating-agreement drafting and professional advice are not included. This tool shows operational and published state filing fees only — consult a qualified Irish tax or legal adviser regarding Revenue and local compliance, as the disclaimer below notes."
          resultNote={`Euro figures are estimates converted at €${f.rate} per $1 (${FX_RATE_DATE}); the underlying state fees are from verified state data.`}
          fiveYearNote="Five recurring payments over five years, plus formation and one-time items. Delaware's yearly line is its $400 annual tax plus the agent — the highest of the three."
          scenarioTitle="What each state costs to run — and to close — in EUR"
          scenarioIntro="Same settings as above. The dissolution column is the official filing fee for closing the LLC — the questions below compare it with the CRO route."
          scenarioVariant="exit"
          scenarioFootnote={`Five-year totals count five recurring payments. Dissolution filing fees come from the site's dissolution-fee table — confirm the current fee with the Secretary of State before filing. At the defaults above, five years in Wyoming are ${f.wyFiveYearLocal}.`}
        />
      </div>

      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        The calculator above is a cut-down version covering Wyoming, Delaware and New Mexico in EUR. Open the <Link href="/tools/non-resident-llc-cost-calculator?currency=EUR" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator in EUR</Link> to compare every state and change the agent price, the exchange rate and the EIN option, or read the general <Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">non-resident LLC guide</Link> for the filing steps.
      </p>

            <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Paying the US fees from an Irish bank account
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Every US state fee is charged in US dollars, so an Irish bank or card converts the payment from euros at its own rate on the day. The calculator on this page has a rate field for exactly that reason — set it to the rate your bank quotes and the EUR totals follow. The registered agent bills in dollars too, once a year. Keep the approved formation document and the EIN confirmation letter in one place once they arrive: banks and payment providers usually ask for both when you open a US business account.
        </p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          How this compares with forming a company in Ireland
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          For scale, the Irish Companies Registration Office (CRO) charges
          €50 to incorporate a company online with Form A1, and €25 to reserve
          a company name — the reservation fee is credited if the company is
          filed within 28 days. An Irish company without an EEA-resident
          director must also put up a Section 137 bond of €25,000. A US LLC
          has no equivalent director, bond, or minimum-capital requirement:
          the state filing fee ({f.nmFormation} in New Mexico, {f.wyFormation}{" "}
          in Wyoming) plus a registered agent is the whole formation cost.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
        The yearly rhythm is what differs most. An Irish company files a €20 annual return with the CRO every year; a Wyoming LLC files a {f.wyAnnualReport} annual report plus its agent, and a New Mexico LLC files nothing annually — the agent is the only recurring line. That agent ({f.agentPerYear} a year in the calculator) is unavoidable for an Irish founder, because a foreign address does not qualify as a registered office.
       Count state fees alone and five years come to {f.nmFiveYearStateOnly} in New Mexico, {f.wyFiveYearStateOnly} in Wyoming and {f.deFiveYearStateOnly} in Delaware — Delaware&apos;s {f.deAnnualTax} yearly tax is the whole reason its total runs higher.</p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          CRO company vs US LLC — formation and yearly fees
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The Irish side is cheap to file and expensive to secure; the US side is the other way round. The table compares the same four lines on both sides.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-3 font-semibold">Item</th>
                <th className="py-2 pr-3 font-semibold">Ireland</th>
                <th className="py-2 font-semibold">US LLC</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Incorporation filing</td>
                <td className="py-2 pr-3">€50 online, Form A1 (CRO)</td>
                <td className="py-2">New Mexico {f.nmFormation} · Wyoming {f.wyFormation}</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Name reservation</td>
                <td className="py-2 pr-3">€25, credited if filed within 28 days</td>
                <td className="py-2">Optional — a separate state filing, not part of formation</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Director-residency cost</td>
                <td className="py-2 pr-3">€25,000 Section 137 bond without an EEA director</td>
                <td className="py-2">No bond, no minimum capital, no resident director</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Annual filing</td>
                <td className="py-2 pr-3">Annual return to the CRO every year (€20)</td>
                <td className="py-2">Wyoming {f.wyAnnualReport} annual report · New Mexico none</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-slate-500">
          The bond is the line that has no US equivalent — a US LLC&apos;s only mandatory US-side presence is the registered agent.
        </p>
      </section>

      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        Check the Delaware line in any quote you compare: several guides still show the old $300 annual tax, but Delaware charges {f.deAnnualTax} a year for tax year 2026 — first payable 1 June 2027 — on {f.deFormation} formation.
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
          <li><Link href="/guides/us-llc-cost-from-uk" className="text-[#1769AA] hover:underline">US LLC Cost from the UK — fees in GBP</Link></li>
          <li><Link href="/guides/us-llc-cost-from-netherlands" className="text-[#1769AA] hover:underline">US LLC Cost from the Netherlands — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-germany" className="text-[#1769AA] hover:underline">US LLC Cost from Germany — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-new-zealand" className="text-[#1769AA] hover:underline">US LLC Cost from New Zealand — fees in NZD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-australia" className="text-[#1769AA] hover:underline">US LLC Cost from Australia — fees in AUD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-canada" className="text-[#1769AA] hover:underline">US LLC Cost from Canada — fees in CAD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-india" className="text-[#1769AA] hover:underline">US LLC Cost from India — fees in INR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-singapore" className="text-[#1769AA] hover:underline">US LLC Cost from Singapore — fees in SGD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-dubai" className="text-[#1769AA] hover:underline">US LLC Cost from Dubai & UAE — fees in AED</Link></li>
          <li><Link href="/llc-cost-by-state/wyoming" className="text-[#1769AA] hover:underline">Wyoming LLC Cost — formation &amp; annual report fees</Link></li>
          <li><Link href="/llc-cost-by-state/new-mexico" className="text-[#1769AA] hover:underline">New Mexico LLC Cost — formation &amp; $0 annual report</Link></li>
          <li><Link href="/llc-cost-by-state/delaware" className="text-[#1769AA] hover:underline">Delaware LLC Cost — formation &amp; annual tax</Link></li>
          <li><Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">Non-Resident LLC Guide — Can a Non-Resident Form an LLC in the USA?</Link></li>
          <li><Link href="/annual-report-requirements-by-state" className="text-[#1769AA] hover:underline">Annual Report Requirements by State</Link></li>
          <li><Link href="/guides/us-llc-vs-uk-ltd-cost" className="text-[#1769AA] hover:underline">US LLC vs. UK Ltd Cost — 5-year operational fee comparison</Link></li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Operational and published registry fees only; consult a qualified Irish tax or legal adviser regarding Revenue and local compliance.
      </p>
    </div>
  );
}
