"use client";

import { FormEvent, useState } from "react";

const EMAIL = "info@getllccostcalculator.com";

const inquiryOptions = [
  "State fee correction",
  "Question about sources or methodology",
  "Calculator or website feedback",
  "General question",
];

export default function ContactForm() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const inquiry = String(form.get("inquiry") ?? "General question");
    const state = String(form.get("state") ?? "").trim();
    const subject = String(form.get("subject") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const emailSubject = subject || inquiry;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Inquiry type: ${inquiry}`,
      state ? `State: ${state}` : "",
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`;
    setNotice(
      "Your email app should open with your message prepared. Please review it and press Send in your email app to complete delivery."
    );
    window.location.href = mailto;
  }

  return (
    <section
      aria-labelledby="contact-form-heading"
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#1769AA]">
          Send us a message
        </p>
        <h2
          id="contact-form-heading"
          className="mt-2 text-2xl font-bold tracking-tight text-[#102A43]"
        >
          Contact our team
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Share your question or correction below. For state fee updates, include
          the state and a link to the relevant official government source.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-800">
              Your name <span aria-hidden="true" className="text-red-600">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              maxLength={100}
              className="w-full rounded-lg border border-slate-300 px-3 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1769AA] focus:ring-2 focus:ring-blue-100"
              placeholder="Jane Smith"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-800">
              Email address <span aria-hidden="true" className="text-red-600">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              className="w-full rounded-lg border border-slate-300 px-3 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1769AA] focus:ring-2 focus:ring-blue-100"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-inquiry" className="mb-2 block text-sm font-medium text-slate-800">
              What is your message about?
            </label>
            <select
              id="contact-inquiry"
              name="inquiry"
              defaultValue={inquiryOptions[0]}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1769AA] focus:ring-2 focus:ring-blue-100"
            >
              {inquiryOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="contact-state" className="mb-2 block text-sm font-medium text-slate-800">
              US state <span className="font-normal text-slate-500">(optional)</span>
            </label>
            <input
              id="contact-state"
              name="state"
              type="text"
              autoComplete="address-level1"
              maxLength={60}
              className="w-full rounded-lg border border-slate-300 px-3 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1769AA] focus:ring-2 focus:ring-blue-100"
              placeholder="e.g. Texas"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-slate-800">
            Subject <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            required
            maxLength={150}
            className="w-full rounded-lg border border-slate-300 px-3 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1769AA] focus:ring-2 focus:ring-blue-100"
            placeholder="Briefly describe your question"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-800">
            Message <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            minLength={20}
            maxLength={5000}
            rows={7}
            className="w-full resize-y rounded-lg border border-slate-300 px-3 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1769AA] focus:ring-2 focus:ring-blue-100"
            placeholder="Tell us how we can help. If you are reporting a fee change, include the fee name, amount shown, and official source URL."
          />
          <p className="mt-2 text-xs text-slate-500">
            Please do not include Social Security numbers, tax IDs, passwords, or other sensitive personal information.
          </p>
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-lg bg-[#1769AA] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#12588f] focus:outline-none focus:ring-2 focus:ring-[#1769AA] focus:ring-offset-2 sm:w-auto"
        >
          Prepare email
          <span aria-hidden="true" className="ml-2">→</span>
        </button>

        <p aria-live="polite" role="status" className="text-sm leading-6 text-slate-600">
          {notice || "Submitting opens your default email app with the message details filled in. You will need to press Send in that app."}
        </p>
      </form>
    </section>
  );
}
