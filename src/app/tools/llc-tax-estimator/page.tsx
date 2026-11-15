import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LlcTaxEstimator from "@/components/calculators/LlcTaxEstimator";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "LLC Tax Estimator: SE Tax + Quarterly Payments (2026)" },
  description:
    "Estimate your LLC's total federal tax bill: self-employment tax, income tax and quarterly estimated payments. Uses 2026 IRS brackets and the $184,500 wage base.",
  alternates: { canonical: "/tools/llc-tax-estimator" },
  openGraph: {
    title: "LLC Tax Estimator: SE Tax + Quarterly Payments (2026)",
    description:
      "Estimate your LLC's total federal tax bill: self-employment tax, income tax and quarterly estimated payments. Uses 2026 IRS brackets and the $184,500 wage base.",
    type: "website",
    url: "/tools/llc-tax-estimator",
  },
  twitter: {
    card: "summary_large_image",
    title: "LLC Tax Estimator: SE Tax + Quarterly Payments (2026)",
    description:
      "Estimate your LLC's total federal tax bill: self-employment tax, income tax and quarterly estimated payments. Uses 2026 IRS brackets and the $184,500 wage base.",
    images: ["/twitter-image"],
  },
};

export default function LlcTaxEstimatorPage() {
  const calculatorJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LLC Tax Estimator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free educational estimator for an LLC's federal tax bill: self-employment tax, federal income tax, and quarterly estimated payments, using 2026 IRS figures.",
  };

  const faqs = [
    {
      question: "How are LLCs taxed?",
      answer:
        "A single-member LLC is taxed as a sole proprietorship by default and a multi-member LLC as a partnership. The profit passes through to the owners' personal returns — the LLC itself usually pays no federal income tax. Owners pay self-employment tax on the profit plus income tax on their share.",
    },
    {
      question: "How much tax does an LLC pay?",
      answer:
        "It depends on profit and filing status. A single-member LLC with $100,000 of profit owes roughly $14,130 of self-employment tax plus income tax on the profit after the half-SE-tax deduction and the $16,100 standard deduction (2026) — about $25,700 total federal tax in that example. Use the calculator above for your own numbers.",
    },
    {
      question: "What tax deductions can an LLC claim?",
      answer:
        "Ordinary and necessary business expenses: home office, equipment, software, travel, insurance, professional fees, and half of your self-employment tax. Many owners also qualify for the 20% qualified business income (QBI) deduction, subject to income limits. Keep receipts and a separate business account — deductions need records, not just a category.",
    },
    {
      question: "Does an LLC pay tax in every state?",
      answer:
        "Federal tax is only part of the bill. Some states charge income tax on LLC profit, and a few charge a franchise tax or gross-receipts tax regardless of profit (for example Delaware's $400 annual tax and Texas franchise tax). This estimator is federal only — add your state separately.",
    },
    {
      question: "How much should an LLC set aside for quarterly taxes?",
      answer: "A common rule is 25–30% of profit, and the calculator above gives your exact figure: for $100,000 of single-filer profit it is about $6,436 a quarter. Pay it in four instalments — 15 April, 15 June, 15 September 2026 and 15 January 2027 for tax year 2026 — or the IRS charges an underpayment penalty. Put the money in a separate account the day you are paid, not at quarter-end.",
    },
    {
      question: "Does the LLC tax calculator include the QBI deduction and standard deduction?",
      answer: "Yes. The estimator subtracts half your self-employment tax, then the 2026 standard deduction ($16,100 single, $32,200 married), and optionally a simplified 20% QBI deduction on qualified business income. The QBI toggle is off by default and labelled simplified, because the real QBI rules have income limits and service-business restrictions. State income tax is not included — this is a federal estimate.",
    },
    {
      question: "How much is self-employment tax on LLC profit in 2026?",
      answer: "15.3% on 92.35% of net profit: 12.4% Social Security up to the $184,500 wage base, plus 2.9% Medicare with no cap, plus 0.9% additional Medicare tax over $200,000 (single) or $250,000 (married). On $100,000 of profit that is $14,130. You get to deduct half of it from your income, which is why the estimator shows it as a separate line.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorJsonLd) }}
      />
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Tools", item: "/tools" },
          { name: "LLC Tax Estimator", item: "/tools/llc-tax-estimator" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        LLC Tax Estimator 2026
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        An LLC does not pay federal income tax itself — the profit passes through to you, and you pay two taxes on it: self-employment tax and income tax. This estimator adds both up and splits the total into quarterly payments.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        Figures use 2026 federal brackets (IRS Rev. Proc. 2025-32), the $16,100 / $32,200 standard deductions, and the $184,500 Social Security wage base.
      </p>

      <p className="mt-3 max-w-3xl text-sm text-slate-500">
        Educational tool only. Not tax advice.
      </p>

      <div className="mt-10">
        <LlcTaxEstimator />
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">What the two taxes are</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Self-employment tax is 15.3% on 92.35% of net profit: 12.4% Social Security up to the $184,500 wage base, plus 2.9% Medicare on all earnings. Half of it is deductible when computing income tax. Income tax is then charged on the rest at the marginal brackets — 10% to 37% in 2026 — after the standard deduction and any QBI deduction.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Because nobody withholds tax from LLC profit, you pay it yourself in four quarterly estimated payments. Underpaying can trigger penalties, so set the money aside as the profit arrives rather than at year end.
        </p>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">LLC tax deductions checklist</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>Home office (simplified $5/sq ft up to 300 sq ft, or actual expenses)</li>
          <li>Equipment, software, and supplies used for the business</li>
          <li>Business travel, meals (50%), and vehicle mileage</li>
          <li>Insurance, licences, and professional fees</li>
          <li>Half of self-employment tax (automatic, above the line)</li>
          <li>Health insurance premiums for self-employed owners</li>
          <li>Qualified business income (QBI) deduction — up to 20%, subject to limits</li>
        </ul>
      </section>

      <figure className="mt-10 max-w-3xl">
        <Image
          src="/images/llc-tax-estimator.svg"
          alt="LLC tax calculator estimating self-employment tax income tax and quarterly payments for 2026"
          width={1200}
          height={630}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-xl border border-slate-200"
        />
        <figcaption className="mt-2 text-sm text-slate-500">2026 figures: Social Security wage base $184,500 and the 2026 federal brackets.</figcaption>
      </figure>
      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">How much tax will I pay on $100,000 LLC profit?</h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          For a single filer with $100,000 of LLC profit and no QBI deduction, the federal
          bill is about $25,745: $14,130 in self-employment tax (15.3% on 92.35% of profit)
          plus about $11,616 in income tax after the $16,100 standard deduction and the
          deduction for half your self-employment tax. That is $6,436 a quarter in estimated
          payments. Turn on the 20% QBI deduction in the calculator and the bill falls by
          roughly $2,500. These are 2026 figures — the Social Security wage base is
          $184,500 and the single standard deduction is $16,100. Several rival calculators
          still show 2025 figures ($176,100 wage base, $15,000 standard deduction), which
          understate the tax by a few hundred dollars.
        </p>
      </section>
      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">How are LLCs taxed: single-member vs multi-member?</h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          A single-member LLC is a disregarded entity: profit flows straight onto your
          personal return (Schedule C) and you pay self-employment tax on all of it. A
          multi-member LLC is a partnership by default: profit is split on Schedule K-1s
          and each member pays self-employment tax on their share (limited partners
          excepted). The total tax is usually similar — the difference is paperwork and
          who pays what, not the rate. Either way, an LLC can elect S-corp treatment with
          Form 2553 if the numbers work; that comparison is the job of our{" "}
          <Link href="/tools/llc-vs-s-corp-tax-savings-calculator" className="text-[#1769AA] hover:underline">
            LLC vs S-corp tax savings calculator
          </Link>
          , while this estimator answers the simpler question: what do I owe, and how much
          per quarter?
        </p>
      </section>
      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Frequently asked questions</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer list-none font-semibold text-[#102A43]">
                <span className="flex items-center justify-between">
                  {f.question}
                  <span className="ml-4 text-slate-400 transition group-open:rotate-180">▼</span>
                </span>
              </summary>
              <p className="mt-3 text-slate-600 leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-12 max-w-3xl rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Related tools &amp; guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/tools/llc-vs-s-corp-tax-savings-calculator" className="text-[#1769AA] hover:underline">
              LLC vs S-Corp Tax Savings Calculator
            </Link>
          </li>
          <li>
            <Link href="/business-structures/llc-vs-s-corp" className="text-[#1769AA] hover:underline">
              LLC vs S-Corp — the full comparison
            </Link>
          </li>
          <li>
            <Link href="/guides/franchise-tax-explained" className="text-[#1769AA] hover:underline">
              What Is a Franchise Tax? Which States Charge It?
            </Link>
          </li>
          <li>
            <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">
              LLC Cost Calculator
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Educational information only. This calculator and page provide general estimates and explanations. They are not tax advice. Figures use 2026 federal rates (IRS Rev. Proc. 2025-32; SSA wage base $184,500) and exclude state and local tax. Always confirm your tax position with a CPA. This site is not affiliated with any government agency.
      </p>
    </div>
  );
}
