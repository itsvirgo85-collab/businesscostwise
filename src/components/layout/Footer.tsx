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
            <h3 className="text-sm font-semibold text-[#102A43]">Tools & Guides</h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li><Link href="/llc-cost-calculator" className="hover:text-[#1769AA]">LLC Cost Calculator</Link></li>
              <li><Link href="/llc-cost-by-state" className="hover:text-[#1769AA]">Costs by State</Link></li>
              <li><Link href="/cheapest-states-to-form-an-llc" className="hover:text-[#1769AA]">Cheapest States</Link></li>
              <li><Link href="/most-expensive-states-to-form-an-llc" className="hover:text-[#1769AA]">Most Expensive States</Link></li>
              <li><Link href="/hidden-costs-of-forming-an-llc" className="hover:text-[#1769AA]">Hidden Costs</Link></li>
              <li><Link href="/annual-report-requirements-by-state" className="hover:text-[#1769AA]">Annual Reports by State</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#102A43]">Structures & Protection</h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li><Link href="/business-structures/llc-vs-sole-proprietorship" className="hover:text-[#1769AA]">LLC vs Sole Proprietorship</Link></li>
              <li><Link href="/business-structures/llc-vs-corporation" className="hover:text-[#1769AA]">LLC vs Corporation</Link></li>
              <li><Link href="/business-structures/single-member-vs-multi-member-llc" className="hover:text-[#1769AA]">Single vs Multi-Member LLC</Link></li>
              <li><Link href="/asset-protection" className="hover:text-[#1769AA]">Asset Protection</Link></li>
              <li><Link href="/about" className="hover:text-[#1769AA]">About</Link></li>
              <li><Link href="/about/sources-and-methodology" className="hover:text-[#1769AA]">Sources & Methodology</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#102A43]">Legal</h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li><Link href="/privacy" className="hover:text-[#1769AA]">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#1769AA]">Terms of Use</Link></li>
              <li><Link href="/disclaimer" className="hover:text-[#1769AA]">Disclaimer</Link></li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              Educational information only. Not legal, tax, or financial advice.
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
