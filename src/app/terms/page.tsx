import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — Get LLC Cost Calculator",
  description:
    "Terms of use for Get LLC Cost Calculator. Educational content only. Not legal, tax, or financial advice.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Use — Get LLC Cost Calculator",
    description: "Terms of use for Get LLC Cost Calculator. Educational content only. Not legal, tax, or financial advice.",
    type: "article",
    url: "/terms",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use — Get LLC Cost Calculator",
    description: "Terms of use for Get LLC Cost Calculator. Educational content only. Not legal, tax, or financial advice.",
  },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Terms of Use</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">Terms of Use</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: 2026</p>

      <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
        <p>
          By using Get LLC Cost Calculator, you agree to these terms. If you do not agree, please do not use the site.
        </p>
        <h2 className="text-xl font-semibold text-[#102A43] pt-4">Educational purpose only</h2>
        <p>
          All content, calculators, and tools on this site are for general educational purposes. They are not legal, tax, accounting, or financial advice and do not create a professional relationship with you.
        </p>
        <h2 className="text-xl font-semibold text-[#102A43] pt-4">No warranties</h2>
        <p>
          Fee data and other information may be incomplete or out of date. Always verify current requirements on official state and federal websites before acting. We provide the site “as is” without warranties of any kind.
        </p>
        <h2 className="text-xl font-semibold text-[#102A43] pt-4">Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, we are not liable for any damages arising from your use of the site or reliance on its content.
        </p>
        <h2 className="text-xl font-semibold text-[#102A43] pt-4">Acceptable use</h2>
        <p>
          You may not misuse the site, attempt to disrupt it, or use automated means to scrape it in a way that harms service for others.
        </p>
        <h2 className="text-xl font-semibold text-[#102A43] pt-4">Contact</h2>
        <p>
          Questions:{" "}
          <a href="mailto:info@getllccostcalculator.com" className="text-[#1769AA] hover:underline">
            info@getllccostcalculator.com
          </a>
          .
        </p>
        <p className="pt-4">
          See also our{" "}
          <Link href="/privacy" className="text-[#1769AA] hover:underline">Privacy Policy</Link>
          {" "}and{" "}
          <Link href="/disclaimer" className="text-[#1769AA] hover:underline">Disclaimer</Link>.
        </p>
      </div>
    </div>
  );
}
