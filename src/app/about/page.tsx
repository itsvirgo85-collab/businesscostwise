import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Get LLC Cost Calculator — Mission & Data Approach",
  description:
    "Independent educational resource for US LLC formation costs, business structure comparisons, and practical small-business topics. Official source links and verification dates on every fee.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#1769AA]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">About</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">
        About Get LLC Cost Calculator
      </h1>

      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        Get LLC Cost Calculator is an independent educational resource focused on US LLC formation costs, business structure comparisons, and practical small-business topics. Our goal is to help entrepreneurs understand government fees and basic structural trade-offs with clear source links.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-[#102A43]">Our mission</h2>
      <p className="mt-3 text-slate-700 leading-relaxed">
        State filing fees and recurring costs are often presented without context. We publish verified numbers alongside multi-year perspective, hidden-cost explanations, and structure comparisons so readers can budget more accurately before they file.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-[#102A43]">How we handle fees</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Every published state fee is tied to an official government source URL.</li>
        <li>We record a verification date for each record.</li>
        <li>Unverified amounts are never displayed as $0; they are marked as not verified or not included.</li>
        <li>Users are always directed to re-check the official site before filing.</li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-[#102A43]">What we cover</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>LLC formation and recurring costs by state</li>
        <li>Step-by-step formation guidance</li>
        <li>Comparisons between LLCs, sole proprietorships, corporations, and S-corps</li>
        <li>Asset protection basics and common compliance topics</li>
        <li>A free multi-year cost calculator</li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-[#102A43]">What we are not</h2>
      <p className="mt-3 text-slate-700 leading-relaxed">
        We are not a law firm, tax advisor, registered agent service, or government agency. Content is educational and does not create an attorney-client or advisor relationship. Always confirm current requirements on official state and IRS websites and consult qualified professionals for advice specific to your situation.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-[#102A43]">Transparency</h2>
      <p className="mt-3 text-slate-700 leading-relaxed">
        Our approach to sources, verification, and limitations is documented on the{" "}
        <Link href="/about/sources-and-methodology" className="text-[#1769AA] hover:underline">
          Sources & Methodology
        </Link>{" "}
        page.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/llc-cost-calculator"
          className="rounded-lg bg-[#102A43] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1769AA]"
        >
          Open Cost Calculator
        </Link>
        <Link
          href="/about/sources-and-methodology"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#1769AA]"
        >
          Sources & Methodology
        </Link>
      </div>
    </div>
  );
}
