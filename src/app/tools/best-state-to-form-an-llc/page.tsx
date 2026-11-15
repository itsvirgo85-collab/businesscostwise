import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BestStateFinder from "@/components/calculators/BestStateFinder";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "Best State to Form an LLC Finder (2026)" },
  description:
    "Answer three questions and compare states by 1-year and 5-year LLC cost, privacy, and investor fit. For most people the best state is their home state.",
  alternates: { canonical: "/tools/best-state-to-form-an-llc" },
  openGraph: {
    title: "Best State to Form an LLC Finder (2026)",
    description:
      "Answer three questions and compare states by 1-year and 5-year LLC cost, privacy, and investor fit. For most people the best state is their home state.",
    type: "website",
    url: "/tools/best-state-to-form-an-llc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best State to Form an LLC Finder (2026)",
    description:
      "Answer three questions and compare states by 1-year and 5-year LLC cost, privacy, and investor fit. For most people the best state is their home state.",
    images: ["/twitter-image"],
  },
};

export default function BestStatePage() {
  const calculatorJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Best State to Form an LLC Finder",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free educational finder comparing US states for LLC formation by 1-year and 5-year cost, privacy, and investor fit, using verified state fee data.",
  };

  const faqs = [
    {
      question: "What is the best state to form an LLC?",
      answer:
        "For most people, the state where they live and work. Forming in another state while operating at home means paying two states: formation in one, plus foreign qualification and an annual report in the other. Wyoming, New Mexico and Delaware are worth considering only for a purely online business, a privacy-first setup, or a company raising venture capital.",
    },
    {
      question: "Is Wyoming the best state for an LLC?",
      answer:
        "Wyoming is a strong pick for an online business: low formation and annual costs, no state income tax on LLCs, and member names are not listed on public filings. But if you live and work in another state, you will usually still need to register there, which wipes out the saving.",
    },
    {
      question: "Is Delaware the best state for an LLC?",
      answer:
        "Delaware is the standard choice for companies planning to raise venture capital, because investors and their lawyers know its courts and case law. For a small local business it is usually a poor deal: $400 a year in annual tax plus foreign qualification in your home state.",
    },
    {
      question: "What is the cheapest state to form an LLC?",
      answer:
        "It depends on the time horizon. Several states combine a low formation fee with little or no annual cost. The finder above ranks your options by 5-year cost using this site's verified fee data — but remember that the cheapest formation state is not the cheapest overall if you must also register where you live.",
    },
    {
      question: "Can I form an LLC in a state where I don't live?",
      answer:
        "Yes, any state will accept your filing. The catch is that doing business in your home state — having an office, employees, or regular customers there — usually requires foreign qualification in that state too, with its own fee and annual report.",
    },
    {
      question: "What is the best state to form an LLC for a freelancer?",
      answer: "Your home state, in almost every case. A freelancer works from where they live, so an out-of-state LLC means a foreign registration at home plus the home state's annual fees anyway. The exception is a freelancer with no fixed location who wants privacy — New Mexico and Wyoming are the usual picks, and the finder above will show both with their five-year costs.",
    },
    {
      question: "Should I form my LLC in Wyoming or my home state?",
      answer: "Your home state, unless you have a specific reason not to. Wyoming costs $100 to form and $60 a year, which beats most states on price — but if you live elsewhere, you pay Wyoming's fees plus your home state's foreign registration fee and annual fees. Wyoming wins when you do not live in the state you are comparing it with, when you want its privacy, or when your home state is California or Massachusetts.",
    },
    {
      question: "What is the best state to form an LLC for real estate investors?",
      answer: "It depends on the strategy: one LLC per property, in the state where the property sits, is the standard advice, because an out-of-state LLC still has to foreign-qualify where the property is. Series LLCs (available in Texas, Delaware and a dozen other states) are the alternative for larger portfolios. Our guide to LLCs for real estate compares the three structures with their costs.",
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
          { name: "Best State to Form an LLC", item: "/tools/best-state-to-form-an-llc" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        Best State to Form an LLC Finder 2026
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        “Best state” lists usually rank formation fees and stop there. That misses the real cost: if you operate in your home state, you pay that state too. This finder weighs your home state, where you operate, and what matters to you — then compares 1-year and 5-year costs.
      </p>

      <p className="mt-3 max-w-3xl text-sm text-slate-500">
        Educational tool only. Not legal or tax advice.
      </p>

      <div className="mt-10">
        <BestStateFinder />
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">How to read the recommendation</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The finder starts from one rule: your home state is the default. It only recommends another state when your answers give a real reason — a purely online business with no physical presence, a privacy priority, or a plan to raise investors. Each recommendation shows the formation fee and the 1-year and 5-year totals from this site’s verified state fee data, so you can see what the alternative actually costs.
        </p>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">When another state is genuinely better</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li><strong>Online business, no physical presence:</strong> Wyoming or New Mexico can be cheaper and more private than your home state.</li>
          <li><strong>Privacy first:</strong> Wyoming and New Mexico do not list member names on public filings; Delaware does not either, but costs more.</li>
          <li><strong>Raising venture capital:</strong> Delaware, because investors expect it.</li>
          <li><strong>Local business, employees, or a shop:</strong> almost always your home state — anything else means paying two states.</li>
        </ul>
      </section>

      <figure className="mt-10 max-w-3xl">
        <Image
          src="/images/best-state-to-form-llc.svg"
          alt="Best state to form an LLC finder comparing cost privacy and investor fit"
          width={1200}
          height={630}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-xl border border-slate-200"
        />
        <figcaption className="mt-2 text-sm text-slate-500">The honest answer is usually your home state — the finder shows when it is not.</figcaption>
      </figure>
      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Best state to form an LLC for an online business with no physical location</h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          If you genuinely have no office, employees or warehouse anywhere, the cheapest
          states win: New Mexico ($50 to form, $0 a year), Wyoming ($100 to form, $60 a
          year) and Texas ($300 to form, $0 a year). But &quot;no physical location&quot;
          usually still means you live somewhere — and the state you live in can claim you
          are doing business there, which means a foreign registration and a second set of
          fees. Use the finder above with &quot;online business&quot; as your operation and
          it weighs that trade-off for you instead of just ranking by price. If privacy is
          the real goal rather than cost, our{" "}
          <Link href="/tools/anonymous-llc-state-finder" className="text-[#1769AA] hover:underline">
            anonymous LLC state finder
          </Link>{" "}
          ranks the same states by what is on the public record instead.
        </p>
      </section>
      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Best state to form an LLC if you live in California</h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          California, almost always. A California resident who forms in Wyoming still has
          to register as a foreign LLC in California and pay the $800 annual franchise tax
          — plus Wyoming&apos;s $60 a year — so the out-of-state LLC costs more, not less.
          The only California owners who benefit from Delaware or Wyoming are those raising
          venture capital (investors prefer Delaware) or running a business with no
          California presence at all. If you live in California and work from California,
          form in California; the finder above will tell you the same thing, with the
          numbers to prove it.
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
        <h2 className="text-lg font-semibold text-[#102A43]">Related tools &amp; guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/tools/anonymous-llc-state-finder" className="text-[#1769AA] hover:underline">
              Anonymous LLC State Finder — privacy by state
            </Link>
          </li>
          <li>
            <Link href="/cheapest-states-to-form-an-llc" className="text-[#1769AA] hover:underline">
              Cheapest States to Form an LLC
            </Link>
          </li>
          <li>
            <Link href="/tools/foreign-qualification-cost-calculator" className="text-[#1769AA] hover:underline">
              Foreign Qualification Cost Calculator
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
        Educational information only. This finder and page provide general estimates and explanations. They are not legal or tax advice. Costs use this site’s verified state fee data; confirm current fees with the Secretary of State before filing. This site is not affiliated with any government agency.
      </p>
    </div>
  );
}
