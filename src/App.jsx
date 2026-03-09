import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingActions from "./components/layout/FloatingActions";
import AppRoutes from "./routes/AppRoutes";
import { Helmet } from "react-helmet-async";

export default function App() {
  return (
    <>
      <Helmet>
        <title>Zryoss</title>
        <meta name="description" content="Zryoss is the ultimate business operating system." />
      </Helmet>

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
