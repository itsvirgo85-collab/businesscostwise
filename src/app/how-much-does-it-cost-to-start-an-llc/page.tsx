import type { Metadata } from "next";
import Link from "next/link";
import { STATE_FEES } from "@/data/stateFees";

export const metadata: Metadata = {
  title: "How Much Does It Cost to Start an LLC in 2026? (All 50 States)",
  description:
    "Real cost to start an LLC in 2026: state filing fees from $35 to $500, annual reports, franchise taxes, and hidden extras. Free calculator and official source links.",
};

export default function HowMuchDoesItCostPage() {
  const verified = STATE_FEES.filter((s) => s.status === "verified" && s.formationFee != null);
  const cheapest = [...verified].sort((a, b) => (a.formationFee ?? 999) - (b.formationFee ?? 999)).slice(0, 5);
  const expensive = [...verified].sort((a, b) => (b.formationFee ?? 0) - (a.formationFee ?? 0)).slice(0, 5);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">How Much Does It Cost to Start an LLC</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        How Much Does It Cost to Start an LLC in 2026?
      </h1>
      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        The short answer: state filing fees range from <strong>$35</strong> (Montana) to around{" "}
        <strong>$500</strong> (Massachusetts). The real cost is almost always higher once you add
        annual reports, franchise taxes, registered agent fees, and — in a few states — newspaper
        publication. This page breaks down every major cost so you can budget accurately before you file.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/llc-cost-calculator"
          className="rounded-lg bg-[#102A43] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1769AA] transition"
        >
          Free LLC Cost Calculator →
        </Link>
        <Link
          href="/llc-cost-by-state"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-[#1769AA] transition"
        >
          All 50 states table
        </Link>
      </div>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Quick answer (2026)</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          <li><strong>Formation fee range:</strong> $35 – $500 (median ~$100)</li>
          <li><strong>Cheapest to form:</strong> Montana $35, Kentucky $40, Arkansas $45</li>
          <li><strong>Most expensive to keep:</strong> California ($800 franchise tax every year)</li>
          <li><strong>Often overlooked:</strong> Annual reports, publication (NY), registered agent, local licenses</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">1. State formation filing fee</h2>
        <p className="mt-3 text-sm text-slate-700 leading-relaxed">
          This is the one-time fee you pay the Secretary of State (or equivalent) to file Articles or
          Certificate of Organization. It is the number most comparison tables lead with — and the one
          that matters least over a five-year horizon.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-[#102A43]">Lowest formation fees</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {cheapest.map((s) => (
                <li key={s.slug} className="flex justify-between">
                  <Link href={`/llc-cost-by-state/${s.slug}`} className="text-[#1769AA] hover:underline">
                    {s.state}
                  </Link>
                  <span className="font-medium">${s.formationFee}</span>
                </li>
              ))}
            </ul>
            <Link href="/cheapest-states-to-form-an-llc" className="mt-3 inline-block text-xs text-[#1769AA] hover:underline">
              Full cheapest ranking →
            </Link>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-[#102A43]">Highest formation fees</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {expensive.map((s) => (
                <li key={s.slug} className="flex justify-between">
                  <Link href={`/llc-cost-by-state/${s.slug}`} className="text-[#1769AA] hover:underline">
                    {s.state}
                  </Link>
                  <span className="font-medium">${s.formationFee}</span>
                </li>
              ))}
            </ul>
            <Link href="/most-expensive-states-to-form-an-llc" className="mt-3 inline-block text-xs text-[#1769AA] hover:underline">
              Full most expensive ranking →
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">2. Recurring state costs (the real long-term bill)</h2>
        <p className="mt-3 text-sm text-slate-700 leading-relaxed">
          Most states require an annual or biennial report. Some also impose a franchise or privilege tax
          that has nothing to do with whether the LLC makes money. California’s $800 minimum franchise tax
          is the clearest example: cheap to form, expensive to keep.
        </p>
        <p className="mt-3 text-sm text-slate-700">
          See the full breakdown on{" "}
          <Link href="/annual-report-requirements-by-state" className="text-[#1769AA] hover:underline">
            Annual Report Requirements by State
          </Link>{" "}and{" "}
          <Link href="/hidden-costs-of-forming-an-llc" className="text-[#1769AA] hover:underline">
            Hidden Costs of Forming an LLC
          </Link>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">3. Costs people forget</h2>
        <div className="mt-4 space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-semibold text-[#102A43]">Registered agent</h3>
            <p className="mt-1 text-sm text-slate-600">
              Required in every state. Serve as your own (if you have a qualifying in-state address) for $0,
              or pay a commercial service typically $50–$300 per year.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-semibold text-[#102A43]">Publication requirements</h3>
            <p className="mt-1 text-sm text-slate-600">
              New York is the most expensive example. Arizona and Nebraska can also require newspaper notices
              in certain situations. These are one-time but can add hundreds of dollars in year one.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-semibold text-[#102A43]">Local licenses & permits</h3>
            <p className="mt-1 text-sm text-slate-600">
              City and county business licenses are separate from state formation fees and vary widely by location and industry.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-semibold text-[#102A43]">EIN (Employer Identification Number)</h3>
            <p className="mt-1 text-sm text-slate-600">
              Free directly from the IRS. Third-party services sometimes charge for the same filing.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">4. How to get an accurate number for your situation</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>Pick the state where the business will actually operate (home state is usually correct).</li>
          <li>
            Use the{" "}
            <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">
              free LLC Cost Calculator
            </Link>{" "}for 1 / 3 / 5 year projections.
          </li>
          <li>Open the individual state page and click through to the official government source.</li>
          <li>Decide whether you will serve as your own registered agent or pay a service.</li>
          <li>Check whether your county requires publication or additional local licenses.</li>
        </ol>
      </section>

      <section className="mt-12 rounded-2xl bg-[#102A43] px-6 py-8 text-center text-white">
        <h2 className="text-xl font-bold">Calculate your exact state cost in 30 seconds</h2>
        <p className="mt-2 text-blue-100 text-sm max-w-md mx-auto">
          Free, no signup. Official source links on every state. Educational only — not legal advice.
        </p>
        <Link
          href="/llc-cost-calculator"
          className="mt-5 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#102A43] hover:bg-blue-50 transition"
        >
          Open LLC Cost Calculator
        </Link>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold text-[#102A43]">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/cheapest-states-to-form-an-llc" className="text-[#1769AA] hover:underline">Cheapest States to Form an LLC 2026</Link></li>
          <li><Link href="/most-expensive-states-to-form-an-llc" className="text-[#1769AA] hover:underline">Most Expensive States to Form & Keep an LLC</Link></li>
          <li><Link href="/hidden-costs-of-forming-an-llc" className="text-[#1769AA] hover:underline">Hidden Costs of Forming an LLC</Link></li>
          <li><Link href="/business-structures/llc-vs-sole-proprietorship" className="text-[#1769AA] hover:underline">LLC vs Sole Proprietorship</Link></li>
          <li><Link href="/asset-protection" className="text-[#1769AA] hover:underline">Does an LLC Protect Personal Assets?</Link></li>
        </ul>
      </section>

      <p className="mt-10 text-xs text-slate-500 leading-relaxed">
        Educational resource only. Fees change. Always confirm current amounts on the official state
        website before filing. This is not legal, tax, or financial advice.
      </p>
    </div>
  );
}
