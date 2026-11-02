import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "BusinessCostWise — US LLC Formation Costs & Business Tools",
    template: "%s | BusinessCostWise",
  },
  description:
    "Free LLC formation cost calculator by state, LLC vs sole proprietorship comparison, and practical guides for US small-business owners. Source-backed fees and educational resources.",
  metadataBase: new URL("https://businesscostwise.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "BusinessCostWise",
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
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
