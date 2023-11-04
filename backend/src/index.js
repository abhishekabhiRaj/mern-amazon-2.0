import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import { UserRouter } from './router/user.js';


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/amazon2')

app.use('/', UserRouter)

app.listen(8000, ()=>{
    console.log("Server running")
})