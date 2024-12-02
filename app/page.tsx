"use client";

import { Rubik } from "next/font/google";
import styles from "./page.module.css";
import HeroArea from "./sections/HeroArea";
import CodeEditor from "./sections/CodeEditor";
import ResponsiveManager from "./common/ResponsiveManager";
import SectionAgentArt from "./sections/SectionAgentArt";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`${rubik.className} ${styles.page}`}
      style={{
        maxWidth: "100vw",
        minWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <ResponsiveManager>
        <HeroArea />
        <CodeEditor />
        <SectionAgentArt />
      </ResponsiveManager>
    </div>
  );
}
