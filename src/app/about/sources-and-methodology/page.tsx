import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata: Metadata = {
  title: { absolute: "Sources & Methodology" },
  description:
    "How we verify US LLC fees: official state sources, verification dates, automated monitoring and known limits — including Alabama, now verified and included.",
  alternates: { canonical: "/about/sources-and-methodology" },
  openGraph: {
    title: "Sources & Methodology",
    description:
      "How we verify US LLC fees: official state sources, verification dates, automated monitoring and known limits — including Alabama, now verified and included.",
    type: "article",
    url: "/about/sources-and-methodology",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sources & Methodology",
    description:
      "How we verify US LLC fees: official state sources, verification dates, automated monitoring and known limits — including Alabama, now verified and included.",
    images: ["/twitter-image"],
  },
};

export default function SourcesMethodologyPage() {
  const faqs = [
    {
      question: "Where do the LLC fee numbers on this site come from?",
      answer:
        "Base formation and recurring fees are taken from official state government websites — typically the Secretary of State or equivalent business-filing agency, and the relevant tax agency when franchise or entity taxes apply. Every verified state entry links to the primary official source and shows a verification date.",
    },
    {
      question: "How often are the fees updated?",
      answer:
        "We maintain a registry of official source URLs and run recurring automated checks. When published amounts change on a government page, the corresponding verified figures and verification dates on this site are updated after review. Always confirm the live official schedule before filing.",
    },
    {
      question: "Why do some states show limitations or exclusions?",
      answer:
        "Some states publish only variable formulas (for example income-based or net-worth-based taxes). We document fixed published amounts and note limitations rather than inventing a typical number. Alabama is verified and included: its Certificate of Formation costs $200, it has no LLC annual report, and its variable Business Privilege Tax applies only above $100, so it is noted rather than added to the fixed totals.",
    },
    {
      question: "Does this site provide legal or tax advice?",
      answer:
        "No. All content is educational only. Fee data and calculators are planning tools. Always verify current requirements on the official state website and consult a qualified professional for advice specific to your situation.",
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "About", item: "/about" },
          { name: "Sources & Methodology", item: "/about/sources-and-methodology" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">
        Sources & Methodology
      </h1>

      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        This page explains exactly where our US LLC formation and recurring fee numbers come from, how we verify them against official government sources, how automated monitoring works, and what limitations apply. Transparency is the foundation of trust for any cost comparison tool.
      </p>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Quick answer</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li>
            <strong>Primary sources:</strong> Official state Secretary of State (or equivalent) fee schedules and tax-agency pages.
          </li>
          <li>
            <strong>Verification:</strong> Each verified state shows a source link and a verification date.
          </li>
          <li>
            <strong>Updates:</strong> Automated monitoring of official pages + human review when changes are detected.
          </li>
          <li>
            <strong>Limitation:</strong> Variable or complex taxes are documented with notes rather than forced into a single fixed number.
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">Primary sources</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Base fees are taken from official state websites — typically the Secretary of State, Department of State, or equivalent business-filing agency. Where a franchise tax, privilege tax, or entity tax is involved, we also reference the relevant tax agency (for example a state comptroller or department of revenue).
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Every verified state entry on this site includes a link to the primary official source used for that figure, plus a verification date. Additional official references are listed when they clarify recurring taxes or report fees. We do not rely on secondary blog posts or formation-service marketing pages as the source of truth for fee amounts.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">Automated monitoring and updates</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Manual-only fee tables go stale. To reduce that risk, we maintain a structured registry of official source URLs for each state and run recurring automated checks against those government pages. The monitoring pipeline is designed to:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>Confirm that official source pages remain reachable</li>
          <li>Detect meaningful changes on fee schedules and filing guidance pages</li>
          <li>Flag states for review when published amounts or rules appear to have changed</li>
          <li>Update verified fee figures and verification dates when confirmed changes are applied</li>
        </ul>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The objective is straightforward: visitors should see fee data that tracks official government publications as closely as practical, without requiring a full manual re-check of every state after every legislative or agency update.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Automated monitoring does not replace careful reading of official schedules. Complex or variable taxes (for example income-based fees or privilege taxes that depend on net worth) are documented with limitations rather than forced into a single fixed number.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">Verification standards</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Each verified state entry includes a verification date and a link or reference to the official source. Fees change; the verification date tells you when we last confirmed the figure against the government reference. Always check the live official page before filing or final budgeting.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          We prefer fixed, published amounts that a founder can rely on for planning. When a state publishes only variable formulas, we note that limitation instead of inventing a “typical” number.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Verification is ongoing, not one-off. Fees are re-checked against official government sources on a recurring cadence, and the automated monitor flags a state for review when a published amount appears to have changed. Each state page shows its own verified date, so you can see exactly when its figures were last confirmed against the official schedule.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">What the calculators include</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>State formation / Articles of Organization (or Certificate of Formation) filing fees</li>
          <li>Fixed annual or biennial report fees when published as fixed amounts</li>
          <li>Fixed minimum franchise or entity taxes where applicable</li>
        </ul>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Variable taxes, local licenses, publication costs, and professional service fees are generally not included unless you enter them yourself as optional amounts in the calculator.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">Known limitations</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Alabama is verified and included: its Certificate of Formation costs $200, it has no LLC annual report, and its variable Business Privilege Tax applies only above $100, so it is noted on the Alabama page rather than added to the fixed totals. Some states have complex tiered fees; we document fixed published amounts and note where further review is needed. Government websites also redesign URLs; our source registry is updated when official links move.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Multi-year estimates assume the currently published fixed recurring fees continue. States can change report fees or franchise taxes. Always re-check the official schedule for the years you care about.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">Why this matters for trust and AI citations</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Authority on LLC cost information comes from proximity to primary sources, clear methodology, and a willingness to show limitations. By combining official links, verification dates, automated monitoring, and public documentation of the process, we aim to be a reliable educational reference rather than another unverified comparison table.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          When answer engines or AI Overviews cite cost figures, transparent sourcing and methodology help readers (and systems) evaluate reliability. That is why this page exists and why every state page points back to official sources.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">Corrections and reader reports</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Found an outdated fee or a newer official schedule? Use the{" "}
          <Link href="/contact" className="text-[#1769AA] hover:underline">
            contact form
          </Link>{" "}
          or email info@getllccostcalculator.com with the state, fee type, and official source URL. Reader reports help the monitoring process catch edge cases faster.
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

      <section className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Related pages</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">
              LLC Cost Calculator
            </Link>
          </li>
          <li>
            <Link href="/how-much-does-it-cost-to-start-an-llc" className="text-[#1769AA] hover:underline">
              How Much Does It Cost to Start an LLC?
            </Link>
          </li>
          <li>
            <Link href="/llc-cost-by-state" className="text-[#1769AA] hover:underline">
              LLC Costs by State table
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-[#1769AA] hover:underline">
              About Get LLC Cost Calculator
            </Link>
          </li>
          <li>
            <Link href="/disclaimer" className="text-[#1769AA] hover:underline">
              Educational Disclaimer
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 text-xs leading-relaxed text-slate-500">
        Educational information only. Not legal, tax, or financial advice. This site is not affiliated with any government agency. Always confirm current fees and rules on the official state website before filing.
      </p>

      <p className="mt-6">
        <Link href="/about" className="text-[#1769AA] hover:underline">
          ← Back to About
        </Link>
      </p>
    </div>
  );
}
