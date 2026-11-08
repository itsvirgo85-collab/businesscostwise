import type { Metadata } from "next";
import Link from "next/link";
import { STATE_FEES } from "@/data/stateFees";

export const metadata: Metadata = {
  title: "Sources & Methodology — How We Verify LLC Fees",
  description:
    "How Get LLC Cost Calculator verifies state LLC fees, records sources, and presents educational content. Official government links and verification dates.",
};

export default function SourcesPage() {
  const verified = STATE_FEES.filter((s) => s.status === "verified");

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

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">Sources & Methodology</h1>

      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        State LLC filing fees and recurring charges change. We only publish figures that have been checked against an official government page and recorded with a verification date and source URL. Variable taxes and state-specific exceptions are excluded from fixed-fee totals unless they can be calculated reliably.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-[#102A43]">Verification principles</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Prefer primary official sources (Secretary of State, Department of Revenue, or equivalent).</li>
        <li>Record the source URL and verification date for every published fee.</li>
        <li>Do not invent or round unknown fees into $0.</li>
        <li>Flag complexity (variable taxes, publication requirements, local licenses) in notes where relevant.</li>
        <li>Remind readers to re-check the official site before filing.</li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-[#102A43]">Primary sources used</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {verified.map((s) => (
          <li key={s.slug}>
            <span className="font-medium">{s.state}:</span>{" "}
            <a
              href={s.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1769AA] hover:underline"
            >
              {s.sourceName}
            </a>{" "}
            <span className="text-slate-500">(verified {s.verifiedAt})</span>
            {s.additionalSources?.map((source) => (
              <span key={source.url}>
                {" "}·{" "}
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1769AA] hover:underline"
                >
                  {source.name}
                </a>
              </span>
            ))}
          </li>
        ))}
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-[#102A43]">Other references</h2>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
        <li>
          <a
            href="https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc"
            className="text-[#1769AA] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            IRS — Limited Liability Company
          </a>
        </li>
        <li>
          <a
            href="https://www.sba.gov/business-guide/launch-your-business/choose-business-structure"
            className="text-[#1769AA] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            SBA — Choose a business structure
          </a>
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-[#102A43]">Limitations</h2>
      <p className="mt-3 text-slate-700 leading-relaxed">
        This site does not provide individual filing, legal, or tax advice. Local licenses, publication costs, expedited fees, and professional service fees are often outside the fixed state fee tables. If a listed amount appears outdated, compare it with the linked government source before relying on the estimate.
      </p>

      <p className="mt-8 text-sm">
        <Link href="/about" className="text-[#1769AA] hover:underline">
          ← Back to About
        </Link>
        {" · "}
        <Link href="/llc-cost-by-state" className="text-[#1769AA] hover:underline">
          LLC Costs by State
        </Link>
      </p>
    </div>
  );
}
