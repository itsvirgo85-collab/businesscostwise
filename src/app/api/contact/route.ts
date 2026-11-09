import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// Private delivery address — never exposed in the public UI
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "itsvirgo85@gmail.com";
const FROM_NAME = "Get LLC Cost Calculator";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.getllccostcalculator.com";

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

async function sendWithResend(opts: {
  name: string;
  email: string;
  subject: string;
  text: string;
}) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) return { ok: false as const, reason: "no_key" };

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
      reply_to: opts.email,
      subject: opts.subject,
      text: opts.text,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("Resend error:", detail);
    return { ok: false as const, reason: "resend_failed" };
  }

  return { ok: true as const };
}

async function sendWithFormSubmit(opts: {
  name: string;
  email: string;
  subject: string;
  topic: string;
  message: string;
}) {
  // FormSubmit rejects server calls without a real site Origin/Referer
  const form = new FormData();
  form.set("name", opts.name);
  form.set("email", opts.email);
  form.set("_replyto", opts.email);
  form.set("_subject", opts.subject);
  form.set("topic", opts.topic);
  form.set("message", opts.message);
  form.set("_template", "table");
  form.set("_captcha", "false");
  form.set("_honey", "");

  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(TO_EMAIL)}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Origin: SITE_URL,
      Referer: `${SITE_URL}/contact`,
    },
    body: form,
  });

  const raw = await res.text();
  let json: { success?: string | boolean; message?: string } = {};
  try {
    json = JSON.parse(raw) as typeof json;
  } catch {
    console.error("FormSubmit non-JSON response:", raw.slice(0, 500));
  }

  const successFlag =
    json.success === true ||
    json.success === "true" ||
    /thank you|sent|success/i.test(String(json.message || ""));

  if (!res.ok || !successFlag) {
    console.error("FormSubmit error:", res.status, raw.slice(0, 500));
    return { ok: false as const, reason: "formsubmit_failed", detail: json.message || raw.slice(0, 200) };
  }

  return { ok: true as const };
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

    // 1) Resend (recommended — set RESEND_API_KEY in Vercel)
    const resend = await sendWithResend({
      name,
      email,
      subject: mailSubject,
      text: mailBody,
    });
    if (resend.ok) {
      return NextResponse.json({ ok: true });
    }

    // 2) FormSubmit fallback (free; first submit may need Gmail activation)
    const fs = await sendWithFormSubmit({
      name,
      email,
      subject: mailSubject,
      topic,
      message: mailBody,
    });
    if (fs.ok) {
      return NextResponse.json({ ok: true });
    }

    console.error("All email providers failed", { resend, fs });
    return NextResponse.json(
      {
        ok: false,
        error:
          "Could not deliver the message right now. Please try again in a few minutes.",
      },
      { status: 502 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected server error. Please try again later." },
      { status: 500 }
    );
  }
}
