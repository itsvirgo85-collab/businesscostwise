"use client";

import { useMemo, useState } from "react";
import { STATE_FEES } from "@/data/stateFees";
import { calculateRecurringStateFees } from "@/lib/stateCost";
import { TAX_CLEARANCE_STATES, getDissolutionFee } from "@/data/dissolutionFees";

function parseNonNegative(value: string): number {
  if (value.trim() === "") return 0;
  const n = Number(value);
  return Number.isFinite(n) ? Math.max(0, n) : 0;
}

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default function DissolutionCalculator() {
  const verified = useMemo(
    () => STATE_FEES.filter((s) => s.status === "verified"),
    []
  );
  const [stateSlug, setStateSlug] = useState(
    verified.some((s) => s.slug === "texas") ? "texas" : verified[0]?.slug || ""
  );
  const [unpaidYears, setUnpaidYears] = useState(1);
  const [taxPrepCost, setTaxPrepCost] = useState("0");

  const state = useMemo(
    () => verified.find((s) => s.slug === stateSlug),
    [stateSlug, verified]
  );
  const dissolution = getDissolutionFee(stateSlug);
  const yearlyRecurring = state ? calculateRecurringStateFees(state, 1) : 0;

  const result = useMemo(() => {
    const fee = dissolution?.fee ?? 0;
    const unpaid = yearlyRecurring * unpaidYears;
    const prep = parseNonNegative(taxPrepCost);
    return { fee, unpaid, prep, total: fee + unpaid + prep };
  }, [dissolution, yearlyRecurring, unpaidYears, taxPrepCost]);

  if (!state || !dissolution) return <p className="text-slate-600">Loading calculator…</p>;

  const needsClearance = TAX_CLEARANCE_STATES.has(stateSlug);

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
        <h2 className="text-lg font-semibold text-[#102A43]">Your situation</h2>

        <div>
          <label htmlFor="dc-state" className="mb-1 block text-sm font-medium text-slate-700">
            State where the LLC is formed
          </label>
          <select
            id="dc-state"
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
          <p className="mt-1 text-xs text-slate-500">
            Filing: {dissolution.label}
            {dissolution.confidence === "verified"
              ? " — fee confirmed against the official state schedule."
              : dissolution.confidence === "conflicting"
                ? " — this fee is disputed in sources; confirm it with the Secretary of State."
                : " — fee from 2026 secondary sources; confirm it with the Secretary of State."}
          </p>
        </div>

        <div>
          <span className="mb-1 block text-sm font-medium text-slate-700" id="dc-years-label">
            Unpaid annual fees / franchise tax still owed
          </span>
          <div className="flex gap-2" role="group" aria-labelledby="dc-years-label">
            {[0, 1, 2].map((y) => (
              <button
                key={y}
                type="button"
                onClick={() => setUnpaidYears(y)}
                aria-pressed={unpaidYears === y}
                className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition ${
                  unpaidYears === y
                    ? "border-[#1769AA] bg-[#1769AA] text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                }`}
              >
                {y === 0 ? "None — all paid" : `${y} year${y > 1 ? "s" : ""}`}
              </button>
            ))}
          </div>
          <p className="mt-1 text-xs text-slate-500">
            {state.state} recurring cost is {money(yearlyRecurring)}/year
            {yearlyRecurring === 0 ? " in our data — check whether anything is still owed before filing." : "."}
          </p>
        </div>

        <div>
          <label htmlFor="dc-prep" className="mb-1 block text-sm font-medium text-slate-700">
            Final tax return preparation cost ($, optional)
          </label>
          <input
            id="dc-prep"
            type="number"
            min={0}
            value={taxPrepCost}
            onChange={(e) => setTaxPrepCost(e.target.value)}
            onBlur={() => setTaxPrepCost(String(parseNonNegative(taxPrepCost)))}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#1769AA] focus:outline-none focus:ring-1 focus:ring-[#1769AA]"
          />
          <p className="mt-1 text-xs text-slate-500">CPA or software cost for the final return, if any.</p>
        </div>
      </div>

      <div className="space-y-4 lg:col-span-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-baseline justify-between gap-2">
            <h2 className="text-lg font-semibold text-[#102A43]">
              Estimated cost to dissolve — {state.state}
            </h2>
            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
              Planning estimate
            </span>
          </div>

          <p className="mt-4 text-4xl font-bold tracking-tight text-[#102A43]">
            {money(result.total)}
          </p>
          <p className="text-sm text-slate-500">
            Filing fee plus unpaid state fees and tax preparation, if any.
          </p>

          <dl className="mt-6 space-y-2 border-t border-slate-100 pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-600">State dissolution filing fee</dt>
              <dd className="font-medium">{money(result.fee)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">
                Unpaid annual fees / franchise tax ({unpaidYears} year{unpaidYears === 1 ? "" : "s"})
              </dt>
              <dd className="font-medium">{money(result.unpaid)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">Final tax return preparation</dt>
              <dd className="font-medium">{money(result.prep)}</dd>
            </div>
            <div className="flex justify-between border-t border-slate-100 pt-2">
              <dt className="text-slate-600">Estimated total</dt>
              <dd className="font-medium">{money(result.total)}</dd>
            </div>
          </dl>

          {dissolution.note && (
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">{dissolution.note}</p>
          )}
        </div>

        {needsClearance && (
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <p className="font-medium">Tax clearance required in {state.state}</p>
            <p className="mt-1">
              {state.state} commonly requires a tax clearance certificate before the dissolution filing is accepted. Get the clearance first — the filing will be rejected without it — and budget extra time for it.
            </p>
          </div>
        )}

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-[#102A43]">Closing checklist</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
            <li>Vote to dissolve under the operating agreement, in writing</li>
            <li>Settle debts and notify creditors; cancel licences and permits</li>
            <li>File the dissolution form and pay the fee above</li>
            <li>File a final federal tax return (marked final) and final state returns</li>
            <li>Close the business bank account and keep records for 3–7 years</li>
          </ul>
        </div>

        <p className="text-xs text-slate-500">
          Educational estimate only. Not legal or tax advice. Dissolution fees are from 2026 secondary sources except Delaware, Louisiana and DC (official schedules); confirm the fee and any tax-clearance requirement with the Secretary of State before filing.
        </p>
      </div>
    </div>
  );
}
