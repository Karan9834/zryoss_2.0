import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Component for loading state
const PageLoader = () => (
  <div className="flex items-center justify-center min-vh-100 py-20">
    <div className="w-10 h-10 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin"></div>
  </div>
);

// Lazy loaded page components
const Home = lazy(() => import("../pages/Home/Home"));
const Apply = lazy(() => import("../pages/Contact/Apply"));
const Contact = lazy(() => import("../pages/Contact/Contact"));

// Platform
const WhatIsZryoss = lazy(() => import("../pages/Platform/WhatIsZryoss"));
const BusinessOperatingSystem = lazy(() => import("../pages/Platform/BusinessOperatingSystem"));
const HowZryossWorks = lazy(() => import("../pages/Platform/HowZryossWorks"));
const ZryossMethodology = lazy(() => import("../pages/Platform/ZryossMethodology"));
const SalesEnablement = lazy(() => import("../pages/Platform/SalesEnablement"));
const OperationsModel = lazy(() => import("../pages/Platform/OperationsModel"));
const Technology = lazy(() => import("../pages/Platform/Technology"));
const BrandLaunch = lazy(() => import("../pages/Platform/BrandLaunch"));

// Ecosystem
const EcosystemOverview = lazy(() => import("../pages/Ecosystem/Overview"));
const OperatingSystem = lazy(() => import("../pages/Ecosystem/OperatingSystem"));
const Vendors = lazy(() => import("../pages/Ecosystem/Vendors"));
const EcosystemAccountManagement = lazy(() => import("../pages/Ecosystem/AccountManagement"));
const Roadmap = lazy(() => import("../pages/Ecosystem/Roadmap"));
const KryossSoftech = lazy(() => import("../pages/Ecosystem/Brands/KryossSoftech"));
const ClinkHR = lazy(() => import("../pages/Ecosystem/Brands/ClinkHR"));
const Vyombiz = lazy(() => import("../pages/Ecosystem/Brands/Vyombiz"));
const Edulinker = lazy(() => import("../pages/Ecosystem/Brands/Edulinker"));
const Medikryoss = lazy(() => import("../pages/Ecosystem/Brands/Medikryoss"));
const Adkryoss = lazy(() => import("../pages/Ecosystem/Brands/Adkryoss"));
const ClinkAdmission = lazy(() => import("../pages/Ecosystem/Brands/ClinkAdmission"));
const KryossInteriors = lazy(() => import("../pages/Ecosystem/Brands/KryossInteriors"));

// Partnership
const PartnershipOverview = lazy(() => import("../pages/Partnership/PartnershipOverview"));
const Philosophy = lazy(() => import("../pages/Partnership/Philosophy"));
const BrandOwnership = lazy(() => import("../pages/Partnership/BrandOwnership"));
const SupportScope = lazy(() => import("../pages/Partnership/SupportScope"));
const Lifecycle = lazy(() => import("../pages/Partnership/Lifecycle"));

// IPP
const IPPOverview = lazy(() => import("../pages/Partnership/IPP/Overview"));
const IPPBrandCreation = lazy(() => import("../pages/Partnership/IPP/BrandCreation"));
const IPPBusinessModel = lazy(() => import("../pages/Partnership/IPP/BusinessModel"));
const IPPOperations = lazy(() => import("../pages/Partnership/IPP/Operations"));
const ClientHandlingDemo = lazy(() => import("../pages/Partnership/IPP/Client&DemoHandling"));
const IPPSubPartner = lazy(() => import("../pages/Partnership/IPP/SubPartner"));
const IPPAccountManagement = lazy(() => import("../pages/Partnership/IPP/AccountManagement"));
const IPPFundingSupport = lazy(() => import("../pages/Partnership/IPP/FundingSupport"));

// IBP
const IBPOverview = lazy(() => import("../pages/Partnership/IBP/Overview"));
const IBPBusinessModel = lazy(() => import("../pages/Partnership/IBP/BusinessModel"));
const IBPSetup = lazy(() => import("../pages/Partnership/IBP/Setup"));
const IBPOperations = lazy(() => import("../pages/Partnership/IBP/Operations"));
const IBPIPPManagement = lazy(() => import("../pages/Partnership/IBP/IPPManagement"));
const IBPPerformanceModel = lazy(() => import("../pages/Partnership/IBP/PerformanceModel"));
const IBPAccountManager = lazy(() => import("../pages/Partnership/IBP/AccountManager"));
const IBPFundingSupport = lazy(() => import("../pages/Partnership/IBP/FundingSupport"));

