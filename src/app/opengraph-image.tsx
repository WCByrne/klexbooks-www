import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";
import { SITE } from "@src/lib/site";

export const alt = SITE.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const icon = await readFile(path.join(process.cwd(), "public/app-icon.png"));
  const iconSrc = `data:image/png;base64,${icon.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 96px",
          background: "#f4f1eb",
          color: "#2b2f2e",
        }}
      >
        <img src={iconSrc} width={280} height={280} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 88, fontWeight: 700 }}>{SITE.name}</div>
          <div style={{ fontSize: 40, color: "#4a6655", maxWidth: 620 }}>{SITE.tagline}</div>
        </div>
      </div>
    ),
    size,
  );
}
