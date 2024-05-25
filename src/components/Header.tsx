import { useState } from "react";
import { IMAGES } from "../assets";
import { useTheme } from "../context/ThemeContext";
import useWindowDimensions from "../context/useWindowDimensions";
import { DarkLightButton } from "./DarkLightButton";
import { HamburgerButton } from "./HamburgerButton";

interface HeaderInterface {}
export const Header: React.FC<HeaderInterface> = () => {
  const { useDarkTheme } = useTheme();
  const { width } = useWindowDimensions();
  const [isMenuActive, setIsMenuActive] = useState(false);

  const navigate = (id: string) => {
    const section = document.querySelector(`#${id}`);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const headerNav = [
    {
      label: "About Me",
      id: "aboutMePage",
    },
    {
      label: "Portfolio",
      id: "portfolioPage",
    },
    {
      label: "Certificate",
      id: "certificatePage",
    },
    {
      label: "Contact",
      id: "contactPage",
    },
  ];

  return (
    <div className="relative">
      <div
        className="fixed w-screen h-[72px] backdrop-blur-xl bg-white/30 dark:bg-stone-900/10 z-[10]"
        id="header"
      >
        <div className="flex justify-between h-full px-6">
          <div className="flex">
            <button onClick={() => navigate("homePage")}>
              <img
                src={useDarkTheme ? IMAGES.PH_LOGO_TRANSP : IMAGES.PH_LOGO}
                className="w-12 h-12 lg:w-16 lg:h-16"
              />
            </button>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div>
              <DarkLightButton />
            </div>
            {width >= 1024 ? (
              <>
                {headerNav.map((val, i) => (
                  <button
                    key={`header-${val.label}-${i}`}
                    className="p-3 bg-['red'] hover:scale-[1.1] text-xs lg:text-sm dark:text-white"
                    onClick={() => {
                      navigate(val.id);
                    }}
                  >
                    {val.label}
                  </button>
                ))}
              </>
            ) : (
              <div>
                <HamburgerButton
                  isMenuActive={isMenuActive}
                  setIsMenuActive={setIsMenuActive}
                />
                <div
                  className="fixed top-[72px] w-screen left-0 dark:bg-stone-900 bg-white/80 flex flex-col z-[11] border-b-2 transition-all"
                  style={{
                    height: isMenuActive ? "160px" : 0,
                    border: isMenuActive ? 2 : 0,
                    overflow: "hidden",
                  }}
                >
                  {headerNav.map((val, i) => (
                    <button
                      key={`header-${val.label}-${i}`}
                      className="p-3 bg-['red'] text-xs lg:text-sm dark:text-white w-screen"
                      onClick={() => {
                        navigate(val.id);
                      }}
                    >
                      {val.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
