import { ICONS } from "../assets";
import LottieAnimation from "../components/LottieAnimation";
import { LottieButton } from "../components/LottieButton";
import ScrollAnimation from "../components/ScrollAnimation";

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
export const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen" id="homePage">
      <div className="h-[72px]" />
      <div className="flex flex-col lg:flex-row grow justify-between lg:p-24 items-center relative">
        <ScrollAnimation
          animationClass="animate__animated animate__backInLeft"
          className="flex flex-col w-full lg:w-auto items-center lg:items-start text-center lg:text-left"
        >
          <span className="text-sm dark:text-white">Hi!, I'm 👋</span>
          <span className="font-bold text-4xl dark:text-white">
            Panji <span className="text-primary dark:text-primary">Hanum</span>
          </span>
          <span className="text-md font-semibold mt-1 dark:text-white">
            A Software Engineer
          </span>
          <div className="flex flex-row gap-3 mt-4">
            {myContacts.map((val, i) => {
              return (
                <LottieButton
                  key={`mycontacts-${val.url}-${i}`}
                  animationData={val.icon}
                  size={40}
                  handleClick={() => {
                    window.open(val.url);
                  }}
                  speed={val.speed}
                />
              );
            })}
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animationClass="animate__animated animate__zoomIn"
          className="w-[75vw] h-[40vh] lg:w-auto lg:h-auto"
        >
          <LottieAnimation
            animationData={ICONS.ANIMATION.ANIM_PERSON_DATA_SEARCH}
            width={"100%"}
            height={"100%"}
            play
          />
        </ScrollAnimation>
        <ScrollAnimation
          animationClass="animate__animated animate__backInRight"
          className="flex flex-col lg:max-w-[25%] text-center lg:text-start mb-24 px-4"
        >
          <span className="font-semibold dark:text-white">
            Are u looking for software engineer ?
          </span>
          <span className="text-sm mt-2 dark:text-white">
            Yes, That's Me !! <br />
            You can review my portfolio, which aligns with your candidate
            selection criteria. I would be delighted to learn new programming
            languages, as I have a passion for learning, including exploring AI
            engineering.
            <br />
          </span>
          <div className="mt-4 flex lg:justify-start justify-center">
            <a
              href="/panji-hanum-cv.pdf"
              download
              className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-b-2 font-medium border-primary text-primary text-white"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-primary transition duration-300 group-hover:text-white ease">
                Download CV
              </span>
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};
