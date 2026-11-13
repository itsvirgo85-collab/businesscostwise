import type { Metadata } from "next";
import Link from "next/link";
import { TOOLS_SECTION } from "@/data/navigation";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "Free LLC Cost Calculators & Tools (2026)" },
  description:
    "Free LLC cost tools: calculate formation and multi-year costs by state, compare up to five states, and estimate registered agent and foreign qualification fees.",
  alternates: { canonical: "/tools" },
  openGraph: {
    title: "Free LLC Cost Calculators & Tools (2026)",
    description:
      "Free LLC cost tools: calculate formation and multi-year costs by state, compare up to five states, and estimate registered agent and foreign qualification fees.",
    type: "website",
    url: "/tools",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free LLC Cost Calculators & Tools (2026)",
    description:
      "Free LLC cost tools: calculate formation and multi-year costs by state, compare up to five states, and estimate registered agent and foreign qualification fees.",
    images: ["/twitter-image"],
  },
};

export default function ToolsHubPage() {
  const faqs = [
    {
      question: "Which calculator should I use first?",
      answer:
        "Start with the LLC Cost Calculator: pick your state and see formation fees, annual reports, franchise taxes, and 1, 3 & 5-year totals.",
    },
    {
      question: "How do I compare LLC costs between states?",
      answer:
        "Use the Multi-State LLC Cost Comparator to compare formation fees, annual reports, franchise taxes, and 5-year totals for up to five states side by side.",
    },
    {
      question: "What does the registered agent calculator do?",
      answer:
        "It compares the cost of hiring a commercial registered agent service with serving as your own agent, with multi-year totals and the privacy trade-offs.",
    },
    {
      question: "When do I need the foreign qualification calculator?",
      answer:
        "Use it when your LLC was formed in one state but operates in another: it estimates registration, dual agents, and dual reports with 1, 3, and 5-year totals.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Tools", item: "/tools" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        Free LLC Cost Calculators & Tools (2026)
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        <strong>Short answer:</strong> Every tool below is free and uses verified state fee data with
        official source links. Start with the main cost calculator for your state, then use the
        specialised calculators when you compare states, hire an agent, or operate across state lines.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        These tools are educational only and are not legal, tax, or financial advice. Always confirm
        current fees on your state&apos;s official website before filing.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-[#102A43]">All tools</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {TOOLS_SECTION.links.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-[#1769AA] hover:shadow-sm"
            >
              <h3 className="text-base font-semibold text-[#102A43]">{t.label}</h3>
              <p className="mt-2 text-sm text-slate-600">{t.description}</p>
            </Link>
          ))}
        </div>
      </section>

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
        <h2 className="text-lg font-semibold text-[#102A43]">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/guides" className="text-[#1769AA] hover:underline">
              All LLC guides
            </Link>
          </li>
          <li>
            <Link href="/how-much-does-it-cost-to-start-an-llc" className="text-[#1769AA] hover:underline">
              How Much Does It Cost to Start an LLC?
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
        </ul>
      </section>

      <p className="mt-8 text-xs leading-relaxed text-slate-500">
        Educational resource only. Not legal or tax advice. This site is not affiliated with any government agency.
      </p>
    </div>
  );
}
