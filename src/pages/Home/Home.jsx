import Hero from "./Hero";
import ProblemSection from "./ProblemSection";
import WhatIsZryoss from "./WhatIsZryoss";
import HowItWorks from "./HowItWorks";
import PartnershipModels from "./PartnershipModels";
import ManagementSection from "./ManagementSection";
// import Brands from "./Brands";
import CoreBrands from "./CoreBrands";
import Solutions from "./Solutions";
import BlogSection from "./BlogSection";
import WhyZryoss from "./WhyZryoss";
import DarkToDirection from "./DarkToDirection";
// import WhatIsNot from "./WhatIsNot";
import HeroCTA from "./HeroCTA";
import HeroContact from "./HeroContact";
// import HeroContact from "./HeroContact"; // Can be used in Footer or kept here if needed, but FinalCTA handles the main call.

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <WhatIsZryoss />
      <HowItWorks />
      <PartnershipModels />
      <ManagementSection />
      {/* <Brands /> */}
      <CoreBrands />
      <Solutions />
      <BlogSection />
      <WhyZryoss />
      {/* <WhatIsNot /> */}
      <DarkToDirection />
      <HeroCTA />
      <HeroContact />
    </>
  );
}
