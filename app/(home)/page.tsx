import { HeroSection } from "@/components/layout/HeroSection";
import { InformationSection } from "@/components/layout/InformationSection";
import { RegisterSection } from "@/components/layout/RegisterSection";
import { VenueSection } from "@/components/layout/VenueSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <InformationSection />
      {/* <CommitteeSection /> */}
      <VenueSection />
      <RegisterSection className="" />
    </div>
  );
}
