import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free LLC Cost Calculator by State",
  description:
    "Compare LLC formation fees and recurring state obligations across 49 verified states + DC. Use the free 1-, 3-, and 5-year calculator with official government source links.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const tools = [
    {
      href: "/llc-cost-calculator",
      title: "LLC Cost Calculator",
      desc: "Interactive 1 / 3 / 5 year cost estimates by state, with optional registered agent and official source links.",
    },
    {
      href: "/how-much-does-it-cost-to-start-an-llc",
      title: "How Much Does It Cost to Start an LLC?",
      desc: "Complete 2026 breakdown: filing fees, annual reports, franchise taxes, and hidden extras.",
    },
    {
      href: "/llc-cost-by-state",
      title: "LLC Costs by State",
      desc: "Full table of formation and recurring fees for 49 verified states + DC, each linked to official government sources.",
    },
    {
      href: "/cheapest-states-to-form-an-llc",
      title: "Cheapest States to Form an LLC",
      desc: "2026 ranking of the lowest formation fees and estimated multi-year state costs.",
    },
    {
      href: "/most-expensive-states-to-form-an-llc",
      title: "Most Expensive States",
      desc: "Highest formation fees, yearly costs, and 5-year totals — including California franchise tax impact.",
    },
    {
      href: "/hidden-costs-of-forming-an-llc",
      title: "Hidden Costs of Forming an LLC",
      desc: "Annual reports, franchise taxes, publication requirements, registered agent, and other extras beyond the filing fee.",
    },
    {
      href: "/annual-report-requirements-by-state",
      title: "Annual Report Requirements",
      desc: "Which states require annual or biennial reports, typical fees, and states with little or no recurring report fee.",
    },
    {
      href: "/how-to-form-an-llc",
      title: "How to Form an LLC",
      desc: "Clear step-by-step guide covering name, registered agent, Articles of Organization, EIN, and compliance.",
    },
  ];

  const structures = [
    {
      href: "/business-structures/llc-vs-sole-proprietorship",
      title: "LLC vs Sole Proprietorship",
      desc: "Side-by-side comparison of liability, taxes, formalities, and when each structure may fit.",
    },
    {
      href: "/business-structures/llc-vs-corporation",
      title: "LLC vs Corporation",
      desc: "Formation, taxation, ownership flexibility, formalities, and investor considerations.",
    },
    {
      href: "/business-structures/llc-vs-s-corp",
      title: "LLC vs S-Corp",
      desc: "Tax treatment differences, self-employment tax, and when an S-Corp election may make sense.",
    },
    {
      href: "/business-structures/single-member-vs-multi-member-llc",
      title: "Single-Member vs Multi-Member LLC",
      desc: "Default tax treatment, operating agreements, and practical differences between one and multiple owners.",
    },
    {
      href: "/asset-protection",
      title: "Does an LLC Protect Personal Assets?",
      desc: "How limited liability works, when courts may pierce the veil, and practical steps to strengthen protection.",
    },
  ];

  const faqs = [
    {
      q: "How much does it cost to start an LLC?",
      a: "State filing fees typically range from about $35 to $500. Your full budget can also include annual reports, franchise taxes, registered agent services, and local costs. See the complete cost guide and use the free calculator for a state-specific estimate.",
    },
    {
      q: "What is the cheapest state to form an LLC?",
      a: "Several states have very low formation fees (often under $50–$100). However, the cheapest filing fee is not always the lowest long-term cost once annual reports and franchise taxes are included. Check the cheapest states ranking and the multi-year calculator.",
    },
    {
      q: "How long does it take to form an LLC?",
      a: "Online filings in many states are approved in a few business days; some offer same-day or next-day processing. Paper filings can take several weeks. Processing times vary by state and method.",
    },
    {
      q: "Do I need a registered agent?",
      a: "Yes. Every state requires a registered agent with a physical street address in that state to receive legal documents. You can often serve as your own agent if you have a qualifying address, or hire a commercial service.",
    },
    {
      q: "Can I form an LLC for free?",
      a: "The state filing fee is almost never $0. Some formation services advertise “free” formation but charge for registered agent or other add-ons, and you still pay the official state fee. True zero-cost formation is rare.",
    },
    {
      q: "Is an LLC better than a sole proprietorship?",
      a: "An LLC provides limited liability protection that a sole proprietorship does not. A sole proprietorship is simpler and usually cheaper to start, but the owner is generally personally liable for business debts and claims. The better choice depends on risk, growth plans, and tax situation.",
    },
    {
      q: "What are the hidden costs of an LLC?",
      a: "Beyond the initial filing fee, common extras include annual or biennial reports, franchise taxes, registered agent fees, name reservation, publication (in a few states), and local business licenses. The Hidden Costs guide covers these in detail.",
    },
    {
      q: "Do I need an operating agreement?",
      a: "Some states require one; most do not. Even when optional, a written operating agreement helps document ownership, management, and profit sharing and supports the separation between you and the company.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#102A43] to-[#1769AA] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Compare LLC costs by state with a free calculator
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Get the real number before you file. Free calculator for 49 verified states + DC,
            official government source references, cheapest and most expensive rankings,
            and clear guides on hidden costs and business structures.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/llc-cost-calculator"
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#102A43] shadow transition hover:bg-blue-50"
            >
              Open LLC Cost Calculator
            </Link>
            <Link
              href="/how-to-form-an-llc"
              className="rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              How to Form an LLC
            </Link>
          </div>
          <p className="mt-6 text-sm text-blue-200">
            Official state sources • Updated 2026 • Educational only
          </p>
        </div>
      </section>

      {/* Quick Cost Snapshot */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Typical filing fee range</p>
              <p className="mt-1 text-2xl font-bold text-[#102A43]">$35 – $500</p>
              <p className="mt-1 text-sm text-slate-600">Varies widely by state</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Lowest formation fees</p>
              <p className="mt-1 text-2xl font-bold text-[#102A43]">Under $100</p>
              <p className="mt-1 text-sm text-slate-600">
                <Link href="/cheapest-states-to-form-an-llc" className="text-[#1769AA] hover:underline">
                  See cheapest states →
                </Link>
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Watch for</p>
              <p className="mt-1 text-2xl font-bold text-[#102A43]">Hidden costs</p>
              <p className="mt-1 text-sm text-slate-600">
                <Link href="/hidden-costs-of-forming-an-llc" className="text-[#1769AA] hover:underline">
                  Annual reports & franchise taxes →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is an LLC */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-[#102A43]">What is an LLC?</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          A Limited Liability Company (LLC) is a state-recognized business structure that separates
          your personal assets from the business’s debts and legal claims. It offers liability
          protection, flexible tax treatment, and a more professional image than a sole proprietorship,
          while remaining simpler than a corporation for most small businesses.
        </p>
        <ul className="mt-4 grid gap-2 text-slate-700 sm:grid-cols-2">
          <li className="flex items-start gap-2">
            <span className="mt-1 text-[#1769AA]">✓</span>
            Limited personal liability (with important exceptions)
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-[#1769AA]">✓</span>
            Flexible tax options (disregarded, partnership, or S-Corp election)
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-[#1769AA]">✓</span>
            Relatively simple formation and ongoing formalities
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-[#1769AA]">✓</span>
            Credibility with banks, clients, and partners
          </li>
        </ul>
        <p className="mt-4">
          <Link href="/business-structures/llc-vs-sole-proprietorship" className="font-medium text-[#1769AA] hover:underline">
            Compare LLC vs Sole Proprietorship →
          </Link>
        </p>
      </section>

      {/* How Much Does an LLC Really Cost */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-[#102A43]">How much does an LLC really cost in 2026?</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            The state filing fee is only the starting point. Recurring annual reports, franchise taxes,
            registered agent fees, and occasional publication requirements can significantly change the total.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-sm font-medium text-slate-500">State filing fee</p>
              <p className="mt-1 font-semibold text-[#102A43]">$35 – $500</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-sm font-medium text-slate-500">Registered agent</p>
              <p className="mt-1 font-semibold text-[#102A43]">$0 – $300/yr</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-sm font-medium text-slate-500">Annual / franchise fees</p>
              <p className="mt-1 font-semibold text-[#102A43]">$0 – $800+</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-sm font-medium text-slate-500">Other possible costs</p>
              <p className="mt-1 font-semibold text-[#102A43]">Publication, licenses</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/llc-cost-calculator"
              className="rounded-lg bg-[#102A43] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1769AA]"
            >
              Calculate your state cost
            </Link>
            <Link
              href="/hidden-costs-of-forming-an-llc"
              className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-white"
            >
              See hidden costs guide
            </Link>
          </div>
        </div>
      </section>

      {/* How to Form an LLC - Steps Overview */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-[#102A43]">How to form an LLC (7 practical steps)</h2>
        <p className="mt-2 max-w-3xl text-slate-600">
          Forming an LLC is a state-level process. The exact forms and fees differ, but the sequence is similar everywhere.
        </p>
        <ol className="mt-8 space-y-4">
          {[
            "Choose your formation state (usually where you live or primarily operate).",
            "Pick a unique business name that meets state naming rules and check availability.",
            "Appoint a registered agent with a physical address in the formation state.",
            "File Articles of Organization (or Certificate of Formation) and pay the state fee.",
            "Create an operating agreement (strongly recommended even when not required).",
            "Apply for a free EIN from the IRS if needed.",
            "Open a business bank account and stay compliant with annual reports.",
          ].map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#102A43] text-sm font-bold text-white">
                {i + 1}
              </span>
              <span className="pt-1 text-slate-700">{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-6">
          <Link href="/how-to-form-an-llc" className="font-medium text-[#1769AA] hover:underline">
            Read the full step-by-step formation guide →
          </Link>
          {" · "}
          <Link href="/how-long-does-it-take-to-start-an-llc" className="font-medium text-[#1769AA] hover:underline">
            How long does it take?
          </Link>
        </p>
      </section>

      {/* Cost Tools & Rankings */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-[#102A43]">Cost tools & rankings</h2>
          <p className="mt-2 text-slate-600">
            Calculators and data-backed rankings built from official state fee sources.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#1769AA] hover:shadow-md"
              >
                <h3 className="font-semibold text-[#102A43] group-hover:text-[#1769AA]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Business Structures */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-[#102A43]">Business structures & protection</h2>
        <p className="mt-2 text-slate-600">
          Educational comparisons to help you understand the main options and the realistic limits of limited liability.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {structures.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#1769AA] hover:shadow-md"
            >
              <h3 className="font-semibold text-[#102A43] group-hover:text-[#1769AA]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Should You Form an LLC */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-[#102A43]">Should you form an LLC?</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            An LLC is often a good fit when you want clearer separation between personal and business assets,
            plan to grow, hire, or work with clients who expect a formal entity. It is not always necessary for
            very small, low-risk activities.
          </p>
          <ul className="mt-6 space-y-2 text-slate-700">
            <li className="flex gap-2"><span className="text-[#1769AA]">→</span> Do you want liability protection beyond a sole proprietorship?</li>
            <li className="flex gap-2"><span className="text-[#1769AA]">→</span> Are you earning meaningful revenue or taking on contracts?</li>
            <li className="flex gap-2"><span className="text-[#1769AA]">→</span> Do you plan to hire employees or bring on partners later?</li>
            <li className="flex gap-2"><span className="text-[#1769AA]">→</span> Will a formal entity help with banking, payments, or client trust?</li>
          </ul>
          <p className="mt-6 text-sm text-slate-600">
            Start with the cost calculator for your state, then review the formation guide and structure comparisons.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-[#102A43]">Frequently asked questions</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((item, i) => (
            <details key={i} className="group rounded-xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer list-none font-semibold text-[#102A43] marker:content-none">
                <span className="flex items-center justify-between">
                  {item.q}
                  <span className="ml-4 text-slate-400 transition group-open:rotate-180">▼</span>
                </span>
              </summary>
              <p className="mt-3 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Sources trust */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-xl font-bold text-[#102A43]">How we handle fees & sources</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold text-slate-800">Official sources only</h3>
              <p className="mt-1 text-sm text-slate-600">
                Every published state fee is linked to the relevant Secretary of State or equivalent government page. We do not invent numbers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Verified status shown</h3>
              <p className="mt-1 text-sm text-slate-600">
                Fees are marked with verification date and status. Unknown or unconfirmed fees are shown as “Not verified” — never as $0.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Educational, not advice</h3>
              <p className="mt-1 text-sm text-slate-600">
                Content is for information only. Always confirm current fees and requirements on the official state site before filing.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm">
            <Link href="/about/sources-and-methodology" className="text-[#1769AA] hover:underline">
              Read our sources & methodology →
            </Link>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="rounded-2xl bg-[#102A43] px-6 py-10 text-center text-white sm:px-10">
            <h2 className="text-2xl font-bold">Know the real cost. Form your LLC the right way.</h2>
            <p className="mx-auto mt-2 max-w-xl text-blue-100">
              Pick a state, see formation and recurring costs, and follow the official source link to confirm.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/llc-cost-calculator"
                className="inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#102A43] transition hover:bg-blue-50"
              >
                Calculate LLC costs
              </Link>
              <Link
                href="/how-to-form-an-llc"
                className="inline-block rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                How to form an LLC
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
