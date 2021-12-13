const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");
const {
  createCustomError,
  createCutomError,
} = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res) => {
  const tasks = await Task.findOne({ _id: req.params.id });
  if (!task) {
    return next(createCutomError(`No task with id : ${req.params.id}`, 404));
  }
  res.status(200).json({ tasks });
});

const updateTask = asyncWrapper(async (req, res) => {
  const tasks = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCutomError(`No task with id : ${req.params.id}`, 404));
  }
  res.status(200).json({ tasks });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const tasks = await Task.findOneAndDelete({ _id: req.params.id });
  if (!task) {
    return next(createCutomError(`No task with id : ${req.params.id}`, 404));
  }
  res.status(200).json({ tasks });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};