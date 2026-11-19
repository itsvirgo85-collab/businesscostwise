import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RegisteredAgentCalculator from "@/components/calculators/RegisteredAgentCalculator";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "Registered Agent Cost Calculator (2026)" },
  description:
    "Every LLC needs a registered agent in place. Compare commercial service costs vs serving as your own agent, with multi-year totals and the privacy trade-offs.",
  alternates: { canonical: "/tools/registered-agent-cost-calculator" },
  openGraph: {
    title: "Registered Agent Cost Calculator (2026)",
    description:
      "Every LLC needs a registered agent in place. Compare commercial service costs vs serving as your own agent, with multi-year totals and the privacy trade-offs.",
    type: "website",
    url: "/tools/registered-agent-cost-calculator",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Registered Agent Cost Calculator (2026)" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Registered Agent Cost Calculator (2026)",
    description:
      "Every LLC needs a registered agent in place. Compare commercial service costs vs serving as your own agent, with multi-year totals and the privacy trade-offs.",
    images: ["/twitter-image"],
  },
};

export default function RegisteredAgentPage() {
  const calculatorJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Registered Agent Cost Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free educational calculator for estimating commercial registered agent costs versus serving as your own agent for a US LLC.",
  };

  const faqs = [
    {
      question: "How much does a registered agent cost?",
      answer:
        "Commercial registered agent services typically charge between $50 and $300 per year. Many formation companies include the first year free and then charge a renewal fee. You can also serve as your own agent at $0 if you meet the state’s requirements.",
    },
    {
      question: "Can I be my own registered agent?",
      answer:
        "In most states, yes, provided you have a physical street address in that state and are available during normal business hours. Some states have additional rules. Your name and address will usually appear on public records.",
    },
    {
      question: "Do I need a registered agent in every state where my LLC is registered?",
      answer:
        "Yes. You need a registered agent in the domestic (formation) state and in every state where the LLC is foreign qualified.",
    },
    {
      question: "What happens if I don’t maintain a registered agent?",
      answer:
        "The state may eventually administratively dissolve the LLC or revoke its good standing. You also risk missing important legal notices, which can lead to default judgments.",
    },
    {
      question: "Is a registered agent the same as a virtual mailbox?",
      answer:
        "No. A registered agent is a legal requirement: a person or company with a physical address in the formation state who accepts lawsuits and official state mail during business hours. A virtual mailbox only forwards ordinary mail (typically $10–$30 a month) and does not satisfy the agent requirement. Non-residents usually need both: an agent for legal mail and a mailbox for business mail.",
    },
    {
      question: "How much does a registered agent cost per year in Texas?",
      answer: "A commercial registered agent in Texas usually costs $50–$300 a year, the same range as in most states — the price is set by the service, not by Texas. You can also be your own registered agent in Texas for $0 if you have a Texas street address and are available there during business hours. Texas charges no annual LLC fee, so the agent is often the only recurring cost of a Texas LLC.",
    },
    {
      question: "Is it cheaper to be your own registered agent?",
      answer: "Yes — $0 versus $50–$300 a year for a commercial service. The trade-offs are privacy (your address goes on the public record), availability (you must be at that address during business hours to accept service of process), and the risk of missing a lawsuit or tax notice. For most home-based owners, the privacy alone is worth the service fee.",
    },
    {
      question: "What is the registered agent cost for an LLC in California vs Wyoming?",
      answer: "The service price is the same in both states, roughly $50–$300 a year. The difference is what sits around it: California adds an $800 annual franchise tax, so the agent is a small part of the yearly cost, while Wyoming's $60 annual report makes the agent the largest recurring cost. Use the calculator above to see the agent cost inside each state's total.",
    },
    {
      question: "Do I need a registered agent in every state where my LLC does business?",
      answer: "Yes, effectively. Every state where your LLC is formed or registered as a foreign LLC requires a registered agent with a physical address in that state. If you form in Wyoming and foreign-qualify in Texas and California, you need an agent in all three states — which is one reason forming out of state rarely saves money.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorJsonLd) }}
      />
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Tools", item: "/tools" },
          {
            name: "Registered Agent Calculator",
            item: "/tools/registered-agent-cost-calculator",
          },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        Registered Agent Cost Calculator 2026
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        Every LLC in every US state must maintain a registered agent with a physical street address in that state. The agent’s job is to receive official legal and tax documents during normal business hours.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        You have two main options: serve as your own registered agent (if you have a qualifying address) or hire a commercial registered agent service. This free calculator helps you estimate the multi-year cost difference and understand the practical trade-offs.
      </p>

      <p className="mt-3 max-w-3xl text-sm text-slate-500">
        Educational tool only. Not legal advice.
      </p>

      <div className="mt-10">
        <RegisteredAgentCalculator />
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">What a registered agent actually does</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The registered agent is the official point of contact for the state and for anyone serving legal documents on the LLC. Requirements generally include a physical street address in the state (P.O. boxes are almost never allowed), availability during normal business hours to accept service of process, and prompt forwarding of important documents to the LLC’s principals.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Failing to maintain a valid registered agent can lead to loss of good standing, administrative dissolution, or missed legal notices.
        </p>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Commercial registered agent vs serving as your own agent</h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="font-medium text-[#102A43]">Serving as your own agent ($0 fee)</h3>
            <p className="mt-1 text-slate-700">
              Pros: No extra annual cost. Cons: Your name and address appear on public records in most states. You must be available during business hours. Moving or traveling can create compliance risk. Privacy is lower.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-[#102A43]">Commercial registered agent</h3>
            <p className="mt-1 text-slate-700">
              Pros: Privacy (your personal address stays off the public record in many cases), professional handling of documents, compliance reminders, easier if you move or travel. Cons: Annual cost (commonly $50–$300 per year depending on provider and state).
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Typical commercial pricing (2026)</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>Budget services: often $50–$125 per year</li>
          <li>Mid-range / reputable providers: $99–$199 per year</li>
          <li>Premium or multi-state packages: $150–$300+ per year</li>
        </ul>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Some formation companies include the first year of registered agent service free and then charge a renewal fee. Always check the renewal price, not just the first-year promotion.
        </p>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">When a commercial agent is usually worth it</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>You want to keep your home address off public records</li>
          <li>You travel frequently or lack a stable local address during business hours</li>
          <li>You form in a state where you do not live</li>
          <li>You plan to foreign qualify in additional states</li>
          <li>You prefer professional document handling and compliance reminders</li>
        </ul>
      </section>

      <figure className="mt-10 max-w-3xl">
        <Image
          src="/images/registered-agent-cost.svg"
          alt="Registered agent cost calculator comparing a commercial service with serving as your own agent"
          width={1200}
          height={630}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-xl border border-slate-200"
        />
        <figcaption className="mt-2 text-sm text-slate-500">Commercial registered agent services usually cost $50 to $300 a year.</figcaption>
      </figure>
      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Registered agent cost per year by state</h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          The price of a commercial registered agent barely changes by state: the same
          national services charge roughly $50–$300 a year whether your LLC is in Texas,
          California or Wyoming. What changes by state is whether you can serve as your own
          agent — every state allows it, but you need a physical street address in that
          state, must be available there during business hours, and your address goes on the
          public record. That is why the calculator above asks for your state and then shows
          the agent cost inside your total: in Texas the agent is often the biggest
          recurring cost (the state itself charges $0 a year), while in California it is a
          small addition next to the $800 franchise tax.
        </p>
      </section>
      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Cheapest registered agent service for a new LLC</h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          The cheapest option is always serving as your own agent: $0, where you qualify.
          The cheapest commercial route is usually a budget national service at around
          $50–$100 a year for the first year, often rising at renewal — check the renewal
          price, not the first-year offer. Mid-range services run about $125–$200 a year and
          add compliance reminders and document scanning; premium services at $200–$300 add
          same-day forwarding and multi-state coverage. Prices change often and first-year
          discounts are common, so treat any quoted price as an estimate and confirm it on
          the provider&apos;s site before you buy. If privacy matters more than price, see
          our{" "}
          <Link href="/tools/anonymous-llc-state-finder" className="text-[#1769AA] hover:underline">
            anonymous LLC state finder
          </Link>
          — using a commercial agent is one of the simplest ways to keep your home address
          off the public record.
        </p>
      </section>
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
        <h2 className="text-lg font-semibold text-[#102A43]">Related tools & guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/tools/non-resident-llc-cost-calculator" className="text-[#1769AA] hover:underline">
              Non-Resident LLC Cost Calculator
            </Link>
          </li>
          <li>
            <Link href="/tools/foreign-qualification-cost-calculator" className="text-[#1769AA] hover:underline">
              Foreign Qualification Cost Calculator
            </Link>
          </li>
          <li>
            <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">
              LLC Cost Calculator
            </Link>
          </li>
          <li>
            <Link href="/hidden-costs-of-forming-an-llc" className="text-[#1769AA] hover:underline">
              Hidden Costs of Forming an LLC
            </Link>
          </li>
          <li>
            <Link href="/how-to-form-an-llc" className="text-[#1769AA] hover:underline">
              How to Form an LLC
            </Link>
          </li>
          <li>
            <Link href="/llc-cost-by-state" className="text-[#1769AA] hover:underline">
              LLC Costs by State
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Educational information only. This calculator and page provide general estimates and explanations. They are not legal advice. Always confirm current registered agent rules with the Secretary of State (or equivalent agency) of the relevant state. This site is not affiliated with any government agency or registered agent provider.
      </p>
    </div>
  );
}
