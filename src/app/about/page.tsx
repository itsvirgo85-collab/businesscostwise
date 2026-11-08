import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata: Metadata = {
  title: "About Get LLC Cost Calculator — Mission, Author & Why This Site Exists",
  description:
    "Why Get LLC Cost Calculator was built: one clear platform for verified US LLC formation costs, state fees, and structure guides. Meet the author, our data process, and how we stay current.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Get LLC Cost Calculator — Mission, Author & Why This Site Exists",
    description:
      "Why Get LLC Cost Calculator was built: one clear platform for verified US LLC formation costs, state fees, and structure guides.",
    type: "article",
    url: "/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Get LLC Cost Calculator — Mission, Author & Why This Site Exists",
    description:
      "Why Get LLC Cost Calculator was built: one clear platform for verified US LLC formation costs, state fees, and structure guides.",
  },
};

export default function AboutPage() {
  const faqs = [
    {
      question: "Who built Get LLC Cost Calculator?",
      answer:
        "Get LLC Cost Calculator was founded by an independent researcher and product builder who repeatedly saw founders struggling to compare real LLC costs across states. The site exists so people can find clear, source-linked fee data and plain-language guides in one place instead of hunting through dozens of government pages and marketing sites.",
    },
    {
      question: "What is Get LLC Cost Calculator?",
      answer:
        "It is an independent educational website that publishes verified US LLC formation and recurring fee information, multi-year cost estimates, and practical guides on business structures. It is not a government agency, law firm, or formation service.",
    },
    {
      question: "Are the state fees official?",
      answer:
        "Base fees are drawn from official state sources and marked with verification dates. We monitor those official pages on a recurring schedule and update figures when published amounts change. Always confirm the current schedule on the official state website before filing or budgeting.",
    },
    {
      question: "How do you keep fee data up to date?",
      answer:
        "We maintain a registry of official government source URLs for each state, run automated checks against those pages, and update verified fee data when published amounts change. The process is designed so users see real, current information without relying on outdated spreadsheets.",
    },
    {
      question: "Is this legal or tax advice?",
      answer:
        "No. All content is educational only. It does not create an attorney-client or advisor relationship and should not be used as a substitute for professional advice specific to your situation.",
    },
    {
      question: "How can I contact you or suggest a correction?",
      answer:
        "Email info@getllccostcalculator.com. We welcome corrections to fee data, links to newer official schedules, and questions about methodology.",
    },
  ];

  const authorJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Get LLC Cost Calculator Founder",
    url: "https://www.getllccostcalculator.com/about",
    jobTitle: "Founder & Editor",
    worksFor: {
      "@type": "Organization",
      name: "Get LLC Cost Calculator",
      url: "https://www.getllccostcalculator.com",
    },
    description:
      "Independent researcher and product builder who created Get LLC Cost Calculator to give founders one trustworthy place for verified US LLC formation costs and structure guides.",
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorJsonLd) }}
      />

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
        Get LLC Cost Calculator is an independent educational platform built for people who need clear answers about US LLC formation costs, recurring state obligations, and which structure actually fits their situation — without wading through marketing funnels or outdated blog posts.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">Why this site exists</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Forming an LLC should not require opening fifteen browser tabs, guessing which “fee” is the real state fee, and hoping a third-party site has not gone stale. The founder of this project ran into that exact problem while helping people evaluate formation costs state by state. Official numbers were scattered. Comparison tables disagreed. Many tools mixed marketing claims with government fees.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          So this site was built as a single problem-solving platform: verified formation and recurring fees with official source links, a free multi-year calculator, and plain-language guides that explain the decisions behind the numbers. The goal is simple — help people make informed choices with current, source-backed information in one place.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          That audience includes solopreneurs deciding whether an LLC is worth the cost, founders comparing home-state filing versus a popular “cheap” state, and anyone who wants a realistic first-year and five-year budget before they file.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">About the author</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Get LLC Cost Calculator is maintained by an independent researcher and product builder focused on practical tools for small-business decisions. The work on this site centers on careful reading of official state fee schedules, clear documentation of what is and is not included in cost estimates, and continuous improvement of the guides people use most: formation steps, cost breakdowns, structure comparisons, and state-by-state detail pages.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          There is no formation service upsell built into the core experience. The platform is intentionally educational. When a figure depends on a government source, that source is linked. When a number is an estimate or optional input, it is labeled as such. That discipline is what makes the site useful as a long-term reference rather than a one-time marketing landing page.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Corrections and improvements from readers are welcome. Authority on a topic like state filing fees is earned by staying close to primary sources, updating when those sources change, and explaining limitations honestly.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">Our mission</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Many founders see only a headline formation fee and miss annual reports, franchise taxes, publication requirements, and registered agent costs. We aim to make those numbers transparent, state by state, with clear methodology and official source links so you can budget accurately and file with confidence.
        </p>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li className="flex gap-2">
            <span className="text-[#1769AA]">→</span>
            <span>One platform for costs, structure comparisons, and formation guidance</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#1769AA]">→</span>
            <span>Official government sources linked on fee data</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#1769AA]">→</span>
            <span>Multi-year estimates so recurring costs are not a surprise</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#1769AA]">→</span>
            <span>Educational framing only — not legal, tax, or filing advice</span>
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">How we keep information current</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          State fees and filing rules change. Relying on a static spreadsheet eventually fails users. Our approach combines a maintained registry of official state source URLs, automated monitoring of those sources, and structured updates to the fee data that powers the calculator and state pages.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          When published amounts change on an official schedule, the corresponding verified figures and verification dates on this site are updated so visitors continue to see information grounded in the latest available government references. Details of the process are documented on our{" "}
          <Link href="/about/sources-and-methodology" className="font-medium text-[#1769AA] hover:underline">
            Sources & Methodology
          </Link>{" "}
          page.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">What we publish</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li className="flex gap-2">
            <span className="text-[#1769AA]">→</span>
            Free LLC cost calculator with 1-, 3-, and 5-year estimates
          </li>
          <li className="flex gap-2">
            <span className="text-[#1769AA]">→</span>
            State-by-state formation and recurring fee tables
          </li>
          <li className="flex gap-2">
            <span className="text-[#1769AA]">→</span>
            Guides on formation steps, timelines, EINs, and hidden costs
          </li>
          <li className="flex gap-2">
            <span className="text-[#1769AA]">→</span>
            Structure comparisons (LLC vs sole prop, corporation, S-Corp)
          </li>
          <li className="flex gap-2">
            <span className="text-[#1769AA]">→</span>
            Methodology and source documentation for trust and transparency
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">Contact</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Questions, corrections, or feedback:{" "}
          <a
            href="mailto:info@getllccostcalculator.com"
            className="font-medium text-[#1769AA] hover:underline"
          >
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
            <Link href="/about/sources-and-methodology" className="text-[#1769AA] hover:underline">
              Sources & Methodology
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
