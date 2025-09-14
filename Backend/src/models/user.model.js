import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    age:{
        type:Number,
        required:true,

    },
    ten_class:{
        type:Number
    },
    twelve_class:{
        type:Number
    },
    location:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,

    }

})

export const User = mongoose.model("User", userSchema)






