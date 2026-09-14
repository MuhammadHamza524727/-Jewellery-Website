"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Reveal from "./ui/Reveal";
import { DiamondMark } from "./ui/Icons";

export default function EditorialIntro() {
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // Gentle parallax on the accent image; disabled under reduced motion.
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-8%", "8%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      {/* Oversized ghost numeral for editorial rhythm */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-8 select-none font-serif text-[26vw] leading-none text-white/[0.025] sm:text-[18vw]"
      >
        01
      </span>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="text-[11px] font-medium uppercase tracking-luxe text-gold">
              The House
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-serif text-3xl leading-snug text-mist sm:text-4xl lg:text-[2.9rem] text-balance">
              Jewellery that whispers luxury —{" "}
              <span className="gold-sheen">without the weight of excess.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-sm leading-relaxed text-smoke sm:text-base">
              AURELLE is a study in restraint. Each piece in our collection is
              designed the way fine jewellery always has been — proportioned by
              hand, finished to catch light quietly, and made to be worn every
              day, not kept in a box.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-smoke sm:text-base">
              We work with premium gold-tone alloys, hand-set crystals and
              skin-safe finishes, so the sparkle is honest and the comfort is
              real.
            </p>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-10 flex items-center gap-6">
              <a
                href="#collection"
                className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-luxe text-gold"
              >
                View the collection
                <span className="h-px w-10 bg-gold transition-all duration-300 ease-silk group-hover:w-16" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Parallax accent image */}
        <div className="relative lg:col-span-5">
          <Reveal from="left" delay={0.1}>
            <motion.div style={{ y }} className="relative aspect-[4/5] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/necklace.jpg"
                alt="Gold-tone necklace with crystal detailing from the AURELLE collection"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
            </motion.div>
          </Reveal>
          <Reveal delay={0.25} className="relative z-10 -mt-14 ml-6 max-w-[240px] border border-gold/25 bg-ink/90 p-6 backdrop-blur-sm sm:ml-10">
            <DiamondMark className="h-8 w-8 text-gold" />
            <p className="mt-4 font-serif text-lg leading-snug text-mist">
              Designed in small batches. Finished by hand.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
