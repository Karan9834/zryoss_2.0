import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Apply from "../pages/Contact/Apply";

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

// Partnership
import PartnershipOverview from "../pages/Partnership/Overview";
import Philosophy from "../pages/Partnership/Philosophy";
import BrandOwnership from "../pages/Partnership/BrandOwnership";
import SupportScope from "../pages/Partnership/SupportScope";
import Lifecycle from "../pages/Partnership/Lifecycle";

// IPP
import IPPOverview from "../pages/Partnership/IPP/Overview";
import IPPBrandCreation from "../pages/Partnership/IPP/BrandCreation";
import IPPBusinessModel from "../pages/Partnership/IPP/BusinessModel";
import IPPOperations from "../pages/Partnership/IPP/Operations";
import IPPSupport from "../pages/Partnership/IPP/Support";
import IPPSubPartner from "../pages/Partnership/IPP/SubPartner";
import IPPAccountManagement from "../pages/Partnership/IPP/AccountManagement";

// BPP
import BPPOverview from "../pages/Partnership/BPP/Overview";
import BPPBusinessModel from "../pages/Partnership/BPP/BusinessModel";
import BPPSetup from "../pages/Partnership/BPP/Setup";
import BPPOperations from "../pages/Partnership/BPP/Operations";
import BPPIPPManagement from "../pages/Partnership/BPP/IPPManagement";
import BPPRevenueModel from "../pages/Partnership/BPP/RevenueModel";
import BPPAccountManager from "../pages/Partnership/BPP/AccountManager";

// Solutions
import SolutionsOverview from "../pages/Solutions/Overview";
import ITSoftware from "../pages/Solutions/ITSoftware";
import HRRecruitment from "../pages/Solutions/HRRecruitment";
import DigitalMarketing from "../pages/Solutions/DigitalMarketing";
import BusinessConsulting from "../pages/Solutions/BusinessConsulting";
import LegalCompliance from "../pages/Solutions/LegalCompliance";
import RealEstateInterior from "../pages/Solutions/RealEstateInterior";
import CustomIndustry from "../pages/Solutions/CustomIndustry";

// Operations
import OperationsOverview from "../pages/Operations/Overview";
import Onboarding from "../pages/Operations/Onboarding";
import Delivery from "../pages/Operations/Delivery";
import QualityAssurance from "../pages/Operations/QualityAssurance";
import OpsAccountManagement from "../pages/Operations/AccountManagement";
import VendorCoordination from "../pages/Operations/VendorCoordination";
import Reporting from "../pages/Operations/Reporting";

// Resources
import Blog from "../pages/Resources/Blog";
import FAQs from "../pages/Resources/FAQs";

// Company
import About from "../pages/Company/About";
import VisionLeadership from "../pages/Company/VisionLeadership";
import EthicsGovernance from "../pages/Company/EthicsGovernance";
import RiskDisclosure from "../pages/Company/RiskDisclosure";
import Disclaimer from "../pages/Company/Disclaimer";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apply" element={<Apply />} />

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
      <Route path="/partnership/ipp/support" element={<IPPSupport />} />
      <Route path="/partnership/ipp/sub-partner" element={<IPPSubPartner />} />
      <Route path="/partnership/ipp/account-management" element={<IPPAccountManagement />} />

      {/* BPP */}
      <Route path="/partnership/bpp" element={<BPPOverview />} />
      <Route path="/partnership/bpp/business-model" element={<BPPBusinessModel />} />
      <Route path="/partnership/bpp/setup" element={<BPPSetup />} />
      <Route path="/partnership/bpp/operations" element={<BPPOperations />} />
      <Route path="/partnership/bpp/ipp-management" element={<BPPIPPManagement />} />
      <Route path="/partnership/bpp/revenue-model" element={<BPPRevenueModel />} />
      <Route path="/partnership/bpp/account-manager" element={<BPPAccountManager />} />

      {/* Solutions */}
      <Route path="/solutions" element={<SolutionsOverview />} />
      <Route path="/solutions/it-software" element={<ITSoftware />} />
      <Route path="/solutions/hr-recruitment" element={<HRRecruitment />} />
      <Route path="/solutions/digital-marketing" element={<DigitalMarketing />} />
      <Route path="/solutions/business-consulting" element={<BusinessConsulting />} />
      <Route path="/solutions/legal-compliance" element={<LegalCompliance />} />
      <Route path="/solutions/real-estate-interior" element={<RealEstateInterior />} />
      <Route path="/solutions/custom-industry" element={<CustomIndustry />} />

      {/* Operations */}
      <Route path="/operations" element={<OperationsOverview />} />
      <Route path="/operations/onboarding" element={<Onboarding />} />
      <Route path="/operations/delivery" element={<Delivery />} />
      <Route path="/operations/quality-assurance" element={<QualityAssurance />} />
      <Route path="/operations/account-management" element={<OpsAccountManagement />} />
      <Route path="/operations/vendor-coordination" element={<VendorCoordination />} />
      <Route path="/operations/reporting" element={<Reporting />} />

      {/* Resources */}
      <Route path="/resources/blog" element={<Blog />} />
      <Route path="/resources/faqs" element={<FAQs />} />

      {/* Company */}
      <Route path="/company/about" element={<About />} />
      <Route path="/company/vision-leadership" element={<VisionLeadership />} />
      <Route path="/company/ethics-governance" element={<EthicsGovernance />} />
      <Route path="/company/risk-disclosure" element={<RiskDisclosure />} />
      <Route path="/company/disclaimer" element={<Disclaimer />} />

    </Routes>
  );
}

