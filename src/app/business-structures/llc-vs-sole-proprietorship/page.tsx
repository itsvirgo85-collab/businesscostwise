import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata: Metadata = {
  title: "LLC vs Sole Proprietorship — Comparison Guide",
  description:
    "Side-by-side comparison of LLC and sole proprietorship: formation requirements, personal liability, taxes, administration, and when each structure may fit.",
};

export default function LLCvsSolePropPage() {
  const faqs = [
    {
      question: "Is an LLC better than a sole proprietorship?",
      answer:
        "An LLC provides limited liability protection that a sole proprietorship does not. A sole proprietorship is simpler and usually cheaper to start, but the owner is generally personally liable for business debts and claims. The better choice depends on risk, growth plans, and tax situation.",
    },
    {
      question: "Does a sole proprietorship cost anything to form?",
      answer:
        "Usually there is no state formation filing fee for a sole proprietorship. You may still need local licenses, a DBA (trade name) registration, or permits depending on your city and industry.",
    },
    {
      question: "Can I switch from sole proprietorship to LLC later?",
      answer:
        "Yes. Many owners start as sole proprietors and form an LLC later. You will need to file formation documents with the state, obtain a new EIN in most cases, and update bank accounts, contracts, and licenses.",
    },
    {
      question: "Does an LLC always protect personal assets?",
      answer:
        "No. Limited liability can fail if you mix personal and business finances, undercapitalize the company, commit fraud, or sign personal guarantees. Proper formalities and insurance remain important.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500">Business Structures</span>
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
              <td className="px-4 py-3">Limited liability for members, subject to important exceptions</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Federal income tax (default)</td>
              <td className="px-4 py-3">Reported on owner’s personal return (Schedule C)</td>
              <td className="px-4 py-3">Single-member LLC usually disregarded; multi-member usually partnership</td>
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
          add members later, and the perception of greater professionalism. Limited liability is not absolute.
        </p>
        <h2 className="text-xl font-semibold text-[#102A43]">When a sole proprietorship may be enough</h2>
        <p>
          Very small, low-risk activities with minimal liability exposure sometimes start as sole proprietorships
          to avoid formation and annual report costs. Local licensing and tax obligations still apply.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">Frequently asked questions</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-[#102A43] text-sm">{f.question}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-10 text-xs text-slate-500">
        This comparison is educational. State rules, tax elections, and individual circumstances vary. Consult a
        qualified attorney or tax professional for advice specific to your situation.
      </p>
    </div>
  );
}
