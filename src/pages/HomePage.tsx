import { ICONS } from "../assets";
import LottieAnimation from "../components/LottieAnimation";
import { LottieButton } from "../components/LottieButton";
import { motion } from "framer-motion";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { FaArrowDown } from "react-icons/fa";

const myContacts = [
  {
    icon: ICONS.ANIMATION.ANIM_LINKEDIN,
    url: "https://www.linkedin.com/in/panji-hanum/",
  },
  {
    icon: ICONS.ANIMATION.ANIM_GITHUB,
    url: "https://github.com/panjihanum",
  },
  {
    icon: ICONS.ANIMATION.ANIM_IG,
    url: "https://www.instagram.com/panhanum/",
  },
  {
    icon: ICONS.ANIMATION.ANIM_EMAIL,
    url: "mailto:pan.hanum@gmail.com?subject=Offering%20Opportunity",
    speed: 4,
  },
];

const HomePage = () => {
  return (
    <ParallaxProvider>
      <div
        className="relative flex flex-col min-h-screen overflow-hidden bg-[var(--neo-bg)]"
        id="homePage"
      >
        {/* Floating Glow Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-72 h-72 bg-primary/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
          <div className="absolute w-64 h-64 bg-blue-500/10 blur-2xl rounded-full bottom-10 right-10 animate-ping"></div>
        </div>

        {/* Header Spacer */}
        <div className="h-[72px]" />

        <div className="flex flex-col lg:flex-row grow justify-between lg:p-24 items-center relative gap-10">
          {/* Left Section - Intro */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <span className="text-sm text-gray-500 dark:text-white">
              Hi!, I'm 👋
            </span>
            <motion.span
              className="font-bold text-5xl dark:text-white"
              whileHover={{ scale: 1.03 }}
            >
              Panji{" "}
              <span className="text-primary dark:text-primary">Hanum</span>
            </motion.span>
            <span className="text-md font-semibold mt-1 dark:text-gray-200">
              A Software Engineer
            </span>

            {/* Social Buttons */}
            <div className="flex flex-row gap-3 mt-6">
              {myContacts.map((val, i) => (
                <motion.div
                  key={`mycontacts-${val.url}-${i}`}
                  whileHover={{ scale: 1.15, rotate: 4 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="neo-button rounded-full p-2">
                    <LottieButton
                    animationData={val.icon}
                    size={44}
                    handleClick={() => window.open(val.url)}
                    speed={val.speed}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center Section - Lottie Hero */}
          <Parallax speed={10}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-[75vw] h-[45vh] lg:w-[420px] lg:h-[420px]"
            >
              <LottieAnimation
                animationData={ICONS.ANIMATION.ANIM_PERSON_DATA_SEARCH}
                width={"100%"}
                height={"100%"}
                play
              />
              {/* Decorative glowing ring */}
              <div className="absolute inset-0 rounded-full border-4 border-primary/20 blur-md animate-pulse"></div>
            </motion.div>
          </Parallax>

          {/* Right Section - Text & CTA */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col lg:max-w-[25%] text-center lg:text-start mb-24 px-4"
          >
            <span className="font-semibold dark:text-white text-lg">
              Are you looking for a software engineer?
            </span>
            <span className="text-sm mt-2 dark:text-gray-300">
              Yes, that’s me! 💻 <br />I love exploring new technologies — from
              scalable backend systems to AI-driven engineering. Let’s build
              something great together.
            </span>

            <div className="w-full h-full d-flex flex-row items-center">
              {/* CTA Button */}
              <motion.a
                href="/panji-hanum-cv.pdf"
                download
                whileHover={{ scale: 1.05 }}
                className="neo-button mt-6 inline-flex items-center justify-center px-4 py-2 rounded-xl text-primary dark:text-white gap-2"
              >
                <FaArrowDown className="text-lg" />
                <span>Download CV</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default HomePage;
