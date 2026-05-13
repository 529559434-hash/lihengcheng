import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} | ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0A0A0A",
          backgroundImage:
            "radial-gradient(60% 50% at 20% 10%, rgba(99,102,241,0.45), transparent 70%), radial-gradient(50% 40% at 90% 100%, rgba(34,211,238,0.35), transparent 70%)",
          color: "white",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            opacity: 0.8,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #22d3ee 100%)",
              fontWeight: 700,
              fontSize: 28,
            }}
          >
            L
          </div>
          <div>lihengcheng.com</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 44, opacity: 0.85 }}>{site.role}</div>
          <div
            style={{
              fontSize: 28,
              opacity: 0.6,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            {site.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
