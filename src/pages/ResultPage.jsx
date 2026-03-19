// import React from "react";

import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../const";

const ResultPage = () => {
  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen;
  const correctNumLen = location.state.correctNumLen;
  return (
    <div>
      <h1>ResultPage</h1>
      <p>あなたの正解数は...</p>
      <p>{`全${maxQuizLen}問中、${correctNumLen}問正解でした！`}</p>
      <br />
      <Link to={ROUTES.QUIZ}>もう一度チャレンジ</Link>
    </div>
  );
};

export default ResultPage;
