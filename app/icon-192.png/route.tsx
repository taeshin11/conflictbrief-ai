import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 192,
          height: 192,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
          borderRadius: 40,
        }}
      >
        <span style={{ fontSize: 80, fontWeight: 800, color: "white", letterSpacing: "-0.04em" }}>
          CB
        </span>
      </div>
    ),
    { width: 192, height: 192 }
  );
}
