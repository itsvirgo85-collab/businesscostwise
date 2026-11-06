import type { Metadata } from "next";
import Link from "next/link";
import { STATE_FEES } from "@/data/stateFees";

export const metadata: Metadata = {
  title: "LLC Annual Report Requirements by State 2026 — Fees & Frequency",
  description:
    "See which states require annual or biennial LLC reports, typical fees, and which states currently have no recurring report fee. Educational overview with official source links.",
};

export default function AnnualReportPage() {
  const verified = STATE_FEES.filter((s) => s.status === "verified");

  const noRecurring = verified.filter(
    (s) =>
      (s.annualFee == null || s.annualFee === 0) &&
      (s.franchiseTax == null || s.franchiseTax === 0)
  );

  const annual = verified
    .filter((s) => s.annualFrequency === "annual")
    .sort((a, b) => (a.annualFee ?? Number.MAX_SAFE_INTEGER) - (b.annualFee ?? Number.MAX_SAFE_INTEGER));

  const biennial = verified
    .filter((s) => s.annualFrequency === "biennial")
    .sort((a, b) => (a.annualFee ?? 0) - (b.annualFee ?? 0));

  const withFranchise = verified.filter((s) => (s.franchiseTax ?? 0) > 0);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/llc-cost-by-state" className="hover:text-[#1769AA]">LLC Costs by State</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Annual Reports</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">
        LLC Annual Report Requirements by State (2026)
      </h1>
      <p className="mt-3 text-slate-600 leading-relaxed">
        Most US states require LLCs to file an annual or biennial report (sometimes called a statement of
        information, annual registration, or periodic report) and to pay a fee. A smaller group of states
        currently charge little or nothing for the report itself. This page groups states by frequency and
        highlights material franchise or privilege taxes that often accompany (or replace) a simple report fee.
      </p>

      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Always verify.</strong> Rules and fees change. Some states still require a filing even when
        the fee is $0. Confirm deadlines and current amounts on the official Secretary of State (or equivalent)
        website before relying on any figure.
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">
          States with no fixed recurring fee or a $0 report filing
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          This group includes states with $0 annual report filings as well as states with no fixed report fee in this dataset. A $0 fee does not mean the filing is optional.
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {noRecurring.map((s) => (
            <Link
              key={s.slug}
              href={`/llc-cost-by-state/${s.slug}`}
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-[#102A43] hover:border-[#1769AA] hover:text-[#1769AA] transition"
            >
              {s.state}
            </Link>
          ))}
          {noRecurring.length === 0 && (
            <p className="text-sm text-slate-500 col-span-full">Check individual state pages for the latest verified status.</p>
          )}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">Annual report states (sample)</h2>
        <p className="mt-2 text-sm text-slate-600">
          Sorted by report fee (lowest first). Franchise taxes are listed separately where applicable.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">State</th>
                <th className="px-4 py-3 font-medium">Report Fee</th>
                <th className="px-4 py-3 font-medium">Franchise / Other</th>
                <th className="px-4 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {annual.slice(0, 20).map((s) => (
                <tr key={s.slug} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium">
                    <Link href={`/llc-cost-by-state/${s.slug}`} className="text-[#1769AA] hover:underline">
                      {s.state}
                    </Link>
                  </td>
                  <td className="px-4 py-3">{s.annualFee == null ? "Variable / not included" : s.annualFee === 0 ? "$0 (filing required)" : `${s.annualFee}`}</td>
                  <td className="px-4 py-3">
                    {s.franchiseTax ? `$${s.franchiseTax}` : "—"}
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/llc-cost-by-state/${s.slug}`} className="text-xs text-[#1769AA] hover:underline">
                      View →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">Biennial report states</h2>
        <p className="mt-2 text-sm text-slate-600">
          Report due every two years. The fee below is the amount charged per filing (not annualized).
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">State</th>
                <th className="px-4 py-3 font-medium">Biennial Fee</th>
                <th className="px-4 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {biennial.map((s) => (
                <tr key={s.slug} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium">
                    <Link href={`/llc-cost-by-state/${s.slug}`} className="text-[#1769AA] hover:underline">
                      {s.state}
                    </Link>
                  </td>
                  <td className="px-4 py-3">${s.annualFee ?? "—"}</td>
                  <td className="px-4 py-3">
                    <Link href={`/llc-cost-by-state/${s.slug}`} className="text-xs text-[#1769AA] hover:underline">
                      View →
                    </Link>
                  </td>
                </tr>
              ))}
              {biennial.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-4 py-6 text-center text-slate-500 text-sm">
                    Check individual state pages — some states use different labeling in the dataset.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">Franchise & privilege taxes</h2>
        <p className="mt-3 text-sm text-slate-700 leading-relaxed">
          Several states impose a franchise tax, privilege tax, or minimum tax that can be much larger than
          the report fee itself. California’s $800 annual franchise tax is the most widely discussed example.
          Always read the notes on the individual state page and confirm on the official tax or Secretary of State site.
        </p>
        {withFranchise.length > 0 && (
          <ul className="mt-4 space-y-1 text-sm">
            {withFranchise.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link href={`/llc-cost-by-state/${s.slug}`} className="text-[#1769AA] hover:underline">
                  {s.state}
                </Link>
                {" "}— franchise/privilege noted at ${s.franchiseTax}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">Why deadlines matter</h2>
        <p className="mt-3 text-sm text-slate-700 leading-relaxed">
          Failure to file required reports on time can result in late fees, loss of good standing, and
          eventual administrative dissolution of the LLC. Restoring good standing usually costs more than
          filing on time. Calendar the deadline and keep your registered agent information current.
        </p>
      </section>

      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Related tools</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">LLC Cost Calculator</Link>
            {" "}— project multi-year totals including report fees
          </li>
          <li>
            <Link href="/hidden-costs-of-forming-an-llc" className="text-[#1769AA] hover:underline">Hidden Costs of Forming an LLC</Link>
          </li>
          <li>
            <Link href="/llc-cost-by-state" className="text-[#1769AA] hover:underline">Full Costs by State table</Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 text-xs text-slate-500">
        Educational resource only. Not legal or tax advice. Verify every fee and deadline on the official state website.
      </p>
    </div>
  );
}
