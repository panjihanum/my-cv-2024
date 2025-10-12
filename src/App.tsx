import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Header } from "./components/Header";
import { useTheme } from "./context/ThemeContext";

/* 💤 Lazy Load Pages (with named export compatibility) */
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutMePage = lazy(() => import("./pages/AboutMePage"));
const SkillsPage = lazy(() => import("./pages/SkillsPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
const EducationPage = lazy(() => import("./pages/EducationPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const PageLoader = () => (
  <div className="relative flex flex-col justify-center items-center py-32 overflow-hidden select-none h-screen">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-400/10 blur-3xl animate-pulse" />

    <motion.div
      className="relative w-20 h-20 border-4 border-t-transparent border-primary rounded-full"
      animate={{ rotate: 360 }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{ willChange: "transform" }}
    />

    <motion.span
      className="mt-8 text-lg font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-wide"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2.2, repeat: Infinity }}
    >
      Loading...
    </motion.span>
  </div>
);

function App() {
  const { useDarkTheme } = useTheme();

  return (
    <div className={`${useDarkTheme ? "dark" : ""}`}>
      <div className="flex flex-col dark:bg-dark transition-colors duration-500 min-h-screen">
        {/* Static Header */}
        <Header />

        {/* Lazy Loaded Sections with Fancy Fallback */}
        <Suspense fallback={<PageLoader />}>
          <HomePage />
          <AboutMePage />
          <SkillsPage />
          <PortfolioPage />
          <ExperiencePage />

          <EducationPage />
          <ContactPage />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
