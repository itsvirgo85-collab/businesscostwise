"use client";

import { useMemo, useState } from "react";
import { STATE_FEES } from "@/data/stateFees";
import { calculateRecurringStateFees } from "@/lib/stateCost";
import { scorpBreakEvenProfit, scorpSavings } from "@/lib/taxCalc";

function parseNonNegative(value: string): number {
  if (value.trim() === "") return 0;
  const n = Number(value);
  return Number.isFinite(n) ? Math.max(0, n) : 0;
}

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default function ScorpSavingsCalculator() {
  const verified = useMemo(
    () => STATE_FEES.filter((s) => s.status === "verified"),
    []
  );
  const [stateSlug, setStateSlug] = useState(
    verified.some((s) => s.slug === "wyoming") ? "wyoming" : verified[0]?.slug || ""
  );
  const [profit, setProfit] = useState("100000");
  const [salary, setSalary] = useState("40000");
  const [payrollCost, setPayrollCost] = useState("1200");

  const state = useMemo(
    () => verified.find((s) => s.slug === stateSlug),
    [stateSlug, verified]
  );

  const result = useMemo(() => {
    const p = parseNonNegative(profit);
    const s = Math.min(parseNonNegative(salary), p);
    const c = parseNonNegative(payrollCost);
    const r = scorpSavings({ netProfit: p, reasonableSalary: s, payrollCostPerYear: c });
    const salaryShare = p > 0 ? s / p : 0;
    const breakEven =
      salaryShare > 0 ? scorpBreakEvenProfit(salaryShare, c) : null;
    return { ...r, profit: p, salary: s, payrollCost: c, breakEven };
  }, [profit, salary, payrollCost]);

  if (!state) return <p className="text-slate-600">Loading calculator…</p>;

  const stateYearlyCost = calculateRecurringStateFees(state, 1);
  const saving = result.netSavingPerYear;

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
        <h2 className="text-lg font-semibold text-[#102A43]">Your numbers</h2>

        <div>
          <label htmlFor="sc-profit" className="mb-1 block text-sm font-medium text-slate-700">
            Annual LLC net profit ($)
          </label>
          <input
            id="sc-profit"
            type="number"
            min={0}
            value={profit}
            onChange={(e) => setProfit(e.target.value)}
            onBlur={() => setProfit(String(parseNonNegative(profit)))}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#1769AA] focus:outline-none focus:ring-1 focus:ring-[#1769AA]"
          />
          <p className="mt-1 text-xs text-slate-500">Profit after business expenses, before owner pay and taxes.</p>
        </div>

        <div>
          <label htmlFor="sc-salary" className="mb-1 block text-sm font-medium text-slate-700">
            Reasonable salary as an S-corp ($)
          </label>
          <input
            id="sc-salary"
            type="number"
            min={0}
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            onBlur={() => setSalary(String(Math.min(parseNonNegative(salary), result.profit)))}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#1769AA] focus:outline-none focus:ring-1 focus:ring-[#1769AA]"
          />
          <p className="mt-1 text-xs text-slate-500">
            The IRS requires a “reasonable” salary for the work you do. Many owners use 40–60% of profit as a starting point — confirm with a CPA.
          </p>
        </div>

        <div>
          <label htmlFor="sc-payroll" className="mb-1 block text-sm font-medium text-slate-700">
            Yearly payroll + admin cost ($)
          </label>
          <input
            id="sc-payroll"
            type="number"
            min={0}
            value={payrollCost}
            onChange={(e) => setPayrollCost(e.target.value)}
            onBlur={() => setPayrollCost(String(parseNonNegative(payrollCost)))}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#1769AA] focus:outline-none focus:ring-1 focus:ring-[#1769AA]"
          />
          <p className="mt-1 text-xs text-slate-500">Payroll service, bookkeeping and extra tax filings. Typical: $600–$2,400/year.</p>
        </div>

        <div>
          <label htmlFor="sc-state" className="mb-1 block text-sm font-medium text-slate-700">
            State (for context)
          </label>
          <select
            id="sc-state"
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
            {state.state} recurring state cost: {money(stateYearlyCost)}/year — the same under either tax treatment, so it does not change the saving.
          </p>
        </div>
      </div>

      <div className="space-y-4 lg:col-span-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-baseline justify-between gap-2">
            <h2 className="text-lg font-semibold text-[#102A43]">Estimated yearly saving</h2>
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                saving >= 0 ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
              }`}
            >
              {saving >= 0 ? "Election likely helps" : "Election likely costs you"}
            </span>
          </div>

          <p className={`mt-4 text-4xl font-bold tracking-tight ${saving >= 0 ? "text-emerald-700" : "text-[#102A43]"}`}>
            {saving >= 0 ? "+" : "−"}
            {money(Math.abs(saving)).replace("$", "$")}
            <span className="text-lg font-medium text-slate-500"> / year</span>
          </p>
          <p className="text-sm text-slate-500">
            {saving >= 0
              ? "Estimated payroll-tax saving after payroll costs, before income-tax effects."
              : "At these numbers the payroll and admin costs outweigh the payroll-tax saving."}
          </p>

          <dl className="mt-6 space-y-2 border-t border-slate-100 pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-600">Self-employment tax as an LLC</dt>
              <dd className="font-medium">{money(result.llcSelfEmploymentTax)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">Payroll tax on the {money(result.salary)} salary</dt>
              <dd className="font-medium">{money(result.scorpPayrollTax)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">Payroll + admin cost</dt>
              <dd className="font-medium">−{money(result.payrollCostPerYear)}</dd>
            </div>
            <div className="flex justify-between border-t border-slate-100 pt-2">
              <dt className="text-slate-600">Profit left as distributions</dt>
              <dd className="font-medium">{money(result.distributions)}</dd>
            </div>
            {result.breakEven !== null && (
              <div className="flex justify-between">
                <dt className="text-slate-600">Break-even profit (same salary share)</dt>
                <dd className="font-medium">about {money(result.breakEven)}</dd>
              </div>
            )}
          </dl>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-medium">Before you elect</p>
          <p className="mt-1">
            The IRS requires a reasonable salary — paying yourself too little is the most common audit risk. The election can also reduce your QBI deduction and your Social Security credits, and some states charge S-corps extra (for example California’s 1.5% S-corp tax, minimum $800). This calculator uses 2026 federal figures only: 15.3% self-employment tax on 92.35% of profit, Social Security wage base $184,500.
          </p>
        </div>

        <p className="text-xs text-slate-500">
          Educational estimate only. Not tax advice. Confirm the election, the salary, and the deadline (Form 2553 is generally due 2 months and 15 days into the tax year) with a CPA.
        </p>
      </div>
    </div>
  );
}
