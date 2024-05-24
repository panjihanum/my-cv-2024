import { IMAGES } from "../assets";
import { useTheme } from "../context/ThemeContext";
import { DarkLightButton } from "./DarkLightButton";

interface HeaderInterface {}
export const Header: React.FC<HeaderInterface> = () => {
  const { useDarkTheme } = useTheme();
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
      label: "Contact",
      id: "contactPage",
    },
  ];

  return (
    <div
      className="fixed w-full h-[72px] backdrop-blur-xl bg-white/30 z-[10]"
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
        </div>
      </div>
    </div>
  );
};
