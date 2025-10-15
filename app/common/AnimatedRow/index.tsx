"use client";

import React, { useEffect, useState, useRef } from "react";

interface AnimatedRowProps {
  children: React.ReactNode;
  triggerType: "immediate" | "time" | "scroll";
  delay?: number; // milliseconds for "time" trigger, or minimum delay before scroll can activate
  threshold?: number; // 0-1 for "scroll" trigger (how much visible before triggering)
  minHeight?: number; // minimum height in pixels for placeholder (prevents scroll jank)
}

const AnimatedRow: React.FC<AnimatedRowProps> = ({
  children,
  triggerType,
  delay = 0,
  threshold = 0.3,
  minHeight = 400,
}) => {
  const [shouldRender, setShouldRender] = useState(triggerType === "immediate");
  const [scrollCanActivate, setScrollCanActivate] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  // Time-based trigger
  useEffect(() => {
    if (triggerType === "time" && !shouldRender) {
      const timer = setTimeout(() => {
        setShouldRender(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [triggerType, delay, shouldRender]);

  // For scroll: wait for minimum delay before activating observer
  useEffect(() => {
    if (triggerType === "scroll" && !scrollCanActivate) {
      const timer = setTimeout(() => {
        setScrollCanActivate(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [triggerType, delay, scrollCanActivate]);

  // Scroll-based trigger (only after delay)
  useEffect(() => {
    if (triggerType === "scroll" && scrollCanActivate && !shouldRender) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setShouldRender(true);
            }
          });
        },
        {
          threshold,
          rootMargin: "50px",
        }
      );

      if (rowRef.current) {
        observer.observe(rowRef.current);
      }

      return () => {
        if (rowRef.current) {
          observer.unobserve(rowRef.current);
        }
      };
    }
  }, [triggerType, threshold, shouldRender, scrollCanActivate]);

  // Render placeholder for scroll (to observe) and time (to prevent layout shift)
  if (!shouldRender) {
    return (
      <div
        ref={rowRef}
        style={{
          minHeight: `${minHeight}px`,
          width: "100%",
        }}
      />
    );
  }

  return <>{children}</>;
};

export default AnimatedRow;
