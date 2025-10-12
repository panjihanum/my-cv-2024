import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";

export const DarkLightButton = () => {
  const { useDarkTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Untuk menghindari flicker di SSR atau hydration
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      onClick={() => toggleTheme()}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 dark:bg-white/10 text-primary dark:text-yellow-300 backdrop-blur-md hover:scale-110 transition-all"
      whileTap={{ scale: 0.9, rotate: 15 }}
      whileHover={{ rotate: -10 }}
    >
      {useDarkTheme ? (
        <motion.div
          key="moon"
          initial={{ opacity: 0, rotate: 180 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: -180 }}
          transition={{ duration: 0.4 }}
        >
          <FaMoon size={18} />
        </motion.div>
      ) : (
        <motion.div
          key="sun"
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 180 }}
          transition={{ duration: 0.4 }}
        >
          <FaSun size={18} />
        </motion.div>
      )}
    </motion.button>
  );
};
