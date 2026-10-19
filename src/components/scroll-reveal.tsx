import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fade-in" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "zoom-in";
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  className?: string;
  threshold?: number; // 0 to 1
  once?: boolean;
}

export function ScrollReveal({
  children,
  animation = "slide-up",
  delay = 0,
  duration = 600,
  className = "",
  threshold = 0.08,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        // Trigger a bit before the element is fully in view for smoother feel
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  // Initial hidden styling mapping
  const getInitialStyles = () => {
    switch (animation) {
      case "fade-in":
        return "opacity-0";
      case "slide-up":
        return "opacity-0 translate-y-12";
      case "slide-down":
        return "opacity-0 -translate-y-12";
      case "slide-left":
        return "opacity-0 translate-x-12";
      case "slide-right":
        return "opacity-0 -translate-x-12";
      case "zoom-in":
        return "opacity-0 scale-95";
      default:
        return "opacity-0 translate-y-12";
    }
  };

  // Visible styling mapping
  const getActiveStyles = () => {
    switch (animation) {
      case "zoom-in":
        return "opacity-100 scale-100";
      default:
        return "opacity-100 translate-y-0 translate-x-0";
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? getActiveStyles() : getInitialStyles()
      }`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
export default ScrollReveal;
