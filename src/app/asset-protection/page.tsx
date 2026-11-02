import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Asset Protection — Educational Checklist & Guides",
  description:
    "Educational overview of business asset protection concepts for small-business owners: separating finances, insurance, records, and realistic limits of LLC protection.",
};

export default function AssetProtectionPage() {
  const checklist = [
    "Form an appropriate business entity if it fits your risk profile (e.g. LLC) and maintain it properly",
    "Open and use a dedicated business bank account — never mix personal and business funds",
    "Keep accurate books and records; document major decisions",
    "Adopt a written operating agreement (for multi-member LLCs especially)",
    "Obtain appropriate business liability insurance and consider umbrella coverage",
    "Use written contracts with customers, vendors, and contractors",
    "Comply with state annual report and tax obligations on time",
    "Avoid personal guarantees on business obligations when possible",
    "Review insurance and entity compliance periodically",
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Asset Protection</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">
        Business Asset Protection — Educational Overview
      </h1>
      <p className="mt-3 text-slate-600">
        Forming an LLC can help separate business liabilities from personal assets, but it is not a guarantee.
        Courts can “pierce the veil” in cases of undercapitalization, fraud, or failure to respect the entity.
        Insurance and good practices remain essential.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#102A43]">Practical checklist (educational)</h2>
        <p className="mt-2 text-sm text-slate-600">
          Completing this list does not create legal protection or guarantee any outcome. It is a starting point
          for discussion with qualified advisors.
        </p>
        <ul className="mt-6 space-y-3">
          {checklist.map((item, i) => (
            <li key={i} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-medium text-slate-600">
                {i + 1}
              </span>
              <span className="text-sm text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 space-y-4 text-sm text-slate-700">
        <h2 className="text-xl font-semibold text-[#102A43]">Does an LLC protect personal assets?</h2>
        <p>
          An LLC generally limits members’ personal liability for the company’s contractual and tort obligations,
          subject to exceptions. Personal guarantees, unpaid taxes in some cases, and fraudulent transfers are
          common ways liability can still reach personal assets. Maintaining corporate formalities and adequate
          insurance strengthens the practical value of the structure.
        </p>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="font-medium">Further reading (external)</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <a href="https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" target="_blank" rel="noopener noreferrer" className="text-[#1769AA] hover:underline">
                SBA — Choose a business structure
              </a>
            </li>
            <li>
              <a href="https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" target="_blank" rel="noopener noreferrer" className="text-[#1769AA] hover:underline">
                IRS — Limited Liability Company
              </a>
            </li>
          </ul>
        </div>
      </section>

      <p className="mt-8 text-sm text-slate-500">
        This page is for educational purposes only and is not legal advice. Asset protection strategies depend
        on individual circumstances and applicable state law. Consult a licensed attorney.
      </p>
    </div>
  );
}
