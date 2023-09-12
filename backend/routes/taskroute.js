const express = require("express");
const task_model = require("../model/task_model");
const {createTask, getTasks, getTask, deleteTask, UpdateTask} = require("../controllers/taskcontroller");
const router = express.Router();

router.post("/api/tasks", createTask);
router.get("/api/tasks", getTasks);
router.get("/api/tasks/:id", getTask);
router.delete("/api/tasks/:id", deleteTask);
router.put("/api/tasks/:id",  UpdateTask);

module.exports = router;