import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import NonResidentCalculator from "@/components/calculators/NonResidentCalculator";
import { getStateBySlug } from "@/data/stateFees";
import {
  DEFAULT_AGENT_COST_PER_YEAR,
  FX_RATE_DATE,
  convertUsd,
  formatConverted,
  formatUsd,
  getDefaultRate,
  isNonResidentCurrencyCode,
  type NonResidentCurrencyCode,
} from "@/lib/nonResidentCost";
import { calculateFiveYearStateCost, calculateRecurringStateFees } from "@/lib/stateCost";

export const metadata: Metadata = {
  title: { absolute: "Non Resident LLC Cost Calculator (2026) — Your Currency" },
  description:
    "Forming a US LLC from abroad? Year-1 and 5-year costs for Wyoming, Delaware, New Mexico and all 50 states in 9 currencies, with an editable exchange rate.",
  alternates: { canonical: "/tools/non-resident-llc-cost-calculator" },
  openGraph: {
    title: "Non Resident LLC Cost Calculator (2026) — Your Currency",
    description:
      "Forming a US LLC from abroad? Year-1 and 5-year costs for Wyoming, Delaware, New Mexico and all 50 states in 9 currencies, with an editable exchange rate.",
    type: "website",
    url: "/tools/non-resident-llc-cost-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Non Resident LLC Cost Calculator (2026) — Your Currency",
    description:
      "Forming a US LLC from abroad? Year-1 and 5-year costs for Wyoming, Delaware, New Mexico and all 50 states in 9 currencies, with an editable exchange rate.",
  },
};

