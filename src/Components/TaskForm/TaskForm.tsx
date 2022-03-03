import React, { useState } from "react";
import { FormControl, Typography, TextField, Button } from "@mui/material";
import { TaskSchema, AllTaskSchema, TasksStateProps } from "../../Models/Schema";
import { v4 as uuidv4 } from "uuid";

const TaskForm: React.FC<TasksStateProps> = ({ tasks, setTasks }) => {
  const [task, setTask] = useState<TaskSchema>({
    id: uuidv4(),
    title: "",
    description: "",
    status: false,
  });
  const submitHandler = () => {
    setTask({ ...task, id: uuidv4() });
    setTasks([...tasks, task]);
  };

  return (
    <>
      <FormControl variant="standard">
        <Typography variant="h5" color="primary">
          Task Manager
        </Typography>
        <TextField
          label="Task Title"
          margin={"normal"}
          fullWidth
          required
          onChange={(e) => {
            setTask({ ...task, title: e.target.value });
          }}
        />
        <TextField
          label="Task Description"
          variant="outlined"
          multiline
          minRows={4}
          margin={"normal"}
          onChange={(e) => {
            setTask({ ...task, description: e.target.value });
          }}
        />
        <Button variant="contained" onClick={submitHandler}>
          Save Task
        </Button>
      </FormControl>
    </>
  );
};

export default TaskForm;
