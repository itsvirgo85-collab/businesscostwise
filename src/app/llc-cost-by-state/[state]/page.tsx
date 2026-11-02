import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStateBySlug, getVerifiedStates } from "@/data/stateFees";

type Props = { params: Promise<{ state: string }> };

export async function generateStaticParams() {
  return getVerifiedStates().map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: slug } = await params;
  const s = getStateBySlug(slug);
  if (!s) return { title: "State not found" };
  return {
    title: `LLC Cost in ${s.state} — Filing Fee & Annual Costs`,
    description: `How much does it cost to form an LLC in ${s.state}? Formation fee, recurring costs, and official source links.`,
  };
}

export default async function StateCostPage({ params }: Props) {
  const { state: slug } = await params;
  const s = getStateBySlug(slug);
  if (!s || s.status !== "verified") notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/llc-cost-by-state" className="hover:text-[#1769AA]">Costs by State</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">{s.state}</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">
        LLC Cost in {s.state}
      </h1>
      <p className="mt-2 text-slate-600">
        Official formation and recurring fees for a domestic LLC in {s.state}. Figures are linked to the primary government source and marked with the verification date.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Formation fee</p>
          <p className="mt-1 text-3xl font-bold text-[#102A43]">
            {s.formationFee != null ? `$${s.formationFee}` : "Not verified"}
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Recurring / annual</p>
          <p className="mt-1 text-3xl font-bold text-[#102A43]">
            {s.annualFee != null && s.annualFee > 0
              ? `$${s.annualFee}`
              : s.franchiseTax
                ? `$${s.franchiseTax}`
                : "$0 / none"}
          </p>
          <p className="text-xs text-slate-500 capitalize">{s.annualFrequency}</p>
        </div>
      </div>

      {s.notes && (
        <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          <p className="font-medium text-slate-800">Notes</p>
          <p className="mt-1">{s.notes}</p>
        </div>
      )}

      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <p className="font-medium">Official source</p>
        <p className="mt-1">
          <a href={s.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">
            {s.sourceName}
          </a>
          {" · "}Verified {s.verifiedAt}. Always re-check the current fee schedule before filing.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/llc-cost-calculator"
          className="rounded-lg bg-[#1769AA] px-4 py-2 text-sm font-semibold text-white hover:bg-[#102A43]"
        >
          Open calculator
        </Link>
        <Link
          href="/llc-cost-by-state"
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          All states
        </Link>
      </div>

      <p className="mt-10 text-xs text-slate-500">
        Educational information only. Not legal or tax advice. State fees change; confirm on the official website.
      </p>
    </div>
  );
}
