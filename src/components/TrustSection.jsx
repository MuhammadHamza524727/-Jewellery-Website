import Reveal from "./ui/Reveal";

const TRUST_ITEMS = [
  {
    title: "Insured shipping",
    copy: "Tracked, careful delivery on every order — because it matters to you.",
  },
  {
    title: "30-day returns",
    copy: "Wear it, love it — or send it back within 30 days, no questions.",
  },
  {
    title: "Care guide included",
    copy: "Simple, printed care instructions with every piece you order.",
  },
  {
    title: "Real support",
    copy: "Questions answered by people who know the collection, usually within a day.",
  },
];

export default function TrustSection() {
  return (
    <section className="border-y border-white/5 bg-coal/60 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {TRUST_ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="flex gap-4">
              <span aria-hidden="true" className="mt-1.5 h-px w-8 shrink-0 bg-gold" />
              <div>
                <h3 className="font-serif text-lg text-mist">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{item.copy}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
