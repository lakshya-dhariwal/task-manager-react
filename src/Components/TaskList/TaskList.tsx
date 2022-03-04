import Task from "./Task";
import { TaskSchema, TasksStateProps } from "../../Models/Schema";
import { Grid, Typography } from "@mui/material";

const TaskList: React.FC<TasksStateProps> = ({ tasks, setTasks }: any) => {
  const handleComplete = (id: string) => {
    const updatedTasks = tasks.forEach((task: TaskSchema) => {
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
      <Typography
        variant="h5"
        color="primary"
        sx={{
          "fontWeight": "800",
          display: "flex",
          "flexDirection": "column",
          "alignItems": "center",
        }}
      >
        Your Tasks
      </Typography>
      <Grid
        container
        margin={5}
        direction="row"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
      >
        {tasks?.forEach((task: any) => {
          if (task.title) {
            return (
              <>
                <Task
                  key={task.id}
                  task={task}
                  handleComplete={handleComplete}
                  handleDelete={handleDelete}
                />
              </>
            );
          }
        })}
      </Grid>
    </div>
  );
};

export default TaskList;
