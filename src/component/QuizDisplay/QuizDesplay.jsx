// import React from 'react'
import styles from "./QuizDisplay.module.css";

const QuizDesplay = ({ children }) => {
  return <div className={styles.display}>{children}</div>;
};

export default QuizDesplay;
