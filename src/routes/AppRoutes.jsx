import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Apply from "../pages/Contact/Apply";
import Contact from "../pages/Contact/Contact";

// Platform
import WhatIsZryoss from "../pages/Platform/WhatIsZryoss";
import BusinessOperatingSystem from "../pages/Platform/BusinessOperatingSystem";
import HowZryossWorks from "../pages/Platform/HowZryossWorks";
import ZryossMethodology from "../pages/Platform/ZryossMethodology";
import SalesEnablement from "../pages/Platform/SalesEnablement";
import OperationsModel from "../pages/Platform/OperationsModel";
import Technology from "../pages/Platform/Technology";
import BrandLaunch from "../pages/Platform/BrandLaunch";

// Ecosystem
import EcosystemOverview from "../pages/Ecosystem/Overview";
import OperatingSystem from "../pages/Ecosystem/OperatingSystem";
import Vendors from "../pages/Ecosystem/Vendors";
import EcosystemAccountManagement from "../pages/Ecosystem/AccountManagement";
import Roadmap from "../pages/Ecosystem/Roadmap";
import KryossSoftech from "../pages/Ecosystem/Brands/KryossSoftech";
import ClinkHR from "../pages/Ecosystem/Brands/ClinkHR";
import Vyombiz from "../pages/Ecosystem/Brands/Vyombiz";
import Edulinker from "../pages/Ecosystem/Brands/Edulinker";
import Medikryoss from "../pages/Ecosystem/Brands/Medikryoss";
import Adkryoss from "../pages/Ecosystem/Brands/Adkryoss";
import ClinkAdmission from "../pages/Ecosystem/Brands/ClinkAdmission";
import KryossInteriors from "../pages/Ecosystem/Brands/KryossInteriors";

// Partnership
import PartnershipOverview from "../pages/Partnership/PartnershipOverview";
import Philosophy from "../pages/Partnership/Philosophy";
import BrandOwnership from "../pages/Partnership/BrandOwnership";
import SupportScope from "../pages/Partnership/SupportScope";
import Lifecycle from "../pages/Partnership/Lifecycle";

// IPP
import IPPOverview from "../pages/Partnership/IPP/Overview";
import IPPBrandCreation from "../pages/Partnership/IPP/BrandCreation";
import IPPBusinessModel from "../pages/Partnership/IPP/BusinessModel";
import IPPOperations from "../pages/Partnership/IPP/Operations";
import ClientHandlingDemo from "../pages/Partnership/IPP/Client&DemoHandling";
import IPPSubPartner from "../pages/Partnership/IPP/SubPartner";
import IPPAccountManagement from "../pages/Partnership/IPP/AccountManagement";
import IPPFundingSupport from "../pages/Partnership/IPP/FundingSupport";

// BPP
import BPPOverview from "../pages/Partnership/BPP/Overview";
import BPPBusinessModel from "../pages/Partnership/BPP/BusinessModel";
import BPPSetup from "../pages/Partnership/BPP/Setup";
import BPPOperations from "../pages/Partnership/BPP/Operations";
import BPPIPPManagement from "../pages/Partnership/BPP/IPPManagement";
import BPPRevenueModel from "../pages/Partnership/BPP/RevenueModel";
import BPPAccountManager from "../pages/Partnership/BPP/AccountManager";
import BPPFundingSupport from "../pages/Partnership/BPP/FundingSupport";

// Solutions
import SolutionsOverview from "../pages/Solutions/Overview";
import ITSoftware from "../pages/Solutions/ITSoftware";
import HRRecruitment from "../pages/Solutions/HRRecruitment";
import DigitalMarketing from "../pages/Solutions/DigitalMarketing";
import BusinessConsulting from "../pages/Solutions/BusinessConsulting";
import Healthcare from "../pages/Solutions/Healthcare";
import InteriorInfrastructure from "../pages/Solutions/InteriorInfrastructure";
import Education from "../pages/Solutions/Education";

// Operations
import OperationsOverview from "../pages/Operations/Overview";
import Onboarding from "../pages/Operations/Onboarding";
import SLAManagement from "../pages/Operations/SLAManagement";
import OpsFAQs from "../pages/Operations/FAQs";
import QualityAssurance from "../pages/Operations/QualityAssurance";
import OpsAccountManagement from "../pages/Operations/AccountManagement";
import VendorCoordination from "../pages/Operations/VendorCoordination";
import Delivery from "../pages/Operations/Delivery";
import Reporting from "../pages/Operations/Reporting";

// Resources
import Blog from "../pages/Resources/Blog";
import BlogDetail from "../pages/Resources/BlogDetail";
import FAQs from "../pages/Resources/FAQs";
import KnowledgeHub from "../pages/Resources/KnowledgeHub";
import PartnerGuidelines from "../pages/Resources/PartnerGuidelines";
import TrainingHub from "../pages/Resources/TrainingHub";

