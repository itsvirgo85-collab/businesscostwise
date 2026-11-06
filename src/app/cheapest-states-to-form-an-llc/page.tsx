import type { Metadata } from "next";
import Link from "next/link";
import { STATE_FEES } from "@/data/stateFees";
import { calculateFiveYearStateCost, calculateRecurringStateFees } from "@/lib/stateCost";

export const metadata: Metadata = {
  title: "Cheapest States to Form an LLC 2026 — Lowest Filing Fees Ranked",
  description:
    "Compare fixed state formation and recurring fees across verified states. Variable tax liabilities, foreign qualification and local costs are not fully modeled.",
  alternates: { canonical: "/cheapest-states-to-form-an-llc" },
};

export default function CheapestStatesPage() {
  const verified = STATE_FEES.filter((s) => s.status === "verified" && s.formationFee != null);

  const byFormation = [...verified].sort((a, b) => (a.formationFee ?? 999) - (b.formationFee ?? 999));

  const withFiveYear = verified.map((s) => ({ ...s, yearlyApprox: calculateRecurringStateFees(s, 5) / 5, fiveYear: calculateFiveYearStateCost(s) }));

    const byFiveYear = [...withFiveYear].sort((a, b) => a.fiveYear - b.fiveYear).slice(0, 12);
  const topCheapestFormation = byFormation.slice(0, 10);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/llc-cost-by-state" className="hover:text-[#1769AA]">LLC Costs by State</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Cheapest States</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">
        Cheapest States to Form an LLC in 2026
      </h1>
      <p className="mt-3 text-slate-600">
        States are ranked separately by official one-time formation fees and estimated five-year state costs. Montana currently has the lowest listed formation fee at $35. Long-term costs also depend on annual or biennial reports and franchise taxes. Alabama is temporarily excluded while its variable Business Privilege Tax is reviewed.
      </p>
      <p className="mt-3 text-sm text-slate-600">
        These rankings compare listed fixed state charges, not every possible tax. Revenue-, income-, net-worth- or member-count-based taxes may increase the real cost and are excluded where they cannot be calculated from a simple flat fee. Texas franchise tax is revenue-based and is not included in its fixed-fee estimate. Forming outside the state where you operate can also require foreign qualification and extra fees.
      </p>

      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Important:</strong> A low formation fee does not always mean the lowest total cost.
        California charges only $70 to form but $800 per year in franchise tax. Always check
        the recurring column and confirm on the official state website before filing.
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Lowest Formation Fees (One-Time)
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Ranked by the official state filing fee for Articles / Certificate of Organization.
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">#</th>
                <th className="px-4 py-3 font-medium">State</th>
                <th className="px-4 py-3 font-medium">Formation Fee</th>
                <th className="px-4 py-3 font-medium">Recurring</th>
                <th className="px-4 py-3 font-medium">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {topCheapestFormation.map((s, i) => (
                <tr key={s.slug} className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-slate-500">{i + 1}</td>
                  <td className="px-4 py-3 font-medium">
                    <Link href={`/llc-cost-by-state/${s.slug}`} className="text-[#1769AA] hover:underline">
                      {s.state}
                    </Link>
                  </td>
                  <td className="px-4 py-3 font-semibold text-[#102A43]">
                    ${s.formationFee}
                  </td>
                  <td className="px-4 py-3">
                    {s.annualFrequency !== "none"
                      ? `${s.annualFee == null ? "Variable" : `${s.annualFee}`} ${s.annualFrequency}`
                      : s.franchiseTax
                        ? `${s.franchiseTax} franchise tax`
                        : "No fixed recurring filing fee"}
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/llc-cost-by-state/${s.slug}`} className="text-[#1769AA] hover:underline text-xs">
                      View →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Lowest Estimated 5-Year State Costs
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Approximate total of formation fee + recurring state fees over five years
          (biennial fees averaged). Does not include registered agent services, local licenses,
          publication costs, or professional fees.
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">#</th>
                <th className="px-4 py-3 font-medium">State</th>
                <th className="px-4 py-3 font-medium">Est. 5-Year</th>
                <th className="px-4 py-3 font-medium">Formation</th>
                <th className="px-4 py-3 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {byFiveYear.map((s, i) => (
                <tr key={s.slug} className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-slate-500">{i + 1}</td>
                  <td className="px-4 py-3 font-medium">
                    <Link href={`/llc-cost-by-state/${s.slug}`} className="text-[#1769AA] hover:underline">
                      {s.state}
                    </Link>
                  </td>
                  <td className="px-4 py-3 font-semibold text-[#102A43]">
                    ${Math.round(s.fiveYear).toLocaleString()}
                  </td>
                  <td className="px-4 py-3">${s.formationFee}</td>
                  <td className="px-4 py-3 text-xs text-slate-500 max-w-xs truncate">
                    {s.notes.slice(0, 60)}…
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-14 space-y-4">
        <h2 className="text-xl font-semibold text-[#102A43]">Key Takeaways</h2>
        <ul className="space-y-3 text-sm text-slate-700">
          <li className="flex gap-2">
            <span className="text-[#1769AA] font-bold">•</span>
            <span><strong>Montana</strong> currently has the lowest official formation fee at $35.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#1769AA] font-bold">•</span>
            <span>Several states (Arizona, Missouri, New Mexico, Ohio, South Carolina and others) charge little or nothing in recurring report fees.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#1769AA] font-bold">•</span>
            <span><strong>California</strong> is inexpensive to form ($70) but among the most expensive to maintain because of the $800 annual franchise tax.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#1769AA] font-bold">•</span>
            <span>Formation fee alone is a poor decision metric. Always calculate multi-year cost and confirm current fees on the official state site.</span>
          </li>
        </ul>
      </section>

      <section className="mt-12 rounded-2xl bg-[#102A43] px-6 py-8 text-center text-white">
        <h2 className="text-xl font-bold">Calculate your exact state cost</h2>
        <p className="mt-2 text-blue-100 text-sm max-w-md mx-auto">
          Use the free calculator to add registered agent, multi-year projections, and optional fees for any verified state.
        </p>
        <Link
          href="/llc-cost-calculator"
          className="mt-5 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#102A43] hover:bg-blue-50 transition"
        >
          Open LLC Cost Calculator
        </Link>
      </section>

      <p className="mt-10 text-xs text-slate-500">
        Data is drawn from official state sources and marked with verification dates.
        Fees change. Always re-check the current fee schedule on the Secretary of State
        (or equivalent) website before filing. This page is educational only and is not legal or tax advice.
      </p>
    </div>
  );
}
