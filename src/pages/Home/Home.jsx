import SEO from "../../components/common/SEO";
import { pagesSEO, organizationSchema } from "../../data/seoData";
import Hero from "./Hero";
import ProblemSection from "./ProblemSection";
import WhatIsZryoss from "./WhatIsZryoss";
import PredictableJourneySection from "./PredictableJourneySection";
import HowItWorks from "./HowItWorks";
import PartnershipModels from "./PartnershipModels";
import ManagementSection from "./ManagementSection";
// import Brands from "./Brands";
import CoreBrands from "./CoreBrands";
import ConnectedBrandsSection from "./ConnectedBrandsSection";
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
      <SEO 
        {...pagesSEO.home} 
        structuredData={organizationSchema}
      />
      <Hero />
      <ProblemSection />
      <WhatIsZryoss />
      <PredictableJourneySection />
      <HowItWorks />
      <PartnershipModels />
      <ManagementSection />
      {/* <Brands /> */}
      <CoreBrands />
      <ConnectedBrandsSection />
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
