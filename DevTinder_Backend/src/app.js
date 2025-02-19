const express = require("express");
const connectDB = require("./config/database.js");
const app = express();
const authRouter = require('./routes/auth.js');
const profileRouter = require('./routes/profile.js');
const requestRouter = require('./routes/request.js');
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);

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



