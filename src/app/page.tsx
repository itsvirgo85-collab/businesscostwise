import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BusinessCostWise — US LLC Costs, Calculators & Business Guides",
  description:
    "Calculate LLC formation costs by state with official source links. Compare LLC vs sole proprietorship. Educational tools for US entrepreneurs.",
};

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-[#102A43] to-[#1769AA] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Know the real cost of forming an LLC in the US
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Free state-by-state LLC cost calculator with official government sources,
            business structure comparisons, and practical guides for small-business owners.
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
        <h2 className="text-2xl font-bold text-[#102A43]">Core tools</h2>
        <p className="mt-2 text-slate-600">
          Practical calculators and comparisons built for US entrepreneurs.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/llc-cost-calculator"
            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#1769AA] hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#1769AA]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="mt-4 font-semibold text-[#102A43] group-hover:text-[#1769AA]">
              LLC Formation Cost Calculator
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Select any verified state, add optional registered agent and expedite fees, and see 1-, 3-, or 5-year estimates with source links.
            </p>
          </Link>

          <Link
            href="/business-structures/llc-vs-sole-proprietorship"
            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#1769AA] hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#1769AA]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="mt-4 font-semibold text-[#102A43] group-hover:text-[#1769AA]">
              LLC vs Sole Proprietorship
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Side-by-side comparison of formation, liability, taxes, and administration so you can evaluate which structure fits your situation.
            </p>
          </Link>

          <Link
            href="/asset-protection"
            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#1769AA] hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#1769AA]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="mt-4 font-semibold text-[#102A43] group-hover:text-[#1769AA]">
              Business Asset Protection
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Educational checklist and guides on separating personal and business assets, insurance basics, and realistic LLC liability limits.
            </p>
          </Link>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
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
      </section>
    </div>
  );
}
