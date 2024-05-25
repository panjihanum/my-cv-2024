import React, { useRef, useEffect, useState } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  animationClass: string;
  className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animationClass,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const { top, bottom } = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const newVisibility = bottom > 0 && top < windowHeight;

      if (newVisibility !== isVisible) {
        console.log("CHECK THIS");
        setIsVisible(newVisibility);
      }
    };

    const debouncedScroll = debounce(handleScroll, 100);

    handleScroll();

    window.addEventListener("scroll", debouncedScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : "opacity-0"}`}
    >
      {children}
    </div>
  );
};

function debounce(func: Function, delay: number) {
  let timer: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export default ScrollAnimation;
