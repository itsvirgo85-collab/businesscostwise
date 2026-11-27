import type { Metadata } from "next";
import Link from "next/link";
import { STATE_FEES, getStateBySlug } from "@/data/stateFees";
import { calculateFiveYearStateCost } from "@/lib/stateCost";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "LLC Cost by State 2026 — All 50 States + DC" },
  description:
    "LLC costs by state for all 50 states + DC: verified formation fees and recurring annual or biennial costs, with official source links and multi-year context.",
  alternates: { canonical: "/llc-cost-by-state" },
  openGraph: {
    title: "LLC Cost by State 2026 — All 50 States + DC",
    description:
      "LLC costs by state for all 50 states + DC: verified formation fees and recurring annual or biennial costs, with official source links and multi-year context.",
    type: "article",
    url: "/llc-cost-by-state",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "LLC Costs by State 2026 — All 50 States + DC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LLC Cost by State 2026 — All 50 States + DC",
    description:
      "LLC costs by state for all 50 states + DC: verified formation fees and recurring annual or biennial costs, with official source links and multi-year context.",
    images: ["/twitter-image"],
  },
};

export default function LLCCostByStatePage() {
  // All fee figures on this page are derived from the verified state records —
  // no fee is hardcoded. Five-year totals count five recurring payments.
  const verified = STATE_FEES.filter((s) => s.status === "verified").sort((a, b) =>
    a.state.localeCompare(b.state)
  );
  const withFormationFee = verified.filter((s) => s.formationFee != null);
  const minFormation = withFormationFee.reduce((a, b) =>
    (a.formationFee ?? Infinity) < (b.formationFee ?? Infinity) ? a : b,
  );
  const maxFormation = withFormationFee.reduce((a, b) =>
    (a.formationFee ?? 0) > (b.formationFee ?? 0) ? a : b,
  );
  const minFormationFee = minFormation.formationFee ?? 0;
  const maxFormationFee = maxFormation.formationFee ?? 0;
  const byFiveYear = [...verified]
    .map((s) => ({ fee: s, total: calculateFiveYearStateCost(s) }))
    .sort((a, b) => a.total - b.total);
  const cheapestFiveYear = byFiveYear[0];
  const priciestFiveYear = byFiveYear[byFiveYear.length - 1];
  const delaware = getStateBySlug("delaware")!;
  const california = getStateBySlug("california")!;
  const wyoming = getStateBySlug("wyoming")!;
  const newMexico = getStateBySlug("new-mexico")!;
  const massachusetts = getStateBySlug("massachusetts")!;
  const delawareFormationFee = delaware.formationFee ?? 0;
  const delawareAnnualTax = delaware.franchiseTax ?? 0;
  const delawareFiveYear = calculateFiveYearStateCost(delaware);
  const californiaFormationFee = california.formationFee ?? 0;
  const californiaFranchiseTax = california.franchiseTax ?? 0;
  const californiaFiveYear = calculateFiveYearStateCost(california);
  const wyomingFiveYear = calculateFiveYearStateCost(wyoming);
  const newMexicoFormationFee = newMexico.formationFee ?? 0;
  const newMexicoFiveYear = calculateFiveYearStateCost(newMexico);
  const massachusettsFiveYear = calculateFiveYearStateCost(massachusetts);

  const faqs = [
    {
      question: "How much does it cost to form an LLC by state?",
      answer: `State formation filing fees run from $${minFormationFee} in ${minFormation.state} to $${maxFormationFee} in ${maxFormation.state}. Recurring annual or biennial report fees and franchise taxes add more over time, so compare the five-year total — not just the filing fee — before choosing a state.`,
    },
    {
      question: "Which state has the lowest LLC formation fee?",
      answer: `The lowest formation fee is $${minFormationFee} in ${minFormation.state}. Several other states charge under $50 to form. But the filing fee is only the first cost — a state with a low filing fee can still charge hundreds every year in reports or taxes.`,
    },
    {
      question: "Do all states require annual reports?",
      answer:
        "No. Some states require annual reports, some ask for a report every two years, and a few currently have little or no recurring report fee. The fee and the due date both vary by state, so always confirm the current rule for your state before you file.",
    },
    {
      question: "Why is California expensive even with a low formation fee?",
      answer: `California charges only $${californiaFormationFee} to form, but most LLCs owe a $${californiaFranchiseTax} minimum annual franchise tax on top of a small biennial report fee. Over five years that adds up to $${californiaFiveYear.toLocaleString()} in state fees — the highest five-year total in the country.`,
    },
    {
      question: "Which state is the most expensive for an LLC over five years?",
      answer: `California, at $${priciestFiveYear.total.toLocaleString()} in state fees over five years, driven by its $${californiaFranchiseTax} annual franchise tax. Massachusetts is next at $${massachusettsFiveYear.toLocaleString()}. Both cost far more to maintain than to form, which is why the five-year total matters more than the filing fee.`,
    },
    {
      question: "Is Wyoming or Delaware cheaper for an LLC?",
      answer: `Wyoming is cheaper. Over five years Wyoming costs $${wyomingFiveYear} in state fees, while Delaware costs $${delawareFiveYear.toLocaleString()} — mostly its $${delawareAnnualTax} annual tax. Delaware is popular for larger companies, but for a small business the yearly tax usually makes it the pricier choice.`,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "LLC Costs by State", item: "/llc-cost-by-state" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        LLC Cost by State (2026)
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        <strong>Short answer:</strong> LLC cost by state typically ranges from about $
        {minFormationFee} to ${maxFormationFee} for the formation filing fee alone. Recurring
        annual or biennial report fees and franchise taxes often matter more over multi-year
        ownership than the one-time fee.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        Compare verified formation and recurring charges across US states. Each row links to a state detail page and to the official government source used for verification. Always re-check current fees before filing.
      </p>

      <p className="mt-3 text-sm text-slate-500">
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

      <div className="mt-6 max-w-3xl rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
        <strong>Delaware correction:</strong> Delaware&apos;s LLC annual tax is ${delaware.franchiseTax} a year for tax
        year 2026, first payable 1 June 2027 — up from $300. Many guides still show $300.
        Delaware charges ${delaware.formationFee} to form and files no annual report, but the ${delaware.franchiseTax} tax is still due
        every year: ${calculateFiveYearStateCost(delaware).toLocaleString()} over five years (${delaware.formationFee} to form plus five ${delaware.franchiseTax} annual tax payments).
      </div>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-bold text-[#102A43]">
          LLC cost by state: cheapest vs most expensive
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The cheapest formation fee is ${minFormationFee} in{" "}
          <Link href={`/llc-cost-by-state/${minFormation.slug}`} className="font-medium text-[#1769AA] hover:underline">
            {minFormation.state}
          </Link>
          , and the most expensive is ${maxFormationFee} in{" "}
          <Link href={`/llc-cost-by-state/${maxFormation.slug}`} className="font-medium text-[#1769AA] hover:underline">
            {maxFormation.state}
          </Link>
          . But the filing fee is only the first payment. Over five years,{" "}
          <Link href={`/llc-cost-by-state/${cheapestFiveYear.fee.slug}`} className="font-medium text-[#1769AA] hover:underline">
            {cheapestFiveYear.fee.state}
          </Link>{" "}
          costs just ${cheapestFiveYear.total} in total state fees, while{" "}
          <Link href={`/llc-cost-by-state/${priciestFiveYear.fee.slug}`} className="font-medium text-[#1769AA] hover:underline">
            {priciestFiveYear.fee.state}
          </Link>{" "}
          costs ${priciestFiveYear.total.toLocaleString()}.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          See the full rankings:{" "}
          <Link href="/cheapest-states-to-form-an-llc" className="font-medium text-[#1769AA] hover:underline">
            cheapest states to form an LLC
          </Link>{" "}
          and{" "}
          <Link href="/most-expensive-states-to-form-an-llc" className="font-medium text-[#1769AA] hover:underline">
            most expensive states to form an LLC
          </Link>
          .
        </p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-bold text-[#102A43]">Why the formation fee alone misleads</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          <Link href="/llc-cost-by-state/california" className="font-medium text-[#1769AA] hover:underline">
            California
          </Link>{" "}
          charges only ${californiaFormationFee} to form — but its ${californiaFranchiseTax} annual
          franchise tax pushes the five-year total to ${californiaFiveYear.toLocaleString()}.{" "}
          <Link href="/llc-cost-by-state/delaware" className="font-medium text-[#1769AA] hover:underline">
            Delaware
          </Link>{" "}
          is similar: ${delawareFormationFee} to form, then ${delawareAnnualTax} every year. A low
          filing fee can hide a high yearly bill.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          <Link href="/llc-cost-by-state/new-mexico" className="font-medium text-[#1769AA] hover:underline">
            New Mexico
          </Link>{" "}
          is the opposite case: ${newMexicoFormationFee} to form and no recurring filing fee, so
          five years cost ${newMexicoFiveYear} in total.{" "}
          <Link href="/llc-cost-by-state/wyoming" className="font-medium text-[#1769AA] hover:underline">
            Wyoming
          </Link>{" "}
          is also low at ${wyomingFiveYear} over five years. The lesson: compare the five-year
          total, not the filing fee.{" "}
          <Link href="/llc-cost-calculator" className="font-medium text-[#1769AA] hover:underline">
            Run your own numbers →
          </Link>
        </p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-bold text-[#102A43]">The 5-year view of LLC cost by state</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          For states that charge every year, the five-year total on this site is the formation fee
          plus five annual payments. Delaware is the clearest example: ${delawareFormationFee} to
          form plus five ${delawareAnnualTax} tax payments is ${delawareFiveYear.toLocaleString()}.
          That is the honest way to compare states — a state with no filing fee can still charge
          every year, and a state with a high filing fee can charge nothing after that.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Use the{" "}
          <Link href="/llc-cost-calculator" className="font-medium text-[#1769AA] hover:underline">
            free LLC cost calculator
          </Link>{" "}
          to build your own 1-, 3-, and 5-year totals for any state, with registered agent and
          name reservation costs included if you want them.
        </p>
      </section>

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
                    {s.annualFrequency !== "none" && !(s.annualFee === 0 && s.franchiseTax != null) && (
                      <div>
                        {s.annualFee != null ? `$${s.annualFee}` : "Variable / not included"}{" "}
                        <span className="text-sm text-slate-500">
                          ({s.recurringFeeLabel ??
                            (s.annualFrequency === "biennial" ? "biennial filing" : "annual filing")})
                        </span>
                      </div>
                    )}
                    {s.franchiseTax != null && s.franchiseTax > 0 && (
                      <div>
                        ${s.franchiseTax}{" "}
                        <span className="text-sm text-slate-500">(annual franchise / entity tax)</span>
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
            <Link href="/how-to-form-an-llc" className="text-[#1769AA] hover:underline">
              How to Form an LLC: Step-by-Step
            </Link>
          </li>
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
          <li>
            <Link href="/about/sources-and-methodology" className="text-[#1769AA] hover:underline">
              Sources & Methodology
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
