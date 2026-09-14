"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-reveal wrapper. Fades content up (or from a custom direction)
 * the first time it enters the viewport. Respects prefers-reduced-motion.
 *
 * Props:
 * - as: element/component to render (defaults to "div")
 * - from: "up" | "down" | "left" | "right" | "none"
 * - delay: seconds
 * - amount: fraction of element that must be visible (viewport option)
 */
export default function Reveal({
  children,
  as = "div",
  from = "up",
  delay = 0,
  duration = 0.9,
  amount = 0.25,
  className = "",
  ...rest
}) {
  const reduce = useReducedMotion();

  const offsets = {
    up: { y: 36 },
    down: { y: -36 },
    left: { x: 36 },
    right: { x: -36 },
    none: {},
  };
  const offset = offsets[from] ?? offsets.up;

  const variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const Comp = motion[as] ?? motion.div;

  return (
    <Comp
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
