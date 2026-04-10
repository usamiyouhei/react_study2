import React, { FormEvent, useState } from "react";
import type { Priority } from "../../domain/Task";
import { useTaskContext } from "../../contexts/TaskContext";

type TaskFormPresenterProps = {
  onAddTask: (title: string, priority: Priority) => void;
};

const TaskFormPresenter: React.FC<TaskFormPresenterProps> = ({ onAddTask }) => {
  // const { addTask: onAddTask } = useTaskContext();
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("medium");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title) return;

    onAddTask(title, priority);
    setTitle("");
    setPriority("medium");
  };
  return (
    <div>
      <form action="" className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="新しいタスクを追加"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as Priority)}
        >
          <option value="low">低</option>
          <option value="medium">中</option>
          <option value="high">高</option>
        </select>
        <button type="submit">追加</button>
      </form>
    </div>
  );
};

export default TaskFormPresenter;
