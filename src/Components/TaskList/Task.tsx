import { Typography, Button } from "@mui/material";
import { TaskSchema, AllTaskSchema } from "../../Models/Schema";

type Props = {
  task: TaskSchema;
  handleComplete: (id: string) => void;
  handleDelete: (id: string) => void;
};

const Task: React.FC<Props> = ({ task, handleComplete, handleDelete }: any) => {
  return (
    <>
      <Typography variant="h5" color="primary">
        {task.title}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleComplete(task.id)}
      >
        {task.status ? "Mark as done" : "Mark as Incomplete"}
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleDelete(task.id)}
      >
        Delete
      </Button>
    </>
  );
};

export default Task;
