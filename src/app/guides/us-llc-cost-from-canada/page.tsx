import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import ArticleJsonLd from "@/components/seo/ArticleJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import NonResidentCalculator from "@/components/calculators/NonResidentCalculator";
import { FX_RATE_DATE, countryGuideFigures } from "@/lib/countryGuideFigures";

export const metadata: Metadata = {
  title: { absolute: "US LLC Cost from Canada (2026) — Filing & Annual Fees in CAD" },
  description:
    "Forming a US LLC from Canada? Year-1 and 5-year costs in CAD for Wyoming, Delaware and New Mexico, the Corporations Canada $200 benchmark, and a US EIN.",
  alternates: { canonical: "/guides/us-llc-cost-from-canada" },
  openGraph: {
    title: "US LLC Cost from Canada (2026) — Filing & Annual Fees in CAD",
    description:
      "Forming a US LLC from Canada? Year-1 and 5-year costs in CAD for Wyoming, Delaware and New Mexico, the Corporations Canada $200 benchmark, and a US EIN.",
    type: "website",
    url: "/guides/us-llc-cost-from-canada",
  },
  twitter: {
    card: "summary_large_image",
    title: "US LLC Cost from Canada (2026) — Filing & Annual Fees in CAD",
    description:
      "Forming a US LLC from Canada? Year-1 and 5-year costs in CAD for Wyoming, Delaware and New Mexico, the Corporations Canada $200 benchmark, and a US EIN.",
  },
};

