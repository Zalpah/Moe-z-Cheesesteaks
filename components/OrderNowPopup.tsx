"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { business } from "@/lib/business";
import { CloseIcon } from "@/components/icons";

const SESSION_KEY = "moez-order-popup-shown";

export function OrderNowPopup() {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    closeBtnRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
      <button
        aria-label="Close popup"
        tabIndex={-1}
        className="absolute inset-0 bg-ink/70"
        onClick={() => setOpen(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Order online from Moe's"
        className="relative w-full max-w-sm border-4 border-red bg-cream shadow-2xl animate-fade-up"
      >
        <button
          ref={closeBtnRef}
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center bg-cream/90 text-ink"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <div className="relative aspect-[16/9] w-full overflow-hidden border-b-4 border-red">
          <Image
            src="/images/food/mushroom-swiss-burger.jpg"
            alt=""
            fill
            sizes="384px"
            className="object-cover"
          />
        </div>

        <div className="p-6 text-center">
          <h2 className="font-display text-3xl tracking-wide text-ink">Hungry Yet?</h2>
          <p className="mt-2 text-sm text-ink-soft">
            Skip the line and order your Moe&apos;z favorites online for pickup or delivery.
          </p>
          <a
            href={business.links.order}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center bg-red px-6 py-3 font-condensed text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-dark"
          >
            Order Now
          </a>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-3 text-xs font-medium text-ink-soft underline underline-offset-2 hover:text-ink"
          >
            No thanks, keep browsing
          </button>
        </div>
      </div>
    </div>
  );
}
