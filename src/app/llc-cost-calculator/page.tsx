import type { Metadata } from "next";
import Link from "next/link";
import LLCCostCalculator from "@/components/calculators/LLCCostCalculator";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata: Metadata = {
  title: "LLC Cost Calculator by State — Formation & Annual Fees (2026)",
  description:
    "Estimate LLC formation costs by US state. Includes filing fees, annual reports, and franchise taxes where applicable. Every figure linked to official government sources. Educational tool only.",
  alternates: { canonical: "/llc-cost-calculator" },
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
      "Free educational calculator for estimated LLC formation and fixed recurring state fees across verified US states and DC.",
  };

  const faqs = [
    {
      question: "What does this LLC cost calculator include?",
      answer:
        "It estimates state formation filing fees, annual or biennial report fees, and fixed franchise or entity taxes where those amounts are published as fixed figures. You can also add optional amounts such as registered agent or expedited processing.",
    },
    {
      question: "What does the calculator not include?",
      answer:
        "It does not include federal or state income tax, self-employment tax, local business licenses, newspaper publication costs, or professional service fees beyond amounts you enter yourself.",
    },
    {
      question: "Are the fees official?",
      answer:
        "Base fees are drawn from official state sources and marked with verification dates. Fees change. Always confirm the current schedule on the official state website before filing or budgeting.",
    },
    {
      question: "Is this legal or tax advice?",
      answer:
        "No. This calculator and the surrounding pages are educational only. They do not create an attorney-client or advisor relationship and should not be used as a substitute for professional advice.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorJsonLd) }}
      />
      <FaqJsonLd faqs={faqs} />

      <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#1769AA]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">LLC Cost Calculator</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        LLC Formation Cost Calculator by State
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        Select a US state to estimate formation fees, optional registered agent costs, and recurring state charges over 1, 3, or 5 years. All base fees are drawn from official state sources and marked with verification dates.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        This is an educational estimating tool only. It is not a filing service and not legal, tax, or financial advice.
      </p>

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
          <li>Attorney, accountant, or service markups beyond the amount you enter</li>
        </ul>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">How to interpret the results</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Use the estimates as a planning range, not a final invoice. Formation fees are one-time; recurring report fees and franchise taxes often matter more over several years. For context on costs beyond the state table, see{" "}
          <Link href="/hidden-costs-of-forming-an-llc" className="text-[#1769AA] hover:underline">
            Hidden Costs of Forming an LLC
          </Link>
          .
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
        <h2 className="text-lg font-semibold text-[#102A43]">Related educational guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/how-much-does-it-cost-to-start-an-llc" className="text-[#1769AA] hover:underline">
              How Much Does It Cost to Start an LLC?
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
