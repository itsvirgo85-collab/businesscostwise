import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const RECIPIENT = "info@getllccostcalculator.com";
const SENDER = "Get LLC Cost Calculator <contact@getllccostcalculator.com>";
const INQUIRIES = new Set([
  "State fee correction",
  "Question about sources or methodology",
  "Calculator or website feedback",
  "General question",
]);

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && origin !== request.nextUrl.origin) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form unavailable: RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "The contact form is temporarily unavailable. Please try again later." },
      { status: 503 }
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit a valid form." }, { status: 400 });
  }

  if (clean(payload.website, 200)) {
    return NextResponse.json({ success: true });
  }

  const name = clean(payload.name, 100);
  const email = clean(payload.email, 254);
  const inquiry = clean(payload.inquiry, 80);
  const state = clean(payload.state, 60);
  const subject = clean(payload.subject, 150);
  const message = clean(payload.message, 5000);
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !emailIsValid || !INQUIRIES.has(inquiry) || !subject || message.length < 20) {
    return NextResponse.json(
      { error: "Please check the required fields and try again." },
      { status: 400 }
    );
  }

  const textBody = [
    "A new message was submitted through the Get LLC Cost Calculator contact form.",
    "",
    "Name: " + name,
    "Email: " + email,
    "Inquiry type: " + inquiry,
    state ? "US state: " + state : "",
    "Subject: " + subject,
    "",
    "Message:",
    message,
  ].filter(Boolean).join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: SENDER,
        to: [RECIPIENT],
        reply_to: email,
        subject: "Contact form: " + subject,
        text: textBody,
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      const providerError = await response.text();
      console.error("Contact email provider error:", response.status, providerError);
      return NextResponse.json(
        { error: "We could not send your message right now. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email delivery failed:", error);
    return NextResponse.json(
      { error: "We could not send your message right now. Please try again later." },
      { status: 502 }
    );
  }
}
