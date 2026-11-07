import type { Metadata } from "next";
import Link from "next/link";
import { STATE_FEES } from "@/data/stateFees";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "LLC Costs by State — Filing Fees & Annual Reports",
  description:
    "Compare LLC formation filing fees and recurring annual or biennial costs across 49 currently verified US states and DC. Alabama is excluded until its variable Business Privilege Tax is fully modeled.",
  alternates: { canonical: "/llc-cost-by-state" },
};

export default function LLCCostByStatePage() {
  const verified = STATE_FEES.filter((s) => s.status === "verified").sort((a, b) =>
    a.state.localeCompare(b.state)
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <BreadcrumbJsonLd items={[{"name":"Home","item":"/"},{"name":"LLC Costs by State","item":"/llc-cost-by-state"}]} />
      <BreadcrumbJsonLd items={[{"name":"Home","item":"/"},{"name":"LLC Costs by State","item":"/llc-cost-by-state"}]} />
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">LLC Costs by State</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">
        LLC Formation Costs by State
      </h1>
      <p className="mt-3 max-w-3xl text-slate-600">
        Verified filing fees and recurring charges for 49 US states and the District of Columbia. Alabama is temporarily excluded while its variable Business Privilege Tax is reviewed. Each row links to the official government source used for verification. Always re-check current fees before filing.
      </p>

      <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">State</th>
              <th className="px-4 py-3 font-medium">Formation fee</th>
              <th className="px-4 py-3 font-medium">Recurring</th>
              <th className="px-4 py-3 font-medium">Frequency</th>
              <th className="px-4 py-3 font-medium">Source</th>
              <th className="px-4 py-3 font-medium">Verified</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {verified.map((s) => (
              <tr key={s.slug} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-900">
                  <Link href={`/llc-cost-by-state/${s.slug}`} className="text-[#1769AA] hover:underline">
                    {s.state}
                  </Link>
                </td>
                <td className="px-4 py-3">
                  {s.formationFee != null ? `$${s.formationFee}` : "—"}
                </td>
                <td className="px-4 py-3">
                  <div>
                    {s.annualFrequency !== "none" && (
                      <div>{s.annualFee != null ? `${s.annualFee}` : "Variable / not included"} <span className="text-xs text-slate-500">({s.recurringFeeLabel ?? (s.annualFrequency === "biennial" ? "biennial filing" : "annual filing")})</span></div>
                    )}
                    {s.franchiseTax != null && s.franchiseTax > 0 && (
                      <div>${s.franchiseTax} <span className="text-xs text-slate-500">(annual franchise / entity tax)</span></div>
                    )}
                    {s.annualFrequency === "none" && !s.franchiseTax && "No fixed recurring filing fee"}
                  </div>
                </td>
                <td className="px-4 py-3 capitalize">{s.annualFrequency === "none" ? (s.franchiseTax ? "Annual tax" : "None listed") : s.annualFrequency}</td>
                <td className="px-4 py-3">
                  <a
                    href={s.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1769AA] hover:underline"
                  >
                    {s.sourceName.length > 28
                      ? s.sourceName.slice(0, 28) + "…"
                      : s.sourceName}
                  </a>
                </td>
                <td className="px-4 py-3 text-slate-500">{s.verifiedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-sm text-slate-600">
        Use the{" "}
        <Link href="/llc-cost-calculator" className="font-medium text-[#1769AA] hover:underline">
          LLC Cost Calculator
        </Link>{" "}
        for a personalized estimate that includes optional registered agent and multi-year totals.
      </p>

      <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Important:</strong> Fees change. The figures above were verified against the linked
        official pages on the dates shown. Always re-check the current fee schedule on the state
        website before filing or budgeting.
      </div>
    </div>
  );
}
