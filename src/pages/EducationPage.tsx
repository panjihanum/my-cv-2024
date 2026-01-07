import { motion } from "framer-motion";
import { FaGraduationCap, FaBook, FaLaptopCode } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";

export const EducationPage = () => {
  const educations = [
    {
      school: "BINUS University",
      degree: "Bachelor of Information Systems",
      duration: "2020 — 2025",
      description:
        "Focused on enterprise systems, software engineering, and database management. Completed capstone projects involving microservices architecture and fullstack app development with Laravel, NestJS, and React.",
      icon: <FaGraduationCap className="text-primary" size={22} />,
      type: "University",
    },
  ];

  /** 🎬 Animation Variants */
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.25 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="educationPage"
      className="w-full bg-[var(--neo-bg)] py-20 lg:px-24 text-center overflow-hidden"
    >
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-[240px] bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      <motion.h2
        className="font-bold text-4xl text-primary underline mb-12 dark:text-primary"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Education
      </motion.h2>

      <motion.div
        className="relative flex flex-col gap-10 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
      >
        {educations.map((edu, i) => (
          <motion.div
            key={`edu_${i}`}
            variants={cardVariants as any}
            className={`relative flex flex-col lg:flex-row items-start gap-6 neo-surface transition-all duration-500 p-6 lg:p-8 ${
              i % 2 === 0 ? "lg:translate-x-6" : "lg:-translate-x-6"
            }`}
          >
            {/* Icon */}
            <div className="neo-button flex items-center justify-center text-primary rounded-full w-14 h-14 flex-shrink-0">
              {edu.icon}
            </div>

            {/* Content */}
            <div className="text-left w-full">
              <h3 className="text-xl font-bold text-primary mb-1">
                {edu.degree}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {edu.school} • <span className="italic">{edu.duration}</span>
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {edu.description}
              </p>
              <div className="flex gap-3 text-lg text-primary">
                {edu.type === "University" && <FaLaptopCode />}
                {edu.type === "Online Courses" && <SiUdemy />}
                {edu.type === "High School" && <FaBook />}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Vertical Line Accent */}
    </section>
  );
};

export default EducationPage;
