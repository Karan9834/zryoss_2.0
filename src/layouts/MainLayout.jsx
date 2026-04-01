import { Suspense } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";
import ScrollToTop from "../components/ScrollToTop";
import DustTrail from "../components/animations/DustTrail";

const LoadingFallback = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
    <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-orange-500/30">
      <DustTrail />
      <ScrollToTop />
      <FloatingActions />
      <Navbar />
      <main className="flex-grow pt-16">
        <Suspense fallback={<LoadingFallback />}>
          {children}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
