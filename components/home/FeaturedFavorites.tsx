import { Container } from "@/components/ui/Container";
import { FoodCard } from "@/components/ui/FoodCard";

const favorites = [
  {
    name: "Moe'z Philly Burger",
    description:
      "Our juicy original burger, combined with our Philly steak recipe — flavors that leave you craving for more.",
    price: "$9.29",
    image: "/images/food/philly-burger.jpg",
  },
  {
    name: "Crispy Chicken Wrap",
    description:
      "You know us for our delicious cheesesteaks, but did you know we make mouthwatering crispy chicken wraps too?",
    price: "$10.99",
    image: "/images/food/crispy-chicken-wrap.jpg",
  },
  {
    name: "Original Philly",
    description:
      "Choice of steak or chicken, sautéed onions, mushrooms, and green peppers, American Swiss cheese, mayo.",
    price: "$11.99",
    image: "/images/food/original-philly.jpg",
  },
];

export function FeaturedFavorites() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mb-10 flex flex-col gap-2 sm:mb-12">
          <p className="font-condensed text-sm font-bold uppercase tracking-[0.2em] text-red">Fan Favorites</p>
          <h2 className="font-display text-4xl tracking-wide text-ink sm:text-5xl">Crowd-Pleasing Classics</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((item) => (
            <FoodCard key={item.name} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
