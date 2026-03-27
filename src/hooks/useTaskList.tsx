import { useState } from "react";
import type { Priority, Task } from "../domain/Task";

export function useTaskList() {
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

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
}
