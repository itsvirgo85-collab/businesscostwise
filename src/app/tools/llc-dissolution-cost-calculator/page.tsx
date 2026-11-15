import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DissolutionCalculator from "@/components/calculators/DissolutionCalculator";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "LLC Dissolution Cost Calculator: Closing Cost by State (2026)" },
  description:
    "How much does it cost to dissolve an LLC? State filing fee plus unpaid annual fees and franchise tax, with tax-clearance warnings, for all 50 states + DC.",
  alternates: { canonical: "/tools/llc-dissolution-cost-calculator" },
  openGraph: {
    title: "LLC Dissolution Cost Calculator: Closing Cost by State (2026)",
    description:
      "How much does it cost to dissolve an LLC? State filing fee plus unpaid annual fees and franchise tax, with tax-clearance warnings, for all 50 states + DC.",
    type: "website",
    url: "/tools/llc-dissolution-cost-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "LLC Dissolution Cost Calculator: Closing Cost by State (2026)",
    description:
      "How much does it cost to dissolve an LLC? State filing fee plus unpaid annual fees and franchise tax, with tax-clearance warnings, for all 50 states + DC.",
    images: ["/twitter-image"],
  },
};

export default function DissolutionCalculatorPage() {
  const calculatorJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LLC Dissolution Cost Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free educational calculator estimating the cost of dissolving a US LLC: state filing fee plus unpaid annual report and franchise tax fees.",
  };

  const faqs = [
    {
      question: "How much does it cost to dissolve an LLC?",
      answer:
        "The state filing fee ranges from $0 to $220 depending on the state — some states charge nothing, others charge $100–$220. The bigger costs are often what is still owed: unpaid annual report fees and franchise tax, final tax preparation, and any debts that must be settled first. Use the calculator above for your state's total.",
    },
    {
      question: "What are the steps to close an LLC?",
      answer:
        "Vote to dissolve under the operating agreement and record it in writing, stop taking new business, settle debts and collect what is owed, cancel licences and permits, file the dissolution form with the Secretary of State, file a final federal tax return (marked final) and final state returns, and close the business bank account.",
    },
    {
      question: "Do I need a tax clearance certificate to dissolve an LLC?",
      answer:
        "Some states require one before they accept the dissolution filing — Pennsylvania, Tennessee, and Texas are the commonly cited examples, with Rhode Island and New Hampshire also reported. A tax clearance confirms all state taxes are paid. If your state requires it, get the clearance first; the filing will be rejected without it.",
    },
    {
      question: "What happens if I just stop filing and let the LLC lapse?",
      answer:
        "The state will eventually administratively dissolve it for missing annual reports — but until then, annual fees and penalties keep accruing. Creditors can still pursue the LLC, and in some states the members can face personal exposure once the LLC loses good standing. A formal dissolution is cleaner and usually cheaper than years of penalties.",
    },
    {
      question: "How much does it cost to dissolve an LLC in Delaware?",
      answer:
        "The Certificate of Cancellation costs $220, which includes the $200 base fee plus a $20 municipality fee (fee schedule revised 1 August 2026). All annual LLC taxes must be paid first — $400 for tax year 2026 onward, with no proration — so the real cost is $220 plus any unpaid annual tax.",
    },
    {
      question: "How much does it cost to dissolve an LLC in Delaware?",
      answer: "The Certificate of Cancellation costs $220 ($200 filing fee plus a $20 municipality fee), and all outstanding annual taxes must be paid first — $400 for tax year 2026, with no proration. A Delaware LLC with one unpaid year costs about $620 to close; with two unpaid years, about $1,020. The calculator above adds the back taxes automatically when you select the unpaid years.",
    },
    {
      question: "Do I need a tax clearance certificate to close my LLC in Texas?",
      answer: "Yes. Texas requires a certificate of account status from the Comptroller before the Secretary of State will accept the Certificate of Termination, and the filing fee is $40. Pennsylvania, Tennessee, Rhode Island and New Hampshire have similar clearance requirements. The calculator flags these states with a warning when you select them.",
    },
    {
      question: "What happens if I just stop filing and let my LLC lapse?",
      answer: "The state will eventually dissolve it administratively, but the fees keep accruing in the meantime — and in states like Delaware and California the annual tax keeps running until the LLC is formally closed. You also stay personally exposed for any debts or lawsuits filed against the LLC while it exists. A formal dissolution costs $0–$220 in filing fees and ends the liability; letting it lapse is the most expensive way to close.",
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
          { name: "LLC Dissolution Cost Calculator", item: "/tools/llc-dissolution-cost-calculator" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        LLC Dissolution Cost Calculator 2026
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        Closing an LLC costs more than the filing fee. The state charges to accept the dissolution — from $0 to $220 — and most states will not accept it until unpaid annual fees and franchise tax are settled too.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        This calculator adds the filing fee, what is still owed, and final tax preparation, for all 50 states and DC. Fees are from 2026 sources; Delaware and Louisiana were confirmed against official state schedules, and the rest are labelled as estimates to confirm with the Secretary of State.
      </p>

      <p className="mt-3 max-w-3xl text-sm text-slate-500">
        Educational tool only. Not legal or tax advice.
      </p>

      <div className="mt-10">
        <DissolutionCalculator />
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">What dissolution costs, beyond the filing fee</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The filing fee is usually the smallest line item. What catches people out is the backlog: a year or two of unpaid annual reports, a franchise tax bill for the final year, and the final tax return. In Delaware, for example, the $220 cancellation fee sits on top of the $400 annual tax, which must be paid in full with no proration. In Arkansas, the $50 filing fee comes with a $150 final franchise tax report.
        </p>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Tax clearance: the step that delays most dissolutions</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Pennsylvania, Tennessee, and Texas commonly require a tax clearance certificate before the dissolution filing is accepted, and Rhode Island and New Hampshire are also reported to require one. A clearance confirms every state tax is paid — and getting one can take weeks, so start it before you file anything else. The calculator flags these states for you.
        </p>
      </section>

      <figure className="mt-10 max-w-3xl">
        <Image
          src="/images/llc-dissolution-cost.svg"
          alt="LLC dissolution cost calculator with state filing fees and unpaid annual fees"
          width={1200}
          height={630}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-xl border border-slate-200"
        />
        <figcaption className="mt-2 text-sm text-slate-500">Filing fees run $0 to $220 by state; unpaid annual fees are usually the bigger cost.</figcaption>
      </figure>
      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">How much does it cost to dissolve an LLC in Delaware?</h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          $220 to file the Certificate of Cancellation ($200 filing fee plus the $20
          municipality fee on the Division of Corporations fee schedule revised 1 August
          2026), and you must pay all outstanding annual taxes first — $400 for tax year
          2026, with no proration, so dissolving in January costs the same $400 as
          dissolving in December. If you owe two years of annual tax, the real cost of
          closing is $220 plus $800. Enter Delaware and your unpaid years in the calculator
          above and it adds the back taxes to the filing fee automatically.
        </p>
      </section>
      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">How much does it cost to dissolve an LLC in California?</h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          The filing itself is free — California charges $0 for the Certificate of
          Cancellation — but the tax bill is not. You must file a final Form 568 and pay
          the $800 annual franchise tax for the year you dissolve (unless you dissolve
          within 12 months of forming and never did business, in which case the first-year
          tax can be waived). A California LLC with two unpaid years therefore costs about
          $1,600 to close, not $0. The same pattern holds everywhere: the filing fee in the
          calculator is the small number; the unpaid annual fees are the big one. Our{" "}
          <Link href="/guides/how-to-dissolve-an-llc" className="text-[#1769AA] hover:underline">
            step-by-step guide to dissolving an LLC
          </Link>{" "}
          covers the order of operations — vote, settle debts, file, then the final tax
          return.
        </p>
      </section>
      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Frequently asked questions</h2>
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

      <section className="mt-12 max-w-3xl rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Related tools &amp; guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/guides/how-to-dissolve-an-llc" className="text-[#1769AA] hover:underline">
              How to Dissolve an LLC — steps and checklist
            </Link>
          </li>
          <li>
            <Link href="/guides/move-llc-to-another-state" className="text-[#1769AA] hover:underline">
              How to Move an LLC to Another State
            </Link>
          </li>
          <li>
            <Link href="/annual-report-requirements-by-state" className="text-[#1769AA] hover:underline">
              Annual Report Requirements by State
            </Link>
          </li>
          <li>
            <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">
              LLC Cost Calculator
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Educational information only. This calculator and page provide general estimates and explanations. They are not legal or tax advice. Dissolution fees are from 2026 secondary sources except Delaware and Louisiana (official schedules); confirm the fee and any tax-clearance requirement with the Secretary of State before filing. This site is not affiliated with any government agency.
      </p>
    </div>
  );
}
