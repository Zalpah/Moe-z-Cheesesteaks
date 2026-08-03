"use client";

import { useCallback, useState } from "react";
import type { FormEvent } from "react";
import { Recaptcha } from "@/components/contact/Recaptcha";

type Status = "idle" | "loading" | "success" | "error" | "unconfigured";

const recaptchaEnabled = Boolean(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);

const inputClasses =
  "min-h-11 w-full border-2 border-ink bg-white px-3 py-2.5 text-base text-ink placeholder:text-ink/40 focus-visible:outline-3";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const handleRecaptchaChange = useCallback((token: string | null) => setRecaptchaToken(token), []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this hidden field.
    if (data.get("company")) {
      setStatus("success");
      form.reset();
      return;
    }

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !subject || !message) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }
    if (!emailPattern.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (recaptchaEnabled && !recaptchaToken) {
      setStatus("error");
      setErrorMessage("Please complete the reCAPTCHA verification.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: String(data.get("phone") || ""),
          subject,
          message,
          recaptchaToken,
        }),
      });

      if (res.status === 501) {
        setStatus("unconfigured");
        return;
      }
      if (res.status === 403) {
        setStatus("error");
        setErrorMessage("reCAPTCHA verification failed. Please try again.");
        setRecaptchaToken(null);
        return;
      }
      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      form.reset();
      setRecaptchaToken(null);
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong sending your message. Please try again or call us directly.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border-2 border-ink bg-white p-6">
        <h3 className="font-condensed text-lg font-bold uppercase tracking-wide text-ink">Message sent</h3>
        <p className="mt-2 text-sm text-ink-soft">
          Thanks for reaching out — we&apos;ll get back to you as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === "unconfigured" && (
        <div role="alert" className="border-2 border-red bg-red/5 p-4 text-sm text-ink">
          This form isn&apos;t connected to an email service yet, so your message was <strong>not</strong> sent.
          Please call{" "}
          <a href="tel:+17342632144" className="font-bold text-red">
            (734) 263-2144
          </a>{" "}
          or email{" "}
          <a href="mailto:eatmoez@gmail.com" className="font-bold text-red">
            eatmoez@gmail.com
          </a>{" "}
          directly.
        </div>
      )}
      {status === "error" && (
        <div role="alert" className="border-2 border-red bg-red/5 p-4 text-sm text-ink">
          {errorMessage}
        </div>
      )}

      {/* Honeypot field, hidden from sighted users and skipped by most bots */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block font-condensed text-sm font-bold uppercase tracking-wide text-ink">
          Name <span className="text-red">*</span>
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" className={inputClasses} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block font-condensed text-sm font-bold uppercase tracking-wide text-ink">
            Email <span className="text-red">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block font-condensed text-sm font-bold uppercase tracking-wide text-ink">
            Phone <span className="text-ink-soft normal-case">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block font-condensed text-sm font-bold uppercase tracking-wide text-ink">
          Subject <span className="text-red">*</span>
        </label>
        <input id="subject" name="subject" type="text" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block font-condensed text-sm font-bold uppercase tracking-wide text-ink">
          Message <span className="text-red">*</span>
        </label>
        <textarea id="message" name="message" required rows={5} className={inputClasses} />
      </div>

      {recaptchaEnabled && (
        <div>
          <Recaptcha onChange={handleRecaptchaChange} />
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading" || (recaptchaEnabled && !recaptchaToken)}
        className="inline-flex min-h-11 items-center justify-center bg-red px-8 py-3 font-condensed text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
