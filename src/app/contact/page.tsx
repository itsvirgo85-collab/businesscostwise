import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Get LLC Cost Calculator | Fee Corrections & Support",
  description:
    "Contact Get LLC Cost Calculator for US LLC fee corrections, questions about official state sources, calculator feedback, or website support.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Get LLC Cost Calculator | Fee Corrections & Support",
    description:
      "Send a question, report an LLC filing fee update, or share feedback about our state cost calculators and official sources.",
    type: "website",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Get LLC Cost Calculator | Fee Corrections & Support",
    description:
      "Questions about US LLC filing fees, official sources, or our calculators? Contact the Get LLC Cost Calculator team.",
  },
};

const faqs = [
  {
    question: "How do I report an incorrect LLC filing fee?",
    answer:
      "Use the contact form and choose State fee correction. Include the state, the fee name, the amount currently shown, and a direct link to the relevant official state government page. We use official sources to review reported changes.",
  },
  {
    question: "What information should I include with a fee correction?",
    answer:
      "Please provide the state, the filing or annual fee type, the corrected amount if known, the official government source URL, and the date you checked it. Do not send private identification numbers or other sensitive personal information.",
  },
  {
    question: "Can you help me form an LLC or provide legal or tax advice?",
    answer:
      "No. Get LLC Cost Calculator provides educational information and cost estimates. We do not form LLCs, submit state filings, or provide legal, tax, or accounting advice. Contact a qualified professional or the relevant state agency for advice about your circumstances.",
  },
  {
    question: "How long does it take to receive a reply?",
    answer:
      "We aim to respond within a few business days. Requests that require checking a state agency source may take longer. A response time is an estimate, not a guaranteed service level.",
  },
  {
    question: "Where can I find the sources used for your LLC cost estimates?",
    answer:
      "Visit our Sources & Methodology page to learn how we research and verify state filing fees, annual report requirements, and other cost information. You can also open the state cost pages to review available official source links.",
  },
];

const relatedPages = [
  {
    href: "/llc-cost-calculator",
    title: "LLC Cost Calculator",
    description: "Estimate formation and ongoing LLC costs using the state information available on our site.",
  },
  {
    href: "/llc-cost-by-state",
    title: "LLC Costs by State",
    description: "Compare state-level LLC filing costs and explore individual state cost guides.",
  },
  {
    href: "/how-much-does-it-cost-to-start-an-llc",
    title: "How Much Does It Cost to Start an LLC?",
    description: "Understand common formation expenses and costs beyond the initial filing fee.",
  },
  {
    href: "/annual-report-requirements-by-state",
    title: "Annual Report Requirements by State",
    description: "Review recurring state filing requirements that may affect the ongoing cost of an LLC.",
  },
  {
    href: "/about/sources-and-methodology",
    title: "Sources & Methodology",
    description: "See how we collect, check, and present state fee information.",
  },
  {
    href: "/about",
    title: "About Get LLC Cost Calculator",
    description: "Learn about the purpose and scope of this educational cost-information website.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-14">
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Contact", item: "/contact" },
        ]}
      />

      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#1769AA]">
          We welcome questions and corrections
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
          Contact Get LLC Cost Calculator
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Have a question about LLC formation costs, a state filing fee, or one of
          our calculators? Send our team a message. If you spot information that
          may be out of date, please share the official state source so we can
          review it.
        </p>
      </header>

      <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,1.55fr)_minmax(280px,0.85fr)]">
        <ContactForm />

        <aside className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-bold text-[#102A43]">Email us directly</h2>
            <a
              href="mailto:info@getllccostcalculator.com"
              className="mt-3 inline-block break-all text-base font-semibold text-[#1769AA] hover:underline"
            >
              info@getllccostcalculator.com
            </a>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Prefer to use your own email account? You can contact us directly at this address.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-[#102A43]">For an LLC fee correction</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              To help us verify a reported change, include:
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
              <li>• The US state and fee type</li>
              <li>• The amount currently shown and the corrected amount, if known</li>
              <li>• A direct link to the official government source</li>
              <li>• The date you checked the source</li>
            </ul>
            <Link
              href="/about/sources-and-methodology"
              className="mt-4 inline-flex text-sm font-semibold text-[#1769AA] hover:underline"
            >
              Read our source-checking methodology →
            </Link>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-[#102A43]">What we can help with</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
              <li>• Possible errors or updates to published state fees</li>
              <li>• Questions about source links and research methods</li>
              <li>• Feedback about LLC cost calculators and guides</li>
              <li>• Website accessibility or technical issues</li>
            </ul>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              We do not prepare or submit LLC filings, and we cannot provide
              legal, tax, or accounting advice.
            </p>
          </section>
        </aside>
      </div>

      <section className="mt-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-[#102A43]">
            Frequently asked questions about contacting us
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Find quick answers about fee corrections, official sources, the
            information to include in a message, and the type of support we can
            provide.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white p-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-[#102A43]">
                {faq.question}
                <span aria-hidden="true" className="shrink-0 text-[#1769AA] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-[#102A43]">
            Helpful LLC cost resources
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            You may find the answer you need in one of these guides or tools
            before sending a message.
          </p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-[#1769AA] hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1769AA] focus:ring-offset-2"
            >
              <span className="font-semibold text-[#1769AA]">{page.title}</span>
              <span className="mt-2 block text-sm leading-6 text-slate-600">{page.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl bg-[#102A43] p-7 text-white sm:p-9">
        <h2 className="text-xl font-bold">Need to check an LLC cost first?</h2>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-200">
          Use the free LLC Cost Calculator to explore state filing fees and
          estimated ongoing costs. Always confirm current requirements with the
          relevant state agency before making a filing decision.
        </p>
        <Link
          href="/llc-cost-calculator"
          className="mt-5 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#102A43] transition hover:bg-slate-100"
        >
          Open the LLC Cost Calculator →
        </Link>
      </section>
    </div>
  );
}
