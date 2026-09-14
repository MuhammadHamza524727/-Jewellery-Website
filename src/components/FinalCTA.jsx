import Reveal from "./ui/Reveal";
import { ArrowIcon } from "./ui/Icons";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden border-t border-white/5 py-28 sm:py-36">
      {/* Ambient gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="text-[11px] font-medium uppercase tracking-luxe text-gold">
            Begin Your Story
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-mist sm:text-5xl lg:text-6xl text-balance">
            Your next favourite piece is waiting.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-smoke sm:text-base">
            Small batches move quickly. Explore the collection and find the
            piece that feels like it was always yours.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#collection"
              className="group inline-flex items-center gap-3 bg-gold px-9 py-4 text-xs font-semibold uppercase tracking-luxe text-ink transition-colors duration-300 hover:bg-gold-light"
            >
              Explore Collection
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#top"
              className="inline-flex items-center border border-champagne/30 px-9 py-4 text-xs font-semibold uppercase tracking-luxe text-champagne transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              Back to Top
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
