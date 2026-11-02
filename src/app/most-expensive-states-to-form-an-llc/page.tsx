import type { Metadata } from "next";
import Link from "next/link";
import { STATE_FEES } from "@/data/stateFees";

export const metadata: Metadata = {
  title: "Most Expensive States to Form & Keep an LLC 2026",
  description:
    "Ranked list of the most expensive US states to form and maintain an LLC in 2026, including high formation fees, annual reports, and franchise taxes like California’s $800.",
};

export default function MostExpensiveStatesPage() {
  const verified = STATE_FEES.filter((s) => s.status === "verified" && s.formationFee != null);

  const byFormation = [...verified]
    .sort((a, b) => (b.formationFee ?? 0) - (a.formationFee ?? 0))
    .slice(0, 12);

  const withYearly = verified.map((s) => {
    let yearly = 0;
    if (s.annualFrequency === "annual") {
      yearly = (s.annualFee ?? 0) + (s.franchiseTax ?? 0);
    } else if (s.annualFrequency === "biennial") {
      yearly = (s.annualFee ?? 0) / 2;
    }
    if (s.slug === "california") {
      yearly = (s.franchiseTax ?? 800) + (s.annualFee ?? 0);
    }
    const fiveYear = (s.formationFee ?? 0) + yearly * 5;
    return { ...s, yearly, fiveYear };
  });

  const byYearly = [...withYearly].sort((a, b) => b.yearly - a.yearly).slice(0, 12);
  const byFiveYear = [...withYearly].sort((a, b) => b.fiveYear - a.fiveYear).slice(0, 12);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/llc-cost-by-state" className="hover:text-[#1769AA]">LLC Costs by State</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Most Expensive States</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">
        Most Expensive States to Form & Keep an LLC (2026)
      </h1>
      <p className="mt-3 text-slate-600 leading-relaxed">
        Some states charge high one-time formation fees. Others look inexpensive to form but become
        costly over time because of annual reports, franchise taxes, or both. This page ranks states
        by formation fee, by estimated yearly state cost, and by approximate five-year total using
        verified official data.
      </p>

      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Important:</strong> A high formation fee is not always the biggest long-term cost.
        California’s formation fee is relatively low ($70), but its $800 annual franchise tax makes
        it one of the most expensive states to keep an LLC active. Always look at multi-year totals
        and confirm current fees on the official state website.
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">Highest Formation Fees</h2>
        <p className="mt-2 text-sm text-slate-600">
          Ranked by the official one-time state filing fee for forming an LLC.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">#</th>
                <th className="px-4 py-3 font-medium">State</th>
                <th className="px-4 py-3 font-medium">Formation Fee</th>
                <th className="px-4 py-3 font-medium">Recurring note</th>
                <th className="px-4 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {byFormation.map((s, i) => (
                <tr key={s.slug} className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-slate-500">{i + 1}</td>
                  <td className="px-4 py-3 font-medium">
                    <Link href={`/llc-cost-by-state/${s.slug}`} className="text-[#1769AA] hover:underline">
                      {s.state}
                    </Link>
                  </td>
                  <td className="px-4 py-3 font-semibold text-[#102A43]">${s.formationFee}</td>
                  <td className="px-4 py-3 text-xs text-slate-500 max-w-[180px]">
                    {s.franchiseTax
                      ? `Franchise ~$${s.franchiseTax}`
                      : s.annualFee
                        ? `$${s.annualFee} ${s.annualFrequency}`
                        : "See state page"}
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/llc-cost-by-state/${s.slug}`} className="text-xs text-[#1769AA] hover:underline">View →</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold text-[#102A43]">Highest Estimated Yearly State Costs</h2>
        <p className="mt-2 text-sm text-slate-600">
          Approximate annualized cost of required state reports + franchise/privilege taxes.
          Does not include registered agent fees, publication, or local licenses.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">#</th>
                <th className="px-4 py-3 font-medium">State</th>
                <th className="px-4 py-3 font-medium">Est. Yearly</th>
                <th className="px-4 py-3 font-medium">Formation</th>
                <th className="px-4 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {byYearly.map((s, i) => (
                <tr key={s.slug} className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-slate-500">{i + 1}</td>
                  <td className="px-4 py-3 font-medium">
                    <Link href={`/llc-cost-by-state/${s.slug}`} className="text-[#1769AA] hover:underline">{s.state}</Link>
                  </td>
                  <td className="px-4 py-3 font-semibold text-[#102A43]">${Math.round(s.yearly).toLocaleString()}</td>
                  <td className="px-4 py-3">${s.formationFee}</td>
                  <td className="px-4 py-3">
                    <Link href={`/llc-cost-by-state/${s.slug}`} className="text-xs text-[#1769AA] hover:underline">View →</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold text-[#102A43]">Highest Estimated 5-Year State Costs</h2>
        <p className="mt-2 text-sm text-slate-600">
          Formation fee + five years of estimated recurring state costs. Useful for comparing the
          true long-term price of keeping an LLC in good standing.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">#</th>
                <th className="px-4 py-3 font-medium">State</th>
                <th className="px-4 py-3 font-medium">Est. 5-Year</th>
                <th className="px-4 py-3 font-medium">Formation</th>
                <th className="px-4 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {byFiveYear.map((s, i) => (
                <tr key={s.slug} className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-slate-500">{i + 1}</td>
                  <td className="px-4 py-3 font-medium">
                    <Link href={`/llc-cost-by-state/${s.slug}`} className="text-[#1769AA] hover:underline">{s.state}</Link>
                  </td>
                  <td className="px-4 py-3 font-semibold text-[#102A43]">${Math.round(s.fiveYear).toLocaleString()}</td>
                  <td className="px-4 py-3">${s.formationFee}</td>
                  <td className="px-4 py-3">
                    <Link href={`/llc-cost-by-state/${s.slug}`} className="text-xs text-[#1769AA] hover:underline">View →</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-14 space-y-4">
        <h2 className="text-xl font-semibold text-[#102A43]">Key takeaways</h2>
        <ul className="space-y-3 text-sm text-slate-700">
          <li className="flex gap-2"><span className="text-[#1769AA] font-bold">•</span><span><strong>Massachusetts</strong> and a few other states charge among the highest one-time formation fees.</span></li>
          <li className="flex gap-2"><span className="text-[#1769AA] font-bold">•</span><span><strong>California</strong> is the classic example of low formation fee + high ongoing cost ($800 franchise tax every year).</span></li>
          <li className="flex gap-2"><span className="text-[#1769AA] font-bold">•</span><span>Publication requirements (especially in New York) can make year-one costs much higher than the formation fee alone.</span></li>
          <li className="flex gap-2"><span className="text-[#1769AA] font-bold">•</span><span>Always calculate multi-year cost and read the notes on each state page before deciding where to form.</span></li>
        </ul>
      </section>

      <section className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Related pages</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/cheapest-states-to-form-an-llc" className="text-[#1769AA] hover:underline">Cheapest States to Form an LLC 2026</Link></li>
          <li><Link href="/hidden-costs-of-forming-an-llc" className="text-[#1769AA] hover:underline">Hidden Costs of Forming an LLC</Link></li>
          <li><Link href="/annual-report-requirements-by-state" className="text-[#1769AA] hover:underline">Annual Report Requirements by State</Link></li>
          <li><Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">LLC Cost Calculator</Link></li>
          <li><Link href="/llc-cost-by-state" className="text-[#1769AA] hover:underline">Full Costs by State table</Link></li>
        </ul>
      </section>

      <section className="mt-10 rounded-2xl bg-[#102A43] px-6 py-8 text-center text-white">
        <h2 className="text-xl font-bold">Run the numbers for your state</h2>
        <p className="mt-2 text-blue-100 text-sm max-w-md mx-auto">
          Use the free calculator for 1 / 3 / 5 year projections including optional registered agent.
        </p>
        <Link href="/llc-cost-calculator" className="mt-5 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#102A43] hover:bg-blue-50 transition">
          Open LLC Cost Calculator
        </Link>
      </section>

      <p className="mt-10 text-xs text-slate-500">
        Rankings are derived from verified official state fee data. Fees change. Always re-check the
        current schedule on the official state website. This page is educational only and is not legal or tax advice.
      </p>
    </div>
  );
}
