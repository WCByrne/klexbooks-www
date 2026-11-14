import type { MetadataRoute } from "next";
import { SITE } from "@src/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "browser",
    background_color: "#f7f3ea",
    theme_color: "#f7f3ea",
    // Larger sizes use the full app icon rather than the transparent tab favicon.
    icons: [
      { src: "/app-icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/app-icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
