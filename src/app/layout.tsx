import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Get LLC Cost Calculator — Free US LLC Filing Fees by State",
    template: "%s | Get LLC Cost Calculator",
  },
  description:
    "Free LLC cost calculator for 49 verified US states and DC. Compare formation fees, annual filings, franchise taxes, and multi-year estimates with official government references.",
  metadataBase: new URL("https://getllccostcalculator.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Get LLC Cost Calculator",
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
