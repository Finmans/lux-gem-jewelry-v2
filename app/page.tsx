import { LuxHeroSection } from "@/components/sections/lux-hero";
import { EntryGateSection } from "@/components/sections/entry-gate";
import { FeaturedCollectionsSection } from "@/components/sections/featured-collections";
import { DiamondStockPreviewSection } from "@/components/sections/diamond-stock-preview";
import { BrandStorySection } from "@/components/sections/brand-story";
import { CustomJourneySection } from "@/components/sections/custom-journey";
import { TrustSection } from "@/components/sections/trust-section";

export default function Home() {
  return (
    <main>
      <LuxHeroSection />
      <EntryGateSection />
      <FeaturedCollectionsSection />
      <DiamondStockPreviewSection />
      <BrandStorySection />
      <CustomJourneySection />
      <TrustSection />
    </main>
  );
}
