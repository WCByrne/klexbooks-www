// Single place for site-wide values. Update these before launch.
export const SITE = {
  name: "Klex Books",
  url: "https://www.klexbooks.app",
  tagline: "The back office for the one-person business.",
  description:
    "Klex Books keeps your clients, schedule, hours, invoices and mileage in one simple app for iPhone, iPad and Mac. Built for solo pros.",
  supportEmail: "support@klexbooks.app",
  // Set to the App Store URL once the app is live; while null the site shows "Coming soon".
  appStoreUrl: null as string | null,
};

// Shown in the footer and listed for search engines in src/app/layout.tsx.
export const SOCIAL = [
  { name: "Instagram", handle: "@klexbooks", url: "https://www.instagram.com/klexbooks/" },
  { name: "Facebook", handle: "Klex Books", url: "https://www.facebook.com/profile.php?id=61596776030599" },
  { name: "Threads", handle: "@klexbooks", url: "https://www.threads.com/@klexbooks" },
] as const;

export type SocialNetwork = (typeof SOCIAL)[number]["name"];

// Keep in step with the app: App/Shared/Store/ProAccess.swift and App/KlexBooksPro.storekit.
export const PRICING = {
  monthly: "$4.99",
  yearly: "$39.99",
  yearlyPerMonth: "$3.33",
  freeActiveJobs: 5,
  freeFilesPerJob: 10,
};

// Absolute URLs in the meta tags (like the share image) must point at a host that's actually
// serving this build. On Vercel, production uses the project's production domain (the custom
// domain once one is attached, otherwise the .vercel.app one) and previews use their own URL.
export function baseUrl() {
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (process.env.VERCEL_ENV === "production" && production) return `https://${production}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  if (process.env.VERCEL_ENV === "production") return SITE.url;
  return `http://localhost:${process.env.PORT ?? 3000}`;
}
