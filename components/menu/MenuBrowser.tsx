"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { menu, getAllMenuItems } from "@/lib/menu";
import { business } from "@/lib/business";
import { SearchIcon, CloseIcon } from "@/components/icons";
import { CategoryNav } from "@/components/menu/CategoryNav";

const VEG_BADGE = (
  <span className="inline-flex items-center gap-1 rounded-full border border-green-700 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-green-800">
    Vegetarian
  </span>
);

function ItemPrice({ price, variants }: { price?: string; variants?: { label: string; price: string }[] }) {
  if (price) return <span className="shrink-0 font-condensed text-lg font-bold text-red">{price}</span>;
  if (variants) {
    return (
      <span className="shrink-0 text-right font-condensed text-sm font-bold text-red">
        {variants.map((v) => (
          <span key={v.label} className="block whitespace-nowrap">
            {v.label} {v.price}
          </span>
        ))}
      </span>
    );
  }
  return null;
}

export function MenuBrowser() {
  const [query, setQuery] = useState("");
  const allItems = useMemo(() => getAllMenuItems(), []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return allItems.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [allItems, query]);

  return (
    <div>
      <div className="border-b-2 border-ink/10 bg-cream px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <label htmlFor="menu-search" className="sr-only">
            Search the menu
          </label>
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40" />
            <input
              id="menu-search"
              type="text"
              inputMode="search"
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the menu…"
              className="min-h-11 w-full border-2 border-ink bg-white py-2.5 pl-10 pr-10 text-base text-ink placeholder:text-ink/40 focus-visible:outline-3"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center text-ink/50 hover:text-ink"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {!results && <CategoryNav />}

      {results ? (
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="mb-6 text-sm text-ink-soft">
            {results.length} result{results.length === 1 ? "" : "s"} for &ldquo;{query}&rdquo;
          </p>
          {results.length === 0 ? (
            <p className="text-ink-soft">
              No menu items matched your search. Try another term, or{" "}
              <a href={business.links.order} target="_blank" rel="noopener noreferrer" className="font-bold text-red">
                order now
              </a>
              .
            </p>
          ) : (
            <ul className="divide-y-2 divide-ink/10 border-2 border-ink/10">
              {results.map((item) => (
                <li key={`${item.categorySlug}-${item.slug}`} className="flex gap-4 p-4">
                  {item.image && (
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden border border-ink/10">
                      <Image src={item.image} alt="" fill sizes="64px" className="object-cover" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-condensed text-lg font-bold uppercase tracking-wide text-ink">
                        {item.name}
                      </h3>
                      <ItemPrice price={item.price} variants={item.variants} />
                    </div>
                    <p className="text-xs uppercase tracking-wide text-red">{item.category}</p>
                    {item.description && <p className="mt-1 text-sm text-ink-soft">{item.description}</p>}
                    {item.vegetarian && <div className="mt-1">{VEG_BADGE}</div>}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          {menu.map((category, i) => (
            <section key={category.slug} id={category.slug} className="scroll-mt-36 border-b-2 border-ink/10 py-10 first:pt-0 last:border-b-0">
              <div className="mb-6">
                <h2 className="font-display text-3xl tracking-wide text-ink sm:text-4xl">{category.name}</h2>
                {category.description && <p className="mt-1 text-sm text-ink-soft">{category.description}</p>}
                {category.note && <p className="mt-1 text-xs italic text-ink-soft/80">{category.note}</p>}
              </div>

              <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {category.items.map((item) => (
                  <li key={item.slug} className="flex gap-4">
                    {item.image && (
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden border-2 border-ink/10 sm:h-24 sm:w-24">
                        <Image src={item.image} alt="" fill sizes="96px" className="object-cover" />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-condensed text-lg font-bold uppercase leading-tight tracking-wide text-ink">
                          {item.name}
                        </h3>
                        <ItemPrice price={item.price} variants={item.variants} />
                      </div>
                      {item.note && <p className="text-xs font-bold uppercase tracking-wide text-red">{item.note}</p>}
                      {item.description && <p className="mt-1 text-sm text-ink-soft">{item.description}</p>}
                      {item.vegetarian && <div className="mt-1">{VEG_BADGE}</div>}
                    </div>
                  </li>
                ))}
              </ul>

              {(i + 1) % 3 === 0 && (
                <div className="mt-8 flex justify-center">
                  <a
                    href={business.links.order}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center bg-red px-8 py-3 font-condensed text-base font-bold uppercase tracking-wide text-white hover:bg-red-dark"
                  >
                    Order Now
                  </a>
                </div>
              )}
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
