const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect("mongodb+srv://sachin:jWo4fJq46mxHGPYI@cluster0.qnje7ut.mongodb.net/halley")

    console.log("connected to db")
}

module.exports = connectDB