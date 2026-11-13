Self-hosted variable fonts (Latin subset) from Fontsource, loaded with `next/font/local` in `src/app/layout.tsx`.

- `fraunces.woff2` — Fraunces (headlines)
- `inter.woff2` — Inter (body)
- `caveat.woff2` — Caveat (handwritten notes)

`og/` holds static WOFF cuts of Fraunces and Caveat for the social share image
(`src/app/opengraph-image.tsx`), since `ImageResponse` can't read WOFF2.

All of them are licensed under the SIL Open Font License 1.1.
