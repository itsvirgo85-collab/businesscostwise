import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — BusinessCostWise",
  description: "Terms governing use of the BusinessCostWise educational website and calculators.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Terms of Use</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">Terms of Use</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: November 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700">
        <section>
          <h2 className="text-lg font-semibold text-[#102A43]">Acceptance</h2>
          <p className="mt-2">
            By using BusinessCostWise you agree to these Terms of Use. If you do not agree, please do not use the site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#102A43]">Educational purpose only</h2>
          <p className="mt-2">
            All content, calculators, fee tables, and comparisons are provided for general educational and informational
            purposes. Nothing on this site constitutes legal, tax, accounting, or financial advice. Laws, fees, and
            requirements change. Always confirm current information on the official state government website before
            filing or making decisions.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#102A43]">No professional relationship</h2>
          <p className="mt-2">
            Use of this site does not create an attorney-client, accountant-client, or any other professional relationship.
            For advice specific to your situation, consult a licensed professional in the relevant jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#102A43]">Accuracy and sources</h2>
          <p className="mt-2">
            We make reasonable efforts to link every published state fee to an official government source and to note
            verification dates. Despite this care, fees and rules can change without notice. We do not warrant that
            any information is complete, current, or error-free.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#102A43]">Limitation of liability</h2>
          <p className="mt-2">
            To the fullest extent permitted by law, BusinessCostWise and its operators are not liable for any loss,
            damage, or expense arising from your use of (or reliance on) the site, including any decisions made on
            the basis of the calculators or content.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#102A43]">Intellectual property</h2>
          <p className="mt-2">
            Site design, original text, and the arrangement of publicly available fee data are protected by applicable
            law. You may view and use the information for personal, non-commercial research. Systematic scraping or
            republication of the full dataset without permission is not allowed.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#102A43]">Changes</h2>
          <p className="mt-2">
            We may revise these terms at any time. Continued use of the site after changes constitutes acceptance of
            the updated terms.
          </p>
        </section>

        <p className="pt-4 text-slate-500">
          See also our <Link href="/disclaimer" className="text-[#1769AA] hover:underline">Disclaimer</Link> and{" "}
          <Link href="/privacy" className="text-[#1769AA] hover:underline">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}
