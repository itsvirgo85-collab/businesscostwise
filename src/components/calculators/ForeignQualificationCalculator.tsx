"use client";

import { useMemo, useState } from "react";
import { STATE_FEES } from "@/data/stateFees";

/** Approximate initial foreign registration / certificate of authority fees (2026 planning estimates).
 *  These are educational starting points only — always confirm on the official state site. */
const FOREIGN_INITIAL_FEES: Record<string, number> = {
  alabama: 150,
  alaska: 350,
  arizona: 150,
  arkansas: 300,
  california: 100,
  colorado: 100,
  connecticut: 120,
  delaware: 200,
  "district-of-columbia": 220,
  florida: 125,
  georgia: 225,
  hawaii: 50,
  idaho: 100,
  illinois: 150,
  indiana: 125,
  iowa: 100,
  kansas: 165,
  kentucky: 90,
  louisiana: 125,
  maine: 175,
  maryland: 100,
  massachusetts: 500,
  michigan: 50,
  minnesota: 155,
  mississippi: 250,
  missouri: 105,
  montana: 70,
  nebraska: 100,
  nevada: 425,
  "new-hampshire": 100,
  "new-jersey": 125,
  "new-mexico": 100,
  "new-york": 250,
  "north-carolina": 250,
  "north-dakota": 135,
  ohio: 99,
  oklahoma: 300,
  oregon: 275,
  pennsylvania: 250,
  "rhode-island": 150,
  "south-carolina": 110,
  "south-dakota": 150,
  tennessee: 300,
  texas: 750,
  utah: 70,
  vermont: 125,
  virginia: 100,
  washington: 180,
  "west-virginia": 150,
  wisconsin: 100,
  wyoming: 100,
};

function parseNonNegative(value: string): number {
  if (value.trim() === "") return 0;
  const n = Number(value);
  return Number.isFinite(n) ? Math.max(0, n) : 0;
}

