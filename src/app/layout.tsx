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

// Absolute URLs in the meta tags (like the share image) must point at a host that's actually
// serving this build. On Vercel, production uses the project's production domain (the custom
// domain once one is attached, otherwise the .vercel.app one) and previews use their own URL.
function baseUrl() {
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (process.env.VERCEL_ENV === "production" && production) return `https://${production}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  if (process.env.VERCEL_ENV === "production") return SITE.url;
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl()),
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
