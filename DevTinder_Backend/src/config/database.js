const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://DevTinder:DevTinder@devtinder.8oxmp.mongodb.net/DevTinder"
    );
};

connectDB().then(() => {
    console.log("Database connection established...")
}).catch(err => {
    console.log("Database cannot be connected!!")
});