"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { STATE_FEES, type StateFee } from "@/data/stateFees";
import { calculateFiveYearStateCost } from "@/lib/stateCost";

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

/**
 * Privacy notes are about what appears on the PUBLIC record — the
 * formation filing and the annual report. The IRS, banks, courts and
 * law enforcement still know who owns the LLC.
 */
const PRIVACY: Record<string, { score: number; note: string }> = {
  "new-mexico": {
    score: 9,
    note: "No annual report at all, and member names are not listed on the formation filing — the strongest privacy combination of any state.",
  },
  wyoming: {
    score: 9,
    note: "Member names are not listed on the Articles of Organization or the annual report; only the registered agent is on the public record.",
  },
  delaware: {
    score: 8,
    note: "The Certificate of Formation lists only the LLC name and registered agent — member names are not disclosed. The $400 annual tax is the trade-off.",
  },
  nevada: {
    score: 4,
    note: "Not anonymous in practice: the Annual List of Managers or Members is a public filing, so member names appear on the record.",
  },
};

type Sort = "privacy" | "cost";

export default function AnonymousLlcFinder() {
  const verified = useMemo(
    () => STATE_FEES.filter((s) => s.status === "verified"),
    []
  );
  const [sort, setSort] = useState<Sort>("privacy");
  const [homeSlug, setHomeSlug] = useState(
    verified.some((s) => s.slug === "california") ? "california" : verified[0]?.slug || ""
  );

  const rows = useMemo(() => {
    const list = Object.entries(PRIVACY)
      .map(([slug, p]) => {
        const state = verified.find((s) => s.slug === slug);
        return state ? { state, ...p } : null;
      })
      .filter((r): r is { state: StateFee; score: number; note: string } => r !== null);
    return list.sort((a, b) =>
      sort === "privacy" ? b.score - a.score : calculateFiveYearStateCost(a.state) - calculateFiveYearStateCost(b.state),
    );
  }, [verified, sort]);

  const home = verified.find((s) => s.slug === homeSlug);
  const homePrivacy = home ? PRIVACY[home.slug] : undefined;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <label htmlFor="af-home" className="mb-1 block text-sm font-medium text-slate-700">
            Your home state (for comparison)
          </label>
          <select
            id="af-home"
            value={homeSlug}
            onChange={(e) => setHomeSlug(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#1769AA] focus:outline-none focus:ring-1 focus:ring-[#1769AA] sm:w-64"
          >
            {verified.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.state} ({s.abbreviation})
              </option>
            ))}
          </select>
          {home && (
            <p className="mt-2 max-w-md text-sm text-slate-600">
              {homePrivacy
                ? homePrivacy.note
                : `In ${home.state}, member names generally appear on the formation filing or annual report — check the state's form before filing. Forming elsewhere does not hide you from the IRS, banks, or courts.`}
            </p>
          )}
        </div>

        <div>
          <span className="mb-1 block text-sm font-medium text-slate-700" id="af-sort-label">
            Rank states by
          </span>
          <div className="flex gap-2" role="group" aria-labelledby="af-sort-label">
            {(
              [
                ["privacy", "Privacy score"],
                ["cost", "5-year cost"],
              ] as [Sort, string][]
            ).map(([v, label]) => (
              <button
                key={v}
                type="button"
                onClick={() => setSort(v)}
                aria-pressed={sort === v}
                className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
                  sort === v
                    ? "border-[#1769AA] bg-[#1769AA] text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {rows.map((r, i) => (
          <div key={r.state.slug} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-semibold text-[#102A43]">
                {i + 1}. {r.state.state}
                <span className="ml-2 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                  Privacy {r.score}/10
                </span>
              </h2>
              <span className="text-sm text-slate-600">
                Formation: <strong className="text-[#102A43]">{money(r.state.formationFee ?? 0)}</strong>
                {" · "}5 years: <strong className="text-[#102A43]">{money(calculateFiveYearStateCost(r.state))}</strong>
              </span>
            </div>
            <p className="mt-2 text-slate-700 leading-relaxed">{r.note}</p>
            <p className="mt-2 text-sm">
              <Link href={`/llc-cost-by-state/${r.state.slug}`} className="text-[#1769AA] hover:underline">
                See {r.state.state} LLC costs
              </Link>
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <p className="font-medium">What “anonymous” does — and does not — mean</p>
        <p className="mt-1">
          Privacy here means your name does not appear on the state’s public business record. It does not mean the government, your bank, or a court cannot identify you: the IRS knows the owners through tax filings, banks collect beneficial-owner information under their own rules, and a court can order disclosure. Since FinCEN’s final rule effective 14 August 2026, US-formed LLCs are exempt from federal BOI reporting — but New York’s LLC Transparency Act (in effect from 1 January 2026) adds a separate state disclosure for NY LLCs. And if you form in Wyoming but live and work in another state, you will usually need to foreign qualify there — putting your name on that state’s public record anyway.
        </p>
      </div>

      <p className="text-xs text-slate-500">
        Educational tool only. Not legal advice. Privacy rules change; confirm what your state discloses on its current filing forms before relying on it.
      </p>
    </div>
  );
}
