import React from "react";

// Sections
import TechHeroSection from "../../components/system/technology/TechHeroSection";
import TechWhyMattersSection from "../../components/system/technology/TechWhyMattersSection";
import TechIncludesSection from "../../components/system/technology/TechIncludesSection";
import TechAutomationSection from "../../components/system/technology/TechAutomationSection";
import TechVisibilitySection from "../../components/system/technology/TechVisibilitySection";
import TechInfrastructureSection from "../../components/system/technology/TechInfrastructureSection";
import TechIntegrationSection from "../../components/system/technology/TechIntegrationSection";
import TechGrowthSection from "../../components/system/technology/TechGrowthSection";
import TechFinalCTASection from "../../components/system/technology/TechFinalCTASection";

export default function Technology() {
    return (
        <>
            <TechHeroSection />
            <TechWhyMattersSection />
            <TechIncludesSection />
            <TechAutomationSection />
            <TechVisibilitySection />
            <TechInfrastructureSection />
            <TechIntegrationSection />
            <TechGrowthSection />
            <TechFinalCTASection />
        </>
    );
}
