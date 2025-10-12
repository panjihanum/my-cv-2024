/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { FaBriefcase, FaLaptopCode, FaServer, FaCogs } from "react-icons/fa";
import {
  SiNestjs,
  SiLaravel,
  SiSpringboot,
  SiReact,
  SiDocker,
} from "react-icons/si";

export const ExperiencePage = () => {
  const experiences = [
    {
      company: "TAAT (Tech Automation & Analytics Tool)",
      role: "Fullstack Engineer (Freelance)",
      duration: "2024 — Present",
      description:
        "Developed and maintained TAAT web platform using NestJS microservices and Next.js. Integrated WhatsApp automation, Kommo/Brevo CRM, and SEO pipeline. Implemented Dockerized deployment on Ubuntu Server.",
      tech: [
        <SiNestjs key="nestjs" />,
        <SiReact key="react" />,
        <SiDocker key="docker" />,
      ],
    },
    {
      company: "MSIG Life Indonesia",
      role: "Java Developer (Full-time)",
      duration: "2022 — Present",
      description:
        "Built and optimized insurance underwriting system (Nebula) using Java Spring Boot, Quarkus, and Vue/Nuxt.js. Integrated RESTful APIs, Oracle DB, and CI/CD via Jenkins. Improved performance and maintainability.",
      tech: [
        <SiSpringboot key="spring" />,
        <FaServer key="server" />,
        <FaCogs key="ci" />,
      ],
    },
    {
      company: "Yoshinoya Indonesia",
      role: "Software Engineer (Freelance)",
      duration: "2023 — Present",
      description:
        "Built Next.js + Laravel-based configurator app for internal product management. Containerized backend services with Docker, integrated REST API, and automated CentOS deployment.",
      tech: [
        <SiLaravel key="laravel" />,
        <SiReact key="next" />,
        <SiDocker key="docker2" />,
      ],
    },
    {
      company: "Akal Karya Indonesia",
      role: "Fullstack Developer (Freelance)",
      duration: "2022 — 2024",
      description:
        "Contributed to multiple client projects using NestJS, Next.js, and Laravel. Implemented scalable APIs, SEO-optimized landing pages, and automation pipelines for property sites.",
      tech: [
        <SiNestjs key="nest2" />,
        <FaLaptopCode key="code" />,
        <SiLaravel key="laravel2" />,
      ],
    },
    {
      company: "ALAMI Sharia",
      role: "Mobile Developer (Contract)",
      duration: "2021 — 2022",
      description:
        "Developed P2P financing app using React Native and Redux. Integrated backend services built on Hibernate and Spring Boot for scalable financial operations.",
      tech: [
        <SiReact key="rn" />,
        <SiSpringboot key="spring2" />,
        <FaServer key="server2" />,
      ],
    },
  ];

  /** 🎬 Animation Variants */
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="experiencePage"
      className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-dark dark:to-darkSecondary py-20 lg:px-24 text-center overflow-hidden relative"
    >
      <div className="absolute left-1/2  transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      <motion.h2
        className="font-bold text-4xl text-primary underline mb-12 dark:text-primary"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Experience
      </motion.h2>

      <motion.div
        className="relative flex flex-col gap-10 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
      >
        {experiences.map((exp, i) => (
          <motion.div
            key={`exp_${i}`}
            variants={itemVariants as any}
            className={`relative flex flex-col lg:flex-row gap-6 items-start bg-white/80 dark:bg-darkSecondary/70 backdrop-blur-md border border-primary/10 rounded-2xl shadow-lg hover:shadow-primary/20 transition-all duration-500 p-6 lg:p-8 ${
              i % 2 === 0 ? "lg:translate-x-6" : "lg:-translate-x-6"
            }`}
          >
            {/* Left Icon */}
            <div className="flex flex-col items-center justify-center bg-primary/10 text-primary dark:bg-primary/20 rounded-full w-14 h-14 flex-shrink-0 shadow-inner">
              <FaBriefcase size={24} />
            </div>

            {/* Content */}
            <div className="text-left w-full">
              <h3 className="text-xl font-bold text-primary mb-1">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {exp.company} • <span className="italic">{exp.duration}</span>
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>
              <div className="flex gap-3 flex-wrap text-primary text-lg">
                {exp.tech.map((icon, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExperiencePage;
