// if we write npm start, it runs the index.js file
// if we write npm run backend it starts nodemon index.js
const express = require("express");
const connectDB = require("./config/connectDB");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
connectDB();
const PORT = process.env.PORT || 5000;

app.get("/", (req, resp) => {
    resp.send("Home Page");
});

app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
});