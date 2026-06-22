import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = (e) => {
    e.preventDefault();

    if (!name || !date) {
      alert("Enter task name and due date");
      return;
    }

    setTasks([
      ...tasks,
      { name, date, desc, completed: false }
    ]);

    setName("");
    setDate("");
    setDesc("");
  };

  const toggleTask = (i) => {
    const newTasks = [...tasks];
    newTasks[i].completed = !newTasks[i].completed;
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Reminder App</h2>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br /><br />

        <textarea
          placeholder="Description (Optional)"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <br /><br />

        <button type="submit">Add Task</button>
      </form>

      <br />

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All Tasks</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>

      <ul>
        {filteredTasks.map((t, i) => (
          <li key={i}>
            <b>{t.name}</b> - {t.date}
            <br />
            {t.desc}
            <br />
            Status: {t.completed ? "Completed" : "Pending"}
            <br />
            <button onClick={() => toggleTask(i)}>
              Mark {t.completed ? "Pending" : "Completed"}
            </button>
            <br /><br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
