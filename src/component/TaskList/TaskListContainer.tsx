import { useState } from "react";
import type { Priority, Task } from "../../domain/Task";
import TaskFormPresenter from "../TaskForm/TaskFormPresenter";
import TaskListPresenter from "./TaskListPresenter";

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

  const handleToggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="task-container">
      <TaskFormPresenter onAddTask={handleAddTask} />
      <TaskListPresenter
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default TaskListContainer;
