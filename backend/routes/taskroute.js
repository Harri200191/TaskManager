const express = require("express");
const task_model = require("../model/task_model");

const {createTask, getTasks, getTask, getDataFromName, deleteTask, UpdateTask, UpdateTaskSingleField, ClearDB} = require("../controllers/taskcontroller");

const router = express.Router();

router.post("/", createTask);
router.get("/:id", getTask);
router.get("/", getDataFromName)
router.delete("/:id", deleteTask);
router.put("/:id",  UpdateTask);
router.patch("/:id",  UpdateTaskSingleField);
rouoter.get('/clear-database', ClearDB);

module.exports = router;