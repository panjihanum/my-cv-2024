import { useState, useEffect } from "react";
import { IMAGES } from "../assets";
import { useTheme } from "../context/ThemeContext";
import useWindowDimensions from "../context/useWindowDimensions";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { DarkLightButton } from "./DarkLightButton";

export const Header: React.FC = () => {
  const { useDarkTheme } = useTheme();
  const { width } = useWindowDimensions();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = (id: string) => {
    const section = document.querySelector(`#${id}`);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuActive(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerNav = [
    { label: "Home", id: "homePage" },
    { label: "About Me", id: "aboutMePage" },
    { label: "Skills", id: "skillsPage" },
    { label: "Portfolio", id: "portfolioPage" },
    { label: "Experience", id: "experiencePage" },
    { label: "Education", id: "educationPage" },
    { label: "Contact", id: "contactPage" },
  ];

  return (
    <motion.header
      className={`fixed w-screen top-0 z-[20] transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-md bg-white/70 dark:bg-darkSecondary/60 shadow-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="flex justify-between items-center h-[72px] px-6 lg:px-20">
        {/* Logo */}
        <button
          onClick={() => navigate("homePage")}
          className="flex items-center gap-2"
        >
          <img
            src={useDarkTheme ? IMAGES.PH_LOGO_TRANSP : IMAGES.PH_LOGO}
            className="w-12 h-12 lg:w-16 lg:h-16 transition-transform hover:scale-110"
          />
        </button>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          <DarkLightButton />

          {width >= 1024 ? (
            <nav className="flex items-center gap-6">
              {headerNav.map((val, i) => (
                <motion.button
                  key={`nav-${i}`}
                  onClick={() => navigate(val.id)}
                  className="text-sm font-medium dark:text-white text-gray-800 relative group tracking-wide"
                  whileHover={{ scale: 1.1 }}
                >
                  {val.label}
                  <motion.span
                    className="absolute left-0 bottom-0 h-[2px] bg-primary rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </nav>
          ) : (
            <>
              <motion.button
                onClick={() => setIsMenuActive(!isMenuActive)}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-primary dark:text-white"
              >
                {isMenuActive ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
              </motion.button>

              <AnimatePresence>
                {isMenuActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute top-[72px] left-0 w-full bg-white/90 dark:bg-darkSecondary backdrop-blur-md shadow-md border-b border-primary/20 flex flex-col items-center z-[19]"
                  >
                    {headerNav.map((val, i) => (
                      <button
                        key={`menu-${i}`}
                        onClick={() => navigate(val.id)}
                        className="py-3 w-full text-sm dark:text-white hover:bg-primary/10 transition-all"
                      >
                        {val.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </motion.header>
  );
};
