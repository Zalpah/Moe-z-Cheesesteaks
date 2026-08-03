"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { CloseIcon, ZoomIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

const images = [
  { src: "/images/menu/menu-1.jpg", label: "Menu 1: Phillyz & Burgerz" },
  { src: "/images/menu/menu-2.jpg", label: "Menu 2: Slider Comboz, Loaded Friez, Signaturez & Chicken Coop" },
  { src: "/images/menu/menu-3.jpg", label: "Menu 3: Wingz, Tenderz, Sidez & Milkshakes" },
];

export function MenuImageGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpenIndex(null);
    setZoomed(false);
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : Math.min(i + 1, images.length - 1)));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : Math.max(i - 1, 0)));
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, close]);

  return (
    <section className="border-t-2 border-ink/10 bg-cream-dark py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl tracking-wide text-ink sm:text-4xl">View the Original Menu</h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-soft">
          Prefer the full printed menu? Tap any image below to open a large, zoomable view.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative aspect-[3/2] overflow-hidden border-2 border-ink text-left"
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-transparent p-3">
                <span className="inline-flex items-center gap-1.5 font-condensed text-sm font-bold uppercase tracking-wide text-white">
                  <ZoomIcon className="h-4 w-4" /> View Full Size
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[openIndex].label}
          className="fixed inset-0 z-[100] flex flex-col bg-black/95"
        >
          <div className="flex items-center justify-between gap-4 p-4">
            <p className="truncate text-sm text-white/80">{images[openIndex].label}</p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setZoomed((z) => !z)}
                className="inline-flex min-h-11 items-center gap-2 border border-white/30 px-3 py-2 font-condensed text-sm font-bold uppercase tracking-wide text-white hover:bg-white/10"
              >
                <ZoomIcon className="h-4 w-4" />
                {zoomed ? "Zoom Out" : "Zoom In"}
              </button>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={close}
                aria-label="Close menu image viewer"
                className="flex h-11 w-11 items-center justify-center text-white hover:text-red"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="relative flex-1 min-h-0">
            {openIndex > 0 && (
              <button
                type="button"
                onClick={() => {
                  setOpenIndex((i) => (i === null ? i : i - 1));
                  setZoomed(false);
                }}
                aria-label="View previous menu image"
                className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white hover:bg-red sm:left-4"
              >
                <ChevronLeftIcon className="h-7 w-7" />
              </button>
            )}
            {openIndex < images.length - 1 && (
              <button
                type="button"
                onClick={() => {
                  setOpenIndex((i) => (i === null ? i : i + 1));
                  setZoomed(false);
                }}
                aria-label="View next menu image"
                className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white hover:bg-red sm:right-4"
              >
                <ChevronRightIcon className="h-7 w-7" />
              </button>
            )}
            <div className={zoomed ? "h-full overflow-auto" : "flex h-full items-center justify-center overflow-hidden p-4"}>
              <div
                className={
                  zoomed
                    ? "relative mx-auto min-h-[150%] w-[180%] max-w-none sm:w-[150%]"
                    : "relative h-full w-full max-w-4xl"
                }
              >
                <Image
                  src={images[openIndex].src}
                  alt={images[openIndex].label}
                  fill
                  sizes="100vw"
                  className={zoomed ? "object-contain object-top" : "object-contain"}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-4">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => {
                  setOpenIndex(i);
                  setZoomed(false);
                }}
                aria-label={`View ${img.label}`}
                aria-current={openIndex === i}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  openIndex === i ? "bg-red" : "bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
