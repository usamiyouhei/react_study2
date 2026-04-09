import { Task } from "../../domain/Task";
import { TaskCardActions } from "./TaskCardActions";
import { TaskCardContext } from "./TaskCardContext";
import { TaskCardPriority } from "./TaskCardPriority";
import { TaskCardTitle } from "./TaskCardTitle";

interface TaskProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  children: React.ReactNode;
}

export const TaskCardBase: React.FC<TaskProps> = ({
  task,
  onToggle,
  onDelete,
  children,
}) => {
  return (
    <TaskCardContext.Provider value={{ task, onToggle, onDelete }}>
      {children}
    </TaskCardContext.Provider>
  );
};

export const TaskCard = Object.assign(TaskCardBase, {
  Title: TaskCardTitle,
  Priority: TaskCardPriority,
  Actions: TaskCardActions,
});
