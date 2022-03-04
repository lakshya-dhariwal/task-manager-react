import { useState } from "react";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import { AllTaskSchema } from "./Models/Schema";
import { Grid } from "@mui/material";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<AllTaskSchema>([]);
  return (
    <div className="App">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "50vh" }}
      >
        {/* <Grid item xs={3}> */}
        <TaskForm tasks={tasks} setTasks={setTasks} />
        {/* </Grid> */}
      </Grid>

      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};
export default App;
