"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "fade";
  delay?: number;
  duration?: number;
  threshold?: number;
}

const animationStyles: Record<string, { initial: string; animate: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-12",
    animate: "opacity-100 translate-y-0",
  },
  "fade-down": {
    initial: "opacity-0 -translate-y-12",
    animate: "opacity-100 translate-y-0",
  },
  "fade-left": {
    initial: "opacity-0 translate-x-12",
    animate: "opacity-100 translate-x-0",
  },
  "fade-right": {
    initial: "opacity-0 -translate-x-12",
    animate: "opacity-100 translate-x-0",
  },
  "zoom-in": {
    initial: "opacity-0 scale-90",
    animate: "opacity-100 scale-100",
  },
  fade: {
    initial: "opacity-0",
    animate: "opacity-100",
  },
};

export function AnimateOnScroll({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.15,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold]);

  const styles = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={`transition-all ${isVisible ? styles.animate : styles.initial} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}
