"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill this, humans leave it empty
    if (String(data.get("website") || "").trim()) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") || "").trim(),
          email: String(data.get("email") || "").trim(),
          subject: String(data.get("subject") || "").trim(),
          message: String(data.get("message") || "").trim(),
          topic: String(data.get("topic") || "").trim(),
        }),
      });

      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Unable to send your message right now."
      );
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-semibold text-[#102A43]">Send a message</h2>
      <p className="mt-2 text-sm text-slate-600">
        Questions about LLC state fees, data corrections, or this educational site — we read every message.
      </p>

      {status === "success" && (
        <div
          className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
          role="status"
        >
          Thank you. Your message was sent. We typically reply within a few business days.
        </div>
      )}

      {status === "error" && (
        <div
          className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          role="alert"
        >
          {errorMessage}{" "}
          You can also email{" "}
          <a href="mailto:itsvirgo85@gmail.com" className="font-medium underline">
            itsvirgo85@gmail.com
          </a>
          .
        </div>
      )}

      <form onSubmit={onSubmit} className="mt-6 space-y-5" noValidate>
        {/* Honeypot field — hidden from users */}
        <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              maxLength={120}
              autoComplete="name"
              className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#1769AA] focus:ring-2 focus:ring-[#1769AA]/20"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={200}
              autoComplete="email"
              className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#1769AA] focus:ring-2 focus:ring-[#1769AA]/20"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-slate-700">
            Topic
          </label>
          <select
            id="topic"
            name="topic"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#1769AA] focus:ring-2 focus:ring-[#1769AA]/20"
            defaultValue="general"
          >
            <option value="general">General question</option>
            <option value="fee-correction">State fee correction</option>
            <option value="methodology">Sources & methodology</option>
            <option value="calculator">Calculator feedback</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-700">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            maxLength={200}
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#1769AA] focus:ring-2 focus:ring-[#1769AA]/20"
            placeholder="Brief subject line"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            maxLength={5000}
            className="mt-1.5 w-full resize-y rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#1769AA] focus:ring-2 focus:ring-[#1769AA]/20"
            placeholder="Include the state name and an official source link if you are reporting a fee change."
          />
        </div>

        <p className="text-xs text-slate-500">
          This form is for educational site feedback only — not legal, tax, or formation advice.
        </p>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-lg bg-[#102A43] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1769AA] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
      </form>
    </div>
  );
}
