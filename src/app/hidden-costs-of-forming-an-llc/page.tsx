import type { Metadata } from "next";
import Link from "next/link";
import { STATE_FEES } from "@/data/stateFees";

export const metadata: Metadata = {
  title: "Hidden Costs of Forming an LLC 2026 — Franchise Tax, Publication & More",
  description:
    "Beyond the filing fee: annual reports, franchise taxes, publication requirements, registered agent costs, and other expenses that raise the real cost of an LLC.",
};

export default function HiddenCostsPage() {
  const verified = STATE_FEES.filter((s) => s.status === "verified");

  const highRecurring = verified
    .map((s) => {
      let yearly = 0;
      if (s.annualFrequency === "annual") {
        yearly = (s.annualFee ?? 0) + (s.franchiseTax ?? 0);
      } else if (s.annualFrequency === "biennial") {
        yearly = (s.annualFee ?? 0) / 2;
      }
      if (s.slug === "california") yearly = (s.franchiseTax ?? 800) + (s.annualFee ?? 0);
      return { ...s, yearly };
    })
    .filter((s) => s.yearly >= 200)
    .sort((a, b) => b.yearly - a.yearly)
    .slice(0, 12);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/llc-cost-by-state" className="hover:text-[#1769AA]">LLC Costs by State</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Hidden Costs</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">
        Hidden Costs of Forming an LLC in 2026
      </h1>
      <p className="mt-3 text-slate-600 leading-relaxed">
        The state formation fee is only the first number most people see. The real multi-year cost of an LLC
        often includes annual or biennial reports, franchise or privilege taxes, publication requirements,
        registered agent services, and local licenses. This page outlines the common categories so you can
        budget more accurately.
      </p>

      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Educational only.</strong> Fees and requirements change. Always confirm current amounts and
        rules on the official state website before filing or budgeting.
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">1. Annual / Biennial Report Fees</h2>
        <p className="mt-3 text-sm text-slate-700 leading-relaxed">
          Most states require an annual or biennial report (sometimes called a statement of information or
          annual registration). The fee can be $0 in a few states and several hundred dollars in others.
          Missing the deadline often triggers late penalties and, eventually, administrative dissolution.
        </p>
        <p className="mt-3 text-sm text-slate-700">
          See the full overview on our{" "}
          <Link href="/annual-report-requirements-by-state" className="text-[#1769AA] hover:underline">
            Annual Report Requirements by State
          </Link>{" "}page.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#102A43]">2. Franchise Tax & Minimum Taxes</h2>
        <p className="mt-3 text-sm text-slate-700 leading-relaxed">
          Some states impose a franchise tax, privilege tax, or minimum business tax on LLCs regardless of
          (or in addition to) income. The best-known example is California’s $800 annual franchise tax.
          Delaware, Tennessee, and several other states also have material recurring charges that are
          easy to overlook when comparing only formation fees.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#102A43]">
          States with higher recurring state costs
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Approximate annualized state-level recurring cost (report fee + franchise/privilege tax where applicable).
          Does not include registered agent or local licenses.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">State</th>
                <th className="px-4 py-3 font-medium">Est. Yearly State Cost</th>
                <th className="px-4 py-3 font-medium">Formation Fee</th>
                <th className="px-4 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {highRecurring.map((s) => (
                <tr key={s.slug} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium">
                    <Link href={`/llc-cost-by-state/${s.slug}`} className="text-[#1769AA] hover:underline">
                      {s.state}
                    </Link>
                  </td>
                  <td className="px-4 py-3 font-semibold text-[#102A43]">
                    ${Math.round(s.yearly).toLocaleString()}
                  </td>
                  <td className="px-4 py-3">${s.formationFee}</td>
                  <td className="px-4 py-3">
                    <Link href={`/llc-cost-by-state/${s.slug}`} className="text-xs text-[#1769AA] hover:underline">
                      Details →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">3. Publication Requirements</h2>
        <p className="mt-3 text-sm text-slate-700 leading-relaxed">
          A small number of states require newly formed LLCs to publish a notice in newspapers.
          New York is the most expensive and best-known example; the cost can run into the hundreds or
          more than a thousand dollars depending on the county. Arizona and Nebraska also have publication
          rules in certain situations. These costs are one-time but can significantly raise year-one totals.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#102A43]">4. Registered Agent</h2>
        <p className="mt-3 text-sm text-slate-700 leading-relaxed">
          Every LLC must maintain a registered agent with a physical address in the state of formation.
          You can often serve as your own agent if you have a qualifying address in that state, which costs $0
          in agent fees but places your address on the public record. Commercial registered agent services
          typically charge $50–$300 per year.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#102A43]">5. Other common extras</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Name reservation fees (optional or required in some states)</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Expedited processing fees</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Certified copies or certificates of good standing</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Local business licenses and permits</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Professional or industry-specific licenses</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Operating agreement drafting (if using an attorney)</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Initial EIN is free from the IRS; third-party services may charge</li>
        </ul>
      </section>

      <section className="mt-12 rounded-2xl bg-[#102A43] px-6 py-8 text-center text-white">
        <h2 className="text-xl font-bold">Estimate your multi-year cost</h2>
        <p className="mt-2 text-blue-100 text-sm max-w-md mx-auto">
          Use the free calculator to project formation + recurring fees for any verified state, with optional registered agent.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link href="/llc-cost-calculator" className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#102A43] hover:bg-blue-50">
            Open Calculator
          </Link>
          <Link href="/cheapest-states-to-form-an-llc" className="rounded-lg border border-white/40 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10">
            Cheapest States
          </Link>
        </div>
      </section>

      <p className="mt-10 text-xs text-slate-500">
        Data is drawn from official state sources with verification dates. This page is educational only and is not legal, tax, or financial advice.
      </p>
    </div>
  );
}
