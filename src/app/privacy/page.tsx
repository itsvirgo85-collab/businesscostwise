import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Get LLC Cost Calculator",
  description: "How Get LLC Cost Calculator handles information when you use the site and calculators.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Privacy Policy</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: November 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700">
        <section>
          <h2 className="text-lg font-semibold text-[#102A43]">Overview</h2>
          <p className="mt-2">
            Get LLC Cost Calculator (“we”, “the site”) is an educational website about US LLC formation costs and related topics.
            We aim to collect as little personal information as possible.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#102A43]">Information we do not collect</h2>
          <p className="mt-2">
            The LLC Cost Calculator and other tools run entirely in your browser. We do not require an account,
            do not store your calculator inputs on our servers, and do not sell personal data.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#102A43]">Server logs and analytics</h2>
          <p className="mt-2">
            Like most websites, our hosting provider (and any analytics we later enable) may receive standard
            technical information such as IP address, browser type, pages visited, and approximate location.
            This is used only for security, performance, and understanding overall traffic patterns.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#102A43]">Cookies</h2>
          <p className="mt-2">
            We do not currently set non-essential tracking cookies. If we add analytics or advertising in the future,
            we will update this policy and, where required, provide appropriate consent controls.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#102A43]">Third-party links</h2>
          <p className="mt-2">
            The site links to official government websites and other external resources. Those sites have their own
            privacy practices. We are not responsible for their content or policies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#102A43]">Contact</h2>
          <p className="mt-2">
            For privacy-related questions, please use the contact method listed on the About page (when available)
            or open an issue in the project repository.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#102A43]">Changes</h2>
          <p className="mt-2">
            We may update this policy from time to time. The “Last updated” date at the top will change when we do.
          </p>
        </section>
      </div>
    </div>
  );
}