export default function UsLlcCostFromCanadaPage() {
  const f = countryGuideFigures("CAD");

  const faqs = [
    {
      question: "How much is a Wyoming vs Delaware LLC in CAD over five years, agent included?",
      answer: `With a ${f.agentPerYear}-a-year registered agent, Wyoming costs ${f.wyFiveYearUsd} (${f.wyFiveYearLocal}) over five years — ${f.wyYear1Usd} (${f.wyYear1Local}) in year one, then ${f.wyOngoingUsd} (${f.wyOngoingLocal}) a year. Delaware costs ${f.deFiveYearUsd} (${f.deFiveYearLocal}) over five years, because Delaware charges a ${f.deAnnualTax} flat annual tax every year on top of the agent. Converted figures are estimates at the ${FX_RATE_DATE} rate of C$${f.rate} per $1.`,
    },
    {
      question: "Do Canadian founders need a US virtual address as well as a registered agent?",
      answer: `Yes, if you need a mailing address for banks, vendors, or customers. A registered agent ($99–$150 a year) only receives official state and legal notices at its in-state street address — it is not a general mailing address. A US virtual mailbox ($10–$30 a month) handles regular commercial mail, while the agent covers the legal requirement.`,
    },
    {
      question: "Can Canadians get a US EIN without an SSN?",
      answer: `Yes. The IRS issues an EIN for $0 — write “Foreign” on Line 7b of Form SS-4 and submit it by fax or mail. No SSN or ITIN is needed, and no third-party service is required. Agencies charge $75–$300 to do the same filing, but the number itself is free from the IRS.`,
    },
    {
      question: "What is the difference between foreign qualification and forming a new US LLC?",
      answer: `Foreign qualification registers an existing entity — for example, a Canadian corporation — to do business in an additional US state, so you pay a separate registration fee plus annual reports and a registered agent in every state where you are registered. Forming a new US LLC means the LLC exists in one state only, so you pay filing and renewal fees in that state alone. Use the Foreign Qualification Cost Calculator to compare the two routes for your states before you choose.`,
    },
    {
      question: "How do I form US LLC from Canada?",
      answer: `File online in Wyoming, New Mexico or Delaware — no US visit, no US address and no minimum capital are needed. Appoint a registered agent, file the Articles of Organization (${f.nmFormation} in New Mexico, ${f.wyFormation} in Wyoming), then get your EIN free from the IRS by faxing Form SS-4. One state, one filing — no federal-plus-provincial double registration.`,
    },
    {
      question: "What is the US LLC cost from Canada?",
      answer: `Year one with the agent is ${f.nmYear1Usd} (${f.nmYear1Local}) in New Mexico, ${f.wyYear1Usd} (${f.wyYear1Local}) in Wyoming and ${f.deYear1Usd} (${f.deYear1Local}) in Delaware. After that the yearly cost is ${f.nmOngoingUsd} (${f.nmOngoingLocal}), ${f.wyOngoingUsd} (${f.wyOngoingLocal}) and ${f.deOngoingUsd} (${f.deOngoingLocal}) — Delaware is dearest because of its ${f.deAnnualTax} annual tax, charged every year on top of the agent.`,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <ArticleJsonLd
        headline="US LLC Cost from Canada (2026) — Filing &amp; Annual Fees in CAD"
        description="Forming a US LLC from Canada? Year-1 and 5-year costs in CAD for Wyoming, Delaware and New Mexico, the Corporations Canada $200 benchmark, and a US EIN."
        datePublished="2026-11-19"
        dateModified="2026-11-20"
        url="https://www.getllccostcalculator.com/guides/us-llc-cost-from-canada"
      />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "US LLC Cost from Canada", item: "/guides/us-llc-cost-from-canada" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        US LLC Cost from Canada (2026): Complete Setup &amp; Renewal Fees in CAD
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        Incorporating federally in Canada costs $200 through Corporations Canada, plus a $12 annual return — and a provincial registration on top if you operate in a province. A US LLC is simpler on paper: one state, one filing, one agent. The calculator below is pre-loaded in Canadian dollars with Wyoming, so Year-1 and 5-year totals show in CAD.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        Over five years the totals are {f.wyFiveYearUsd} ({f.wyFiveYearLocal}) for Wyoming and {f.deFiveYearUsd} ({f.deFiveYearLocal}) for Delaware, with the {f.agentPerYear}-a-year agent counted in; New Mexico sits at {f.nmFiveYearUsd} ({f.nmFiveYearLocal}). Year one is {f.wyYear1Usd} ({f.wyYear1Local}), {f.deYear1Usd} ({f.deYear1Local}) and {f.nmYear1Usd} ({f.nmYear1Local}). Converted at the {FX_RATE_DATE} rate of C${f.rate} per $1; the calculator lets you change the rate to match your bank.
      </p>

      <div className="mt-10">
        <NonResidentCalculator initialCurrencyCode="CAD" initialStateSlug="wyoming"
          compact
          heading="Price it in Canadian dollars — Wyoming first"
          intro="Wyoming is the starting point below. Switch to Delaware in the buttons to see the other side of the Wyoming-versus-Delaware question this guide works through, or to New Mexico to compare."
          stateNote="This guide prices Wyoming, Delaware and New Mexico — switch states with the buttons. The full calculator covers all fifty."
          currencyNote={`Default rate C$${f.rate} per $1, as of ${FX_RATE_DATE} (Bank of England spot rates and Federal Reserve H.10). Converted figures are estimates — the calculator lets you change the rate to match your bank.`}
          einNote="The IRS issues an EIN for $0 — write “Foreign” on Line 7b of Form SS-4 and submit it by fax or mail. No SSN or ITIN is needed."
          agentHint="Commercial agents typically charge $99–$199 a year; this calculator uses $125."
          excludesBody="Taxes, bank fees, operating-agreement drafting and professional advice are not included. This tool shows operational and published state filing fees only — consult a qualified Canadian tax or legal adviser regarding CRA and cross-border compliance, as the disclaimer below notes."
          resultNote={`Converted at C$${f.rate} per $1 (${FX_RATE_DATE}). State fees are from verified state data; dollar figures are estimates.`}
          fiveYearNote="Five recurring payments over five years, plus formation and one-time items. Delaware's yearly line is its $400 annual tax plus the agent — the highest of the three."
          scenarioTitle="Formation fee and yearly bill, state by state — in CAD"
          scenarioIntro="Same settings as above. The ongoing column is the bill that repeats every year — annual tax plus agent in Delaware, annual report plus agent in Wyoming, agent alone in New Mexico."
          scenarioVariant="formation"
          scenarioFootnote={`Five-year totals count five recurring payments (formation plus five annual charges). At the defaults above — $125-a-year agent, no mailbox, DIY EIN — five years in Wyoming are ${f.wyFiveYearLocal}.`}
        />
      </div>

      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        The calculator above covers Wyoming, Delaware and New Mexico in CAD. The full <Link href="/tools/non-resident-llc-cost-calculator?currency=CAD" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator in CAD</Link> covers every state and lets you adjust the agent price, the exchange rate and the EIN option. The general <Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">non-resident LLC guide</Link> walks through the filing steps.
      </p>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Wyoming vs Delaware vs New Mexico — Year-1 and 5-year costs in CAD
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
        All totals in this table are in Canadian dollars; only the formation fee is shown in USD, because that is how the state charges it. The ongoing column repeats every year.
      </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-3 font-semibold">State</th>
                <th className="py-2 pr-3 font-semibold">Formation fee (USD)</th>
                <th className="py-2 pr-3 font-semibold">Ongoing / year (CAD)</th>
                <th className="py-2 pr-3 font-semibold">Year 1 (with agent) — CAD</th>
                <th className="py-2 font-semibold">5 years (with agent) — CAD</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Wyoming</td>
                <td className="py-2 pr-3">{f.wyFormation}</td>
                <td className="py-2 pr-3">{f.wyOngoingLocal}</td>
                <td className="py-2 pr-3">{f.wyYear1Local}</td>
                <td className="py-2">{f.wyFiveYearLocal}</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-semibold text-[#102A43]">Delaware</td>
                <td className="py-2 pr-3">{f.deFormation}</td>
                <td className="py-2 pr-3">{f.deOngoingLocal}</td>
                <td className="py-2 pr-3">{f.deYear1Local}</td>
                <td className="py-2">{f.deFiveYearLocal}</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-semibold text-[#102A43]">New Mexico</td>
                <td className="py-2 pr-3">{f.nmFormation}</td>
                <td className="py-2 pr-3">{f.nmOngoingLocal}</td>
                <td className="py-2 pr-3">{f.nmYear1Local}</td>
                <td className="py-2">{f.nmFiveYearLocal}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-slate-500">
        Strip the agent out and five years of state fees alone are {f.nmFiveYearStateOnly} in New Mexico, {f.wyFiveYearStateOnly} in Wyoming and {f.deFiveYearStateOnly} in Delaware. Delaware&apos;s {f.deAnnualTax} annual tax is what pushes its row above the other two.
      </p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          How this compares with incorporating federally in Canada
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          For scale, Corporations Canada charges $200 CAD to incorporate
          federally online, $12 a year for the annual return, and an extra
          $100 for express service. A US LLC has no equivalent annual-return
          charge in New Mexico at all — the state filing fee ({f.nmFormation}{" "}
          in New Mexico, {f.wyFormation} in Wyoming) plus a registered agent
          is the whole formation cost.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
        A federal Canadian corporation files a $12 annual return every year. A Wyoming LLC pays a {f.wyAnnualReport} annual report plus its agent, and a New Mexico LLC pays only the agent. The agent ({f.agentPerYear} a year in the calculator) is the recurring service a Canadian founder cannot skip, because a foreign address does not qualify as a registered office.
      </p>
      <p className="mt-3 text-slate-700 leading-relaxed">
        A US LLC that operates in a Canadian province also pays that province’s extra-provincial registration: Ontario charges $330 for an Extra-Provincial Licence (a one-off fee; the Initial Return and the Ontario annual return are free), while British Columbia charges $380 plus $43.39 a year. Those provincial fees sit on top of the US state fees above, so compare them province by province before you count the total.
      </p>
      </section>

            <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          One state, one filing — adding a second state
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          A new US LLC exists in one state only, so the fees on this page are the whole state bill. If the business later needs a presence in a second state, that is a separate filing — foreign qualification — with its own registration fee, its own annual reports and its own registered agent in that state. The cost stacks per state, which is why the comparison on this page is done state by state. The Foreign Qualification Cost Calculator prices the extra-state route before you commit to it.
        </p>
      </section>
      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        Quotes that look too cheap usually carry the old Delaware figure: several guides still show the old $300 annual tax, but Delaware charges {f.deAnnualTax} a year for tax year 2026 — first payable 1 June 2027 — on {f.deFormation} formation.
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
          <li><Link href="/tools/non-resident-llc-cost-calculator?currency=CAD" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator — in CAD</Link></li>
          <li><Link href="/tools/foreign-qualification-cost-calculator" className="text-[#1769AA] hover:underline">Foreign Qualification Cost Calculator</Link></li>
          <li><Link href="/guides/us-llc-cost-from-uk" className="text-[#1769AA] hover:underline">US LLC Cost from the UK — fees in GBP</Link></li>
          <li><Link href="/guides/us-llc-cost-from-australia" className="text-[#1769AA] hover:underline">US LLC Cost from Australia — fees in AUD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-new-zealand" className="text-[#1769AA] hover:underline">US LLC Cost from New Zealand — fees in NZD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-india" className="text-[#1769AA] hover:underline">US LLC Cost from India — fees in INR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-singapore" className="text-[#1769AA] hover:underline">US LLC Cost from Singapore — fees in SGD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-dubai" className="text-[#1769AA] hover:underline">US LLC Cost from Dubai & UAE — fees in AED</Link></li>
          <li><Link href="/guides/us-llc-cost-from-ireland" className="text-[#1769AA] hover:underline">US LLC Cost from Ireland — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-netherlands" className="text-[#1769AA] hover:underline">US LLC Cost from the Netherlands — fees in EUR</Link></li>
          <li><Link href="/guides/us-llc-cost-from-germany" className="text-[#1769AA] hover:underline">US LLC Cost from Germany — fees in EUR</Link></li>
          <li><Link href="/llc-cost-by-state/wyoming" className="text-[#1769AA] hover:underline">Wyoming LLC Cost — formation &amp; annual report fees</Link></li>
          <li><Link href="/llc-cost-by-state/delaware" className="text-[#1769AA] hover:underline">Delaware LLC Cost — formation &amp; annual tax</Link></li>
          <li><Link href="/llc-cost-by-state/new-mexico" className="text-[#1769AA] hover:underline">New Mexico LLC Cost — formation &amp; $0 annual report</Link></li>
          <li><Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">Non-Resident LLC Guide — Can a Non-Resident Form an LLC in the USA?</Link></li>
          <li><Link href="/annual-report-requirements-by-state" className="text-[#1769AA] hover:underline">Annual Report Requirements by State</Link></li>
          <li><Link href="/guides/us-llc-vs-uk-ltd-cost" className="text-[#1769AA] hover:underline">US LLC vs. UK Ltd Cost — 5-year operational fee comparison</Link></li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Operational and published registry fees only; consult a qualified Canadian tax or legal adviser regarding CRA and cross-border compliance.
      </p>
    </div>
  );
}
