import type { Metadata } from "next";
import Link from "next/link";
import LLCCostCalculator from "@/components/calculators/LLCCostCalculator";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "LLC Cost Calculator — 1, 3 & 5-Year Totals by State" },
  description:
    "Free LLC cost calculator for all 50 states + DC. Formation fees, annual reports and franchise taxes with 1, 3 & 5-year totals and official source links.",
  alternates: { canonical: "/llc-cost-calculator" },
  openGraph: {
    title: "LLC Cost Calculator — 1, 3 & 5-Year Totals by State",
    description:
      "Free LLC cost calculator for all 50 states + DC. Formation fees, annual reports and franchise taxes with 1, 3 & 5-year totals and official source links.",
    type: "website",
    url: "/llc-cost-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "LLC Cost Calculator — 1, 3 & 5-Year Totals by State",
    description:
      "Free LLC cost calculator for all 50 states + DC. Formation fees, annual reports and franchise taxes with 1, 3 & 5-year totals and official source links.",
    images: ["/twitter-image"],
  },
};

export default function LLCCostCalculatorPage() {
  const calculatorJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LLC Cost Calculator by State",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free educational calculator for estimated LLC formation and fixed recurring state fees across verified US states and DC. Includes official source links and multi-year totals.",
  };

  const faqs = [
    {
      question: "What does this LLC cost calculator include?",
      answer:
        "It estimates state formation filing fees, annual or biennial report fees, and fixed franchise or entity taxes where those amounts are published as fixed figures. You can also add optional amounts such as registered agent or expedited processing. Results show 1-year, 3-year, and 5-year totals.",
    },
    {
      question: "What does the calculator not include?",
      answer:
        "It does not include federal or state income tax, self-employment tax, local business licenses, newspaper publication costs (where required), or professional service fees beyond amounts you enter yourself.",
    },
    {
      question: "Are the fees official and up to date?",
      answer:
        "Base fees are drawn from official state government sources and marked with verification dates. We monitor those official pages on a recurring schedule. Fees change. Always confirm the current schedule on the official state website before filing or budgeting.",
    },
    {
      question: "Is this legal or tax advice?",
      answer:
        "No. This calculator and the surrounding pages are educational only. They do not create an attorney-client or advisor relationship and should not be used as a substitute for professional advice specific to your situation.",
    },
    {
      question: "Why show multi-year totals?",
      answer:
        "The formation filing fee is only year one. Annual reports and franchise taxes often matter more over time. Multi-year totals help you compare states on the costs that actually accumulate after formation.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorJsonLd) }}
      />
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Tools", item: "/tools" },
          { name: "LLC Cost Calculator", item: "/llc-cost-calculator" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        Free LLC Cost Calculator by State (2026)
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        Select a US state to see the official formation filing fee, fixed recurring state charges, and estimated 1-year, 3-year, and 5-year totals. Every base figure links to the official government source and carries a verification date.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        This is an educational estimating tool only — not a filing service and not legal, tax, or financial advice. Always confirm current fees on the official state website before you file.
      </p>

      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
          Official state source links
        </span>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
          Verification dates on fee data
        </span>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
          Multi-year totals
        </span>
        <Link
          href="/about/sources-and-methodology"
          className="rounded-full border border-[#1769AA]/30 bg-blue-50 px-3 py-1 font-medium text-[#1769AA] hover:bg-blue-100"
        >
          How we keep fees current →
        </Link>
      </div>

      <div className="mt-10">
        <LLCCostCalculator />
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">What this calculator includes</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>State formation / Articles of Organization (or equivalent) filing fee</li>
          <li>Required registered agent designation fee when it is part of the official filing total</li>
          <li>Annual or biennial report fees and minimum franchise / entity taxes where they apply as fixed amounts</li>
          <li>Optional commercial registered agent, name reservation, and expedited processing (user-entered)</li>
        </ul>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">What it does not include</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>Federal income tax or self-employment tax</li>
          <li>State income tax on business profits</li>
          <li>Local business licenses or permits</li>
          <li>Newspaper publication costs (where required)</li>
          <li>Attorney, accountant, or formation-service markups beyond the amount you enter</li>
        </ul>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">How to interpret the results</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Use the estimates as a planning range, not a final invoice. The formation fee is paid once; recurring report fees and franchise taxes often dominate the long-term cost. For context on costs beyond the state table, see{" "}
          <Link href="/hidden-costs-of-forming-an-llc" className="text-[#1769AA] hover:underline">
            Hidden Costs of Forming an LLC
          </Link>
          . For the full methodology and source approach, see{" "}
          <Link href="/about/sources-and-methodology" className="text-[#1769AA] hover:underline">
            Sources & Methodology
          </Link>
          .
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Planning to form in a low-fee state (such as Wyoming or Delaware) while operating elsewhere? Use the{" "}
          <Link href="/tools/foreign-qualification-cost-calculator" className="text-[#1769AA] hover:underline">
            Foreign Qualification Cost Calculator
          </Link>{" "}
          to estimate dual-state registration and recurring fees before you decide.
        </p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Frequently asked questions</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer list-none font-semibold text-[#102A43]">
                <span className="flex items-center justify-between">
                  {f.question}
                  <span className="ml-4 text-slate-400 transition group-open:rotate-180">▼</span>
                </span>
              </summary>
              <p className="mt-3 text-slate-600 leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-12 max-w-3xl rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Related cost tools</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/tools/foreign-qualification-cost-calculator" className="text-[#1769AA] hover:underline">
              Foreign Qualification Cost Calculator
            </Link>
          </li>
          <li>
            <Link href="/tools/multi-state-llc-cost-comparator" className="text-[#1769AA] hover:underline">
              Multi-State LLC Cost Comparator
            </Link>
          </li>
          <li>
            <Link href="/tools/registered-agent-cost-calculator" className="text-[#1769AA] hover:underline">
              Registered Agent Cost Calculator
            </Link>
          </li>
        </ul>
      </section>

      <section className="mt-12 max-w-3xl rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Related educational guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/tools/foreign-qualification-cost-calculator" className="text-[#1769AA] hover:underline">
              Foreign Qualification Cost Calculator
            </Link>
          </li>
          <li>
            <Link href="/how-much-does-it-cost-to-start-an-llc" className="text-[#1769AA] hover:underline">
              How Much Does It Cost to Start an LLC in 2026?
            </Link>
          </li>
          <li>
            <Link href="/llc-cost-by-state" className="text-[#1769AA] hover:underline">
              LLC Costs by State table
            </Link>
          </li>
          <li>
            <Link href="/cheapest-states-to-form-an-llc" className="text-[#1769AA] hover:underline">
              Cheapest States to Form an LLC
            </Link>
          </li>
          <li>
            <Link href="/most-expensive-states-to-form-an-llc" className="text-[#1769AA] hover:underline">
              Most Expensive States
            </Link>
          </li>
          <li>
            <Link href="/how-to-form-an-llc" className="text-[#1769AA] hover:underline">
              How to Form an LLC
            </Link>
          </li>
          <li>
            <Link href="/about/sources-and-methodology" className="text-[#1769AA] hover:underline">
              Sources & Methodology
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Educational information only. Not legal, tax, or financial advice. Always verify the current fee schedule on the official state website before filing. This site is not affiliated with any government agency.
      </p>
    </div>
  );
}
