import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "LLC vs S Corp: Key Differences (2026)" },
  description:
    "LLC vs S corp explained: default taxation, self-employment tax, ownership limits and when an LLC might elect S-corporation tax status. Educational guide.",
  alternates: { canonical: "/business-structures/llc-vs-s-corp" },
  openGraph: {
    title: "LLC vs S Corp: Key Differences (2026)",
    description:
      "LLC vs S corp explained: default taxation, self-employment tax, ownership limits and when an LLC might elect S-corporation tax status. Educational guide.",
    type: "article",
    url: "/business-structures/llc-vs-s-corp",
  },
  twitter: {
    card: "summary_large_image",
    title: "LLC vs S Corp: Key Differences (2026)",
    description:
      "LLC vs S corp explained: default taxation, self-employment tax, ownership limits and when an LLC might elect S-corporation tax status. Educational guide.",
    images: ["/twitter-image"],
  },
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
      question: "What are the advantages of S corp over LLC default taxation?",
      answer:
        "For some profitable owner-operators, S-corp taxation can reduce self-employment tax by splitting income into reasonable salary and distributions. It adds payroll formalities. Whether it helps depends on profit level and state rules.",
    },
    {
      question: "Is an S corp better than an LLC?",
      answer:
        "Neither is universally better. Many small businesses start as LLCs for flexibility, then evaluate an S-corp election later with a tax professional.",
    },
    {
      question: "When does an S-corp election usually start to make sense?",
      answer:
        "Often when the business is consistently profitable enough that the self-employment tax savings outweigh the cost of running payroll and the extra compliance. There is no single profit threshold that fits everyone.",
    },
    {
      question: "Can any LLC elect S-corp status?",
      answer:
        "No. The LLC must meet S-corporation eligibility rules, including limits on the number and type of owners and having only one class of stock (ownership interest). Professional advice is recommended before electing.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "Business Structures", item: "/business-structures" },
          { name: "LLC vs S-Corp", item: "/business-structures/llc-vs-s-corp" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        LLC vs S Corp: What’s the Real Difference?
      </h1>

      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        “LLC” describes a legal entity formed under state law. “S corp” describes a federal tax status. You form an entity, then may elect S-corporation taxation if eligible. This page explains the practical differences so you can discuss the choice clearly with a tax professional.
      </p>

      <p className="mt-3 text-slate-600 leading-relaxed">
        Educational comparison only — not tax or legal advice.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/business-structures/llc-vs-corporation"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#1769AA]"
        >
          LLC vs Corporation
        </Link>
        <Link
          href="/business-structures/llc-vs-sole-proprietorship"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#1769AA]"
        >
          LLC vs Sole Proprietorship
        </Link>
        <Link
          href="/how-to-form-an-llc"
          className="rounded-lg bg-[#102A43] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1769AA]"
        >
          How to form an LLC
        </Link>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">Side-by-side comparison</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
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
                <td className="px-4 py-3 font-medium text-[#102A43]">What it is</td>
                <td className="px-4 py-3">State legal entity</td>
                <td className="px-4 py-3">Federal tax election</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-[#102A43]">Formation</td>
                <td className="px-4 py-3">File with state + pay LLC filing fee</td>
                <td className="px-4 py-3">Form entity first, then IRS election if eligible</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-[#102A43]">Ownership limits</td>
                <td className="px-4 py-3">Very flexible</td>
                <td className="px-4 py-3">Strict limits on shareholders and stock classes</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-[#102A43]">Self-employment tax</td>
                <td className="px-4 py-3">Often on net earnings for active members</td>
                <td className="px-4 py-3">Salary subject to payroll tax; qualifying distributions treated differently</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-[#102A43]">Formalities</td>
                <td className="px-4 py-3">Generally lighter</td>
                <td className="px-4 py-3">Reasonable salary + payroll compliance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">The key insight most people miss</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          You do not choose “LLC or S corp” as mutually exclusive options in the way many people think. You form an LLC (or a corporation) under state law. Separately, you can ask the IRS to tax that entity as an S corporation if you qualify. The legal structure and the tax classification are related but distinct decisions.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">When people consider an S-corp election</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li className="flex gap-2"><span className="text-[#1769AA]">→</span> The business is consistently profitable.</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">→</span> The owner is active in the business and currently paying self-employment tax on most or all net earnings.</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">→</span> They are willing to run payroll and pay themselves a reasonable salary.</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">→</span> The projected tax savings exceed the extra compliance cost.</li>
        </ul>
        <p className="mt-4 text-slate-700 leading-relaxed">
          There is no universal profit number at which an S-corp election becomes worthwhile. State taxes, health insurance, retirement contributions, and other factors all matter. A tax professional should run the numbers for your situation.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">Trade-offs of electing S-corp taxation</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Potential benefit: reduced self-employment tax on the distribution portion of profits (after paying a reasonable salary).
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Costs and requirements: running payroll, payroll tax deposits, additional tax forms, reasonable compensation rules, and possible state-level implications. Getting the salary wrong can trigger IRS scrutiny.
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
            <Link href="/business-structures" className="text-[#1769AA] hover:underline">
              All business structure guides
            </Link>
          </li>
          <li>
            <Link href="/business-structures/llc-vs-sole-proprietorship" className="text-[#1769AA] hover:underline">
              LLC vs Sole Proprietorship
            </Link>
          </li>
          <li>
            <Link href="/business-structures/llc-vs-corporation" className="text-[#1769AA] hover:underline">
              LLC vs Corporation
            </Link>
          </li>
          <li>
            <Link href="/business-structures/single-member-vs-multi-member-llc" className="text-[#1769AA] hover:underline">
              Single-Member vs Multi-Member LLC
            </Link>
          </li>
          <li>
            <Link href="/how-to-form-an-llc" className="text-[#1769AA] hover:underline">
              How to Form an LLC
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
        Educational only. Consult a qualified tax professional before electing S-corporation status. This site is not affiliated with the IRS or any government agency.
      </p>
    </div>
  );
}
