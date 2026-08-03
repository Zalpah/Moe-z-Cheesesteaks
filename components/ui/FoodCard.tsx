import Image from "next/image";
import { business } from "@/lib/business";

export function FoodCard({
  name,
  description,
  price,
  image,
}: {
  name: string;
  description: string;
  price?: string;
  image: string;
}) {
  return (
    <article className="group flex flex-col border-2 border-ink bg-white transition-shadow hover:shadow-[6px_6px_0_var(--color-ink)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b-2 border-ink">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl tracking-wide text-ink">{name}</h3>
          {price && <span className="shrink-0 font-condensed text-lg font-bold text-red">{price}</span>}
        </div>
        <p className="flex-1 text-sm text-ink-soft">{description}</p>
        <a
          href={business.links.order}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex min-h-11 items-center justify-center border-2 border-ink font-condensed text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-white"
        >
          Order Now
        </a>
      </div>
    </article>
  );
}
