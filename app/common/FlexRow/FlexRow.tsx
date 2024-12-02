"use client";

import React, { useMemo } from "react";
import styles from "./flexRow.module.css";
import { useMediaQuery } from "react-responsive";
import { DESKTOP_WIDTH, MOBILE_WIDTH } from "../constants";

export interface FlexRowProps {
  children: React.ReactNode;
}

const FlexRow: React.FC<FlexRowProps> = ({ children }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: ${DESKTOP_WIDTH}px)`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: ${MOBILE_WIDTH}px)`,
  });

  const calculatedWidth = useMemo(() => {
    if (isDesktopOrLaptop || !isMobile) {
      if (!isMobile) {
        return DESKTOP_WIDTH - 40;
      }
      return DESKTOP_WIDTH;
    } else {
      return MOBILE_WIDTH;
    }
  }, [isDesktopOrLaptop, isMobile]);

  const styleVariables = {
    "--width": `${calculatedWidth}px`,
  } as React.CSSProperties;

  return (
    <div
      className={styles["flex-row"]}
      style={{
        ...styleVariables,
      }}
    >
      {children}
    </div>
  );
};

export default FlexRow;
