import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import Header from "@components/elements/Header";
import Footer from "@components/elements/Footer";
import { SITE, SOCIAL, baseUrl } from "@src/lib/site";
import { jsonLd } from "@src/lib/jsonld";
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
  metadataBase: new URL(baseUrl()),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  // Tab icons use the transparent, small-size artwork in public/favicon. src/app/favicon.ico
  // covers the default /favicon.ico request, and src/app/apple-icon.png (the full app icon
  // with its background) is used for the iOS home screen.
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
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

// Tells search engines which social profiles belong to Klex Books.
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/app-icon.png`,
      sameAs: SOCIAL.map((network) => network.url),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      name: SITE.name,
      url: SITE.url,
      description: SITE.description,
      publisher: { "@id": `${SITE.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${caveat.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(siteJsonLd)}
        />
        <Analytics />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
