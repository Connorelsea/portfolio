import { memo } from "react";
import { motion } from "framer-motion";
import styles from "./career.module.css";

interface CareerCardProps {
  title: string;
  description: string;
  index: number;
}

const CareerCard = ({ title, description, index }: CareerCardProps) => (
  <motion.div
    className={styles.card}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
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

const CareerArea = () => {
  const careerData = [
    {
      title: "Senior Software Engineer @ PureCars",
      description:
        "Led development of key features in a fast-paced startup environment...",
    },
    {
      title: "Software Developer @ LocalMed",
      description:
        "Architected and implemented scalable solutions across the stack...",
    },
    {
      title: "Software Developer @ NewAperio",
      description:
        "Architected and implemented scalable solutions across the stack...",
    },
    {
      title: "Full Stack Developer",
      description:
        "Architected and implemented scalable solutions across the stack...",
    },
    // Add more career items as needed
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardsContainer}>
        {careerData.map((career, index) => (
          <CareerCard
            key={index}
            title={career.title}
            description={career.description}
            index={index}
          />
        ))}
      </div>
      <div className={styles.fadeOverlay} />
    </div>
  );
};

export default memo(CareerArea);
