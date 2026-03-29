import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ConflictBrief AI — Daily War News Summary";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #FAFAF8 0%, #F0EEEB 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#1A1A1A",
              letterSpacing: "-0.02em",
            }}
          >
            Conflict
          </span>
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#2563EB",
              letterSpacing: "-0.02em",
            }}
          >
            Brief
          </span>
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#1A1A1A",
              letterSpacing: "-0.02em",
            }}
          >
            AI
          </span>
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#6B7280",
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          AI-powered war &amp; conflict news summaries — updated every 30 minutes
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 32,
            fontSize: 18,
            color: "#6B7280",
          }}
        >
          <span>Reuters</span>
          <span>·</span>
          <span>AP</span>
          <span>·</span>
          <span>BBC</span>
          <span>·</span>
          <span>Al Jazeera</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
