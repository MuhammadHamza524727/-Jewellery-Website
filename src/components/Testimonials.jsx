import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { QuoteMark, StarIcon } from "./ui/Icons";

const TESTIMONIALS = [
  {
    quote:
      "The necklace has barely left my neck since it arrived. It catches light beautifully and still looks new after months of daily wear.",
    name: "Meera S.",
    context: "Lumière Pendant Necklace",
  },
  {
    quote:
      "I bought the set for my sister's engagement. She got asked about it all evening — nobody believed the price.",
    name: "Ananya R.",
    context: "Étoile Statement Set",
  },
  {
    quote:
      "Finally jewellery that doesn't irritate my skin. Featherlight, comfortable, and the crystals have not dulled at all.",
    name: "Sofia L.",
    context: "Halo Drop Earrings",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-ivory py-24 text-ink sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading light eyebrow="Kind Words" title="Worn. Loved. Talked about." />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.1}
              className="flex h-full flex-col border border-ink/10 bg-paper p-8 transition-colors duration-500 hover:border-gold/50"
            >
              <QuoteMark className="h-7 w-7 text-gold-deep/70" />
              <div className="mt-5 flex gap-1" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <StarIcon key={s} className="h-3.5 w-3.5 text-gold-deep" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-serif text-lg leading-relaxed text-ink/90">
                “{t.quote}”
              </blockquote>
              <footer className="mt-7 border-t border-ink/10 pt-5">
                <p className="text-sm text-ink">{t.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ink/50">
                  {t.context}
                </p>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
