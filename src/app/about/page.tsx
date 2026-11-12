import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "About Get LLC Cost Calculator" },
  description:
    "Why Get LLC Cost Calculator exists: one platform for verified US LLC formation costs, state fees and structure guides. Meet the author and our data process.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Get LLC Cost Calculator",
    description:
      "Why Get LLC Cost Calculator exists: one platform for verified US LLC formation costs, state fees and structure guides. Meet the author and our data process.",
    type: "article",
    url: "/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Get LLC Cost Calculator",
    description:
      "Why Get LLC Cost Calculator exists: one platform for verified US LLC formation costs, state fees and structure guides. Meet the author and our data process.",
    images: ["/twitter-image"],
  },
};

export default function AboutPage() {
  const faqs = [
    {
      question: "Who built Get LLC Cost Calculator?",
      answer:
        "Get LLC Cost Calculator was founded by an independent researcher and product builder who repeatedly saw founders struggling to compare real LLC costs across states. The site exists so people can find clear, source-linked fee data and plain-language guides in one place.",
    },
    {
      question: "What is Get LLC Cost Calculator?",
      answer:
        "It is an independent educational website that publishes verified US LLC formation and recurring fee information, multi-year cost estimates, and practical guides on business structures. It is not a government agency, law firm, or formation service.",
    },
    {
      question: "Are the state fees official?",
      answer:
        "Base fees are drawn from official state sources and marked with verification dates. Always confirm the current schedule on the official state website before filing or budgeting.",
    },
    {
      question: "How do you keep fee data up to date?",
      answer:
        "We maintain a registry of official government source URLs for each state, run automated checks against those pages, and update verified fee data when published amounts change.",
    },
    {
      question: "Is this legal or tax advice?",
      answer:
        "No. All content is educational only. It does not create an attorney-client or advisor relationship and should not be used as a substitute for professional advice specific to your situation.",
    },
    {
      question: "How can I contact you or suggest a correction?",
      answer:
        "Use the contact form on this site. We welcome corrections to fee data, links to newer official schedules, and questions about methodology.",
    },
  ];

  const authorJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.getllccostcalculator.com/#founder",
    name: "Get LLC Cost Calculator Founder",
    url: "https://www.getllccostcalculator.com/about",
    jobTitle: "Founder & Editor",
    worksFor: {
      "@id": "https://www.getllccostcalculator.com/#organization",
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

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "About", item: "/about" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        About Get LLC Cost Calculator
      </h1>

      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        Get LLC Cost Calculator is an independent educational platform built for people who need clear answers about US LLC formation costs, recurring state obligations, and which structure actually fits their situation.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">Why this site exists</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Forming an LLC should not require opening fifteen browser tabs, guessing which “fee” is the real state fee, and hoping a third-party site has not gone stale. Official numbers were scattered. Comparison tables disagreed. This site was built as a single problem-solving platform: verified formation and recurring fees with official source links, a free multi-year calculator, and plain-language guides.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">About the author</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Get LLC Cost Calculator is maintained by an independent researcher and product builder focused on practical tools for small-business decisions. The work centers on official state fee schedules, clear documentation of what is and is not included in cost estimates, and continuous improvement of the guides people use most.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">Our mission</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Many founders see only a headline formation fee and miss annual reports, franchise taxes, publication requirements, and registered agent costs. We aim to make those numbers transparent, state by state, with clear methodology and official source links.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">How we keep information current</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Details of the process are documented on our{" "}
          <Link href="/about/sources-and-methodology" className="font-medium text-[#1769AA] hover:underline">
            Sources & Methodology
          </Link>{" "}
          page.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">Contact</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Questions, corrections, or feedback: use the{" "}
          <Link href="/contact" className="font-medium text-[#1769AA] hover:underline">
            contact form
          </Link>
          .
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
            <Link href="/business-structures" className="text-[#1769AA] hover:underline">
              Business Structures
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
