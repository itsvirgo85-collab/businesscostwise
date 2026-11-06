import type { Metadata } from "next";
import Link from "next/link";
import { STATE_FEES } from "@/data/stateFees";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata: Metadata = {
  title: "How Much Does It Cost to Start an LLC in 2026? (All 50 States)",
  description:
    "Real cost to start an LLC in 2026: state filing fees from $35 to $500, annual reports, franchise taxes, registered agent fees, and hidden extras. Free calculator and official source links for every state.",
};

export default function HowMuchDoesItCostPage() {
  const verified = STATE_FEES.filter((s) => s.status === "verified" && s.formationFee != null);
  const cheapest = [...verified].sort((a, b) => (a.formationFee ?? 999) - (b.formationFee ?? 999)).slice(0, 5);
  const expensive = [...verified].sort((a, b) => (b.formationFee ?? 0) - (a.formationFee ?? 0)).slice(0, 5);

  const faqs = [
    {
      question: "How much does it cost to start an LLC in 2026?",
      answer:
        "State filing fees range from $35 in Montana to about $500 in Massachusetts. The median is roughly $100. Your total first-year cost is usually higher after annual reports, franchise taxes, registered agent fees, and any publication requirements.",
    },
    {
      question: "What is the cheapest state to form an LLC?",
      answer:
        "Montana currently has one of the lowest official formation fees at $35. Several other states charge $40–$50. The cheapest states to keep an LLC long-term are often those with little or no annual report fee.",
    },
    {
      question: "Why is California expensive for LLCs?",
      answer:
        "California charges a relatively low formation fee (around $70), but it imposes an $800 minimum annual franchise tax regardless of income. That makes it one of the most expensive states to maintain an LLC over time.",
    },
    {
      question: "Do I need a registered agent?",
      answer:
        "Yes. Every state requires an LLC to maintain a registered agent with a physical address in that state. You can often serve as your own agent if you have a qualifying address, or you can hire a commercial service, typically $50–$300 per year.",
    },
    {
      question: "Are there hidden costs beyond the filing fee?",
      answer:
        "Yes. Common extras include annual or biennial report fees, franchise or privilege taxes, newspaper publication in a few states (especially New York), registered agent fees, and local business licenses.",
    },
    {
      question: "Is the EIN free?",
      answer:
        "Yes. You can obtain an Employer Identification Number (EIN) directly from the IRS at no charge. Some third-party services charge a fee for the same filing.",
    },
    {
      question: "How much does an LLC cost in Texas?",
      answer:
        "Texas has a $300 formation filing fee and no state franchise tax for most small LLCs that file a No Tax Due report. Use the cost calculator for the latest verified numbers and any optional registered agent cost.",
    },
    {
      question: "Can I form an LLC for free?",
      answer:
        "Almost never. The state filing fee is required. Some services advertise free formation but still require you to pay the official state fee and often charge for registered agent or other add-ons.",
    },
    {
      question: "How much does it cost to maintain an LLC each year?",
      answer:
        "It varies widely. Some states have little or no annual report fee. Others charge $50–$300+ for annual reports, and a few (notably California) impose significant franchise taxes. Always check both formation and recurring costs for your state.",
    },
    {
      question: "Does the cost include an operating agreement or EIN?",
      answer:
        "No. The state filing fee only covers creating the LLC with the state. An operating agreement is a separate internal document, and an EIN is obtained free from the IRS.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

      <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#1769AA]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">How Much Does It Cost to Start an LLC</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        How Much Does It Cost to Start an LLC in 2026?
      </h1>

      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        The short answer: state filing fees range from <strong>$35</strong> (Montana) to around{" "}
        <strong>$500</strong> (Massachusetts). The real cost is almost always higher once you add
        annual reports, franchise taxes, registered agent fees, and — in a few states — newspaper
        publication. This page breaks down every major cost so you can budget accurately before you file.
      </p>

      <p className="mt-3 text-slate-600 leading-relaxed">
        Whether you are comparing states, trying to understand “how much is an LLC in Texas,” or simply want a realistic first-year budget, the numbers below come from official state sources and are kept current for 2026.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/llc-cost-calculator"
          className="rounded-lg bg-[#102A43] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1769AA]"
        >
          Free LLC Cost Calculator →
        </Link>
        <Link
          href="/how-to-form-an-llc"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#1769AA]"
        >
          How to form an LLC
        </Link>
        <Link
          href="/llc-cost-by-state"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#1769AA]"
        >
          All 50 states table
        </Link>
      </div>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Quick answer (2026)</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          <li>
            <strong>Formation fee range:</strong> $35 – $500 (median ~$100)
          </li>
          <li>
            <strong>Cheapest to form:</strong> Montana $35, Kentucky $40, Arkansas $45
          </li>
          <li>
            <strong>Most expensive to keep:</strong> California ($800 franchise tax every year)
          </li>
          <li>
            <strong>Often overlooked:</strong> Annual reports, publication (NY), registered agent, local licenses
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">1. State formation filing fee</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          This is the one-time fee you pay the Secretary of State (or equivalent agency) to file Articles of Organization or Certificate of Formation. It is the number most comparison tables lead with — and the one that often matters least over a five-year horizon.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Formation fees are set by each state and can change. Always verify the current amount on the official state website before filing. Our calculator and state pages link directly to those official sources.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-[#102A43]">Lowest formation fees</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {cheapest.map((s) => (
                <li key={s.slug} className="flex justify-between">
                  <Link href={`/llc-cost-by-state/${s.slug}`} className="text-[#1769AA] hover:underline">
                    {s.state}
                  </Link>
                  <span className="font-medium">${s.formationFee}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/cheapest-states-to-form-an-llc"
              className="mt-3 inline-block text-xs text-[#1769AA] hover:underline"
            >
              Full cheapest ranking →
            </Link>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-[#102A43]">Highest formation fees</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {expensive.map((s) => (
                <li key={s.slug} className="flex justify-between">
                  <Link href={`/llc-cost-by-state/${s.slug}`} className="text-[#1769AA] hover:underline">
                    {s.state}
                  </Link>
                  <span className="font-medium">${s.formationFee}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/most-expensive-states-to-form-an-llc"
              className="mt-3 inline-block text-xs text-[#1769AA] hover:underline"
            >
              Full most expensive ranking →
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">2. Recurring state costs (the real long-term bill)</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Most states require an annual or biennial report. Some also impose a franchise tax, privilege tax, or business entity tax. These recurring costs often matter more than the initial filing fee if you plan to keep the LLC for several years.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          California is the clearest example: the formation fee is relatively low, but the $800 minimum annual franchise tax applies regardless of whether the LLC has income. Other states have modest report fees or none at all for many small LLCs.
        </p>
        <p className="mt-3 text-slate-700">
          See{" "}
          <Link href="/annual-report-requirements-by-state" className="text-[#1769AA] hover:underline">
            Annual Report Requirements by State
          </Link>{" "}
          and{" "}
          <Link href="/hidden-costs-of-forming-an-llc" className="text-[#1769AA] hover:underline">
            Hidden Costs of Forming an LLC
          </Link>{" "}
          for a clearer picture of ongoing obligations.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">3. Costs people often forget</h2>
        <div className="mt-4 space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-semibold text-[#102A43]">Registered agent</h3>
            <p className="mt-1 text-sm text-slate-600">
              Required in every state. You can often serve as your own agent for $0 if you have a qualifying physical address in the formation state. Commercial registered agent services typically cost $50–$300 per year and can add privacy and reliability.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-semibold text-[#102A43]">Publication requirements</h3>
            <p className="mt-1 text-sm text-slate-600">
              A small number of states require new LLCs to publish a notice in a local newspaper. New York is the most expensive and well-known example. Arizona and Nebraska can also have publication rules. These are usually one-time costs but can add hundreds of dollars in the first year.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-semibold text-[#102A43]">Local licenses, permits & EIN</h3>
            <p className="mt-1 text-sm text-slate-600">
              City and county business licenses are separate from state formation. An Employer Identification Number (EIN) is free from the IRS. Be cautious of third-party sites that charge for the same free IRS filing. See{" "}
              <Link href="/how-to-get-an-ein-for-free" className="text-[#1769AA] hover:underline">
                how to get an EIN for free
              </Link>
              .
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-semibold text-[#102A43]">Name reservation & expedited processing</h3>
            <p className="mt-1 text-sm text-slate-600">
              Some states let you reserve a name for a fee before filing. Expedited or same-day processing is also available in many states for an extra charge. These are optional but useful if timing matters.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">4. How cost fits into the formation process</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Knowing the cost is only useful if you also understand the steps. After you estimate your numbers with the calculator, the practical sequence is:
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Choose your formation state (usually where you live or primarily operate).</li>
          <li>Select and check a unique business name.</li>
          <li>Appoint a registered agent.</li>
          <li>File Articles of Organization / Certificate of Formation and pay the state fee.</li>
          <li>Create an operating agreement.</li>
          <li>Get a free EIN from the IRS if needed.</li>
          <li>Open a business bank account and stay compliant with annual reports.</li>
        </ol>
        <p className="mt-4">
          <Link href="/how-to-form-an-llc" className="font-medium text-[#1769AA] hover:underline">
            Full step-by-step: How to form an LLC →
          </Link>
          {" · "}
          <Link href="/how-long-does-it-take-to-start-an-llc" className="font-medium text-[#1769AA] hover:underline">
            How long does it take?
          </Link>
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">5. DIY vs formation services — cost perspective</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          You can file directly with the state in most cases. Formation services handle the paperwork and often include a year of registered agent service. They charge their own fee on top of the official state filing fee. The state fee itself does not disappear.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          If your situation is simple (single-member, home state, standard structure), DIY is usually cheaper. If you value convenience, privacy, or help with ongoing compliance, a reputable service can be worth the extra cost. Always separate the official state fee from the service fee when comparing options.
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
        <h2 className="text-xl font-bold">Calculate your exact state cost in 30 seconds</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-blue-100">
          Free, no signup. Official source links on every state. See 1-year, 3-year, and 5-year totals.
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
            <Link href="/how-to-form-an-llc" className="text-[#1769AA] hover:underline">
              How to Form an LLC (step-by-step)
            </Link>
          </li>
          <li>
            <Link href="/cheapest-states-to-form-an-llc" className="text-[#1769AA] hover:underline">
              Cheapest States to Form an LLC 2026
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
            <Link href="/business-structures/llc-vs-sole-proprietorship" className="text-[#1769AA] hover:underline">
              LLC vs Sole Proprietorship
            </Link>
          </li>
          <li>
            <Link href="/asset-protection" className="text-[#1769AA] hover:underline">
              Does an LLC Protect Personal Assets?
            </Link>
          </li>
          <li>
            <Link href="/how-to-get-an-ein-for-free" className="text-[#1769AA] hover:underline">
              How to Get an EIN for Free
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 text-xs leading-relaxed text-slate-500">
        Educational resource only. Fees and requirements change. Always confirm current amounts and rules on the official state website before filing. This site is not affiliated with any government agency.
      </p>
    </div>
  );
}
