// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
// import { ROUTES } from "./const";
// import QuizHome from "./pages/QuizHome";
// import QuizPage from "./pages/QuizPage";
// import ResultPage from "./pages/ResultPage";
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
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");
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

      {/* <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<QuizHome />} />
          <Route path={ROUTES.QUIZ} element={<QuizPage />} />
          <Route path={ROUTES.RESULT} element={<ResultPage />} />
        </Routes>
      </BrowserRouter> */}
      <div className="app">
        <header className="app-header">
          <h1>タスク管理アプリ</h1>
        </header>

        <div className="task-container">
          <form action="" className="task-form" onSubmit={() => {}}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="新しいタスクを追加"
            />
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="low">低い</option>
              <option value="medium">中</option>
              <option value="high">高い</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
