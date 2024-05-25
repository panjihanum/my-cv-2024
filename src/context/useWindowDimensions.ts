// useWindowDimensions.ts

import { useState, useEffect, useCallback } from "react";

interface WindowDimensions {
  width: number;
  height: number;
}

const getWindowDimensions = (): WindowDimensions => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] =
    useState<WindowDimensions>(getWindowDimensions);

  const handleResize = useCallback(() => {
    setWindowDimensions(getWindowDimensions());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return windowDimensions;
};

export default useWindowDimensions;
