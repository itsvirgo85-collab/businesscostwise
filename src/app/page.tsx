import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get LLC Cost Calculator — Free US LLC Filing Fees by State (2026)",
  description:
    "How much does it cost to start an LLC in 2026? Free calculator, all 50 states fees, cheapest & most expensive rankings, hidden costs, and structure guides. Official source links.",
};

export default function HomePage() {
  const tools = [
    {
      href: "/how-much-does-it-cost-to-start-an-llc",
      title: "How Much Does It Cost to Start an LLC?",
      desc: "Complete 2026 breakdown: filing fees, annual reports, franchise taxes, and hidden extras — with free calculator.",
    },
    {
      href: "/llc-cost-calculator",
      title: "LLC Cost Calculator",
      desc: "Interactive 1 / 3 / 5 year cost estimates by state, with optional registered agent and official source links.",
    },
    {
      href: "/llc-cost-by-state",
      title: "LLC Costs by State",
      desc: "Full table of formation and recurring fees for all 50 states + DC, each linked to official government sources.",
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

  return (
    <div>
      <section className="bg-gradient-to-b from-[#102A43] to-[#1769AA] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            How much does it cost to start an LLC in 2026?
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Get the real number before you file. Free calculator for all 50 states + DC,
            official government source links, cheapest and most expensive rankings,
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
              href="/llc-cost-by-state"
              className="rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Browse costs by state
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
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
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-[#102A43]">Business structures & protection</h2>
          <p className="mt-2 text-slate-600">
            Educational comparisons to help you understand the main options and the realistic limits of limited liability.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
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
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="rounded-2xl bg-[#102A43] px-6 py-10 text-center text-white sm:px-10">
            <h2 className="text-2xl font-bold">Start with the calculator</h2>
            <p className="mx-auto mt-2 max-w-xl text-blue-100">
              Pick a state, see formation and recurring costs, and follow the official source link to confirm.
            </p>
            <Link
              href="/llc-cost-calculator"
              className="mt-6 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#102A43] transition hover:bg-blue-50"
            >
              Calculate LLC costs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
