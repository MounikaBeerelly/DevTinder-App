const express = require("express");
const connectDB = require("./config/database.js");
const User = require("./models/user.js");
const app = express();
const { validateSignUpData } = require('./utils/validations.js');
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { userAuth } = require("./middlewares/auth.js");

app.use(express.json());
app.use(cookieParser());

app.post("/signup", async (req,res) => {
    try {
        //Validation of data 
        validateSignUpData(req);
        
        const { firstName, lastName, emailId, password } =  req.body;

        // Encrypt the password then store in the satabase
        const passwordHash = await bcrypt.hash(password, 10);
        
        // Creating new instance of the user model
        const user = new User({
            firstName,
            lastName,
            emailId,
            password: passwordHash,
        });

        await user.save();
        res.send("User added successfully");
    } catch(err) {
        res.status(400).send("Error saving the user: " + err.message);
    }
});

// Login User
app.post("/login", async (req,res) => {
    try {
        const { emailId, password } = req.body;

        const user = await User.findOne({emailId : emailId});

        if(!user) {
            throw new Error("Email Id not present in the DB");
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(isPasswordValid) {

            // create JWT token
            const token = await jwt.sign({_id: user._id}, "DEV@Tinder$790", { 
                expiresIn : "1d"
            });

            // Add a token to the cookie and send the response to the user
            res.cookie("token", token, {
                 httpOnly: true,
                 expires: new Date(Date.now() + 8 * 3600000),
            });
            res.send("Login successfully");
        } else {
            throw new Error("Invalid credentials");
        }
    }
    catch (err) {
        res.status(400).send("ERROR: " + err.message);
    }
});

app.get("/profile", userAuth, async (req, res) => {
    try {
        const user = req.user;
  
        res.send(user);
    }
    catch(err) {
        res.status(404).send("ERROR :" + err.message);
    }
});

app.post("/sendConnectionRequest", userAuth, async (req,res) => {
    const user = req.user;

    // Sending a connection request
    res.send(user.firstName + " sent the Connection request!")
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



