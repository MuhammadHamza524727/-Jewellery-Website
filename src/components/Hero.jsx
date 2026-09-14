"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import ScrollVideo from "./ui/ScrollVideo";
import LazyVideo from "./ui/LazyVideo";
import { ArrowIcon } from "./ui/Icons";

export default function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);

  // Scrub progress across the pinned scroll span (smoothed with a spring
  // so frame steps feel cinematic rather than mechanical).
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const scrub = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Scroll cue fades once the visitor starts scrubbing; copy gently dims
  // near the end of the scrub for a cinematic hand-off to the next section.
  const cueOpacity = useTransform(scrub, [0, 0.06, 0.14], [1, 1, 0]);
  const copyOpacity = useTransform(scrub, [0, 0.82, 0.97], [1, 1, 0.35]);

  const rise = (delay) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] },
  });

  const background = reduce ? (
    <LazyVideo
      src="/videos/crafting.mp4"
      overlayClass="media-vignette bg-ink/30"
      ariaLabel="An artisan crafting jewellery at the workbench"
    />
  ) : (
    <ScrollVideo
      src="/videos/crafting.mp4"
      progress={scrub}
      overlayClass="media-vignette bg-ink/30"
      ariaLabel="An artisan crafting jewellery at the workbench, advancing as you scroll"
    />
  );

  return (
    // Tall scroll span; the viewport-height stage inside stays pinned
    // while scrolling drives the video forward.
    <section id="top" ref={sectionRef} className="relative h-[280svh]">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        {background}

        {/* Copy */}
        <motion.div
          style={{ opacity: reduce ? 1 : copyOpacity }}
          className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 pb-28 sm:px-8"
        >
          <div className="max-w-3xl">
            <motion.p
              {...rise(0.15)}
              className="text-[11px] font-medium uppercase tracking-luxe text-gold"
            >
              Artificial Jewellery Atelier
            </motion.p>

            <motion.h1
              {...rise(0.3)}
              className="mt-6 font-serif text-5xl leading-[1.05] text-mist sm:text-6xl lg:text-8xl text-balance"
            >
              Elegance,
              <br />
              <span className="gold-sheen">Crafted For You.</span>
            </motion.h1>

            <motion.p {...rise(0.45)} className="mt-7 max-w-xl text-base leading-relaxed text-champagne/85 sm:text-lg">
              Discover refined artificial jewellery designed to make every moment
              feel extraordinary.
            </motion.p>

            <motion.div {...rise(0.6)} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#collection"
                className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-luxe text-ink transition-colors duration-300 hover:bg-gold-light"
              >
                Explore Collection
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#craft"
                className="inline-flex items-center gap-3 border border-champagne/30 px-8 py-4 text-xs font-semibold uppercase tracking-luxe text-champagne transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                Our Craft
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          style={{ opacity: reduce ? undefined : cueOpacity }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <div className="h-14 w-px overflow-hidden bg-champagne/20">
            <motion.div
              className="h-1/2 w-full bg-gold"
              animate={reduce ? {} : { y: [-28, 56] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
