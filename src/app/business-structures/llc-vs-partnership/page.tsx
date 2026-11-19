import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "LLC vs Partnership: Liability, Taxes & Cost (2026)" },
  description:
    "A partnership is cheap to start but leaves every partner personally liable. Compare LLC vs partnership on liability, taxes, management, and cost.",
  alternates: { canonical: "/business-structures/llc-vs-partnership" },
  openGraph: {
    title: "LLC vs Partnership: Liability, Taxes & Cost (2026)",
    description:
      "A partnership is cheap to start but leaves every partner personally liable. Compare LLC vs partnership on liability, taxes, management, and cost.",
    type: "website",
    url: "/business-structures/llc-vs-partnership",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "LLC vs Partnership: Liability, Taxes & Cost (2026)" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LLC vs Partnership: Liability, Taxes & Cost (2026)",
    description:
      "A partnership is cheap to start but leaves every partner personally liable. Compare LLC vs partnership on liability, taxes, management, and cost.",
    images: ["/twitter-image"],
  },
};

export default function LlcVsPartnershipPage() {
  const faqs = [
    {
      question: "What is the difference between an LLC and a partnership?",
      answer:
        "A partnership is two or more people doing business together with no separate legal entity (unless it registers as an LLP or LP). An LLC is a separate legal entity. The practical difference is liability: in a general partnership every partner is personally liable for the business's debts — including debts created by another partner. In a multi-member LLC, the members' personal assets are generally shielded.",
    },
    {
      question: "Is an LLC taxed like a partnership?",
      answer:
        "By default, yes. A multi-member LLC is taxed as a partnership unless it elects corporate or S-corp treatment: profit passes through to the members' personal returns and the LLC itself pays no federal income tax. Members pay self-employment tax on their share, just like partners do.",
    },
    {
      question: "Can a partnership convert to an LLC?",
      answer:
        "Yes, in most states you can convert a general partnership into an LLC by filing Articles of Organization and, in many states, a conversion or dissolution filing for the partnership. Get a new EIN if the tax classification changes, update contracts and bank accounts, and confirm the conversion steps with your Secretary of State — the paperwork varies by state.",
    },
    {
      question: "Which is cheaper, an LLC or a partnership?",
      answer:
        "A general partnership is cheaper to start — often $0 in state filing fees, since it can exist without any filing. An LLC costs $35–$500 to form plus annual fees. The LLC costs more because it buys something the partnership does not offer: limited liability for all members.",
    },
    {
      question: "Do partnerships need an operating agreement?",
      answer:
        "Partnerships use a partnership agreement, which plays the same role as an LLC's operating agreement: who owns what, who decides what, how profits split, and how someone exits. Without a written agreement, your state's default partnership rules apply — and they are rarely what the partners would have chosen.",
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
          { name: "LLC vs Partnership", item: "/business-structures/llc-vs-partnership" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        LLC vs Partnership: Which Fits Two or More Owners?
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        If two or more people are starting a business together, the choice is usually between a general partnership and a multi-member LLC. Taxes are nearly identical — the difference is liability, and it is the whole decision.
      </p>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">LLC vs partnership at a glance</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="py-2 pr-4 font-semibold text-[#102A43]"> </th>
                <th className="py-2 pr-4 font-semibold text-[#102A43]">Multi-member LLC</th>
                <th className="py-2 font-semibold text-[#102A43]">General partnership</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">Liability</td><td className="py-2 pr-4">Members generally shielded</td><td className="py-2">Every partner personally liable — including for a partner’s mistakes</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">Formation</td><td className="py-2 pr-4">File Articles of Organization ($35–$500)</td><td className="py-2">No filing needed in most states</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">Default tax treatment</td><td className="py-2 pr-4">Partnership (pass-through)</td><td className="py-2">Partnership (pass-through)</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">S-corp election</td><td className="py-2 pr-4">Yes, with Form 2553</td><td className="py-2">No — must convert first</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">Governing document</td><td className="py-2 pr-4">Operating agreement</td><td className="py-2">Partnership agreement</td></tr>
              <tr><td className="py-2 pr-4 font-medium">Annual state costs</td><td className="py-2 pr-4">Annual report / franchise tax in many states</td><td className="py-2">Usually none</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">The liability problem with partnerships</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          In a general partnership, each partner can bind the whole business — sign a contract, take on debt — and every partner is personally responsible for it. That is the risk an LLC removes. A limited partnership (LP) and limited liability partnership (LLP) soften this for some partners, but they are narrower tools: an LP still has at least one fully liable general partner, and LLPs are restricted by profession in many states. For most co-founded businesses, a multi-member LLC is the simpler answer.
        </p>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">When a partnership is fine</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          A plain partnership can work for a short, low-risk collaboration between people who trust each other completely — for example, two freelancers sharing a client for a few months with no debts, no employees, and no contracts that could go wrong. Even then, a written partnership agreement is essential. For anything ongoing, with real revenue, clients, or exposure, the LLC’s filing fee is cheap insurance.
        </p>
      </section>

      <figure className="mt-10 max-w-3xl">
        <Image
          src="/images/llc-vs-partnership.svg"
          alt="LLC vs partnership comparison — liability protection and pass-through taxation"
          width={1200}
          height={630}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-xl border border-slate-200"
        />
        <figcaption className="mt-2 text-sm text-slate-500">Same pass-through taxes, very different liability.</figcaption>
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
          <li><Link href="/business-structures/single-member-vs-multi-member-llc" className="text-[#1769AA] hover:underline">Single-Member vs Multi-Member LLC</Link></li>
          <li><Link href="/business-structures/llc-vs-dba" className="text-[#1769AA] hover:underline">LLC vs DBA</Link></li>
          <li><Link href="/guides/what-is-an-operating-agreement" className="text-[#1769AA] hover:underline">What Is an Operating Agreement?</Link></li>
          <li><Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">LLC Cost Calculator</Link></li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Educational information only. Not legal advice. Partnership and LLC rules vary by state; confirm conversion steps with your Secretary of State.
      </p>
    </div>
  );
}
