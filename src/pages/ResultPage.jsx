// import React from "react";

import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../const";
import Result from "../component/Result/Result";

const ResultPage = () => {
  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen;
  const correctNumLen = location.state.correctNumLen;
  return (
    <div>
      <h1>ResultPage</h1>
      <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen} />
      <br />
      <Link to={ROUTES.QUIZ}>もう一度チャレンジ</Link>
    </div>
  );
};

export default ResultPage;
