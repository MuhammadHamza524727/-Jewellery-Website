import VideoSection from "./VideoSection";

/** The Craft story — full-bleed video band with editorial copy. */
export default function CraftStory() {
  return (
    <VideoSection
      id="craft"
      src="/videos/crafting.mp4"
      eyebrow="The Craft"
      title="Where every piece begins."
      copy="Before a design earns its place in the collection, it is sketched, prototyped and refined at the bench. Metals are shaped, stones are set and surfaces are worked until the piece feels inevitable — light, balanced, quietly brilliant."
      align="center"
      ariaLabel="An artisan crafting jewellery components at the bench"
    />
  );
}
