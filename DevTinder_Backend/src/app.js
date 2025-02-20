const express = require("express");
const connectDB = require("./config/database.js");
const app = express();
const authRouter = require('./routes/auth.js');
const profileRouter = require('./routes/profile.js');
const requestRouter = require('./routes/request.js');
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user.js");

app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

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



