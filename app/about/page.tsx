import type { Metadata } from "next";
import Image from "next/image";
import { business } from "@/lib/business";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "Moe'z Famous Cheesesteaks has brought authentic, halal-certified Philly flavor to Ann Arbor, Michigan since 2020.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="order-2 lg:order-1">
          <Image
            src="/images/brand/logo-large.png"
            alt="Moe'z Famous Cheesesteaks logo"
            width={140}
            height={140}
            className="mb-6"
          />
          <p className="font-condensed text-sm font-bold uppercase tracking-[0.2em] text-red">Our Story</p>
          <h1 className="mt-2 font-display text-5xl tracking-wide text-ink sm:text-6xl">Who We Are</h1>

          <div className="mt-6 space-y-4 text-ink-soft">
            <p>
              In the heart of Michigan, Moe&apos;z Famous Cheesesteaks has been bringing the rich flavors of
              Philly to life since {business.founded}. Our mission is to serve an authentic, halal-certified
              experience through our celebrated cheesesteaks — and a full lineup of comfort food, including
              our beloved burgers, each crafted with the same dedication to quality and tradition.
            </p>
            <p>
              Upholding the promise of <strong>&ldquo;Bringing the taste of Philly to Michigan,&rdquo;</strong>{" "}
              Moe&apos;z is more than a restaurant — it&apos;s a slice of Philadelphia right here in your
              neighborhood, a place to gather and savor moments that are as fulfilling as the food.
            </p>
            <p>Join us at Moe&apos;z, where every visit is an opportunity to enjoy a meal that feels like home.</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/menu" size="lg">
              View Menu
            </Button>
            <Button href={business.links.order} external variant="outline" size="lg">
              Order Now
            </Button>
          </div>
        </div>

        <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
          <div className="relative col-span-2 aspect-[16/10] overflow-hidden border-2 border-ink">
            <Image
              src="/images/food/hero-cheesesteak.jpg"
              alt="A spread of Moe'z signature cheesesteaks, burgers, and sides"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden border-2 border-ink">
            <Image
              src="/images/food/detroit-cheesesteak.jpg"
              alt="Moe'z Detroit Cheesesteak"
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden border-2 border-ink">
            <Image
              src="/images/food/traditional-wings.jpg"
              alt="Moe'z traditional wings"
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
