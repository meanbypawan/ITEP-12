import express from "express";
import mongoose from "mongoose";
import UserRouter from "./routes/user.route.js";
import bodyParser from "body-parser";

import dotenv from "dotenv"
dotenv.config();
const app = express();
mongoose.connect("mongodb://localhost:27017/jwtdb")
.then(result=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use("/user",UserRouter);
    app.listen(process.env.PORT,()=>{
        console.log("Server Started...");
    });
}).catch(err=>{
    console.log("Database connection failed..");
})
