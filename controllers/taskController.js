const Task = require("../models/Task");
const asyncHandler = require("../middleware/asyncHandler");


const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});


const createTask = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.title.trim()) {
    res.status(400);
    throw new Error("Title is required");
  }
  const task = await Task.create({
    title: req.body.title,
  });
  res.status(201).json(task);
});



const deleteTask = asyncHandler(async (req, res) => {
const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }
  await task.deleteOne();
  res.json({ message: "Task removed" });
});



const updatedTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }
  task.title = req.body.title ?? task.title;
  task.completed = req.body.completed ?? task.completed;
  const updatedTask = await task.save();
  res.json(updatedTask);
});


module.exports = {
  getTasks,
  createTask,
  deleteTask,
  updatedTask
};
