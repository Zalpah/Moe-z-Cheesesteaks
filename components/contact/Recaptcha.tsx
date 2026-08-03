"use client";

import Script from "next/script";
import { useEffect, useId, useRef } from "react";

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement,
        params: { sitekey: string; callback: (token: string) => void; "expired-callback"?: () => void }
      ) => number;
    };
    onRecaptchaApiLoad?: () => void;
  }
}

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export function Recaptcha({ onChange }: { onChange: (token: string | null) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useId();
  const rendered = useRef(false);

  useEffect(() => {
    if (!siteKey) return;

    function tryRender() {
      if (rendered.current) return;
      if (!window.grecaptcha || !containerRef.current) return;
      window.grecaptcha.render(containerRef.current, {
        sitekey: siteKey as string,
        callback: (token: string) => onChange(token),
        "expired-callback": () => onChange(null),
      });
      rendered.current = true;
    }

    window.onRecaptchaApiLoad = tryRender;
    tryRender();
  }, [onChange]);

  if (!siteKey) return null;

  return (
    <div>
      <Script
        src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaApiLoad&render=explicit"
        strategy="afterInteractive"
      />
      <div ref={containerRef} id={`recaptcha-${widgetId}`} />
    </div>
  );
}
