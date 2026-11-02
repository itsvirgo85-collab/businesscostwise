import type { Metadata } from "next";
import LLCCostCalculator from "@/components/calculators/LLCCostCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LLC Cost Calculator by State — Formation & Annual Fees",
  description:
    "Estimate LLC formation costs by US state. Includes filing fees, annual reports, and franchise taxes where applicable. Every figure linked to official government sources.",
};

export default function LLCCostCalculatorPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">LLC Cost Calculator</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">
        LLC Formation Cost Calculator by State
      </h1>
      <p className="mt-3 max-w-3xl text-slate-600">
        Select a US state to estimate formation fees, optional registered agent costs, and recurring state charges over 1, 3, or 5 years. All base fees are drawn from official state sources and marked with verification dates.
      </p>

      <div className="mt-10">
        <LLCCostCalculator />
      </div>

      <section className="mt-14 max-w-3xl space-y-4 text-sm text-slate-600">
        <h2 className="text-lg font-semibold text-[#102A43]">What this calculator includes</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>State formation / Articles of Organization (or equivalent) filing fee</li>
          <li>Required registered agent designation fee when it is part of the official filing total (e.g. Florida)</li>
          <li>Annual or biennial report fees and minimum franchise / entity taxes where they apply</li>
          <li>Optional commercial registered agent, name reservation, and expedited processing (user-entered)</li>
        </ul>
        <h2 className="text-lg font-semibold text-[#102A43]">What it does not include</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Federal income tax or self-employment tax</li>
          <li>State income tax on business profits</li>
          <li>Local business licenses or permits</li>
          <li>Newspaper publication costs (where required)</li>
          <li>Attorney, accountant, or registered agent service markups beyond the amount you enter</li>
        </ul>
        <p>
          Always verify the current fee schedule on the official state website before you file. Fees change.
        </p>
      </section>
    </div>
  );
}
