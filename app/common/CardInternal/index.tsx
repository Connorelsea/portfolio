import React from "react";
import styles from "./cardInternal.module.css";

const CardInternal = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.cardInternal}>{children}</div>;
};

export default CardInternal;
