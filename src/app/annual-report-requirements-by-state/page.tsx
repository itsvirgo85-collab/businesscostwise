import type { Metadata } from "next";
import Link from "next/link";
import { STATE_FEES } from "@/data/stateFees";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import AnnualReportCalculator from "@/components/calculators/AnnualReportCalculator";
import AnnualReportTable from "@/components/calculators/AnnualReportTable";

export const metadata: Metadata = {
  title: { absolute: "LLC Annual Report Fee Calculator by State 2026 — $0 States" },
  description:
    "LLC annual report fees for all 50 states + DC: check any state's fee, frequency and 5-year renewal total, which states charge $0, and missed-deadline penalties.",
  alternates: { canonical: "/annual-report-requirements-by-state" },
  openGraph: {
    title: "LLC Annual Report Fee Calculator by State 2026 — $0 States",
    description:
      "LLC annual report fees for all 50 states + DC: check any state's fee, frequency and 5-year renewal total, which states charge $0, and missed-deadline penalties.",
    type: "article",
    url: "/annual-report-requirements-by-state",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "LLC Annual Report Fees by State 2026 — $0 States & Deadlines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LLC Annual Report Fee Calculator by State 2026 — $0 States",
    description:
      "LLC annual report fees for all 50 states + DC: check any state's fee, frequency and 5-year renewal total, which states charge $0, and missed-deadline penalties.",
    images: ["/twitter-image"],
  },
};

export default function AnnualReportPage() {
  const verified = STATE_FEES.filter((s) => s.status === "verified");
  const delaware = verified.find((s) => s.slug === "delaware");
  const california = verified.find((s) => s.slug === "california");
  const zeroReportStates = verified
    .filter((s) => (s.annualFee ?? null) === 0 && (s.franchiseTax ?? 0) === 0)
    .map((s) => s.state);

  const noRecurring = verified.filter(
    (s) =>
      (s.annualFee == null || s.annualFee === 0) &&
      (s.franchiseTax == null || s.franchiseTax === 0)
  );

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
      question: "Is a franchise tax the same as an annual report fee?",
      answer:
        "Not always. Some states charge a simple report fee. Others impose a franchise tax, privilege tax, or minimum tax that can be much larger. California’s $800 annual franchise tax is the best-known example of a recurring cost that goes well beyond a basic report fee.",
    },
    {
      question: "How can I stay on top of annual report deadlines?",
      answer:
        "Calendar the deadline as soon as you form the LLC. Keep your registered agent information current, and consider using a commercial registered agent service that tracks filing deadlines for you.",
    },
    {
      question: "How much does it cost to renew an LLC?",
      answer:
        "Renewing an LLC usually means filing the annual (or biennial) report and paying its fee. In our verified data the report fee runs from $0 to $500 per filing — for example $50 in Georgia and Virginia, $100 in Oregon, $350 a year in Nevada (the annual list plus the State Business License), and $500 in Massachusetts. Some states add a franchise or entity tax on top, such as California's $800 annual tax. A few states have no report to renew at all. Check your state's page for the exact renewal cost.",
    },
    {
      question: "Do I still need to file a BOI report for my LLC?",
      answer:
        "No, if your LLC was formed in the US. FinCEN's final rule effective 14 August 2026 permanently exempts US-formed companies and US persons from beneficial ownership (BOI) reporting. Only companies formed under foreign law that register to do business in a US state still report — within 30 days of registration. New York's LLC Transparency Act (in effect from 1 January 2026) is a separate state disclosure for NY LLCs.",
    },
    {
      question: "How much does an LLC cost per year in ongoing state renewal fees?",
      answer:
        `Ongoing state renewal fees range from $0 a year in states like ${zeroReportStates.slice(0, 4).join(", ")} to $${delaware?.franchiseTax ?? 400} a year in Delaware and $${california?.franchiseTax ?? 800} a year in California. Many states charge between $25 and $150 a year or every two years to keep an LLC in good standing. Use the 51-state Annual Report Fee Calculator above to check your state's exact fee and 5-year renewal total.`,
    },
    {
      question: "Why did Delaware's annual LLC fee increase to $400 in 2026, and when is it due?",
      answer:
        `Under Delaware House Bill 400, the flat annual LLC tax rose from $300 to $${delaware?.franchiseTax ?? 400} a year starting with tax year 2026. Delaware LLCs file no annual report, but every active LLC must pay the $${delaware?.franchiseTax ?? 400} by June 1 each year, regardless of revenue. Missing the deadline triggers a $200 late penalty plus 1.5% monthly interest.`,
    },
    {
      question: "Which US states have a $0 annual report fee for LLCs?",
      answer:
        `Several states charge $0 in annual Secretary of State report fees, including ${zeroReportStates.join(", ")}. Some still require the filing itself even though the fee is $0. Even in $0-report states, budget for a registered agent if you have no physical street address in that state.`,
    },
    {
      question: "What happens operationally if I miss a US state annual report deadline?",
      answer:
        "Missing an annual report deadline triggers an automatic state late penalty — from $25 plus interest in Arkansas to $400 in Florida and $200 plus 1.5% monthly interest in Delaware. If left unpaid, the Secretary of State marks the LLC “Delinquent” or “Administratively Dissolved,” and restoring good standing requires a reinstatement filing plus all back-owed annual fees.",
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

      <section className="mt-8 rounded-2xl border border-[#1769AA]/30 bg-blue-50/60 p-6">
        <h2 className="text-2xl font-bold text-[#102A43]">
          States with no (or $0) recurring report fee
        </h2>
        <p className="mt-2 text-slate-700">
          {noRecurring.length} of the 51 jurisdictions charge $0 in recurring
          state report fees in verified data — including New Mexico, Arizona
          and Ohio. Some of these states may still require the filing itself,
          or other taxes, even when the report fee is $0.
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

      <div className="mt-8">
        <AnnualReportCalculator />
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">
          All 51 jurisdictions — report fee, frequency &amp; 5-year renewal
        </h2>
        <p className="mt-2 text-slate-600">
          Search or filter by filing frequency. The 5-year renewal total is the
          recurring state cost over five years (formation fee excluded).
        </p>
        <div className="mt-6">
          <AnnualReportTable />
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
