import { motion } from "framer-motion";
import { ICONS, IMAGES } from "../assets";
import LottieAnimation from "../components/LottieAnimation";

const AboutMePage = () => {
  const masteredProgramming = [
    ICONS.ANIMATION.ANIM_JAVA,
    ICONS.ANIMATION.ANIM_JAVASCRIPT,
    ICONS.ANIMATION.ANIM_PHP,
    ICONS.ANIMATION.ANIM_PYTHON,
  ];

  return (
    <section
      id="aboutMePage"
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between overflow-hidden bg-[var(--neo-bg)]"
    >
      {/* Glow Effects */}
      <div className="absolute w-96 h-96 bg-primary/10 blur-3xl rounded-full top-10 left-10 animate-pulse -z-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-400/10 blur-3xl rounded-full bottom-10 right-10 animate-ping -z-10"></div>

      {/* Left: Image / Illustration */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center lg:justify-end items-center w-full lg:w-1/2 p-8"
      >
        <motion.img
          src={IMAGES.PANJI_TRANS}
          alt="Panji Hanum"
          className="w-[70%] max-w-[520px] rounded-2xl neo-elevated hover:scale-105 transition-transform duration-700"
          whileHover={{ scale: 1.05, rotate: 1 }}
        />
      </motion.div>

      {/* Right: Text Content */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col justify-center lg:w-1/2 p-10 lg:p-24 text-gray-800 dark:text-gray-100"
      >
        <motion.h2
          className="text-3xl font-bold mb-4 text-primary relative w-fit"
          whileHover={{ x: 10 }}
        >
          About Me
          <span className="absolute bottom-0 left-0 w-[60%] h-[3px] bg-primary rounded-full"></span>
        </motion.h2>

        <p className="text-sm leading-7 opacity-90">
          Hello! My name is <strong>Panji Hanum</strong>, but you can call me{" "}
          <span className="font-semibold text-primary">Panji</span>. <br />I
          started programming in <strong>2019</strong> at BLK Bekasi where I
          learned Desktop Programming with <strong>C#</strong>. Later, I joined
          the bootcamp at <strong>Arkademy (now PijarCamp)</strong>, learning{" "}
          <strong>React Native</strong> & <strong>AdonisJS</strong> — and that’s
          when I realized how much I love creating tech that solves problems.
          <br />
          <br />
          My first job? It was <strong>Java development</strong> — completely
          new for me. But within 6 months, I achieved the{" "}
          <strong>“Rising Star of the Year”</strong> award for exceeding
          expectations. Since then, my journey has been about growth, curiosity,
          and passion for learning.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <p className="font-bold text-lg mb-2">
            I love all about technology 💻💡
          </p>
          <p className="text-sm mb-4 underline">
            Here are the programming languages I’ve mastered:
          </p>

          {/* Language icons */}
          <div className="flex flex-wrap gap-4">
            {masteredProgramming.map((icon, i) => (
              <motion.div
                key={`lang-${i}`}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2 * i,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="neo-button flex justify-center items-center w-[60px] h-[60px] rounded-xl transition-all"
              >
                <LottieAnimation
                  animationData={icon}
                  width={"42px"}
                  height={"42px"}
                  play={true}
                  speed={0.8}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMePage;