// Company
import About from "../pages/Company/About";
import VisionLeadership from "../pages/Company/VisionLeadership";
import EthicsGovernance from "../pages/Company/EthicsGovernance";
import RiskDisclosure from "../pages/Company/RiskDisclosure";
import Disclaimer from "../pages/Company/Disclaimer";
import TermsCondition from "../pages/TermsCondition";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Compliance from "../pages/Compliance";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apply" element={<Apply />} />
      <Route path="/contact" element={<Contact />} />

      {/* Platform */}
      <Route path="/platform/what-is-zryoss" element={<WhatIsZryoss />} />
      <Route path="/platform/business-operating-system" element={<BusinessOperatingSystem />} />
      <Route path="/platform/how-zryoss-works" element={<HowZryossWorks />} />
      <Route path="/platform/zryoss-methodology" element={<ZryossMethodology />} />
      <Route path="/platform/sales-enablement" element={<SalesEnablement />} />
      <Route path="/platform/operations-model" element={<OperationsModel />} />
      <Route path="/platform/technology" element={<Technology />} />
      <Route path="/platform/brand-launch" element={<BrandLaunch />} />

      {/* Ecosystem */}
      <Route path="/ecosystem/overview" element={<EcosystemOverview />} />
      <Route path="/ecosystem/operating-system" element={<OperatingSystem />} />
      <Route path="/ecosystem/vendors" element={<Vendors />} />
      <Route path="/ecosystem/account-management" element={<EcosystemAccountManagement />} />
      <Route path="/ecosystem/roadmap" element={<Roadmap />} />

      {/* Ecosystem Brands */}
      <Route path="/ecosystem/brands/kryoss-softech" element={<KryossSoftech />} />
      <Route path="/ecosystem/brands/clink-hr" element={<ClinkHR />} />
      <Route path="/ecosystem/brands/vyombiz" element={<Vyombiz />} />
      <Route path="/ecosystem/brands/edulinker" element={<Edulinker />} />
      <Route path="/ecosystem/brands/medikryoss" element={<Medikryoss />} />
      <Route path="/ecosystem/brands/adkryoss" element={<Adkryoss />} />
      <Route path="/ecosystem/brands/clink-admission" element={<ClinkAdmission />} />
      <Route path="/ecosystem/brands/kryoss-interiors" element={<KryossInteriors />} />

      {/* Partnership */}
      <Route path="/partnership" element={<PartnershipOverview />} />
      <Route path="/partnership/philosophy" element={<Philosophy />} />
      <Route path="/partnership/brand-ownership" element={<BrandOwnership />} />
      <Route path="/partnership/support-scope" element={<SupportScope />} />
      <Route path="/partnership/lifecycle" element={<Lifecycle />} />

      {/* IPP */}
      <Route path="/partnership/ipp" element={<IPPOverview />} />
      <Route path="/partnership/ipp/brand-creation" element={<IPPBrandCreation />} />
      <Route path="/partnership/ipp/business-model" element={<IPPBusinessModel />} />
      <Route path="/partnership/ipp/operations" element={<IPPOperations />} />
      <Route path="/partnership/ipp/support" element={<ClientHandlingDemo />} />
      <Route path="/partnership/ipp/sub-partner" element={<IPPSubPartner />} />
      <Route path="/partnership/ipp/account-management" element={<IPPAccountManagement />} />
      <Route path="/partnership/ipp/funding-support" element={<IPPFundingSupport />} />

      {/* BPP */}
      <Route path="/partnership/bpp" element={<BPPOverview />} />
      <Route path="/partnership/bpp/business-model" element={<BPPBusinessModel />} />
      <Route path="/partnership/bpp/setup" element={<BPPSetup />} />
      <Route path="/partnership/bpp/operations" element={<BPPOperations />} />
      <Route path="/partnership/bpp/ipp-management" element={<BPPIPPManagement />} />
      <Route path="/partnership/bpp/revenue-model" element={<BPPRevenueModel />} />
      <Route path="/partnership/bpp/account-manager" element={<BPPAccountManager />} />
      <Route path="/partnership/bpp/funding-support" element={<BPPFundingSupport />} />

      {/* Solutions */}
      <Route path="/solutions" element={<SolutionsOverview />} />
      <Route path="/solutions/it-software" element={<ITSoftware />} />
      <Route path="/solutions/hr-recruitment" element={<HRRecruitment />} />
      <Route path="/solutions/digital-marketing" element={<DigitalMarketing />} />
      <Route path="/solutions/business-consulting" element={<BusinessConsulting />} />
      <Route path="/solutions/healthcare" element={<Healthcare />} />
      <Route path="/solutions/real-estate-interior" element={<InteriorInfrastructure />} /> {/* Interior Solutions */}
      <Route path="/solutions/education" element={<Education />} />

      {/* Operations */}
      <Route path="/operations" element={<OperationsOverview />} />
      <Route path="/operations/onboarding" element={<Onboarding />} />
      <Route path="/operations/sla-management" element={<SLAManagement />} />
      <Route path="/operations/faqs" element={<OpsFAQs />} />
      <Route path="/operations/quality-assurance" element={<QualityAssurance />} />
      <Route path="/operations/account-management" element={<OpsAccountManagement />} />
      <Route path="/operations/vendor-coordination" element={<VendorCoordination />} />
      <Route path="/operations/delivery" element={<Delivery />} />
      <Route path="/operations/reporting" element={<Reporting />} />

      {/* Resources */}
      <Route path="/resources/blog" element={<Blog />} />
      <Route path="/resources/blog/:id" element={<BlogDetail />} />
      <Route path="/resources/faqs" element={<FAQs />} />
      <Route path="/resources/knowledge-center" element={<KnowledgeHub />} />
      <Route path="/resources/partner-guidelines" element={<PartnerGuidelines />} />
      <Route path="/resources/training" element={<TrainingHub />} />

      {/* Company */}
      <Route path="/company/about" element={<About />} />
      <Route path="/company/vision-leadership" element={<VisionLeadership />} />
      <Route path="/company/ethics-governance" element={<EthicsGovernance />} />
      <Route path="/company/risk-disclosure" element={<RiskDisclosure />} />
      <Route path="/company/disclaimer" element={<Disclaimer />} />
      <Route path="/terms" element={<TermsCondition />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/compliance" element={<Compliance />} />

    </Routes>
  );
}

