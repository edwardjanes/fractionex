import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fractionex - Fractional Property Investment & Exchange",
  description: "Invest in premium UK real estate from just £10. Buy fractional shares, earn automatic income distributions, and trade on our exchange. The most trusted fractional property platform.",
  keywords: "fractional property, property investment, real estate, UK property, property exchange, fractional ownership",
  authors: [{ name: "Fractionex" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://fractionex.io",
    siteName: "Fractionex",
    title: "Fractionex - Fractional Property Investment & Exchange",
    description: "Invest in premium UK real estate from just £10. Buy fractional shares, earn automatic income distributions, and trade on our exchange.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractionex - Fractional Property Investment & Exchange",
    description: "Invest in premium UK real estate from just £10. Buy fractional shares, earn automatic income distributions, and trade on our exchange.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
