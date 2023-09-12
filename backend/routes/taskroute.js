const express = require("express");
const task_model = require("./model/task_model");
const {createTask, getTasks} = require("../controllers/taskcontroller");
const router = express.Router();

router.post("/api/tasks", createTask);
router.get("/api/tasks", getTasks);

module.exports = router;