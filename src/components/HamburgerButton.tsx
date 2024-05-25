import { useEffect, useState } from "react";
import LottieAnimation from "./LottieAnimation";
import { ICONS } from "../assets";
import { useTheme } from "../context/ThemeContext";

export const HamburgerButton = ({
  isMenuActive,
  setIsMenuActive,
}: {
  isMenuActive: boolean;
  setIsMenuActive: (val: boolean) => void;
}) => {
  const { useDarkTheme } = useTheme();
  const [isPaused, setIsPaused] = useState(true);
  const [speed, setSpeed] = useState(2);

  const handleToggle = () => {
    setIsMenuActive(!isMenuActive);
    !isMenuActive ? setSpeed(2) : setSpeed(-2);
    setIsPaused(false);
    setTimeout(() => {
      setIsPaused(true);
    }, 800);
  };

  return (
    <button
      onClick={() => {
        if (!isPaused) return;
        handleToggle();
      }}
    >
      <LottieAnimation
        animationData={
          !useDarkTheme
            ? ICONS.ANIMATION.ANIM_DARK_HAMB_BTN
            : ICONS.ANIMATION.ANIM_LIGHT_HAMB_BTN
        }
        width={"24px"}
        height={"24px"}
        speed={speed}
        autoplay={true}
        isPaused={isPaused}
        loop={false}
      />
    </button>
  );
};
