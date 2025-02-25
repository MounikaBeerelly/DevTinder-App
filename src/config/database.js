const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://DevTinder:Wx47olCQN6nvEGoT@devtinder.8oxmp.mongodb.net/DevTinder"
    );
};

module.exports = connectDB;

