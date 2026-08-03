"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/business";

export function StickyOrderBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t-2 border-red bg-cream/95 p-3 backdrop-blur transition-transform duration-200 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={business.links.order}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto flex min-h-12 w-full max-w-xs items-center justify-center bg-red font-condensed text-base font-bold uppercase tracking-wide text-white hover:bg-red-dark sm:max-w-sm"
      >
        Order Now
      </a>
    </div>
  );
}
