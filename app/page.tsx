"use client";

import { Rubik } from "next/font/google";
import styles from "./page.module.css";
import HeroArea from "./sections/HeroArea";
import CodeEditor from "./sections/CodeEditor";
import ResponsiveManager from "./common/ResponsiveManager";
import SectionAgentArt from "./sections/SectionAgentArt";
import AnimatedRow from "./common/AnimatedRow";

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
        <AnimatedRow triggerType="immediate" minHeight={500}>
          <HeroArea />
        </AnimatedRow>

        <AnimatedRow triggerType="time" delay={1000} minHeight={450}>
          <CodeEditor />
        </AnimatedRow>

        {/* Time-based: renders after delay */}
        <AnimatedRow triggerType="time" delay={1500} minHeight={600}>
          <SectionAgentArt />
        </AnimatedRow>

        {/* OR Scroll-based: wait for delay, then trigger when scrolled into view */}
        {/* Uncomment below to test scroll triggers */}

        {/* <AnimatedRow
          triggerType="scroll"
          delay={2500}
          threshold={0.3}
          minHeight={450}
        >
          <CodeEditor />
        </AnimatedRow>

        <AnimatedRow
          triggerType="scroll"
          delay={2500}
          threshold={0.3}
          minHeight={600}
        >
          <SectionAgentArt />
        </AnimatedRow>

        <AnimatedRow
          triggerType="scroll"
          delay={2500}
          threshold={0.3}
          minHeight={500}
        >
          <HeroArea />
        </AnimatedRow> */}
      </ResponsiveManager>
    </div>
  );
}
