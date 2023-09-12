// if we write npm start, it runs the index.js file
// if we write npm run backend it starts nodemon index.js
const express = require("express");
const connectDB = require("./config/connectDB");
const task_model = require("./model/task_model");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, resp) => {
    resp.send("Home Page");
});

// CREATING A TASK
app.post("/api/tasks", async (req, resp) => {
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

// To make sure that our database connects before our server does
const startserver = async () => {
    try{
        await connectDB();
        app.listen(PORT, () => {
            console.log("Server running on port: ", PORT);
        });
    }
    catch (error){
        console.warn(error)
    };
};

startserver();