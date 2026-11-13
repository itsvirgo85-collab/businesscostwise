import type { Metadata } from "next";
import Link from "next/link";
import { STATE_FEES } from "@/data/stateFees";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "LLC Annual Report Fees by State 2026 — Every State" },
  description:
    "LLC annual report fees for all 50 states + DC: which states charge $0, which charge every year, what each report costs, and where franchise tax applies on top.",
  alternates: { canonical: "/annual-report-requirements-by-state" },
  openGraph: {
    title: "LLC Annual Report Fees by State 2026 — Every State",
    description:
      "LLC annual report fees for all 50 states + DC: which states charge $0, which charge every year, what each report costs, and where franchise tax applies on top.",
    type: "article",
    url: "/annual-report-requirements-by-state",
  },
  twitter: {
    card: "summary_large_image",
    title: "LLC Annual Report Fees by State 2026 — Every State",
    description:
      "LLC annual report fees for all 50 states + DC: which states charge $0, which charge every year, what each report costs, and where franchise tax applies on top.",
    images: ["/twitter-image"],
  },
};

export default function AnnualReportPage() {
  const verified = STATE_FEES.filter((s) => s.status === "verified");

  const noRecurring = verified.filter(
    (s) =>
      (s.annualFee == null || s.annualFee === 0) &&
      (s.franchiseTax == null || s.franchiseTax === 0)
  );

  const annual = verified
    .filter((s) => s.annualFrequency === "annual" && (s.annualFee ?? 0) > 0)
    .sort((a, b) => (a.annualFee ?? 0) - (b.annualFee ?? 0));

  const biennial = verified
    .filter((s) => s.annualFrequency === "biennial")
    .sort((a, b) => (a.annualFee ?? 0) - (b.annualFee ?? 0));

  const withFranchise = verified.filter((s) => (s.franchiseTax ?? 0) > 0);

  const faqs = [
    {
      question: "What is an LLC annual report?",
      answer:
        "An annual report (sometimes called a statement of information, annual registration, or periodic report) is a filing most states require LLCs to submit to keep the entity in good standing. It usually updates the company’s address, registered agent, and officer or member information and is accompanied by a fee in many states.",
    },
    {
      question: "Do all states require annual reports for LLCs?",
      answer:
        "No. Requirements vary. Some states require annual filings, some biennial (every two years), and a smaller group currently charge little or nothing for the report itself. Always confirm the current rule for your formation state.",
    },
    {
      question: "What happens if I miss the annual report deadline?",
      answer:
        "Late fees are common. Continued failure can lead to loss of good standing and eventually administrative dissolution of the LLC. Restoring good standing usually costs more than filing on time.",
    },
    {
      question: "Is a franchise tax the same as an annual report fee?",
      answer:
        "Not always. Some states charge a simple report fee. Others impose a franchise tax, privilege tax, or minimum tax that can be much larger. California’s $800 annual franchise tax is the best-known example of a recurring cost that goes well beyond a basic report fee.",
    },
    {
      question: "How can I stay on top of annual report deadlines?",
      answer:
        "Calendar the deadline as soon as you form the LLC. Keep your registered agent information current, and consider using a commercial registered agent service that tracks filing deadlines for you.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "How Much Does It Cost", item: "/how-much-does-it-cost-to-start-an-llc" },
          { name: "Annual Reports", item: "/annual-report-requirements-by-state" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        LLC Annual Report Requirements by State (2026)
      </h1>

      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        <strong>Short answer:</strong> Most U.S. states require LLCs to file an annual or biennial report and pay a fee. A smaller group of states currently charge little or nothing for the report itself. Some states also impose franchise or privilege taxes that can be much larger than the report fee. This page groups states by frequency and highlights material recurring taxes.
      </p>

      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Always verify.</strong> Rules and fees change. Some states still require a filing even when the fee is $0. Confirm deadlines and current amounts on the official Secretary of State (or equivalent) website before relying on any figure.
      </div>

      <p className="mt-4 text-sm text-slate-500">
        <Link href="/about/sources-and-methodology" className="text-[#1769AA] hover:underline">
          How we source and verify fees →
        </Link>
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/llc-cost-calculator"
          className="rounded-lg bg-[#102A43] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1769AA]"
        >
          Free Cost Calculator
        </Link>
        <Link
          href="/hidden-costs-of-forming-an-llc"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#1769AA]"
        >
          Hidden costs
        </Link>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">
          States with no (or $0) recurring report fee
        </h2>
        <p className="mt-2 text-slate-600">
          Based on currently verified data. Some of these states may still require other filings or taxes.
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {noRecurring.map((s) => (
            <Link
              key={s.slug}
              href={`/llc-cost-by-state/${s.slug}`}
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-[#102A43] transition hover:border-[#1769AA] hover:text-[#1769AA]"
            >
              {s.state}
            </Link>
          ))}
          {noRecurring.length === 0 && (
            <p className="col-span-full text-sm text-slate-500">
              Check individual state pages for the latest verified status.
            </p>
          )}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">Annual report states (sample)</h2>
        <p className="mt-2 text-slate-600">
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
                  <td className="px-4 py-3">${s.annualFee}</td>
                  <td className="px-4 py-3">{s.franchiseTax ? `$${s.franchiseTax}` : "—"}</td>
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
        <h2 className="text-2xl font-bold text-[#102A43]">Biennial report states</h2>
        <p className="mt-2 text-slate-600">
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
                  <td colSpan={3} className="px-4 py-6 text-center text-sm text-slate-500">
                    Check individual state pages — some states use different labeling in the dataset.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">Franchise & privilege taxes</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Several states impose a franchise tax, privilege tax, or minimum tax that can be much larger than the report fee itself. California’s $800 annual franchise tax is the most widely discussed example. Always read the notes on the individual state page and confirm on the official tax or Secretary of State site.
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
        <h2 className="text-2xl font-bold text-[#102A43]">Why deadlines matter</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Failure to file required reports on time can result in late fees, loss of good standing, and eventual administrative dissolution of the LLC. Restoring good standing usually costs more than filing on time. Calendar the deadline and keep your registered agent information current.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          For a broader view of ongoing costs beyond the report fee, see{" "}
          <Link href="/hidden-costs-of-forming-an-llc" className="text-[#1769AA] hover:underline">
            Hidden Costs of Forming an LLC
          </Link>
          .
        </p>
      </section>

      <section className="mt-12">
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

      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Related tools & guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">
              LLC Cost Calculator
            </Link>
            {" "}— project multi-year totals including report fees
          </li>
          <li>
            <Link href="/hidden-costs-of-forming-an-llc" className="text-[#1769AA] hover:underline">
              Hidden Costs of Forming an LLC
            </Link>
          </li>
          <li>
            <Link href="/how-much-does-it-cost-to-start-an-llc" className="text-[#1769AA] hover:underline">
              How Much Does It Cost to Start an LLC?
            </Link>
          </li>
          <li>
            <Link href="/llc-cost-by-state" className="text-[#1769AA] hover:underline">
              Full Costs by State table
            </Link>
          </li>
          <li>
            <Link href="/cheapest-states-to-form-an-llc" className="text-[#1769AA] hover:underline">
              Cheapest States to Form an LLC
            </Link>
          </li>
          <li>
            <Link href="/about/sources-and-methodology" className="text-[#1769AA] hover:underline">
              Sources & Methodology
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 text-xs leading-relaxed text-slate-500">
        Educational resource only. Not legal or tax advice. Verify every fee and deadline on the official state website. This site is not affiliated with any government agency.
      </p>
    </div>
  );
}
