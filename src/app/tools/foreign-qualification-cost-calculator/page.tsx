import type { Metadata } from "next";
import Link from "next/link";
import ForeignQualificationCalculator from "@/components/calculators/ForeignQualificationCalculator";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "Foreign Qualification Cost Calculator (2026)" },
  description:
    "Formed in one state but operating in another? Estimate foreign qualification costs — registration, dual agents, dual reports — with 1, 3, and 5-year totals.",
  alternates: { canonical: "/tools/foreign-qualification-cost-calculator" },
  openGraph: {
    title: "Foreign Qualification Cost Calculator (2026)",
    description:
      "Formed in one state but operating in another? Estimate foreign qualification costs — registration, dual agents, dual reports — with 1, 3, and 5-year totals.",
    type: "website",
    url: "/tools/foreign-qualification-cost-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foreign Qualification Cost Calculator (2026)",
    description:
      "Formed in one state but operating in another? Estimate foreign qualification costs — registration, dual agents, dual reports — with 1, 3, and 5-year totals.",
    images: ["/twitter-image"],
  },
};

export default function ForeignQualificationPage() {
  const calculatorJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Foreign Qualification Cost Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free educational calculator estimating the cost of foreign qualifying an existing LLC in another US state, including initial registration and dual-state recurring fees.",
  };

  const faqs = [
    {
      question: "What is foreign qualification of an LLC?",
      answer:
        "Foreign qualification is the process of registering an existing LLC (formed in one state) to do business in another state. The LLC becomes a foreign limited liability company in the second state while remaining domestic in its original formation state.",
    },
    {
      question: "How much does it cost to foreign qualify an LLC?",
      answer:
        "Costs vary significantly by target state. Initial registration fees commonly range from about $50 to $300 or more (Texas and some others are higher). You must also factor in dual registered agent fees and dual annual report obligations. Use the calculator on this page for state-specific estimates.",
    },
    {
      question: "Do I need to foreign qualify if I only sell online in other states?",
      answer:
        "Usually not. Most states do not consider passive online sales alone as doing business. However, having employees, inventory, a physical office, or regularly performing services in a state often triggers the requirement. Rules differ by state.",
    },
    {
      question: "Can I foreign qualify in multiple states?",
      answer:
        "Yes. Many businesses foreign qualify in several states. Each additional state adds registration fees, a registered agent requirement, and ongoing report obligations.",
    },
    {
      question: "What happens if I do business in a state without foreign qualifying?",
      answer:
        "Possible consequences include monetary penalties, back fees, inability to sue in that state's courts, and in some cases challenges to limited liability protection. It is generally safer to register when required.",
    },
    {
      question: "Is it cheaper to form in my home state instead of foreign qualifying?",
      answer:
        "In the majority of cases for small businesses, yes. Forming directly in the state where you live and operate usually results in lower total compliance cost and less administrative burden over several years.",
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
          {
            name: "Foreign Qualification Calculator",
            item: "/tools/foreign-qualification-cost-calculator",
          },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        Foreign Qualification Cost Calculator 2026
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        If you formed your LLC in one state (commonly Wyoming, Delaware, or New Mexico) but actually operate or live in another state, you will almost certainly need to foreign qualify. This free calculator estimates the true cost of registering your existing LLC as a foreign entity in any target state — including initial registration fees, recurring annual reports, and estimated multi-year totals.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        Many founders only look at the cheap formation fee of a popular state and later discover that foreign qualification adds significant ongoing cost and compliance. This tool is designed to show the full picture before you file.
      </p>

      <p className="mt-3 max-w-3xl text-sm text-slate-500">
        Educational tool only. Fees change. Always confirm current amounts and requirements on the official Secretary of State website of the target state before filing.
      </p>

      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
          Dual-state cost modeling
        </span>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
          Uses verified state fee data
        </span>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
          1 / 3 / 5 year projections
        </span>
        <Link
          href="/about/sources-and-methodology"
          className="rounded-full border border-[#1769AA]/30 bg-blue-50 px-3 py-1 font-medium text-[#1769AA] hover:bg-blue-100"
        >
          How we keep fees current →
        </Link>
      </div>

      <div className="mt-10">
        <ForeignQualificationCalculator />
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">How foreign qualification works</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          When an LLC is formed in one state (the domestic state) but conducts business in another state, most states require the LLC to register as a foreign limited liability company. This process is called foreign qualification or foreign registration.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Doing business typically includes having a physical office, warehouse, or storefront; employing people in the state; regularly soliciting or completing sales in the state; or owning or leasing real property used for business. Simply having customers in a state or a website accessible there usually does not by itself trigger the requirement, but rules vary.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Once foreign qualified, your LLC must generally maintain a registered agent in the foreign state, file annual or biennial reports in that state, pay any applicable franchise taxes or entity fees, and keep its domestic state filings current as well. This creates dual compliance obligations.
        </p>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Why this calculator matters</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Most free LLC cost tools only show the cost of forming a new domestic LLC. Very few clearly show the combined cost of keeping the original formation state active plus foreign qualifying in one or more additional states. This gap leads to under-budgeting. A low formation fee in Montana, New Mexico, or Wyoming can look attractive until you add foreign qualification fees, dual registered agents, and dual annual reports.
        </p>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">What the calculator includes</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>Initial foreign registration / certificate of authority fee in the target state (planning estimate)</li>
          <li>Domestic state annual report or franchise tax (from verified data)</li>
          <li>Target state annual or biennial report fees and franchise taxes</li>
          <li>Optional commercial registered agent fees for both states</li>
          <li>Simple multi-year totals (1 / 3 / 5 years)</li>
        </ul>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">What it does not include</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>Attorney or formation service fees</li>
          <li>Newspaper publication costs (required in a few states for foreign qualification)</li>
          <li>Local city or county business licenses</li>
          <li>Federal taxes, state income taxes, or sales tax registration</li>
          <li>Certificate of Good Standing fees from the domestic state (often required when filing foreign qualification)</li>
        </ul>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Common foreign qualification scenarios</h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="font-medium text-[#102A43]">Wyoming LLC + home state operations</h3>
            <p className="mt-1 text-slate-700">
              Many online business owners form in Wyoming for privacy and low fees, then foreign qualify in their actual home state (California, Texas, Florida, New York, etc.). This is one of the most common patterns.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-[#102A43]">Delaware LLC for fundraising</h3>
            <p className="mt-1 text-slate-700">
              Startups often form in Delaware for investor familiarity, then foreign qualify in the state where the team and operations are located.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-[#102A43]">Multi-state physical presence</h3>
            <p className="mt-1 text-slate-700">
              Businesses with employees, inventory, or offices in multiple states may need to foreign qualify in several jurisdictions. Costs compound quickly.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-[#102A43]">The cheap-state formation trap</h3>
            <p className="mt-1 text-slate-700">
              Forming in a low-fee state while living and operating elsewhere almost always requires foreign qualification. The combined ongoing cost is frequently higher than simply forming in the home state from the beginning.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Key cost drivers</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>
            <strong>Initial registration fee</strong> — Varies widely by state (often $50–$300+; some states higher).
          </li>
          <li>
            <strong>Certificate of Good Standing</strong> — Most states require a recent certificate from the domestic state (extra fee + processing time).
          </li>
          <li>
            <strong>Registered agent in both states</strong> — You must maintain an agent in the domestic state and the foreign state.
          </li>
          <li>
            <strong>Dual annual reports</strong> — You will usually file reports (and pay fees) in both states every year or every two years.
          </li>
          <li>
            <strong>Franchise or entity taxes</strong> — Some states (notably California) impose significant annual taxes on foreign LLCs doing business there.
          </li>
        </ol>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Practical recommendations</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>
            If you live and operate in one state, form the LLC in that state in most cases. It is usually simpler and cheaper over 3–5 years than forming elsewhere + foreign qualifying.
          </li>
          <li>
            If you need Delaware or Wyoming for specific reasons (investors, privacy, asset protection planning), budget for foreign qualification from day one.
          </li>
          <li>
            Always maintain a registered agent in every state where the LLC is registered (domestic or foreign).
          </li>
          <li>
            Keep a calendar of all annual report deadlines across states. Missing one can lead to administrative dissolution or loss of good standing.
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
            <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">
              LLC Cost Calculator by State
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
            <Link href="/hidden-costs-of-forming-an-llc" className="text-[#1769AA] hover:underline">
              Hidden Costs of Forming an LLC
            </Link>
          </li>
          <li>
            <Link href="/how-to-form-an-llc" className="text-[#1769AA] hover:underline">
              How to Form an LLC
            </Link>
          </li>
          <li>
            <Link href="/annual-report-requirements-by-state" className="text-[#1769AA] hover:underline">
              Annual Report Requirements by State
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Educational information only. This page and calculator provide general estimates based on published state fees and planning figures for foreign registration. They do not constitute legal, tax, or financial advice. State fees, definitions of doing business, and requirements change. Always verify current rules and amounts on the official government websites of the relevant states before making decisions or filing documents. This site is not affiliated with any government agency.
      </p>
    </div>
  );
}
