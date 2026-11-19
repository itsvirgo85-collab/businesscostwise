import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DISSOLUTION_FEES } from "@/data/dissolutionFees";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import DissolutionChecklist from "@/components/calculators/DissolutionChecklist";

export const metadata: Metadata = {
  title: { absolute: "How to Dissolve an LLC: Steps, Cost & Checklist (2026)" },
  description:
    "Closing an LLC takes more than stopping work: vote to dissolve, settle debts, file with the state, and file a final tax return. Steps, costs, and checklist.",
  alternates: { canonical: "/guides/how-to-dissolve-an-llc" },
  openGraph: {
    title: "How to Dissolve an LLC: Steps, Cost & Checklist (2026)",
    description:
      "Closing an LLC takes more than stopping work: vote to dissolve, settle debts, file with the state, and file a final tax return. Steps, costs, and checklist.",
    type: "website",
    url: "/guides/how-to-dissolve-an-llc",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "How to Dissolve an LLC: Steps, Cost & Checklist (2026)" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Dissolve an LLC: Steps, Cost & Checklist (2026)",
    description:
      "Closing an LLC takes more than stopping work: vote to dissolve, settle debts, file with the state, and file a final tax return. Steps, costs, and checklist.",
    images: ["/twitter-image"],
  },
};

export default function DissolveLlcPage() {
  const dissolutionFee = (slug: string) =>
    DISSOLUTION_FEES.find((d) => d.slug === slug)?.fee ?? 0;
  const maxDissolutionFee = Math.max(...DISSOLUTION_FEES.map((d) => d.fee));

  const faqs = [
    {
      question: "How much does it cost to officially dissolve a US LLC instead of leaving it inactive?",
      answer:
        `Official state fees to file Articles of Dissolution range from $0 to $${maxDissolutionFee} — for example, $${dissolutionFee("new-mexico")} in New Mexico, $${dissolutionFee("north-carolina")} in North Carolina, and $${dissolutionFee("wyoming")} in Wyoming. Simply stopping business does not stop annual fees: Delaware and California keep billing annual taxes and late penalties until the state accepts your formal dissolution paperwork.`,
    },
    {
      question: "What are the steps to close an LLC?",
      answer:
        "First, follow your operating agreement: hold a member vote to dissolve and record it in writing. Then stop taking new business, settle debts and collect what is owed, cancel licences and permits, and file the dissolution or cancellation form with the Secretary of State. Finally, file a final federal tax return (marking it as final), file final state returns, and close the business bank account.",
    },
    {
      question: "Do I need a tax clearance certificate to dissolve an LLC?",
      answer:
        "Some states require one before they accept the dissolution filing — Pennsylvania, Tennessee, and Texas are the commonly cited examples. A tax clearance confirms all state taxes are paid. If your state requires it, get the clearance first; the dissolution filing will be rejected without it. Confirm the requirement with your Secretary of State or department of revenue.",
    },
    {
      question: "What happens if I just stop filing and let the LLC lapse?",
      answer:
        "The state will eventually administratively dissolve it for missing annual reports — but until then, annual fees and penalties keep accruing, and the LLC's name stays tied up. Worse, creditors can still pursue the LLC, and in some states the members can face personal exposure once the LLC loses good standing. A formal dissolution is cleaner and usually cheaper than years of penalties.",
    },
    {
      question: "Do I need to file a final tax return after dissolving?",
      answer:
        "Yes. File a final federal return for the LLC (or its owners, for a pass-through LLC) and check the box marking it as the final return. File final state returns too. The IRS does not cancel EINs — the number stays with the entity — but you should close the business bank account and keep the dissolution records for at least 3–7 years.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "How to Dissolve an LLC", item: "/guides/how-to-dissolve-an-llc" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        How to Dissolve an LLC
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        Closing an LLC is a legal process, not just stopping work. Skip a step and the fees keep coming, the tax returns keep being due, and the liability shield can fray. Here is the process in order.
      </p>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">The dissolution checklist</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li><strong>Vote to dissolve.</strong> Follow the operating agreement — usually a member vote, recorded in writing.</li>
          <li><strong>Stop new business.</strong> Finish existing work, stop taking new orders, and notify customers and suppliers.</li>
          <li><strong>Settle debts.</strong> Pay what the LLC owes, collect what it is owed, and notify creditors. Members are generally paid last.</li>
          <li><strong>Cancel licences, permits, and registrations</strong> — including any foreign qualifications in other states.</li>
          <li><strong>Get a tax clearance</strong> if your state requires one (Pennsylvania, Tennessee, and Texas commonly do).</li>
          <li><strong>File the dissolution form</strong> with the Secretary of State and pay the filing fee (from $0 to about $220 by state).</li>
          <li><strong>File final tax returns</strong> — federal and state — and mark them as final.</li>
          <li><strong>Close the business bank account</strong> and keep dissolution records for at least 3–7 years.</li>
        </ol>
      </section>

      <div className="mt-10 max-w-3xl">
        <DissolutionChecklist />
      </div>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">What dissolution costs</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The state filing fee itself is usually the smallest part: $0 in some states, $100–$220 in others. What catches people out is what is still owed — unpaid annual report fees, franchise tax for the final year, and the cost of the final tax return. Some states will not accept the dissolution until those are paid, so budget for the total, not just the filing fee.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          <Link href="/tools/llc-dissolution-cost-calculator" className="text-[#1769AA] hover:underline">
            Estimate your total with the LLC Dissolution Cost Calculator →
          </Link>
        </p>
      </section>

      <figure className="mt-10 max-w-3xl">
        <Image
          src="/images/dissolve-llc-guide.svg"
          alt="How to dissolve an LLC — vote, settle debts, file with the state, final tax return"
          width={1200}
          height={630}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-xl border border-slate-200"
        />
        <figcaption className="mt-2 text-sm text-slate-500">Four steps, in order.</figcaption>
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
          <li><Link href="/tools/llc-dissolution-cost-calculator" className="text-[#1769AA] hover:underline">LLC Dissolution Cost Calculator</Link></li>
          <li><Link href="/guides/move-llc-to-another-state" className="text-[#1769AA] hover:underline">How to Move an LLC to Another State</Link></li>
          <li><Link href="/guides/what-is-an-operating-agreement" className="text-[#1769AA] hover:underline">What Is an Operating Agreement?</Link></li>
          <li><Link href="/annual-report-requirements-by-state" className="text-[#1769AA] hover:underline">Annual Report Requirements by State</Link></li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Educational information only. Not legal or tax advice. Dissolution fees, tax clearance rules, and final-return requirements vary by state; confirm them with your Secretary of State and department of revenue.
      </p>
    </div>
  );
}
