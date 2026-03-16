// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./const";
import QuizHome from "./pages/QuizHome";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
// import Home from './pages/Home'
// import SamplePage from './pages/SamplePage'
// import Button from './component/Button/Button'
// import Display from './component/Display/Display'

function App() {
  //   const [count, setCount] = useState(0)

  //   const handleClick = () => {
  //   setCount(count +1)
  // }

  // useEffect(() => {
  //   console.log('count', count);
  //   if(count > 15) {
  //     setCount(0)
  //   }
  // }, [count])

  return (
    <>
      {/* <h1>Hello World</h1>
      <Button type="button" disabled={false} onClick={handleClick}>ボタン</Button>
      <Display count={count}/> */}
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sample-page' element={<SamplePage/>}/>
      </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<QuizHome />} />
          <Route path={ROUTES.QUIZ} element={<QuizPage />} />
          <Route path={ROUTES.RESULT} element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
