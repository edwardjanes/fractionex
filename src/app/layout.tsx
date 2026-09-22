import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Fractionex - Fractional Property Investment & Exchange",
  description: "Fractionex is building a platform for fractional ownership of UK property through tokenisation. Pre-launch: no investments are currently offered.",
  keywords: "fractional property, property investment, real estate, UK property, property exchange, fractional ownership",
  authors: [{ name: "Fractionex" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://fractionex.io",
    siteName: "Fractionex",
    title: "Fractionex - Fractional Property Investment & Exchange",
    description: "Fractionex is building a platform for fractional ownership of UK property through tokenisation. Pre-launch: no investments are currently offered.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractionex - Fractional Property Investment & Exchange",
    description: "Fractionex is building a platform for fractional ownership of UK property through tokenisation. Pre-launch: no investments are currently offered.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
