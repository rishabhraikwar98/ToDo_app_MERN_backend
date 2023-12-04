const express = require("express");
const cors = require("cors")
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const todoRouter = require("./routes/todo");
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
app.use(express.json());
app.use(cors())

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected DB");
  })
  .catch((e) => {
    console.error(e.message);
  });

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/api/todos", todoRouter);

app.listen(PORT, () => {
  console.log(`Server Started on Port: ${PORT}`);
});
