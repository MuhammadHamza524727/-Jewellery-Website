import Reveal from "./ui/Reveal";
import LazyVideo from "./ui/LazyVideo";

/**
 * Full-bleed cinematic video band with a text overlay.
 * Keeps every video-driven section visually consistent.
 */
export default function VideoSection({
  id,
  src,
  poster,
  eyebrow,
  title,
  copy,
  align = "center",
  height = "min-h-[70vh]",
  ariaLabel,
  children,
}) {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : align === "right"
        ? "items-end text-right"
        : "items-center text-center";

  return (
    <section id={id} className={`relative flex scroll-mt-20 ${height} items-center overflow-hidden`}>
      <LazyVideo src={src} poster={poster} overlayClass="media-vignette bg-ink/40" ariaLabel={ariaLabel} />

      <div className={`relative z-10 mx-auto flex w-full max-w-4xl flex-col px-5 py-24 sm:px-8 ${alignment}`}>
        {eyebrow && (
          <Reveal>
            <span className="text-[11px] font-medium uppercase tracking-luxe text-gold">
              {eyebrow}
            </span>
          </Reveal>
        )}
        {title && (
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-mist sm:text-4xl lg:text-6xl text-balance">
              {title}
            </h2>
          </Reveal>
        )}
        {copy && (
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-champagne/85 sm:text-base">
              {copy}
            </p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
