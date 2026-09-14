"use client";

import { motion, useReducedMotion } from "framer-motion";
import LazyVideo from "./ui/LazyVideo";

const QUALITY_POINTS = [
  {
    title: "Hand-polished finish",
    copy: "Each surface is buffed in stages so light glides instead of glares.",
  },
  {
    title: "Skin-safe plating",
    copy: "Nickel-conscious, hypoallergenic layers that stay comfortable all day.",
  },
  {
    title: "Secure settings",
    copy: "Crystals are set and checked by hand so nothing rattles loose.",
  },
  {
    title: "Inspected twice",
    copy: "Every piece passes two checkpoints — at the bench and before packing.",
  },
];

const STATS = [
  { value: "2×", label: "Quality checkpoints" },
  { value: "18k", label: "Gold-tone plating" },
  { value: "100%", label: "Hand-finished" },
];

export default function PolishingSection() {
  const reduce = useReducedMotion();

  return (
    <section id="quality" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32 lg:py-40">
      {/* Ghost numeral */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 bottom-0 select-none font-serif text-[24vw] leading-none text-white/[0.025] sm:text-[16vw]"
      >
        03
      </span>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Video panel */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] overflow-hidden lg:aspect-auto lg:h-[640px]"
        >
          <LazyVideo
            src="/videos/polishing.mp4"
            overlayClass="media-vignette bg-ink/20"
            ariaLabel="An artisan polishing jewellery components"
          />
        </motion.div>

        {/* Copy + points */}
        <div>
          <span className="text-[11px] font-medium uppercase tracking-luxe text-gold">
            Polish &amp; Quality
          </span>
          <h2 className="mt-5 font-serif text-3xl leading-tight text-mist sm:text-4xl lg:text-5xl text-balance">
            Perfection lives in the final pass.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-smoke sm:text-base">
            A piece isn't finished when it looks done — it's finished when it
            looks effortless. That last hour at the bench is what separates
            jewellery you notice from jewellery you remember.
          </p>

          <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {QUALITY_POINTS.map((point) => (
              <li key={point.title} className="border-t border-white/10 pt-5">
                <h3 className="font-serif text-lg text-mist">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{point.copy}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl text-gold sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-smoke">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
