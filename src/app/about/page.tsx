import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata: Metadata = {
  title: "About Get LLC Cost Calculator — Mission, Data & FAQs",
  description:
    "Independent educational resource for US LLC formation costs and structure comparisons. Official source links, verification dates, methodology, and how to contact us.",
  alternates: { canonical: "/about" },
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
        "Published base fees are checked against official government sources and marked with verification dates. Fees change. Always confirm the current schedule on the official state website before filing or budgeting.",
    },
    {
      question: "Is this legal or tax advice?",
      answer:
        "No. All content is educational only. Nothing on this site creates an attorney-client or advisor relationship. For advice specific to your situation, consult a licensed professional in the relevant jurisdiction.",
    },
    {
      question: "How can I report an outdated fee or broken source link?",
      answer:
        "Email info@getllccostcalculator.com or use the Contact page. Include the state name and the page URL if possible so we can review the official source.",
    },
    {
      question: "Do you form LLCs or act as a registered agent?",
      answer:
        "No. We do not file formation documents, provide registered agent services, or process government applications. We publish educational information and a free estimating calculator.",
    },
    {
      question: "Where can I see how fees are verified?",
      answer:
        "See the Sources & Methodology page for verification principles, primary source links by state, and limitations of the dataset.",
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
        <span className="text-slate-800">About</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">
        About Get LLC Cost Calculator
      </h1>

      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        Get LLC Cost Calculator is an independent educational resource focused on US LLC formation costs, business structure comparisons, and practical small-business topics. Our goal is to help readers understand published government fees and basic structural trade-offs with clear source links.
      </p>

      <p className="mt-3 text-slate-600 leading-relaxed">
        We are not affiliated with any Secretary of State, the IRS, or any filing service. For official rules and current fees, always use the government links on each state page.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/llc-cost-calculator"
          className="rounded-lg bg-[#102A43] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1769AA]"
        >
          Open Cost Calculator
        </Link>
        <Link
          href="/contact"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#1769AA]"
        >
          Contact us
        </Link>
        <Link
          href="/about/sources-and-methodology"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#1769AA]"
        >
          Sources & Methodology
        </Link>
      </div>

      <h2 className="mt-12 text-2xl font-bold text-[#102A43]">Our mission</h2>
      <p className="mt-3 text-slate-700 leading-relaxed">
        State filing fees and recurring costs are often shown without context. A low formation fee can sit next to a high annual franchise tax. Publication rules and local licenses are easy to miss. We publish verified numbers alongside multi-year perspective, explanations of common extra costs, and structure comparisons so readers can plan more accurately—always with a reminder to confirm on official sites.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-[#102A43]">How we handle fees</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Every published state fee is tied to an official government source URL.</li>
        <li>We record a verification date for each record.</li>
        <li>Unverified amounts are never displayed as $0; they are marked as not verified or not included.</li>
        <li>Readers are directed to re-check the official site before filing.</li>
      </ul>
      <p className="mt-3 text-slate-700">
        Full detail:{" "}
        <Link href="/about/sources-and-methodology" className="text-[#1769AA] hover:underline">
          Sources & Methodology
        </Link>
        . Browse all states on{" "}
        <Link href="/llc-cost-by-state" className="text-[#1769AA] hover:underline">
          LLC Costs by State
        </Link>
        .
      </p>

      <h2 className="mt-12 text-2xl font-bold text-[#102A43]">What we cover</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <Link href="/how-much-does-it-cost-to-start-an-llc" className="text-[#1769AA] hover:underline">
            How much it costs to start an LLC
          </Link>{" "}
          and{" "}
          <Link href="/hidden-costs-of-forming-an-llc" className="text-[#1769AA] hover:underline">
            hidden costs
          </Link>
        </li>
        <li>
          <Link href="/cheapest-states-to-form-an-llc" className="text-[#1769AA] hover:underline">
            Cheapest states
          </Link>{" "}
          and{" "}
          <Link href="/most-expensive-states-to-form-an-llc" className="text-[#1769AA] hover:underline">
            most expensive states
          </Link>{" "}
          rankings
        </li>
        <li>
          <Link href="/how-to-form-an-llc" className="text-[#1769AA] hover:underline">
            Step-by-step formation guidance
          </Link>
          ,{" "}
          <Link href="/how-long-does-it-take-to-start-an-llc" className="text-[#1769AA] hover:underline">
            timelines
          </Link>
          , and{" "}
          <Link href="/how-to-get-an-ein-for-free" className="text-[#1769AA] hover:underline">
            free EIN overview
          </Link>
        </li>
        <li>
          Structure comparisons:{" "}
          <Link href="/what-is-an-llc" className="text-[#1769AA] hover:underline">
            What is an LLC?
          </Link>
          ,{" "}
          <Link href="/business-structures/llc-vs-sole-proprietorship" className="text-[#1769AA] hover:underline">
            LLC vs Sole Proprietorship
          </Link>
          ,{" "}
          <Link href="/business-structures/llc-vs-corporation" className="text-[#1769AA] hover:underline">
            LLC vs Corporation
          </Link>
          ,{" "}
          <Link href="/business-structures/llc-vs-s-corp" className="text-[#1769AA] hover:underline">
            LLC vs S-Corp
          </Link>
          ,{" "}
          <Link href="/business-structures/single-member-vs-multi-member-llc" className="text-[#1769AA] hover:underline">
            Single- vs Multi-Member
          </Link>
        </li>
        <li>
          <Link href="/asset-protection" className="text-[#1769AA] hover:underline">
            Asset protection basics
          </Link>{" "}
          and{" "}
          <Link href="/annual-report-requirements-by-state" className="text-[#1769AA] hover:underline">
            annual report requirements by state
          </Link>
        </li>
        <li>
          Free{" "}
          <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">
            multi-year cost calculator
          </Link>
        </li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-[#102A43]">What we are not</h2>
      <p className="mt-3 text-slate-700 leading-relaxed">
        We are not a law firm, tax advisor, registered agent service, or government agency. Content is educational and does not create an attorney-client or advisor relationship. Always confirm current requirements on official state and IRS websites and consult qualified professionals for advice specific to your situation. See our{" "}
        <Link href="/disclaimer" className="text-[#1769AA] hover:underline">
          Disclaimer
        </Link>
        ,{" "}
        <Link href="/terms" className="text-[#1769AA] hover:underline">
          Terms of Use
        </Link>
        , and{" "}
        <Link href="/privacy" className="text-[#1769AA] hover:underline">
          Privacy Policy
        </Link>
        .
      </p>

      <h2 className="mt-12 text-2xl font-bold text-[#102A43]">Contact</h2>
      <p className="mt-3 text-slate-700 leading-relaxed">
        For general questions, source corrections, or site feedback:{" "}
        <a href="mailto:info@getllccostcalculator.com" className="text-[#1769AA] hover:underline">
          info@getllccostcalculator.com
        </a>
        . More detail on the{" "}
        <Link href="/contact" className="text-[#1769AA] hover:underline">
          Contact
        </Link>{" "}
        page.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-[#102A43]">Frequently asked questions</h2>
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

      <section className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Start exploring</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">
              LLC Cost Calculator
            </Link>
          </li>
          <li>
            <Link href="/what-is-an-llc" className="text-[#1769AA] hover:underline">
              What is an LLC?
            </Link>
          </li>
          <li>
            <Link href="/how-to-form-an-llc" className="text-[#1769AA] hover:underline">
              How to Form an LLC
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-[#1769AA] hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