export default async function NonResidentCalculatorPage({
  searchParams,
}: {
  searchParams: Promise<{ currency?: string; state?: string }>;
}) {
  const params = await searchParams;
  const currencyParam = (params.currency ?? "").toUpperCase();
  const currencyCode: NonResidentCurrencyCode = isNonResidentCurrencyCode(
    currencyParam,
  )
    ? currencyParam
    : "GBP";
  const stateParam = (params.state ?? "").toLowerCase();
  const stateRecord = getStateBySlug(stateParam);
  const initialStateSlug =
    stateRecord && stateRecord.status === "verified" ? stateParam : "wyoming";

  // Dynamic state fees — never hardcoded. Five-year totals count five
  // recurring payments (site convention).
  const nm5 = calculateFiveYearStateCost(getStateBySlug("new-mexico")!);
  const wy5 = calculateFiveYearStateCost(getStateBySlug("wyoming")!);
  const de5 = calculateFiveYearStateCost(getStateBySlug("delaware")!);
  const agent5 = 5 * DEFAULT_AGENT_COST_PER_YEAR;
  const nm5Agent = nm5 + agent5;
  const wy5Agent = wy5 + agent5;
  const de5Agent = de5 + agent5;
  const wyoming = getStateBySlug("wyoming")!;
  const newMexico = getStateBySlug("new-mexico")!;
  const delaware = getStateBySlug("delaware")!;
  const wy1Agent =
    (wyoming.formationFee ?? 0) +
    calculateRecurringStateFees(wyoming, 1) +
    DEFAULT_AGENT_COST_PER_YEAR;
  const nm1 =
    (newMexico.formationFee ?? 0) +
    calculateRecurringStateFees(newMexico, 1);
  const wy1 =
    (wyoming.formationFee ?? 0) +
    calculateRecurringStateFees(wyoming, 1);
  const de1 =
    (delaware.formationFee ?? 0) +
    calculateRecurringStateFees(delaware, 1);
  const nm1Agent = nm1 + DEFAULT_AGENT_COST_PER_YEAR;
  const de1Agent = de1 + DEFAULT_AGENT_COST_PER_YEAR;
  const gbpRate = getDefaultRate("GBP");
  const wy1AgentGbp = formatConverted(convertUsd(wy1Agent, gbpRate), "GBP");
  const wy5AgentGbp = formatConverted(convertUsd(wy5Agent, gbpRate), "GBP");

  const faqs = [
    {
      question: "How much does a US LLC cost over 5 years?",
      answer: `State fees alone over five years are ${formatUsd(nm5)} in New Mexico, ${formatUsd(wy5)} in Wyoming and ${formatUsd(de5)} in Delaware, counting five annual payments. Add a $${DEFAULT_AGENT_COST_PER_YEAR}-a-year registered agent and the totals become ${formatUsd(nm5Agent)}, ${formatUsd(wy5Agent)} and ${formatUsd(de5Agent)}. Your total depends on the state, the agent, and any mail forwarding — use the calculator above for your exact combination.`,
    },
    {
      question: "How much does a US LLC cost in British pounds?",
      answer: `A Wyoming LLC costs about ${wy1AgentGbp} in year one and ${wy5AgentGbp} over five years with a $${DEFAULT_AGENT_COST_PER_YEAR}-a-year agent, at the ${FX_RATE_DATE} rate of £${gbpRate} per $1 — converted figures are estimates, not bank rates. Change the rate in the calculator above to match your bank or card provider, or open it pre-set: /tools/non-resident-llc-cost-calculator?currency=GBP&state=wyoming`,
    },
    {
      question: "Can I form a US LLC from abroad without visiting the US?",
      answer:
        "Yes. You can form a US LLC entirely online from abroad — no US visit, visa, or local address is needed. You file the Articles of Organization online, appoint a registered agent with a physical address in the formation state (typically $99–$150 a year), and get your EIN by fax or phone. See the cost for your state: /tools/non-resident-llc-cost-calculator?state=wyoming",
    },
    {
      question: "How do I get an EIN without an SSN?",
      answer:
        "File Form SS-4 with the IRS by fax or phone — the online EIN application requires an SSN or ITIN, so it does not work for non-residents without one. On the form, write “Foreign” where it asks for an SSN. Processing by fax typically takes about a week; by phone it can be issued during the call.",
    },
    {
      question: "Do non-residents pay the same LLC fees as US residents?",
      answer:
        "Yes. States charge non-residents exactly the same formation and annual fees as US residents — there is no foreign-founder surcharge. The extra costs for non-residents are services, not state fees: a registered agent (typically $99–$150 a year), mail forwarding, and possibly a paid EIN filing service. The calculator above separates state fees from those services.",
    },
    {
      question: "What is the cheapest state for a non-resident LLC?",
      answer: `New Mexico is the cheapest on state fees: ${formatUsd(getStateBySlug("new-mexico")!.formationFee ?? 0)} to form and no annual report, so ${formatUsd(nm5)} over five years. Wyoming costs ${formatUsd(wy5)} over five years but adds privacy and a well-known court system; Delaware costs ${formatUsd(de5)} because of its ${formatUsd(getStateBySlug("delaware")!.franchiseTax ?? 0)} yearly tax. With a $${DEFAULT_AGENT_COST_PER_YEAR}-a-year agent, the five-year totals are ${formatUsd(nm5Agent)}, ${formatUsd(wy5Agent)} and ${formatUsd(de5Agent)}.`,
    },
    {
      question: "How much is the non resident llc cost for a US LLC?",
      answer: `State fees alone are ${formatUsd(nm5)} in New Mexico, ${formatUsd(wy5)} in Wyoming and ${formatUsd(de5)} in Delaware over five years, counting five recurring payments. With a $${DEFAULT_AGENT_COST_PER_YEAR}-a-year registered agent, the five-year totals become ${formatUsd(nm5Agent)}, ${formatUsd(wy5Agent)} and ${formatUsd(de5Agent)}. Price your exact state and currency here: /tools/non-resident-llc-cost-calculator?currency=GBP&state=wyoming`,
    },
    {
      question: "How much does a US LLC for non residents cost in year one?",
      answer: `Year one with a $${DEFAULT_AGENT_COST_PER_YEAR}-a-year registered agent costs ${formatUsd(nm1Agent)} in New Mexico, ${formatUsd(wy1Agent)} in Wyoming and ${formatUsd(de1Agent)} in Delaware, using verified state fees. The state part alone is ${formatUsd(nm1)}, ${formatUsd(wy1)} and ${formatUsd(de1)}, before the agent. Non-residents pay the same state fees as US residents, with no foreign-founder surcharge. Check your state here: /tools/non-resident-llc-cost-calculator?state=new-mexico`,
    },
    {
      question: "What does the Wyoming LLC cost calculator show for a non-resident LLC?",
      answer: `It shows Wyoming at ${formatUsd(wyoming.formationFee ?? 0)} to form plus ${formatUsd(wyoming.annualFee ?? 0)} a year, so ${formatUsd(wy1)} in year one and ${formatUsd(wy5)} over five years in state fees alone. With a $${DEFAULT_AGENT_COST_PER_YEAR}-a-year registered agent, the totals become ${formatUsd(wy1Agent)} in year one and ${formatUsd(wy5Agent)} over five years. Compare all three low-cost states here: /tools/non-resident-llc-cost-calculator?currency=GBP&state=wyoming`,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Tools", item: "/tools" },
          {
            name: "Non-Resident LLC Calculator",
            item: "/tools/non-resident-llc-cost-calculator",
          },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        Non Resident LLC Cost Calculator 2026
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        Forming a US LLC from outside the United States? Pick your state and
        your home currency to see what the first year and the first five years
        actually cost — state filing fees, the registered agent, mail
        forwarding, and the EIN — in US dollars and in your own currency.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        Non-residents pay exactly the same state fees as US residents. The
        calculator defaults to Wyoming, the usual pick for founders abroad,
        with one-click switches to Delaware and New Mexico. Share a pre-filled
        result with the <code>?currency=</code> and <code>?state=</code>{" "}
        address parameters — for example{" "}
        <Link
          href="/tools/non-resident-llc-cost-calculator?currency=INR&state=wyoming"
          className="text-[#1769AA] hover:underline"
        >
          Wyoming costs in INR
        </Link>
        .
      </p>

      <p className="mt-3 max-w-3xl text-sm text-slate-500">
        Educational tool only. Operational and published state filing fees
        only — not tax or legal advice.
      </p>

      <div className="mt-10">
        <NonResidentCalculator
          initialCurrencyCode={currencyCode}
          initialStateSlug={initialStateSlug}
        />
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          What the calculator includes
        </h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>
            State formation filing fee and recurring state fees (annual report
            or franchise tax) from verified state data — never a hardcoded
            figure.
          </li>
          <li>
            Registered agent, which every LLC needs and which non-residents
            cannot skip — a foreign address does not qualify.
          </li>
          <li>
            Optional US mail forwarding / virtual mailbox, and the EIN either
            filed yourself for $0 (IRS Form SS-4 by fax or mail) or through a
            paid service.
          </li>
          <li>
            Year-1 and 5-year totals in USD and your home currency, at an
            exchange rate you can edit. Converted figures are estimates based
            on the {FX_RATE_DATE} rate.
          </li>
        </ul>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Why five years, and why five payments?
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          A five-year total on this site counts five recurring payments — the
          annual report or franchise tax is due in each of the five years, so
          Wyoming&apos;s five-year state total is {formatUsd(wy5)} (
          {formatUsd(wyoming.formationFee ?? 0)} formation plus five{" "}
          {formatUsd(wyoming.annualFee ?? 0)} annual reports) and
          Delaware&apos;s is {formatUsd(de5)} (
          {formatUsd(getStateBySlug("delaware")!.formationFee ?? 0)} formation
          plus five{" "}
          {formatUsd(getStateBySlug("delaware")!.franchiseTax ?? 0)} yearly
          taxes). Some other sites count only four payments and understate the
          total; this calculator follows the same convention as every state
          page on this site.
        </p>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          What non-residents still need after forming
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The EIN comes first — most banks ask for it before opening an
          account, and most US banks still want an in-person visit with your
          passport. A foreign-owned single-member LLC also has annual US
          reporting duties (Form 5472 with a pro forma Form 1120). Read the
          full walkthrough in our{" "}
          <Link
            href="/guides/non-resident-llc"
            className="text-[#1769AA] hover:underline"
          >
            non-resident LLC guide
          </Link>{" "}
          and the free-EIN steps in{" "}
          <Link
            href="/how-to-get-an-ein-for-free"
            className="text-[#1769AA] hover:underline"
          >
            how to get an EIN for free
          </Link>
          .
        </p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Wyoming LLC cost calculator — Wyoming vs Delaware vs New Mexico
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Wyoming is the calculator&apos;s default state for non-residents:{" "}
          {formatUsd(wyoming.formationFee ?? 0)} to form plus{" "}
          {formatUsd(wyoming.annualFee ?? 0)} a year. The table below compares
          the three lowest-cost states in state fees alone, and with a $
          {DEFAULT_AGENT_COST_PER_YEAR}-a-year registered agent. Five-year
          totals count five recurring payments.
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">State</th>
                <th className="px-4 py-3 font-medium">Formation</th>
                <th className="px-4 py-3 font-medium">Recurring / year</th>
                <th className="px-4 py-3 font-medium">Year 1 (state only)</th>
                <th className="px-4 py-3 font-medium">5-year (state only)</th>
                <th className="px-4 py-3 font-medium">Year 1 with agent</th>
                <th className="px-4 py-3 font-medium">5-year with agent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-4 py-3 font-semibold">Wyoming</td>
                <td className="px-4 py-3">{formatUsd(wyoming.formationFee ?? 0)}</td>
                <td className="px-4 py-3">{formatUsd(wyoming.annualFee ?? 0)}</td>
                <td className="px-4 py-3">{formatUsd(wy1)}</td>
                <td className="px-4 py-3 font-semibold">{formatUsd(wy5)}</td>
                <td className="px-4 py-3">{formatUsd(wy1Agent)}</td>
                <td className="px-4 py-3 font-semibold">{formatUsd(wy5Agent)}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">New Mexico</td>
                <td className="px-4 py-3">{formatUsd(newMexico.formationFee ?? 0)}</td>
                <td className="px-4 py-3">$0</td>
                <td className="px-4 py-3">{formatUsd(nm1)}</td>
                <td className="px-4 py-3 font-semibold">{formatUsd(nm5)}</td>
                <td className="px-4 py-3">{formatUsd(nm1Agent)}</td>
                <td className="px-4 py-3 font-semibold">{formatUsd(nm5Agent)}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">Delaware</td>
                <td className="px-4 py-3">{formatUsd(delaware.formationFee ?? 0)}</td>
                <td className="px-4 py-3">{formatUsd(delaware.franchiseTax ?? 0)}</td>
                <td className="px-4 py-3">{formatUsd(de1)}</td>
                <td className="px-4 py-3 font-semibold">{formatUsd(de5)}</td>
                <td className="px-4 py-3">{formatUsd(de1Agent)}</td>
                <td className="px-4 py-3 font-semibold">{formatUsd(de5Agent)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-slate-600">
          Delaware&apos;s recurring figure is its{" "}
          {formatUsd(delaware.franchiseTax ?? 0)} yearly LLC tax — Delaware
          LLCs file no annual report. New Mexico has no annual report fee.
        </p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          US LLC cost by home country
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Each country guide prices a US LLC in your home currency. Open your
          guide below, or use the calculator above with your currency
          pre-selected.
        </p>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <Link href="/guides/us-llc-cost-from-uk?currency=GBP" className="text-[#1769AA] hover:underline">
              US LLC cost from the UK — in GBP
            </Link>
          </li>
          <li>
            <Link href="/guides/us-llc-cost-from-canada?currency=CAD" className="text-[#1769AA] hover:underline">
              US LLC cost from Canada — in CAD
            </Link>
          </li>
          <li>
            <Link href="/guides/us-llc-cost-from-australia?currency=AUD" className="text-[#1769AA] hover:underline">
              US LLC cost from Australia — in AUD
            </Link>
          </li>
          <li>
            <Link href="/guides/us-llc-cost-from-new-zealand?currency=NZD" className="text-[#1769AA] hover:underline">
              US LLC cost from New Zealand — in NZD
            </Link>
          </li>
          <li>
            <Link href="/guides/us-llc-cost-from-germany?currency=EUR" className="text-[#1769AA] hover:underline">
              US LLC cost from Germany — in EUR
            </Link>
          </li>
          <li>
            <Link href="/guides/us-llc-cost-from-netherlands?currency=EUR" className="text-[#1769AA] hover:underline">
              US LLC cost from the Netherlands — in EUR
            </Link>
          </li>
          <li>
            <Link href="/guides/us-llc-cost-from-ireland?currency=EUR" className="text-[#1769AA] hover:underline">
              US LLC cost from Ireland — in EUR
            </Link>
          </li>
          <li>
            <Link href="/guides/us-llc-cost-from-singapore?currency=SGD" className="text-[#1769AA] hover:underline">
              US LLC cost from Singapore — in SGD
            </Link>
          </li>
          <li>
            <Link href="/guides/us-llc-cost-from-dubai?currency=AED" className="text-[#1769AA] hover:underline">
              US LLC cost from Dubai &amp; the UAE — in AED
            </Link>
          </li>
          <li>
            <Link href="/guides/us-llc-cost-from-india?currency=INR" className="text-[#1769AA] hover:underline">
              US LLC cost from India — in INR
            </Link>
          </li>
        </ul>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Frequently asked questions
        </h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-xl border border-slate-200 bg-white p-5"
            >
              <summary className="cursor-pointer list-none font-semibold text-[#102A43]">
                <span className="flex items-center justify-between">
                  {f.question}
                  <span className="ml-4 text-slate-400 transition group-open:rotate-180">
                    ▼
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-slate-600 leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-12 max-w-3xl rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">
          Related tools &amp; guides
        </h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link
              href="/guides/non-resident-llc"
              className="text-[#1769AA] hover:underline"
            >
              Non-Resident LLC Guide — Can a Non-Resident Form an LLC in the USA?
            </Link>
          </li>
          <li>
            <Link
              href="/how-to-get-an-ein-for-free"
              className="text-[#1769AA] hover:underline"
            >
              How to Get an EIN for Free
            </Link>
          </li>
          <li>
            <Link
              href="/tools/registered-agent-cost-calculator"
              className="text-[#1769AA] hover:underline"
            >
              Registered Agent Cost Calculator
            </Link>
          </li>
          <li>
            <Link
              href="/llc-cost-calculator"
              className="text-[#1769AA] hover:underline"
            >
              LLC Cost Calculator
            </Link>
          </li>
          <li>
            <Link
              href="/tools/best-state-to-form-an-llc"
              className="text-[#1769AA] hover:underline"
            >
              Best State to Form an LLC Finder
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Educational information only. This calculator and page provide general
        estimates and explanations. They are not tax or legal advice. Always
        confirm current fees with the Secretary of State (or equivalent agency)
        of the relevant state and the IRS for EIN filing. This site is not
        affiliated with any government agency.
      </p>
    </div>
  );
}
