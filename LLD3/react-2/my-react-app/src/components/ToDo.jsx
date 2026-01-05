import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  //   const arr = [1];
  //   arr.push(2) // update the same array -> update the data immutabily
  //   [...arr,2] arr.concat(2)
  const addTask = () => {
    // always return a new reference
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>To-Do List</h2>
      {/* Controlled components in react */}
      <input
        type="text"
        value={input} // ""
        placeholder="Enter task..."
        style={{ marginRight: "10px", padding: "10px" }}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={task}>
            {task}
            <button onClick={() => removeTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
