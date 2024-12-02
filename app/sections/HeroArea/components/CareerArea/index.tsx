import { memo } from "react";
import { motion } from "framer-motion";
import styles from "./career.module.css";

interface CareerCardProps {
  title: string;
  description: string;
  index?: number;
}

const LinkedInLinkCard = ({ index = 0 }: { index: number }) => (
  <motion.div
    className={styles.card}
    style={{ paddingTop: 10, paddingBottom: 10 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
    transition={{
      delay: index * 0.3,
      type: "spring",
      stiffness: 120,
      mass: 3,
    }}
  >
    <p className={styles.cardDescription}>
      Find more detailed descriptions of these roles{" "}
      <a
        href="https://www.linkedin.com/in/elsea/"
        target="_blank"
        style={{
          textDecoration: "underline",
          textUnderlineOffset: 4,
          cursor: "pointer",
        }}
      >
        on LinkedIn
      </a>
    </p>
  </motion.div>
);

const CareerCard = ({ title, description, index = 0 }: CareerCardProps) => (
  <motion.div
    className={styles.card}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
    transition={{
      delay: index * 0.3,
      type: "spring",
      stiffness: 120,
      mass: 3,
    }}
  >
    <h2 className={styles.cardTitle}>{title}</h2>
    <p className={styles.cardDescription}>{description}</p>
  </motion.div>
);

export interface CareerAreaProps {
  data: CareerCardProps[];
}

const CareerArea = ({ data }: CareerAreaProps) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardsContainer}>
        {data.map((career, index) =>
          career.title === "LinkedIn" ? (
            <LinkedInLinkCard key={index} index={index} />
          ) : (
            <CareerCard
              key={index}
              title={career.title}
              description={career.description}
              index={index}
            />
          )
        )}
      </div>
      <div className={styles.fadeOverlay} />
    </div>
  );
};

export default memo(CareerArea);
