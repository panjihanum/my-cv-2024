import { useEffect, useState } from "react";
import LottieAnimation from "./LottieAnimation";
import { ICONS } from "../assets";
import { useTheme } from "../context/ThemeContext";

export const DarkLightButton = () => {
  const { toggleTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  const handleChangeTheme = (initial?: boolean) => {
    setIsPaused(false);
    !initial && toggleTheme();
    setTimeout(() => {
      setIsPaused(true);
      setIsDark(!isDark);
    }, 1500);
  };

  useEffect(() => {
    if (
      localStorage.getItem("useDarkTheme") &&
      localStorage.getItem("useDarkTheme") == "0"
    ) {
      handleChangeTheme(true);
    }
  }, []);

  return (
    <button
      onClick={() => {
        if (!isPaused) return;
        handleChangeTheme();
      }}
    >
      <LottieAnimation
        animationData={ICONS.ANIMATION.ANIM_DARK_LIGHT_BTN}
        width={"100%"}
        height={"56px"}
        speed={2}
        autoplay={true}
        isPaused={isPaused}
      />
    </button>
  );
};
