import { motion } from "framer-motion";
import { FaReact, FaJava, FaLaravel, FaDocker, FaPython } from "react-icons/fa";
import {
  SiNestjs,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiJenkins,
  SiPostgresql,
  SiMysql,
  SiOracle,
  SiMongodb,
  SiRedis,
  SiNginx,
  SiLinux,
  SiHeroku,
  SiDotnet,
  SiApachekafka,
} from "react-icons/si";

const SkillsPage = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        {
          name: "React.js",
          icon: <FaReact size={36} className="text-sky-500" />,
        },
        { name: "Next.js", icon: <SiNextdotjs size={36} /> },
        {
          name: "Vue.js",
          icon: <SiVuedotjs size={36} className="text-green-500" />,
        },
        {
          name: "Nuxt.js",
          icon: <SiNuxtdotjs size={36} className="text-emerald-500" />,
        },
        {
          name: "React Native",
          icon: <FaReact size={36} className="text-indigo-400" />,
        },
        {
          name: "ASP.NET",
          icon: <SiDotnet size={36} className="text-blue-700" />,
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "Java Spring Boot",
          icon: <FaJava size={36} className="text-red-500" />,
        },
        {
          name: "Nest.js",
          icon: <SiNestjs size={36} className="text-rose-600" />,
        },
        {
          name: "Laravel",
          icon: <FaLaravel size={36} className="text-red-600" />,
        },
        { name: "Express.js", icon: <SiNextdotjs size={36} /> },
        {
          name: "ASP.NET Core",
          icon: <SiDotnet size={36} className="text-blue-600" />,
        },
        {
          name: "Quarkus",
          icon: <FaJava size={36} className="text-orange-500" />,
        },
      ],
    },
    {
      category: "DevOps / Server",
      items: [
        {
          name: "Docker",
          icon: <FaDocker size={36} className="text-sky-600" />,
        },
        {
          name: "Ubuntu / CentOS",
          icon: (
            <SiLinux size={36} className="text-gray-700 dark:text-gray-300" />
          ),
        },
        {
          name: "Jenkins",
          icon: <SiJenkins size={36} className="text-orange-500" />,
        },
        {
          name: "Nginx",
          icon: <SiNginx size={36} className="text-green-600" />,
        },
        {
          name: "Heroku",
          icon: <SiHeroku size={36} className="text-purple-500" />,
        },
      ],
    },
    {
      category: "Database",
      items: [
        {
          name: "PostgreSQL",
          icon: <SiPostgresql size={36} className="text-blue-600" />,
        },
        { name: "MySQL", icon: <SiMysql size={36} className="text-sky-500" /> },
        {
          name: "Oracle",
          icon: <SiOracle size={36} className="text-red-500" />,
        },
        {
          name: "NoSQL (MongoDB)",
          icon: <SiMongodb size={36} className="text-green-500" />,
        },
      ],
    },
    {
      category: "Other Tools & Concepts",
      items: [
        { name: "Redis", icon: <SiRedis size={36} className="text-red-600" /> },
        {
          name: "Kafka",
          icon: <SiApachekafka size={36} className="text-yellow-500" />,
        },
        {
          name: "Microservices",
          icon: <FaPython size={36} className="text-indigo-500" />,
        },
        { name: "REST API", icon: <SiNextdotjs size={36} /> },
        { name: "SEO", icon: <FaReact size={36} className="text-sky-400" /> },
      ],
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skillsPage"
      className="relative w-full min-h-screen bg-[var(--neo-bg)] py-20 lg:px-24 text-center overflow-hidden"
    >
      {/* glowing background */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-500/10 blur-3xl rounded-full -z-10 animate-ping"></div>

      <motion.h2
        className="font-bold text-4xl text-primary underline mb-16 dark:text-primary"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills & Technologies
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((group, i) => (
          <motion.div
            key={`group-${i}`}
            variants={cardAnim as any}
            whileHover={{
              scale: 1.04,
              rotateX: 2,
              rotateY: -2,
              boxShadow:
                "10px 10px 20px var(--neo-shadow-dark), -10px -10px 20px var(--neo-shadow-light)",
            }}
            transition={{ type: "tween" }}
            className="w-full max-w-[360px] neo-surface p-6 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-primary mb-5">
              {group.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {group.items.map((skill, j) => (
                <motion.div
                  key={`skill-${i}-${j}`}
                  whileHover={{ scale: 1.08, rotate: 2 }}
                  className="neo-button flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300"
                >
                  {skill.icon}
                  <p className="text-xs mt-2 dark:text-gray-200">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsPage;
