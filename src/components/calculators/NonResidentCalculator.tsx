"use client";

import { useMemo, useState } from "react";
import { STATE_FEES } from "@/data/stateFees";
import {
  DEFAULT_AGENT_COST_PER_YEAR,
  DEFAULT_EIN_SERVICE_COST,
  DEFAULT_MAIL_FORWARDING_COST_PER_MONTH,
  FX_RATE_DATE,
  FX_RATE_SOURCE,
  NON_RESIDENT_CURRENCIES,
  calculateNonResidentCost,
  convertUsd,
  formatConverted,
  formatUsd,
  getDefaultRate,
  type NonResidentCurrencyCode,
} from "@/lib/nonResidentCost";

function parseNonNegative(value: string, fallback: number): number {
  if (value.trim() === "") return fallback;
  const n = Number(value);
  return Number.isFinite(n) && n >= 0 ? n : fallback;
}

const QUICK_STATES = ["wyoming", "delaware", "new-mexico"] as const;
const SCENARIO_SLUGS = ["wyoming", "delaware", "new-mexico"] as const;

export default function NonResidentCalculator({
  initialCurrencyCode,
  initialStateSlug,
}: {
  initialCurrencyCode: NonResidentCurrencyCode;
  initialStateSlug: string;
}) {
  const verified = useMemo(
    () => STATE_FEES.filter((s) => s.status === "verified"),
    [],
  );

  const [stateSlug, setStateSlug] = useState(
    verified.some((s) => s.slug === initialStateSlug)
      ? initialStateSlug
      : "wyoming",
  );
  const [currencyCode, setCurrencyCode] =
    useState<NonResidentCurrencyCode>(initialCurrencyCode);
  const [fxRate, setFxRate] = useState(
    String(getDefaultRate(initialCurrencyCode)),
  );
  const [includeAgent, setIncludeAgent] = useState(true);
  const [agentCost, setAgentCost] = useState(
    String(DEFAULT_AGENT_COST_PER_YEAR),
  );
  const [includeMail, setIncludeMail] = useState(false);
  const [mailCost, setMailCost] = useState(
    String(DEFAULT_MAIL_FORWARDING_COST_PER_MONTH),
  );
  const [einService, setEinService] = useState<"diy" | "paid">("diy");
  const [einCost, setEinCost] = useState(String(DEFAULT_EIN_SERVICE_COST));

  const state = useMemo(
    () => verified.find((s) => s.slug === stateSlug) ?? verified[0],
    [stateSlug, verified],
  );

  const rate = parseNonNegative(fxRate, getDefaultRate(currencyCode));
  const agentPerYear = parseNonNegative(
    agentCost,
    DEFAULT_AGENT_COST_PER_YEAR,
  );
  const mailPerMonth = parseNonNegative(
    mailCost,
    DEFAULT_MAIL_FORWARDING_COST_PER_MONTH,
  );
  const einServiceCost = parseNonNegative(einCost, DEFAULT_EIN_SERVICE_COST);

  const totals = useMemo(() => {
    if (!state) return null;
    return calculateNonResidentCost({
      state,
      includeRegisteredAgent: includeAgent,
      registeredAgentCostPerYear: agentPerYear,
      includeMailForwarding: includeMail,
      mailForwardingCostPerMonth: mailPerMonth,
      einService,
      einServiceCost,
    });
  }, [state, includeAgent, agentPerYear, includeMail, mailPerMonth, einService, einServiceCost]);

  const scenarios = useMemo(
    () =>
      SCENARIO_SLUGS.map((slug) => {
        const scenarioState = verified.find((s) => s.slug === slug);
        if (!scenarioState) return null;
        return {
          state: scenarioState,
          totals: calculateNonResidentCost({
            state: scenarioState,
            includeRegisteredAgent: includeAgent,
            registeredAgentCostPerYear: agentPerYear,
            includeMailForwarding: includeMail,
            mailForwardingCostPerMonth: mailPerMonth,
            einService,
            einServiceCost,
          }),
        };
      }).filter((row): row is NonNullable<typeof row> => row !== null),
    [verified, includeAgent, agentPerYear, includeMail, mailPerMonth, einService, einServiceCost],
  );

  /** Five-year totals at the default settings — rendered, never hardcoded. */
  const defaultAgentFiveYear = useMemo(
    () =>
      SCENARIO_SLUGS.map((slug) => {
        const scenarioState = verified.find((s) => s.slug === slug);
        if (!scenarioState) return null;
        return {
          state: scenarioState,
          fiveYearUsd: calculateNonResidentCost({
            state: scenarioState,
            includeRegisteredAgent: true,
            registeredAgentCostPerYear: DEFAULT_AGENT_COST_PER_YEAR,
            includeMailForwarding: false,
            mailForwardingCostPerMonth: 0,
            einService: "diy",
            einServiceCost: 0,
          }).fiveYearUsd,
        };
      }).filter((row): row is NonNullable<typeof row> => row !== null),
    [verified],
  );

  if (!state || !totals) {
    return <p className="text-slate-600">Loading calculator…</p>;
  }

  const year1Converted = convertUsd(totals.year1Usd, rate);
  const fiveYearConverted = convertUsd(totals.fiveYearUsd, rate);

  const onCurrencyChange = (code: NonResidentCurrencyCode) => {
    setCurrencyCode(code);
    setFxRate(String(getDefaultRate(code)));
  };

  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="text-lg font-semibold text-[#102A43]">
            Your LLC, your currency
          </h2>

          <div>
            <span
              className="mb-1 block text-sm font-medium text-slate-700"
              id="nr-state-label"
            >
              US state
            </span>
            <div className="flex gap-2" role="group" aria-labelledby="nr-state-label">
              {QUICK_STATES.map((slug) => {
                const quick = verified.find((s) => s.slug === slug);
                if (!quick) return null;
                return (
                  <button
                    key={slug}
                    type="button"
                    onClick={() => setStateSlug(slug)}
                    aria-pressed={stateSlug === slug}
                    className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition ${
                      stateSlug === slug
                        ? "border-[#1769AA] bg-[#1769AA] text-white"
                        : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                    }`}
                  >
                    {quick.state}
                  </button>
                );
              })}
            </div>
            <label
              htmlFor="nr-state"
              className="mb-1 mt-3 block text-sm font-medium text-slate-700"
            >
              Or pick any state
            </label>
            <select
              id="nr-state"
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
              Most non-residents pick Wyoming, Delaware or New Mexico.
            </p>
          </div>

          <div>
            <label
              htmlFor="nr-currency"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Your home currency
            </label>
            <select
              id="nr-currency"
              value={currencyCode}
              onChange={(e) =>
                onCurrencyChange(e.target.value as NonResidentCurrencyCode)
              }
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#1769AA] focus:outline-none focus:ring-1 focus:ring-[#1769AA]"
            >
              {NON_RESIDENT_CURRENCIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.label}
                </option>
              ))}
            </select>
            <div className="mt-3">
              <label
                htmlFor="nr-fx-rate"
                className="mb-1 block text-xs text-slate-500"
              >
                Exchange rate ({currencyCode} per $1 USD) — editable
              </label>
              <input
                id="nr-fx-rate"
                type="number"
                min={0}
                step="0.01"
                value={fxRate}
                onChange={(e) => setFxRate(e.target.value)}
                onBlur={() => setFxRate(String(rate))}
                className="w-32 rounded border border-slate-300 px-2 py-1 text-sm"
                aria-label={`Exchange rate, ${currencyCode} per 1 US dollar`}
              />
              <p className="mt-1 text-xs text-slate-500">
                Default rate {getDefaultRate(currencyCode)} {currencyCode} per
                $1, as of {FX_RATE_DATE} ({FX_RATE_SOURCE}). Converted figures
                are estimates, not bank rates.
              </p>
            </div>
          </div>

          <div className="space-y-3 border-t border-slate-100 pt-4">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={includeAgent}
                onChange={(e) => setIncludeAgent(e.target.checked)}
                className="mt-1"
              />
              <span className="text-sm text-slate-700">
                Registered agent (required — you cannot use a foreign address)
              </span>
            </label>
            {includeAgent && (
              <div className="ml-7">
                <label className="mb-1 block text-xs text-slate-500">
                  Annual agent cost ($)
                </label>
                <input
                  type="number"
                  min={0}
                  value={agentCost}
                  onChange={(e) => setAgentCost(e.target.value)}
                  onBlur={() =>
                    setAgentCost(String(parseNonNegative(agentCost, DEFAULT_AGENT_COST_PER_YEAR)))
                  }
                  step="1"
                  className="w-28 rounded border border-slate-300 px-2 py-1 text-sm"
                  aria-label="Annual registered agent cost"
                />
                <p className="mt-1 text-xs text-slate-500">
                  Typical range: $99–$199 per year
                </p>
              </div>
            )}

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={includeMail}
                onChange={(e) => setIncludeMail(e.target.checked)}
                className="mt-1"
              />
              <span className="text-sm text-slate-700">
                US mail forwarding / virtual mailbox
              </span>
            </label>
            {includeMail && (
              <div className="ml-7">
                <label className="mb-1 block text-xs text-slate-500">
                  Monthly mailbox cost ($)
                </label>
                <input
                  type="number"
                  min={0}
                  value={mailCost}
                  onChange={(e) => setMailCost(e.target.value)}
                  onBlur={() =>
                    setMailCost(String(parseNonNegative(mailCost, DEFAULT_MAIL_FORWARDING_COST_PER_MONTH)))
                  }
                  step="1"
                  className="w-28 rounded border border-slate-300 px-2 py-1 text-sm"
                  aria-label="Monthly mail forwarding cost"
                />
                <p className="mt-1 text-xs text-slate-500">
                  Typical range: $10–$30 per month. A mailbox is not a
                  registered agent.
                </p>
              </div>
            )}

            <div>
              <span
                className="mb-1 block text-sm font-medium text-slate-700"
                id="nr-ein-label"
              >
                EIN (Employer Identification Number)
              </span>
              <div
                className="flex gap-2"
                role="group"
                aria-labelledby="nr-ein-label"
              >
                <button
                  type="button"
                  onClick={() => setEinService("diy")}
                  aria-pressed={einService === "diy"}
                  className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition ${
                    einService === "diy"
                      ? "border-[#1769AA] bg-[#1769AA] text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                  }`}
                >
                  DIY — $0
                </button>
                <button
                  type="button"
                  onClick={() => setEinService("paid")}
                  aria-pressed={einService === "paid"}
                  className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition ${
                    einService === "paid"
                      ? "border-[#1769AA] bg-[#1769AA] text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                  }`}
                >
                  Paid service
                </button>
              </div>
              {einService === "diy" ? (
                <p className="mt-2 text-xs text-slate-500">
                  File IRS Form SS-4 by fax or mail and write “Foreign” where
                  it asks for an SSN. The IRS charges $0 for an EIN.
                </p>
              ) : (
                <div className="mt-2">
                  <label className="mb-1 block text-xs text-slate-500">
                    Paid EIN service cost ($, one-time)
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={einCost}
                    onChange={(e) => setEinCost(e.target.value)}
                    onBlur={() =>
                      setEinCost(String(parseNonNegative(einCost, DEFAULT_EIN_SERVICE_COST)))
                    }
                    step="1"
                    className="w-28 rounded border border-slate-300 px-2 py-1 text-sm"
                    aria-label="Paid EIN service cost"
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    Agencies typically charge $75–$300 to file the same free
                    form for you.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4 lg:col-span-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-baseline justify-between gap-2">
              <h2 className="text-lg font-semibold text-[#102A43]">
                {state.state} LLC — year 1
              </h2>
              <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                Planning estimate
              </span>
            </div>
            <p className="mt-4 text-4xl font-bold tracking-tight text-[#102A43]">
              {formatUsd(totals.year1Usd)}
            </p>
            <p className="mt-1 text-lg font-semibold text-slate-700">
              ≈ {formatConverted(year1Converted, currencyCode)}{" "}
              <span className="text-xs font-normal text-slate-500">
                estimate
              </span>
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Converted at {rate} {currencyCode} per $1 ({FX_RATE_DATE}). State
              fees are from verified state data; converted figures are
              estimates.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#102A43]">
              {state.state} LLC — 5 years
            </h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-[#102A43]">
              {formatUsd(totals.fiveYearUsd)}
            </p>
            <p className="mt-1 text-lg font-semibold text-slate-700">
              ≈ {formatConverted(fiveYearConverted, currencyCode)}{" "}
              <span className="text-xs font-normal text-slate-500">
                estimate
              </span>
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Five recurring payments over five years, plus formation and
              one-time items. Converted at {rate} {currencyCode} per $1 (
              {FX_RATE_DATE}).
            </p>

            <dl className="mt-6 space-y-2 border-t border-slate-100 pt-4 text-sm">
              {totals.items.map((item) => (
                <div key={item.label} className="flex justify-between gap-4">
                  <dt className="text-slate-600">{item.label}</dt>
                  <dd className="font-medium whitespace-nowrap">
                    {formatUsd(item.year1)} yr 1 · {formatUsd(item.fiveYear)}{" "}
                    5-yr
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-slate-500">
              Source: {state.sourceName}. {state.notes}
            </p>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <p className="font-medium">What this does not include</p>
            <p className="mt-1">
              Taxes, bank fees, operating-agreement drafting, and professional
              advice are not included. This tool shows operational and
              published state filing fees only — consult a qualified local
              adviser for tax or legal compliance.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Wyoming vs Delaware vs New Mexico — year 1 and 5 years
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          Same settings as above (agent, mail forwarding and EIN choices
          apply to all three). State fees come from verified state data; the{" "}
          {currencyCode} column is an estimate at {rate} {currencyCode} per $1
          ({FX_RATE_DATE}).
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] border-collapse bg-white text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-left">
                <th className="px-4 py-3 font-semibold text-[#102A43]">State</th>
                <th className="px-4 py-3 font-semibold text-[#102A43]">Year 1 (USD)</th>
                <th className="px-4 py-3 font-semibold text-[#102A43]">
                  Year 1 ({currencyCode}, est.)
                </th>
                <th className="px-4 py-3 font-semibold text-[#102A43]">5 years (USD)</th>
                <th className="px-4 py-3 font-semibold text-[#102A43]">
                  5 years ({currencyCode}, est.)
                </th>
              </tr>
            </thead>
            <tbody>
              {scenarios.map(({ state: scenarioState, totals: row }) => (
                <tr
                  key={scenarioState.slug}
                  className="border-b border-slate-100 last:border-0"
                >
                  <td className="px-4 py-3 font-medium text-[#102A43]">
                    {scenarioState.state}
                  </td>
                  <td className="px-4 py-3">{formatUsd(row.year1Usd)}</td>
                  <td className="px-4 py-3">
                    {formatConverted(convertUsd(row.year1Usd, rate), currencyCode)}
                  </td>
                  <td className="px-4 py-3">{formatUsd(row.fiveYearUsd)}</td>
                  <td className="px-4 py-3">
                    {formatConverted(convertUsd(row.fiveYearUsd, rate), currencyCode)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Five-year totals count five recurring payments (formation plus five
          annual charges). At the default settings — $
          {DEFAULT_AGENT_COST_PER_YEAR}-a-year registered agent, no mail
          forwarding, DIY EIN — the five-year totals are{" "}
          {defaultAgentFiveYear
            .map((row) => `${formatUsd(row.fiveYearUsd)} (${row.state.state})`)
            .join(", ")}
          .
        </p>
      </section>
    </div>
  );
}
