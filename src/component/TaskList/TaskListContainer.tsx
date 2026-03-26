import { useState } from "react";
import type { Priority, Task } from "../../domain/Task";
import TaskFormPresenter from "../TaskForm/TaskFormPresenter";

const TaskListContainer: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const handleAddTask = (title: string, priority: Priority) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
      priority,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <div className="task-container">
      <TaskFormPresenter onAddTask={handleAddTask} />
    </div>
  );
};
