import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LLC vs Corporation — Key Differences for Small Businesses",
  description:
    "Side-by-side comparison of LLC and corporation: formation, liability, taxes, ownership, formalities, and when each structure may fit US small businesses.",
};

export default function LLCvsCorporationPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500">Business Structures</span>
        <span className="mx-2">/</span>
        <span className="text-slate-800">LLC vs Corporation</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">
        LLC vs Corporation: Key Differences
      </h1>
      <p className="mt-3 text-slate-600 leading-relaxed">
        Both the limited liability company (LLC) and the corporation provide limited liability protection
        and are formed under state law. They differ significantly in taxation defaults, ownership rules,
        formalities, and flexibility. This page summarizes the practical differences for educational
        purposes. It is not legal or tax advice.
      </p>

      <div className="mt-10 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">Topic</th>
              <th className="px-4 py-3 font-medium">LLC</th>
              <th className="px-4 py-3 font-medium">Corporation (C-Corp default)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            <tr>
              <td className="px-4 py-3 font-medium text-[#102A43]">Formation</td>
              <td className="px-4 py-3">File Articles / Certificate of Organization with the state + pay filing fee</td>
              <td className="px-4 py-3">File Articles / Certificate of Incorporation with the state + pay filing fee</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#102A43]">Separate legal entity</td>
              <td className="px-4 py-3">Yes</td>
              <td className="px-4 py-3">Yes</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#102A43]">Personal liability</td>
              <td className="px-4 py-3">Limited liability for members (subject to veil-piercing, personal guarantees, etc.)</td>
              <td className="px-4 py-3">Limited liability for shareholders (same general exceptions apply)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#102A43]">Default federal tax</td>
              <td className="px-4 py-3">Single-member: disregarded entity. Multi-member: partnership. Can elect S-Corp or C-Corp treatment</td>
              <td className="px-4 py-3">C-Corporation (entity-level tax). Can elect S-Corporation status if eligibility rules are met</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#102A43]">Double taxation</td>
              <td className="px-4 py-3">Generally avoided under default pass-through treatment</td>
              <td className="px-4 py-3">Yes under C-Corp (corporate tax + tax on dividends). Avoided if valid S-Corp election</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#102A43]">Ownership flexibility</td>
              <td className="px-4 py-3">Very flexible. Members can be individuals, other entities, or foreign persons (subject to state rules)</td>
              <td className="px-4 py-3">C-Corp: flexible. S-Corp: strict limits (max 100 shareholders, only certain eligible shareholders, one class of stock)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#102A43]">Management structure</td>
              <td className="px-4 py-3">Member-managed or manager-managed. Highly customizable via operating agreement</td>
              <td className="px-4 py-3">Board of directors + officers. More rigid statutory structure</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#102A43]">Formalities</td>
              <td className="px-4 py-3">Generally lighter (operating agreement, annual reports). Still must respect the entity</td>
              <td className="px-4 py-3">More formal: bylaws, board meetings, minutes, shareholder meetings, stock records</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#102A43]">Raising capital / investors</td>
              <td className="px-4 py-3">Possible but less familiar to traditional venture investors</td>
              <td className="px-4 py-3">Preferred structure for most venture capital and many institutional investors</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#102A43]">Ongoing state costs</td>
              <td className="px-4 py-3">Annual/biennial reports + possible franchise taxes (varies widely by state)</td>
              <td className="px-4 py-3">Similar report requirements; some states have different fee schedules for corporations</td>
            </tr>
          </tbody>
        </table>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">When people often choose an LLC</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Desire for pass-through taxation without the stricter S-Corp eligibility rules</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Preference for simpler governance and fewer formal meeting requirements</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Flexible ownership (including entities or non-US persons as members)</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Small businesses, freelancers, consultants, and closely held companies that do not plan to raise institutional venture capital soon</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#102A43]">When people often choose a Corporation</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Plans to seek venture capital or issue multiple classes of stock</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Desire to retain earnings inside the company at corporate tax rates</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Need for a familiar structure for employee equity plans (stock options, etc.)</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Preference for the traditional corporate governance model</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#102A43]">Important tax note</h2>
        <p className="mt-3 text-sm text-slate-700 leading-relaxed">
          An LLC can elect to be taxed as a C-Corporation or, if it qualifies, as an S-Corporation.
          A corporation can also elect S-Corporation status if it meets the eligibility requirements.
          The “best” tax treatment depends on profits, owner compensation, self-employment tax considerations,
          state taxes, and future plans. Tax rules change and outcomes vary by situation.
        </p>
      </section>

      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Formation costs differ by state</h2>
        <p className="mt-2 text-sm text-slate-600">
          Both LLCs and corporations require state filing fees. The exact amounts and ongoing annual costs
          vary significantly by state.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/llc-cost-calculator"
            className="rounded-lg bg-[#102A43] px-4 py-2 text-sm font-medium text-white hover:bg-[#1769AA] transition"
          >
            LLC Cost Calculator
          </Link>
          <Link
            href="/llc-cost-by-state"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-[#1769AA] transition"
          >
            Costs by State
          </Link>
          <Link
            href="/cheapest-states-to-form-an-llc"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-[#1769AA] transition"
          >
            Cheapest States
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-[#102A43]">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/business-structures/llc-vs-sole-proprietorship" className="text-[#1769AA] hover:underline">
              LLC vs Sole Proprietorship
            </Link>
          </li>
          <li>
            <Link href="/asset-protection" className="text-[#1769AA] hover:underline">
              Does an LLC Protect Personal Assets?
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 text-xs text-slate-500 leading-relaxed">
        This comparison is educational only. Entity choice has significant legal and tax consequences.
        Consult a qualified attorney and tax professional licensed in the relevant jurisdiction before
        forming any entity or making elections.
      </p>
    </div>
  );
}
