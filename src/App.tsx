import { useState } from "react";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import { AllTaskSchema } from "./Models/Schema";



const App: React.FC = () => {
  const [tasks, setTasks] = useState<AllTaskSchema>([]);
  return (
    <div className="App">
      <TaskForm tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};
export default App;
