import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Educational use only — not legal, tax, or financial advice.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-[#102A43]">Disclaimer</h1>
      <div className="mt-6 space-y-4 text-sm text-slate-700">
        <p>
          The content on BusinessCostWise is provided for general educational and informational purposes only.
          It does not constitute legal, tax, accounting, or financial advice.
        </p>
        <p>
          State filing fees, tax rules, and business requirements change. Always confirm current requirements
          and fee amounts on the official website of the relevant Secretary of State, tax agency, or other
          government authority before taking any action.
        </p>
        <p>
          No attorney-client, advisor-client, or fiduciary relationship is created by your use of this website.
          For advice specific to your situation, consult a licensed attorney, CPA, or other qualified professional
          in the relevant jurisdiction.
        </p>
        <p>
          Calculators produce estimates based on the inputs and data available at the time of calculation.
          Results may be incomplete or outdated. We make no warranty regarding accuracy or fitness for any purpose.
        </p>
      </div>
    </div>
  );
}
