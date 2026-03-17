// import React from 'react'
import styles from "./QuizButton.module.css";

const QuizButton = ({ children, onClick }) => {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      <span className={styles.buttonInner}>{children}</span>
    </button>
  );
};

export default QuizButton;
