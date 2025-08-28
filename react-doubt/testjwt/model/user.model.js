import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    username:{
        type:String,
        trim: true
    }
});
export const User = mongoose.model("user",userSchema);
// Model Trun into Model Class
// Provide interface to interact with database
//