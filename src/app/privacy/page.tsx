import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Get LLC Cost Calculator",
  description:
    "How Get LLC Cost Calculator handles information when you use the site and calculators. Contact: info@getllccostcalculator.com",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — Get LLC Cost Calculator",
    description: "How Get LLC Cost Calculator handles information when you use the site and calculators. Contact: info@getllccostcalculator.com",
    type: "article",
    url: "/privacy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Get LLC Cost Calculator",
    description: "How Get LLC Cost Calculator handles information when you use the site and calculators. Contact: info@getllccostcalculator.com",
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#1769AA]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Privacy Policy</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: 2026</p>

      <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
        <p>
          Get LLC Cost Calculator (“we”, “our”, or “the site”) provides educational information about US LLC formation costs and related topics. This policy describes how information is handled when you use the site.
        </p>
        <h2 className="text-xl font-semibold text-[#102A43] pt-4">Information we collect</h2>
        <p>
          The site is primarily informational. We do not require an account to use the calculators or read the guides. Standard server and hosting logs (such as IP address, browser type, and pages requested) may be collected by our hosting provider (for example Vercel) as part of normal website operation and security.
        </p>
        <h2 className="text-xl font-semibold text-[#102A43] pt-4">Cookies and analytics</h2>
        <p>
          We may use privacy-friendly analytics or essential cookies needed for the site to function. You can control cookies through your browser settings.
        </p>
        <h2 className="text-xl font-semibold text-[#102A43] pt-4">Contact</h2>
        <p>
          If you email us at{" "}
          <a href="mailto:info@getllccostcalculator.com" className="text-[#1769AA] hover:underline">
            info@getllccostcalculator.com
          </a>
          , we will use your message only to respond to your inquiry.
        </p>
        <h2 className="text-xl font-semibold text-[#102A43] pt-4">Third-party links</h2>
        <p>
          Our pages link to official government websites and other external resources. We are not responsible for the privacy practices of those sites.
        </p>
        <h2 className="text-xl font-semibold text-[#102A43] pt-4">Changes</h2>
        <p>
          We may update this policy from time to time. The “Last updated” date at the top of this page will change when we do.
        </p>
        <p className="pt-4">
          See also our{" "}
          <Link href="/terms" className="text-[#1769AA] hover:underline">Terms of Use</Link>
          {" "}and{" "}
          <Link href="/disclaimer" className="text-[#1769AA] hover:underline">Disclaimer</Link>.
        </p>
      </div>
    </div>
  );
}
