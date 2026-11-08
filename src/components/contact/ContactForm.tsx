"use client";

import { FormEvent, useState } from "react";

const inquiryOptions = [
  "State fee correction",
  "Question about sources or methodology",
  "Calculator or website feedback",
  "General question",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [notice, setNotice] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const formElement = event.currentTarget;
    const payload = Object.fromEntries(new FormData(formElement).entries());

    setStatus("sending");
    setNotice("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "We could not send your message. Please try again.");
      }

      setStatus("success");
      setNotice("Thank you. Your message has been sent successfully. Our team will review it and reply by email if a response is needed.");
      formElement.reset();
    } catch (error) {
      setStatus("error");
      setNotice(error instanceof Error ? error.message : "We could not send your message. Please try again.");
    }
  }

  return (
    <section aria-labelledby="contact-form-heading" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#1769AA]">Send us a message</p>
        <h2 id="contact-form-heading" className="mt-2 text-2xl font-bold tracking-tight text-[#102A43]">Contact our team</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Share your question or correction below. For state fee updates, include the state and a link to the relevant official government source.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-800">Your name <span aria-hidden="true" className="text-red-600">*</span></label>
            <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={100} className="w-full rounded-lg border border-slate-300 px-3 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1769AA] focus:ring-2 focus:ring-blue-100" placeholder="Jane Smith" />
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-800">Email address <span aria-hidden="true" className="text-red-600">*</span></label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} className="w-full rounded-lg border border-slate-300 px-3 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1769AA] focus:ring-2 focus:ring-blue-100" placeholder="you@example.com" />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-inquiry" className="mb-2 block text-sm font-medium text-slate-800">What is your message about?</label>
            <select id="contact-inquiry" name="inquiry" defaultValue={inquiryOptions[0]} className="w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1769AA] focus:ring-2 focus:ring-blue-100">
              {inquiryOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="contact-state" className="mb-2 block text-sm font-medium text-slate-800">US state <span className="font-normal text-slate-500">(optional)</span></label>
            <input id="contact-state" name="state" type="text" autoComplete="address-level1" maxLength={60} className="w-full rounded-lg border border-slate-300 px-3 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1769AA] focus:ring-2 focus:ring-blue-100" placeholder="e.g. Texas" />
          </div>
        </div>

        <div>
          <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-slate-800">Subject <span aria-hidden="true" className="text-red-600">*</span></label>
          <input id="contact-subject" name="subject" type="text" required maxLength={150} className="w-full rounded-lg border border-slate-300 px-3 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1769AA] focus:ring-2 focus:ring-blue-100" placeholder="Briefly describe your question" />
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-800">Message <span aria-hidden="true" className="text-red-600">*</span></label>
          <textarea id="contact-message" name="message" required minLength={20} maxLength={5000} rows={7} className="w-full resize-y rounded-lg border border-slate-300 px-3 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1769AA] focus:ring-2 focus:ring-blue-100" placeholder="Tell us how we can help. If you are reporting a fee change, include the fee name, amount shown, and official source URL." />
          <p className="mt-2 text-xs text-slate-500">Please do not include Social Security numbers, tax IDs, passwords, or other sensitive personal information.</p>
        </div>

        <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="contact-website">Leave this field empty</label>
          <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <button type="submit" disabled={status === "sending"} className="inline-flex w-full items-center justify-center rounded-lg bg-[#1769AA] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#12588f] focus:outline-none focus:ring-2 focus:ring-[#1769AA] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
          {status === "sending" ? "Sending..." : "Send message"}
          {status !== "sending" && <span aria-hidden="true" className="ml-2">→</span>}
        </button>

        <p aria-live="polite" role="status" className={"text-sm leading-6 " + (status === "success" ? "text-green-700" : status === "error" ? "text-red-700" : "text-slate-600")}>
          {notice || "Your message will be sent securely to our support inbox. We do not display your message publicly."}
        </p>
      </form>
    </section>
  );
}
