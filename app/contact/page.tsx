import type { Metadata } from "next";
import { business } from "@/lib/business";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { ClockIcon, MapPinIcon, PhoneIcon, MailIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Moe'z Famous Cheesesteaks in Ann Arbor, MI — call, email, get directions, or send us a message.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="font-condensed text-sm font-bold uppercase tracking-[0.2em] text-red">Get In Touch</p>
          <h1 className="mt-2 font-display text-5xl tracking-wide text-ink sm:text-6xl">Drop Us a Line</h1>
          <p className="mt-4 text-ink-soft">
            Questions, feedback, or a group order request? Send us a message and we&apos;ll get back to you —
            or reach out directly using the info below.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-8 border-2 border-ink bg-white p-6 sm:p-8">
              <div className="flex gap-3">
                <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-red" />
                <div>
                  <h2 className="font-condensed text-sm font-bold uppercase tracking-wide text-ink">Address</h2>
                  <a
                    href={business.links.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-soft hover:text-red"
                  >
                    {business.address.full}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <ClockIcon className="mt-1 h-5 w-5 shrink-0 text-red" />
                <div>
                  <h2 className="font-condensed text-sm font-bold uppercase tracking-wide text-ink">Hours</h2>
                  <div className="space-y-0.5 text-ink-soft">
                    {business.hoursSummary.map((h) => (
                      <div key={h.label} className="flex gap-2">
                        <span className="font-medium text-ink">{h.label}:</span>
                        <span>{h.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <PhoneIcon className="mt-1 h-5 w-5 shrink-0 text-red" />
                <div>
                  <h2 className="font-condensed text-sm font-bold uppercase tracking-wide text-ink">Phone</h2>
                  <a href={business.phoneHref} className="text-ink-soft hover:text-red">
                    {business.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <MailIcon className="mt-1 h-5 w-5 shrink-0 text-red" />
                <div>
                  <h2 className="font-condensed text-sm font-bold uppercase tracking-wide text-ink">Email</h2>
                  <a href={`mailto:${business.email}`} className="text-ink-soft hover:text-red">
                    {business.email}
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t-2 border-ink/10 pt-6 sm:flex-row">
                <Button href={business.links.directions} external variant="outline" className="flex-1">
                  Directions
                </Button>
                <Button href={business.links.order} external className="flex-1">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
