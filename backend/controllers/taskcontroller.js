const express = require("express");
const task_model = require("../model/task_model");

const createTask = async (req, resp) => {
    try{
        const task = await task_model.create(req.body);
        resp.status(200).json(task);
    }
    catch(error){
        resp.status(500).json({
            msg: error.message
        })
    };
};

const getTasks = async (req, resp) => {
    try{
        const task = await task_model.find();
        resp.status(200).json(task);
    }
    catch (error){
        resp.status(500).json({
            msg: error.message
        });
    }
};

const getTask = async (req, resp) => {
    try{
        const {id} = req.params;
        const task = await task_model.findById(id);

        if (!task){
            return resp.status(404).json(`NO TASK WITH THIS ID: ${id}`);
        };

        resp.status(200).json(task);
    }
    catch (error){
        resp.status(500).json({
            msg: error.message
        });
    }
};

module.exports = {
    createTask: createTask,
    getTasks: getTasks,
    getTask: getTask
};