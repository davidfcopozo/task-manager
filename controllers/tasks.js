const Task = require("../models/task");
const asyncWrapper = require("../middleware/asyncWrapper");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
  //res.status(500).json({ msg: error });
  //console.log(`${error.errors.name.name}: ${error.errors.name.message}`);
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });

  res.status(500).json({ msg: error });
  console.log(`${error.errors.name.name}: ${error.errors.name.message}`);
});

const getTask = asyncWrapper(async (req, res) => {
  //taskId is the alias for id
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return res.status(404).json({ msg: `No task with ID: ${taskID}` });
  }
  res.status(200).json({ task });

  res.status(404).json({ msg: error });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  //Task.findOneAndUpdate({value we looking for}, updated data, {options, to return the new data and run validators in this case})
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: `No task with ID: ${taskID}` });
  }
  res.status(200).json({ task });

  res.status(404).json({ msg: error });
});

const deleteTask = asyncWrapper(async (req, res) => {
  //taskId is the alias for id
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    return res.status(404).json({ msg: `No task with ID: ${taskID}` });
  }

  res.status(200).json({ task });

  res.status(404).json({ msg: error });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
