import { useReducer } from "react";
import { Priority, Task } from "../domain/Task";

export const TaskActionType = {
  ADD: "ADD",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
};

export type TaskAction =
  | {
      type: typeof TaskActionType.ADD;
      payload: { title: string; priority: Priority };
    }
  | { type: typeof TaskActionType.TOGGLE; payload: { id: string } }
  | { type: typeof TaskActionType.DELETE; payload: { id: string } };

export interface TaskState {
  tasks: Task[];
}

export function taskReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case TaskActionType.ADD: {
      const { title, priority } = action.payload as {
        title: string;
        priority: Priority;
      };
      const newTask: Task = {
        id: Date.now().toString(),
        title,
        priority,
        completed: false,
      };
      return {
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActionType.TOGGLE: {
      const { id } = action.payload as { id: string };
      return {
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task,
        ),
      };
    }
    case TaskActionType.DELETE: {
      const { id } = action.payload as { id: string };
      return {
        tasks: state.tasks.filter((task) => task.id !== id),
      };
    }
    default: {
      throw new Error(`Unknown action type: ${action.type}`);
    }
  }
}

interface UseTaskReducerOptions {
  reducer?: (state: TaskState, action: TaskAction) => TaskState;
  initialTasks?: Task[];
}

export function useTaskReducer({
  reducer = taskReducer,
  initialTasks = [],
}: UseTaskReducerOptions) {
  const [state, dispatch] = useReducer(reducer, { tasks: initialTasks });

  const addTask = (title: string, priority: Priority) => {
    dispatch({
      type: TaskActionType.ADD,
      payload: { title, priority },
    });
  };
  const toggleTask = (id: string) => {
    dispatch({
      type: TaskActionType.TOGGLE,
      payload: { id },
    });
  };
  const deleteTask = (id: string) => {
    dispatch({
      type: TaskActionType.DELETE,
      payload: { id },
    });
  };
  return { state, addTask, toggleTask, deleteTask };
}
