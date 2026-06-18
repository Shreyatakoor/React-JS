import { useState } from "react";

function ToDoFunction() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task === "") return;

    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((t, i) => i !== index));
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>To-Do List</h2>

      <input
        type="text"
        value={task}
        placeholder="Enter task"
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: t.completed ? "line-through" : "none",
              }}
            >
              {t.text}
            </span>

            <button onClick={() => toggleTask(index)}>
              {t.completed ? "Pending" : "Complete"}
            </button>

            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoFunction;
