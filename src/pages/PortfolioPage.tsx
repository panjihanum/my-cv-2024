import ScrollAnimation from "../components/ScrollAnimation";

export const PortfolioPage = () => {
  const projects = [
    {
      title: "TAAT Platform",
      description:
        "Built from scratch using NestJS & Next.js with microservice architecture. Includes WhatsApp integration, SEO, Redis, Docker, and server config.",
      image: "taat-thumbnail.png",
      link: "https://taat.co.id",
    },
    {
      title: "MSIG Life Nebula",
      description:
        "Developed backend with Java Spring Boot, frontend with Nuxt.js, and CI/CD with Jenkins. Optimized Oracle DB queries.",
      image: "msig-thumbnail.png",
      link: "https://msiglife.co.id",
    },
    {
      title: "GajiCermat App",
      description:
        "Built financial tools using React & React Native. Integrated REST APIs and worked closely with UI/UX teams.",
      image: "gajicermat-thumbnail.png",
      link: "https://www.gajicermat.com/",
    },
  ];

  return (
    <div
      className="w-full min-h-screen bg-[#FFFFFF] dark:bg-dark"
      id="portfolioPage"
    >
      <ScrollAnimation
        animationClass="animate__animated animate__fadeInUp"
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
