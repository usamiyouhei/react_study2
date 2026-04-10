// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormEvent, useState } from "react";
import "./App.css";
import type { Priority, Task } from "./domain/Task";
import { FaCheck, FaTrash } from "react-icons/fa";
// import TaskListContainer from "./component/TaskList/TaskListContainer";
import { useTaskList } from "./hooks/useTaskList";
// import TaskFormPresenter from "./component/TaskForm/TaskFormPresenter";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import { TaskProvider } from "./contexts/TaskProvider";
import { useTaskContext } from "./contexts/TaskContext";
import { useTaskReducer } from "./hooks/useTaskReducer";
// import { ROUTES } from "./const";
// import QuizHome from "./pages/QuizHome";
// import QuizPage from "./pages/QuizPage";
// import ResultPage from "./pages/ResultPage";
// import Home from './pages/Home'
// import SamplePage from './pages/SamplePage'
// import Button from './component/Button/Button'
// import Display from './component/Display/Display'

const App: React.FC = () => {
  // const { tasks, addTask, toggleTask, deleteTask } = useTaskList();
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

      {/* <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<QuizHome />} />
          <Route path={ROUTES.QUIZ} element={<QuizPage />} />
          <Route path={ROUTES.RESULT} element={<ResultPage />} />
        </Routes>
      </BrowserRouter> */}
      {/* <div className="app">
        <header className="app-header">
          <h1>タスク管理アプリ</h1>
        </header>
        <TaskForm onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </div> */}
      <TaskProvider>
        <MainContent />
      </TaskProvider>
    </>
  );
};

const MainContent: React.FC = () => {
  const initialTasks: Task[] = [];
  const {
    state: { tasks },
    addTask,
    toggleTask,
    deleteTask,
  } = useTaskReducer({ initialTasks });

  // const { tasks, toggleTask, deleteTask } = useTaskContext();
  return (
    <div className="app">
      <header className="app-header">
        <h1>タスク管理アプリ</h1>
      </header>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
