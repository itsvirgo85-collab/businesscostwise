"use client";

import { useMemo, useState } from "react";
import { STATE_FEES } from "@/data/stateFees";
import { calculateRecurringStateFees } from "@/lib/stateCost";

function parseNonNegative(value: string): number {
  if (value.trim() === "") return 0;
  const n = Number(value);
  return Number.isFinite(n) ? Math.max(0, n) : 0;
}

function money(n: number): string {
  return `$${Math.round(n).toLocaleString()}`;
}

function AddOnRow({
  label,
  hint,
  checked,
  onToggle,
  amount,
  onAmountChange,
  inputId,
}: {
  label: string;
  hint: string;
  checked: boolean;
  onToggle: () => void;
  amount: string;
  onAmountChange: (v: string) => void;
  inputId: string;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3">
      <label className="flex min-w-0 flex-1 cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={onToggle}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#1769AA]"
        />
        <span>
          <span className="block text-sm font-medium text-slate-800">{label}</span>
          <span className="block text-xs text-slate-500">{hint}</span>
        </span>
      </label>
      <span className="flex items-center gap-1 text-sm">
        <span className="text-slate-500">$</span>
        <input
          id={inputId}
          type="number"
          min="0"
          inputMode="decimal"
          value={amount}
          disabled={!checked}
          onChange={(e) => onAmountChange(e.target.value)}
          aria-label={`${label} cost per year in dollars`}
          className="w-20 rounded-lg border border-slate-300 px-2 py-1.5 text-right text-sm focus:border-[#1769AA] focus:outline-none focus:ring-1 focus:ring-[#1769AA] disabled:bg-slate-100"
        />
        <span className="text-xs text-slate-500">/yr</span>
      </span>
    </div>
  );
}

export default function HiddenCostEstimator() {
  const verified = useMemo(
    () => STATE_FEES.filter((s) => s.status === "verified"),
    []
  );

  const [stateSlug, setStateSlug] = useState("wyoming");
  const [includeAgent, setIncludeAgent] = useState(true);
  const [agentCost, setAgentCost] = useState("125");
  const [includeNameRes, setIncludeNameRes] = useState(false);
  const [nameResCost, setNameResCost] = useState("25");
  const [includeExpedited, setIncludeExpedited] = useState(false);
  const [expeditedCost, setExpeditedCost] = useState("50");
  const [includeGoodStanding, setIncludeGoodStanding] = useState(false);
  const [goodStandingCost, setGoodStandingCost] = useState("25");
  const [includePublication, setIncludePublication] = useState(false);
  const [publicationCost, setPublicationCost] = useState("500");

  const state = useMemo(
    () => verified.find((s) => s.slug === stateSlug),
    [stateSlug, verified]
  );

  const results = useMemo(() => {
    if (!state) return null;
    const formation = state.formationFee ?? 0;
    const recurringYear1 = calculateRecurringStateFees(state, 1);
    const officialOnly = formation + recurringYear1;
    const addOns =
      (includeAgent ? parseNonNegative(agentCost) : 0) +
      (includeNameRes ? parseNonNegative(nameResCost) : 0) +
      (includeExpedited ? parseNonNegative(expeditedCost) : 0) +
      (includeGoodStanding ? parseNonNegative(goodStandingCost) : 0) +
      (includePublication ? parseNonNegative(publicationCost) : 0);
    return { formation, recurringYear1, officialOnly, addOns, total: officialOnly + addOns };
  }, [
    state,
    includeAgent,
    agentCost,
    includeNameRes,
    nameResCost,
    includeExpedited,
    expeditedCost,
    includeGoodStanding,
    goodStandingCost,
    includePublication,
    publicationCost,
  ]);

  if (!state || !results) {
    return <p className="text-slate-600">Loading calculator…</p>;
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6">
      <h2 className="text-lg font-semibold text-[#102A43]">
        Hidden LLC Cost Estimator
      </h2>
      <p className="mt-1 text-sm text-slate-600">
        Pick a state, then toggle the extras agencies often bundle in. The
        official state fees come from our verified data — the add-on amounts
        are editable estimates, not state fees.
      </p>

      <div className="mt-4">
        <label
          htmlFor="hce-state"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          State
        </label>
        <select
          id="hce-state"
          value={stateSlug}
          onChange={(e) => setStateSlug(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-[#1769AA] focus:outline-none focus:ring-1 focus:ring-[#1769AA]"
        >
          {verified.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.state} ({s.abbreviation})
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4 space-y-3">
        <AddOnRow
          label="Commercial registered agent"
          hint="Required address in the formation state; $0 if you serve as your own agent"
          checked={includeAgent}
          onToggle={() => setIncludeAgent((v) => !v)}
          amount={agentCost}
          onAmountChange={setAgentCost}
          inputId="hce-agent-cost"
        />
        <AddOnRow
          label="Name reservation"
          hint="Optional in most states; required before filing in a few"
          checked={includeNameRes}
          onToggle={() => setIncludeNameRes((v) => !v)}
          amount={nameResCost}
          onAmountChange={setNameResCost}
          inputId="hce-name-cost"
        />
        <AddOnRow
          label="Expedited processing"
          hint="Faster state processing where offered; standard filing is slower but cheaper"
          checked={includeExpedited}
          onToggle={() => setIncludeExpedited((v) => !v)}
          amount={expeditedCost}
          onAmountChange={setExpeditedCost}
          inputId="hce-expedited-cost"
        />
        <AddOnRow
          label="Certificate of Good Standing"
          hint="Not needed to form; sometimes required later for banks or other states"
          checked={includeGoodStanding}
          onToggle={() => setIncludeGoodStanding((v) => !v)}
          amount={goodStandingCost}
          onAmountChange={setGoodStandingCost}
          inputId="hce-good-standing-cost"
        />
        <AddOnRow
          label="Newspaper publication"
          hint="Only a few states require it (notably New York); cost varies widely by county"
          checked={includePublication}
          onToggle={() => setIncludePublication((v) => !v)}
          amount={publicationCost}
          onAmountChange={setPublicationCost}
          inputId="hce-publication-cost"
        />
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Official state fees only
          </p>
          <p className="mt-1 text-2xl font-bold text-[#102A43]">
            {money(results.officialOnly)}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Formation {money(results.formation)} + year-1 recurring{" "}
            {money(results.recurringYear1)}
          </p>
        </div>
        <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Optional add-ons
          </p>
          <p className="mt-1 text-2xl font-bold text-[#102A43]">
            {money(results.addOns)}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Agent, reservation, expediting, certificates, publication
          </p>
        </div>
        <div className="rounded-xl bg-[#102A43] p-4 text-white">
          <p className="text-xs font-medium uppercase tracking-wide text-blue-200">
            Year-1 total with add-ons
          </p>
          <p className="mt-1 text-2xl font-bold">{money(results.total)}</p>
          <p className="mt-1 text-xs text-blue-100">
            Official fees + the add-ons you selected
          </p>
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Estimate only. Official fees are from our verified state data — confirm
        them on the{" "}
        <a
          href={state.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1769AA] underline"
        >
          {state.sourceName}
        </a>{" "}
        site. Add-on amounts are typical market ranges you can edit; they are
        not state fees.
      </p>
    </div>
  );
}
