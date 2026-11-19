"use client";

import { useMemo, useState } from "react";
import { STATE_FEES } from "@/data/stateFees";
import { getRenewalSummary } from "@/lib/stateCost";

function money(n: number): string {
  return `$${Math.round(n).toLocaleString()}`;
}

export default function AnnualReportCalculator() {
  const verified = useMemo(
    () => STATE_FEES.filter((s) => s.status === "verified"),
    []
  );

  const [stateSlug, setStateSlug] = useState("texas");

  const state = useMemo(
    () => verified.find((s) => s.slug === stateSlug),
    [stateSlug, verified]
  );

  const summary = useMemo(() => (state ? getRenewalSummary(state) : null), [state]);

  if (!state || !summary) {
    return <p className="text-slate-600">Loading calculator…</p>;
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="text-lg font-semibold text-[#102A43]">
        Annual Report &amp; Renewal Cost Calculator
      </h2>
      <p className="mt-1 text-sm text-slate-600">
        Pick a state to see its report fee, how often it is due, and the
        5-year renewal total — all from our verified state data.
      </p>

      <div className="mt-4">
        <label
          htmlFor="arc-state"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          State
        </label>
        <select
          id="arc-state"
          value={stateSlug}
          onChange={(e) => setStateSlug(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#1769AA] focus:outline-none focus:ring-1 focus:ring-[#1769AA]"
        >
          {verified.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.state} ({s.abbreviation})
            </option>
          ))}
        </select>
      </div>

      <dl className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Report fee per filing
          </dt>
          <dd className="mt-1 text-2xl font-bold text-[#102A43]">
            {summary.perFilingFee != null ? money(summary.perFilingFee) : "$0 / none"}
          </dd>
          <dd className="mt-1 text-xs text-slate-500">
            {state.recurringFeeLabel ?? "Annual / biennial report"}
          </dd>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
            How often
          </dt>
          <dd className="mt-1 text-2xl font-bold text-[#102A43]">
            {summary.frequencyLabel}
          </dd>
          <dd className="mt-1 text-xs text-slate-500">
            {state.annualFrequency === "none" && state.franchiseTax != null
              ? `Annual franchise / entity tax of ${money(state.franchiseTax)} still applies.`
              : "Filing frequency in our verified data."}
          </dd>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Franchise / entity tax
          </dt>
          <dd className="mt-1 text-2xl font-bold text-[#102A43]">
            {state.franchiseTax != null && state.franchiseTax > 0
              ? `${money(state.franchiseTax)}/yr`
              : "$0"}
          </dd>
          <dd className="mt-1 text-xs text-slate-500">
            Charged on top of the report fee where it applies.
          </dd>
        </div>
        <div className="rounded-xl bg-[#102A43] p-4 text-white">
          <dt className="text-xs font-medium uppercase tracking-wide text-blue-200">
            5-year renewal total
          </dt>
          <dd className="mt-1 text-2xl font-bold">
            {money(summary.fiveYearRenewal)}
          </dd>
          <dd className="mt-1 text-xs text-blue-100">
            Recurring state fees over 5 years (formation fee excluded).
          </dd>
        </div>
      </dl>

      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Due dates depend on your formation date and state rules, and late fees
        vary by state — confirm both on the{" "}
        <a
          href={state.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1769AA] underline"
        >
          {state.sourceName}
        </a>{" "}
        site before filing. Missing a deadline can add penalties and, if left
        unpaid, lead to loss of good standing.
      </p>
    </div>
  );
}
