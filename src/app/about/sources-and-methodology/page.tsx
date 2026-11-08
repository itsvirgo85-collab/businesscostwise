import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sources & Methodology — How We Verify and Auto-Update LLC Fees",
  description:
    "How Get LLC Cost Calculator collects, verifies, and automatically monitors US LLC formation and recurring fee data from official state government sources.",
  alternates: { canonical: "/about/sources-and-methodology" },
  openGraph: {
    title: "Sources & Methodology — How We Verify and Auto-Update LLC Fees",
    description:
      "How Get LLC Cost Calculator collects, verifies, and automatically monitors US LLC formation and recurring fee data from official state government sources.",
    type: "article",
    url: "/about/sources-and-methodology",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sources & Methodology — How We Verify and Auto-Update LLC Fees",
    description:
      "How Get LLC Cost Calculator collects, verifies, and automatically monitors US LLC formation and recurring fee data from official state government sources.",
  },
};

export default function SourcesMethodologyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#1769AA]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/about" className="hover:text-[#1769AA]">
          About
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sources & Methodology</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">
        Sources & Methodology
      </h1>

      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        Transparency about where our numbers come from, how we verify them, and how we keep them current. This page explains our verification approach and the automated monitoring process behind US LLC formation and recurring state fees.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#102A43]">Primary sources</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Base fees are taken from official state websites — typically the Secretary of State, Department of State, or equivalent business-filing agency. Where a franchise tax or entity tax is involved, we also reference the relevant tax agency (for example a state comptroller or department of revenue).
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Every verified state entry on this site includes a link to the primary official source used for that figure, plus a verification date. Additional official references are listed when they clarify recurring taxes or report fees.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#102A43]">Automated monitoring & updates</h2>
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
          The objective is straightforward: visitors should see fee data that tracks official government publications as closely as practical, without requiring the founder to manually re-check every state from scratch after every legislative or agency update.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Automated monitoring does not replace careful reading of official schedules. Complex or variable taxes (for example income-based fees or privilege taxes that depend on net worth) are documented with limitations rather than forced into a single fixed number.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#102A43]">Verification standards</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Each verified state entry includes a verification date and a link or reference to the official source. Fees change; the verification date tells you when we last confirmed the figure against the government reference. Always check the live official page before filing.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          We prefer fixed, published amounts that a founder can rely on for budgeting. When a state publishes only variable formulas, we note that limitation instead of inventing a “typical” number.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#102A43]">What we include in calculators</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>State formation / Articles of Organization (or equivalent) filing fees</li>
          <li>Fixed annual or biennial report fees when published as fixed amounts</li>
          <li>Fixed minimum franchise or entity taxes where applicable</li>
        </ul>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Variable taxes, local licenses, publication costs, and professional service fees are generally not included unless you enter them yourself as optional amounts.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#102A43]">Known limitations</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Alabama is temporarily excluded from some verified comparisons while its variable Business Privilege Tax treatment is reviewed. Some states have complex tiered fees; we document fixed published amounts and note where further review is needed. Government websites also redesign URLs; our source registry is updated when official links move.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#102A43]">Why this matters for trust</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Authority on LLC cost information comes from proximity to primary sources, clear methodology, and a willingness to show limitations. By combining official links, verification dates, automated monitoring, and public documentation of the process, we aim to be a reliable educational reference rather than another unverified comparison table.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#102A43]">Corrections</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Found an outdated fee or a newer official schedule? Email{" "}
          <a href="mailto:info@getllccostcalculator.com" className="text-[#1769AA] hover:underline">
            info@getllccostcalculator.com
          </a>{" "}
          with the state, fee type, and official source URL. Reader reports help the monitoring process catch edge cases faster.
        </p>
      </section>

      <p className="mt-10 text-xs leading-relaxed text-slate-500">
        Educational information only. Not legal, tax, or financial advice. This site is not affiliated with any government agency.
      </p>

      <p className="mt-6">
        <Link href="/about" className="text-[#1769AA] hover:underline">
          ← Back to About
        </Link>
      </p>
    </div>
  );
}
