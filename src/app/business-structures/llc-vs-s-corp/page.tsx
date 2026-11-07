import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "LLC vs S Corp — Key Differences, Taxes & When to Elect",
  description:
    "LLC vs S corp explained: default taxation, self-employment tax, ownership limits, formalities, and when an LLC might elect S-corporation status.",
  alternates: { canonical: "/business-structures/llc-vs-s-corp" },
};

export default function LLCvsSCorpPage() {
  const faqs = [
    {
      question: "What is the difference between an LLC and an S corp?",
      answer:
        "An LLC is a state legal entity. An S corp is a federal tax election. You form an LLC (or corporation) with the state, then may elect S-corporation tax treatment with the IRS if you meet eligibility rules.",
    },
    {
      question: "Can an LLC be taxed as an S corp?",
      answer:
        "Yes. A qualifying LLC can elect S-corporation status by filing the appropriate IRS form if it meets shareholder and structure rules.",
    },
    {
      question: "Advantages of S corp over LLC default taxation?",
      answer:
        "For some profitable owner-operators, S-corp taxation can reduce self-employment tax by splitting income into reasonable salary and distributions. It adds payroll formalities. Whether it helps depends on profit level and state rules.",
    },
    {
      question: "Is an S corp better than an LLC?",
      answer:
        "Neither is universally better. Many small businesses start as LLCs for flexibility, then evaluate an S-corp election later with a tax professional.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <Breadcrumbs items={[{"name":"Home","item":"/"},{"name":"LLC vs S Corp","item":"/business-structures/llc-vs-s-corp"}]} />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">
        LLC vs S Corp: What’s the Real Difference?
      </h1>
      <p className="mt-3 text-slate-600 leading-relaxed">
        “LLC” describes a legal entity formed under state law. “S corp” describes a federal tax status.
        You form an entity, then may elect S-corporation taxation if eligible. Educational comparison only.
      </p>

      <div className="mt-10 overflow-x-auto rounded-xl border border-slate-200">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">Topic</th>
              <th className="px-4 py-3 font-medium">LLC (default tax)</th>
              <th className="px-4 py-3 font-medium">S corporation tax</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            <tr>
              <td className="px-4 py-3 font-medium">What it is</td>
              <td className="px-4 py-3">State legal entity</td>
              <td className="px-4 py-3">Federal tax election</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Formation</td>
              <td className="px-4 py-3">File with state + pay LLC filing fee</td>
              <td className="px-4 py-3">Form entity first, then IRS election if eligible</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Ownership limits</td>
              <td className="px-4 py-3">Very flexible</td>
              <td className="px-4 py-3">Strict limits on shareholders and stock classes</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Self-employment tax</td>
              <td className="px-4 py-3">Often on net earnings for active members</td>
              <td className="px-4 py-3">Salary subject to payroll tax; qualifying distributions treated differently</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Formalities</td>
              <td className="px-4 py-3">Generally lighter</td>
              <td className="px-4 py-3">Reasonable salary + payroll compliance</td>
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

      <section className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Related</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link href="/business-structures/llc-vs-sole-proprietorship" className="text-[#1769AA] hover:underline">LLC vs sole proprietorship</Link></li>
          <li><Link href="/business-structures/llc-vs-corporation" className="text-[#1769AA] hover:underline">LLC vs corporation</Link></li>
          <li><Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">LLC cost calculator</Link></li>
          <li><Link href="/how-to-form-an-llc" className="text-[#1769AA] hover:underline">How to form an LLC</Link></li>
        </ul>
      </section>

      <p className="mt-10 text-xs text-slate-500">
        Educational only. Consult a qualified tax professional before electing S-corporation status.
      </p>
    </div>
  );
}
