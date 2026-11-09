import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Business Structures Compared — LLC, Sole Prop, Corp & S-Corp",
  description:
    "Compare US business structures: LLC vs sole proprietorship, corporation, S-Corp, and single-member vs multi-member LLC. Educational guides with cost context.",
  alternates: { canonical: "/business-structures" },
  openGraph: {
    title: "Business Structures Compared — LLC, Sole Prop, Corp & S-Corp",
    description:
      "Compare US business structures: LLC vs sole proprietorship, corporation, S-Corp, and single-member vs multi-member LLC.",
    type: "website",
    url: "/business-structures",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Structures Compared — LLC, Sole Prop, Corp & S-Corp",
    description:
      "Compare US business structures: LLC vs sole proprietorship, corporation, S-Corp, and single-member vs multi-member LLC.",
  },
};

const guides = [
  {
    href: "/business-structures/llc-vs-sole-proprietorship",
    title: "LLC vs Sole Proprietorship",
    blurb: "Liability, formation cost, taxes, and when each structure fits.",
  },
  {
    href: "/business-structures/llc-vs-corporation",
    title: "LLC vs Corporation",
    blurb: "Flexibility, formalities, ownership, and growth trade-offs.",
  },
  {
    href: "/business-structures/llc-vs-s-corp",
    title: "LLC vs S-Corp",
    blurb: "Default taxation vs S-Corp election, payroll, and self-employment tax.",
  },
  {
    href: "/business-structures/single-member-vs-multi-member-llc",
    title: "Single-Member vs Multi-Member LLC",
    blurb: "Ownership count, default tax treatment, and operating agreements.",
  },
  {
    href: "/asset-protection",
    title: "Does an LLC Protect Personal Assets?",
    blurb: "How limited liability works and common ways protection can fail.",
  },
];

export default function BusinessStructuresHubPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Business Structures", item: "/business-structures" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        Business structures compared
      </h1>
      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        Choosing a structure affects liability, taxes, paperwork, and long-term cost. These educational
        guides explain the practical differences for US founders — then link back to verified state LLC
        fees when cost is part of the decision.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {guides.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-[#1769AA] hover:shadow-sm"
          >
            <h2 className="text-base font-semibold text-[#102A43]">{g.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{g.blurb}</p>
          </Link>
        ))}
      </div>

      <section className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Also useful</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/what-is-an-llc" className="text-[#1769AA] hover:underline">
              What is an LLC?
            </Link>
          </li>
          <li>
            <Link href="/how-to-form-an-llc" className="text-[#1769AA] hover:underline">
              How to form an LLC
            </Link>
          </li>
          <li>
            <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">
              LLC cost calculator
            </Link>
          </li>
          <li>
            <Link href="/how-much-does-it-cost-to-start-an-llc" className="text-[#1769AA] hover:underline">
              How much does it cost to start an LLC?
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 text-xs leading-relaxed text-slate-500">
        Educational information only. Not legal, tax, or financial advice. This site is not affiliated
        with any government agency.
      </p>
    </div>
  );
}
