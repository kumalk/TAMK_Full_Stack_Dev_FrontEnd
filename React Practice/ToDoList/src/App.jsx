import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");   // current input
  const [tasks, setTasks] = useState([]); // list of tasks

  const addTask = () => {
    if (task.trim() === "") return; // avoid empty tasks
    setTasks([...tasks, task]);     // add new task
    setTask("");                    // clear input
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📝 Todo App</h1>

      {/* Input controlled by state */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>

      {/* Render the tasks */}
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
