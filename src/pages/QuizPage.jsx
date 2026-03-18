// import React from "react";

import { useState } from "react";
import QuizButton from "../component/Button/QuizButton";
import QuizDesplay from "../component/QuizDisplay/QuizDesplay";
import quizData from "../data/quiz";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const [quizIndex, setQuizIndex] = useState(0);
  const [answerLogs, setAnswerLogs] = useState([]);
  const navigation = useNavigate();
  const MAX_QUIZ_LEN = quizData.length;

  const handleClick = (clickedIndex) => {
    if (clickedIndex === quizData[quizIndex].answerIndex) {
      setAnswerLogs((prev) => [...prev, true]);
    } else {
      setAnswerLogs((prev) => [...prev, false]);
    }
    setQuizIndex((prev) => prev + 1);
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
