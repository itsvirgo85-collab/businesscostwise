import type { Metadata } from "next";
import Link from "next/link";
import { STATE_FEES } from "@/data/stateFees";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "Cheapest States to Form an LLC in 2026" },
  description:
    "Cheapest states to form an LLC in 2026, ranked by formation fees and 5-year totals. Montana $35, Kentucky $40, Arkansas $45 — official source links included.",
  alternates: { canonical: "/cheapest-states-to-form-an-llc" },
  openGraph: {
    title: "Cheapest States to Form an LLC in 2026",
    description:
      "Cheapest states to form an LLC in 2026, ranked by formation fees and 5-year totals. Montana $35, Kentucky $40, Arkansas $45 — official source links included.",
    type: "article",
    url: "/cheapest-states-to-form-an-llc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheapest States to Form an LLC in 2026",
    description:
      "Cheapest states to form an LLC in 2026, ranked by formation fees and 5-year totals. Montana $35, Kentucky $40, Arkansas $45 — official source links included.",
    images: ["/twitter-image"],
  },
};

export default function CheapestStatesPage() {
  const verified = STATE_FEES.filter((s) => s.status === "verified" && s.formationFee != null);

  const byFormation = [...verified].sort((a, b) => (a.formationFee ?? 999) - (b.formationFee ?? 999));

  const withFiveYear = verified.map((s) => {
    const formation = s.formationFee ?? 0;
    let yearly = 0;
    if (s.annualFrequency === "annual") {
      yearly = s.annualFee ?? 0;
      if (s.franchiseTax) yearly += s.franchiseTax;
    } else if (s.annualFrequency === "biennial") {
      yearly = (s.annualFee ?? 0) / 2;
    } else if (s.franchiseTax) {
      // States with no annual/biennial report but a yearly franchise/entity tax
      // (e.g. Delaware’s $400 annual LLC tax).
      yearly = s.franchiseTax;
    }
    if (s.slug === "california" && s.franchiseTax) yearly = s.franchiseTax + (s.annualFee ?? 0);
    const fiveYear = formation + yearly * 5;
    return { ...s, yearlyApprox: yearly, fiveYear };
  });

  const byFiveYear = [...withFiveYear].sort((a, b) => a.fiveYear - b.fiveYear).slice(0, 12);
  const topCheapestFormation = byFormation.slice(0, 10);

  const faqs = [
    {
      question: "What is the cheapest state to form an LLC in 2026?",
      answer:
        "Montana currently has one of the lowest official formation fees at $35. Several other states charge $40–$50. The cheapest states for long-term ownership are often those with little or no annual report fee. Always confirm on the official state website.",
    },
    {
      question: "Is the cheapest state always the best choice?",
      answer:
        "Not necessarily. A low formation fee can be offset by high annual report fees or franchise taxes. If you live and operate in another state, forming elsewhere may also require foreign LLC registration, which adds cost and compliance.",
    },
    {
      question: "Why is California not cheap even though formation is only $70?",
      answer:
        "California imposes an $800 minimum annual franchise tax on most LLCs regardless of income. Over five years this makes it one of the more expensive states to maintain an LLC.",
    },
    {
      question: "Do cheap states still require a registered agent?",
      answer:
        "Yes. Every state requires a registered agent with a physical address in the formation state. You can often serve as your own agent if you qualify, or hire a commercial service ($50–$300 per year).",
    },
    {
      question: "Should I form my LLC in the cheapest state if I live elsewhere?",
      answer:
        "Usually no for most small businesses. Forming in a different state often means you must also register as a foreign LLC in your home state, which adds extra fees and annual compliance. For most people the home state is simpler and cheaper overall.",
    },
    {
      question: "How do I confirm current fees?",
      answer:
        "Always verify the current formation fee and annual report requirements on the official Secretary of State (or equivalent) website for that state before filing. Fees and rules can change. See our Sources & Methodology page for how we verify data.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "How Much Does It Cost", item: "/how-much-does-it-cost-to-start-an-llc" },
          { name: "Cheapest States", item: "/cheapest-states-to-form-an-llc" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        Cheapest States to Form an LLC in 2026
      </h1>

      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        <strong>Short answer:</strong> Montana currently has one of the lowest official formation fees at <strong>$35</strong>. Several other states charge $40–$50. However, the real long-term cost depends heavily on annual or biennial report fees and any franchise tax. This page shows both formation-fee and 5-year rankings using verified official source data.
      </p>

      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Important:</strong> A low formation fee does not always mean the lowest total cost. California charges only about $70 to form but $800 per year in franchise tax. Always check the recurring column and confirm on the official state website before filing.
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

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">Lowest Formation Fees (One-Time)</h2>
        <p className="mt-2 text-slate-600">
          Ranked by the official state filing fee for Articles of Organization or Certificate of Formation.
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">#</th>
                <th className="px-4 py-3 font-medium">State</th>
                <th className="px-4 py-3 font-medium">Formation Fee</th>
                <th className="px-4 py-3 font-medium">Recurring</th>
                <th className="px-4 py-3 font-medium">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {topCheapestFormation.map((s, i) => (
                <tr key={s.slug} className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-slate-500">{i + 1}</td>
                  <td className="px-4 py-3 font-medium">
                    <Link href={`/llc-cost-by-state/${s.slug}`} className="text-[#1769AA] hover:underline">
                      {s.state}
                    </Link>
                  </td>
                  <td className="px-4 py-3 font-semibold text-[#102A43]">${s.formationFee}</td>
                  <td className="px-4 py-3">
                    {s.annualFee != null && s.annualFee > 0
                      ? `$${s.annualFee} ${s.annualFrequency}`
                      : s.franchiseTax
                        ? `$${s.franchiseTax} franchise`
                        : "None / $0"}
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

      <section className="mt-14">
        <h2 className="text-2xl font-bold text-[#102A43]">Lowest Estimated 5-Year State Costs</h2>
        <p className="mt-2 text-slate-600">
          Approximate total of formation fee + recurring state fees over five years (biennial fees averaged). Does not include registered agent services, local licenses, publication costs, or professional fees.
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">#</th>
                <th className="px-4 py-3 font-medium">State</th>
                <th className="px-4 py-3 font-medium">Est. 5-Year</th>
                <th className="px-4 py-3 font-medium">Formation</th>
                <th className="px-4 py-3 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {byFiveYear.map((s, i) => (
                <tr key={s.slug} className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-slate-500">{i + 1}</td>
                  <td className="px-4 py-3 font-medium">
                    <Link href={`/llc-cost-by-state/${s.slug}`} className="text-[#1769AA] hover:underline">
                      {s.state}
                    </Link>
                  </td>
                  <td className="px-4 py-3 font-semibold text-[#102A43]">
                    ${Math.round(s.fiveYear).toLocaleString()}
                  </td>
                  <td className="px-4 py-3">${s.formationFee}</td>
                  <td className="px-4 py-3 max-w-xs truncate text-xs text-slate-500">
                    {s.notes?.slice(0, 60)}…
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold text-[#102A43]">Key takeaways</h2>
        <ul className="mt-4 space-y-3 text-slate-700">
          <li className="flex gap-2">
            <span className="font-bold text-[#1769AA]">•</span>
            <span>
              <strong>Montana</strong> currently has one of the lowest official formation fees at $35.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-[#1769AA]">•</span>
            <span>
              Several states charge little or nothing in recurring report fees, which can make them cheaper over five years even if the formation fee is slightly higher.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-[#1769AA]">•</span>
            <span>
              <strong>California</strong> is inexpensive to form but among the more expensive to maintain because of the $800 annual franchise tax.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-[#1769AA]">•</span>
            <span>
              Formation fee alone is a poor decision metric. Always calculate multi-year cost and confirm current fees on the official state site.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-[#1769AA]">•</span>
            <span>
              For most small businesses, forming in the state where you live and operate is simpler and often cheaper overall than chasing the lowest formation fee in another state.
            </span>
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">How to use this ranking</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Use the formation-fee ranking if you only need the cheapest way to create the entity. Use the 5-year ranking if you plan to keep the LLC for several years. Then run the free calculator for your specific state to include registered agent and see 1-, 3-, and 5-year totals.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Also read the{" "}
          <Link href="/hidden-costs-of-forming-an-llc" className="text-[#1769AA] hover:underline">
            hidden costs guide
          </Link>{" "}
          so you do not overlook publication requirements, local licenses, or franchise taxes.
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

      <section className="mt-12 rounded-2xl bg-[#102A43] px-6 py-8 text-center text-white">
        <h2 className="text-xl font-bold">Calculate your exact state cost</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-blue-100">
          Use the free calculator to add registered agent, multi-year projections, and optional fees for any verified state.
        </p>
        <Link
          href="/llc-cost-calculator"
          className="mt-5 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#102A43] transition hover:bg-blue-50"
        >
          Open LLC Cost Calculator
        </Link>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold text-[#102A43]">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/most-expensive-states-to-form-an-llc" className="text-[#1769AA] hover:underline">
              Most Expensive States to Form an LLC
            </Link>
          </li>
          <li>
            <Link href="/how-much-does-it-cost-to-start-an-llc" className="text-[#1769AA] hover:underline">
              How Much Does It Cost to Start an LLC?
            </Link>
          </li>
          <li>
            <Link href="/hidden-costs-of-forming-an-llc" className="text-[#1769AA] hover:underline">
              Hidden Costs of Forming an LLC
            </Link>
          </li>
          <li>
            <Link href="/how-to-form-an-llc" className="text-[#1769AA] hover:underline">
              How to Form an LLC
            </Link>
          </li>
          <li>
            <Link href="/llc-cost-by-state" className="text-[#1769AA] hover:underline">
              LLC Costs by State (full table)
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
        Data is drawn from official state sources and marked with verification dates. Fees change. Always re-check the current fee schedule on the Secretary of State (or equivalent) website before filing. This page is educational only and is not legal or tax advice.
      </p>
    </div>
  );
}
