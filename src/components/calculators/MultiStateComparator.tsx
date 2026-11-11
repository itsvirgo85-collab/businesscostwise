"use client";

import { useMemo, useState } from "react";
import { STATE_FEES, type StateFee } from "@/data/stateFees";
import { calculateLLCCost } from "@/lib/calculations";

function parseNonNegative(value: string): number {
  if (value.trim() === "") return 0;
  const n = Number(value);
  return Number.isFinite(n) ? Math.max(0, n) : 0;
}

export default function MultiStateComparator() {
  const verified = useMemo(
    () => STATE_FEES.filter((s) => s.status === "verified"),
    []
  );

  const defaultSlugs = useMemo(() => {
    const preferred = ["wyoming", "delaware", "california", "texas", "florida"];
    const available = preferred.filter((s) => verified.some((v) => v.slug === s));
    return available.length >= 2 ? available.slice(0, 3) : verified.slice(0, 3).map((s) => s.slug);
  }, [verified]);

  const [selectedSlugs, setSelectedSlugs] = useState<string[]>(defaultSlugs);
  const [years, setYears] = useState<1 | 3 | 5>(5);
  const [includeRA, setIncludeRA] = useState(true);
  const [raCost, setRaCost] = useState("125");

  const toggleState = (slug: string) => {
    setSelectedSlugs((prev) => {
      if (prev.includes(slug)) {
        if (prev.length <= 2) return prev; // keep at least 2
        return prev.filter((s) => s !== slug);
      }
      if (prev.length >= 5) return prev; // max 5
      return [...prev, slug];
    });
  };

  const results = useMemo(() => {
    return selectedSlugs
      .map((slug) => {
        const state = verified.find((s) => s.slug === slug) as StateFee | undefined;
        if (!state) return null;
        const calc = calculateLLCCost({
          state,
          years,
          includeRegisteredAgent: includeRA,
          registeredAgentCost: parseNonNegative(raCost),
          includeNameReservation: false,
          nameReservationCost: 0,
          expedited: false,
          includeDeferredInitialReport: false,
          expeditedCost: 0,
        });
        return { state, calc };
      })
      .filter(Boolean) as { state: StateFee; calc: ReturnType<typeof calculateLLCCost> }[];
  }, [selectedSlugs, years, includeRA, raCost, verified]);

  const sorted = useMemo(
    () => [...results].sort((a, b) => a.calc.total - b.calc.total),
    [results]
  );

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#102A43]">Compare states side-by-side</h2>
        <p className="mt-1 text-sm text-slate-600">
          Select 2–5 states. Results use verified formation and recurring fees.
        </p>

        <div className="mt-5">
          <span className="mb-2 block text-sm font-medium text-slate-700">States</span>
          <div className="flex flex-wrap gap-2">
            {verified.map((s) => {
              const active = selectedSlugs.includes(s.slug);
              return (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => toggleState(s.slug)}
                  className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                    active
                      ? "border-[#1769AA] bg-[#1769AA] text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                  }`}
                >
                  {s.abbreviation}
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-slate-500">
            {selectedSlugs.length} selected (min 2, max 5)
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-end gap-6">
          <div>
            <span className="mb-1 block text-sm font-medium text-slate-700">Period</span>
            <div className="flex gap-2">
              {([1, 3, 5] as const).map((y) => (
                <button
                  key={y}
                  type="button"
                  onClick={() => setYears(y)}
                  className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
                    years === y
                      ? "border-[#1769AA] bg-[#1769AA] text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                  }`}
                >
                  {y} yr
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={includeRA}
                onChange={(e) => setIncludeRA(e.target.checked)}
              />
              <span className="text-sm text-slate-700">Include commercial RA</span>
            </label>
            {includeRA && (
              <div className="mt-2">
                <input
                  type="number"
                  min={0}
                  value={raCost}
                  onChange={(e) => setRaCost(e.target.value)}
                  onBlur={() => setRaCost(String(parseNonNegative(raCost)))}
                  step="0.01"
                  className="w-24 rounded border border-slate-300 px-2 py-1 text-sm"
                  aria-label="Annual registered agent cost"
                />
                <span className="ml-1 text-xs text-slate-500">$/yr</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50">
            <tr>
              <th className="px-4 py-3 font-semibold text-[#102A43]">State</th>
              <th className="px-4 py-3 font-semibold text-[#102A43]">Formation</th>
              <th className="px-4 py-3 font-semibold text-[#102A43]">Recurring ({years} yr)</th>
              {includeRA && (
                <th className="px-4 py-3 font-semibold text-[#102A43]">Agent ({years} yr)</th>
              )}
              <th className="px-4 py-3 font-semibold text-[#102A43]">Total</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(({ state, calc }) => {
              const recurring =
                years === 1 ? calc.firstYearRecurring : calc.multiYearRecurring;
              return (
                <tr key={state.slug} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-[#102A43]">
                    {state.state}
                    <span className="ml-1 text-xs text-slate-500">({state.abbreviation})</span>
                  </td>
                  <td className="px-4 py-3">${calc.formationFee.toFixed(0)}</td>
                  <td className="px-4 py-3">${recurring.toFixed(0)}</td>
                  {includeRA && (
                    <td className="px-4 py-3">${calc.registeredAgent.toFixed(0)}</td>
                  )}
                  <td className="px-4 py-3 font-semibold text-[#102A43]">
                    ${calc.total.toFixed(0)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-slate-500">
        Sorted by lowest total. Educational estimates only. Does not include publication costs,
        local licenses, professional fees, or income-based taxes. Always verify current fees on
        official state websites.
      </p>
    </div>
  );
}
