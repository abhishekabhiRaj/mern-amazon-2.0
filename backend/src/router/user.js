import express from "express";
import { UserModel } from "../model/UserModel.js";

const router = express.Router();

router.post('/register', async (req, res)=>{
    const { name,  mobile, email,  password } = req.body;
    console.log(name)
    const user = await UserModel.findOne({mobile});
    if(user){
        return res.json({"message":"User already registered", status:200})
    }else{
        const newUser = new UserModel({
            name,
            mobile,
            email,
            password
        });
        newUser.save();
        return res.json({"message":"User register successfully", status:200})
    }
} )


router.post('/login', async (req,res)=>{
    const { email, password } = req.body;
    const user = await UserModel.findOne({email});
    if(user){
        if(user.password == password){
            return res.json({"message":"Logged in successfully.", data:user, status:200})
        }else{
            return res.json({"message":"Incorrect password", status:401})
        }
    }
    else{
    return res.json({"message":"User does not exit.", status:401})
    }
})

export { router as UserRouter } 