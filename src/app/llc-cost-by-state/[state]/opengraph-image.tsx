import { ImageResponse } from "next/og";
import { getStateBySlug } from "@/data/stateFees";

export const runtime = "edge";
export const alt = "LLC cost by state — formation fee and recurring costs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function titleCase(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default async function StateOpenGraphImage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: slug } = await params;
  const s = getStateBySlug(slug);
  const displayName = s
    ? s.slug === "district-of-columbia"
      ? "District of Columbia"
      : s.state
    : titleCase(slug);

  const formation =
    s?.formationFee != null ? `$${s.formationFee}` : "See site";
  const recurringParts: string[] = [];
  if (s) {
    if (s.annualFrequency !== "none" && s.annualFee != null) {
      recurringParts.push(
        `$${s.annualFee} ${s.annualFrequency === "biennial" ? "biennial" : "annual"} report`
      );
    }
    if (s.franchiseTax != null && s.franchiseTax > 0) {
      recurringParts.push(`$${s.franchiseTax}/yr franchise tax`);
    }
  }
  const recurring =
    recurringParts.length > 0 ? recurringParts.join(" · ") : "No recurring filing fee";
  const figure = `Formation ${formation} · ${recurring}`;

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
            display: "flex",
            fontSize: 48,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 960,
            letterSpacing: "-0.02em",
          }}
        >
          LLC Cost in {displayName} (2026)
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            opacity: 0.9,
            maxWidth: 880,
            lineHeight: 1.4,
          }}
        >
          {figure}
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
