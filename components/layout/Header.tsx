"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { business } from "@/lib/business";
import { cn } from "@/lib/cn";
import { InstagramIcon, TikTokIcon, MenuIcon, CloseIcon } from "@/components/icons";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const toggleRef = useRef<HTMLButtonElement>(null);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b-4 border-red bg-cream/95 backdrop-blur transition-[padding] duration-200",
        scrolled ? "py-1.5" : "py-3"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/images/brand/logo.png"
            alt="Moe'z Famous Cheesesteaks logo"
            width={52}
            height={52}
            priority
            className={cn("shrink-0 transition-all duration-200", scrolled ? "h-10 w-10" : "h-[52px] w-[52px]")}
          />
          <span className="truncate font-display text-lg leading-none tracking-wide text-ink sm:text-xl">
            MOE&apos;Z <span className="text-red">FAMOUS</span> CHEESESTEAKS
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "font-condensed text-lg font-bold uppercase tracking-wide transition-colors",
                  active ? "text-red" : "text-ink hover:text-red"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={business.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Moe'z on Instagram"
            className="text-ink transition-colors hover:text-red"
          >
            <InstagramIcon className="h-6 w-6" />
          </a>
          <a
            href={business.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Moe'z on TikTok"
            className="text-ink transition-colors hover:text-red"
          >
            <TikTokIcon className="h-6 w-6" />
          </a>
          <a
            href={business.links.order}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center bg-red px-6 py-3 font-condensed text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-dark"
          >
            Order Now
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={business.links.order}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center bg-red px-4 py-2.5 font-condensed text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-dark"
          >
            Order
          </a>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 shrink-0 items-center justify-center text-ink"
          >
            {/* Icon intentionally stays the hamburger — the open panel has its own close (X) button, so this button doesn't also swap to an X. */}
            <MenuIcon className="h-7 w-7" />
          </button>
        </div>
      </div>

      <MobileNav open={open} onClose={() => setOpen(false)} pathname={pathname} toggleRef={toggleRef} />
    </header>
  );
}

function MobileNav({
  open,
  onClose,
  pathname,
  toggleRef,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
  toggleRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    // Lock the body by pinning it in place (rather than just
    // overflow:hidden) — this avoids a common iOS Safari bug where
    // fixed-position overlays get stuck mid-repaint over stale
    // background content when the underlying page can still scroll.
    const scrollY = window.scrollY;
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    focusable?.[0]?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";
      window.scrollTo(0, scrollY);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, toggleRef]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[200] lg:hidden">
      <button
        aria-label="Close menu overlay"
        tabIndex={-1}
        className="absolute inset-0 bg-ink/60"
        onClick={onClose}
      />
      <div
        id="mobile-nav"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col gap-1 overflow-y-auto border-l-4 border-red bg-cream px-6 pb-8 pt-6 shadow-2xl animate-fade-up"
      >
        <button
          type="button"
          onClick={() => {
            onClose();
            toggleRef.current?.focus();
          }}
          aria-label="Close menu"
          className="mb-6 flex h-11 w-11 shrink-0 items-center justify-center self-end border-2 border-ink/15 text-ink"
        >
          <CloseIcon className="h-6 w-6" />
        </button>

        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "border-b border-ink/10 py-4 font-display text-3xl tracking-wide",
                active ? "text-red" : "text-ink"
              )}
            >
              {link.label}
            </Link>
          );
        })}

        <a
          href={business.links.order}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-11 items-center justify-center bg-red px-6 py-4 text-center font-condensed text-lg font-bold uppercase tracking-wide text-white"
        >
          Order Now
        </a>

        <div className="mt-8 flex items-center gap-5">
          <a
            href={business.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Moe'z on Instagram"
            className="text-ink"
          >
            <InstagramIcon className="h-7 w-7" />
          </a>
          <a
            href={business.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Moe'z on TikTok"
            className="text-ink"
          >
            <TikTokIcon className="h-7 w-7" />
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}
