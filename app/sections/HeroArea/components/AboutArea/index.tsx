import { memo, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/app/common/Button";
import styles from "./about.module.css";
import { useLoadTracker } from "@/app/hooks/useLoadTracker";

export interface AboutAreaProps {
  selectedButton: string;
  setSelectedButton: (button: string) => void;
}

const AboutArea = ({ selectedButton, setSelectedButton }: AboutAreaProps) => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div>
          <h1 className={styles.headerText + " " + styles.text}>
            Connor
            <br />
            Elsea
          </h1>
          <p className={styles.paragraphText + " " + styles.text}>
            8 years of fullstack engineering, from fast-paced startups to large
            platforms. Building focused on all aspects of the web. Taking deep
            dives into products, their markets, and their users to produce
            experiences that spark joy.
          </p>
          <div className={styles.buttonContainer}>
            <Button
              text="About Me"
              isSelected={selectedButton === "About Me"}
              onClick={() => setSelectedButton("About Me")}
            >
              About Me
            </Button>
            <Button
              text="Career"
              isSelected={selectedButton === "Career"}
              onClick={() => setSelectedButton("Career")}
            >
              Career
            </Button>
            <Button
              text="Portfolio"
              isSelected={selectedButton === "Portfolio"}
              onClick={() => setSelectedButton("Portfolio")}
            >
              Portfolio
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(AboutArea);
