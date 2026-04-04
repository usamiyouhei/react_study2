import { useState } from "react";
import { Priority, Task } from "../domain/Task";

interface TaskProviderProps {
  children: React.ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string, priority: Priority) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: string) => {};
};
