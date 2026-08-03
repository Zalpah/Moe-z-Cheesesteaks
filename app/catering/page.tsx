import type { Metadata } from "next";
import Image from "next/image";
import { business } from "@/lib/business";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ExternalLinkIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Catering",
  description:
    "Cater your next office lunch, meeting, party, or celebration with Moe'z Famous Cheesesteaks. Ordering is handled securely through ezCater.",
  alternates: { canonical: "/catering" },
};

const occasions = [
  "Office lunches & meetings",
  "Birthday & graduation parties",
  "Family celebrations",
  "Sports teams & group outings",
  "Corporate events",
  "Any group meal, big or small",
];

const benefits = [
  {
    title: "Crowd-Pleasing Menu",
    body: "Cheesesteaks, burgers, wraps, and sides that satisfy every appetite at the table.",
  },
  {
    title: "Halal-Certified",
    body: "An authentic, halal-certified experience — great for mixed groups and dietary needs.",
  },
  {
    title: "Simple Online Ordering",
    body: "Order, pay, and schedule delivery securely through ezCater in just a few clicks.",
  },
];

export default function CateringPage() {
  return (
    <>
      <section className="relative flex min-h-[380px] items-end overflow-hidden bg-ink sm:min-h-[460px]">
        <Image
          src="/images/food/bacon-cheese-fries.jpg"
          alt="A tray of Moe'z bacon cheese fries, ready for a catering spread"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
        <Container className="relative z-10 pb-12 pt-24 sm:pb-16">
          <p className="font-condensed text-sm font-bold uppercase tracking-[0.2em] text-red">Catering</p>
          <h1 className="mt-2 max-w-2xl font-display text-5xl leading-[0.95] tracking-wide text-white sm:text-6xl">
            Savor the Moment. Leave the Catering to Us.
          </h1>
          <p className="mt-4 max-w-xl text-cream/90">
            Feeding a crowd? Moe&apos;z brings famous Philly-inspired cheesesteaks, burgers, and sides to your
            next event — ordering is fast, secure, and handled entirely through ezCater.
          </p>
          <div className="mt-7">
            <Button href={business.links.catering} external size="lg">
              Order Catering on ezCater
              <ExternalLinkIcon className="h-5 w-5" />
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl text-center">
          <h2 className="font-display text-3xl tracking-wide text-ink sm:text-4xl">
            How Moe&apos;z Catering Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
            We&apos;ve partnered with <strong>ezCater</strong>, the trusted catering marketplace, to handle
            ordering, payment, and delivery scheduling for every catering request. When you click &ldquo;Order
            Catering on ezCater&rdquo; below, you&apos;ll be taken to our official ezCater storefront in a new
            tab to build your order.
          </p>
        </Container>

        <Container className="mt-12 grid gap-6 sm:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="border-2 border-ink bg-white p-6">
              <h3 className="font-condensed text-lg font-bold uppercase tracking-wide text-ink">{b.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{b.body}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-cream-dark py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-ink">
            <Image
              src="/images/food/original-burger-sliderz.jpg"
              alt="A tray of Moe'z original burger sliders and fries, great for group catering orders"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl tracking-wide text-ink sm:text-4xl">Perfect For Any Occasion</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {occasions.map((o) => (
                <li key={o} className="flex items-start gap-2 border-l-4 border-red pl-3 text-ink-soft">
                  {o}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={business.links.catering} external size="lg">
                Order Catering on ezCater
                <ExternalLinkIcon className="h-5 w-5" />
              </Button>
              <p className="mt-3 text-xs text-ink-soft">
                Opens ezCater.com in a new tab — a secure, external ordering platform.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
