const mongoose = require("mongoose");


const Userschema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            unique : true ,
            require: true,
        },
        review: {
            type: String,
            require: true
        },
        discription: {
            type: String ,
            minLength : 10 
        },
        status : {
            type : Boolean,
            default : true
        }
    }
)

const usermodel = mongoose.model("users" , Userschema)

module.exports = usermodel;