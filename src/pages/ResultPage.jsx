// import React from "react";

import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../const";
import Result from "../component/Result/Result";
import Loading from "../component/Loading/Loading";
import { useEffect, useState } from "react";

const ResultPage = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen;
  const correctNumLen = location.state.correctNumLen;

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 3000);
  }, []);

  return (
    <div>
      <Loading active={active} />
      <h1>ResultPage</h1>
      <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen} />
      <br />
      <Link to={ROUTES.QUIZ}>もう一度チャレンジ</Link>
    </div>
  );
};

export default ResultPage;
