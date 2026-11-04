import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata: Metadata = {
  title: "How to Form an LLC — Step-by-Step Guide (2026)",
  description:
    "How to open an LLC in the US: choose a name, appoint a registered agent, file Articles of Organization, get an EIN, and open a business bank account. State filing fees from $35.",
};

export default function HowToFormLLCPage() {
  const faqs = [
    {
      question: "How to open an LLC?",
      answer:
        "Choose a unique business name, appoint a registered agent with an in-state address, file Articles (or Certificate) of Organization with your state and pay the filing fee, create an operating agreement, obtain an EIN from the IRS if needed, and open a dedicated business bank account.",
    },
    {
      question: "How to create an LLC without a lawyer?",
      answer:
        "Most states allow you to file online through the Secretary of State website. You can serve as your own registered agent if you have a qualifying physical address in the state. An operating agreement can be written yourself for a simple single-member LLC, though professional review is wise for multi-member or complex ownership.",
    },
    {
      question: "How much does it cost to form an LLC?",
      answer:
        "State filing fees range from about $35 (Montana) to $500 (Massachusetts). Additional costs may include annual reports, franchise taxes, registered agent service, and publication in a few states. Use the free LLC cost calculator for your state.",
    },
    {
      question: "Do I need an operating agreement?",
      answer:
        "Some states require one; most do not. Even when optional, a written operating agreement helps document ownership, management, and profit sharing and supports the separation between you and the company.",
    },
  ];

  const steps = [
    {
      title: "Choose and check your business name",
      detail:
        "Pick a name that meets your state’s LLC naming rules (usually must include “LLC” or similar and not be confusingly similar to an existing entity). Search your state’s business entity database before filing.",
    },
    {
      title: "Appoint a registered agent",
      detail:
        "Every state requires a registered agent with a physical street address in that state to receive legal documents. You can often serve as your own agent, or hire a commercial service (typically $50–$300/year).",
    },
    {
      title: "File formation documents with the state",
      detail:
        "File Articles of Organization (sometimes called Certificate of Formation or Certificate of Organization) with the Secretary of State or equivalent agency and pay the official filing fee. Many states offer online filing.",
    },
    {
      title: "Create an operating agreement",
      detail:
        "Document how the LLC will be owned and managed. Single-member LLCs still benefit from a simple agreement. Multi-member LLCs should clearly define voting, contributions, and exit rules.",
    },
    {
      title: "Get an EIN (if needed)",
      detail:
        "Apply for a free Employer Identification Number from the IRS online. Required for multi-member LLCs, hiring employees, or opening many business bank accounts.",
    },
    {
      title: "Open a business bank account and stay compliant",
      detail:
        "Keep business and personal finances separate. File any required annual or biennial reports on time and pay franchise taxes where they apply so the LLC remains in good standing.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">How to Form an LLC</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">
        How to Form an LLC: Step-by-Step (2026)
      </h1>
      <p className="mt-3 text-slate-600 leading-relaxed">
        Forming a limited liability company is a state-level process. The exact forms and fees differ by state,
        but the sequence is similar everywhere. This guide walks through the practical steps so you know what
        to budget and where official filings happen. It is educational only — not legal advice.
      </p>

      <div className="mt-6 rounded-xl border border-[#1769AA]/30 bg-blue-50 p-5">
        <p className="text-sm text-slate-800">
          <strong>Quick cost range:</strong> State filing fees run from about <strong>$35 to $500</strong>.
          Use the{" "}
          <Link href="/llc-cost-calculator" className="font-medium text-[#1769AA] hover:underline">
            free LLC cost calculator
          </Link>{" "}
          for your state’s formation fee, annual reports, and multi-year total.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">Steps to create an LLC</h2>
        <div className="mt-6 space-y-4">
          {steps.map((s, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#102A43] text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-[#102A43]">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{s.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">How long does it take?</h2>
        <p className="mt-3 text-sm text-slate-700 leading-relaxed">
          Online filings in many states are approved in a few business days; some are same-day or next-day.
          Paper filings can take several weeks. See{" "}
          <Link href="/how-long-does-it-take-to-start-an-llc" className="text-[#1769AA] hover:underline">
            how long it takes to start an LLC
          </Link>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">Frequently asked questions</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-[#102A43] text-sm">{f.question}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Related tools & guides</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">LLC Cost Calculator</Link></li>
          <li><Link href="/how-much-does-it-cost-to-start-an-llc" className="text-[#1769AA] hover:underline">How much does it cost to start an LLC?</Link></li>
          <li><Link href="/how-to-get-an-ein-for-free" className="text-[#1769AA] hover:underline">How to get an EIN for free</Link></li>
          <li><Link href="/business-structures/llc-vs-sole-proprietorship" className="text-[#1769AA] hover:underline">LLC vs sole proprietorship</Link></li>
          <li><Link href="/cheapest-states-to-form-an-llc" className="text-[#1769AA] hover:underline">Cheapest states to form an LLC</Link></li>
        </ul>
      </section>

      <p className="mt-10 text-xs text-slate-500">
        Educational information only. State rules and fees change. Confirm every requirement on the official state website before filing.
      </p>
    </div>
  );
}
