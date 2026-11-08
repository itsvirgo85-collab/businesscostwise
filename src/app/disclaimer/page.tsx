import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer — Get LLC Cost Calculator",
  description:
    "Educational use only. Get LLC Cost Calculator does not provide legal, tax, or financial advice. Always verify fees on official government websites.",
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
      <p className="mt-2 text-sm text-slate-500">Last updated: November 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700">
        <section>
          <h2 className="text-lg font-semibold text-[#102A43]">Educational purpose only</h2>
          <p className="mt-2">
            Content on Get LLC Cost Calculator—including articles, fee tables, calculators, and comparisons—is provided for general educational and informational purposes only. It does not constitute legal, tax, accounting, or financial advice.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#102A43]">Fees and rules change</h2>
          <p className="mt-2">
            State filing fees, tax rules, and business requirements change. Always confirm current requirements and fee amounts on the official website of the relevant Secretary of State, tax agency, or other government authority before taking any action.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#102A43]">No professional relationship</h2>
          <p className="mt-2">
            No attorney-client, advisor-client, or fiduciary relationship is created by your use of this website. For advice specific to your situation, consult a licensed attorney, CPA, or other qualified professional in the relevant jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#102A43]">Calculators and estimates</h2>
          <p className="mt-2">
            Calculators produce estimates based on the inputs and data available at the time of calculation. Results may be incomplete or outdated. We make no warranty regarding accuracy or fitness for any purpose.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#102A43]">Not a government website</h2>
          <p className="mt-2">
            Get LLC Cost Calculator is an independent educational resource. It is not affiliated with, endorsed by, or operated by any government agency.
          </p>
        </section>

        <p className="pt-2 text-slate-500">
          Related:{" "}
          <Link href="/terms" className="text-[#1769AA] hover:underline">
            Terms of Use
          </Link>
          {" · "}
          <Link href="/privacy" className="text-[#1769AA] hover:underline">
            Privacy Policy
          </Link>
          {" · "}
          <Link href="/contact" className="text-[#1769AA] hover:underline">
            Contact
          </Link>
          {" · "}
          <Link href="/about" className="text-[#1769AA] hover:underline">
            About
          </Link>
        </p>
      </div>
    </div>
  );
}
