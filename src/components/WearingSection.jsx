import VideoSection from "./VideoSection";
import Reveal from "./ui/Reveal";

/** Wearing / style story — full-bleed video band with style CTA. */
export default function WearingSection() {
  return (
    <VideoSection
      id="style"
      src="/videos/wearing.mp4"
      eyebrow="Worn, Not Stored"
      title="Made for the moments you dress up — and the ones you don't."
      copy="From morning coffee to evening light, our pieces are designed to move with you. Layer them, live in them, and let them do what jewellery does best — finish the story you're telling."
      align="center"
      ariaLabel="A woman wearing luxury fashion jewellery"
    >
      <Reveal delay={0.24}>
        <a
          href="#collection"
          className="mt-9 inline-block border border-champagne/40 px-8 py-4 text-xs font-semibold uppercase tracking-luxe text-champagne transition-colors duration-300 hover:border-gold hover:text-gold"
        >
          Find Your Piece
        </a>
      </Reveal>
    </VideoSection>
  );
}
