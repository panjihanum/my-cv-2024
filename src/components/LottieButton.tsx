import { useEffect, useState } from "react";
import LottieAnimation from "./LottieAnimation";
import { useTheme } from "../context/ThemeContext";

interface LottieButtonInterface {
  animationData: any;
  size?: string | number;
  loop?: boolean;
  handleClick: () => void;
  key?: string;
  speed?: number;
}

export const LottieButton: React.FC<LottieButtonInterface> = ({
  animationData,
  size,
  handleClick,
  key,
  speed = 1,
}) => {
  const [hover, setHover] = useState(false);

  const { useDarkTheme } = useTheme();

  useEffect(() => {
    setHover(true);
    setTimeout(() => setHover(false), 1000);
  }, [useDarkTheme]);
  return (
    <button
      key={key || ""}
      onClick={() => {
        setHover(false);
        handleClick();
      }}
      onMouseOver={(e) => {
        e.preventDefault();
        setHover(true);
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
        setHover(false);
      }}
    >
      <LottieAnimation
        animationData={animationData}
        width={size}
        height={size}
        autoplay={false}
        play={hover}
        speed={speed}
      />
    </button>
  );
};
