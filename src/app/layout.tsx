import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.getllccostcalculator.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.svg",
  },
  title: {
    default: "Get LLC Cost Calculator — Free US LLC Filing Fees by State",
    template: "%s | Get LLC Cost Calculator",
  },
  description:
    "Free LLC cost calculator for all 50 US states and DC. Compare formation fees, annual filings, franchise taxes, and multi-year estimates with official government references.",
  applicationName: "Get LLC Cost Calculator",
  authors: [{ name: "Get LLC Cost Calculator" }],
  creator: "Get LLC Cost Calculator",
  publisher: "Get LLC Cost Calculator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Get LLC Cost Calculator",
    title: "Get LLC Cost Calculator — Free US LLC Filing Fees by State",
    description:
      "Free LLC cost calculator for all 50 US states and DC. Formation fees, annual reports, and multi-year totals with official source links.",
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
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "education",
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-slate-900`}>
        <JsonLd />
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
