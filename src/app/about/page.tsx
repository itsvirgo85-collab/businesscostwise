import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata: Metadata = {
  title: "About Get LLC Cost Calculator — Mission, Data & FAQs",
  description:
    "Independent educational resource for US LLC formation costs and structure comparisons. Official source links, verification dates, methodology, and how to contact us.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Get LLC Cost Calculator — Mission, Data & FAQs",
    description: "Independent educational resource for US LLC formation costs and structure comparisons. Official source links, verification dates, methodology, and how to contact us.",
    type: "article",
    url: "/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Get LLC Cost Calculator — Mission, Data & FAQs",
    description: "Independent educational resource for US LLC formation costs and structure comparisons. Official source links, verification dates, methodology, and how to contact us.",
  },
};

export default function AboutPage() {
  const faqs = [
    {
      question: "What is Get LLC Cost Calculator?",
      answer:
        "Get LLC Cost Calculator is an independent educational website that publishes verified US LLC formation and recurring fee information, multi-year cost estimates, and plain-language guides on business structures. It is not a government agency or law firm.",
    },
    {
      question: "Are the state fees official?",
      answer:
        "Base fees are drawn from official state sources and marked with verification dates. Fees change. Always confirm the current schedule on the official state website before filing or budgeting.",
    },
    {
      question: "Is this legal or tax advice?",
      answer:
        "No. All content is educational only. It does not create an attorney-client or advisor relationship and should not be used as a substitute for professional advice specific to your situation.",
    },
    {
      question: "How can I contact you?",
      answer:
        "Email info@getllccostcalculator.com. We welcome corrections to fee data and questions about methodology.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

      <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#1769AA]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">About</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        About Get LLC Cost Calculator
      </h1>

      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        Get LLC Cost Calculator is an independent educational resource focused on US LLC formation costs, recurring state obligations, and clear comparisons of common business structures. Our goal is to help founders understand the real numbers before they file.
      </p>

      <p className="mt-3 text-slate-600 leading-relaxed">
        We publish verified state fee data with links to official government sources, multi-year cost estimates, and practical guides on topics such as how to form an LLC, hidden costs, annual reports, and structure comparisons. Everything on this site is educational only — not legal, tax, or financial advice.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">Our mission</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Many founders see only a headline formation fee and miss annual reports, franchise taxes, publication requirements, and registered agent costs. We aim to make those numbers transparent, state by state, with clear methodology and official source links so you can budget accurately and file with confidence.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">What we publish</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li className="flex gap-2"><span className="text-[#1769AA]">→</span> Free LLC cost calculator with 1-, 3-, and 5-year estimates</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">→</span> State-by-state formation and recurring fee tables</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">→</span> Guides on formation steps, timelines, EINs, and hidden costs</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">→</span> Structure comparisons (LLC vs sole prop, corporation, S-Corp)</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">→</span> Methodology and source documentation</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">Data & methodology</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Fee figures are drawn from official state websites and marked with verification dates. We exclude Alabama from some verified comparisons while its variable Business Privilege Tax is under review. Always confirm current amounts on the official state site before filing.
        </p>
        <p className="mt-3">
          <Link href="/about/sources-and-methodology" className="font-medium text-[#1769AA] hover:underline">
            Sources & methodology →
          </Link>
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">Contact</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Questions, corrections, or feedback:{" "}
          <a href="mailto:info@getllccostcalculator.com" className="font-medium text-[#1769AA] hover:underline">
            info@getllccostcalculator.com
          </a>
        </p>
        <p className="mt-2">
          <Link href="/contact" className="font-medium text-[#1769AA] hover:underline">
            Contact page →
          </Link>
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
        <h2 className="text-lg font-semibold text-[#102A43]">Explore the site</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">
              LLC Cost Calculator
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
            <Link href="/llc-cost-by-state" className="text-[#1769AA] hover:underline">
              LLC Costs by State
            </Link>
          </li>
          <li>
            <Link href="/disclaimer" className="text-[#1769AA] hover:underline">
              Disclaimer
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 text-xs leading-relaxed text-slate-500">
        Educational information only. Not legal, tax, or financial advice. This site is not affiliated with any government agency.
      </p>
    </div>
  );
}
