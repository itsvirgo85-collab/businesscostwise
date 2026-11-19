import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "What Is an Operating Agreement? Do I Need One? (2026)" },
  description:
    "An operating agreement sets who owns what, who decides, and how profits split. Five states require one; every multi-member LLC should have one anyway.",
  alternates: { canonical: "/guides/what-is-an-operating-agreement" },
  openGraph: {
    title: "What Is an Operating Agreement? Do I Need One? (2026)",
    description:
      "An operating agreement sets who owns what, who decides, and how profits split. Five states require one; every multi-member LLC should have one anyway.",
    type: "website",
    url: "/guides/what-is-an-operating-agreement",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "What Is an Operating Agreement? Do I Need One? (2026)" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is an Operating Agreement? Do I Need One? (2026)",
    description:
      "An operating agreement sets who owns what, who decides, and how profits split. Five states require one; every multi-member LLC should have one anyway.",
    images: ["/twitter-image"],
  },
};

export default function OperatingAgreementPage() {
  const faqs = [
    {
      question: "What is an operating agreement?",
      answer:
        "An operating agreement is the internal rulebook of an LLC. It records who owns what percentage, who manages the company, how profits and losses are split, how decisions are made, and what happens when a member leaves or dies. It is a private document — you do not file it with the state.",
    },
    {
      question: "Do I need an operating agreement for a single-member LLC?",
      answer:
        "Legally, usually not — but it is still worth having. It strengthens the separation between you and the LLC (which is the point of the liability shield), it is often requested by banks when opening a business account, and it sets the rules in writing if you later add a member or sell the business.",
    },
    {
      question: "Which states require an operating agreement?",
      answer:
        "Five states require LLCs to have one: California, Delaware, Maine, Missouri, and New York. In New York, the agreement must be adopted within 90 days of formation. In the other 45 states and DC it is not legally required — but for a multi-member LLC, operating without one means your state's default rules decide everything, and they are rarely what the members would have chosen.",
    },
    {
      question: "What is the difference between Articles of Organization and an operating agreement?",
      answer:
        "Articles of Organization create the LLC — they are filed with the state and contain basic public information (name, registered agent, address). The operating agreement is the private internal contract between the members that governs how the LLC actually runs. One creates the company; the other runs it.",
    },
    {
      question: "Can I write my own operating agreement?",
      answer:
        "Yes, for a simple single-member or two-member LLC a template or a carefully written agreement is often enough. For anything complex — unequal ownership, silent partners, vesting, buyout terms, or a member contributing property instead of cash — have a lawyer review it. A bad agreement can be worse than the state's defaults.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "What Is an Operating Agreement?", item: "/guides/what-is-an-operating-agreement" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        What Is an Operating Agreement? Do I Need One?
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        The Articles of Organization create your LLC. The operating agreement decides how it actually works — who owns what, who decides, and what happens when things change. Most LLCs skip it. Most LLC disputes happen because they skipped it.
      </p>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">What an operating agreement should cover</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>Ownership percentages and capital contributions (cash, property, or work)</li>
          <li>How profits and losses are split — by ownership, or differently</li>
          <li>Who manages the LLC: all members, or a designated manager</li>
          <li>How decisions are made and what needs a unanimous vote</li>
          <li>How a member can leave, be removed, or sell their share — and at what price</li>
          <li>What happens if a member dies or becomes incapacitated</li>
          <li>How the LLC is dissolved if the members agree to close it</li>
        </ul>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Articles of Organization vs operating agreement</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          People confuse these two constantly. The Articles are a short public filing that creates the LLC. The operating agreement is a longer private contract that governs it. You file the first; you keep the second in your own records (and show it to your bank). Neither replaces the other.
        </p>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Do you need one?</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Five states require it — California, Delaware, Maine, Missouri, and New York. Everywhere else it is optional but strongly recommended for multi-member LLCs, and worth having even for a single-member LLC: banks often ask for it, it reinforces the separation between you and the company, and it answers questions in writing before they become arguments.
        </p>
      </section>

      <figure className="mt-10 max-w-3xl">
        <Image
          src="/images/operating-agreement.svg"
          alt="What is an operating agreement — the internal rulebook of an LLC"
          width={1200}
          height={630}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-xl border border-slate-200"
        />
        <figcaption className="mt-2 text-sm text-slate-500">Required in five states, wise everywhere.</figcaption>
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
          <li><Link href="/how-to-form-an-llc" className="text-[#1769AA] hover:underline">How to Form an LLC — the 7-step process</Link></li>
          <li><Link href="/business-structures/single-member-vs-multi-member-llc" className="text-[#1769AA] hover:underline">Single-Member vs Multi-Member LLC</Link></li>
          <li><Link href="/business-structures/llc-vs-partnership" className="text-[#1769AA] hover:underline">LLC vs Partnership</Link></li>
          <li><Link href="/guides/how-to-dissolve-an-llc" className="text-[#1769AA] hover:underline">How to Dissolve an LLC</Link></li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Educational information only. Not legal advice. Templates are a starting point, not a substitute for legal advice on a complex ownership structure.
      </p>
    </div>
  );
}
