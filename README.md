# Klex Books website

Marketing site for Klex Books — landing page, privacy policy and help articles. Next.js on Vercel.

## Develop

Requires Node 24 (see `.nvmrc`).

```bash
yarn install
yarn dev
```

Open http://localhost:3000.

## Where things live

- `src/lib/site.ts` — site name, URL, tagline, support email, the App Store link, and the
  prices shown on the site (`PRICING`, keep in step with the app's StoreKit products).
  While `appStoreUrl` is `null` the site shows "Coming soon to the App Store"; set it at launch
  and the badge becomes a download button.
- `src/app/page.tsx` — the homepage. Each section lives in `src/components/sections/`, and the
  hand-drawn bits (underlines, arrows, tape) are in `src/components/elements/Doodles.tsx`.
- `public/screens/` — app screenshots (device frames, no background), exported as WebP.
- `src/app/fonts/` — self-hosted Fraunces, Inter and Caveat (handwriting), loaded with `next/font/local`.
- `src/app/privacy/page.tsx` — privacy policy. Update `EFFECTIVE_DATE` whenever it changes.
- `content/help/*.md` — help articles. The filename is the URL (`getting-started.md` → `/help/getting-started`).
  Files starting with `_` are ignored; copy `_example.md` to start a new one.
- `src/app/icon.png`, `src/app/apple-icon.png`, `public/app-icon.png` — generated from the app icon.
- `src/app/opengraph-image.tsx` — social share image, generated at build time.

## Deploy

Import the repo in Vercel (framework preset: Next.js). Enable Web Analytics in the Vercel project settings.
