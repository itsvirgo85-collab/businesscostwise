import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Does an LLC Protect Personal Assets? Realistic Limits Explained",
  description:
    "Educational guide on how LLC limited liability works, when courts may pierce the veil, and practical steps small-business owners can take to strengthen asset protection.",
};

export default function AssetProtectionPage() {
  const checklist = [
    {
      title: "Maintain a real separation of finances",
      detail: "Open a dedicated business bank account and never use it for personal expenses. Commingling is one of the most common reasons courts disregard the LLC.",
    },
    {
      title: "Keep proper records and formalities",
      detail: "Document major decisions, maintain an operating agreement, and file required annual or biennial reports on time.",
    },
    {
      title: "Avoid personal guarantees when possible",
      detail: "Many loans, leases, and vendor contracts ask owners to personally guarantee the obligation. A personal guarantee can put personal assets at risk even if the LLC is properly maintained.",
    },
    {
      title: "Carry adequate business liability insurance",
      detail: "An LLC does not replace insurance. General liability, professional liability, and umbrella policies often provide the first and most practical layer of protection.",
    },
    {
      title: "Do not undercapitalize the business",
      detail: "Courts sometimes look at whether the company was set up with enough capital to meet reasonably foreseeable obligations.",
    },
    {
      title: "Use written contracts",
      detail: "Clear written agreements with customers, contractors, and vendors reduce disputes and help show the business is operated as a separate entity.",
    },
    {
      title: "Respect the entity in daily operations",
      detail: "Sign contracts in the name of the LLC, use the LLC’s name on invoices and marketing, and avoid treating company assets as personal property.",
    },
    {
      title: "Review compliance periodically",
      detail: "Confirm the registered agent is current, annual reports are filed, and any required licenses remain active.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Asset Protection</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">
        Does an LLC Protect Your Personal Assets?
      </h1>
      <p className="mt-3 text-slate-600 leading-relaxed">
        One of the main reasons people form a limited liability company is to create a legal separation
        between business liabilities and personal assets. In many ordinary commercial situations an LLC
        can help achieve that goal. However, limited liability is not absolute. Courts can “pierce the
        corporate veil” in certain circumstances, and personal guarantees, professional malpractice,
        and inadequate insurance can still expose personal assets.
      </p>
      <p className="mt-3 text-slate-600 leading-relaxed">
        This page explains the realistic limits of LLC protection and lists practical steps that support
        the separation of personal and business risk. It is educational only and is not legal advice.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">
          How limited liability is supposed to work
        </h2>
        <p className="mt-3 text-sm text-slate-700 leading-relaxed">
          When you properly form and maintain an LLC, the company is treated as a separate legal entity.
          In general, creditors of the business are expected to look to the company’s assets, not the
          personal house, car, or savings of the members. This separation is the core benefit most
          owners seek.
        </p>
        <p className="mt-3 text-sm text-slate-700 leading-relaxed">
          The protection is strongest when the LLC is adequately capitalized, keeps clean records,
          observes required formalities, and does not engage in fraud or other misconduct.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">
          When limited liability can fail
        </h2>
        <p className="mt-3 text-sm text-slate-700 leading-relaxed">
          Courts may disregard the LLC (often called “piercing the veil”) when the entity is treated
          as the alter ego of its owners. Common risk factors include:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Mixing personal and business funds or assets</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Failing to keep basic records or observe entity formalities</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Undercapitalizing the company relative to its risks</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Using the LLC to commit fraud or evade existing obligations</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Personal guarantees on loans, leases, or contracts</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Professional malpractice or personal negligence claims (depending on the profession and jurisdiction)</li>
        </ul>
        <p className="mt-4 text-sm text-slate-700 leading-relaxed">
          Even when the veil is not pierced, many everyday business relationships still require the
          owner to sign a personal guarantee. In those cases the LLC structure does not shield the
          guaranteed obligation.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Practical checklist to strengthen protection
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Completing these steps does not guarantee any legal outcome. They are widely recognized
          good practices that support the argument that the LLC is a real, separate entity.
        </p>

        <div className="mt-6 space-y-4">
          {checklist.map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#102A43] text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-[#102A43]">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#102A43]">
          Insurance remains essential
        </h2>
        <p className="mt-3 text-sm text-slate-700 leading-relaxed">
          An LLC is not a substitute for insurance. Business liability insurance, professional
          liability (errors & omissions) coverage where relevant, and personal umbrella policies
          often provide the most practical first line of defense. Many experienced advisors treat
          insurance and entity structure as complementary, not alternative, tools.
        </p>
      </section>

      <section className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Related resources on this site</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">
              LLC Cost Calculator
            </Link>
            {" "}— estimate formation and multi-year state costs
          </li>
          <li>
            <Link href="/business-structures/llc-vs-sole-proprietorship" className="text-[#1769AA] hover:underline">
              LLC vs Sole Proprietorship
            </Link>
            {" "}— side-by-side comparison of liability and other differences
          </li>
          <li>
            <Link href="/llc-cost-by-state" className="text-[#1769AA] hover:underline">
              LLC Costs by State
            </Link>
            {" "}— verified formation and recurring fees
          </li>
          <li>
            <Link href="/cheapest-states-to-form-an-llc" className="text-[#1769AA] hover:underline">
              Cheapest States to Form an LLC 2026
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 text-xs text-slate-500 leading-relaxed">
        This page is for educational purposes only. It does not create an attorney-client relationship
        and is not a substitute for advice from a licensed attorney in your jurisdiction. Asset
        protection strategies depend heavily on the specific facts, the type of business, the
        jurisdiction, and current law. Consult a qualified professional before making decisions.
      </p>
    </div>
  );
}
