import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Get LLC Cost Calculator — Questions & Fee Corrections",
  description:
    "Contact Get LLC Cost Calculator with questions about US LLC state fees, data corrections, or educational guides. Send a message or email itsvirgo85@gmail.com.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Get LLC Cost Calculator — Questions & Fee Corrections",
    description:
      "Contact Get LLC Cost Calculator with questions about US LLC state fees, data corrections, or educational guides.",
    type: "article",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Get LLC Cost Calculator — Questions & Fee Corrections",
    description:
      "Contact Get LLC Cost Calculator with questions about US LLC state fees, data corrections, or educational guides.",
  },
};

export default function ContactPage() {
  const faqs = [
    {
      question: "What should I include when reporting a state fee correction?",
      answer:
        "Include the state name, the fee type (formation, annual report, franchise tax, etc.), the amount you believe is current, and a link to the official government page. That helps us verify and update the calculator data faster.",
    },
    {
      question: "Do you provide legal or tax advice?",
      answer:
        "No. Get LLC Cost Calculator publishes educational information only. For advice specific to your situation, consult a licensed professional in your state.",
    },
    {
      question: "How quickly do you respond?",
      answer:
        "We aim to reply within a few business days. Fee verification requests that need official source review may take a little longer.",
    },
    {
      question: "Can you form an LLC for me?",
      answer:
        "No. This site is not a formation service. Use the free cost calculator and guides to understand fees and steps, then file through your state’s official portal or a professional if you choose.",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

      <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#1769AA]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Contact</span>
      </nav>

      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
          Contact Get LLC Cost Calculator
        </h1>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          Have a question about LLC formation costs, a possible fee update, or feedback on our
          educational guides? Send a message below. We built this platform to help people find
          clear, source-linked information — your notes help keep the data useful.
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
        <ContactForm />

        <aside className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-sm font-semibold text-[#102A43]">Direct email</h2>
            <a
              href="mailto:itsvirgo85@gmail.com"
              className="mt-2 block break-all text-sm font-medium text-[#1769AA] hover:underline"
            >
              itsvirgo85@gmail.com
            </a>
            <p className="mt-2 text-xs text-slate-600">
              Prefer email? Use the same address — form submissions are delivered here as well.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-sm font-semibold text-[#102A43]">What we can help with</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="text-[#1769AA]">→</span>
                Corrections to published state fees
              </li>
              <li className="flex gap-2">
                <span className="text-[#1769AA]">→</span>
                Questions about sources and methodology
              </li>
              <li className="flex gap-2">
                <span className="text-[#1769AA]">→</span>
                Feedback on the cost calculator and guides
              </li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              We cannot provide legal, tax, or filing advice, or process LLC formations.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-sm font-semibold text-[#102A43]">Helpful pages</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">
                  LLC Cost Calculator
                </Link>
              </li>
              <li>
                <Link href="/how-much-does-it-cost-to-start-an-llc" className="text-[#1769AA] hover:underline">
                  How much does an LLC cost?
                </Link>
              </li>
              <li>
                <Link href="/about/sources-and-methodology" className="text-[#1769AA] hover:underline">
                  Sources & methodology
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#1769AA] hover:underline">
                  About this site
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-[#1769AA] hover:underline">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <section className="mt-14 max-w-3xl">
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

      <section className="mt-12 max-w-3xl rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Explore educational resources</h2>
        <p className="mt-2 text-sm text-slate-600">
          Looking for answers before you write? Start with these guides and tools.
        </p>
        <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
          <li>
            <Link href="/what-is-an-llc" className="text-[#1769AA] hover:underline">
              What is an LLC?
            </Link>
          </li>
          <li>
            <Link href="/how-to-form-an-llc" className="text-[#1769AA] hover:underline">
              How to form an LLC
            </Link>
          </li>
          <li>
            <Link href="/llc-cost-by-state" className="text-[#1769AA] hover:underline">
              LLC costs by state
            </Link>
          </li>
          <li>
            <Link href="/hidden-costs-of-forming-an-llc" className="text-[#1769AA] hover:underline">
              Hidden costs of forming an LLC
            </Link>
          </li>
          <li>
            <Link href="/business-structures/llc-vs-sole-proprietorship" className="text-[#1769AA] hover:underline">
              LLC vs sole proprietorship
            </Link>
          </li>
          <li>
            <Link href="/how-to-get-an-ein-for-free" className="text-[#1769AA] hover:underline">
              How to get an EIN for free
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Educational information only. Not legal, tax, or financial advice. This site is not affiliated with any government agency.
      </p>
    </div>
  );
}
