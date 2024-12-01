import React from "react";
import { motion } from "framer-motion";
import styles from "./card.module.css";

export enum CardColor {
  BLANK = "blank",
  DARK = "dark",
  DEEP_BLUE = "deep-blue",
}

export interface CardProps {
  children: React.ReactNode;
  color: CardColor;
  width: number;
  overflow?: boolean;
  order?: number;
}

const Card: React.FC<CardProps> = ({
  children,
  color,
  width,
  overflow = false,
  order = 1,
}) => {
  const cardClasses = [
    styles.card,
    styles[`card-color-${color}`],
    overflow ? "" : styles["card-overflow-hidden"],
  ].join(" ");

  const styleVariables = { "--width": `${width}%` } as React.CSSProperties;

  return (
    <motion.div
      className={cardClasses}
      style={styleVariables}
      initial={{
        opacity: 0,
        scale: 0.8,
        translateY: 200,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        translateY: 0,
      }}
      transition={{
        stiffness: 70,
        mass: 1,
        type: "spring",
        delay: order * 0.3,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
