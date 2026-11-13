import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";
import { PRICING, SITE } from "@src/lib/site";

export const alt = `${SITE.name}: You're great at the work. We'll handle the paperwork.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The social share image, drawn to match the homepage hero. ImageResponse can't read WOFF2,
// so it uses the static WOFF files in src/app/fonts/og.
export default async function OpenGraphImage() {
  const root = process.cwd();
  const [icon, phone, fraunces, caveat] = await Promise.all([
    readFile(path.join(root, "public/app-icon.png")),
    readFile(path.join(root, "public/screens/og-phone.png")),
    readFile(path.join(root, "src/app/fonts/og/fraunces-600.woff")),
    readFile(path.join(root, "src/app/fonts/og/caveat-600.woff")),
  ]);
  const dataUrl = (file: Buffer) => `data:image/png;base64,${file.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#f7f3ea",
          backgroundImage:
            "linear-gradient(rgba(74,102,85,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(74,102,85,0.08) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          color: "#2b2f2e",
          fontFamily: "Fraunces",
        }}
      >
        {/* Left: brand, headline, price note */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 0 10px 76px",
            width: 800,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <img src={dataUrl(icon)} width={64} height={64} alt="" style={{ borderRadius: 14 }} />
            <div style={{ fontSize: 38 }}>{SITE.name}</div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 46,
              fontSize: 60,
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
            }}
          >
            <div style={{ whiteSpace: "nowrap" }}>You’re great at the work.</div>
            <div>We’ll handle the</div>
            <div style={{ display: "flex", flexDirection: "column", alignSelf: "flex-start" }}>
              <div>paperwork.</div>
              <div
                style={{
                  height: 7,
                  marginTop: 4,
                  borderRadius: 6,
                  backgroundColor: "#d4805c",
                  transform: "rotate(-1.5deg)",
                }}
              />
            </div>
          </div>

          <div
            style={{
              marginTop: 34,
              fontFamily: "Caveat",
              fontSize: 40,
              color: "#4a6655",
              transform: "rotate(-2deg)",
            }}
          >
            {`free to start · Pro is just ${PRICING.monthly}/mo`}
          </div>
        </div>

        {/* Right: taped phone, bleeding off the bottom edge */}
        <div
          style={{
            position: "absolute",
            right: 70,
            top: 60,
            width: 300,
            display: "flex",
            transform: "rotate(-4deg)",
          }}
        >
          <img src={dataUrl(phone)} width={300} height={622} alt="" />
          <div
            style={{
              position: "absolute",
              top: -14,
              left: 96,
              width: 110,
              height: 32,
              backgroundColor: "rgba(232,220,190,0.9)",
              transform: "rotate(4deg)",
            }}
          />
        </div>

        {/* Sticky note */}
        <div
          style={{
            position: "absolute",
            right: 26,
            top: 300,
            width: 190,
            padding: "16px 18px 20px",
            backgroundColor: "#f3e3a6",
            fontFamily: "Caveat",
            fontSize: 30,
            lineHeight: 1.05,
            color: "#3d3a2c",
            transform: "rotate(6deg)",
            boxShadow: "0 10px 20px rgba(60,50,20,0.18)",
          }}
        >
          Invoice sent from the driveway.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 600, style: "normal" },
        { name: "Caveat", data: caveat, weight: 600, style: "normal" },
      ],
    },
  );
}
