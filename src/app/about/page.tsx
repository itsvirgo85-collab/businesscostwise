import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Get LLC Cost Calculator",
  description: "Mission, editorial approach, and how we handle official state fee data.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{"name":"Home","item":"/"},{"name":"About","item":"/about"}]} />
      <h1 className="text-3xl font-bold text-[#102A43]">About Get LLC Cost Calculator</h1>
      <p className="mt-4 text-slate-600">
        Get LLC Cost Calculator is an independent educational resource focused on US LLC formation costs,
        business structure comparisons, and practical small-business topics. Our goal is to help
        entrepreneurs understand government fees and basic structural trade-offs with clear source links.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-[#102A43]">How we handle fees</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>Every published state fee is tied to an official government source URL.</li>
        <li>We record a verification date for each record.</li>
        <li>Unverified amounts are never displayed as $0; they are marked as not verified or not included.</li>
        <li>Users are always directed to re-check the official site before filing.</li>
      </ul>
      <h2 className="mt-8 text-xl font-semibold text-[#102A43]">What we are not</h2>
      <p className="mt-2 text-sm text-slate-700">
        We are not a law firm, tax advisor, registered agent service, or government agency. Content is
        educational and does not create an attorney-client or advisor relationship.
      </p>
      <p className="mt-6 text-sm">
        <Link href="/about/sources-and-methodology" className="text-[#1769AA] hover:underline">
          Sources & Methodology →
        </Link>
      </p>
    </div>
  );
}
