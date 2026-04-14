import { useTaskStore } from "../store/task.store";

export const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span onClick={() => toggleTask(task.id)}>
            {task.completed ? "✔︎" : "▫️"}
            {task.title}
          </span>
          <button onClick={() => deleteTask(task.id)}></button>
        </li>
      ))}
    </ul>
  );
};
