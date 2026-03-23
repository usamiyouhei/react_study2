export type Task = {
  id: string;
  title: string;
  completed: boolean;
  priority: Priority;
};

export type Priority = "low" | "medium" | "high";
