import ScrollAnimation from "../components/ScrollAnimation";

export const PortfolioPage = () => {
  const projects = [
    {
      title: "TAAT - Web Platform",
      description:
        "Developed NestJS & Next.js app with WhatsApp integration, SEO, and Kommo/Brevo for automation.",
      image: "taat-thumbnail.png",
      link: "https://taat.co.id",
    },
    {
      title: "MSIG Life - Nebula Underwriting",
      description:
        "Managed Java Spring + Vue.js project, REST API, Oracle DB using Toad.",
      image: "msig-thumbnail.png",
      link: "https://msiglife.co.id",
    },
    {
      title: "IDN Financial Trending Saham",
      description:
        "Python app scraping trending stocks & sending Telegram reports.",
      image: "idn-thumbnail.png",
      link: "#",
    },
    {
      title: "Yoshinoya Configurator",
      description:
        "Laravel + Next.js app for product config, Docker deploy on CentOS.",
      image: "yoshinoya-thumbnail.png",
      link: "#",
    },
    {
      title: "Techtalent - AKASIA.ID",
      description:
        "Built CV builder using Laravel, React, and MySQL on CentOS.",
      image: "akasia-thumbnail.png",
      link: "#",
    },
    {
      title: "ALAMI Sharia P2P App",
      description:
        "Mobile app with React Native + Redux, integrated with Hibernate.",
      image: "alami-thumbnail.png",
      link: "#",
    },
    {
      title: "GajiCermat Financing Web & App",
      description: "Improved UX & code with React.js, React Native, and Redux.",
      image: "gajicermat-thumbnail.png",
      link: "https://www.gajicermat.com/",
    },
    {
      title: "Instamoney Integration",
      description:
        "Automated disbursement using Java, Hibernate, Kafka, PostgreSQL.",
      image: "instamoney-thumbnail.png",
      link: "#",
    },
    {
      title: "Weendr",
      description:
        "Built smoke test app using Next.js, Bootstrap, MySQL on CentOS.",
      image: "weendr-thumbnail.png",
      link: "#",
    },
    {
      title: "Marrakesh",
      description:
        "Refined beneficiary flow using Java, Spring Boot, Hibernate.",
      image: "marrakesh-thumbnail.png",
      link: "#",
    },
    {
      title: "AKASIA.ID",
      description:
        "React + Express app with MySQL backend, deployed on CentOS.",
      image: "akasiaid-thumbnail.png",
      link: "#",
    },
  ];

  return (
    <div
      className="w-full min-h-screen bg-[#FFFFFF] dark:bg-dark"
      id="portfolioPage"
    >
      <ScrollAnimation
        animationClass="animate__animated animate__zoomIn"
        className="p-12 lg:p-24 text-center"
      >
        <span className="font-bold underline text-2xl dark:text-white">
          Portfolio
        </span>
        <div className="mt-12 grid lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <a
              href={project.link}
              key={`project_${i}`}
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
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
};
