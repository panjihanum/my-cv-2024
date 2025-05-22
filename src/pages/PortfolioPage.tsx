import { useState } from "react";
import ScrollAnimation from "../components/ScrollAnimation";

export const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "TAAT - Web Platform",
      description:
        "Developed NestJS & Next.js app with WhatsApp integration, SEO, and Kommo/Brevo for automation.",
      image: "taat-thumbnail.png",
      link: "https://taat.co.id",
      category: "Fullstack",
    },
    {
      title: "MSIG Life - Nebula Underwriting",
      description:
        "Managed Java Spring + Vue.js project, REST API, Oracle DB using Toad.",
      image: "msig-thumbnail.png",
      link: "https://msiglife.co.id",
      category: "Fullstack",
    },
    {
      title: "IDN Financial Trending Saham",
      description:
        "Python app scraping trending stocks & sending Telegram reports.",
      image: "no-project.png",
      link: "#",
      category: "Backend",
    },
    {
      title: "Yoshinoya Configurator",
      description:
        "Laravel + Next.js app for product config, Docker deploy on CentOS.",
      image: "yoshinoya-thumbnail.png",
      link: "#",
      category: "Fullstack",
    },
    {
      title: "Techtalent - AKASIA.ID",
      description:
        "Built CV builder using Laravel, React, and MySQL on CentOS.",
      image: "akasia-thumbnail.png",
      link: "#",
      category: "Fullstack",
    },
    {
      title: "ALAMI Sharia P2P App",
      description:
        "Mobile app with React Native + Redux, integrated with Hibernate.",
      image: "alami-thumbnail.png",
      link: "#",
      category: "Frontend",
    },
    {
      title: "GajiCermat Financing Web & App",
      description: "Improved UX & code with React.js, React Native, and Redux.",
      image: "gajicermat-thumbnail.png",
      link: "https://www.gajicermat.com/",
      category: "Frontend",
    },
    {
      title: "Instamoney Integration",
      description:
        "Automated disbursement using Java, Hibernate, Kafka, PostgreSQL.",
      image: "instamoney-thumbnail.png",
      link: "#",
      category: "Backend",
    },
    {
      title: "Weendr",
      description:
        "Built smoke test app using Next.js, Bootstrap, MySQL on CentOS.",
      image: "weendr-thumbnail.png",
      link: "#",
      category: "Frontend",
    },
    {
      title: "Marrakesh",
      description:
        "Refined beneficiary flow using Java, Spring Boot, Hibernate.",
      image: "marrakesh-thumbnail.png",
      link: "#",
      category: "Backend",
    },
    {
      title: "AKASIA.ID",
      description:
        "React + Express app with MySQL backend, deployed on CentOS.",
      image: "akasiaid-thumbnail.png",
      link: "#",
      category: "Fullstack",
    },
  ];

  const categories = ["All", "Frontend", "Backend", "Fullstack"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div
      className="w-full min-h-screen bg-[#FFFFFF] dark:bg-dark p-12 lg:p-24 text-center"
      id="portfolioPage"
    >
      <span className="font-bold underline text-2xl dark:text-white">
        Portfolio
      </span>

      {/* Filter Tabs */}
      <div className="mt-8 flex justify-center flex-wrap gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              selectedCategory === cat
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-white text-black dark:bg-[#2c2c2c] dark:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="mt-12 grid lg:grid-cols-3 gap-10">
        {filteredProjects.map((project, i) => (
          <ScrollAnimation
            key={`project_${i}`}
            animationClass="animate__animated animate__zoomIn"
            className=""
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-[#2c2c2c] shadow-xl rounded-2xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="h-[180px] w-full overflow-hidden">
                <img
                  src={`/${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            </a>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};
