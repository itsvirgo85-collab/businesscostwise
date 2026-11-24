import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import ArticleJsonLd from "@/components/seo/ArticleJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import NonResidentCalculator from "@/components/calculators/NonResidentCalculator";
import { FX_RATE_DATE, countryGuideFigures } from "@/lib/countryGuideFigures";

export const metadata: Metadata = {
  title: { absolute: "US LLC Cost from Germany (2026) — Filing Fees in EUR" },
  description:
    "Forming a US LLC from Germany? Year-1 and 5-year costs in EUR for Wyoming, Delaware and New Mexico, the German UG/GmbH benchmark, and a US EIN for €0.",
  alternates: { canonical: "/guides/us-llc-cost-from-germany" },
  openGraph: {
    title: "US LLC Cost from Germany (2026) — Filing Fees in EUR",
    description:
      "Forming a US LLC from Germany? Year-1 and 5-year costs in EUR for Wyoming, Delaware and New Mexico, the German UG/GmbH benchmark, and a US EIN for €0.",
    type: "website",
    url: "/guides/us-llc-cost-from-germany",
  },
  twitter: {
    card: "summary_large_image",
    title: "US LLC Cost from Germany (2026) — Filing Fees in EUR",
    description:
      "Forming a US LLC from Germany? Year-1 and 5-year costs in EUR for Wyoming, Delaware and New Mexico, the German UG/GmbH benchmark, and a US EIN for €0.",
  },
};

