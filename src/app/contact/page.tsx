import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata: Metadata = {
  title: "Contact Get LLC Cost Calculator",
  description:
    "Contact Get LLC Cost Calculator at info@getllccostcalculator.com. Questions about state fees, methodology, or corrections welcome.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Get LLC Cost Calculator",
    description: "Contact Get LLC Cost Calculator at info@getllccostcalculator.com. Questions about state fees, methodology, or corrections welcome.",
    type: "article",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Get LLC Cost Calculator",
    description: "Contact Get LLC Cost Calculator at info@getllccostcalculator.com. Questions about state fees, methodology, or corrections welcome.",
  },
};

export default function ContactPage() {
  const faqs = [
    {
      question: "What is the best email for fee corrections?",
      answer:
        "Send corrections and source links to info@getllccostcalculator.com. Include the state, the fee type, and a link to the official page when possible.",
    },
    {
      question: "Do you provide legal or tax advice?",
      answer:
        "No. We only publish educational information. For advice specific to your situation, consult a licensed professional in your state.",
    },
    {
      question: "How quickly do you respond?",
      answer:
        "We aim to reply within a few business days. Complex fee verification requests may take longer.",
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

      <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Contact</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">Contact</h1>

      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        Questions about our data, methodology, or a possible fee correction? Email us. We welcome official source links and clear details.
      </p>

      <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm font-medium text-slate-500">Email</p>
        <a
          href="mailto:info@getllccostcalculator.com"
          className="mt-1 block text-xl font-semibold text-[#1769AA] hover:underline"
        >
          info@getllccostcalculator.com
        </a>
        <p className="mt-3 text-sm text-slate-600">
          Please include the state name and a link to the official government page when reporting a fee change.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">What we can help with</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li className="flex gap-2"><span className="text-[#1769AA]">→</span> Corrections to published state fees</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">→</span> Questions about our sources and methodology</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">→</span> General feedback on guides and calculators</li>
        </ul>
        <p className="mt-4 text-slate-600">
          We cannot provide legal, tax, or filing advice, or process LLC formations on your behalf.
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
        <h2 className="text-lg font-semibold text-[#102A43]">Related pages</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/about" className="text-[#1769AA] hover:underline">About</Link></li>
          <li><Link href="/about/sources-and-methodology" className="text-[#1769AA] hover:underline">Sources & Methodology</Link></li>
          <li><Link href="/disclaimer" className="text-[#1769AA] hover:underline">Disclaimer</Link></li>
          <li><Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">LLC Cost Calculator</Link></li>
        </ul>
      </section>
    </div>
  );
}
