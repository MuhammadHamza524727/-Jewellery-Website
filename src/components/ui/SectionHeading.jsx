import Reveal from "./Reveal";

/**
 * Eyebrow + serif heading + optional lede, centered or left-aligned.
 * Pass `light` when the section sits on an ivory/white background.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "center",
  light = false,
  className = "",
}) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span
            className={`text-[11px] font-medium uppercase tracking-luxe ${
              light ? "text-gold-deep" : "text-gold"
            }`}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={`mt-4 font-serif text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl ${
            light ? "text-ink" : "text-mist"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal delay={0.16}>
          <p
            className={`mt-5 max-w-xl text-sm leading-relaxed sm:text-base ${
              light ? "text-ink/60" : "text-smoke"
            }`}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
