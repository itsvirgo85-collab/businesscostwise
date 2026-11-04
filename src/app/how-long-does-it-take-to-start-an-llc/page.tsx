import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata: Metadata = {
  title: "How Long Does It Take to Start an LLC? (Filing + EIN Timeline)",
  description:
    "How long does it take to form an LLC and get an EIN? Typical state processing times, expedited options, and what slows approval down in 2026.",
};

export default function HowLongPage() {
  const faqs = [
    {
      question: "How long does it take to start an LLC?",
      answer:
        "Many states approve online LLC filings in 1–5 business days. Some offer same-day or next-day service. Paper filings can take 2–6 weeks. After state approval, an EIN from the IRS is often immediate online.",
    },
    {
      question: "How long does it take to get an EIN?",
      answer:
        "If you apply online on the IRS website during their service hours, you usually receive the EIN immediately after submitting a complete application.",
    },
    {
      question: "How long does it take to form an LLC in Texas?",
      answer:
        "Texas online filings are often processed within a few business days; expedited options may be available. Always check current times on the official Secretary of State site.",
    },
    {
      question: "How long does it take to make an LLC in California?",
      answer:
        "California processing times vary. Online filings are typically faster than mail. Confirm current times on the California Secretary of State site.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">How Long to Start an LLC</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">
        How Long Does It Take to Start an LLC?
      </h1>
      <p className="mt-3 text-slate-600 leading-relaxed">
        The timeline has two main parts: state approval of your formation filing, and (if needed) getting an EIN from the IRS.
        State speed depends on filing method, expedited service, and current agency backlog.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#102A43]">Typical timelines</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">Step</th>
                <th className="px-4 py-3 font-medium">Typical time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr>
                <td className="px-4 py-3 font-medium">Name search + prep documents</td>
                <td className="px-4 py-3">Same day</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Online state filing (standard)</td>
                <td className="px-4 py-3">1–10 business days (varies by state)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Expedited state filing</td>
                <td className="px-4 py-3">Same day to 2 business days (extra fee)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Paper / mail filing</td>
                <td className="px-4 py-3">2–6+ weeks</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">EIN online (IRS)</td>
                <td className="px-4 py-3">Often immediate during IRS online hours</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Business bank account</td>
                <td className="px-4 py-3">1–5 business days after approved docs + EIN</td>
              </tr>
            </tbody>
          </table>
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
        <h2 className="text-lg font-semibold text-[#102A43]">Next steps</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link href="/how-to-form-an-llc" className="text-[#1769AA] hover:underline">How to form an LLC</Link></li>
          <li><Link href="/how-to-get-an-ein-for-free" className="text-[#1769AA] hover:underline">How to get an EIN for free</Link></li>
          <li><Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">LLC cost calculator</Link></li>
        </ul>
      </section>

      <p className="mt-10 text-xs text-slate-500">
        Processing times change. Always check your Secretary of State website for current estimates before you file.
      </p>
    </div>
  );
}
