import React, { useState } from "react";
import { FormControl, Typography, TextField, Button, Box } from "@mui/material";
import { TaskSchema, TasksStateProps } from "../../Models/Schema";
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
        <Box
          bgcolor={"#ffffff"}
          sx={{
            width: 360,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "1rem",
          }}
          paddingX={5}
          paddingY={3}
          alignContent={"center"}
          justifyItems={"between"}
          boxShadow={"inherit"}
        >
          <Typography variant="h5" color="primary" sx={{ fontWeight: "800" }}>
            Task Manager
          </Typography>
          <TextField
            label="Task Title"
            margin={"normal"}
            sx={{ width: 360 }}
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
            sx={{ width: 360 }}
            margin={"normal"}
            onChange={(e) => {
              setTask({ ...task, description: e.target.value });
            }}
          />
          <TextField
            label="Date"
            type="date"
            sx={{ width: 360, marginTop: 2 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              setTask({ ...task, date: e.target.value });
            }}
          />
          <Button
            size={"large"}
            sx={{ marginTop: 2 }}
            fullWidth
            variant="contained"
            onClick={submitHandler}
          >
            Save Task
          </Button>
        </Box>
      </FormControl>
    </>
  );
};

export default TaskForm;
