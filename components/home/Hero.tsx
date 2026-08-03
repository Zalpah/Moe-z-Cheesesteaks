import Image from "next/image";
import { business } from "@/lib/business";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative flex h-[62vh] min-h-[420px] items-end overflow-hidden bg-ink sm:h-[78vh] sm:min-h-[560px] lg:h-[88vh]">
      <Image
        src="/images/food/hero-cheesesteak.jpg"
        alt="A spread of Moe'z food: loaded cheese fries, a crispy chicken wrap, a stacked double burger, and an Original Philly cheesesteak"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

      <Container className="relative z-10 pb-10 pt-24 sm:pb-14 lg:pb-20">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="font-display text-5xl leading-[0.95] tracking-wide text-white sm:text-6xl lg:text-8xl">
            FLAVORS
            <br />
            REACHING <span className="text-red">SKY-HIGH</span>
          </h1>
          <p className="mt-5 max-w-lg text-base text-cream/90 sm:mt-6 sm:text-lg">
            {business.shortName}&apos;s famous Philly-inspired cheesesteaks, burgers, wraps, and halal
            comfort food — made fresh daily in Ann Arbor, Michigan.
          </p>
          <div className="mt-7 flex flex-wrap gap-4 sm:mt-9">
            <Button href={business.links.order} external size="lg">
              Order Now
            </Button>
            <Button href="/menu" variant="outline-light" size="lg">
              View Menu
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
