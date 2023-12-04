const ToDo = require("../models/todo");

const getTodos = async (req, res) => {
  try {
    const todos = await ToDo.find();
    if (todos) {
      res.status(200).send(todos);
    } else {
      res.status(404).send("Could not find Todos");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const createTodo = async (req, res) => {
  try {
    const newTodo = new ToDo(req.body);
    await newTodo.save();
    res.status(201).send("ToDo Added");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const updateTodo = async (req, res) => {
  try {
    const todo = await ToDo.findOneAndUpdate({ _id: req.params.id }, req.body);
    if (todo) {
      res.status(200).send("Todo Updated");
    } else {
      res.status(404).send("could not find ToDo");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const deleteTodo = async (req, res) => {
  try {
    const todo = await ToDo.findOneAndDelete({ _id: req.params.id });
    if (todo) {
      res.status(200).send("Todo Deleted");
    } else {
      res.status(404).send("could not find ToDo");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { createTodo, getTodos, updateTodo, deleteTodo };
