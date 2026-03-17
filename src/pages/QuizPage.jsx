// import React from "react";

import QuizButton from "../component/Button/QuizButton";
import QuizDesplay from "../component/QuizDisplay/QuizDesplay";
import quizData from "../data/quiz";

const QuizPage = () => {
  const quizIndex = 0;
  const handleClick = (clickedIndex) => {
    console.log("clickedIndex:", clickedIndex);
  };

  return (
    <div>
      <QuizDesplay>{`Q1. ${quizData[quizIndex].question}`}</QuizDesplay>
      {quizData[quizIndex].options.map((option, index) => {
        return (
          <QuizButton
            key={`option-${index}`}
            onClick={() => handleClick(index)}
          >
            {option}
          </QuizButton>
        );
      })}
    </div>
  );
};

export default QuizPage;
