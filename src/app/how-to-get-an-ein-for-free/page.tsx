import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "How to Get an EIN for Free (IRS) — No Third-Party Fees (2026)",
  description:
    "How to get an EIN for free directly from the IRS. Online application steps, who needs an EIN, and how to avoid paid third-party services. Educational guide.",
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
    {
      question: "Can I get an EIN before my LLC is approved?",
      answer:
        "In most cases you should form the LLC with the state first so you can accurately list the entity type and formation details. Some applicants apply after state approval to avoid mismatches.",
    },
    {
      question: "What if I lose my EIN confirmation letter?",
      answer:
        "You can request a copy or verification from the IRS. Do not apply for a new EIN if you already have one for the same entity.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <Breadcrumbs items={[{"name":"Home","item":"/"},{"name":"How to Form an LLC","item":"/how-to-form-an-llc"},{"name":"Get an EIN for Free","item":"/how-to-get-an-ein-for-free"}]} />


      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        How to Get an EIN for Free
      </h1>

      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        An Employer Identification Number (EIN) is a federal tax ID issued by the IRS. You can obtain one at{" "}
        <strong>no cost</strong> on the official IRS website. This page explains the steps and how to avoid unnecessary third-party fees.
      </p>

      <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-950">
        <strong>Key point:</strong> The IRS does not charge for an EIN. If a website asks you to pay only for the EIN number, apply on IRS.gov instead.
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/how-to-form-an-llc"
          className="rounded-lg bg-[#102A43] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1769AA]"
        >
          How to form an LLC
        </Link>
        <Link
          href="/how-long-does-it-take-to-start-an-llc"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#1769AA]"
        >
          Formation timeline
        </Link>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">Steps to get an EIN free online</h2>
        <ol className="mt-4 space-y-3 text-slate-700">
          <li>
            <strong>1.</strong> Form your LLC with the state first (or have responsible party details ready).
          </li>
          <li>
            <strong>2.</strong> Go to the official IRS EIN online application (confirm the domain is irs.gov).
          </li>
          <li>
            <strong>3.</strong> Complete the form: entity type (LLC), responsible party, addresses, and reason for applying.
          </li>
          <li>
            <strong>4.</strong> Submit during IRS online hours. Save the EIN confirmation notice immediately.
          </li>
        </ol>
        <p className="mt-4 text-slate-700 leading-relaxed">
          The online application is the fastest method for most applicants who have a valid taxpayer identification number and are authorized to apply.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">When you typically need an EIN</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Multi-member LLC</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Hiring employees</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Opening a business bank account (most banks require it)</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Certain tax elections (for example, electing S-corporation taxation)</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Operating as a partnership or corporation for tax purposes</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">Avoiding paid third-party EIN services</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Many commercial websites charge $50–$200 or more to “get your EIN.” In most cases they are simply submitting the same free IRS application on your behalf. You can do the identical filing yourself at no cost on the official IRS site.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Paying a service can make sense only if you specifically want hand-holding or have a complex situation that prevents online self-application. For a standard single-member or multi-member LLC, the free IRS online application is usually sufficient.
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

      <section className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Related guides</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <Link href="/how-to-form-an-llc" className="text-[#1769AA] hover:underline">
              How to form an LLC
            </Link>
          </li>
          <li>
            <Link href="/how-long-does-it-take-to-start-an-llc" className="text-[#1769AA] hover:underline">
              How long does it take to start an LLC?
            </Link>
          </li>
          <li>
            <Link href="/how-much-does-it-cost-to-start-an-llc" className="text-[#1769AA] hover:underline">
              How much does it cost to start an LLC?
            </Link>
          </li>
          <li>
            <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">
              LLC cost calculator
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 text-xs leading-relaxed text-slate-500">
        Educational only. Always use the official IRS website for EIN applications. This site is not affiliated with the IRS or any government agency.
      </p>
    </div>
  );
}
