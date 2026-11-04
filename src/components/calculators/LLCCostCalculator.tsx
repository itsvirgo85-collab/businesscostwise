"use client";

import { useMemo, useState } from "react";
import { STATE_FEES, StateFee } from "@/data/stateFees";
import { calculateLLCCost } from "@/lib/calculations";

export default function LLCCostCalculator() {
  const verified = STATE_FEES.filter((s) => s.status === "verified");
  const [selectedSlug, setSelectedSlug] = useState(verified[0]?.slug || "florida");
  const [years, setYears] = useState<1 | 3 | 5>(1);
  const [includeRA, setIncludeRA] = useState(false);
  const [raCost, setRaCost] = useState(125);
  const [includeNameRes, setIncludeNameRes] = useState(false);
  const [nameResCost, setNameResCost] = useState(25);
  const [expedited, setExpedited] = useState(false);
  const [expeditedCost, setExpeditedCost] = useState(50);

  const state = useMemo(
    () => verified.find((s) => s.slug === selectedSlug) as StateFee,
    [selectedSlug, verified]
  );

  const result = useMemo(() => {
    if (!state) return null;
    return calculateLLCCost({
      state,
      years,
      includeRegisteredAgent: includeRA,
      registeredAgentCost: raCost,
      includeNameReservation: includeNameRes,
      nameReservationCost: nameResCost,
      expedited,
      expeditedCost,
    });
  }, [state, years, includeRA, raCost, includeNameRes, nameResCost, expedited, expeditedCost]);

  if (!state || !result) {
    return <p className="text-slate-600">Loading calculator…</p>;
  }

  const recurring = years === 1 ? result.firstYearRecurring : result.multiYearRecurring;

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="lg:col-span-2 space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#102A43]">Estimate your costs</h2>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">State</label>
          <select
            value={selectedSlug}
            onChange={(e) => setSelectedSlug(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#1769AA] focus:outline-none focus:ring-1 focus:ring-[#1769AA]"
          >
            {verified.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.state} ({s.abbreviation})
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-slate-500">
            Only states with verified official source data are shown.
          </p>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Time period</label>
          <div className="flex gap-2">
            {([1, 3, 5] as const).map((y) => (
              <button
                key={y}
                type="button"
                onClick={() => setYears(y)}
                className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition ${
                  years === y
                    ? "border-[#1769AA] bg-[#1769AA] text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                }`}
              >
                {y} year{y > 1 ? "s" : ""}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3 border-t border-slate-100 pt-4">
          <label className="flex items-start gap-3">
            <input type="checkbox" checked={includeRA} onChange={(e) => setIncludeRA(e.target.checked)} className="mt-1" />
            <span className="text-sm text-slate-700">
              Add commercial registered agent
              {state.formationIncludesRA && (
                <span className="block text-xs text-slate-500">(Formation fee already includes state RA designation)</span>
              )}
            </span>
          </label>
          {includeRA && (
            <div className="ml-7">
              <label className="mb-1 block text-xs text-slate-500">Annual agent cost ($)</label>
              <input type="number" min={0} value={raCost} onChange={(e) => setRaCost(Number(e.target.value) || 0)} className="w-28 rounded border border-slate-300 px-2 py-1 text-sm" />
            </div>
          )}

          <label className="flex items-start gap-3">
            <input type="checkbox" checked={includeNameRes} onChange={(e) => setIncludeNameRes(e.target.checked)} className="mt-1" />
            <span className="text-sm text-slate-700">Name reservation (optional)</span>
          </label>
          {includeNameRes && (
            <div className="ml-7">
              <label className="mb-1 block text-xs text-slate-500">Reservation fee ($)</label>
              <input type="number" min={0} value={nameResCost} onChange={(e) => setNameResCost(Number(e.target.value) || 0)} className="w-28 rounded border border-slate-300 px-2 py-1 text-sm" />
            </div>
          )}

          <label className="flex items-start gap-3">
            <input type="checkbox" checked={expedited} onChange={(e) => setExpedited(e.target.checked)} className="mt-1" />
            <span className="text-sm text-slate-700">Expedited processing (if available)</span>
          </label>
          {expedited && (
            <div className="ml-7">
              <label className="mb-1 block text-xs text-slate-500">Expedite fee ($)</label>
              <input type="number" min={0} value={expeditedCost} onChange={(e) => setExpeditedCost(Number(e.target.value) || 0)} className="w-28 rounded border border-slate-300 px-2 py-1 text-sm" />
            </div>
          )}
        </div>
      </div>

      <div className="lg:col-span-3 space-y-4">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-baseline justify-between gap-2">
            <h2 className="text-lg font-semibold text-[#102A43]">
              Estimated {years}-year cost — {state.state}
            </h2>
            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
              Source verified
            </span>
          </div>

          <p className="mt-4 text-4xl font-bold tracking-tight text-[#102A43]">
            ${result.total.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
          </p>
          <p className="text-sm text-slate-500">
            State filing fees + selected options (excludes legal, accounting, and local licenses)
          </p>

          <dl className="mt-6 space-y-2 border-t border-slate-100 pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-600">Formation / filing fee</dt>
              <dd className="font-medium">${result.formationFee.toFixed(2)}</dd>
            </div>
            {result.registeredAgent > 0 && (
              <div className="flex justify-between">
                <dt className="text-slate-600">Registered agent ({years} yr)</dt>
                <dd className="font-medium">${result.registeredAgent.toFixed(2)}</dd>
              </div>
            )}
            {result.nameReservation > 0 && (
              <div className="flex justify-between">
                <dt className="text-slate-600">Name reservation</dt>
                <dd className="font-medium">${result.nameReservation.toFixed(2)}</dd>
              </div>
            )}
            {result.expedited > 0 && (
              <div className="flex justify-between">
                <dt className="text-slate-600">Expedited processing</dt>
                <dd className="font-medium">${result.expedited.toFixed(2)}</dd>
              </div>
            )}
            <div className="flex justify-between">
              <dt className="text-slate-600">Recurring / franchise fees ({years} yr)</dt>
              <dd className="font-medium">${recurring.toFixed(2)}</dd>
            </div>
          </dl>

          {recurring === 0 && (
            <p className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600">
              This state has no annual report fee or franchise tax in our dataset for the selected period.
              That is why 1-, 3-, and 5-year totals can match when optional extras are off (formation fee only).
              Always confirm on the official state site before filing.
            </p>
          )}

          {result.notes.length > 0 && (
            <ul className="mt-4 space-y-1 border-t border-slate-100 pt-4 text-xs text-slate-600">
              {result.notes.map((n, i) => (
                <li key={i}>• {n}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-medium">Official source</p>
          <p className="mt-1">
            Fees for {state.state} are linked to:{" "}
            <a href={state.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-700">
              {state.sourceName}
            </a>
            . Last verified: {state.verifiedAt}. Always confirm current amounts on the state website before filing.
          </p>
        </div>

        <p className="text-xs text-slate-500">
          This calculator is for educational estimation only. It does not include federal taxes, income taxes, local business licenses, publication costs (where required), attorney or accountant fees, or optional services. Not legal or tax advice.
        </p>
      </div>
    </div>
  );
}
