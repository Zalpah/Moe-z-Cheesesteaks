import type { Metadata } from "next";
import { business } from "@/lib/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MenuBrowser } from "@/components/menu/MenuBrowser";
import { MenuImageGallery } from "@/components/menu/MenuImageGallery";
import { StickyOrderBar } from "@/components/menu/StickyOrderBar";
import { menuLastUpdated } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse Moe'z full menu: Philly cheesesteaks, burgers, sliders, loaded fries, wings, chicken wraps, sides, and milkshakes in Ann Arbor, MI.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <div className="border-b-2 border-ink/10 bg-cream py-12 sm:py-16">
        <Container className="max-w-5xl">
          <p className="font-condensed text-sm font-bold uppercase tracking-[0.2em] text-red">Eat Well</p>
          <h1 className="mt-2 font-display text-5xl tracking-wide text-ink sm:text-6xl">Our Menu</h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Famous Philly cheesesteaks, burgers, wraps, wings, and more — made fresh in Ann Arbor. All of our
            meat is halal-certified.
          </p>
          <p className="mt-2 text-xs italic text-ink-soft/80">
            Prices updated as of {menuLastUpdated} and subject to change.
          </p>
          <div className="mt-6">
            <Button href={business.links.order} external size="lg">
              Order Now
            </Button>
          </div>
        </Container>
      </div>

      <MenuBrowser />
      <MenuImageGallery />

      <Container className="max-w-5xl py-8">
        <p className="text-xs text-ink-soft">
          Prices updated as of {menuLastUpdated}. Prices, descriptions, and availability are subject to change
          without notice. Please confirm current pricing at checkout or by calling{" "}
          <a href={business.phoneHref} className="font-bold text-red">
            {business.phone}
          </a>
          .
        </p>
      </Container>

      <StickyOrderBar />
    </>
  );
}