// Solutions
const SolutionsOverview = lazy(() => import("../pages/Solutions/Overview"));
const ITSoftware = lazy(() => import("../pages/Solutions/ITSoftware"));
const HRRecruitment = lazy(() => import("../pages/Solutions/HRRecruitment"));
const DigitalMarketing = lazy(() => import("../pages/Solutions/DigitalMarketing"));
const BusinessConsulting = lazy(() => import("../pages/Solutions/BusinessConsulting"));
const Healthcare = lazy(() => import("../pages/Solutions/Healthcare"));
const InteriorInfrastructure = lazy(() => import("../pages/Solutions/InteriorInfrastructure"));
const Education = lazy(() => import("../pages/Solutions/Education"));

// Operations
const OperationsOverview = lazy(() => import("../pages/Operations/Overview"));
const Onboarding = lazy(() => import("../pages/Operations/Onboarding"));
const SLAManagement = lazy(() => import("../pages/Operations/SLAManagement"));
const OpsFAQs = lazy(() => import("../pages/Operations/FAQs"));
const QualityAssurance = lazy(() => import("../pages/Operations/QualityAssurance"));
const OpsAccountManagement = lazy(() => import("../pages/Operations/AccountManagement"));
const VendorCoordination = lazy(() => import("../pages/Operations/VendorCoordination"));
const Delivery = lazy(() => import("../pages/Operations/Delivery"));
const Reporting = lazy(() => import("../pages/Operations/Reporting"));

// Resources
const Blog = lazy(() => import("../pages/Resources/Blog"));
const BlogDetail = lazy(() => import("../pages/Resources/BlogDetail"));
const FAQs = lazy(() => import("../pages/Resources/FAQs"));
const KnowledgeHub = lazy(() => import("../pages/Resources/KnowledgeHub"));
const PartnerGuidelines = lazy(() => import("../pages/Resources/PartnerGuidelines"));
const TrainingHub = lazy(() => import("../pages/Resources/TrainingHub"));

// Company
const About = lazy(() => import("../pages/Company/About"));
const CLinkGroup = lazy(() => import("../pages/Company/CLinkGroup"));
const VisionLeadership = lazy(() => import("../pages/Company/VisionLeadership"));
const EthicsGovernance = lazy(() => import("../pages/Company/EthicsGovernance"));
const RiskDisclosure = lazy(() => import("../pages/Company/RiskDisclosure"));
const Disclaimer = lazy(() => import("../pages/Company/Disclaimer"));
const TermsCondition = lazy(() => import("../pages/TermsCondition"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const Compliance = lazy(() => import("../pages/Compliance"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
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

        {/* IBP */}
        <Route path="/partnership/IBP" element={<IBPOverview />} />
        <Route path="/partnership/IBP/business-model" element={<IBPBusinessModel />} />
        <Route path="/partnership/IBP/setup" element={<IBPSetup />} />
        <Route path="/partnership/IBP/operations" element={<IBPOperations />} />
        <Route path="/partnership/IBP/ipp-management" element={<IBPIPPManagement />} />
        <Route path="/partnership/IBP/performance-model" element={<IBPPerformanceModel />} />
        <Route path="/partnership/IBP/account-manager" element={<IBPAccountManager />} />
        <Route path="/partnership/IBP/funding-support" element={<IBPFundingSupport />} />

        {/* Solutions */}
        <Route path="/solutions" element={<SolutionsOverview />} />
        <Route path="/solutions/it-software" element={<ITSoftware />} />
        <Route path="/solutions/hr-recruitment" element={<HRRecruitment />} />
        <Route path="/solutions/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/solutions/business-consulting" element={<BusinessConsulting />} />
        <Route path="/solutions/healthcare" element={<Healthcare />} />
        <Route path="/solutions/real-estate-interior" element={<InteriorInfrastructure />} />
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
        <Route path="/clink-group" element={<CLinkGroup />} />
        <Route path="/company/vision-leadership" element={<VisionLeadership />} />
        <Route path="/company/ethics-governance" element={<EthicsGovernance />} />
        <Route path="/company/risk-disclosure" element={<RiskDisclosure />} />
        <Route path="/company/disclaimer" element={<Disclaimer />} />
        <Route path="/terms" element={<TermsCondition />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/compliance" element={<Compliance />} />
      </Routes>
    </Suspense>
  );
}
