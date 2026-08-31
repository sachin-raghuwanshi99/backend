const mongoose = require('mongoose')
const app = require('../app')

const userSchema = new mongoose.Schema ({
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password: String
})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel;