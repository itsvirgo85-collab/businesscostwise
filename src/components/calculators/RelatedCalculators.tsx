import Link from "next/link";

/**
 * Shared "Related LLC Calculators" module for state pages.
 * Anchor text uses the state's name for the annual-report link so each
 * state page links to the renewal hub with an exact-match anchor.
 */
export default function RelatedCalculators({
  stateName,
}: {
  stateName: string;
}) {
  const links = [
    {
      href: "/llc-cost-calculator",
      label: "LLC Cost Calculator",
      note: "1-, 3- and 5-year totals for every state",
    },
    {
      href: "/annual-report-requirements-by-state",
      label: `${stateName} Annual Report Fee Calculator`,
      note: "Report fee, frequency and 5-year renewal total",
    },
    {
      href: "/tools/registered-agent-cost-calculator",
      label: `${stateName} Registered Agent Cost Calculator`,
      note: "Compare DIY vs. commercial agent costs",
    },
    {
      href: "/tools/non-resident-llc-cost-calculator",
      label: "Non-Resident LLC Cost Calculator",
      note: "Year-1 & 5-year costs in GBP, EUR, INR and 6 more currencies",
    },
    {
      href: "/tools/foreign-qualification-cost-calculator",
      label: "Foreign Qualification Cost Calculator",
      note: "Cost of operating in a second state",
    },
    {
      href: "/tools/llc-dissolution-cost-calculator",
      label: "LLC Dissolution Cost Calculator",
      note: "State filing fee plus unpaid annual fees",
    },
    {
      href: "/tools/llc-vs-s-corp-tax-savings-calculator",
      label: "LLC vs S-Corp Tax Savings Calculator",
      note: "Compare pass-through vs. S-corp election",
    },
    {
      href: "/tools/llc-tax-estimator",
      label: "LLC Tax Estimator",
      note: "Estimated federal tax and quarterly payments",
    },
    {
      href: "/tools/best-state-to-form-an-llc",
      label: "Best State to Form an LLC",
      note: "Compare states by cost and fit",
    },
  ];

  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h2 className="text-lg font-semibold text-[#102A43]">
        Related LLC Calculators
      </h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href} className="rounded-xl border border-slate-200 bg-white p-4">
            <Link
              href={link.href}
              className="font-semibold text-[#1769AA] hover:underline"
            >
              {link.label}
            </Link>
            <p className="mt-1 text-xs text-slate-500">{link.note}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-slate-600">
        Browse all calculators on the{" "}
        <Link href="/tools" className="text-[#1769AA] hover:underline">
          Tools hub
        </Link>{" "}
        or all guides on the{" "}
        <Link href="/guides" className="text-[#1769AA] hover:underline">
          Guides hub
        </Link>
        .
      </p>
    </section>
  );
}
