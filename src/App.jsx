import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingActions from "./components/layout/FloatingActions";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <FloatingActions />
      <Navbar />
      <main className="pt-16">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}
