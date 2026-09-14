import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EditorialIntro from "@/components/EditorialIntro";
import CraftStory from "@/components/CraftStory";
import ArtisanSection from "@/components/ArtisanSection";
import PolishingSection from "@/components/PolishingSection";
import WearingSection from "@/components/WearingSection";
import Collection from "@/components/Collection";
import ValuesSection from "@/components/ValuesSection";
import TrustSection from "@/components/TrustSection";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

/**
 * Story order: CRAFT → CARE → POLISH → STYLE → TRUST → SHOP
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EditorialIntro />
        <CraftStory />
        <ArtisanSection />
        <PolishingSection />
        <WearingSection />
        <Collection />
        <ValuesSection />
        <TrustSection />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
