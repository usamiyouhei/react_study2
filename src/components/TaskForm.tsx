import { useState } from "react";
import { useTaskStore } from "../store/task.store";
import { Priority } from "../domain/Task";

export const TaskForm = () => {
  const addTask = useTaskStore((state) => state.addTask);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("medium");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    addTask(title, priority);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit"></button>
    </form>
  );
};
