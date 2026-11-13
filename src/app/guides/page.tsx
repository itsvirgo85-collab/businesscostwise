import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES_SECTION } from "@/data/navigation";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "LLC Guides: Formation, Costs & Compliance (2026)" },
  description:
    "Browse our LLC guides: what an LLC is, how to form one in 7 steps, formation and hidden costs, timelines, EINs, annual reports, and business structures.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "LLC Guides: Formation, Costs & Compliance (2026)",
    description:
      "Browse our LLC guides: what an LLC is, how to form one in 7 steps, formation and hidden costs, timelines, EINs, annual reports, and business structures.",
    type: "website",
    url: "/guides",
  },
  twitter: {
    card: "summary_large_image",
    title: "LLC Guides: Formation, Costs & Compliance (2026)",
    description:
      "Browse our LLC guides: what an LLC is, how to form one in 7 steps, formation and hidden costs, timelines, EINs, annual reports, and business structures.",
    images: ["/twitter-image"],
  },
};

export default function GuidesHubPage() {
  const faqs = [
    {
      question: "Where should I start if I'm forming an LLC for the first time?",
      answer:
        "Start with What Is an LLC? to understand the structure, then How to Form an LLC for the 7-step process, and the LLC Cost Calculator to see your state's fees.",
    },
    {
      question: "Which guide explains LLC costs?",
      answer:
        "How Much Does It Cost to Start an LLC? covers filing fees from $35 to about $500 plus recurring costs. Hidden Costs of Forming an LLC explains annual reports, franchise taxes, and registered agent fees.",
    },
    {
      question: "How do I choose between an LLC and another business structure?",
      answer:
        "The Business Structures guides compare LLCs with sole proprietorships, corporations, and S-Corps on liability, taxes, formalities, and formation costs.",
    },
    {
      question: "Where do I find annual report rules for my state?",
      answer:
        "The Annual Report Requirements by State guide lists which states charge a fee, which have little or no recurring report cost, and which add franchise tax.",
    },
  ];

  const structures = GUIDES_SECTION.subgroups?.[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        LLC Guides (2026)
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        <strong>Short answer:</strong> Start with the basics — what an LLC is and how to form one —
        then work through costs, timelines, and ongoing compliance. Every guide below links to
        verified state fee data where cost is part of the decision.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        These guides are educational only and are not legal, tax, or financial advice. Always confirm
        current requirements on your state&apos;s official website before filing.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-[#102A43]">All guides</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {GUIDES_SECTION.links.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-[#1769AA] hover:shadow-sm"
            >
              <h3 className="text-base font-semibold text-[#102A43]">{g.label}</h3>
              <p className="mt-2 text-sm text-slate-600">{g.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {structures && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#102A43]">Business Structures</h2>
          <p className="mt-2 max-w-3xl text-slate-600 leading-relaxed">
            {structures.description}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {structures.links.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-[#1769AA] hover:shadow-sm"
              >
                <h3 className="text-base font-semibold text-[#102A43]">{g.label}</h3>
                <p className="mt-2 text-sm text-slate-600">{g.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-12 max-w-3xl">
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

      <section className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 max-w-3xl">
        <h2 className="text-lg font-semibold text-[#102A43]">Related tools</h2>
        <ul className="mt-3 space-y-2 text-sm">
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
            <Link href="/tools" className="text-[#1769AA] hover:underline">
              All cost calculators & tools
            </Link>
          </li>
          <li>
            <Link href="/about/sources-and-methodology" className="text-[#1769AA] hover:underline">
              Sources & Methodology
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-8 text-xs leading-relaxed text-slate-500">
        Educational resource only. Not legal or tax advice. This site is not affiliated with any government agency.
      </p>
    </div>
  );
}
