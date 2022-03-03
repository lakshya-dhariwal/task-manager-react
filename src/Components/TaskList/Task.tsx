import { Typography, Button, Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { TaskSchema, AllTaskSchema } from "../../Models/Schema";

type Props = {
  task: TaskSchema;
  handleComplete: (id: string) => void;
  handleDelete: (id: string) => void;
};

const Task: React.FC<Props> = ({ task, handleComplete, handleDelete }: any) => {
  return (
    <>
      <Card sx={{ width: 360 }}>
        <CardContent>
          <Typography
            variant="h5"
            color="primary"
            style={{ textDecoration: task.status ? "line-through" : "none" }}
          >
            {task.title}
          </Typography>
          <Typography variant="body2" color="primary">{task.date}</Typography>
          <Typography variant="body2">{task.description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: 120 }}
            onClick={() => handleComplete(task.id)}
          >
            {task.status ? "Completed" : "Incomplete"}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDelete(task.id)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Task;
