import Reveal from "./ui/Reveal";
import { DiamondMark } from "./ui/Icons";

const VALUES = [
  {
    title: "Designed by hand",
    copy: "Every piece starts as a sketch and a proportion study — never a template.",
  },
  {
    title: "Small batches",
    copy: "We make fewer pieces, better. When a batch sells through, it's reworked, not rushed.",
  },
  {
    title: "Honest materials",
    copy: "Premium gold-tone alloys, hand-set crystals and skin-safe finishes — clearly described, always.",
  },
  {
    title: "Made to be worn",
    copy: "Lightweight, comfortable, everyday designs. Jewellery should live outside the box.",
  },
];

export default function ValuesSection() {
  return (
    <section id="values" className="relative overflow-hidden border-t border-white/5 py-24 sm:py-32">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 bottom-0 select-none font-serif text-[22vw] leading-none text-white/[0.02] sm:text-[14vw]"
      >
        04
      </span>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="text-[11px] font-medium uppercase tracking-luxe text-gold">
            Our Values
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight text-mist sm:text-4xl text-balance">
            What we hold ourselves to.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.08} className="group bg-ink p-8 transition-colors duration-500 hover:bg-coal">
              <DiamondMark className="h-7 w-7 text-gold" />
              <h3 className="mt-6 font-serif text-xl text-mist">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke">{value.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
