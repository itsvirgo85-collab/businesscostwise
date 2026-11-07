import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "LLC vs Corporation — Key Differences for Small Businesses",
  description:
    "Side-by-side comparison of LLC and corporation: formation, liability, taxes, ownership, formalities, and when each structure may fit US small businesses.",
  alternates: { canonical: "/business-structures/llc-vs-corporation" },
};

export default function LLCvsCorporationPage() {
  const faqs = [
    {
      question: "Is an LLC or corporation better for a small business?",
      answer:
        "Most small businesses and freelancers choose an LLC for simpler governance and pass-through taxation. Corporations are often preferred when raising venture capital or issuing stock to employees. The right choice depends on ownership plans, investors, and tax strategy.",
    },
    {
      question: "Can an LLC be taxed as a corporation?",
      answer:
        "Yes. An LLC can elect to be taxed as a C-Corporation or, if it qualifies, as an S-Corporation by filing the appropriate forms with the IRS.",
    },
    {
      question: "Do both LLCs and corporations provide limited liability?",
      answer:
        "Yes. Both structures generally separate business liabilities from personal assets when properly maintained. Limited liability is not absolute and can be lost in cases of fraud, personal guarantees, or failure to respect the entity.",
    },
    {
      question: "Which is more expensive to form and maintain?",
      answer:
        "Formation fees are similar in many states and set by the state. Ongoing formalities are usually lighter for an LLC. Corporations typically require more formal meetings, minutes, and record-keeping.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[{"name":"Home","item":"/"},{"name":"LLC vs Corporation","item":"/business-structures/llc-vs-corporation"}]} />
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500">Business Structures</span>
        <span className="mx-2">/</span>
        <span className="text-slate-800">LLC vs Corporation</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">
        LLC vs Corporation: Key Differences
      </h1>
      <p className="mt-3 text-slate-600 leading-relaxed">
        Both the limited liability company (LLC) and the corporation provide limited liability protection
        and are formed under state law. They differ significantly in taxation defaults, ownership rules,
        formalities, and flexibility. This page summarizes the practical differences for educational
        purposes. It is not legal or tax advice.
      </p>

      <div className="mt-10 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">Topic</th>
              <th className="px-4 py-3 font-medium">LLC</th>
              <th className="px-4 py-3 font-medium">Corporation (C-Corp default)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            <tr>
              <td className="px-4 py-3 font-medium text-[#102A43]">Formation</td>
              <td className="px-4 py-3">File Articles / Certificate of Organization with the state + pay filing fee</td>
              <td className="px-4 py-3">File Articles / Certificate of Incorporation with the state + pay filing fee</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#102A43]">Separate legal entity</td>
              <td className="px-4 py-3">Yes</td>
              <td className="px-4 py-3">Yes</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#102A43]">Personal liability</td>
              <td className="px-4 py-3">Limited liability for members (subject to veil-piercing, personal guarantees, etc.)</td>
              <td className="px-4 py-3">Limited liability for shareholders (same general exceptions apply)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#102A43]">Default federal tax</td>
              <td className="px-4 py-3">Single-member: disregarded entity. Multi-member: partnership. Can elect S-Corp or C-Corp treatment</td>
              <td className="px-4 py-3">C-Corporation (entity-level tax). Can elect S-Corporation status if eligibility rules are met</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#102A43]">Ownership flexibility</td>
              <td className="px-4 py-3">Very flexible. Members can be individuals, other entities, or foreign persons</td>
              <td className="px-4 py-3">C-Corp: flexible. S-Corp: strict limits on shareholders and stock classes</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#102A43]">Formalities</td>
              <td className="px-4 py-3">Generally lighter (operating agreement, annual reports)</td>
              <td className="px-4 py-3">More formal: bylaws, board meetings, minutes, shareholder meetings</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#102A43]">Raising capital</td>
              <td className="px-4 py-3">Possible but less familiar to traditional venture investors</td>
              <td className="px-4 py-3">Preferred structure for most venture capital and institutional investors</td>
            </tr>
          </tbody>
        </table>
      </div>

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

      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Related tools</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/llc-cost-calculator" className="rounded-lg bg-[#102A43] px-4 py-2 text-sm font-medium text-white hover:bg-[#1769AA] transition">LLC Cost Calculator</Link>
          <Link href="/business-structures/llc-vs-sole-proprietorship" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700">LLC vs Sole Proprietorship</Link>
          <Link href="/asset-protection" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700">Asset Protection</Link>
        </div>
      </section>

      <p className="mt-10 text-xs text-slate-500 leading-relaxed">
        This comparison is educational only. Entity choice has significant legal and tax consequences.
        Consult a qualified attorney and tax professional before forming any entity or making elections.
      </p>
    </div>
  );
}
