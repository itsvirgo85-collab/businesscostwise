import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata: Metadata = {
  title: "How to Get an EIN for Free (IRS) — No Third-Party Fees",
  description:
    "How to get an EIN for free directly from the IRS. Online application steps, who needs an EIN, and how to avoid paid third-party services.",
  alternates: { canonical: "/how-to-get-an-ein-for-free" },
};

export default function GetEINFreePage() {
  const faqs = [
    {
      question: "How to get an EIN for free?",
      answer:
        "Apply directly on the IRS website using the online EIN application. The EIN is issued free of charge by the IRS. You do not need to pay a third-party website for the number itself.",
    },
    {
      question: "Is the EIN free?",
      answer:
        "Yes. The IRS does not charge a fee to issue an Employer Identification Number. Services that charge for an EIN are charging for convenience, not for the government filing.",
    },
    {
      question: "Do I need an EIN for a single-member LLC?",
      answer:
        "A single-member LLC with no employees may sometimes use the owner’s SSN for federal taxes, but many banks require an EIN to open a business account. Multi-member LLCs and LLCs with employees generally need an EIN.",
    },
    {
      question: "How long does it take to get an EIN?",
      answer:
        "Online applications completed during IRS service hours usually receive the EIN immediately. Keep a copy of the confirmation notice.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Get an EIN for Free</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">
        How to Get an EIN for Free
      </h1>
      <p className="mt-3 text-slate-600 leading-relaxed">
        An Employer Identification Number (EIN) is a federal tax ID issued by the IRS. You can obtain one at{" "}
        <strong>no cost</strong> on the official IRS website. This page explains the steps and how to avoid unnecessary third-party fees.
      </p>

      <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-950">
        <strong>Key point:</strong> The IRS does not charge for an EIN. If a website asks you to pay only for the EIN number, apply on IRS.gov instead.
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">Steps to get an EIN free online</h2>
        <ol className="mt-4 space-y-3 text-sm text-slate-700">
          <li><strong>1.</strong> Form your LLC with the state first (or have responsible party details ready).</li>
          <li><strong>2.</strong> Go to the official IRS EIN online application (confirm domain is irs.gov).</li>
          <li><strong>3.</strong> Complete the form: entity type (LLC), responsible party, addresses, reason for applying.</li>
          <li><strong>4.</strong> Submit during IRS online hours. Save the EIN confirmation notice immediately.</li>
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">When you typically need an EIN</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          <li>• Multi-member LLC</li>
          <li>• Hiring employees</li>
          <li>• Opening a business bank account (most banks require it)</li>
          <li>• Certain tax elections (for example, electing S-corporation taxation)</li>
        </ul>
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
        <h2 className="text-lg font-semibold text-[#102A43]">Related guides</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link href="/how-to-form-an-llc" className="text-[#1769AA] hover:underline">How to form an LLC</Link></li>
          <li><Link href="/how-long-does-it-take-to-start-an-llc" className="text-[#1769AA] hover:underline">How long does it take to start an LLC?</Link></li>
          <li><Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">LLC cost calculator</Link></li>
        </ul>
      </section>

      <p className="mt-10 text-xs text-slate-500">
        Educational only. Always use the official IRS website for EIN applications.
      </p>
    </div>
  );
}
