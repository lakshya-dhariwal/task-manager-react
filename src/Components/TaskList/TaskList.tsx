import Task from "./Task";
import { TaskSchema, TasksStateProps } from "../../Models/Schema";
import { Stack } from "@mui/material";

const TaskList: React.FC<TasksStateProps> = ({ tasks, setTasks }: any) => {
  const handleComplete = (id: string) => {
    const updatedTasks = tasks.map((task: TaskSchema) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    console.log(updatedTasks);
    setTasks(updatedTasks);
  };

  const handleDelete = (id: string) => {
    const updatedTasks = tasks.filter((task: TaskSchema) => {
      return task.id !== id;
    });
    console.log(updatedTasks);
    setTasks(updatedTasks);
  };
  return (
    <div>
      <Stack flex={0} spacing={3}>
        {tasks?.map((task: any) => {
          if (task.title) {
            return (
              <>
                <Task
                  task={task}
                  handleComplete={handleComplete}
                  handleDelete={handleDelete}
                />
              </>
            );
          }
        })}
      </Stack>
    </div>
  );
};

export default TaskList;
