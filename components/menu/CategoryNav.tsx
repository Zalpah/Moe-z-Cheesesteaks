"use client";

import { useEffect, useState } from "react";
import { menu } from "@/lib/menu";
import { cn } from "@/lib/cn";

export function CategoryNav() {
  const [active, setActive] = useState(menu[0]?.slug);

  useEffect(() => {
    const sections = menu
      .map((c) => document.getElementById(c.slug))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-160px 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Menu categories"
      className="sticky top-[64px] z-30 border-b-2 border-ink/10 bg-cream/95 backdrop-blur sm:top-[76px]"
    >
      <div className="scrollbar-none flex gap-1 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
        {menu.map((category) => (
          <a
            key={category.slug}
            href={`#${category.slug}`}
            className={cn(
              "shrink-0 whitespace-nowrap px-3 py-2 font-condensed text-sm font-bold uppercase tracking-wide transition-colors sm:text-base",
              active === category.slug ? "bg-red text-white" : "text-ink hover:bg-ink/5"
            )}
          >
            {category.shortName}
          </a>
        ))}
      </div>
    </nav>
  );
}
