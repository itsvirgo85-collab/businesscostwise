import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// Private delivery address — never exposed in the public UI
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "itsvirgo85@gmail.com";
const FROM_NAME = "Get LLC Cost Calculator";

type Body = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  topic?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clean(value: unknown, max: number) {
  return String(value ?? "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, max);
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Body;

    const name = clean(body.name, 120);
    const email = clean(body.email, 200);
    const subject = clean(body.subject, 200);
    const message = clean(body.message, 5000);
    const topic = clean(body.topic, 80) || "general";

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { ok: false, error: "Please fill in name, email, subject, and message." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const mailSubject = `[Contact / ${topic}] ${subject}`;
    const mailBody = [
      `New contact form submission from ${FROM_NAME}`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Topic: ${topic}`,
      `Subject: ${subject}`,
      ``,
      `Message:`,
      message,
      ``,
      `---`,
      `Sent via getllccostcalculator.com/contact`,
    ].join("\n");

    // Prefer Resend when RESEND_API_KEY is configured in Vercel env
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const from =
        process.env.CONTACT_FROM_EMAIL ||
        "Get LLC Cost Calculator <onboarding@resend.dev>";

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [TO_EMAIL],
          reply_to: email,
          subject: mailSubject,
          text: mailBody,
        }),
      });

      if (!res.ok) {
        const detail = await res.text();
        console.error("Resend error:", detail);
        return NextResponse.json(
          { ok: false, error: "Could not send the message right now. Please try again later." },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true });
    }

    // Zero-config fallback: FormSubmit (server-side only; address never shown in UI)
    // First submission may require inbox confirmation from FormSubmit.
    const fsRes = await fetch(`https://formsubmit.co/ajax/${TO_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        _subject: mailSubject,
        topic,
        message: mailBody,
        _template: "table",
        _captcha: "false",
      }),
    });

    if (!fsRes.ok) {
      const detail = await fsRes.text();
      console.error("FormSubmit error:", detail);
      return NextResponse.json(
        {
          ok: false,
          error: "Could not deliver the message right now. Please try again later.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected server error. Please try again later." },
      { status: 500 }
    );
  }
}
