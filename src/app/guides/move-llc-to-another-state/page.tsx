import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "How to Move an LLC to Another State (2026)" },
  description:
    "Moving an LLC means domestication, foreign qualification, or dissolving and reforming. Compare the three routes, their costs, and when each one fits.",
  alternates: { canonical: "/guides/move-llc-to-another-state" },
  openGraph: {
    title: "How to Move an LLC to Another State (2026)",
    description:
      "Moving an LLC means domestication, foreign qualification, or dissolving and reforming. Compare the three routes, their costs, and when each one fits.",
    type: "website",
    url: "/guides/move-llc-to-another-state",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Move an LLC to Another State (2026)",
    description:
      "Moving an LLC means domestication, foreign qualification, or dissolving and reforming. Compare the three routes, their costs, and when each one fits.",
    images: ["/twitter-image"],
  },
};

export default function MoveLlcPage() {
  const faqs = [
    {
      question: "How do I move my LLC to another state?",
      answer:
        "There are three routes. Domestication moves the LLC itself to the new state — same company, same EIN, same history — but only if both states allow it. Foreign qualification keeps the LLC in its home state and registers it to operate in the new state — you pay both states. Dissolving and reforming closes the old LLC and opens a new one — simplest paperwork, but you lose the company's history, contracts, and usually need a new EIN.",
    },
    {
      question: "What is domestication of an LLC?",
      answer:
        "Domestication (also called conversion or continuance) transfers an LLC's legal home from one state to another. The LLC keeps its EIN, bank accounts, contracts, and credit history. Both the old and new states must allow domestication — many do, but not all pairs work, and some states charge a conversion fee on top of the formation fee.",
    },
    {
      question: "What is the difference between domestication and foreign qualification?",
      answer:
        "Domestication moves the LLC: after it, the LLC exists only in the new state. Foreign qualification adds a state: the LLC keeps its home state and gains the right to operate in the second one, paying fees in both. Move permanently? Domesticate. Expand while keeping your home base? Foreign qualify.",
    },
    {
      question: "Can I just change my LLC's address to another state?",
      answer:
        "No. Changing the mailing address does not change where the LLC is formed. If the LLC does business in the new state — office, employees, warehouse, regular customers — it generally needs foreign qualification or domestication there, regardless of what address is on file.",
    },
    {
      question: "Does moving an LLC change its taxes?",
      answer:
        "It can. The new state may charge income tax, franchise tax, or gross-receipts tax that the old state did not, and the old state may charge a final-year tax or require a tax clearance before it lets the LLC leave. Check both states' tax rules before choosing a route — the filing fees are usually the small part of the cost.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "How to Move an LLC to Another State", item: "/guides/move-llc-to-another-state" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        How to Move an LLC to Another State
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        An LLC does not move by changing its address. It moves by one of three legal routes — and picking the wrong one either costs you twice or erases the company’s history. Here is how to choose.
      </p>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">The three routes, compared</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="py-2 pr-4 font-semibold text-[#102A43]"> </th>
                <th className="py-2 pr-4 font-semibold text-[#102A43]">Domestication</th>
                <th className="py-2 pr-4 font-semibold text-[#102A43]">Foreign qualification</th>
                <th className="py-2 font-semibold text-[#102A43]">Dissolve &amp; reform</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">Result</td><td className="py-2 pr-4">LLC exists only in the new state</td><td className="py-2 pr-4">LLC exists in both states</td><td className="py-2">Old LLC closes; new LLC opens</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">EIN</td><td className="py-2 pr-4">Kept</td><td className="py-2 pr-4">Kept</td><td className="py-2">Usually new EIN needed</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">History &amp; contracts</td><td className="py-2 pr-4">Kept</td><td className="py-2 pr-4">Kept</td><td className="py-2">Lost — must re-sign</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">Ongoing fees</td><td className="py-2 pr-4">New state only</td><td className="py-2 pr-4">Both states, every year</td><td className="py-2">New state only</td></tr>
              <tr><td className="py-2 pr-4 font-medium">Best for</td><td className="py-2 pr-4">A permanent move</td><td className="py-2 pr-4">Expanding to a second state</td><td className="py-2">A young LLC with little history</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Before you file anything</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>Check whether both states allow domestication — not every pair does.</li>
          <li>Check the old state’s exit rules: some require a tax clearance certificate before the LLC can leave or dissolve.</li>
          <li>Compare the new state’s recurring costs (annual report, franchise tax) with the old — the move can cost more every year, not just once.</li>
          <li>Tell your bank, insurers, and contract partners; update licences, permits, and the registered agent in each state involved.</li>
        </ul>
      </section>

      <figure className="mt-10 max-w-3xl">
        <Image
          src="/images/move-llc-state.svg"
          alt="Move an LLC to another state — domestication, foreign qualification or dissolve and reform"
          width={1200}
          height={630}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-xl border border-slate-200"
        />
        <figcaption className="mt-2 text-sm text-slate-500">Three routes, three different costs.</figcaption>
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
        <h2 className="text-lg font-semibold text-[#102A43]">Related tools &amp; guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/tools/foreign-qualification-cost-calculator" className="text-[#1769AA] hover:underline">Foreign Qualification Cost Calculator</Link></li>
          <li><Link href="/tools/best-state-to-form-an-llc" className="text-[#1769AA] hover:underline">Best State to Form an LLC Finder</Link></li>
          <li><Link href="/guides/how-to-dissolve-an-llc" className="text-[#1769AA] hover:underline">How to Dissolve an LLC</Link></li>
          <li><Link href="/llc-cost-by-state" className="text-[#1769AA] hover:underline">LLC Costs by State</Link></li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Educational information only. Not legal advice. Domestication availability and exit requirements vary by state; confirm both states’ rules before filing.
      </p>
    </div>
  );
}
