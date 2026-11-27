import type { Metadata } from "next";
import Link from "next/link";
import { STATE_FEES, getStateBySlug } from "@/data/stateFees";
import { calculateFiveYearStateCost } from "@/lib/stateCost";
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
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "How to Form an LLC: Step-by-Step (2026)" }],
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
  // All fee figures on this page are derived from the verified state records —
  // no fee is hardcoded. Five-year totals count five recurring payments.
  const verified = STATE_FEES.filter((s) => s.status === "verified");
  const withFormationFee = verified.filter((s) => s.formationFee != null);
  const minFormation = withFormationFee.reduce((a, b) =>
    (a.formationFee ?? Infinity) < (b.formationFee ?? Infinity) ? a : b,
  );
  const maxFormation = withFormationFee.reduce((a, b) =>
    (a.formationFee ?? 0) > (b.formationFee ?? 0) ? a : b,
  );
  const minFormationFee = minFormation.formationFee ?? 0;
  const maxFormationFee = maxFormation.formationFee ?? 0;
  const byFiveYear = [...verified]
    .map((s) => ({ fee: s, total: calculateFiveYearStateCost(s) }))
    .sort((a, b) => a.total - b.total);
  const cheapestFiveYear = byFiveYear[0];
  const priciestFiveYear = byFiveYear[byFiveYear.length - 1];
  const delaware = getStateBySlug("delaware")!;
  const newMexico = getStateBySlug("new-mexico")!;
  const delawareFormationFee = delaware.formationFee ?? 0;
  const delawareAnnualTax = delaware.franchiseTax ?? 0;
  const delawareFiveYear = calculateFiveYearStateCost(delaware);
  const newMexicoFormationFee = newMexico.formationFee ?? 0;
  const newMexicoFiveYear = calculateFiveYearStateCost(newMexico);

  const faqs = [
    {
      question: "How do I open an LLC?",
      answer:
        "Pick a state, choose a unique business name, and appoint a registered agent with an in-state street address. File Articles of Organization with the Secretary of State and pay the filing fee. Then create an operating agreement, get a free EIN from the IRS if you need one, and open a business bank account in the LLC's name.",
    },
    {
      question: "How to create an LLC without a lawyer?",
      answer:
        "Most states let you file online through the Secretary of State's website — no lawyer required. You can usually act as your own registered agent if you have a qualifying in-state address. A simple operating agreement can be written yourself for a single-member LLC; for multi-member or complex ownership, professional review is worth considering.",
    },
    {
      question: "How much does it cost to form an LLC?",
      answer: `State filing fees run from $${minFormationFee} in ${minFormation.state} to $${maxFormationFee} in ${maxFormation.state}. On top of that, budget for annual reports, franchise taxes where they apply, and registered agent service (typically $50–$300 a year). Use the free LLC cost calculator for your state's exact figures.`,
    },
    {
      question: "How long does it take to form an LLC?",
      answer:
        "Online filings in many states are approved within a few business days, and some states offer same-day or next-day processing. Paper filings can take several weeks. Exact times vary by state, and expedited service is available in some states for an extra fee.",
    },
    {
      question: "Do I need an operating agreement for my LLC?",
      answer:
        "Some states require one; most do not. Even when it is optional, a written operating agreement is strongly recommended. It records ownership percentages, management structure, profit sharing, and decision-making rules, and it supports the legal separation between you and the company.",
    },
    {
      question: "Can I form an LLC in a different state than where I live?",
      answer:
        "Yes, but forming in the state where you operate is usually simplest and cheapest. Forming elsewhere often means registering as a foreign LLC in your home state, which adds extra fees and compliance work. Compare total costs — including recurring fees — before choosing a state.",
    },
    {
      question: "What is the difference between Articles of Organization and Certificate of Formation?",
      answer:
        "They are the same filing under different names. Some states call it Articles of Organization; others call it a Certificate of Formation or Certificate of Organization. The purpose is identical: the document officially creates your LLC with the state and lists its basic details.",
    },
    {
      question: "Do I need an EIN to form an LLC?",
      answer:
        "No — you do not need an EIN to file formation documents with the state. You will need one to open most business bank accounts, hire employees, or if your LLC has more than one member. The IRS issues EINs free online, so never pay a third party for one.",
    },
    {
      question: "Can I convert a sole proprietorship to an LLC?",
      answer:
        "Yes. Form the LLC with the state, get a new EIN for the LLC, and open a business bank account in the LLC's name. Then move contracts, licences, and assets into the LLC. The sole proprietorship itself does not convert — you create the LLC, transfer the business into it, and stop operating as a sole proprietor.",
    },
    {
      question: "How do I change my LLC's name or add or remove a member?",
      answer:
        "To change the name, file an amendment with the Secretary of State, then update the operating agreement, bank accounts, and licences. Adding or removing a member is usually done by amending the operating agreement and, where the state requires it, filing an updated report or amendment — the exact form varies by state.",
    },
    {
      question: "Which state is the cheapest to form an LLC?",
      answer: `The lowest formation filing fee is $${minFormationFee} in ${minFormation.state}. But the filing fee is only part of the story: over five years, ${cheapestFiveYear.fee.state} costs just $${cheapestFiveYear.total} in total state fees, while some states cost thousands. Always compare the five-year total, not the filing fee alone.`,
    },
    {
      question: "How much does it cost to form an LLC in Delaware?",
      answer: `Delaware charges $${delawareFormationFee} to form an LLC and a $${delawareAnnualTax} annual tax each year, with no annual report to file. Over five years that is $${delawareFiveYear.toLocaleString()} in state fees. Delaware is popular for larger companies, but for a small local business your home state is usually cheaper overall.`,
    },
  ];

  const steps = [
    {
      title: "Choose your formation state",
      detail:
        "Most people form in the state where they live and work. That avoids registering as a foreign LLC in a second state later. Some founders pick Wyoming, Delaware, or New Mexico for privacy or other reasons — but if you operate elsewhere, that choice often adds extra filings and cost.",
      tip: "For most small businesses and solopreneurs, your home state is the simplest and most cost-effective choice.",
      cost: `Formation fees run from $${minFormationFee} in ${minFormation.state} to $${maxFormationFee} in ${maxFormation.state}. Check the cheapest-states ranking before you decide.`,
      links: [
        { label: "Montana", href: "/llc-cost-by-state/montana" },
        { label: "Wyoming", href: "/llc-cost-by-state/wyoming" },
        { label: "Delaware", href: "/llc-cost-by-state/delaware" },
        { label: "New Mexico", href: "/llc-cost-by-state/new-mexico" },
        { label: "Cheapest states ranking", href: "/cheapest-states-to-form-an-llc" },
      ],
    },
    {
      title: "Choose and check your business name",
      detail:
        "Your name must usually include “LLC”, “L.L.C.”, or “Limited Liability Company”. It cannot match or closely resemble an existing entity in the state. Search the Secretary of State's business database before filing, and check domain and trademark availability if branding matters.",
      tip: "Name rules and search tools differ by state. Always verify on the official Secretary of State site.",
      cost: "Some states charge a small fee to reserve a name before filing; the name search itself is usually free.",
      links: [{ label: "LLC cost by state", href: "/llc-cost-by-state" }],
    },
    {
      title: "Appoint a registered agent",
      detail:
        "Every state requires a registered agent with a physical street address in the formation state — not a P.O. box. The agent receives legal and tax documents for the LLC. You can act as your own agent with a qualifying address, or hire a commercial service.",
      tip: "A commercial agent adds privacy and reliability, especially if you travel or do not want your home address on public record.",
      cost: "Acting as your own agent costs nothing extra; a commercial service typically runs $50–$300 a year.",
      links: [
        { label: "Registered agent cost calculator", href: "/tools/registered-agent-cost-calculator" },
      ],
    },
    {
      title: "File Articles of Organization (or Certificate of Formation)",
      detail:
        "This filing officially creates your LLC. File it with the Secretary of State — online in most states — and pay the filing fee. You will usually list the LLC name, registered agent, principal office address, and whether it is member-managed or manager-managed.",
      tip: "Keep a copy of the approved filing. Banks and licensing agencies often ask for it.",
      cost: `Filing fees run from $${minFormationFee} to $${maxFormationFee} depending on the state. Use the calculator for your exact state fee.`,
      links: [
        { label: "LLC cost calculator", href: "/llc-cost-calculator" },
        { label: "LLC cost by state", href: "/llc-cost-by-state" },
      ],
    },
    {
      title: "Create an operating agreement",
      detail:
        "The operating agreement records ownership percentages, voting rights, profit and loss sharing, management duties, and what happens if a member leaves. Single-member LLCs benefit from having one too. Multi-member LLCs should treat it as essential.",
      tip: "Even when the state does not require one, a written agreement supports the separation between you and the company.",
      cost: "Writing one yourself usually costs nothing. Templates are cheap; attorney review costs more.",
      links: [
        { label: "What is an operating agreement?", href: "/guides/what-is-an-operating-agreement" },
      ],
    },
    {
      title: "Get a free EIN from the IRS",
      detail:
        "An EIN is like a Social Security number for your business. Apply free on the IRS website — it usually takes minutes online. You generally need one if you have employees, have more than one member, or want a business bank account.",
      tip: "The IRS EIN application is free. Avoid third-party sites that charge for it.",
      cost: "The IRS charges $0 for an EIN. Never pay for one.",
      links: [{ label: "How to get an EIN for free", href: "/how-to-get-an-ein-for-free" }],
    },
    {
      title: "Open a business bank account and maintain compliance",
      detail:
        "Open a dedicated business bank account with your formation documents and EIN, and keep business and personal money fully separate. Then calendar every annual or biennial report deadline so the LLC stays in good standing.",
      tip: "Mixing personal and business funds is one of the most common ways people weaken limited liability protection.",
      cost: `Recurring state costs vary widely: ${cheapestFiveYear.fee.state} totals $${cheapestFiveYear.total} over five years, while ${priciestFiveYear.fee.state} totals $${priciestFiveYear.total.toLocaleString()}.`,
      links: [
        { label: "Annual report requirements by state", href: "/annual-report-requirements-by-state" },
        { label: "LLC cost calculator", href: "/llc-cost-calculator" },
      ],
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
        <strong>Short answer:</strong> How to form an LLC is a state-level process. The exact forms, fees, and processing times differ by state, but the core sequence is the same across the United States: choose a name, appoint a registered agent, file formation documents, create an operating agreement, get a free EIN if needed, and open a business bank account.
      </p>

      <p className="mt-3 text-slate-600 leading-relaxed">
        This guide walks you through each step: what to expect, what it typically costs, and where official filings happen. This page is educational only — not legal, tax, or financial advice. Confirm current requirements on your state’s official website before filing.
      </p>

      {/* Cost callout */}
      <div className="mt-8 rounded-xl border border-[#1769AA]/30 bg-blue-50 p-5">
        <p className="text-sm text-slate-800">
          <strong>Quick cost range:</strong> State filing fees run from{" "}
          <strong>
            ${minFormationFee} ({minFormation.state}) to ${maxFormationFee} ({maxFormation.state})
          </strong>
          . Annual reports, franchise taxes, and registered agent fees can add more.{" "}
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
        <h2 className="text-2xl font-bold text-[#102A43]">How to Form an LLC in 7 Steps</h2>
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
                  <p className="mt-3 text-sm text-slate-700">
                    <strong>Cost:</strong> {s.cost}
                  </p>
                  {s.tip && (
                    <p className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700">
                      <strong>Tip:</strong> {s.tip}
                    </p>
                  )}
                  <p className="mt-3 text-sm">
                    {s.links.map((l, j) => (
                      <span key={l.href}>
                        {j > 0 && <span className="mx-1 text-slate-300">·</span>}
                        <Link href={l.href} className="font-medium text-[#1769AA] hover:underline">
                          {l.label}
                        </Link>
                      </span>
                    ))}
                  </p>
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
          The filing fee is only the first cost. Recurring state charges — annual reports and
          franchise taxes — often matter more over time.{" "}
          <Link
            href={`/llc-cost-by-state/${cheapestFiveYear.fee.slug}`}
            className="font-medium text-[#1769AA] hover:underline"
          >
            {cheapestFiveYear.fee.state}
          </Link>{" "}
          costs ${cheapestFiveYear.total} in total state fees over five years.{" "}
          <Link
            href={`/llc-cost-by-state/${priciestFiveYear.fee.slug}`}
            className="font-medium text-[#1769AA] hover:underline"
          >
            {priciestFiveYear.fee.state}
          </Link>{" "}
          costs ${priciestFiveYear.total.toLocaleString()} over the same period. The gap comes
          almost entirely from recurring charges, not the filing fee.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          <Link href="/llc-cost-by-state/delaware" className="font-medium text-[#1769AA] hover:underline">
            Delaware
          </Link>{" "}
          shows the same pattern: ${delawareFormationFee} to form, then a ${delawareAnnualTax}{" "}
          annual tax every year — ${delawareFiveYear.toLocaleString()} over five years.{" "}
          <Link href="/llc-cost-by-state/new-mexico" className="font-medium text-[#1769AA] hover:underline">
            New Mexico
          </Link>{" "}
          is the opposite: ${newMexicoFormationFee} to form and no recurring filing fee, so the
          five-year total is ${newMexicoFiveYear}. Check your state’s own page for the exact
          breakdown.
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
          <Link
            href="/llc-cost-by-state"
            className="font-medium text-[#1769AA] hover:underline"
          >
            LLC cost by state →
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
        <p className="mt-4">
          <Link href="/hidden-costs-of-forming-an-llc" className="font-medium text-[#1769AA] hover:underline">
            See the hidden costs guide for fees people often miss →
          </Link>
        </p>
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
          <li>Read how an LLC compares with an S-Corp before considering any tax election.</li>
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
          <Link href="/llc-cost-by-state" className="text-[#1769AA] hover:underline">
            LLC Cost by State
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
          <Link href="/guides/what-is-an-operating-agreement" className="text-[#1769AA] hover:underline">
            What is an operating agreement?
          </Link>
          <Link href="/business-structures/llc-vs-sole-proprietorship" className="text-[#1769AA] hover:underline">
            LLC vs Sole Proprietorship
          </Link>
          <Link href="/cheapest-states-to-form-an-llc" className="text-[#1769AA] hover:underline">
            Cheapest states to form an LLC
          </Link>
          <Link href="/most-expensive-states-to-form-an-llc" className="text-[#1769AA] hover:underline">
            Most expensive states to form an LLC
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
