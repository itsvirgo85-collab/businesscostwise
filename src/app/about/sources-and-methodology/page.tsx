import type { Metadata } from "next";
import { STATE_FEES } from "@/data/stateFees";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Sources & Methodology",
  description: "How BusinessCostWise verifies state LLC fees and presents educational content.",
  alternates: { canonical: "/about/sources-and-methodology" },
};

export default function SourcesPage() {
  const verified = STATE_FEES.filter((s) => s.status === "verified");

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{"name":"Home","item":"/"},{"name":"About","item":"/about"},{"name":"Sources & Methodology","item":"/about/sources-and-methodology"}]} />
      <h1 className="text-3xl font-bold text-[#102A43]">Sources & Methodology</h1>
      <p className="mt-4 text-slate-600">
        State LLC filing fees and recurring charges change. We only publish figures that have been
        checked against an official government page and recorded with a verification date and source URL. Variable taxes and state-specific exceptions are excluded from fixed-fee totals unless they can be calculated reliably.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-[#102A43]">Primary sources used</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {verified.map((s) => (
          <li key={s.slug}>
            <span className="font-medium">{s.state}:</span>{" "}
            <a href={s.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-[#1769AA] hover:underline">
              {s.sourceName}
            </a>{" "}
            <span className="text-slate-500">(verified {s.verifiedAt})</span>
            {s.additionalSources?.map((source) => (
              <span key={source.url}> · <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-[#1769AA] hover:underline">{source.name}</a></span>
            ))}
          </li>
        ))}
      </ul>
      <h2 className="mt-8 text-xl font-semibold text-[#102A43]">Other references</h2>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
        <li>
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" className="text-[#1769AA] hover:underline" target="_blank" rel="noopener noreferrer">
            IRS — Limited Liability Company
          </a>
        </li>
        <li>
          <a href="https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" className="text-[#1769AA] hover:underline" target="_blank" rel="noopener noreferrer">
            SBA — Choose a business structure
          </a>
        </li>
      </ul>
      <p className="mt-8 text-sm text-slate-600">
        If a listed amount appears outdated, compare it with the linked government source before relying on the estimate. This site does not provide individual filing or legal advice.
      </p>
    </div>
  );
}
