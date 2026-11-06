import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStateBySlug, getVerifiedStates } from "@/data/stateFees";
import { calculateFiveYearStateCost, calculateRecurringStateFees } from "@/lib/stateCost";

type Props = { params: Promise<{ state: string }> };

export async function generateStaticParams() {
  return getVerifiedStates().map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: slug } = await params;
  const s = getStateBySlug(slug);
  if (!s || s.status !== "verified") return { title: "State not found" };

  const feeText =
    s.formationFee != null ? `$${s.formationFee} formation fee` : "formation costs";

  return {
    title: `LLC Cost in ${s.state} ${new Date().getFullYear()} — Filing Fee & Annual Costs`,
    description: `How much does it cost to form an LLC in ${s.state}? ${feeText}, recurring report fees, and official ${s.sourceName} source links. Verified data.`,
    alternates: { canonical: `/llc-cost-by-state/${s.slug}` },
    openGraph: {
      title: `LLC Cost in ${s.state} — Filing & Annual Fees`,
      description: `Official ${s.state} LLC formation and recurring costs with government source links.`,
      type: "article",
    },
  };
}

export default async function StateCostPage({ params }: Props) {
  const { state: slug } = await params;
  const s = getStateBySlug(slug);
  if (!s || s.status !== "verified") notFound();

  const yearlyApprox = calculateRecurringStateFees(s, 5) / 5;
  const fiveYear = calculateFiveYearStateCost(s);
  const firstYearStateCost = (s.formationFee ?? 0) + calculateRecurringStateFees(s, 1);

    const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `LLC Cost in ${s.state}`,
    description: `Official LLC formation and recurring fees for ${s.state}.`,
    mainEntity: {
      "@type": "Dataset",
      name: `${s.state} LLC Fees`,
      description: `Formation fee, annual/biennial report fee, and franchise tax data for ${s.state} LLCs.`,
      variableMeasured: [
        { "@type": "PropertyValue", name: "Formation fee", value: s.formationFee },
        { "@type": "PropertyValue", name: "Annual/report fee", value: s.annualFee },
      ],
    },
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/llc-cost-by-state" className="hover:text-[#1769AA]">Costs by State</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">{s.state}</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">
        LLC Cost in {s.state} ({new Date().getFullYear()})
      </h1>
      <p className="mt-2 text-slate-600 leading-relaxed">
        Official formation and recurring fees for a domestic LLC in {s.state}. Figures are linked to the
        primary government source and marked with the verification date. Always re-check the current
        schedule before filing.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Formation fee</p>
          <p className="mt-1 text-3xl font-bold text-[#102A43]">
            {s.formationFee != null ? `$${s.formationFee}` : "Not verified"}
          </p>
          <p className="mt-1 text-xs text-slate-500">One-time state filing</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Recurring state obligations</p>
          <div className="mt-2 space-y-2 text-sm font-semibold text-[#102A43]">
            {s.annualFrequency !== "none" && (
              <p>
                {s.annualFee != null ? `${s.annualFee}` : "Variable / not included"}
                <span className="ml-2 text-xs font-normal text-slate-500">
                  {s.recurringFeeLabel ?? (s.annualFrequency === "biennial" ? "Biennial filing" : "Annual filing")}
                </span>
              </p>
            )}
            {s.franchiseTax != null && s.franchiseTax > 0 && (
              <p>
                ${s.franchiseTax}/year
                <span className="ml-2 text-xs font-normal text-slate-500">Franchise / entity tax minimum or fixed amount</span>
              </p>
            )}
            {s.annualFrequency === "none" && !s.franchiseTax && <p>No fixed recurring filing fee listed</p>}
          </div>
        </div>
      </div>

      {s.franchiseTax != null && s.franchiseTax > 0 && (
        <div className="mt-4 rounded-lg border border-orange-200 bg-orange-50 p-4 text-sm text-orange-900">
          <strong>Franchise / privilege tax:</strong> ${s.franchiseTax}
          {s.slug === "california" && " (California minimum annual franchise tax — applies even with $0 income)"}
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#102A43]">Estimated multi-year state cost</h2>
        <p className="mt-2 text-sm text-slate-600">
          Approximate total of formation fee + recurring state charges. Does not include registered agent,
          publication, local licenses, or professional fees.
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">Horizon</th>
                <th className="px-4 py-3 font-medium">Est. state cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-4 py-3">Year 1 (formation + recurring)</td>
                <td className="px-4 py-3 font-semibold">${Math.round(firstYearStateCost).toLocaleString()}</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Est. yearly ongoing</td>
                <td className="px-4 py-3 font-semibold">${Math.round(yearlyApprox)}</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Est. 5-year total</td>
                <td className="px-4 py-3 font-semibold">${Math.round(fiveYear).toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {s.notes && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[#102A43]">Important notes for {s.state}</h2>
          <p className="mt-2 text-sm text-slate-700 leading-relaxed">{s.notes}</p>
        </section>
      )}

      <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <p className="font-medium">Official source</p>
        <p className="mt-1">
          <a href={s.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">
            {s.sourceName}
          </a>
          {s.additionalSources?.map((source) => (
            <span key={source.url}> · <a href={source.url} target="_blank" rel="noopener noreferrer" className="underline">{source.name}</a></span>
          ))}
          {" · "}Verified {s.verifiedAt}. Always re-check the current fee schedule before filing or budgeting.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#102A43]">What else affects total cost?</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li className="flex gap-2">
            <span className="text-[#1769AA]">•</span>
            <span>
              <strong>Registered agent</strong> — required in every state. You can often serve as your own if you have a qualifying in-state address, or use a commercial service ($50–$300/year typical).
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#1769AA]">•</span>
            <span>
              <strong>Publication</strong> — required in a few states (notably New York, and sometimes Arizona/Nebraska). Can add hundreds of dollars in year one.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#1769AA]">•</span>
            <span>
              <strong>Local licenses</strong> — city or county business licenses are separate from state formation fees.
            </span>
          </li>
        </ul>
        <p className="mt-3 text-sm">
          See the full overview on{" "}
          <Link href="/hidden-costs-of-forming-an-llc" className="text-[#1769AA] hover:underline">
            Hidden Costs of Forming an LLC
          </Link>
          .
        </p>
      </section>

      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Related tools</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">
              LLC Cost Calculator
            </Link>
            {" "}— project 1 / 3 / 5 year totals with optional registered agent
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
            <Link href="/annual-report-requirements-by-state" className="text-[#1769AA] hover:underline">
              Annual Report Requirements by State
            </Link>
          </li>
          <li>
            <Link href="/llc-cost-by-state" className="text-[#1769AA] hover:underline">
              All states comparison table
            </Link>
          </li>
        </ul>
      </section>

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

      <p className="mt-10 text-xs text-slate-500 leading-relaxed">
        Educational information only. Not legal or tax advice. State fees and rules change; confirm every
        figure on the official {s.sourceName} website before filing or making decisions.
      </p>
    </div>
  );
}
