import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer — Educational Information Only",
  description:
    "Important disclaimer for Get LLC Cost Calculator. All content is educational only and is not legal, tax, or financial advice. Always verify fees on official state websites.",
  alternates: { canonical: "/disclaimer" },
  openGraph: {
    title: "Disclaimer — Educational Information Only",
    description: "Important disclaimer for Get LLC Cost Calculator. All content is educational only and is not legal, tax, or financial advice. Always verify fees on official state websites.",
    type: "article",
    url: "/disclaimer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer — Educational Information Only",
    description: "Important disclaimer for Get LLC Cost Calculator. All content is educational only and is not legal, tax, or financial advice. Always verify fees on official state websites.",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#1769AA]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Disclaimer</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">Disclaimer</h1>

      <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
        <p>
          <strong>Educational information only.</strong> Get LLC Cost Calculator provides general educational information about US LLC formation costs, state fees, and business structures. Nothing on this website constitutes legal, tax, accounting, or financial advice.
        </p>
        <p>
          Fee amounts, processing times, and requirements change. Always confirm current figures and rules on the official website of the relevant Secretary of State (or equivalent agency) and consult a qualified professional for advice specific to your situation before filing or making business decisions.
        </p>
        <p>
          This site is not affiliated with any government agency, Secretary of State office, or the IRS. Links to official sources are provided for convenience and verification.
        </p>
        <p>
          Use of this website does not create an attorney-client, advisor, or any other professional relationship. Calculators and estimates are planning tools only and may not reflect all costs applicable to your circumstances.
        </p>
        <p>
          For questions or corrections:{" "}
          <a href="mailto:info@getllccostcalculator.com" className="text-[#1769AA] hover:underline">
            info@getllccostcalculator.com
          </a>
          . See also our{" "}
          <Link href="/privacy" className="text-[#1769AA] hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="text-[#1769AA] hover:underline">
            Terms of Use
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
