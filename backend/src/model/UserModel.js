import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{type:String},
    mobile:{type:Number},
    email:{type:String},
    password:{type:String},
})


export const UserModel = mongoose.model('users', UserSchema)