export default function UsLlcCostFromGermanyPage() {
  const f = countryGuideFigures("EUR");

  const faqs = [
    {
      question: "What are the ongoing US LLC costs in EUR for a founder in Germany?",
      answer: `Five years with the agent come to ${f.nmFiveYearUsd} (${f.nmFiveYearLocal}) in New Mexico, ${f.wyFiveYearUsd} (${f.wyFiveYearLocal}) in Wyoming and ${f.deFiveYearUsd} (${f.deFiveYearLocal}) in Delaware. The yearly bill after year one is ${f.nmOngoingUsd} (${f.nmOngoingLocal}) in New Mexico, ${f.wyOngoingUsd} (${f.wyOngoingLocal}) in Wyoming and ${f.deOngoingUsd} (${f.deOngoingLocal}) in Delaware. Converted figures are estimates at the ${FX_RATE_DATE} rate of €${f.rate} per $1.`,
    },
    {
      question: "Does forming a US LLC need a notary appointment or minimum capital like a GmbH?",
      answer: `No. A US LLC has $0 minimum share capital and is filed online directly with the Secretary of State — there is no notary appointment, no articles of association to notarise, and no Handelsregister entry to pay for. Compare that with a German UG or GmbH, where the notary alone costs roughly €105–€165 for a UG template deed and €276–€720 including VAT for a GmbH, before the €225 Handelsregister entry.`,
    },
    {
      question: "Which US states charge no annual report fee at all?",
      answer: `The states with a $0 annual report fee for LLCs are ${f.zeroReportStates}. New Mexico is the usual pick of the group, with state fees of ${f.nmFiveYearStateOnly} over five years in total. The agent still applies — typically $99–$150 a year (${f.agentPerYear} in the calculator above) — because a foreign address does not qualify. The annual report requirements page has the full list.`,
    },
    {
      question: "Can a founder in Germany get a US EIN for €0?",
      answer: `The EIN itself is free — the IRS charges $0 — but the route matters for timing. The online application needs an SSN or ITIN, so a German founder files Form SS-4 by fax or mail with “Foreign” on Line 7b and allows about a week for fax processing. The confirmation letter then arrives by post; keep it with the approved formation document, because banks and payment providers ask for both when you open a US business account. Agencies charge $75–$300 to send the same free form.`,
    },
    {
      question: "How do I form US LLC from Germany?",
      answer: `File online in Wyoming, New Mexico or Delaware — no US visit, no US address and no minimum capital are needed. Appoint a registered agent, file the Articles of Organization (${f.nmFormation} in New Mexico, ${f.wyFormation} in Wyoming), then get your EIN free from the IRS by faxing Form SS-4. No notary appointment and no minimum capital, unlike a GmbH.`,
    },
    {
      question: "What is the US LLC cost from Germany?",
      answer: `Priced in euros, year one with the agent is ${f.nmYear1Usd} (${f.nmYear1Local}) in New Mexico, ${f.wyYear1Usd} (${f.wyYear1Local}) in Wyoming and ${f.deYear1Usd} (${f.deYear1Local}) in Delaware. After that the yearly cost is ${f.nmOngoingUsd} (${f.nmOngoingLocal}), ${f.wyOngoingUsd} (${f.wyOngoingLocal}) and ${f.deOngoingUsd} (${f.deOngoingLocal}) — Delaware is dearest because of its {f.deAnnualTax} annual tax.`,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <ArticleJsonLd
        headline="US LLC Cost from Germany (2026) — Filing Fees in EUR"
        description="Forming a US LLC from Germany? Year-1 and 5-year costs in EUR for Wyoming, Delaware and New Mexico, the German UG/GmbH benchmark, and a US EIN for €0."
        datePublished="2026-11-19"
        dateModified="2026-11-20"
        url="https://www.getllccostcalculator.com/guides/us-llc-cost-from-germany"
      />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "US LLC Cost from Germany", item: "/guides/us-llc-cost-from-germany" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        US LLC Cost from Germany (2026): Setup &amp; Annual Fees in EUR
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        A German UG or GmbH starts at the notary — a template deed, a Handelsregister entry of €225, and a Gewerbeanmeldung on top. A US LLC starts at a web form: no notary, no articles to notarise, no minimum share capital, and the filing goes straight to the Secretary of State. The calculator below is pre-loaded in euros with Wyoming, showing Year-1 and 5-year totals in EUR.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        Formation itself is {f.nmFormation} in New Mexico, {f.wyFormation} in Wyoming and {f.deFormation} in Delaware. Add the {f.agentPerYear}-a-year agent and the first year becomes {f.nmYear1Usd} ({f.nmYear1Local}), {f.wyYear1Usd} ({f.wyYear1Local}) and {f.deYear1Usd} ({f.deYear1Local}); five years become {f.nmFiveYearUsd} ({f.nmFiveYearLocal}), {f.wyFiveYearUsd} ({f.wyFiveYearLocal}) and {f.deFiveYearUsd} ({f.deFiveYearLocal}). Converted at the {FX_RATE_DATE} rate of €{f.rate} per $1 — adjust the rate in the calculator to match your bank.
      </p>

      <div className="mt-10">
        <NonResidentCalculator initialCurrencyCode="EUR" initialStateSlug="wyoming"
          compact
          heading="Price it in euros — Wyoming first"
          intro="Wyoming is the starting point below: a $60 annual report plus the agent, with no notary and no minimum capital anywhere in the process. Switch to New Mexico or Delaware to compare."
          stateNote="Wyoming, New Mexico and Delaware are the three states this guide prices. The full calculator covers all fifty."
          currencyNote={`Default rate €${f.rate} per $1, as of ${FX_RATE_DATE} (Bank of England spot rates and Federal Reserve H.10). Converted figures are estimates — set the rate field to the rate your bank quotes.`}
          einNote="File IRS Form SS-4 by fax or mail and write “Foreign” where it asks for an SSN. The IRS charges $0 for an EIN, and fax processing takes about a week."
          agentHint="Typical range: $99–$199 per year. The $125 default is the mid-range figure."
          excludesBody="Taxes, bank fees, operating-agreement drafting and professional advice are not included. This tool shows operational and published state filing fees only — consult a qualified German Steuerberater or legal adviser regarding local tax and compliance rules, as the disclaimer below notes."
          resultNote={`Converted at €${f.rate} per $1 (${FX_RATE_DATE}). State fees are from verified state data; the euro figures are estimates.`}
          fiveYearNote="Five recurring payments over five years, plus formation and one-time items. Wyoming's yearly line is its $60 annual report plus the agent."
          scenarioTitle="Formation fee and yearly bill, state by state — in EUR"
          scenarioIntro="Same settings as above. Read the ongoing column as the bill that repeats every year — in Wyoming that is the annual report plus the agent, in New Mexico the agent alone."
          scenarioVariant="formation"
          scenarioFootnote={`Five-year totals count five recurring payments (formation plus five annual charges). At the defaults above — $125-a-year agent, no mailbox, DIY EIN — five years in Wyoming are ${f.wyFiveYearLocal}.`}
        />
      </div>

      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        The calculator above covers Wyoming, Delaware and New Mexico in EUR. Open the full <Link href="/tools/non-resident-llc-cost-calculator?currency=EUR" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator in EUR</Link> to price every state and adjust the agent cost, the exchange rate and the EIN option. The general <Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">non-resident LLC guide</Link> covers the filing steps in order.
      </p>

            <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Filing without a notary — what you actually submit
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          There is no German-style deed. The filing is the articles of organization, submitted online to the Secretary of State with the state fee — {f.nmFormation} in New Mexico or {f.wyFormation} in Wyoming — plus the name and address of your registered agent. No appointment, no notarised signatures, no Handelsregister entry. Once the state approves the filing, keep the approved copy with the EIN confirmation letter: banks and payment providers ask for the formation document when you open a US business account.
        </p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          How this compares with a German UG or GmbH
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          For scale, forming a German UG or GmbH starts with a Handelsregister
          entry of €225 (about €300 all-in including online publication, or
          €360 if the contribution is in kind), plus a Gewerbeanmeldung of
          €15–€60. The notary costs roughly €105–€165 for a UG template deed
          and €276–€720 including VAT for a GmbH. A US LLC needs no notary and
          has $0 minimum share capital — the state filing fee is{" "}
          {f.nmFormation} in New Mexico and {f.wyFormation} in Wyoming, plus
          a registered agent.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
        Back home, the notary and Handelsregister costs are one-off, but the comparison that matters is the yearly one: a US LLC in Wyoming pays a {f.wyAnnualReport} annual report plus the agent, while a New Mexico LLC pays only the agent. The agent ({f.agentPerYear} a year in the calculator) is the recurring line a German founder cannot avoid, because a foreign address does not qualify as a registered office.
       Leave the agent out and the state-only five-year bill is {f.nmFiveYearStateOnly} in New Mexico, {f.wyFiveYearStateOnly} in Wyoming and {f.deFiveYearStateOnly} in Delaware. Delaware&apos;s {f.deAnnualTax} annual tax accounts for almost all of the difference.</p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          German UG or GmbH vs US LLC — one-off formation fees
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The one-off fees side by side. The German column is what a UG or GmbH pays once to exist; the US column is the state filing fee a US LLC pays once — there is no notary, no register entry and no trade registration on the US side.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-3 font-semibold">Step</th>
                <th className="py-2 pr-3 font-semibold">Germany</th>
                <th className="py-2 font-semibold">US LLC</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Notary, UG template deed</td>
                <td className="py-2 pr-3">€105–€165</td>
                <td className="py-2">No notary — $0</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Notary, GmbH deed (incl. VAT)</td>
                <td className="py-2 pr-3">€276–€720</td>
                <td className="py-2">No notary — $0</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Handelsregister entry</td>
                <td className="py-2 pr-3">€225</td>
                <td className="py-2">No register entry — $0</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Gewerbeanmeldung</td>
                <td className="py-2 pr-3">€15–€60</td>
                <td className="py-2">No trade registration — $0</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-semibold text-[#102A43]">State formation filing</td>
                <td className="py-2 pr-3">—</td>
                <td className="py-2">New Mexico {f.nmFormation} · Wyoming {f.wyFormation}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-slate-500">
          The German fees are one-off; the US LLC&apos;s repeating line is the registered agent, covered in the calculator above.
        </p>
      </section>

      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        A Delaware quote worth checking: several guides still show the old $300 annual tax, but Delaware charges {f.deAnnualTax} a year for tax year 2026 — first payable 1 June 2027 — on {f.deFormation} formation.
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
          <li><Link href="/guides/us-llc-cost-from-netherlands" className="text-[#1769AA] hover:underline">US LLC Cost from the Netherlands — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-ireland" className="text-[#1769AA] hover:underline">US LLC Cost from Ireland — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-uk" className="text-[#1769AA] hover:underline">US LLC Cost from the UK — fees in GBP</Link></li>
          <li><Link href="/guides/us-llc-cost-from-australia" className="text-[#1769AA] hover:underline">US LLC Cost from Australia — fees in AUD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-new-zealand" className="text-[#1769AA] hover:underline">US LLC Cost from New Zealand — fees in NZD</Link></li>
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
        Operational and published registry fees only; consult a qualified German Steuerberater or legal adviser regarding local tax and compliance rules.
      </p>
    </div>
  );
}
