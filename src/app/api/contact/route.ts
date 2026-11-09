import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// Private — never sent to the browser
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
  email: string;
  subject: string;
  text: string;
}) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false as const, provider: "resend", reason: "not_configured" };

  const from =
    process.env.CONTACT_FROM_EMAIL ||
    "Get LLC Cost Calculator <onboarding@resend.dev>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
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
    console.error("Resend error:", await res.text());
    return { ok: false as const, provider: "resend", reason: "send_failed" };
  }
  return { ok: true as const, provider: "resend" };
}

async function sendWithWeb3Forms(opts: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return { ok: false as const, provider: "web3forms", reason: "not_configured" };

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: opts.subject,
      from_name: opts.name,
      email: opts.email,
      message: opts.message,
      to: TO_EMAIL,
    }),
  });

  const data = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };
  if (!res.ok || !data.success) {
    console.error("Web3Forms error:", data);
    return { ok: false as const, provider: "web3forms", reason: "send_failed" };
  }
  return { ok: true as const, provider: "web3forms" };
}

async function sendWithFormSubmit(opts: {
  name: string;
  email: string;
  subject: string;
  topic: string;
  message: string;
}) {
  const form = new FormData();
  form.set("name", opts.name);
  form.set("email", opts.email);
  form.set("_replyto", opts.email);
  form.set("_subject", opts.subject);
  form.set("topic", opts.topic);
  form.set("message", opts.message);
  form.set("_template", "table");
  form.set("_captcha", "false");

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
    /* ignore */
  }

  if (res.status === 429 || /rate limit/i.test(String(json.message || raw))) {
    console.error("FormSubmit rate limited");
    return { ok: false as const, provider: "formsubmit", reason: "rate_limited" };
  }

  const success =
    json.success === true ||
    json.success === "true" ||
    /thank you|sent successfully/i.test(String(json.message || ""));

  if (!res.ok || !success) {
    console.error("FormSubmit error:", res.status, raw.slice(0, 300));
    return { ok: false as const, provider: "formsubmit", reason: "send_failed" };
  }
  return { ok: true as const, provider: "formsubmit" };
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

    // Prefer paid/free API keys (reliable on Vercel)
    const attempts = [
      () => sendWithResend({ email, subject: mailSubject, text: mailBody }),
      () =>
        sendWithWeb3Forms({
          name,
          email,
          subject: mailSubject,
          message: mailBody,
        }),
      () =>
        sendWithFormSubmit({
          name,
          email,
          subject: mailSubject,
          topic,
          message: mailBody,
        }),
    ];

    for (const attempt of attempts) {
      const result = await attempt();
      if (result.ok) {
        return NextResponse.json({ ok: true });
      }
    }

    const hasAnyKey = Boolean(process.env.RESEND_API_KEY || process.env.WEB3FORMS_ACCESS_KEY);

    return NextResponse.json(
      {
        ok: false,
        error: hasAnyKey
          ? "Could not deliver the message right now. Please try again in a few minutes."
          : "Email delivery is not configured yet. The site owner needs to add a RESEND_API_KEY in Vercel.",
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
