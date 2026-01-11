import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

const PlaceholderSVG = () => (
  <svg
    className="w-full h-full bg-gray-200 dark:bg-gray-700"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    viewBox="0 0 400 200"
  >
    <rect width="400" height="200" fill="currentColor" opacity="0.1" />
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dy=".3em"
      fontSize="20"
      fill="#999"
    >
      No Image
    </text>
  </svg>
);

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<any | null>(null);

  const projects = [
    {
      title: "TAAT - Web Platform",
      description:
        "Developed NestJS & Next.js web app from scratch with microservice architecture, WhatsApp automation, SEO optimization, and Kommo/Brevo CRM integration. Deployed using Docker on Ubuntu Server.",
      images: ["/taat-thumbnail.png", "/taat-2.png", "/taat-3.png"],
      link: "https://taat.co.id",
      category: "Fullstack",
    },
    {
      title: "MSIG Life - Nebula Underwriting",
      description:
        "Built scalable backend microservices with Java Spring Boot & Quarkus, and improved frontend using Nuxt.js. Integrated REST APIs and optimized Oracle DB with Toad. Deployed via Jenkins CI/CD pipeline.",
      images: ["/msig-thumbnail.png", "/msig-2.png"],
      link: "https://msiglife.co.id",
      category: "Fullstack",
    },
    {
      title: "PT. Akal Karya Indonesia",
      description:
        "Designed and developed multiple projects using Laravel, Nest.js, and Next.js. Collaborated with UI/UX teams, deployed on CentOS via Docker, and implemented SEO optimizations.",
      images: [],
      link: "#",
      category: "Fullstack",
    },
    {
      title: "Yoshinoya Configurator",
      description:
        "Created Laravel + Next.js product configurator for Yoshinoya, containerized via Docker on CentOS with optimized API integration and responsive UI design.",
      images: ["/yoshinoya-thumbnail.png", "/yoshinoya-2.png"],
      link: "#",
      category: "Fullstack",
    },
    {
      title: "GajiCermat Financing Web & App",
      description:
        "Developed internal financing web and mobile app using React.js & React Native with reusable components. Improved UX and integrated multiple REST APIs for real-time sync.",
      images: ["/gajicermat-thumbnail.png"],
      link: "https://www.gajicermat.com/",
      category: "Frontend",
    },
    {
      title: "BPRS Hijra - Core Banking Microservices",
      description:
        "Built and maintained backend microservices using Java Spring Boot and Quarkus with Kafka for asynchronous communication. Integrated with React Native mobile client, optimized performance and scalability.",
      images: [],
      link: "#",
      category: "Backend",
    },
    {
      title: "ALAMI Sharia P2P App",
      description:
        "Developed mobile P2P financing app using React Native and Redux integrated with Java Hibernate backend. Focused on user experience and performance optimization.",
      images: [],
      link: "#",
      category: "Frontend",
    },
    {
      title: "Instamoney Integration",
      description:
        "Automated disbursement process using Java, Hibernate, Kafka, and PostgreSQL for seamless financial transaction processing across systems.",
      images: [],
      link: "#",
      category: "Backend",
    },
    {
      title: "Marrakesh Beneficiary Flow",
      description:
        "Enhanced backend architecture and beneficiary management flow using Java Spring Boot, Quarkus, and Hibernate for optimized database performance.",
      images: [],
      link: "#",
      category: "Backend",
    },
    {
      title: "Techtalent - AKASIA.ID CV Builder",
      description:
        "Built a dynamic CV builder platform using Laravel (Backend) and React (Frontend) with MySQL. Designed for scalable deployment on CentOS with Docker.",
      images: [],
      link: "https://akasia.id",
      category: "Fullstack",
    },
    {
      title: "Weendr - Smoke Test Platform",
      description:
        "Developed smoke test web platform using Next.js, Bootstrap, and MySQL, deployed on CentOS server with Docker for internal testing automation.",
      images: [],
      link: "#",
      category: "Frontend",
    },
  ];

  const categories = ["All", "Frontend", "Backend", "Fullstack"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  /** 🎞️ Animation variants */
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      id="portfolioPage"
      className="w-full min-h-screen bg-[var(--neo-bg)] py-20 lg:px-24 text-center overflow-hidden"
    >
      {/* Header */}
      <motion.h2
        className="font-bold text-4xl text-primary underline mb-8 dark:text-primary"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Portfolio
      </motion.h2>

      {/* Category Filter */}
      <motion.div
        className="flex justify-center flex-wrap gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
              className={`dark:text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat ? "neo-pressed" : "neo-button"
              }`}
            whileHover={{ scale: 1.07 }}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center px-4 lg:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.01 }}
      >
        {filteredProjects.map((project, i) => (
          <motion.div
            key={`proj_${i}`}
            variants={cardVariants as any}
            whileHover={{
              y: -8,
                boxShadow: "10px 10px 20px var(--neo-shadow-dark), -10px -10px 20px var(--neo-shadow-light)",
            }}
            transition={{ type: "spring", stiffness: 120 }}
            onClick={() => setActiveProject(project)}
              className="cursor-pointer group neo-surface rounded-3xl overflow-hidden transition-all duration-300 w-full max-w-[400px]"
          >
            <ProjectCarousel images={project.images} />
            <div className="p-5 text-left">
              <h3 className="text-lg font-bold dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

/* 🌀 Embla Carousel component */
const ProjectCarousel = ({ images }: { images: string[] }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <div className="relative w-full h-[200px] overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {images && images.length > 0
          ? images.map((src, i) => (
              <div
                className="flex-[0_0_100%] w-full h-[200px] relative"
                key={`img_${i}`}
              >
                {src ? (
                  <img
                    src={src}
                    alt={`project_${i}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <PlaceholderSVG />
                )}
              </div>
            ))
          : [<PlaceholderSVG key="placeholder" />]}
      </div>
    </div>
  );
};

/* 🔍 Modal Component */
const ProjectModal = ({
  project,
  onClose,
}: {
  project: any;
  onClose: () => void;
}) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[50] flex justify-center items-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
         className="neo-elevated rounded-2xl max-w-4xl w-full overflow-hidden relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative w-full h-[360px] overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex">
            {project.images && project.images.length > 0
              ? project.images.map((src: string, i: number) => (
                  <div
                    className="flex-[0_0_100%] w-full h-[360px]"
                    key={`modal_img_${i}`}
                  >
                    {src ? (
                      <img
                        src={src}
                        alt={`${project.title}_${i}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <PlaceholderSVG />
                    )}
                  </div>
                ))
              : [<PlaceholderSVG key="modal_placeholder" />]}
          </div>
        </div>

        <div className="p-6 text-left">
          <h3 className="text-2xl font-bold mb-2 text-primary">
            {project.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {project.description}
          </p>
          <div className="flex justify-end">
            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-button px-5 py-2.5 rounded-full text-primary dark:text-white font-medium transition"
              >
                View Project
              </a>
            )}
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-primary transition text-2xl font-bold"
        >
          ×
        </button>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioPage;
