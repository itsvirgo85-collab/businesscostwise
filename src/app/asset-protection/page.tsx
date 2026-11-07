import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Does an LLC Protect Personal Assets? Realistic Limits Explained (2026)",
  description:
    "Educational guide on how LLC limited liability works, when courts may pierce the veil, and practical steps small-business owners can take to strengthen asset protection.",
  alternates: { canonical: "/asset-protection" },
};

export default function AssetProtectionPage() {
  const checklist = [
    {
      title: "Maintain a real separation of finances",
      detail:
        "Open a dedicated business bank account and never use it for personal expenses. Commingling is one of the most common reasons courts disregard the LLC.",
    },
    {
      title: "Keep proper records and formalities",
      detail:
        "Document major decisions, maintain an operating agreement, and file required annual or biennial reports on time.",
    },
    {
      title: "Avoid personal guarantees when possible",
      detail:
        "Many loans, leases, and vendor contracts ask owners to personally guarantee the obligation. A personal guarantee can put personal assets at risk even if the LLC is properly maintained.",
    },
    {
      title: "Carry adequate business liability insurance",
      detail:
        "An LLC does not replace insurance. General liability, professional liability, and umbrella policies often provide the first and most practical layer of protection.",
    },
    {
      title: "Do not undercapitalize the business",
      detail:
        "Courts sometimes look at whether the company was set up with enough capital to meet reasonably foreseeable obligations.",
    },
    {
      title: "Use written contracts",
      detail:
        "Clear written agreements with customers, contractors, and vendors reduce disputes and help show the business is operated as a separate entity.",
    },
    {
      title: "Respect the entity in daily operations",
      detail:
        "Sign contracts in the name of the LLC, use the LLC’s name on invoices and marketing, and avoid treating company assets as personal property.",
    },
    {
      title: "Review compliance periodically",
      detail:
        "Confirm the registered agent is current, annual reports are filed, and any required licenses remain active.",
    },
  ];

  const faqs = [
    {
      question: "Does an LLC protect personal assets?",
      answer:
        "An LLC can help separate business liabilities from personal assets when it is properly formed and maintained. Protection is not absolute. Courts can pierce the veil in cases of fraud, commingling funds, undercapitalization, or other misconduct. Personal guarantees and professional malpractice claims can also expose personal assets.",
    },
    {
      question: "What is piercing the corporate veil?",
      answer:
        "Piercing the veil is when a court disregards the LLC (or corporation) and holds the owners personally liable. Common risk factors include mixing personal and business money, failing to keep records, undercapitalizing the company, or using the entity to commit fraud.",
    },
    {
      question: "Is insurance still needed if I have an LLC?",
      answer:
        "Yes. An LLC is not a substitute for insurance. Business liability insurance and, where relevant, professional liability coverage often provide the first practical layer of protection.",
    },
    {
      question: "Does a single-member LLC offer the same protection?",
      answer:
        "Single-member LLCs can provide limited liability, but some courts scrutinize them more closely. Maintaining strict separation of finances and proper formalities is especially important.",
    },
    {
      question: "Can I lose limited liability if I sign a personal guarantee?",
      answer:
        "Yes for that specific obligation. A personal guarantee makes you personally responsible for the debt or contract even if the LLC is properly maintained. Many landlords and lenders require personal guarantees from small-business owners.",
    },
    {
      question: "Does forming an LLC in a different state give stronger protection?",
      answer:
        "Asset protection rules are largely governed by the law of the state where the lawsuit is brought and where the LLC operates. Forming in a different state does not automatically create stronger protection and often adds foreign registration costs.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[{"name":"Home","item":"/"},{"name":"What is an LLC","item":"/what-is-an-llc"},{"name":"Asset Protection","item":"/asset-protection"}]} />

      <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#1769AA]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/what-is-an-llc" className="hover:text-[#1769AA]">
          What is an LLC
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Asset Protection</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        Does an LLC Protect Your Personal Assets?
      </h1>

      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        One of the main reasons people form a limited liability company is to create a legal separation between business liabilities and personal assets. In many ordinary commercial situations an LLC can help achieve that goal. However, limited liability is not absolute.
      </p>

      <p className="mt-3 text-slate-600 leading-relaxed">
        Courts can pierce the corporate veil in certain circumstances, and personal guarantees, professional malpractice, and inadequate insurance can still expose personal assets. This page explains how limited liability is supposed to work and the practical steps that strengthen it.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/what-is-an-llc"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#1769AA]"
        >
          What is an LLC?
        </Link>
        <Link
          href="/how-to-form-an-llc"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#1769AA]"
        >
          How to form an LLC
        </Link>
        <Link
          href="/business-structures/llc-vs-sole-proprietorship"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#1769AA]"
        >
          LLC vs Sole Proprietorship
        </Link>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">How limited liability is supposed to work</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          When you properly form and maintain an LLC, the company is treated as a separate legal entity. In general, creditors of the business are expected to look to the company’s assets, not the personal house, car, or savings of the members.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          This separation is one of the main advantages of an LLC compared with a sole proprietorship, where there is no legal distinction between the owner and the business. See{" "}
          <Link href="/business-structures/llc-vs-sole-proprietorship" className="text-[#1769AA] hover:underline">
            LLC vs Sole Proprietorship
          </Link>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">When limited liability can fail</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Courts may “pierce the corporate veil” and hold owners personally liable when the LLC is not treated as a real separate entity or is used improperly. Common risk factors include:
        </p>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Mixing personal and business funds or assets</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Failing to keep basic records or observe entity formalities</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Undercapitalizing the company relative to its risks</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Using the LLC to commit fraud or evade existing obligations</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Personal guarantees on loans, leases, or contracts</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">Practical checklist to strengthen protection</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Limited liability works best when the LLC is treated as a real business. The steps below are practical habits that support the separation between you and the company.
        </p>
        <div className="mt-6 space-y-4">
          {checklist.map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#102A43] text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-[#102A43]">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">Insurance still matters</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          An LLC is a legal structure, not an insurance policy. Many claims are handled first through business liability or professional liability insurance. Maintaining adequate coverage is often the most practical way to protect both the company and the owners.
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
        <h2 className="text-lg font-semibold text-[#102A43]">Related resources</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <Link href="/what-is-an-llc" className="text-[#1769AA] hover:underline">
              What is an LLC?
            </Link>
          </li>
          <li>
            <Link href="/business-structures/llc-vs-sole-proprietorship" className="text-[#1769AA] hover:underline">
              LLC vs Sole Proprietorship
            </Link>
          </li>
          <li>
            <Link href="/how-to-form-an-llc" className="text-[#1769AA] hover:underline">
              How to Form an LLC
            </Link>
          </li>
          <li>
            <Link href="/how-much-does-it-cost-to-start-an-llc" className="text-[#1769AA] hover:underline">
              How Much Does It Cost to Start an LLC?
            </Link>
          </li>
          <li>
            <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">
              LLC Cost Calculator
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 text-xs leading-relaxed text-slate-500">
        This page is for educational purposes only. It is not a substitute for advice from a licensed attorney in your jurisdiction. Consult a qualified professional before making decisions. This site is not affiliated with any government agency.
      </p>
    </div>
  );
}
