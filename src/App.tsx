// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormEvent, useState } from "react";
import "./App.css";
import type { Priority, Task } from "./domain/Task";
import { FaCheck } from "react-icons/fa";
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
  const [priority, setPriority] = useState<Priority>("medium");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();

    if (!title) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
      priority,
    };
    setTasks([...tasks, newTask]);
    setTitle("");
    setPriority("medium");
  };
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
          <form action="" className="task-form" onSubmit={handleAddTask}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="新しいタスクを追加"
            />
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as Priority)}
            >
              <option value="low">低</option>
              <option value="medium">中</option>
              <option value="high">高</option>
            </select>
            <button type="submit">追加</button>
          </form>
          {tasks.length === 0 ? (
            <p className="empty-message">
              タスクがありません。新しいタスクを追加してください。
            </p>
          ) : (
            <ul className="task-list">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className={`task-item ${task.completed ? "completed" : ""}`}
                >
                  <div>
                    <span className={`task-priority priority-${task.priority}`}>
                      {task.priority}
                    </span>
                    <span className="task-title">{task.title}</span>
                  </div>
                  <div className="task-actions">
                    <button
                      className="toggle-btn"
                      onClick={() => handleToggleTask(task.id)}
                      aria-label={
                        task.completed
                          ? "タスクを未完了にする"
                          : "タスクを完了にする"
                      }
                    >
                      {/* {task.completed ? "未完了" : "完了"} */}
                      <FaCheck />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
