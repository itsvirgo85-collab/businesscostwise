"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { STATE_FEES, type StateFee } from "@/data/stateFees";
import { calculateFiveYearStateCost, calculateRecurringStateFees } from "@/lib/stateCost";

function parseNonNegative(value: string): number {
  if (value.trim() === "") return 0;
  const n = Number(value);
  return Number.isFinite(n) ? Math.max(0, n) : 0;
}

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

type Priority = "lowest-cost" | "privacy" | "investors" | "balanced";
type Operation = "home" | "online" | "other-state";

interface Recommendation {
  state: StateFee;
  reason: string;
}

function oneYearCost(s: StateFee): number {
  return (s.formationFee ?? 0) + calculateRecurringStateFees(s, 1);
}

export default function BestStateFinder() {
  const verified = useMemo(
    () => STATE_FEES.filter((s) => s.status === "verified"),
    []
  );
  const [homeSlug, setHomeSlug] = useState(
    verified.some((s) => s.slug === "texas") ? "texas" : verified[0]?.slug || ""
  );
  const [operation, setOperation] = useState<Operation>("home");
  const [priority, setPriority] = useState<Priority>("balanced");

  const home = useMemo(
    () => verified.find((s) => s.slug === homeSlug),
    [homeSlug, verified]
  );

  const bySlug = useMemo(() => {
    const map = new Map(verified.map((s) => [s.slug, s]));
    return (slug: string) => map.get(slug);
  }, [verified]);

  const recommendations: Recommendation[] = useMemo(() => {
    if (!home) return [];
    const out: Recommendation[] = [];
    const push = (state: StateFee | undefined, reason: string) => {
      if (state && !out.some((r) => r.state.slug === state.slug)) {
        out.push({ state, reason });
      }
    };

    const cheapest = [...verified].sort(
      (a, b) => calculateFiveYearStateCost(a) - calculateFiveYearStateCost(b),
    )[0];

    if (operation === "home") {
      push(home, "Your home state is usually the cheapest overall: forming elsewhere and operating at home means paying both states — formation plus foreign qualification in your home state.");
    } else if (operation === "online") {
      push(home, "Even for an online business, your home state is usually the cheapest overall — you live there, so you would still need to register there.");
    } else {
      push(home, "You will almost certainly need to foreign qualify in the state where you operate, so your home state is the natural starting point.");
    }

    if (priority === "lowest-cost" && cheapest) {
      push(cheapest, `Lowest 5-year state cost in our data: ${money(calculateFiveYearStateCost(cheapest))} over 5 years. Only worth it if you do not need to register where you live.`);
    }
    if (priority === "privacy") {
      push(bySlug("wyoming"), "Wyoming does not list member names on public filings and has low recurring costs.");
      push(bySlug("new-mexico"), "New Mexico has no annual report, so member information stays off the public record, and recurring costs are low.");
    }
    if (priority === "investors") {
      push(bySlug("delaware"), "Delaware is the standard choice for raising venture capital — investors and their lawyers know its courts and case law. It costs more ($400/year annual tax) and you will still register where you operate.");
    }
    if (priority === "balanced") {
      push(bySlug("wyoming"), "A common low-cost, privacy-friendly pick for online businesses that do not operate in a specific state.");
      if (cheapest) {
        push(cheapest, `Lowest 5-year state cost in our data (${money(calculateFiveYearStateCost(cheapest))} over 5 years).`);
      }
    }
    if (operation !== "home") {
      push(bySlug("wyoming"), "A frequent pick for online businesses: low recurring costs and member privacy on public filings.");
      push(bySlug("new-mexico"), "No annual report and low costs — worth comparing with Wyoming for a purely online business.");
    }
    return out.slice(0, 3);
  }, [home, operation, priority, verified, bySlug]);

  if (!home) return <p className="text-slate-600">Loading finder…</p>;

  return (
    <div className="space-y-8">
      <div className="grid gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-3">
        <div>
          <label htmlFor="bf-home" className="mb-1 block text-sm font-medium text-slate-700">
            Your home state
          </label>
          <select
            id="bf-home"
            value={homeSlug}
            onChange={(e) => setHomeSlug(e.target.value)}
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
          <span className="mb-1 block text-sm font-medium text-slate-700" id="bf-op-label">
            Where will the business operate?
          </span>
          <div className="flex flex-col gap-2" role="group" aria-labelledby="bf-op-label">
            {(
              [
                ["home", "In my home state"],
                ["online", "Online / nationwide"],
                ["other-state", "In another state"],
              ] as [Operation, string][]
            ).map(([v, label]) => (
              <label key={v} className="flex items-center gap-2 text-sm text-slate-700">
                <input
                  type="radio"
                  name="bf-operation"
                  checked={operation === v}
                  onChange={() => setOperation(v)}
                />
                {label}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="bf-priority" className="mb-1 block text-sm font-medium text-slate-700">
            What matters most?
          </label>
          <select
            id="bf-priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#1769AA] focus:outline-none focus:ring-1 focus:ring-[#1769AA]"
          >
            <option value="balanced">Balanced (cost + simplicity)</option>
            <option value="lowest-cost">Lowest state cost</option>
            <option value="privacy">Privacy</option>
            <option value="investors">Raising investors</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {recommendations.map((r, i) => (
          <div key={r.state.slug} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-[#102A43]">
                {i === 0 ? "★ " : ""}{r.state.state}
                {i === 0 && <span className="ml-2 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">Top pick</span>}
              </h3>
              <span className="text-sm text-slate-600">
                1 year: <strong className="text-[#102A43]">{money(oneYearCost(r.state))}</strong>
                {" · "}5 years: <strong className="text-[#102A43]">{money(calculateFiveYearStateCost(r.state))}</strong>
              </span>
            </div>
            <p className="mt-2 text-slate-700 leading-relaxed">{r.reason}</p>
            <p className="mt-2 text-sm text-slate-600">
              Formation {money(r.state.formationFee ?? 0)}
              {" · "}recurring {r.state.annualFee === null ? (r.state.franchiseTax ? `${money(r.state.franchiseTax)} franchise tax` : "no annual fee in our data") : `${money(r.state.annualFee)}${r.state.annualFrequency ? ` ${r.state.annualFrequency}` : ""}`}
              {" · "}
              <Link href={`/llc-cost-by-state/${r.state.slug}`} className="text-[#1769AA] hover:underline">
                See {r.state.state} LLC costs
              </Link>
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <p className="font-medium">The honest answer, in one line</p>
        <p className="mt-1">
          For most people the best state is the state where they live and work. Forming in Wyoming or Delaware while operating at home usually means paying two states instead of one — formation in one, foreign qualification and an annual report in the other. The exceptions are a purely online business with no physical presence anywhere, a privacy-first setup, or a company planning to raise venture capital.
        </p>
      </div>

      <p className="text-xs text-slate-500">
        Educational tool only. Not legal or tax advice. Costs use this site’s verified state fee data; confirm current fees with the Secretary of State before filing.
      </p>
    </div>
  );
}
