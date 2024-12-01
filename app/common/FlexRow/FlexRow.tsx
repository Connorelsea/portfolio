"use client";

import React, { useEffect, useMemo, useState } from "react";
import styles from "./flexRow.module.css";
import { useMediaQuery } from "react-responsive";
import { DESKTOP_WIDTH, GAP, MOBILE_WIDTH } from "../constants";

export interface FlexRowProps {
  children: React.ReactNode;
  height: number;
}

const FlexRow: React.FC<FlexRowProps> = ({ children, height }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: ${DESKTOP_WIDTH}px)`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: ${MOBILE_WIDTH}px)`,
  });

  const [windowWidth, setWindowWidth] = useState(DESKTOP_WIDTH);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scale = useMemo(() => {
    if (isDesktopOrLaptop) {
      return 1;
    }

    if (!isDesktopOrLaptop && !isMobile) {
      return windowWidth / DESKTOP_WIDTH;
    }

    return (windowWidth - 40) / MOBILE_WIDTH;
  }, [isDesktopOrLaptop, windowWidth, isMobile]);

  const calculatedHeight = useMemo(() => {
    if (isDesktopOrLaptop || !isMobile) {
      return height;
    } else {
      return height * 2 + GAP;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktopOrLaptop, height, scale, isMobile]);

  const calculatedWidth = useMemo(() => {
    if (isDesktopOrLaptop || !isMobile) {
      if (!isMobile) {
        return DESKTOP_WIDTH - 40;
      }
      return DESKTOP_WIDTH;
    } else {
      return MOBILE_WIDTH;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktopOrLaptop, scale, isMobile]);

  const styleVariables = {
    "--width": `${calculatedWidth}px`,
  } as React.CSSProperties;

  return (
    <div
      className={styles["flex-row"]}
      style={{
        height: calculatedHeight,
        transform: `scale(${scale})`,
        transformOrigin: "top",
        ...styleVariables,
      }}
    >
      {children}
    </div>
  );
};

export default FlexRow;
