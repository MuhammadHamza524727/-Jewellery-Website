"use client";

import { useState } from "react";
import Image from "next/image";
import { WishlistIcon, EyeIcon, PlusIcon } from "./ui/Icons";

export default function ProductCard({ product }) {
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  return (
    <article className="group flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-ivory ring-1 ring-ink/5">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-[1200ms] ease-silk group-hover:scale-[1.06]"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute left-4 top-4 bg-paper/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-gold-deep shadow-sm backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => setWished((w) => !w)}
          aria-pressed={wished}
          aria-label={wished ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          className={`absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-paper ${
            wished ? "text-gold-deep" : "text-ink/60"
          }`}
        >
          <WishlistIcon filled={wished} className="h-4 w-4" />
        </button>

        {/* Hover actions (desktop) */}
        <div className="pointer-events-none absolute inset-x-4 bottom-4 flex translate-y-2 items-center gap-2 opacity-0 transition-all duration-500 ease-silk group-hover:translate-y-0 group-hover:opacity-100 max-md:hidden">
          <button
            type="button"
            className="pointer-events-auto flex flex-1 items-center justify-center gap-2 bg-paper/95 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-ink backdrop-blur-sm transition-colors hover:text-gold-deep"
          >
            <EyeIcon className="h-4 w-4" /> View
          </button>
          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Add ${product.name} to bag`}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center bg-ink text-paper transition-colors hover:bg-gold-deep"
          >
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="flex items-start justify-between gap-4 pt-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold-deep">
            {product.category}
          </p>
          <h3 className="mt-1.5 font-serif text-lg leading-snug text-ink">
            {product.name}
          </h3>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-sm text-ink">${product.price}</p>
          {product.compareAt && (
            <p className="text-xs text-ink/40 line-through">${product.compareAt}</p>
          )}
        </div>
      </div>

      {/* Always-visible add action for touch devices */}
      <button
        type="button"
        onClick={handleAdd}
        className="mt-4 w-full border border-ink/15 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:border-gold-deep hover:text-gold-deep md:hidden"
      >
        {added ? "Added ✓" : "Add to Bag"}
      </button>

      <span aria-live="polite" className="sr-only">
        {added ? `${product.name} added to bag` : ""}
      </span>
    </article>
  );
}
