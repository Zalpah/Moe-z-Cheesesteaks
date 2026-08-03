import Image from "next/image";
import { business } from "@/lib/business";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CateringCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 sm:py-20">
      <Image
        src="/images/food/mushroom-swiss-sliderz.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />
      <Container className="relative z-10">
        <div className="max-w-xl">
          <p className="font-condensed text-sm font-bold uppercase tracking-[0.2em] text-red">Catering</p>
          <h2 className="mt-2 font-display text-4xl leading-tight tracking-wide text-white sm:text-5xl">
            Savor the Moment. Leave the Catering to Us.
          </h2>
          <p className="mt-4 text-cream/85">
            Feeding your office, party, or next big celebration? Let Moe&apos;z bring the Philly flavor —
            order catering through ezCater and we&apos;ll handle the rest.
          </p>
          <div className="mt-7">
            <Button href={business.links.catering} external size="lg">
              Order Catering
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
