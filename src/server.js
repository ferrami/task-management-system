require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const morgan = require("morgan");

const userRouter = require("./routes/user");
const taskRouter = require("./routes/task");

// MongoDB import
const connectDB = require("../config/mongodb");
connectDB();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
// Alternative using express directly.
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/users",userRouter);
app.use("/api/tasks", taskRouter);

// Placeholder
app.get("/", (req, res) => {
  res.send("Task Manager API");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
