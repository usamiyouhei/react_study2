import React from "react";
import { Task } from "../../domain/Task";
import { FaCheck, FaTrash } from "react-icons/fa";
import { TaskCard } from "../TaskCard.tsx/TaskCard";

type TaskListPresenterProps = {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
};
const TaskListPresenter: React.FC<TaskListPresenterProps> = ({
  tasks,
  onToggleTask,
  onDeleteTask,
}) => {
  if (tasks.length === 0)
    return <div className="empty-message">タスクはありません</div>;
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`task-item ${task.completed ? "completed" : ""}`}
        >
          <TaskCard task={task} onToggle={onToggleTask} onDelete={onDeleteTask}>
            <TaskCard.Priority />
            <TaskCard.Title />
            <TaskCard.Actions />
          </TaskCard>
        </li>
      ))}
    </ul>
  );
};

export default TaskListPresenter;
