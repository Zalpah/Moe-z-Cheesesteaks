import { business } from "@/lib/business";
import { Container } from "@/components/ui/Container";

const points = [
  {
    title: "Authentic Philly Flavor",
    body: "Our recipes bring real Philly-style cheesesteak flavor to every sandwich, wrap, and burger we serve.",
  },
  {
    title: "Halal-Certified",
    body: "An authentic, halal-certified experience you can trust, in every bite.",
  },
  {
    title: `Serving Michigan Since ${business.founded}`,
    body: "From our Ann Arbor kitchen to your table — proudly local since day one.",
  },
  {
    title: "Fresh Comfort Food",
    body: "Made-to-order and satisfying, the kind of food that feels like home.",
  },
  {
    title: "Locally Operated",
    body: "Independently owned and operated right here in Ann Arbor, Michigan.",
  },
];

export function WhyMoez() {
  return (
    <section className="bg-cream-dark py-16 sm:py-20">
      <Container>
        <div className="mb-10 flex flex-col gap-2 sm:mb-12">
          <p className="font-condensed text-sm font-bold uppercase tracking-[0.2em] text-red">Our Story</p>
          <h2 className="font-display text-4xl tracking-wide text-ink sm:text-5xl">Why Moe&apos;z</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {points.map((p) => (
            <div key={p.title} className="border-t-4 border-red pt-4">
              <h3 className="font-condensed text-lg font-bold uppercase tracking-wide text-ink">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
