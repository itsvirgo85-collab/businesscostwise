import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "LLC vs DBA: Which Is Better? (2026)" },
  description:
    "A DBA is a name, not a business structure. Compare LLC vs DBA on liability protection, taxes, cost, and when a DBA alone is enough — and when it is not.",
  alternates: { canonical: "/business-structures/llc-vs-dba" },
  openGraph: {
    title: "LLC vs DBA: Which Is Better? (2026)",
    description:
      "A DBA is a name, not a business structure. Compare LLC vs DBA on liability protection, taxes, cost, and when a DBA alone is enough — and when it is not.",
    type: "website",
    url: "/business-structures/llc-vs-dba",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "LLC vs DBA: Which Is Better? (2026)" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LLC vs DBA: Which Is Better? (2026)",
    description:
      "A DBA is a name, not a business structure. Compare LLC vs DBA on liability protection, taxes, cost, and when a DBA alone is enough — and when it is not.",
    images: ["/twitter-image"],
  },
};

export default function LlcVsDbaPage() {
  const faqs = [
    {
      question: "LLC vs DBA — which is better?",
      answer:
        "For most businesses, an LLC is better because a DBA offers no liability protection at all. A DBA (doing business as) is just a registered trade name — you are still personally liable for the business's debts and lawsuits. The only thing a DBA does is let you legally use a name that is not your legal name.",
    },
    {
      question: "Can an LLC have a DBA?",
      answer:
        "Yes — this is the most common setup. Form the LLC first for liability protection, then register a DBA under it if you want to trade under a different name, launch a second brand, or use a shorter name on invoices and signs. The DBA belongs to the LLC, so the liability protection stays intact.",
    },
    {
      question: "How much does a DBA cost?",
      answer:
        "Usually $10–$100 to register with your county or state, depending on where you are. Compare that with LLC formation fees of $35–$500 plus annual costs. A DBA is cheaper because it does almost nothing — it is a name registration, not a legal entity.",
    },
    {
      question: "Does a DBA protect my personal assets?",
      answer:
        "No. A DBA provides zero liability protection. If the business is sued or cannot pay a debt, your personal assets — house, car, savings — are at risk, exactly as with a sole proprietorship. Only a separate entity such as an LLC or corporation creates a liability shield.",
    },
    {
      question: "Do I need an LLC to sell on Amazon or as a freelancer?",
      answer:
        "No, you can sell as a sole proprietor under your own name or a DBA — Amazon and freelance clients accept both. An LLC becomes worth it when you want liability protection, a business bank account in the LLC's name, or a more professional structure as income grows.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "Business Structures", item: "/business-structures" },
          { name: "LLC vs DBA", item: "/business-structures/llc-vs-dba" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        LLC vs DBA: Which Is Better?
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        This comparison confuses people because the two things are not the same kind of thing at all. An LLC is a legal entity. A DBA is a name. Comparing them is like comparing a house with a nameplate — and the nameplate does none of the protecting.
      </p>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">LLC vs DBA at a glance</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="py-2 pr-4 font-semibold text-[#102A43]"> </th>
                <th className="py-2 pr-4 font-semibold text-[#102A43]">LLC</th>
                <th className="py-2 font-semibold text-[#102A43]">DBA</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">What it is</td><td className="py-2 pr-4">A separate legal entity</td><td className="py-2">A registered trade name</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">Liability protection</td><td className="py-2 pr-4">Yes — personal assets are generally shielded</td><td className="py-2">None</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">Taxes</td><td className="py-2 pr-4">Pass-through by default; can elect S-corp</td><td className="py-2">No change — taxed as you are now</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">Typical cost</td><td className="py-2 pr-4">$35–$500 to form, plus annual fees</td><td className="py-2">$10–$100 to register</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">Business bank account</td><td className="py-2 pr-4">Yes, in the LLC’s name</td><td className="py-2">Usually yes, under your name + DBA</td></tr>
              <tr><td className="py-2 pr-4 font-medium">Name protection</td><td className="py-2 pr-4">Name reserved in your state</td><td className="py-2">Lets you use the name; does not stop others using it elsewhere</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">When a DBA alone is enough</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          A DBA alone is fine for a very small, low-risk side activity where you are comfortable being personally liable — for example, a sole proprietor who wants invoices under a brand name instead of their own name, with no employees, no contracts with real liability exposure, and no significant debts. Even then, the DBA adds no protection; it only solves the naming problem.
        </p>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">When you need an LLC instead</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>You have customers, clients, or the public interacting with your business</li>
          <li>You sign contracts, take deposits, or could be sued for your work</li>
          <li>You hire anyone, even part-time</li>
          <li>You want a business bank account and clean separation from personal money</li>
          <li>You plan to grow, take on a partner, or sell the business one day</li>
        </ul>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The most common answer is both: form the LLC, then register a DBA under it for any extra brand name. That costs a little more than a DBA alone and gives you the protection the DBA cannot.
        </p>
      </section>

      <figure className="mt-10 max-w-3xl">
        <Image
          src="/images/llc-vs-dba.svg"
          alt="LLC vs DBA comparison — a DBA is a trade name, not a legal entity"
          width={1200}
          height={630}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-xl border border-slate-200"
        />
        <figcaption className="mt-2 text-sm text-slate-500">A DBA is a name, not an entity: it gives no liability protection.</figcaption>
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
        <h2 className="text-lg font-semibold text-[#102A43]">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/what-is-an-llc" className="text-[#1769AA] hover:underline">What Is an LLC?</Link></li>
          <li><Link href="/business-structures/llc-vs-sole-proprietorship" className="text-[#1769AA] hover:underline">LLC vs Sole Proprietorship</Link></li>
          <li><Link href="/business-structures/llc-vs-partnership" className="text-[#1769AA] hover:underline">LLC vs Partnership</Link></li>
          <li><Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">LLC Cost Calculator — what an LLC actually costs in your state</Link></li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Educational information only. Not legal advice. DBA registration rules and fees vary by state and county; confirm the current process where you live.
      </p>
    </div>
  );
}
