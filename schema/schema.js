const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    userName :{
        type :String,
        require :true
    },
    email :{
        type :String,
        require :true
    },
    hashedpassword :{
        type :String,
        require :true
    },
    
    role :{
        type :String,
        require :true
    }
})

module.exports= mongoose.model("userdata",userschema)