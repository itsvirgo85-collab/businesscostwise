import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-[#102A43]">BusinessCostWise</h3>
            <p className="mt-2 text-sm text-slate-600">
              Practical, source-backed information on US LLC formation costs, business structures, and small-business asset protection.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#102A43]">Tools</h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li>
                <Link href="/llc-cost-calculator" className="hover:text-[#1769AA]">
                  LLC Cost Calculator
                </Link>
              </li>
              <li>
                <Link href="/llc-cost-by-state" className="hover:text-[#1769AA]">
                  Costs by State
                </Link>
              </li>
              <li>
                <Link href="/business-structures/llc-vs-sole-proprietorship" className="hover:text-[#1769AA]">
                  LLC vs Sole Proprietorship
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#102A43]">Resources</h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li>
                <Link href="/about" className="hover:text-[#1769AA]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/about/sources-and-methodology" className="hover:text-[#1769AA]">
                  Sources & Methodology
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-[#1769AA]">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#102A43]">Important</h3>
            <p className="mt-2 text-sm text-slate-600">
              This site provides educational information only. It is not legal, tax, or financial advice. Always verify fees on the official state website before filing.
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} BusinessCostWise. All rights reserved. · Educational resource · Not affiliated with any government agency.
        </div>
      </div>
    </footer>
  );
}
