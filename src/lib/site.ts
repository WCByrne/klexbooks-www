// Single place for site-wide values. Update these before launch.
export const SITE = {
  name: "Klex Books",
  url: "https://www.klexbooks.app",
  tagline: "The back office for the one-person business.",
  description:
    "Klex Books keeps your clients, schedule, hours, invoices, expenses and mileage in one simple app for iPhone, iPad and Mac. Built for home organizers, handymen and other solo pros.",
  supportEmail: "support@klexbooks.com",
  // Set to the App Store URL once the app is live; while null the site shows "Coming soon".
  appStoreUrl: null as string | null,
};

// Keep in step with the app: App/Shared/Store/ProAccess.swift and App/KlexBooksPro.storekit.
export const PRICING = {
  monthly: "$4.99",
  yearly: "$39.99",
  yearlyPerMonth: "$3.33",
  freeActiveJobs: 5,
  freeFilesPerJob: 10,
};
