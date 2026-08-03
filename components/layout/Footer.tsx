import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";
import { Container } from "@/components/ui/Container";
import { InstagramIcon, TikTokIcon, PhoneIcon, MailIcon, MapPinIcon } from "@/components/icons";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-red bg-ink text-cream">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/brand/logo.png"
              alt="Moe'z Famous Cheesesteaks logo"
              width={48}
              height={48}
            />
            <span className="font-display text-lg tracking-wide">MOE&apos;Z FAMOUS CHEESESTEAKS</span>
          </Link>
          <p className="max-w-xs text-sm text-cream/70">{business.description}</p>
          <div className="flex items-center gap-4 pt-1">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Moe'z on Instagram"
              className="text-cream/80 transition-colors hover:text-red"
            >
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a
              href={business.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Moe'z on TikTok"
              className="text-cream/80 transition-colors hover:text-red"
            >
              <TikTokIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-condensed text-sm font-bold uppercase tracking-widest text-red">Navigate</h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-cream/85 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={business.links.order}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-red transition-colors hover:text-red-dark"
              >
                Order Now
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-condensed text-sm font-bold uppercase tracking-widest text-red">Hours</h2>
          <ul className="mt-4 space-y-1.5 text-sm text-cream/85">
            {business.hoursSummary.map((h) => (
              <li key={h.label} className="flex justify-between gap-4">
                <span>{h.label}</span>
                <span>{h.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-condensed text-sm font-bold uppercase tracking-widest text-red">Visit</h2>
          <ul className="mt-4 space-y-3 text-sm text-cream/85">
            <li className="flex items-start gap-2">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-red" />
              <a
                href={business.links.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {business.address.full}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 shrink-0 text-red" />
              <a href={business.phoneHref} className="hover:text-white">
                {business.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="h-4 w-4 shrink-0 text-red" />
              <a href={`mailto:${business.email}`} className="hover:text-white">
                {business.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-cream/10 py-5">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-cream/60 sm:flex-row">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>Ann Arbor, Michigan</p>
        </Container>
      </div>
    </footer>
  );
}
