"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { STATE_FEES } from "@/data/stateFees";
import { getRenewalSummary } from "@/lib/stateCost";

function money(n: number): string {
  return `$${Math.round(n).toLocaleString()}`;
}

type FrequencyFilter = "all" | "annual" | "biennial" | "none";

export default function AnnualReportTable() {
  const verified = useMemo(
    () => STATE_FEES.filter((s) => s.status === "verified"),
    []
  );
  const [query, setQuery] = useState("");
  const [frequency, setFrequency] = useState<FrequencyFilter>("all");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return verified
      .filter((s) => {
        if (frequency !== "all" && s.annualFrequency !== frequency) return false;
        if (!q) return true;
        return (
          s.state.toLowerCase().includes(q) ||
          s.abbreviation.toLowerCase() === q
        );
      })
      .map((s) => ({ state: s, summary: getRenewalSummary(s) }))
      .sort((a, b) => a.state.state.localeCompare(b.state.state));
  }, [verified, query, frequency]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label htmlFor="art-search" className="sr-only">
          Search states
        </label>
        <input
          id="art-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a state…"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#1769AA] focus:outline-none focus:ring-1 focus:ring-[#1769AA] sm:max-w-xs"
        />
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by filing frequency">
          {(
            [
              ["all", "All states"],
              ["annual", "Annual"],
              ["biennial", "Biennial"],
              ["none", "No report"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setFrequency(value)}
              aria-pressed={frequency === value}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                frequency === value
                  ? "bg-[#102A43] text-white"
                  : "border border-slate-300 bg-white text-slate-700 hover:border-[#1769AA]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-3 text-xs text-slate-500" aria-live="polite">
        Showing {rows.length} of {verified.length} jurisdictions.
      </p>

      <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">State</th>
              <th className="px-4 py-3 font-medium">Frequency</th>
              <th className="px-4 py-3 font-medium">Fee per filing</th>
              <th className="px-4 py-3 font-medium">Franchise / tax</th>
              <th className="px-4 py-3 font-medium">5-year renewal</th>
              <th className="px-4 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map(({ state, summary }) => (
              <tr key={state.slug} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-medium">
                  <Link
                    href={`/llc-cost-by-state/${state.slug}`}
                    className="text-[#1769AA] hover:underline"
                  >
                    {state.state}
                  </Link>
                </td>
                <td className="px-4 py-3">{summary.frequencyLabel}</td>
                <td className="px-4 py-3">
                  {summary.perFilingFee != null ? money(summary.perFilingFee) : "—"}
                </td>
                <td className="px-4 py-3">
                  {state.franchiseTax != null && state.franchiseTax > 0
                    ? `${money(state.franchiseTax)}/yr`
                    : "—"}
                </td>
                <td className="px-4 py-3 font-semibold text-[#102A43]">
                  {money(summary.fiveYearRenewal)}
                </td>
                <td className="px-4 py-3">
                  <Link
                    href={`/llc-cost-by-state/${state.slug}`}
                    className="text-xs text-[#1769AA] hover:underline"
                  >
                    View →
                  </Link>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-sm text-slate-500">
                  No states match that search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-slate-500">
        5-year renewal = recurring report fees plus franchise/entity tax over
        five years (formation fee excluded). Figures are from our verified state
        data; confirm deadlines and late fees on the official state website.
      </p>
    </div>
  );
}