export default function ForeignQualificationCalculator() {
  const verified = useMemo(
    () => STATE_FEES.filter((s) => s.status === "verified"),
    []
  );

  const [domesticSlug, setDomesticSlug] = useState(
    verified.some((s) => s.slug === "wyoming") ? "wyoming" : verified[0]?.slug || ""
  );
  const [targetSlug, setTargetSlug] = useState(
    verified.some((s) => s.slug === "california") ? "california" : verified[1]?.slug || ""
  );
  const [years, setYears] = useState<1 | 3 | 5>(5);
  const [includeAgents, setIncludeAgents] = useState(true);
  const [domesticAgent, setDomesticAgent] = useState("125");
  const [targetAgent, setTargetAgent] = useState("125");

  const domestic = useMemo(
    () => verified.find((s) => s.slug === domesticSlug),
    [domesticSlug, verified]
  );
  const target = useMemo(
    () => verified.find((s) => s.slug === targetSlug),
    [targetSlug, verified]
  );

  const results = useMemo(() => {
    if (!domestic || !target) return null;

    const foreignInitial = FOREIGN_INITIAL_FEES[target.slug] ?? 150;

    // Simplified annualized recurring from existing fee model
    const domesticYearly =
      (domestic.annualFee ?? 0) +
      (domestic.franchiseTax ?? 0) +
      (domestic.annualFrequency === "biennial" ? (domestic.annualFee ?? 0) / 2 : 0);
    // Avoid double-counting biennial if already using annualFee as the period fee
    const domesticRecurring =
      domestic.franchiseTax != null
        ? (domestic.annualFee ?? 0) + domestic.franchiseTax
        : domestic.annualFrequency === "biennial"
          ? (domestic.annualFee ?? 0) / 2
          : domestic.annualFee ?? 0;

    const targetRecurring =
      target.franchiseTax != null
        ? (target.annualFee ?? 0) + target.franchiseTax
        : target.annualFrequency === "biennial"
          ? (target.annualFee ?? 0) / 2
          : target.annualFee ?? 0;

    const agentYearly = includeAgents
      ? parseNonNegative(domesticAgent) + parseNonNegative(targetAgent)
      : 0;

    const year1 =
      foreignInitial + domesticRecurring + targetRecurring + agentYearly;
    const recurringYearly = domesticRecurring + targetRecurring + agentYearly;
    const total =
      years === 1 ? year1 : foreignInitial + recurringYearly * years;

    return {
      foreignInitial,
      domesticRecurring,
      targetRecurring,
      agentYearly,
      year1,
      recurringYearly,
      total,
    };
  }, [
    domestic,
    target,
    years,
    includeAgents,
    domesticAgent,
    targetAgent,
  ]);

  if (!domestic || !target || !results) {
    return <p className="text-slate-600">Loading calculator…</p>;
  }

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
        <h2 className="text-lg font-semibold text-[#102A43]">
          Foreign qualification estimate
        </h2>

        <div>
          <label
            htmlFor="fq-domestic"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Domestic state (where LLC is formed)
          </label>
          <select
            id="fq-domestic"
            value={domesticSlug}
            onChange={(e) => setDomesticSlug(e.target.value)}
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
            htmlFor="fq-target"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Target state (foreign qualification)
          </label>
          <select
            id="fq-target"
            value={targetSlug}
            onChange={(e) => setTargetSlug(e.target.value)}
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
            id="fq-period-label"
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
                aria-describedby="fq-period-label"
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
              checked={includeAgents}
              onChange={(e) => setIncludeAgents(e.target.checked)}
              className="mt-1"
            />
            <span className="text-sm text-slate-700">
              Include commercial registered agent in both states
            </span>
          </label>
          {includeAgents && (
            <div className="ml-7 grid gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs text-slate-500">
                  Domestic agent ($/yr)
                </label>
                <input
                  type="number"
                  min={0}
                  value={domesticAgent}
                  onChange={(e) => setDomesticAgent(e.target.value)}
                  onBlur={() =>
                    setDomesticAgent(String(parseNonNegative(domesticAgent)))
                  }
                  step="0.01"
                  className="w-full rounded border border-slate-300 px-2 py-1 text-sm"
                  aria-label="Domestic state registered agent annual cost"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs text-slate-500">
                  Target agent ($/yr)
                </label>
                <input
                  type="number"
                  min={0}
                  value={targetAgent}
                  onChange={(e) => setTargetAgent(e.target.value)}
                  onBlur={() =>
                    setTargetAgent(String(parseNonNegative(targetAgent)))
                  }
                  step="0.01"
                  className="w-full rounded border border-slate-300 px-2 py-1 text-sm"
                  aria-label="Target state registered agent annual cost"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4 lg:col-span-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-baseline justify-between gap-2">
            <h2 className="text-lg font-semibold text-[#102A43]">
              Estimated {years}-year cost — {domestic.state} → {target.state}
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
            Foreign registration + dual-state recurring fees
            {includeAgents ? " + agents" : ""} (excludes Good Standing certificates,
            publication, local licenses)
          </p>

          <dl className="mt-6 space-y-2 border-t border-slate-100 pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-600">
                Foreign registration (one-time, {target.state})
              </dt>
              <dd className="font-medium">
                ${results.foreignInitial.toFixed(2)}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">
                Domestic recurring (avg / yr)
              </dt>
              <dd className="font-medium">
                ${results.domesticRecurring.toFixed(2)}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">
                Target state recurring (avg / yr)
              </dt>
              <dd className="font-medium">
                ${results.targetRecurring.toFixed(2)}
              </dd>
            </div>
            {includeAgents && (
              <div className="flex justify-between">
                <dt className="text-slate-600">Registered agents (both / yr)</dt>
                <dd className="font-medium">
                  ${results.agentYearly.toFixed(2)}
                </dd>
              </div>
            )}
          </dl>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-medium">Important</p>
          <p className="mt-1">
            Foreign registration initial fees are planning estimates and can differ by
            filing method and state. You will usually also need a Certificate of Good
            Standing from the domestic state. Always confirm current foreign LLC fees
            and "doing business" rules on the target state's official website before
            filing.
          </p>
        </div>

        <p className="text-xs text-slate-500">
          Educational estimate only. Not legal, tax, or financial advice. Does not
          include publication costs, local licenses, professional fees, or
          income-based taxes.
        </p>
      </div>
    </div>
  );
}
