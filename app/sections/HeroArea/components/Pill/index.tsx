import { memo, useState } from "react";
import styles from "./pill.module.css";
import { motion } from "framer-motion";
import Popup from "@/app/common/Popup";

import content from "@/app/common/Popup/content";

const Pill = ({
  title,
  moveTop,
  moveRight,
  scale = 1,
  order,
  opacity = 1,
}: {
  title: string;
  moveTop: number;
  moveRight: number;
  scale?: number;
  order: number;
  opacity?: number;
}) => {
  const startTop = 185;
  const startRight = 140;
  const newTop = startTop + moveTop;
  const newRight = startRight + moveRight;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        onHoverStart={() => {
          setIsHovered(true);
        }}
        onHoverEnd={() => {
          setIsHovered(false);
        }}
        key={"pill-" + title}
        className={styles.pill}
        style={{
          zIndex: 9000 - order,
          boxShadow: `0px ${5 + (15 - order * 1.1) * 1}px ${15 + order * 0.3}px rgba(152, 170, 232, 0.5), inset 0px -6px 4px rgba(211, 221, 255, 0.7), inset 0 2px 2px rgba(255, 255, 255, 0.9)`,
        }}
        initial={{
          opacity: 0,
          top: startTop,
          right: startRight - 50,
          scale: 0.8,
          filter: "blur(20px)",
          rotateX: 100,
          rotateY: 20,
        }}
        animate={{
          opacity: opacity,
          top: newTop,
          right: newRight,
          scale: scale,
          filter: "blur(0px)",
          rotateX: 0,
          rotateY: 0,
        }}
        exit={{
          opacity: 0,
          top: startTop,
          right: startRight - 50,
          scale: 0.8,
          filter: "blur(20px)",
          rotateX: 100,
          rotateY: 20,
          transition: {
            // stiffness: 120,
            // type: "spring",
            duration: 0.3,
            delay: 0.05 * order,
          },
        }}
        transition={{
          stiffness: 70,
          mass: 2,
          type: "spring",
          delay: 0.15 * order,
        }}
      >
        <p className={styles.pillText} data-text={title}>
          {title}
        </p>
      </motion.div>

      <Popup
        isVisible={isHovered}
        content={
          <div style={{ userSelect: "none", cursor: "auto" }}>
            {content[title]}
          </div>
        }
      />
    </>
  );
};

export default memo(Pill);
