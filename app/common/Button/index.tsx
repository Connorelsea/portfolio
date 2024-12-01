import { AnimatePresence, motion } from "framer-motion";
import styles from "./button.module.css";
import { Rubik } from "next/font/google";
export interface ButtonProps {
  children: React.ReactNode;
  text: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const rubik = Rubik({ subsets: ["latin"] });

const Button = ({ children, text, isSelected, onClick }: ButtonProps) => {
  const styleVariables = {
    "--buttonTextBackground": isSelected
      ? "white"
      : "linear-gradient(to bottom, #cbd6ff 0%, #6587ff 40%, #284ed9 100%)",
    "--buttonTextShadow": isSelected
      ? "none"
      : `0px 2px 2px rgba(52, 82, 188, 0.4),
    0px -1.4px 1px rgba(255, 255, 255, 0.1)`,
  } as React.CSSProperties;

  return (
    <motion.button
      key={"button-" + text}
      className={styles.button}
      onClick={onClick}
    >
      <AnimatePresence>
        {isSelected && (
          <motion.div
            className={styles.buttonBackdrop}
            key="button-backdrop"
            layoutId="button-backdrop"
          ></motion.div>
        )}
      </AnimatePresence>
      <p
        className={styles.buttonText + " " + rubik.className}
        style={{
          ...styleVariables,
        }}
        data-text={text}
      >
        {children}
      </p>
    </motion.button>
  );
};

export default Button;
