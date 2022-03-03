export type TaskSchema = {
  id: string;
  title: string;
  status: boolean;
  description?: string;
  date?: Date;
};
export type AllTaskSchema = Array<TaskSchema>;

export type TasksStateProps = {
  tasks: AllTaskSchema;
  setTasks: React.Dispatch<React.SetStateAction<AllTaskSchema>>;
};
