const express = require("express");
const { validateSignUpData } = require('../utils/validations.js');
const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const { userAuth } = require("../middlewares/auth.js");

const authRouter = express.Router();

authRouter.post("/signup", async (req,res) => {
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

authRouter.post("/login", async (req,res) => {
    try {
        const { emailId, password } = req.body;

        const user = await User.findOne({emailId : emailId});

        if(!user) {
            throw new Error("Email Id not present in the DB");
        }
        const isPasswordValid = await user.validatePassword(password);

        if(isPasswordValid) {
            const token = await user.getJWT();

            // Add a token to the cookie and send the response to the user
            res.cookie("token", token, {
                 httpOnly: true,
                 expires: new Date(Date.now() + 8 * 3600000),
            });
            res.send(user);
        } else {
            throw new Error("Invalid credentials");
        }
    }
    catch (err) {
        res.status(400).send("ERROR: " + err.message);
    }
});

authRouter.post("/logout", async (req,res) => {
    
    res.cookie("token", null, {
        expires: new Date(Date.now()),
    });
    res.send("Logout successful!!");
});

module.exports = authRouter;