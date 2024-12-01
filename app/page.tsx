import styles from "./page.module.css";
import HeroArea from "./sections/HeroArea";
import CodeEditor from "./sections/CodeEditor";

import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${rubik.className} ${styles.page}`}>
      <HeroArea />
      <CodeEditor />
    </div>
  );
}
