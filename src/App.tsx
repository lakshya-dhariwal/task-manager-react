import React from "react";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div className="App">
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6"></Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
