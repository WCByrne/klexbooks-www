# Klex Books website

Marketing site for Klex Books — landing page, privacy policy and help articles. Next.js on Vercel.

## Develop

```bash
yarn install
yarn dev
```

Open http://localhost:3000.

## Where things live

- `src/lib/site.ts` — site name, URL, tagline, support email, and the App Store link.
  While `appStoreUrl` is `null` the site shows "Coming soon to the App Store"; set it at launch
  and the badge becomes a download button.
- `src/app/privacy/page.tsx` — privacy policy. Update `EFFECTIVE_DATE` whenever it changes.
- `content/help/*.md` — help articles. The filename is the URL (`getting-started.md` → `/help/getting-started`).
  Files starting with `_` are ignored; copy `_example.md` to start a new one.
- `src/app/icon.png`, `src/app/apple-icon.png`, `public/app-icon.png` — generated from the app icon.
- `src/app/opengraph-image.tsx` — social share image, generated at build time.

## Deploy

Import the repo in Vercel (framework preset: Next.js). Enable Web Analytics in the Vercel project settings.
