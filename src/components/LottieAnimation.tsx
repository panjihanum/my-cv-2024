import React, { useEffect, useRef } from "react";
import Lottie from "react-lottie";

interface LottieAnimationProps {
  animationData: any;
  width?: string | number;
  height?: string | number;
  loop?: boolean;
  autoplay?: boolean;
  play?: boolean;
  speed?: number;
  isPaused?: boolean;
  isStopped?: boolean;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  width = "100%",
  height = "100%",
  loop = true,
  autoplay = true,
  play,
  speed = 1,
  isPaused = false,
  isStopped = false,
}) => {
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (lottieRef.current) {
      if (play) {
        lottieRef.current.play();
      } else {
        lottieRef.current.stop();
      }
    }
  }, [play]);

  const defaultOptions = {
    loop: loop,
    autoplay: autoplay,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      height={height}
      width={width}
      ref={lottieRef}
      speed={speed}
      isClickToPauseDisabled={true}
      isPaused={isPaused}
      isStopped={isStopped}
    />
  );
};

export default LottieAnimation;
