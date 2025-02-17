const express = require("express");

const app = express();

// this will handle only GET call to /user
app.get("/user", (req,res) => {
    res.send({
        firstName : "Avyay",
        lastName : "B"
    });
});

app.post("/user", (req,res) => {
    // saving data to DB
    res.send("Data successfully saved to the database");
});

app.delete("/user", (req,res) => {
    res.send("Data successfully deleted");
});

app.use("/",(req,res) => {
    res.send("Hello from the server");
});

// use will match all the HTTP method API calls to /test
app.use('/test',(req,res) => {
    res.send("Hello the test route");
});

app.listen(3000, () => {
    console.log("Server is successfully running on port 3000");
});