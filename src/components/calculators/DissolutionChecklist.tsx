"use client";

import { useState } from "react";
import { DISSOLUTION_FEES } from "@/data/dissolutionFees";

/** Range of official dissolution filing fees, from dissolutionFees.ts — never hardcoded. */
const MIN_DISSOLUTION_FEE = Math.min(...DISSOLUTION_FEES.map((d) => d.fee));
const MAX_DISSOLUTION_FEE = Math.max(...DISSOLUTION_FEES.map((d) => d.fee));

const STEPS = [
  {
    title: "Vote to dissolve and record it in writing",
    detail:
      "Follow your operating agreement — usually a member vote, recorded in the company minutes.",
  },
  {
    title: "Settle debts, collect what is owed, notify creditors",
    detail:
      "Pay what the LLC owes, collect outstanding receivables, and tell customers, suppliers, and creditors the LLC is closing. Members are generally paid last.",
  },
  {
    title: "Get a tax clearance if your state requires one",
    detail:
      "Pennsylvania, Tennessee, and Texas commonly require one, with Rhode Island and New Hampshire also reported. Without it, the state can reject the dissolution filing.",
  },
  {
    title: "File the dissolution form with the Secretary of State",
    detail:
      `File the Articles of Dissolution (or Certificate of Cancellation) and pay the state filing fee — $${MIN_DISSOLUTION_FEE} to $${MAX_DISSOLUTION_FEE} depending on the state. Unpaid annual fees and franchise tax must usually be settled first.`,
  },
  {
    title: "File final tax returns and close the bank account",
    detail:
      "File a final federal return (marked final) and final state returns, cancel licences and permits, close the business bank account, and keep dissolution records for at least 3–7 years.",
  },
];

export default function DissolutionChecklist() {
  const [done, setDone] = useState<boolean[]>(STEPS.map(() => false));
  const completed = done.filter(Boolean).length;
  const percent = Math.round((completed / STEPS.length) * 100);

  const toggle = (index: number) => {
    setDone((prev) => prev.map((value, i) => (i === index ? !value : value)));
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-lg font-semibold text-[#102A43]">
          Closing checklist — 5 steps
        </h2>
        <span className="text-sm font-semibold text-[#1769AA]" aria-live="polite">
          {completed} of {STEPS.length} done
        </span>
      </div>

      <div
        className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-slate-200"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Dissolution checklist progress"
      >
        <div
          className="h-full rounded-full bg-[#1769AA] transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>

      <ol className="mt-5 space-y-3">
        {STEPS.map((step, index) => (
          <li
            key={step.title}
            className={`flex gap-3 rounded-xl border p-4 transition ${
              done[index]
                ? "border-emerald-200 bg-emerald-50"
                : "border-slate-200 bg-white"
            }`}
          >
            <input
              type="checkbox"
              id={`dissolve-step-${index + 1}`}
              checked={done[index]}
              onChange={() => toggle(index)}
              className="mt-1 h-5 w-5 shrink-0 accent-[#1769AA]"
            />
            <label
              htmlFor={`dissolve-step-${index + 1}`}
              className="cursor-pointer"
            >
              <span
                className={`block text-sm font-semibold ${
                  done[index] ? "text-emerald-900 line-through" : "text-[#102A43]"
                }`}
              >
                Step {index + 1}: {step.title}
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-slate-600">
                {step.detail}
              </span>
            </label>
          </li>
        ))}
      </ol>

      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Informational only — this checklist tracks your own progress in your
        browser and is not legal or tax advice. Confirm each step with your
        Secretary of State and department of revenue.
      </p>
    </div>
  );
}
