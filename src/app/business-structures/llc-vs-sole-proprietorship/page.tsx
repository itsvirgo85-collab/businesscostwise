import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LLC vs Sole Proprietorship — Comparison Guide",
  description:
    "Side-by-side comparison of LLC and sole proprietorship: formation requirements, personal liability, taxes, administration, and when each structure may fit.",
};

export default function LLCvsSolePropPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/business-structures/llc-vs-sole-proprietorship" className="hover:text-[#1769AA]">Business Structures</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">LLC vs Sole Proprietorship</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">
        LLC vs Sole Proprietorship: Key Differences
      </h1>
      <p className="mt-3 text-slate-600">
        Both structures are common for small US businesses. An LLC is a separate legal entity created under state law;
        a sole proprietorship is simply you doing business in your own name (or a trade name). This page summarizes
        practical differences for educational purposes only — it is not legal or tax advice.
      </p>

      <div className="mt-10 overflow-x-auto rounded-xl border border-slate-200">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">Topic</th>
              <th className="px-4 py-3 font-medium">Sole Proprietorship</th>
              <th className="px-4 py-3 font-medium">LLC</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            <tr>
              <td className="px-4 py-3 font-medium">Formation</td>
              <td className="px-4 py-3">Usually no state formation filing required (may need local licenses or DBA)</td>
              <td className="px-4 py-3">State Articles of Organization (or equivalent) and filing fee required</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Separate legal entity</td>
              <td className="px-4 py-3">No — business and owner are the same</td>
              <td className="px-4 py-3">Yes — the LLC is a distinct entity</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Personal liability</td>
              <td className="px-4 py-3">Owner is generally personally liable for business debts and claims</td>
              <td className="px-4 py-3">Limited liability for members, subject to important exceptions (veil piercing, personal guarantees, professional malpractice, etc.)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Federal income tax (default)</td>
              <td className="px-4 py-3">Reported on owner’s personal return (Schedule C)</td>
              <td className="px-4 py-3">Single-member LLC usually disregarded; multi-member usually partnership. Can elect corporate treatment</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Ongoing state filings</td>
              <td className="px-4 py-3">Often fewer entity-level reports</td>
              <td className="px-4 py-3">Annual or biennial reports and possible franchise taxes in many states</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Administrative complexity</td>
              <td className="px-4 py-3">Generally simpler</td>
              <td className="px-4 py-3">More formalities (operating agreement, separate records, compliance)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <section className="mt-10 space-y-4 text-sm text-slate-700">
        <h2 className="text-xl font-semibold text-[#102A43]">When people choose an LLC</h2>
        <p>
          Common reasons include wanting a clearer separation between personal and business assets, the ability to
          add members later, and the perception of greater professionalism. Limited liability is not absolute —
          maintaining separate finances, proper records, and adequate insurance remain important.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43]">When a sole proprietorship may be enough</h2>
        <p>
          Very small, low-risk activities with minimal liability exposure sometimes start as sole proprietorships
          to avoid formation and annual report costs. Local licensing and tax obligations still apply.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43]">Taxes note</h2>
        <p>
          The IRS treats a single-member LLC as a disregarded entity for federal income tax purposes by default
          (unless it elects to be taxed as a corporation). Multi-member LLCs are generally treated as partnerships.
          See the IRS Limited Liability Company page for official guidance.
        </p>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="font-medium text-slate-800">Primary references</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <a href="https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" target="_blank" rel="noopener noreferrer" className="text-[#1769AA] hover:underline">
                IRS — Limited Liability Company (LLC)
              </a>
            </li>
            <li>
              <a href="https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" target="_blank" rel="noopener noreferrer" className="text-[#1769AA] hover:underline">
                SBA — Choose a business structure
              </a>
            </li>
          </ul>
        </div>
      </section>

      <p className="mt-8 text-sm text-slate-500">
        This comparison is educational. State rules, tax elections, and individual circumstances vary. Consult a
        qualified attorney or tax professional for advice specific to your situation.
      </p>
    </div>
  );
}
