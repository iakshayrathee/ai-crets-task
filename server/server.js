const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// In-memory data storage for storing tasks
let tasks = [];

// Routes
//Get tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

//Post task
app.post("/tasks", (req, res) => {
  const task = { id: uuidv4(), ...req.body };
  tasks.push(task);
  res.json(task);
});

//Update task
app.put("/tasks/:id", (req, res) => {
  const taskIndex = tasks.findIndex((task) => task.id === req.params.id);
  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
    res.json(tasks[taskIndex]);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

//Delete task
app.delete("/tasks/:id", (req, res) => {
  const taskIndex = tasks.findIndex((task) => task.id === req.params.id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.json({ message: "Task deleted" });
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
