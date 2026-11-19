import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import NonResidentCalculator from "@/components/calculators/NonResidentCalculator";
import { FX_RATE_DATE, countryGuideFigures } from "@/lib/countryGuideFigures";

export const metadata: Metadata = {
  title: { absolute: "US LLC Cost from Canada (2026) — Filing & Annual Fees in CAD" },
  description:
    "Forming a US LLC from Canada? Year-1 and 5-year costs in CAD for Wyoming, Delaware and New Mexico, the Corporations Canada $200 benchmark, and a US EIN with no SSN.",
  alternates: { canonical: "/guides/us-llc-cost-from-canada" },
  openGraph: {
    title: "US LLC Cost from Canada (2026) — Filing & Annual Fees in CAD",
    description:
      "Forming a US LLC from Canada? Year-1 and 5-year costs in CAD for Wyoming, Delaware and New Mexico, the Corporations Canada $200 benchmark, and a US EIN with no SSN.",
    type: "website",
    url: "/guides/us-llc-cost-from-canada",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "US LLC Cost from Canada (2026) — Filing & Annual Fees in CAD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "US LLC Cost from Canada (2026) — Filing & Annual Fees in CAD",
    description:
      "Forming a US LLC from Canada? Year-1 and 5-year costs in CAD for Wyoming, Delaware and New Mexico, the Corporations Canada $200 benchmark, and a US EIN with no SSN.",
    images: ["/twitter-image"],
  },
};

export default function UsLlcCostFromCanadaPage() {
  const f = countryGuideFigures("CAD");

  const faqs = [
    {
      question: "How much is a Wyoming vs. Delaware LLC in CAD over 5 years including agent renewal?",
      answer: `A Wyoming LLC costs ${f.wyFiveYearUsd} (${f.wyFiveYearLocal}) over five years with a ${f.agentPerYear}-a-year registered agent — ${f.wyYear1Usd} (${f.wyYear1Local}) in year one, then ${f.wyOngoingUsd} (${f.wyOngoingLocal}) a year. A Delaware LLC costs ${f.deFiveYearUsd} (${f.deFiveYearLocal}) over five years, because Delaware charges a ${f.deAnnualTax} flat annual tax every year on top of the agent. Converted figures are estimates at the ${FX_RATE_DATE} rate of C$${f.rate} per $1.`,
    },
    {
      question: "Do Canadian founders need a separate US virtual address on top of a Registered Agent?",
      answer:
        "Yes, if you need a mailing address for banks, vendors, or customers. A registered agent ($99–$150 a year) only receives official state and legal notices at its in-state street address — it is not a general mailing address. A US virtual mailbox ($10–$30 a month) handles regular commercial mail, while the agent covers the legal requirement.",
    },
    {
      question: "Can Canadians obtain a US EIN without a Social Security Number (SSN)?",
      answer:
        "Yes. The IRS issues an EIN for $0 — write \u201CForeign\u201D on Line 7b of Form SS-4 and submit it by fax or mail. No SSN or ITIN is needed, and no third-party service is required. Agencies charge $75–$300 to do the same filing, but the number itself is free from the IRS.",
    },
    {
      question: "What is the difference between Foreign Qualification and forming a new US LLC from Canada?",
      answer:
        "Foreign qualification registers an existing entity — for example, a Canadian corporation — to do business in an additional US state, so you pay a separate registration fee plus annual reports and a registered agent in every state where you are registered. Forming a new US LLC means the LLC exists in one state only, so you pay filing and renewal fees in that state alone. Use the Foreign Qualification Cost Calculator to compare the two routes for your states before you choose.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

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
        A Canadian founder can form a US LLC entirely online — no US visit, no
        minimum share capital, and no SSN. The calculator below is pre-loaded
        with Canadian dollars and Wyoming, the usual low-cost pick, so you can
        see the Year-1 and 5-year totals in CAD before you choose a state.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        At a glance, with a {f.agentPerYear}-a-year registered agent: Wyoming
        costs {f.wyYear1Usd} ({f.wyYear1Local}) in year one and{" "}
        {f.wyFiveYearUsd} ({f.wyFiveYearLocal}) over five years; New Mexico
        costs {f.nmYear1Usd} ({f.nmYear1Local}) in year one and{" "}
        {f.nmFiveYearUsd} ({f.nmFiveYearLocal}) over five years; Delaware costs{" "}
        {f.deYear1Usd} ({f.deYear1Local}) in year one and {f.deFiveYearUsd} (
        {f.deFiveYearLocal}) over five years. Converted figures are estimates
        at the {FX_RATE_DATE} rate of C${f.rate} per $1 — change the rate in
        the calculator to match your bank or card provider.
      </p>

      <div className="mt-10">
        <NonResidentCalculator initialCurrencyCode="CAD" initialStateSlug="wyoming" />
      </div>

      <p className="mt-6 max-w-3xl text-sm text-slate-500">
        Prefer the full tool? Open the{" "}
        <Link href="/tools/non-resident-llc-cost-calculator?currency=CAD" className="text-[#1769AA] hover:underline">
          Non-Resident LLC Cost Calculator in CAD
        </Link>{" "}
        or read the general{" "}
        <Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">
          non-resident LLC guide
        </Link>
        .
      </p>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Wyoming vs Delaware vs New Mexico — Year-1 and 5-year costs in CAD
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The table below is calculated from the site&apos;s state fee data
          with a {f.agentPerYear}-a-year registered agent included. Five-year
          totals count five recurring payments, the same convention the site
          uses everywhere.
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
          State fees alone over five years are {f.nmFiveYearStateOnly} in New
          Mexico, {f.wyFiveYearStateOnly} in Wyoming and{" "}
          {f.deFiveYearStateOnly} in Delaware, before the registered agent.
          Delaware&apos;s {f.deAnnualTax} yearly tax is the reason it costs
          more.
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
          The ongoing picture is similar. A federal Canadian corporation
          files its $12 annual return every year; a US LLC in Wyoming pays a{" "}
          {f.wyAnnualReport} annual report plus its agent, while a New Mexico
          LLC pays only the agent. The agent ({f.agentPerYear} a year in the
          calculator) is the one recurring service cost a Canadian founder
          cannot skip, because a foreign address does not qualify as a
          registered office.
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
          <li><Link href="/tools/non-resident-llc-cost-calculator?currency=CAD" className="text-[#1769AA] hover:underline">Non-Resident LLC Cost Calculator — in CAD</Link></li>
          <li><Link href="/tools/foreign-qualification-cost-calculator" className="text-[#1769AA] hover:underline">Foreign Qualification Cost Calculator</Link></li>
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
          <li><Link href="/guides/us-llc-cost-from-australia" className="text-[#1769AA] hover:underline">US LLC Cost from Australia — fees in AUD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-singapore" className="text-[#1769AA] hover:underline">US LLC Cost from Singapore — fees in SGD</Link></li>
          <li><Link href="/guides/us-llc-cost-from-dubai" className="text-[#1769AA] hover:underline">US LLC Cost from Dubai &amp; UAE — fees in AED</Link></li>
          <li><Link href="/guides/us-llc-cost-from-india" className="text-[#1769AA] hover:underline">US LLC Cost from India — fees in INR</Link></li>
          <li><Link href="/guides/us-llc-vs-uk-ltd-cost" className="text-[#1769AA] hover:underline">US LLC vs. UK Ltd Cost — 5-year operational fee comparison</Link></li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Operational and published registry fees only; consult a qualified Canadian tax or legal adviser regarding CRA and cross-border compliance.
      </p>
    </div>
  );
}
