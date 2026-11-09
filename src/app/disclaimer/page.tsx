import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Disclaimer — Get LLC Cost Calculator",
  description:
    "Educational disclaimer for Get LLC Cost Calculator. Not legal, tax, or financial advice.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Disclaimer", item: "/disclaimer" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">Disclaimer</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: 2026</p>

      <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
        <p>
          Get LLC Cost Calculator publishes educational information about US limited liability company formation costs, related fees, and structure comparisons. Nothing on this site is legal, tax, accounting, or financial advice.
        </p>
        <p>
          State fees, forms, processing times, and eligibility rules change. Always confirm current requirements with the official Secretary of State (or equivalent) and other government sources before filing or paying fees.
        </p>
        <p>
          This site is not affiliated with any government agency. Calculators and tables are estimates based on published schedules at the time of verification and may not reflect every optional fee, expedite option, local license, or professional service cost.
        </p>
        <p>
          For advice specific to your situation, consult a licensed attorney or tax professional in your jurisdiction.
        </p>
        <p className="pt-4">
          <Link href="/about/sources-and-methodology" className="text-[#1769AA] hover:underline">
            Sources &amp; methodology
          </Link>
          {" · "}
          <Link href="/contact" className="text-[#1769AA] hover:underline">
            Contact
          </Link>
        </p>
      </div>
    </div>
  );
}
