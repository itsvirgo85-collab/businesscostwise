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
  title: { absolute: "Non-Resident LLC Cost Calculator (2026) — Your Currency" },
  description:
    "Forming a US LLC from abroad? Year-1 and 5-year costs for Wyoming, Delaware, New Mexico and all 50 states in 9 currencies, with an editable exchange rate.",
  alternates: { canonical: "/tools/non-resident-llc-cost-calculator" },
  openGraph: {
    title: "Non-Resident LLC Cost Calculator (2026) — Your Currency",
    description:
      "Forming a US LLC from abroad? Year-1 and 5-year costs for Wyoming, Delaware, New Mexico and all 50 states in 9 currencies, with an editable exchange rate.",
    type: "website",
    url: "/tools/non-resident-llc-cost-calculator",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Non-Resident LLC Cost Calculator (2026) — Your Currency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Non-Resident LLC Cost Calculator (2026) — Your Currency",
    description:
      "Forming a US LLC from abroad? Year-1 and 5-year costs for Wyoming, Delaware, New Mexico and all 50 states in 9 currencies, with an editable exchange rate.",
    images: ["/twitter-image"],
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
  const wy1Agent =
    (wyoming.formationFee ?? 0) +
    calculateRecurringStateFees(wyoming, 1) +
    DEFAULT_AGENT_COST_PER_YEAR;
  const gbpRate = getDefaultRate("GBP");
  const wy1AgentGbp = formatConverted(convertUsd(wy1Agent, gbpRate), "GBP");
  const wy5AgentGbp = formatConverted(convertUsd(wy5Agent, gbpRate), "GBP");

  const calculatorJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Non-Resident LLC Cost Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free educational calculator for non-resident founders estimating Year-1 and 5-year US LLC costs by state, in nine home currencies with an editable exchange rate.",
  };

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
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorJsonLd) }}
      />
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
        Non-Resident LLC Cost Calculator 2026
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
