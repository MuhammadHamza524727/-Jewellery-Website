"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import ProductCard from "./ProductCard";
import SectionHeading from "./ui/SectionHeading";

export default function Collection() {
  const [active, setActive] = useState("All");
  const reduce = useReducedMotion();

  const visible =
    active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <section
      id="collection"
      className="relative scroll-mt-20 bg-paper py-24 text-ink sm:py-32 lg:py-40"
    >
      {/* Gold hairlines framing the ivory band */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          light
          eyebrow="The Collection"
          title="Eight pieces. One quiet kind of luxury."
          lede="Necklaces, earrings, bracelets, rings and sets — designed to layer effortlessly and priced to be worn, not saved for later."
        />

        {/* Category filter */}
        <div className="no-scrollbar mt-12 flex gap-3 overflow-x-auto pb-2 sm:justify-center">
          {CATEGORIES.map((category) => {
            const isActive = category === active;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={isActive}
                className={`shrink-0 border px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300 ease-silk ${
                  isActive
                    ? "border-gold bg-gold text-ink"
                    : "border-ink/20 text-ink/70 hover:border-gold-deep hover:text-gold-deep"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div
          layout={!reduce}
          className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {visible.map((product, index) => (
            <motion.div
              key={product.id}
              layout={!reduce}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: reduce ? 0 : (index % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
