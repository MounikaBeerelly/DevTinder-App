const express = require("express");
const connectDB = require("./config/database.js");
const User = require("./models/user.js");

const app = express();

app.post("/signup", async (req,res) => {
    // Creating new instance of the user model
    const user = new User({
        firstName : "Mounika",
        lastName : "B",
        emailId : "mounika@test.com",
        password : "mounika@123",
    });

    try {
        await user.save();
        res.send("User added successfully");
    } catch (err) {
        res.status(400).send("Error saving the user:" + err.message);
    }
});

connectDB()
    .then(() => {
        console.log("Database connection established...")
        app.listen(3000, () => {
            console.log("Server is successfully running on port 3000");
        });
    })
    .catch((err) => {
        console.log("Database cannot be connected!!")
    });



