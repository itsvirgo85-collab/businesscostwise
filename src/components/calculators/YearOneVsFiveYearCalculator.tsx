"use client";

import { useMemo, useState } from "react";
import { STATE_FEES } from "@/data/stateFees";
import { calculateLLCCost } from "@/lib/calculations";

function parseNonNegative(value: string): number {
  if (value.trim() === "") return 0;
  const n = Number(value);
  return Number.isFinite(n) ? Math.max(0, n) : 0;
}

function money(n: number): string {
  return `$${Math.round(n).toLocaleString()}`;
}

export default function YearOneVsFiveYearCalculator({
  defaultStateSlug = "wyoming",
  compact = false,
}: {
  defaultStateSlug?: string;
  compact?: boolean;
}) {
  const verified = useMemo(
    () => STATE_FEES.filter((s) => s.status === "verified"),
    []
  );

  const [stateSlug, setStateSlug] = useState(
    verified.some((s) => s.slug === defaultStateSlug)
      ? defaultStateSlug
      : (verified[0]?.slug ?? "")
  );
  const [includeAgent, setIncludeAgent] = useState(true);
  const [agentCost, setAgentCost] = useState("125");

  const state = useMemo(
    () => verified.find((s) => s.slug === stateSlug),
    [stateSlug, verified]
  );

  const results = useMemo(() => {
    if (!state) return null;
    const base = {
      state,
      includeRegisteredAgent: includeAgent,
      registeredAgentCost: parseNonNegative(agentCost),
      includeNameReservation: false,
      nameReservationCost: 0,
      expedited: false,
      expeditedCost: 0,
    };
    const year1 = calculateLLCCost({ ...base, years: 1 });
    const year5 = calculateLLCCost({ ...base, years: 5 });
    return { year1, year5 };
  }, [state, includeAgent, agentCost]);

  if (!state || !results) {
    return <p className="text-slate-600">Loading calculator…</p>;
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="text-lg font-semibold text-[#102A43]">
        Year-1 vs. 5-year LLC cost
      </h2>
      <p className="mt-1 text-sm text-slate-600">
        Official state fees from our verified data. Toggle the registered agent
        to compare doing it yourself ($0) with a commercial agent.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="y15-state"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            State
          </label>
          <select
            id="y15-state"
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
        <div>
          <label
            htmlFor="y15-agent-cost"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Registered agent ($/year)
          </label>
          <div className="flex gap-2">
            <input
              id="y15-agent-cost"
              type="number"
              min="0"
              inputMode="decimal"
              value={agentCost}
              disabled={!includeAgent}
              onChange={(e) => setAgentCost(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#1769AA] focus:outline-none focus:ring-1 focus:ring-[#1769AA] disabled:bg-slate-100"
            />
            <button
              type="button"
              onClick={() => setIncludeAgent((v) => !v)}
              aria-pressed={includeAgent}
              className={`shrink-0 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                includeAgent
                  ? "bg-[#102A43] text-white"
                  : "border border-slate-300 text-slate-700"
              }`}
            >
              {includeAgent ? "Agent: on" : "Agent: off"}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Year 1 total
          </p>
          <p className="mt-1 text-3xl font-bold text-[#102A43]">
            {money(results.year1.total)}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Formation {money(results.year1.formationFee)} + recurring{" "}
            {money(results.year1.firstYearRecurring)}
            {includeAgent && ` + agent ${money(results.year1.registeredAgent)}`}
          </p>
        </div>
        <div className="rounded-xl bg-[#102A43] p-4 text-white">
          <p className="text-xs font-medium uppercase tracking-wide text-blue-200">
            5-year total
          </p>
          <p className="mt-1 text-3xl font-bold">{money(results.year5.total)}</p>
          <p className="mt-1 text-xs text-blue-100">
            Formation {money(results.year5.formationFee)} + recurring{" "}
            {money(results.year5.multiYearRecurring)}
            {includeAgent && ` + agent ${money(results.year5.registeredAgent)}`}
          </p>
        </div>
      </div>

      {!compact && (
        <p className="mt-4 text-xs leading-relaxed text-slate-500">
          Estimate only: fixed state fees (formation + annual/biennial reports +
          franchise tax) and the agent cost you entered. Publication, local
          licences, and taxes are not included. Confirm the current fee on the{" "}
          <a
            href={state.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1769AA] underline"
          >
            {state.sourceName}
          </a>{" "}
          site.
        </p>
      )}
    </div>
  );
}
