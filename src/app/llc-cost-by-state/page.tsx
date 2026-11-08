import type { Metadata } from "next";
import Link from "next/link";
import { STATE_FEES } from "@/data/stateFees";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata: Metadata = {
  title: "LLC Costs by State 2026 — Filing Fees & Annual Reports (All States)",
  description:
    "Compare LLC formation filing fees and recurring annual or biennial costs across verified US states. Official source links, multi-year context, and free calculator.",
  alternates: { canonical: "/llc-cost-by-state" },
};

export default function LLCCostByStatePage() {
  const verified = STATE_FEES.filter((s) => s.status === "verified").sort((a, b) =>
    a.state.localeCompare(b.state)
  );

  const faqs = [
    {
      question: "How much does it cost to form an LLC by state?",
      answer:
        "State formation filing fees typically range from about $35 to $500. The exact amount depends on the state. Recurring annual or biennial report fees and franchise taxes can add significant cost over time.",
    },
    {
      question: "Which state has the lowest LLC formation fee?",
      answer:
        "Montana currently has one of the lowest official formation fees. Several other states also charge under $50. Long-term cost depends more on annual reports and franchise taxes than the one-time filing fee alone.",
    },
    {
      question: "Do all states require annual reports?",
      answer:
        "No. Some states require annual reports, some biennial reports, and a few currently have little or no recurring report fee. Always confirm the current rule for your state.",
    },
    {
      question: "Why is California expensive even with a low formation fee?",
      answer:
        "California has a relatively modest formation fee but imposes an $800 minimum annual franchise tax on most LLCs. Over several years this makes it one of the more expensive states to maintain an LLC.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

      <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#1769AA]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">LLC Costs by State</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        LLC Formation Costs by State (2026)
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        Compare verified LLC formation filing fees and recurring charges across US states. Each row links to a state detail page and to the official government source used for verification. Always re-check current fees before filing.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/llc-cost-calculator"
          className="rounded-lg bg-[#102A43] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1769AA]"
        >
          Free Cost Calculator
        </Link>
        <Link
          href="/cheapest-states-to-form-an-llc"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#1769AA]"
        >
          Cheapest states
        </Link>
        <Link
          href="/most-expensive-states-to-form-an-llc"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#1769AA]"
        >
          Most expensive states
        </Link>
        <Link
          href="/hidden-costs-of-forming-an-llc"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#1769AA]"
        >
          Hidden costs
        </Link>
      </div>

      <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">State</th>
              <th className="px-4 py-3 font-medium">Formation fee</th>
              <th className="px-4 py-3 font-medium">Recurring</th>
              <th className="px-4 py-3 font-medium">Frequency</th>
              <th className="px-4 py-3 font-medium">Source</th>
              <th className="px-4 py-3 font-medium">Verified</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {verified.map((s) => (
              <tr key={s.slug} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-900">
                  <Link href={`/llc-cost-by-state/${s.slug}`} className="text-[#1769AA] hover:underline">
                    {s.state}
                  </Link>
                </td>
                <td className="px-4 py-3">
                  {s.formationFee != null ? `$${s.formationFee}` : "—"}
                </td>
                <td className="px-4 py-3">
                  <div>
                    {s.annualFrequency !== "none" && (
                      <div>
                        {s.annualFee != null ? `$${s.annualFee}` : "Variable / not included"}{" "}
                        <span className="text-xs text-slate-500">
                          ({s.recurringFeeLabel ??
                            (s.annualFrequency === "biennial" ? "biennial filing" : "annual filing")})
                        </span>
                      </div>
                    )}
                    {s.franchiseTax != null && s.franchiseTax > 0 && (
                      <div>
                        ${s.franchiseTax}{" "}
                        <span className="text-xs text-slate-500">(annual franchise / entity tax)</span>
                      </div>
                    )}
                    {s.annualFrequency === "none" && !s.franchiseTax && "No fixed recurring filing fee"}
                  </div>
                </td>
                <td className="px-4 py-3 capitalize">
                  {s.annualFrequency === "none"
                    ? s.franchiseTax
                      ? "Annual tax"
                      : "None listed"
                    : s.annualFrequency}
                </td>
                <td className="px-4 py-3">
                  <a
                    href={s.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1769AA] hover:underline"
                  >
                    {s.sourceName.length > 28 ? s.sourceName.slice(0, 28) + "…" : s.sourceName}
                  </a>
                </td>
                <td className="px-4 py-3 text-slate-500">{s.verifiedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-bold text-[#102A43]">How to use this table</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Start with the formation fee if you only need the one-time cost to create the LLC. Then look at the recurring column and frequency to understand ongoing obligations. For a clearer long-term picture, use the free calculator or the cheapest / most expensive rankings.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Click any state name for a dedicated page with more detail, notes, and a direct link to the official source.
        </p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-bold text-[#102A43]">Frequently asked questions</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer list-none font-semibold text-[#102A43]">
                <span className="flex items-center justify-between">
                  {f.question}
                  <span className="ml-4 text-slate-400 transition group-open:rotate-180">▼</span>
                </span>
              </summary>
              <p className="mt-3 text-slate-600 leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 max-w-3xl">
        <h2 className="text-lg font-semibold text-[#102A43]">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">
              LLC Cost Calculator
            </Link>
          </li>
          <li>
            <Link href="/how-much-does-it-cost-to-start-an-llc" className="text-[#1769AA] hover:underline">
              How Much Does It Cost to Start an LLC?
            </Link>
          </li>
          <li>
            <Link href="/cheapest-states-to-form-an-llc" className="text-[#1769AA] hover:underline">
              Cheapest States to Form an LLC
            </Link>
          </li>
          <li>
            <Link href="/most-expensive-states-to-form-an-llc" className="text-[#1769AA] hover:underline">
              Most Expensive States
            </Link>
          </li>
          <li>
            <Link href="/hidden-costs-of-forming-an-llc" className="text-[#1769AA] hover:underline">
              Hidden Costs of Forming an LLC
            </Link>
          </li>
          <li>
            <Link href="/annual-report-requirements-by-state" className="text-[#1769AA] hover:underline">
              Annual Report Requirements by State
            </Link>
          </li>
        </ul>
      </section>

      <div className="mt-8 max-w-3xl rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Important:</strong> Fees change. The figures above were verified against the linked official pages on the dates shown. Always re-check the current fee schedule on the state website before filing or budgeting.
      </div>

      <p className="mt-8 text-xs leading-relaxed text-slate-500">
        Educational resource only. Not legal or tax advice. This site is not affiliated with any government agency.
      </p>
    </div>
  );
}
