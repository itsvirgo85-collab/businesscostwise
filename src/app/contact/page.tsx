import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata: Metadata = {
  title: "Contact — Get LLC Cost Calculator",
  description:
    "Contact Get LLC Cost Calculator for general questions about the educational site, fee data sources, or corrections. Email: info@getllccostcalculator.com",
};

export default function ContactPage() {
  const faqs = [
    {
      question: "What email should I use?",
      answer:
        "Use info@getllccostcalculator.com for general questions, source corrections, or site feedback. We read messages as time allows.",
    },
    {
      question: "Can you tell me which state to form in?",
      answer:
        "No. We do not provide personalized legal or tax recommendations. Use the educational cost pages and always confirm rules on official state websites, or consult a licensed professional.",
    },
    {
      question: "How do I report a wrong fee?",
      answer:
        "Email the state name, the page URL, and a link to the official source if you have one. We will review it against the government site listed on our Sources & Methodology page.",
    },
    {
      question: "Do you offer phone support or filing help?",
      answer:
        "No. Get LLC Cost Calculator is an educational website only. We do not file LLCs, act as a registered agent, or provide phone consultations.",
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

      <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#1769AA]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/about" className="hover:text-[#1769AA]">
          About
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Contact</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">Contact</h1>

      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        Get LLC Cost Calculator is an independent educational resource. Use the email below for general questions about the site, source corrections, or technical issues.
      </p>

      <p className="mt-3 text-slate-600 leading-relaxed">
        Learn more about our mission and data approach on the{" "}
        <Link href="/about" className="text-[#1769AA] hover:underline">
          About
        </Link>{" "}
        page and{" "}
        <Link href="/about/sources-and-methodology" className="text-[#1769AA] hover:underline">
          Sources & Methodology
        </Link>
        .
      </p>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#102A43]">Email</h2>
        <p className="mt-2 text-slate-700">
          <a
            href="mailto:info@getllccostcalculator.com"
            className="font-medium text-[#1769AA] hover:underline"
          >
            info@getllccostcalculator.com
          </a>
        </p>
        <p className="mt-3 text-sm text-slate-600">
          We read messages as time allows. This inbox is not monitored for urgent legal, tax, or filing deadlines.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#102A43]">What we can help with</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>Questions about how fee data is sourced or verified</li>
          <li>Reports of outdated links or possible fee errors on a state page</li>
          <li>General feedback about the educational content or calculator</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#102A43]">What we cannot provide</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>Legal, tax, accounting, or financial advice</li>
          <li>Personalized recommendations on where or how to form an entity</li>
          <li>Filing services, registered agent services, or government processing</li>
        </ul>
        <p className="mt-3 text-slate-700 leading-relaxed">
          For official fees and rules, always use the linked state government sources. For advice specific to your situation, consult a licensed professional in the relevant jurisdiction. See our{" "}
          <Link href="/disclaimer" className="text-[#1769AA] hover:underline">
            Disclaimer
          </Link>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">Frequently asked questions</h2>
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

      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Helpful pages</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/about" className="text-[#1769AA] hover:underline">
              About Get LLC Cost Calculator
            </Link>
          </li>
          <li>
            <Link href="/about/sources-and-methodology" className="text-[#1769AA] hover:underline">
              Sources & Methodology
            </Link>
          </li>
          <li>
            <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">
              LLC Cost Calculator
            </Link>
          </li>
          <li>
            <Link href="/llc-cost-by-state" className="text-[#1769AA] hover:underline">
              LLC Costs by State
            </Link>
          </li>
          <li>
            <Link href="/how-to-form-an-llc" className="text-[#1769AA] hover:underline">
              How to Form an LLC
            </Link>
          </li>
          <li>
            <Link href="/what-is-an-llc" className="text-[#1769AA] hover:underline">
              What is an LLC?
            </Link>
          </li>
          <li>
            <Link href="/disclaimer" className="text-[#1769AA] hover:underline">
              Disclaimer
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="text-[#1769AA] hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="text-[#1769AA] hover:underline">
              Terms of Use
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 text-xs leading-relaxed text-slate-500">
        Educational resource only. Not a law firm, tax advisor, or government agency.
      </p>
    </div>
  );
}
