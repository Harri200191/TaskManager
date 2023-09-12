const express = require("express");
const task_model = require("./model/task_model");

const router = express.Router();

router.post("/api/tasks", async (req, resp) => {
    try{
        const task = await task_model.create(req.body);
        resp.status(200).json(task);
    }
    catch(error){
        resp.status(500).json({
            msg: error.message
        })
    };
});

router.get("/api/tasks", async (req, resp) => {
    try{
        const task = await task_model.find();
        resp.status(200).json(task);
    }
    catch (error){
        resp.status(500).json({
            msg: error.message
        });
    }
});

module.exports = router;