import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "404 — Page Not Found | Get LLC Cost Calculator" },
  description:
    "The page you were looking for doesn't exist or has moved. Use the free LLC cost calculator to compare formation fees, annual reports and multi-year costs by state.",
  robots: { index: false },
  openGraph: {
    title: "404 — Page Not Found | Get LLC Cost Calculator",
    description:
      "The page you were looking for doesn't exist or has moved. Use the free LLC cost calculator to compare formation fees, annual reports and multi-year costs by state.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Get LLC Cost Calculator — Free US LLC filing fees by state",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "404 — Page Not Found | Get LLC Cost Calculator",
    description:
      "The page you were looking for doesn't exist or has moved. Use the free LLC cost calculator to compare formation fees, annual reports and multi-year costs by state.",
    images: ["/twitter-image"],
  },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        404
      </h1>
      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        This page could not be found.
      </p>
      <p className="mt-3 text-slate-600 leading-relaxed">
        The page may have moved, or the link may be out of date.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-lg bg-[#1769AA] px-5 py-2.5 text-sm font-medium text-white"
      >
        Return to the homepage
      </Link>
    </div>
  );
}
