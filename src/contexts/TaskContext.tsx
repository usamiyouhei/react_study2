import { createContext, useContext } from "react";
import { Priority, Task } from "../domain/Task";

export interface TaskContextType {
  tasks: Task[];
  addTask: (title: string, priority: Priority) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export const defaultTaskContext: TaskContextType = {
  tasks: [],
  addTask: () => {},
  toggleTask: () => {},
  deleteTask: () => {},
};

export const TaskContext = createContext<TaskContextType>(defaultTaskContext);

export function useTaskContext() {
  return useContext(TaskContext);
}
