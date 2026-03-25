import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import HtmlLangSync from "@/components/HtmlLangSync";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const SITE_URL = "https://ledgr.app";
const OG_TITLE = "Ledgr — Your books, handled. Finally.";
const OG_DESCRIPTION =
  "Ledgr gives independent contractors a simple, smart way to track income, log expenses, and stay tax-ready — without the spreadsheet chaos.";

export const metadata: Metadata = {
  title: OG_TITLE,
  description: OG_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: SITE_URL,
    siteName: "Ledgr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className={inter.className}>
          <LanguageProvider>
            <HtmlLangSync />
            {children}
          </LanguageProvider>
        </body>
    </html>
  );
}
