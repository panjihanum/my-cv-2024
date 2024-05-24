import { useState } from "react";
import LottieAnimation from "./LottieAnimation";
import { ICONS } from "../assets";
import { useTheme } from "../context/ThemeContext";

export const DarkLightButton = () => {
  const { toggleTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  return (
    <button
      onClick={() => {
        if (!isPaused) return;
        setIsPaused(false);
        toggleTheme();
        setTimeout(() => {
          setIsPaused(true);
          setIsDark(!isDark);
        }, 1500);
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
