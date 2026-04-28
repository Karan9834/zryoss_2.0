import MainLayout from "./layouts/MainLayout";
import AppRoutes from "./routes/AppRoutes";
import { Helmet } from "react-helmet-async";
import AnalyticsTracker from "./components/AnalyticsTracker/AnalyticsTracker";

export default function App() {
  return (
    <>
      <Helmet>
        <title>Zryoss | Ultimate Business Operating System</title>
        <meta name="description" content="Zryoss is the ultimate business operating system for modern enterprises." />
      </Helmet>
      <AnalyticsTracker />
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </>
  );
}
