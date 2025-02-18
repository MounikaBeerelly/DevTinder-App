const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://DevTinder:DevTinder@devtinder.8oxmp.mongodb.net/DevTinder"
    );
};

module.exports = connectDB;

