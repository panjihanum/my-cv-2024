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
      company: "TAAT",
      role: "Full-stack Developer (Freelance – Remote)",
      duration: "Sep 2024 — Present",
      description:
        "Developed NestJS–Next.js microservices from scratch with Redis caching and queue systems. Integrated WhatsApp messaging, Python scraping, and sales tools (Kommo, Brevo). Deployed Dockerized services on Ubuntu Server and improved performance by 50%. Optimized SEO and system architecture for low latency and scalability.",
      tech: [
        <SiNestjs key="nestjs" />,
        <SiReact key="react" />,
        <SiDocker key="docker" />,
      ],
    },
    {
      company: "Prodia",
      role: "Full-stack Developer (Fulltime – Hybrid)",
      duration: "Oct 2025 — Dec 2025",
      description:
        "Developed scalable Java Spring Boot microservices with MongoDB. Designed and maintained RESTful APIs for production systems. Ensured code quality through unit testing and best practices. Monitored and optimized system performance via AWS CloudWatch. Collaborated in Agile teams (JIRA) and system design sessions.",
      tech: [
        <SiSpringboot key="spring-prodia" />,
        <FaServer key="server-prodia" />,
        <FaCogs key="ci-prodia" />,
      ],
    },
    {
      company: "PT. MSIG Life",
      role: "Full-stack Developer (Fulltime – Remote)",
      duration: "May 2024 — May 2025",
      description:
        "Developed scalable backend microservices using Java Spring Boot and enhanced frontend performance with Nuxt.js. Optimized database queries using Toad (Oracle Database) to improve system efficiency. Integrated REST APIs between Java Spring API and Nuxt.js for seamless communication. Deployed and automated CI/CD pipelines with Jenkins, reducing deployment time.",
      tech: [
        <SiSpringboot key="spring" />,
        <FaServer key="server" />,
        <FaCogs key="ci" />,
      ],
    },
    {
      company: "PT. Akal Karya Indonesia",
      role: "Full-stack Developer (Freelance – Remote)",
      duration: "Dec 2022 — Aug 2025",
      description:
        "Developed reusable backend and frontend components using Laravel, NestJS, Next.js, and React. Collaborated with UI/UX designers to deliver optimal user experiences. Deployed and managed applications on CentOS servers using Docker.",
      tech: [
        <SiNestjs key="nest2" />,
        <FaLaptopCode key="code" />,
        <SiLaravel key="laravel2" />,
      ],
    },
    {
      company: "Gaji Cermat",
      role: "Front-end Developer (Freelance – Remote)",
      duration: "Dec 2022 — Oct 2023",
      description:
        "Developed reusable and maintainable code using React (Web) and React Native (Mobile). Built and integrated RESTful APIs for web and mobile applications. Collaborated with UI/UX and mobile teams on internal finance-related projects.",
      tech: [
        <SiReact key="react-gaji" />,
        <FaLaptopCode key="code-gaji" />,
        <FaServer key="api-gaji" />,
      ],
    },
    {
      company: "PT. BPRS Hijra",
      role: "Software Engineer (Fulltime – Remote)",
      duration: "Jun 2019 — Sep 2023",
      description:
        "Developed backend microservices using Java Spring Boot and Quarkus with Hibernate ORM. Built mobile applications using React Native integrated with Spring-based APIs. Applied clean code principles and best practices to improve application performance. Deployed and managed microservices using Jenkins CI/CD pipelines. Implemented Kafka for asynchronous mail services to improve scalability and low latency.",
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
      className="w-full min-h-screen bg-[var(--neo-bg)] py-20 lg:px-24 text-center overflow-hidden relative"
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
            className={`relative flex flex-col lg:flex-row gap-6 items-start neo-surface transition-all duration-500 p-6 lg:p-8 ${
              i % 2 === 0 ? "lg:translate-x-6" : "lg:-translate-x-6"
            }`}
          >
            {/* Left Icon */}
            <div className="neo-button flex flex-col items-center justify-center text-primary rounded-full w-14 h-14 flex-shrink-0">
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
