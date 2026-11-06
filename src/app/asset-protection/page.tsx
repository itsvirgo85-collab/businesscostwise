import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata: Metadata = {
  title: "Does an LLC Protect Personal Assets? Realistic Limits Explained",
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
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Asset Protection</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">
        Does an LLC Protect Your Personal Assets?
      </h1>
      <p className="mt-3 text-slate-600 leading-relaxed">
        One of the main reasons people form a limited liability company is to create a legal separation
        between business liabilities and personal assets. In many ordinary commercial situations an LLC
        can help achieve that goal. However, limited liability is not absolute. Courts can pierce the
        corporate veil in certain circumstances, and personal guarantees, professional malpractice,
        and inadequate insurance can still expose personal assets.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">How limited liability is supposed to work</h2>
        <p className="mt-3 text-sm text-slate-700 leading-relaxed">
          When you properly form and maintain an LLC, the company is treated as a separate legal entity.
          In general, creditors of the business are expected to look to the company’s assets, not the
          personal house, car, or savings of the members.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">When limited liability can fail</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Mixing personal and business funds or assets</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Failing to keep basic records or observe entity formalities</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Undercapitalizing the company relative to its risks</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Using the LLC to commit fraud or evade existing obligations</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Personal guarantees on loans, leases, or contracts</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">Practical checklist to strengthen protection</h2>
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
        <h2 className="text-lg font-semibold text-[#102A43]">Related resources</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">LLC Cost Calculator</Link></li>
          <li><Link href="/business-structures/llc-vs-sole-proprietorship" className="text-[#1769AA] hover:underline">LLC vs Sole Proprietorship</Link></li>
          <li><Link href="/llc-cost-by-state" className="text-[#1769AA] hover:underline">LLC Costs by State</Link></li>
        </ul>
      </section>

      <p className="mt-10 text-xs text-slate-500 leading-relaxed">
        This page is for educational purposes only. It is not a substitute for advice from a licensed attorney
        in your jurisdiction. Consult a qualified professional before making decisions.
      </p>
    </div>
  );
}
