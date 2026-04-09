import React from "react";
import { Task } from "../../domain/Task";
import { FaCheck, FaTrash } from "react-icons/fa";

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
        ></li>
      ))}
    </ul>
  );
};

export default TaskListPresenter;
