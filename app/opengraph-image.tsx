import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#181c22",
          backgroundImage:
            "linear-gradient(to right, rgba(180,195,215,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(180,195,215,0.10) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "#f0a35a", fontSize: 22, letterSpacing: 6 }}>
            {siteConfig.sheet.drawing}
          </span>
          <span style={{ color: "#8e99a8", fontSize: 22, letterSpacing: 6 }}>
            {siteConfig.location.toUpperCase()}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: 1, backgroundColor: "rgba(180,195,215,0.35)", marginBottom: 28 }} />
          <span style={{ color: "#eef1f5", fontSize: 116, fontWeight: 700, letterSpacing: -5, lineHeight: 1 }}>
            {siteConfig.name}
          </span>
          <span style={{ color: "#aab3c0", fontSize: 40, marginTop: 20, letterSpacing: -1 }}>
            {siteConfig.role} · React, Next.js, TypeScript
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "#8e99a8", fontSize: 24 }}>
            LMS, exam portals and client web apps · 3+ years
          </span>
          <span
            style={{
              display: "flex",
              color: "#181c22",
              backgroundColor: "#f0a35a",
              fontSize: 22,
              letterSpacing: 4,
              padding: "12px 22px",
            }}
          >
            {siteConfig.availability.label.toUpperCase()}
          </span>
        </div>
      </div>
    ),
    size
  );
}
