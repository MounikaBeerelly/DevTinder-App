const express = require("express");
require("./config/database.js");

const app = express();

const { adminAuth, userAuth } = require('./middlewares/auth.js');

// Error handling
app.use("/", (err, req, res, next) => {
    if(err) {
        // log your error
        res.status(500).send("Something went wrong");
    }
});

app.get("/getUsersData",(req, res) => {
    try {
        throw new Error("sdfgb");
        res.send("User data sent");
    } catch(err) {
        res.status(500).send("Some Error, please contact support team");
    }
});

// handle auth middleware for all GET, POST, ... requests
app.use("/admin", adminAuth);

app.post("/user/login", (req,res) => {
    res.send("User logged in successfully!");
});

app.get("/user/data", userAuth, (req,res) => {
    res.send("User data sent.");
});

app.get("/admin/getAllData", (req,res) => {
        res.send("All data sent.");
});

app.delete("/admin/deleteUser", (req,res) => {
        res.send("Deleted a user");
})

app.listen(3000, () => {
    console.log("Server is successfully running on port 3000");
});

