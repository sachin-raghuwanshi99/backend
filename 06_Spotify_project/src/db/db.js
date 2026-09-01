const mongoose = require('mongoose');


async function connectDB() {
    
    try {
        
        await mongoose.connect(process.env.MONGO_URI)

        console.log("DB connnected successfully")


    } catch (error) {
        console.error("DB connnected error: ", error)
    }
}

module.exports = connectDB;