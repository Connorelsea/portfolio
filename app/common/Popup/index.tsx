import { useEffect, useState, useRef } from "react";
import styles from "./popup.module.css";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Rubik } from "next/font/google";

interface PopupProps {
  isVisible: boolean;
  content: React.ReactNode;
}

const rubik = Rubik({ subsets: ["latin"] });

const Popup = ({ isVisible, content }: PopupProps) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible || !popupRef.current) return;

      const padding = 16;
      const rect = popupRef.current.getBoundingClientRect();

      let left = e.clientX + padding;
      let top = e.clientY + padding;

      // Adjust for right edge
      if (left + rect.width > window.innerWidth) {
        left = e.clientX - rect.width - padding;
      }

      // Adjust for bottom edge
      if (top + rect.height > window.innerHeight) {
        top = e.clientY - rect.height - padding;
      }

      // Ensure minimum positions
      left = Math.max(padding, left);
      top = Math.max(padding, top);

      setPosition({ top, left });
    };

    if (isVisible) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isVisible]);

  // if (!isVisible || !mounted) return null;

  // Render the popup in a portal
  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={popupRef}
          className={`${styles.popup} ${rubik.className}`}
          style={{
            position: "fixed",
            top: `${position.top}px`,
            left: `${position.left}px`,
            zIndex: 9999,
          }}
          key={"popup-" + content}
          initial={{
            opacity: 0,
            scale: 0.1,
            rotate: 10,
            rotateY: 10,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            rotateY: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            rotate: -10,
            rotateY: -10,
          }}
          transition={{
            type: "spring",
            mass: 0.9,
            damping: 8,
          }}
        >
          {content}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Popup;
