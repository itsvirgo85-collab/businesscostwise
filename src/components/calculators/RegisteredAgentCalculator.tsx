"use client";

import { useMemo, useState } from "react";
import { STATE_FEES } from "@/data/stateFees";

function parseNonNegative(value: string): number {
  if (value.trim() === "") return 0;
  const n = Number(value);
  return Number.isFinite(n) ? Math.max(0, n) : 0;
}

export default function RegisteredAgentCalculator() {
  const verified = useMemo(
    () => STATE_FEES.filter((s) => s.status === "verified"),
    []
  );

  const [stateSlug, setStateSlug] = useState(
    verified.some((s) => s.slug === "california") ? "california" : verified[0]?.slug || ""
  );
  const [years, setYears] = useState<1 | 3 | 5>(5);
  const [commercialCost, setCommercialCost] = useState("125");
  const [useCommercial, setUseCommercial] = useState(true);

  const state = useMemo(
    () => verified.find((s) => s.slug === stateSlug),
    [stateSlug, verified]
  );

  const results = useMemo(() => {
    if (!state) return null;
    const yearly = useCommercial ? parseNonNegative(commercialCost) : 0;
    const total = yearly * years;
    return { yearly, total };
  }, [state, years, useCommercial, commercialCost]);

  if (!state || !results) {
    return <p className="text-slate-600">Loading calculator…</p>;
  }

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
        <h2 className="text-lg font-semibold text-[#102A43]">
          Registered agent cost estimate
        </h2>

        <div>
          <label
            htmlFor="ra-state"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            State
          </label>
          <select
            id="ra-state"
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
          <span
            className="mb-1 block text-sm font-medium text-slate-700"
            id="ra-period-label"
          >
            Projection period
          </span>
          <div className="flex gap-2">
            {([1, 3, 5] as const).map((y) => (
              <button
                key={y}
                type="button"
                onClick={() => setYears(y)}
                aria-pressed={years === y}
                aria-describedby="ra-period-label"
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
            <input
              type="checkbox"
              checked={useCommercial}
              onChange={(e) => setUseCommercial(e.target.checked)}
              className="mt-1"
            />
            <span className="text-sm text-slate-700">
              Use a commercial registered agent service
            </span>
          </label>

          {useCommercial && (
            <div className="ml-7">
              <label className="mb-1 block text-xs text-slate-500">
                Annual commercial agent cost ($)
              </label>
              <input
                type="number"
                min={0}
                value={commercialCost}
                onChange={(e) => setCommercialCost(e.target.value)}
                onBlur={() =>
                  setCommercialCost(String(parseNonNegative(commercialCost)))
                }
                step="0.01"
                className="w-28 rounded border border-slate-300 px-2 py-1 text-sm"
                aria-label="Annual commercial registered agent cost"
              />
              <p className="mt-1 text-xs text-slate-500">
                Typical range: $50–$300 per year
              </p>
            </div>
          )}

          {!useCommercial && (
            <p className="ml-7 text-sm text-slate-600">
              Serving as your own agent: $0 agent fee (you must have a qualifying
              physical address in {state.state} and be available during business hours).
            </p>
          )}
        </div>
      </div>

      <div className="space-y-4 lg:col-span-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-baseline justify-between gap-2">
            <h2 className="text-lg font-semibold text-[#102A43]">
              Estimated {years}-year agent cost — {state.state}
            </h2>
            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
              Planning estimate
            </span>
          </div>

          <p className="mt-4 text-4xl font-bold tracking-tight text-[#102A43]">
            $
            {results.total.toLocaleString("en-US", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </p>
          <p className="text-sm text-slate-500">
            {useCommercial
              ? `Commercial registered agent at $${results.yearly}/year`
              : "Self-agent (no commercial fee)"}
          </p>

          <dl className="mt-6 space-y-2 border-t border-slate-100 pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-600">Annual agent cost</dt>
              <dd className="font-medium">${results.yearly.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">{years}-year total</dt>
              <dd className="font-medium">${results.total.toFixed(2)}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-medium">Important</p>
          <p className="mt-1">
            Every LLC must maintain a registered agent with a physical street address
            in the state of registration. You can usually serve as your own agent if
            you meet the requirements, or hire a commercial service. Rules and
            availability of self-agent options vary slightly by state.
          </p>
        </div>

        <p className="text-xs text-slate-500">
          Educational estimate only. Not legal advice. Commercial prices vary by
          provider. Always confirm registered agent requirements on the official
          state website.
        </p>
      </div>
    </div>
  );
}
