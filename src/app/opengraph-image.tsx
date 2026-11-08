import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Get LLC Cost Calculator — Free US LLC filing fees by state";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #102A43 0%, #1769AA 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "white",
              color: "#102A43",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            LLC
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, opacity: 0.95 }}>
            Get LLC Cost Calculator
          </div>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 900,
            letterSpacing: "-0.02em",
          }}
        >
          Free US LLC filing fees by state
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 26,
            opacity: 0.9,
            maxWidth: 820,
            lineHeight: 1.4,
          }}
        >
          Compare formation fees, annual reports, and multi-year totals with official source links.
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 20,
            opacity: 0.75,
          }}
        >
          www.getllccostcalculator.com · Educational only
        </div>
      </div>
    ),
    { ...size }
  );
}
