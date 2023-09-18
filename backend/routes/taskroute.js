const express = require("express");
const task_model = require("../model/task_model");
const trackdeletion = require("../middlewares/TrackDeletion");

const {createTask, getTasks, getTask, getDataFromName, deleteTask, UpdateTask, UpdateTaskSingleField, ClearDB} = require("../controllers/taskcontroller");

const router = express.Router();

router.post("/", createTask);
router.get("/:id", getTask);
router.get("/", getDataFromName)
router.delete("/:id", deleteTask);
router.put("/:id",  UpdateTask);
router.patch("/:id",  UpdateTaskSingleField);
router.get('/clear-database', trackdeletion, ClearDB);

module.exports = router;