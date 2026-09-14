import VideoSection from "./VideoSection";

/** The Atelier story — artisan-focused full-bleed video band. */
export default function ArtisanSection() {
  return (
    <VideoSection
      id="atelier"
      src="/videos/artisan.mp4"
      eyebrow="The Atelier"
      title="Assembled by hand, one piece at a time."
      copy="Our artisans link, wrap and set each design by hand — a pace that machines can't imitate and eyes can feel. Small batches, unhurried hands, and a final inspection before anything leaves the bench."
      align="left"
      ariaLabel="An artisan assembling a gold-tone necklace by hand"
    />
  );
}
