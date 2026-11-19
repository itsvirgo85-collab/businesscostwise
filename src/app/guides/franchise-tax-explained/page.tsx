import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "What Is a Franchise Tax? Which States Charge It? (2026)" },
  description:
    "A franchise tax is a fee for the privilege of doing business in a state — not an income tax. See which states charge one, how much, and which LLCs owe $0.",
  alternates: { canonical: "/guides/franchise-tax-explained" },
  openGraph: {
    title: "What Is a Franchise Tax? Which States Charge It? (2026)",
    description:
      "A franchise tax is a fee for the privilege of doing business in a state — not an income tax. See which states charge one, how much, and which LLCs owe $0.",
    type: "website",
    url: "/guides/franchise-tax-explained",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "What Is a Franchise Tax? Which States Charge It? (2026)" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is a Franchise Tax? Which States Charge It? (2026)",
    description:
      "A franchise tax is a fee for the privilege of doing business in a state — not an income tax. See which states charge one, how much, and which LLCs owe $0.",
    images: ["/twitter-image"],
  },
};

export default function FranchiseTaxPage() {
  const faqs = [
    {
      question: "What is a franchise tax?",
      answer:
        "A franchise tax is a fee a state charges a business for the privilege of existing and operating there. It is not an income tax and not a sales tax — you can owe it even in a year when the business makes no profit. Some states charge a flat amount; others base it on revenue, capital, or net worth.",
    },
    {
      question: "Which states charge a franchise tax on LLCs?",
      answer:
        "Only a handful charge a flat franchise tax on LLCs: Delaware ($400 per year), California ($800 per year), Rhode Island ($400 per year), Arkansas ($150 per year), and Tennessee (a minimum of about $100 per year). Texas charges a franchise tax based on revenue, but most small LLCs owe $0 because of its no-tax-due revenue threshold. Most other states charge $0 franchise tax and instead charge an annual report fee — or nothing at all.",
    },
    {
      question: "Is Delaware's franchise tax $300 or $400?",
      answer:
        "$400 for tax year 2026. Delaware raised the annual tax for LLCs from $300 to $400 under House Bill 400, signed 21 May 2026, first payable by 1 June 2027. Many older guides still say $300 — they are out of date.",
    },
    {
      question: "Does Texas charge franchise tax on LLCs?",
      answer:
        "Yes, but most small LLCs owe $0. Texas franchise tax applies only above a no-tax-due revenue threshold set by the Comptroller (in the low millions of dollars), and LLCs below it file a no-tax-due report instead. Check the Comptroller's current threshold before assuming you owe anything.",
    },
    {
      question: "What is the difference between a franchise tax and an annual report fee?",
      answer:
        "A franchise tax is a charge for the privilege of doing business in the state. An annual report fee is a charge for filing the yearly report that keeps the LLC in good standing. Some states charge one, some charge both, and some charge neither. Delaware LLCs pay the $400 annual tax and file no annual report; California LLCs pay the $800 franchise tax and also file a Statement of Information.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "What Is a Franchise Tax?", item: "/guides/franchise-tax-explained" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        What Is a Franchise Tax? Which States Charge It?
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        “Franchise tax” sounds like something only fast-food chains pay. It is not. It is a state fee for the privilege of doing business there — and for LLCs in a few states, it is the single biggest recurring cost, larger than the annual report fee.
      </p>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">States with a flat franchise tax on LLCs</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="py-2 pr-4 font-semibold text-[#102A43]">State</th>
                <th className="py-2 pr-4 font-semibold text-[#102A43]">Annual franchise tax</th>
                <th className="py-2 font-semibold text-[#102A43]">Notes</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">California</td><td className="py-2 pr-4">$800 / year</td><td className="py-2">Plus a Statement of Information every 2 years</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">Delaware</td><td className="py-2 pr-4">$400 / year</td><td className="py-2">Raised from $300 for tax year 2026; no annual report</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">Rhode Island</td><td className="py-2 pr-4">$400 / year</td><td className="py-2">Minimum tax; plus a $50 annual report</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">Arkansas</td><td className="py-2 pr-4">$150 / year</td><td className="py-2">Franchise tax report, due 1 May</td></tr>
              <tr><td className="py-2 pr-4 font-medium">Tennessee</td><td className="py-2 pr-4">From $100 / year</td><td className="py-2">Minimum franchise tax; amount rises with net worth</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-slate-700 leading-relaxed">
          These five are the flat-fee states in this site’s verified fee data. Texas is the notable exception: it charges franchise tax on revenue, not a flat amount, and most small LLCs owe $0 under its no-tax-due threshold. New York LLCs pay a separate annual filing fee based on New York-source gross income instead of a franchise tax. Most other states charge no franchise tax at all — their recurring cost is an annual report fee, or nothing.
        </p>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Franchise tax vs income tax vs annual report</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li><strong>Franchise tax:</strong> for the privilege of operating in the state; often owed even with $0 profit.</li>
          <li><strong>Income tax:</strong> on profit; in most states LLC profit is taxed on the owners’ personal returns, not at the LLC level.</li>
          <li><strong>Annual report fee:</strong> for filing the yearly report that keeps the LLC active; a paperwork fee, not a tax on privilege.</li>
        </ul>
        <p className="mt-3 text-slate-700 leading-relaxed">
          When you compare states, add all three together. Delaware looks cheap at $110 to form, then costs $400 every year. California costs $800 a year before you earn a dollar. That is why the 5-year totals on this site matter more than the formation fee.
        </p>
      </section>

      <figure className="mt-10 max-w-3xl">
        <Image
          src="/images/franchise-tax.svg"
          alt="Franchise tax explained — flat annual taxes by state from $100 to $800"
          width={1200}
          height={630}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-xl border border-slate-200"
        />
        <figcaption className="mt-2 text-sm text-slate-500">Only five states charge a flat franchise tax in our data.</figcaption>
      </figure>
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
        <h2 className="text-lg font-semibold text-[#102A43]">Related guides &amp; tools</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/tools/llc-tax-estimator" className="text-[#1769AA] hover:underline">LLC Tax Estimator — your total federal bill</Link></li>
          <li><Link href="/annual-report-requirements-by-state" className="text-[#1769AA] hover:underline">Annual Report Requirements by State</Link></li>
          <li><Link href="/llc-cost-by-state/delaware" className="text-[#1769AA] hover:underline">Delaware LLC Cost — the $400 annual tax in detail</Link></li>
          <li><Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">LLC Cost Calculator — 5-year totals by state</Link></li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Educational information only. Not tax advice. Franchise tax rules and thresholds change; confirm current figures with the state tax authority before relying on them.
      </p>
    </div>
  );
}
