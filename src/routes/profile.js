const express = require("express");
const { userAuth } = require("../middlewares/auth.js");
const { validateProfileData } = require("../utils/validations.js");

const profileRouter = express.Router();

profileRouter.get("/profile/view", userAuth, async (req, res) => {
    try {
        const user = req.user;
        res.send(user);
    }
    catch(err) {
        res.status(404).send("ERROR :" + err.message);
    }
});

profileRouter.patch("/profile/edit", userAuth, async (req,res) => {
    try {
        if(!validateProfileData(req)) {
            throw new Error("Invalid Edit Request");
        }
        const loggedInUser = req.user;
        Object.keys(req.body).forEach(key => loggedInUser[key] = req.body[key]);
        await loggedInUser.save();
        res.json({
            message : `${loggedInUser.firstName}, your Profile updated successfully`, 
             data : loggedInUser 
         });
    }
    catch(err) {
        res.status(400).send("ERROR: " + err.message);
    }
});


module.exports = profileRouter;