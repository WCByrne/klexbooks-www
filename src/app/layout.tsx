import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import Header from "@components/elements/Header";
import Footer from "@components/elements/Footer";
import { SITE } from "@src/lib/site";
import "./globals.css";

// Self-hosted so builds don't depend on reaching Google Fonts. See src/app/fonts/README.md.
const inter = localFont({
  src: "./fonts/inter.woff2",
  variable: "--font-sans",
  weight: "100 900",
  display: "swap",
});
const fraunces = localFont({
  src: "./fonts/fraunces.woff2",
  variable: "--font-serif",
  weight: "100 900",
  display: "swap",
});
const caveat = localFont({
  src: "./fonts/caveat.woff2",
  variable: "--font-hand",
  weight: "400 700",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f3ea",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${caveat.variable}`}>
      <body className="antialiased">
        <Analytics />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
