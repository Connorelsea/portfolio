"use client";

import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { DESKTOP_WIDTH } from "../constants";

type ResponsiveManagerProps = {
  children: React.ReactNode;
};

// Above x is the display mode
const WIDTH_DESKTOP = 1200;
const WIDTH_TABLET = 700;
const WIDTH_MOBILE = 0;

const ResponsiveManager = ({ children }: ResponsiveManagerProps) => {
  const TOTAL_X_PADDING = 40;

  const isDesktop = useMediaQuery({
    minWidth: WIDTH_DESKTOP,
  });
  const isTablet = useMediaQuery({
    minWidth: WIDTH_TABLET,
    maxWidth: WIDTH_DESKTOP,
  });
  const isMobile = useMediaQuery({
    minWidth: WIDTH_MOBILE,
    maxWidth: WIDTH_TABLET,
  });

  const [screenSize, setScreenSize] = useState(DESKTOP_WIDTH);

  useEffect(() => {
    setTimeout(() => {
      setScreenSize(window.innerWidth);
    }, 10);
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setScreenSize(window.innerWidth);
      });
    };
  }, []);

  const scale = useMemo(() => {
    if (isDesktop) {
      return 1;
    }
    let calculatedWidth = DESKTOP_WIDTH;
    if (isMobile) calculatedWidth = WIDTH_TABLET + TOTAL_X_PADDING;
    const scale = screenSize / calculatedWidth;
    console.log("FOUND SCALE", scale);
    return scale;
  }, [isDesktop, isMobile, screenSize]);

  // const width = useMemo(() => {
  //   if (isDesktop) {
  //     return WIDTH_DESKTOP - TOTAL_X_PADDING;
  //   }
  //   if (isTablet || isMobile) {
  //     const scale = window.innerWidth / DESKTOP_WIDTH;
  //     const calculatedWidth = WIDTH_TABLET - TOTAL_X_PADDING;
  //     return calculatedWidth * scale;
  //   }
  // }, [isDesktop, isTablet, isMobile]);

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "top",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 30,
      }}
    >
      {children}
    </div>
  );
};

export default ResponsiveManager;
