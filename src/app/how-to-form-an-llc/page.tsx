import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import HowToJsonLd from "@/components/seo/HowToJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "How to Form an LLC: Step-by-Step (2026)" },
  description:
    "Form an LLC in 7 steps: choose a state and name, appoint a registered agent, file Articles of Organization, get a free EIN, and stay compliant. Full 2026 guide.",
  alternates: { canonical: "/how-to-form-an-llc" },
  openGraph: {
    title: "How to Form an LLC: Step-by-Step (2026)",
    description:
      "Form an LLC in 7 steps: choose a state and name, appoint a registered agent, file Articles of Organization, get a free EIN, and stay compliant. Full 2026 guide.",
    type: "article",
    url: "/how-to-form-an-llc",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Form an LLC: Step-by-Step (2026)",
    description:
      "Form an LLC in 7 steps: choose a state and name, appoint a registered agent, file Articles of Organization, get a free EIN, and stay compliant. Full 2026 guide.",
    images: ["/twitter-image"],
  },
};

export default function HowToFormLLCPage() {
  const faqs = [
    {
      question: "How do I open an LLC?",
      answer:
        "Choose a unique business name that meets your state’s rules, appoint a registered agent with an in-state physical address, file Articles of Organization (or Certificate of Formation) with the Secretary of State and pay the filing fee, create an operating agreement, obtain a free EIN from the IRS if needed, and open a dedicated business bank account.",
    },
    {
      question: "How to create an LLC without a lawyer?",
      answer:
        "Most states allow online filing through the official Secretary of State website. You can usually serve as your own registered agent if you have a qualifying physical address in the state. A simple operating agreement can be written yourself for a single-member LLC, though professional review is recommended for multi-member or complex ownership situations.",
    },
    {
      question: "How much does it cost to form an LLC?",
      answer:
        "State filing fees typically range from about $35 to $500. Additional costs may include annual reports, franchise taxes, registered agent service ($50–$300 per year), and publication requirements in a few states. Use the free LLC cost calculator for your specific state.",
    },
    {
      question: "How long does it take to form an LLC?",
      answer:
        "Online filings in many states are approved in a few business days. Some states offer same-day or next-day processing. Paper filings can take several weeks. Exact times vary by state and whether you request expedited service.",
    },
    {
      question: "Do I need an operating agreement for my LLC?",
      answer:
        "Some states require one; most do not. Even when optional, a written operating agreement is strongly recommended. It documents ownership percentages, management structure, profit sharing, and decision-making rules, and helps support the legal separation between you and the company.",
    },
    {
      question: "Can I form an LLC in a different state than where I live?",
      answer:
        "Yes, but it is usually simplest and cheapest to form in the state where you primarily operate. Forming elsewhere often requires registering as a foreign LLC in your home state, which adds extra fees and compliance obligations.",
    },
    {
      question: "What is the difference between Articles of Organization and Certificate of Formation?",
      answer:
        "They are essentially the same document under different names. Some states call the formation filing Articles of Organization; others call it Certificate of Formation or Certificate of Organization. The purpose is the same: to officially create the LLC with the state.",
    },
    {
      question: "Do I need an EIN to form an LLC?",
      answer:
        "You do not need an EIN just to file formation documents with the state. However, you will need one to open most business bank accounts, hire employees, or if your LLC has more than one member. The IRS issues EINs for free online.",
    },
  ];

  const steps = [
    {
      title: "Choose your formation state",
      detail:
        "Most people form their LLC in the state where they live and primarily do business. This avoids the need to register as a foreign LLC later. Some founders choose states like Wyoming, Delaware, or New Mexico for specific privacy or tax reasons, but this often creates extra compliance work and cost if you operate elsewhere.",
      tip: "For most small businesses and solopreneurs, your home state is the simplest and most cost-effective choice.",
    },
    {
      title: "Choose and check your business name",
      detail:
        "Your LLC name must usually include a designator such as “LLC”, “L.L.C.”, or “Limited Liability Company”. It cannot be the same as or confusingly similar to an existing entity in that state. Search your state’s business entity database before filing. Also check domain name and trademark availability if branding matters to you.",
      tip: "Name availability rules and search tools differ by state. Always verify on the official Secretary of State site.",
    },
    {
      title: "Appoint a registered agent",
      detail:
        "Every state requires a registered agent with a physical street address (not a P.O. box) in the formation state. The agent receives official legal and tax documents on behalf of the LLC. You can serve as your own agent if you have a qualifying address, or hire a commercial registered agent service (typically $50–$300 per year).",
      tip: "Using a commercial agent can add privacy and reliability, especially if you travel or prefer not to list your home address publicly.",
    },
    {
      title: "File Articles of Organization (or Certificate of Formation)",
      detail:
        "This is the official document that creates your LLC. You file it with the Secretary of State (or equivalent agency) and pay the state filing fee. Many states offer online filing. Required information typically includes the LLC name, registered agent details, principal office address, and management structure (member-managed or manager-managed).",
      tip: "Filing fees range from roughly $35 to $500 depending on the state. Use the free cost calculator for exact numbers.",
    },
    {
      title: "Create an operating agreement",
      detail:
        "An operating agreement outlines ownership percentages, voting rights, profit and loss allocation, management responsibilities, and what happens if a member leaves. Single-member LLCs still benefit from having one. Multi-member LLCs should treat this document as essential.",
      tip: "Even when not required by the state, a written operating agreement strengthens limited liability protection and reduces future disputes.",
    },
    {
      title: "Get a free EIN from the IRS",
      detail:
        "An Employer Identification Number (EIN) is like a Social Security number for your business. Apply online for free on the IRS website. You generally need an EIN if you have employees, are a multi-member LLC, or want to open a business bank account.",
      tip: "The IRS EIN application is free. Be cautious of third-party sites that charge for this service.",
    },
    {
      title: "Open a business bank account and maintain compliance",
      detail:
        "Keep business and personal finances completely separate. Open a dedicated business bank account using your formation documents and EIN. File any required annual or biennial reports on time and pay franchise taxes where applicable so your LLC stays in good standing.",
      tip: "Mixing personal and business funds is one of the most common ways people weaken limited liability protection.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <HowToJsonLd
        name="How to Form an LLC"
        description="Form an LLC in 7 steps: choose a state and name, appoint a registered agent, file Articles of Organization, get a free EIN, and stay compliant. Full 2026 guide."
        steps={steps.map((s) => ({ name: s.title, text: s.detail }))}
      />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "How to Form an LLC", item: "/how-to-form-an-llc" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        How to Form an LLC in 2026: Step-by-Step Guide
      </h1>

      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        <strong>Short answer:</strong> Forming a limited liability company is a state-level process. The exact forms, fees, and processing times differ by state, but the core sequence is similar across the United States: choose a name, appoint a registered agent, file formation documents, create an operating agreement, get a free EIN if needed, and open a business bank account.
      </p>

      <p className="mt-3 text-slate-600 leading-relaxed">
        This practical guide walks you through each step so you know what to expect, what it typically costs, and where official filings happen. This page is educational only and is not legal, tax, or financial advice. Always confirm current requirements on your state’s official website before filing.
      </p>

      {/* Cost callout */}
      <div className="mt-8 rounded-xl border border-[#1769AA]/30 bg-blue-50 p-5">
        <p className="text-sm text-slate-800">
          <strong>Quick cost range:</strong> State filing fees typically run from about{" "}
          <strong>$35 to $500</strong>. Additional costs can include annual reports, franchise taxes, and registered agent fees.{" "}
          <Link href="/llc-cost-calculator" className="font-medium text-[#1769AA] hover:underline">
            Use the free LLC cost calculator
          </Link>{" "}
          for your state’s formation fee, recurring costs, and 1/3/5-year totals.
        </p>
      </div>

      {/* Quick links */}
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <Link
          href="/llc-cost-calculator"
          className="rounded-lg bg-[#102A43] px-4 py-2 font-medium text-white transition hover:bg-[#1769AA]"
        >
          Open Cost Calculator
        </Link>
        <Link
          href="/how-much-does-it-cost-to-start-an-llc"
          className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Full cost breakdown
        </Link>
        <Link
          href="/how-long-does-it-take-to-start-an-llc"
          className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Timeline guide
        </Link>
      </div>

      {/* Steps */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-[#102A43]">7 Steps to Form an LLC</h2>
        <p className="mt-2 text-slate-600">
          Follow these steps in order. Most of the process can be completed online in many states.
        </p>

        <div className="mt-8 space-y-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#102A43] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#102A43]">{s.title}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{s.detail}</p>
                  {s.tip && (
                    <p className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700">
                      <strong>Tip:</strong> {s.tip}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cost section */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-[#102A43]">Budgeting the total cost before you file</h2>
        <p className="mt-3 text-slate-600 leading-relaxed">
          The main cost is the state filing fee for your Articles of Organization. This fee varies significantly by state. On top of the filing fee, you may also pay for a registered agent, name reservation, publication (required in a few states), and ongoing annual or biennial reports.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          California is a common example of higher ongoing cost because of its franchise tax. Other states have very low or no annual report fees. The best way to see your real numbers is to use the calculator.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/llc-cost-calculator"
            className="font-medium text-[#1769AA] hover:underline"
          >
            LLC Cost Calculator →
          </Link>
          <Link
            href="/how-much-does-it-cost-to-start-an-llc"
            className="font-medium text-[#1769AA] hover:underline"
          >
            Full cost guide →
          </Link>
          <Link
            href="/cheapest-states-to-form-an-llc"
            className="font-medium text-[#1769AA] hover:underline"
          >
            Cheapest states ranking →
          </Link>
          <Link
            href="/hidden-costs-of-forming-an-llc"
            className="font-medium text-[#1769AA] hover:underline"
          >
            Hidden costs explained →
          </Link>
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-[#102A43]">How long does it take to form an LLC?</h2>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Processing time depends on the state and whether you file online or by mail. Many states approve online filings within a few business days. Some offer expedited or same-day service for an extra fee. Paper filings commonly take longer — sometimes several weeks.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          After the state approves your formation, you can usually apply for an EIN the same day and open a business bank account shortly afterward (bank requirements vary).
        </p>
        <p className="mt-4">
          <Link href="/how-long-does-it-take-to-start-an-llc" className="font-medium text-[#1769AA] hover:underline">
            Detailed timeline guide by state factors →
          </Link>
        </p>
      </section>

      {/* Common mistakes */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-[#102A43]">Common mistakes when forming an LLC</h2>
        <ul className="mt-4 space-y-3 text-slate-600">
          <li className="flex gap-2">
            <span className="font-bold text-[#102A43]">1.</span>
            <span>Choosing a name that is already taken or does not meet state naming rules, causing rejection.</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-[#102A43]">2.</span>
            <span>Forgetting to appoint a proper registered agent or using an address that does not qualify.</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-[#102A43]">3.</span>
            <span>Skipping the operating agreement, especially with multiple owners.</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-[#102A43]">4.</span>
            <span>Mixing personal and business finances after formation.</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-[#102A43]">5.</span>
            <span>Missing annual report or franchise tax deadlines and falling out of good standing.</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-[#102A43]">6.</span>
            <span>Assuming “free” formation offers truly eliminate the state filing fee (they almost never do).</span>
          </li>
        </ul>
      </section>

      {/* After formation */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-[#102A43]">What to do after your LLC is approved</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-600">
          <li>Apply for a free EIN on the IRS website if you have not already.</li>
          <li>Open a business bank account and keep finances separate.</li>
          <li>Create or finalize your operating agreement.</li>
          <li>Check whether you need local business licenses or permits.</li>
          <li>Calendar your annual or biennial report deadline.</li>
          <li>Consider whether an S-Corp tax election makes sense later (this is a separate tax decision).</li>
        </ol>
        <p className="mt-4">
          <Link href="/how-to-get-an-ein-for-free" className="font-medium text-[#1769AA] hover:underline">
            How to get an EIN for free →
          </Link>
          {" · "}
          <Link href="/annual-report-requirements-by-state" className="font-medium text-[#1769AA] hover:underline">
            Annual report requirements by state →
          </Link>
          {" · "}
          <Link href="/business-structures/llc-vs-s-corp" className="font-medium text-[#1769AA] hover:underline">
            LLC vs S-Corp →
          </Link>
        </p>
      </section>

      {/* FAQ */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-[#102A43]">Frequently asked questions</h2>
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

      {/* Related guides */}
      <section className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Related tools & guides</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">
            LLC Cost Calculator
          </Link>
          <Link href="/how-much-does-it-cost-to-start-an-llc" className="text-[#1769AA] hover:underline">
            How much does it cost to start an LLC?
          </Link>
          <Link href="/how-long-does-it-take-to-start-an-llc" className="text-[#1769AA] hover:underline">
            How long does it take to start an LLC?
          </Link>
          <Link href="/how-to-get-an-ein-for-free" className="text-[#1769AA] hover:underline">
            How to get an EIN for free
          </Link>
          <Link href="/business-structures/llc-vs-sole-proprietorship" className="text-[#1769AA] hover:underline">
            LLC vs Sole Proprietorship
          </Link>
          <Link href="/cheapest-states-to-form-an-llc" className="text-[#1769AA] hover:underline">
            Cheapest states to form an LLC
          </Link>
          <Link href="/hidden-costs-of-forming-an-llc" className="text-[#1769AA] hover:underline">
            Hidden costs of forming an LLC
          </Link>
          <Link href="/asset-protection" className="text-[#1769AA] hover:underline">
            Does an LLC protect personal assets?
          </Link>
        </div>
      </section>

      <p className="mt-10 text-xs leading-relaxed text-slate-500">
        Educational information only. State rules, fees, and processing times change. Always confirm current requirements on the official state website before filing. This site is not affiliated with any government agency.
      </p>
    </div>
  );
}
