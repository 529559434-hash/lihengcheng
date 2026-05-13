import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export const runtime = "edge";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 36,
          fontWeight: 700,
          letterSpacing: -1,
          background:
            "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #22d3ee 100%)",
          borderRadius: 14,
        }}
      >
        L
      </div>
    ),
    { ...size },
  );
}
