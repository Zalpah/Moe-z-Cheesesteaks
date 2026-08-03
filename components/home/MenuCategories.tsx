import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const categories = [
  { slug: "phillyz", name: "Phillyz", image: "/images/food/original-philly.jpg" },
  { slug: "burgerz", name: "Burgerz", image: "/images/food/philly-burger.jpg" },
  { slug: "chicken-coop", name: "Chicken Coop", image: "/images/food/crispy-chicken-wrap.jpg" },
  { slug: "wingz-tenderz", name: "Wingz & Tenderz", image: "/images/food/traditional-wings.jpg" },
  { slug: "sidez", name: "Sidez", image: "/images/food/waffle-fries.jpg" },
  { slug: "milkshakes", name: "Milkshakes", image: "/images/food/chocolate-milkshake.jpg" },
];

export function MenuCategories() {
  return (
    <section className="bg-ink py-16 sm:py-20">
      <Container>
        <div className="mb-10 flex flex-col gap-2 sm:mb-12">
          <p className="font-condensed text-sm font-bold uppercase tracking-[0.2em] text-red">Explore</p>
          <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">Menu Categories</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/menu#${cat.slug}`}
              className="group relative flex aspect-[4/3] items-end overflow-hidden border-2 border-cream/10"
            >
              <Image
                src={cat.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <span className="relative z-10 p-4 font-display text-xl tracking-wide text-white sm:text-2xl">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
