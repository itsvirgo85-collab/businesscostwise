import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Use — Get LLC Cost Calculator",
  description: "Terms of use for Get LLC Cost Calculator educational website and tools.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Terms of Use", item: "/terms" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">Terms of Use</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: 2026</p>

      <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
        <p>
          By using Get LLC Cost Calculator, you agree to these terms. The site provides educational information about US LLC formation costs and related topics. It is not a law firm, tax advisor, or formation service.
        </p>
        <h2 className="text-xl font-semibold text-[#102A43] pt-4">Educational use only</h2>
        <p>
          Content is for general information. Fees, forms, and rules change. Always verify current requirements with the official state or federal source and consult a qualified professional for advice specific to your situation.
        </p>
        <h2 className="text-xl font-semibold text-[#102A43] pt-4">No warranties</h2>
        <p>
          Information is provided “as is” without warranties of accuracy, completeness, or fitness for a particular purpose. We are not liable for decisions made based on site content.
        </p>
        <h2 className="text-xl font-semibold text-[#102A43] pt-4">Acceptable use</h2>
        <p>
          Do not misuse the site, attempt to disrupt service, scrape in a way that harms availability, or use content to mislead others.
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
