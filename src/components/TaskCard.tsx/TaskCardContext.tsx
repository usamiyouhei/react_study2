import { createContext, useContext } from "react";
import { Task } from "../../domain/Task";

export interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const defaultTaskContext: TaskCardProps = {
  task: { id: "", title: "", completed: false, priority: "low" },
  onToggle: () => {},
  onDelete: () => {},
};

export const TaskCardContext = createContext<TaskCardProps>(defaultTaskContext);

export const useTaskCardContext = () => {
  return useContext(TaskCardContext);
};
