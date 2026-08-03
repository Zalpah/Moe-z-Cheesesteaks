import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  recaptchaToken?: string | null;
};

function isValidPayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) &&
    typeof b.subject === "string" &&
    b.subject.trim().length > 0 &&
    typeof b.message === "string" &&
    b.message.trim().length > 0
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ error: "Missing or invalid fields." }, { status: 400 });
  }

  const { name, email, phone, subject, message, recaptchaToken } = body;

  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  if (recaptchaSecret) {
    if (!recaptchaToken) {
      return NextResponse.json({ error: "reCAPTCHA verification is required." }, { status: 403 });
    }
    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: recaptchaSecret, response: recaptchaToken }),
    });
    const verifyData = (await verifyRes.json()) as { success: boolean };
    if (!verifyData.success) {
      return NextResponse.json({ error: "reCAPTCHA verification failed." }, { status: 403 });
    }
  }

  const formspreeEndpoint = process.env.CONTACT_FORM_ENDPOINT;
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL;

  // Option 1: Formspree (or any compatible form-relay endpoint)
  if (formspreeEndpoint) {
    const res = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, phone, subject, message }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to deliver message." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  }

  // Option 2: Resend transactional email API
  if (resendApiKey && contactToEmail) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Moe'z Website <onboarding@resend.dev>",
        to: [contactToEmail],
        reply_to: email,
        subject: `[Website Contact] ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\n\n${message}`,
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to deliver message." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  }

  // No backend configured — never pretend the message was sent.
  return NextResponse.json(
    { error: "Contact form is not configured. Set CONTACT_FORM_ENDPOINT or RESEND_API_KEY/CONTACT_TO_EMAIL." },
    { status: 501 }
  );
}
