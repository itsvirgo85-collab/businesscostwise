"use client";

import { useMemo, useState } from "react";
import {
  QUARTERLY_DUE_DATES_2026,
  llcTaxEstimate,
  type FilingStatus,
} from "@/lib/taxCalc";

function parseNonNegative(value: string): number {
  if (value.trim() === "") return 0;
  const n = Number(value);
  return Number.isFinite(n) ? Math.max(0, n) : 0;
}

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default function LlcTaxEstimator() {
  const [profit, setProfit] = useState("100000");
  const [status, setStatus] = useState<FilingStatus>("single");
  const [includeQbi, setIncludeQbi] = useState(false);

  const result = useMemo(() => {
    const p = parseNonNegative(profit);
    return { ...llcTaxEstimate({ netProfit: p, status, includeQbi }), profit: p };
  }, [profit, status, includeQbi]);

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
        <h2 className="text-lg font-semibold text-[#102A43]">Your numbers</h2>

        <div>
          <label htmlFor="te-profit" className="mb-1 block text-sm font-medium text-slate-700">
            Annual LLC net profit ($)
          </label>
          <input
            id="te-profit"
            type="number"
            min={0}
            value={profit}
            onChange={(e) => setProfit(e.target.value)}
            onBlur={() => setProfit(String(parseNonNegative(profit)))}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#1769AA] focus:outline-none focus:ring-1 focus:ring-[#1769AA]"
          />
          <p className="mt-1 text-xs text-slate-500">Profit after business expenses, before taxes.</p>
        </div>

        <div>
          <label htmlFor="te-status" className="mb-1 block text-sm font-medium text-slate-700">
            Filing status
          </label>
          <select
            id="te-status"
            value={status}
            onChange={(e) => setStatus(e.target.value as FilingStatus)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#1769AA] focus:outline-none focus:ring-1 focus:ring-[#1769AA]"
          >
            <option value="single">Single</option>
            <option value="married">Married filing jointly</option>
          </select>
        </div>

        <div className="space-y-3 border-t border-slate-100 pt-4">
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={includeQbi}
              onChange={(e) => setIncludeQbi(e.target.checked)}
              className="mt-1"
            />
            <span className="text-sm text-slate-700">
              Include the 20% qualified business income (QBI) deduction
            </span>
          </label>
          <p className="ml-7 text-xs text-slate-500">
            Simplified: 20% of profit after the half-SE-tax deduction. QBI has income limits and other rules — this is an estimate, not a determination that you qualify.
          </p>
        </div>
      </div>

      <div className="space-y-4 lg:col-span-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-baseline justify-between gap-2">
            <h2 className="text-lg font-semibold text-[#102A43]">Estimated total federal tax</h2>
            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
              Planning estimate
            </span>
          </div>

          <p className="mt-4 text-4xl font-bold tracking-tight text-[#102A43]">
            {money(result.totalFederalTax)}
            <span className="text-lg font-medium text-slate-500"> / year</span>
          </p>
          <p className="text-sm text-slate-500">
            About {(result.effectiveRate * 100).toFixed(1)}% of your {money(result.profit)} profit, federal only.
          </p>

          <dl className="mt-6 space-y-2 border-t border-slate-100 pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-600">Self-employment tax (15.3%)</dt>
              <dd className="font-medium">{money(result.selfEmploymentTax)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">Less: half of SE tax (above-the-line)</dt>
              <dd className="font-medium">−{money(result.halfSelfEmploymentTax)}</dd>
            </div>
            {includeQbi && (
              <div className="flex justify-between">
                <dt className="text-slate-600">Less: QBI deduction (simplified 20%)</dt>
                <dd className="font-medium">−{money(result.qbiDeduction)}</dd>
              </div>
            )}
            <div className="flex justify-between">
              <dt className="text-slate-600">Taxable income</dt>
              <dd className="font-medium">{money(result.taxableIncome)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">Federal income tax</dt>
              <dd className="font-medium">{money(result.federalIncomeTax)}</dd>
            </div>
            <div className="flex justify-between border-t border-slate-100 pt-2">
              <dt className="text-slate-600">Set aside per quarter</dt>
              <dd className="font-medium">{money(result.quarterlyPayment)}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-[#102A43]">2026 quarterly estimated payments</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {QUARTERLY_DUE_DATES_2026.map((d, i) => (
              <li key={d} className="flex justify-between gap-4">
                <span>
                  Quarter {i + 1} — due {d}
                </span>
                <span className="font-medium">{money(result.quarterlyPayment)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-slate-500">
            Paying quarterly avoids underpayment penalties. These dates are for tax year 2026; the fourth payment falls in January 2027.
          </p>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-medium">What this estimate leaves out</p>
          <p className="mt-1">
            State income tax, local tax, credits, the Additional Medicare Tax threshold for married filers, and any S-corp election. Figures use 2026 federal brackets (IRS Rev. Proc. 2025-32) and the $184,500 Social Security wage base.
          </p>
        </div>

        <p className="text-xs text-slate-500">
          Educational estimate only. Not tax advice. Confirm your estimated payments with a CPA, especially in your first year.
        </p>
      </div>
    </div>
  );
}
