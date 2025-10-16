import React from "react";
import { motion } from "framer-motion";
import styles from "./card.module.css";

export enum CardColor {
  BLANK = "blank",
  DARK = "dark",
  DEEP_BLUE = "deep-blue",
  ORANGE = "orange",
  LIGHT_BLUE = "light-blue",
  DEEP_PURPLE = "deep-purple",
}

export interface CardProps {
  children: React.ReactNode;
  color: CardColor;
  width: number;
  overflow?: boolean;
  order?: number;
  height?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  flex?: "row" | "column";
  gap?: number;
  fullWidth?: boolean;
  shouldAnimate?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  color,
  width,
  overflow = false,
  order = 1,
  height,
  flex = "row",
  gap = 0,
  onMouseEnter,
  onMouseLeave,
  fullWidth = false,
  shouldAnimate = true,
}) => {
  const cardClasses = [
    styles.card,
    styles[`card-color-${color}`],
    overflow ? "" : styles["card-overflow-hidden"],
  ].join(" ");

  const adjustedWidth = fullWidth ? "100%" : `${width}%`;

  const styleVariables = {
    "--width": adjustedWidth,
    "--height": `${height}px`,
    "--flex": flex,
    "--gap": `${gap}px`,
  } as React.CSSProperties;

  return (
    <motion.div
      className={cardClasses}
      style={styleVariables}
      initial={{
        opacity: 0,
        scale: 0.2,
        translateY: 300,
      }}
      animate={
        shouldAnimate
          ? {
              opacity: 1,
              scale: 1,
              translateY: 0,
            }
          : {
              opacity: 0,
              scale: 0.2,
              translateY: 300,
            }
      }
      transition={{
        stiffness: 70,
        mass: 1,
        damping: 12,
        type: "spring",
        delay: (order || 0) * 0.15, // Stagger within row only
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  );
};

export default Card;
