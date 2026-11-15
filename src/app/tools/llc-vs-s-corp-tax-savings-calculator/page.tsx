import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScorpSavingsCalculator from "@/components/calculators/ScorpSavingsCalculator";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "LLC vs S-Corp Tax Savings Calculator (2026)" },
  description:
    "Compare LLC self-employment tax with S-corp payroll tax. Enter profit and a reasonable salary to see your estimated yearly saving and break-even point.",
  alternates: { canonical: "/tools/llc-vs-s-corp-tax-savings-calculator" },
  openGraph: {
    title: "LLC vs S-Corp Tax Savings Calculator (2026)",
    description:
      "Compare LLC self-employment tax with S-corp payroll tax. Enter profit and a reasonable salary to see your estimated yearly saving and break-even point.",
    type: "website",
    url: "/tools/llc-vs-s-corp-tax-savings-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "LLC vs S-Corp Tax Savings Calculator (2026)",
    description:
      "Compare LLC self-employment tax with S-corp payroll tax. Enter profit and a reasonable salary to see your estimated yearly saving and break-even point.",
    images: ["/twitter-image"],
  },
};

export default function ScorpSavingsPage() {
  const calculatorJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LLC vs S-Corp Tax Savings Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free educational calculator comparing LLC self-employment tax with S-corporation payroll tax on a reasonable salary, using 2026 federal figures.",
  };

  const faqs = [
    {
      question: "How much does an LLC pay in self-employment tax?",
      answer:
        "By default, an LLC taxed as a sole proprietorship or partnership pays 15.3% self-employment tax on 92.35% of net profit — 12.4% Social Security up to the 2026 wage base of $184,500, plus 2.9% Medicare on all earnings. A $100,000 profit means about $14,130 of self-employment tax.",
    },
    {
      question: "How does an S-corp election save tax?",
      answer:
        "With an S-corp election, only your salary is subject to payroll tax. The remaining profit is distributed to you without self-employment tax. The saving is the payroll tax on the distributions, minus the cost of running payroll and extra filings.",
    },
    {
      question: "At what profit does an S-corp election make sense?",
      answer:
        "As a rough rule, the election often starts to pay off around $60,000–$80,000 of annual profit with a reasonable salary of roughly 40–60% of profit, once payroll costs are covered. Use the calculator above with your own salary and payroll costs — the break-even moves a lot with both.",
    },
    {
      question: "What is the deadline to elect S-corp status (Form 2553)?",
      answer:
        "Form 2553 is generally due no more than 2 months and 15 days after the beginning of the tax year the election is to take effect. If you miss it, late-election relief is available under Revenue Procedure 2013-30 in many cases — ask a CPA rather than assuming you must wait a year.",
    },
    {
      question: "Does an S-corp election change my state LLC fees?",
      answer:
        "No — the LLC still pays the same state formation and annual fees. Some states add S-corp-specific costs, for example California charges S-corporations 1.5% of net income (minimum $800 per year). The calculator shows your state's recurring LLC cost for context.",
    },
    {
      question: "What is a reasonable salary for an S-corp owner?",
      answer: "A reasonable salary is what you would pay someone else to do the same work in your area — the IRS looks at your experience, duties, hours and what comparable businesses pay. As a rough guide, owners commonly pay themselves 40–60% of profit as salary, but there is no safe percentage: a $40,000 salary on $100,000 of profit is defensible for many service businesses, while a $20,000 salary on $200,000 of profit is the kind of figure that attracts an audit. Pay it through real payroll, with withholdings.",
    },
    {
      question: "How do I calculate the S-corp election break-even profit?",
      answer: "Break-even is the profit where the self-employment tax saved on distributions equals the payroll tax and running costs of the S-corp. Enter your profit, your reasonable salary and your annual payroll cost in the calculator above and it scans profits from $5,000 to $1,000,000 to find the break-even point at your salary share. As a rule of thumb it lands near $60,000–$80,000 of profit for most owners.",
    },
    {
      question: "Is an S-corp election worth it at $100,000 profit?",
      answer: "For most owners, yes — around $6,800 a year in net federal saving on $100,000 of profit with a $40,000 salary, before state S-corp taxes. The saving is real money, but it comes with payroll, a separate tax return (Form 1120-S) and bookkeeping. If you hate admin, the saving may not be worth it until profit is higher.",
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
          { name: "LLC vs S-Corp Tax Savings Calculator", item: "/tools/llc-vs-s-corp-tax-savings-calculator" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        LLC vs S-Corp Tax Savings Calculator 2026
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        By default, every dollar of LLC profit is hit with 15.3% self-employment tax. Electing S-corp status changes that: only your salary pays payroll tax, and the rest of the profit is distributed without it.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        The election is not free — payroll, bookkeeping and extra filings cost money, and the IRS requires a reasonable salary. This calculator shows whether the saving survives those costs, using 2026 federal figures.
      </p>

      <p className="mt-3 max-w-3xl text-sm text-slate-500">
        Educational tool only. Not tax advice.
      </p>

      <div className="mt-10">
        <ScorpSavingsCalculator />
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">How the saving is calculated</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          As an LLC, you pay 15.3% self-employment tax on 92.35% of net profit: 12.4% Social Security up to the 2026 wage base of $184,500, plus 2.9% Medicare on all earnings. As an S-corp, payroll tax applies only to your salary — the same rates, but on the salary alone. The difference, minus your yearly payroll and admin costs, is the estimated saving.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Income tax is deliberately left out of the comparison: your salary and your distributions are both subject to federal income tax, so the election’s saving comes from payroll tax, not income tax. One exception the calculator does not model: the election can reduce your 20% qualified business income (QBI) deduction, which can shrink the saving for some owners.
        </p>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">When the election usually helps — and when it does not</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>Usually helps: steady profit above roughly $60,000–$80,000 a year, with a defensible salary well below total profit.</li>
          <li>Usually does not help: profit under about $40,000, where payroll costs eat the saving; or a business where almost all profit is really pay for your own labour, leaving little to distribute.</li>
          <li>Watch out: a salary set too low invites an IRS challenge, and some states add their own S-corp tax on top.</li>
        </ul>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">How to elect S-corp status</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The LLC itself does not change — you file Form 2553 with the IRS to elect S-corporation tax treatment. The form is generally due no more than 2 months and 15 days after the start of the tax year the election should take effect. Missed the deadline? Late relief under Revenue Procedure 2013-30 is available in many cases. Once elected, you must run payroll, file a separate S-corp return (Form 1120-S), and keep the salary reasonable.
        </p>
      </section>

      <figure className="mt-10 max-w-3xl">
        <Image
          src="/images/scorp-tax-savings.svg"
          alt="LLC vs S-corp tax savings calculator with reasonable salary and break-even profit"
          width={1200}
          height={630}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-xl border border-slate-200"
        />
        <figcaption className="mt-2 text-sm text-slate-500">An S-corp election only saves tax once profit clears the break-even point.</figcaption>
      </figure>
      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">How much profit do you need before an S-corp saves tax?</h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          The break-even point is usually around $60,000–$80,000 of annual profit, but it
          depends on your reasonable salary: the higher the salary the IRS would expect for
          your work, the higher the profit you need before the election pays. Below the
          break-even point, the payroll tax on your salary plus payroll and bookkeeping
          costs eat the self-employment tax you saved on distributions. Enter your profit
          and your salary in the calculator above and it finds your exact break-even profit
          at the same salary share — that number, not a rule of thumb, is the one to plan
          around. If your profit is under $50,000, an S-corp election almost never saves
          money.
        </p>
      </section>
      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Does an S-corp save tax on $100,000 profit?</h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          Usually, yes. On $100,000 of profit with a $40,000 reasonable salary and about
          $1,200 a year in payroll costs, the calculator shows roughly $6,800 a year in net
          saving: you stop paying 15.3% self-employment tax on the $60,000 you take as
          distributions, and pay 7.65% employer-and-employee payroll tax on the $40,000
          salary instead. The saving grows with profit — at $150,000 of profit with a
          $50,000 salary it is roughly $11,000–$12,000 — but remember the maths is federal
          only: California charges S-corps an extra 1.5% tax (minimum $800 a year), and
          some states charge S-corp fees that shrink the saving. The calculator folds your
          state&apos;s real annual LLC fee into the comparison so the state cost is not
          hidden.
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
            <Link href="/tools/llc-tax-estimator" className="text-[#1769AA] hover:underline">
              LLC Tax Estimator — total federal bill and quarterly payments
            </Link>
          </li>
          <li>
            <Link href="/business-structures/llc-vs-s-corp" className="text-[#1769AA] hover:underline">
              LLC vs S-Corp — the full comparison
            </Link>
          </li>
          <li>
            <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">
              LLC Cost Calculator
            </Link>
          </li>
          <li>
            <Link href="/how-much-does-it-cost-to-start-an-llc" className="text-[#1769AA] hover:underline">
              How Much Does It Cost to Start an LLC?
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Educational information only. This calculator and page provide general estimates and explanations. They are not tax advice. Figures use 2026 federal rates (IRS Rev. Proc. 2025-32; SSA wage base $184,500). Always confirm the election, salary, and deadlines with a CPA. This site is not affiliated with any government agency.
      </p>
    </div>
  );
}
