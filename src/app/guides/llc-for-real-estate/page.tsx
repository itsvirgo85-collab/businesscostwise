import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import ArticleJsonLd from "@/components/seo/ArticleJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "LLC for Rental Property & Real Estate (2026)" },
  description:
    "An LLC shields your personal assets from rental property lawsuits. Compare one LLC per property vs a holding company vs a Series LLC, formation and yearly costs.",
  alternates: { canonical: "/guides/llc-for-real-estate" },
  openGraph: {
    title: "LLC for Rental Property & Real Estate (2026)",
    description:
      "An LLC shields your personal assets from rental property lawsuits. Compare one LLC per property vs a holding company vs a Series LLC, formation and yearly costs.",
    type: "website",
    url: "/guides/llc-for-real-estate",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "LLC for Rental Property & Real Estate (2026)" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LLC for Rental Property & Real Estate (2026)",
    description:
      "An LLC shields your personal assets from rental property lawsuits. Compare one LLC per property vs a holding company vs a Series LLC, formation and yearly costs.",
    images: ["/twitter-image"],
  },
};

export default function RealEstateLlcPage() {
  const faqs = [
    {
      question: "Should I put my rental property in an LLC?",
      answer:
        "For most landlords with one or more rental properties, yes. Without an LLC, a tenant's lawsuit — a slip on the stairs, a faulty railing, a dog bite — can reach your personal assets: your home, your savings, your other properties. An LLC puts the property's liabilities behind the company's wall. The protection is not absolute (you can still be liable for your own negligence, and lenders may ask for a personal guarantee), but it is the standard tool for the job.",
    },
    {
      question: "One LLC per property or one LLC for all properties?",
      answer:
        "One LLC per property gives the strongest protection: a lawsuit over one property cannot easily reach the others. But it multiplies costs — one formation fee, one annual report, and one tax return per LLC. Many investors start with one LLC for the first property or two, and split into separate LLCs as the portfolio grows or as a property's risk rises. A Series LLC (where available) is a middle path: one company, separate protected series per property.",
    },
    {
      question: "What is a Series LLC for real estate?",
      answer:
        "A Series LLC is a single LLC with internal compartments (series), each holding its own property and liabilities. It is available in about 20 states, including Texas, Delaware, Illinois, and Nevada. It can be cheaper than forming a separate LLC per property, but not every state recognises another state's series, and banks and insurers are sometimes unfamiliar with them. Check whether your state offers Series LLCs before planning around one.",
    },
    {
      question: "Can I transfer a property I already own into an LLC?",
      answer:
        "Usually yes, by deed — but check three things first. Your mortgage may have a due-on-sale clause that the lender can invoke on transfer (many lenders waive it for a transfer to your own LLC, but get it in writing). Your insurance must be updated to name the LLC. And the transfer may trigger transfer tax or reassessment in some states. Talk to your lender and insurer before recording the deed.",
    },
    {
      question: "Does an LLC change how rental income is taxed?",
      answer:
        "Barely, by default. A single-member LLC is taxed as a sole proprietorship and a multi-member LLC as a partnership — rental income and deductions (mortgage interest, taxes, insurance, depreciation, repairs) flow through to your personal return either way. The LLC changes liability, not the tax bill, unless you elect S-corp treatment — which is rarely useful for passive rental income.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <ArticleJsonLd
        headline="LLC for Rental Property & Real Estate (2026)"
        description="An LLC shields your personal assets from rental property lawsuits. Compare one LLC per property vs a holding company vs a Series LLC, formation and yearly costs."
        datePublished="2026-11-15"
        dateModified="2026-11-20"
        url="https://www.getllccostcalculator.com/guides/llc-for-real-estate"
      />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "LLC for Real Estate", item: "/guides/llc-for-real-estate" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        LLC for Rental Property &amp; Real Estate
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        Rental property is one of the clearest cases for an LLC. Tenants, visitors, and contractors all interact with a physical asset you own — and any of them can sue. An LLC keeps that risk on the company’s side of the wall, away from your home and savings.
      </p>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">One LLC per property vs one LLC for everything</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="py-2 pr-4 font-semibold text-[#102A43]">Structure</th>
                <th className="py-2 pr-4 font-semibold text-[#102A43]">Protection</th>
                <th className="py-2 font-semibold text-[#102A43]">Cost &amp; admin</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">One LLC per property</td><td className="py-2 pr-4">Strongest — a claim on one property cannot easily reach the others</td><td className="py-2">Highest — a fee, report, and return per LLC</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">One LLC, all properties</td><td className="py-2 pr-4">Good — your personal assets are shielded, but all properties sit in one pot</td><td className="py-2">Lowest — one company to run</td></tr>
              <tr><td className="py-2 pr-4 font-medium">Series LLC</td><td className="py-2 pr-4">Strong in theory — each series is segregated</td><td className="py-2">Middle — one filing, but only in ~20 states, and banks may be unfamiliar</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">The costs to budget for</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>Formation fee in the state where the property sits ($35–$500, plus annual report or franchise tax)</li>
          <li>Registered agent, if you do not live in that state</li>
          <li>Insurance in the LLC’s name — landlord policy, plus umbrella coverage</li>
          <li>Transfer costs if moving a property you already own (deed, possible transfer tax, lender consent)</li>
          <li>Separate bank account and bookkeeping per LLC — commingling money is the fastest way to lose the liability shield</li>
        </ul>
      </section>

      <figure className="mt-10 max-w-3xl">
        <Image
          src="/images/llc-real-estate.svg"
          alt="LLC for real estate investing — one LLC per property vs holding company vs series LLC"
          width={1200}
          height={630}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-xl border border-slate-200"
        />
        <figcaption className="mt-2 text-sm text-slate-500">One LLC per property is the standard approach.</figcaption>
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
          <li><Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">LLC Cost Calculator — cost per state, including multi-LLC totals</Link></li>
          <li><Link href="/asset-protection" className="text-[#1769AA] hover:underline">Asset Protection — how the LLC shield actually works</Link></li>
          <li><Link href="/guides/what-is-an-operating-agreement" className="text-[#1769AA] hover:underline">What Is an Operating Agreement?</Link></li>
          <li><Link href="/tools/best-state-to-form-an-llc" className="text-[#1769AA] hover:underline">Best State to Form an LLC Finder</Link></li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Educational information only. Not legal or tax advice. Series LLC availability and mortgage due-on-sale rules vary; confirm with your lender, insurer, and a local attorney before transferring property.
      </p>
    </div>
  );
}
