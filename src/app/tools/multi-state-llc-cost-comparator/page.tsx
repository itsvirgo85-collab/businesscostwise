import type { Metadata } from "next";
import Link from "next/link";
import MultiStateComparator from "@/components/calculators/MultiStateComparator";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "Multi-State LLC Cost Comparator (2026)" },
  description:
    "Compare LLC costs in up to five states side by side — formation fees, annual reports, franchise taxes, and 5-year totals — using verified 2026 state fee data.",
  alternates: { canonical: "/tools/multi-state-llc-cost-comparator" },
  openGraph: {
    title: "Multi-State LLC Cost Comparator (2026)",
    description:
      "Compare LLC costs in up to five states side by side — formation fees, annual reports, franchise taxes, and 5-year totals — using verified 2026 state fee data.",
    type: "website",
    url: "/tools/multi-state-llc-cost-comparator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-State LLC Cost Comparator (2026)",
    description:
      "Compare LLC costs in up to five states side by side — formation fees, annual reports, franchise taxes, and 5-year totals — using verified 2026 state fee data.",
    images: ["/twitter-image"],
  },
};

export default function MultiStateComparatorPage() {
  const calculatorJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Multi-State LLC Cost Comparator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free educational tool to compare LLC formation and multi-year recurring state costs across multiple US states side-by-side.",
  };

  const faqs = [
    {
      question: "What is the cheapest state to form an LLC in 2026?",
      answer:
        "Montana currently has one of the lowest official formation fees. Several other states also charge under $50. However, the cheapest long-term states are often those with little or no annual report fee. Use the comparator to evaluate total cost.",
    },
    {
      question: "Should I form my LLC in Wyoming or Delaware if I live elsewhere?",
      answer:
        "Only if you have a specific reason (privacy, investor preference, asset protection planning). Otherwise, forming in your home state is usually simpler and less expensive once foreign qualification and dual compliance are considered.",
    },
    {
      question: "How often do LLC fees change?",
      answer:
        "State legislatures and agencies periodically adjust fees. Always verify the current schedule on the official Secretary of State (or equivalent) website before filing or budgeting.",
    },
    {
      question: "Does this tool include registered agent costs?",
      answer:
        "You can optionally include estimated commercial registered agent fees. You may also serve as your own agent in many states if you have a qualifying physical address.",
    },
    {
      question: "Is this legal or tax advice?",
      answer:
        "No. This is an educational comparison tool only. It does not create an attorney-client or advisor relationship. Confirm all requirements with official sources or a qualified professional.",
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
          { name: "Tools", item: "/llc-cost-calculator" },
          {
            name: "Multi-State Cost Comparator",
            item: "/tools/multi-state-llc-cost-comparator",
          },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        Multi-State LLC Cost Comparator 2026
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        Choosing where to form an LLC is one of the most consequential early decisions a founder makes. A low formation fee can look attractive until recurring annual reports, franchise taxes, and registered agent costs are added over three to five years.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        This free Multi-State LLC Cost Comparator lets you select up to five states and view formation fees, recurring obligations, and estimated multi-year totals side-by-side. All base figures are drawn from official state sources and marked with verification dates.
      </p>

      <p className="mt-3 max-w-3xl text-sm text-slate-500">
        Educational tool only. Fees and rules change. Always confirm current amounts on the official state websites before filing.
      </p>

      <div className="mt-10">
        <MultiStateComparator />
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Why compare states side-by-side?</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Most founders start with a single question: “What is the cheapest state to form an LLC?” The better question is: “What is the lowest total cost of ownership over the period I expect to keep this company, given where I actually live and operate?”
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          A state with a $35–$50 formation fee can become more expensive than a $100–$150 state once annual reports and franchise taxes accumulate. California is the classic example — relatively low formation fee paired with an $800 minimum annual franchise tax.
        </p>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">What this tool helps you decide</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>Whether a popular “cheap” formation state remains cheap after 3–5 years</li>
          <li>How California, Massachusetts, Nevada, and other high-recurring states compare</li>
          <li>The real cost difference between forming in your home state versus a popular alternative</li>
          <li>Which states have little or no recurring report fee</li>
        </ul>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Key factors that change the ranking</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>
            <strong>Formation fee</strong> — One-time cost to create the LLC.
          </li>
          <li>
            <strong>Annual or biennial report fees</strong> — Ongoing compliance cost.
          </li>
          <li>
            <strong>Franchise / entity / privilege taxes</strong> — Especially material in California, Delaware, and several others.
          </li>
          <li>
            <strong>Registered agent</strong> — Required in every state of registration. Commercial services typically run $50–$300 per year.
          </li>
          <li>
            <strong>Publication</strong> — Required in a small number of states and can add significant year-one cost.
          </li>
        </ol>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Practical guidance</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>
            If you live and primarily operate in one state, forming there is usually the simplest and often the cheapest long-term option.
          </li>
          <li>
            Forming in Wyoming, Delaware, or New Mexico while operating elsewhere almost always requires foreign qualification, which adds a second set of fees and compliance.
          </li>
          <li>
            Always look at the 5-year total, not just the formation fee.
          </li>
          <li>
            Confirm whether your business activities will create nexus or “doing business” obligations in additional states.
          </li>
        </ul>
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
        <h2 className="text-lg font-semibold text-[#102A43]">Related tools & guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/tools/foreign-qualification-cost-calculator" className="text-[#1769AA] hover:underline">
              Foreign Qualification Cost Calculator
            </Link>
          </li>
          <li>
            <Link href="/tools/registered-agent-cost-calculator" className="text-[#1769AA] hover:underline">
              Registered Agent Cost Calculator
            </Link>
          </li>
          <li>
            <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">
              LLC Cost Calculator
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
            <Link href="/hidden-costs-of-forming-an-llc" className="text-[#1769AA] hover:underline">
              Hidden Costs of Forming an LLC
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Educational information only. Not legal, tax, or financial advice. This site is not affiliated with any government agency. Always re-check current fees and rules on official state websites before making decisions.
      </p>
    </div>
  );
}
