import { ICONS, IMAGES } from "../assets";
import LottieAnimation from "../components/LottieAnimation";
import ScrollAnimation from "../components/ScrollAnimation";

export const AboutMePage = () => {
  const masteredProgramming = [
    ICONS.ANIMATION.ANIM_JAVA,
    ICONS.ANIMATION.ANIM_JAVASCRIPT,
    ICONS.ANIMATION.ANIM_PHP,
    ICONS.ANIMATION.ANIM_PYTHON,
  ];
  return (
    <div className="w-full bg-[#ededed] dark:bg-[#373737]" id="aboutMePage">
      <div className="flex lg:flex-row justify-between">
        <ScrollAnimation
          animationClass="animate__animated animate__slideInLeft"
          className="hidden w-full h-auto lg:flex flex-col justify-end items-center"
        >
          <img src={IMAGES.PANJI_TRANS} className="w-[720px]" />
        </ScrollAnimation>
        <ScrollAnimation
          animationClass="animate__animated animate__slideInRight"
          className="lg:max-w-[50%]  p-12 lg:p-24"
        >
          <span className="font-bold underline text-2xl dark:text-white">
            About Me
          </span>
          <br />
          <br />
          <div>
            <span className="text-sm dark:text-white">
              Hello, My name is Panji Hanum, u can call me Panji
              <br />I love programming since 2019 that for the first time I
              learn programming in BLK Bekasi and I learn Desktop Programming
              with C#. <br />
              For the next, I learn again about web programming in the test
              Bootcamp of Arkademy (now is PijarCamp) and I dont know I pass
              when I coding web for the first time. and when I bootcamp, I learn
              mobile programming with React Native and Adonis JS as a Backend.
              and it's really amazing. <br />
              And then when I got the job for the first time, u know ? I got
              Java Programming and it was the first time again in to learn Java
              guided by my best senior. And then I got "Rising Star Of the Year"
              because my management suppose I cannot follow the bussiness flow
              with Java because I dont have experience in Java, and in the 6
              months, I got the "Rising Star" that exceeded management
              expectations. <br />
            </span>
            <br />
            <br />
            <span className="font-bold dark:text-white">
              I Love All About Technology!! 💓
            </span>
            <br />
            <br />
            <span className="underline text-sm dark:text-white">
              For now, this is my programming language skill:
            </span>
            <br />
            <div className="flex flex-row gap-4 mt-4">
              {masteredProgramming.map((val, i) => {
                return (
                  <div key={`mastered_programming_${i}`}>
                    <LottieAnimation
                      animationData={val}
                      width={"42px"}
                      height={"42px"}
                      play={true}
                      speed={0.5}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};
