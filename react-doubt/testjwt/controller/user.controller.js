import bcrypt from "bcryptjs"
import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const signIn = async(request,response,next)=>{
    try{
       let {email,password} = request.body;
       let user = await User.findOne({email});
       if(!user)
         return response.status(401).json({error: "Unauthorized user | Invalid email"});
         
      let status = await bcrypt.compare(password,user.password);
      return status ? response.status(200).json({message: "Sign in success", token: generateToken({id: user._id,email: user.email})}) : response.status(401).json({error:"Unauthorized user | Invalid password"});
    }
    catch(err){
        return response.status(500).json({error: "Internal Server Error"});
    }
}
export const signUp = async(request,response,next)=>{
  let {username,email,password} = request.body;
  let saltKey = await bcrypt.genSalt(12);
  password = await bcrypt.hash(password,saltKey);
  User.create({username,email,password})
  .then(result=>{
    return response.status(201).json({message: "Sign up success"});
  }).catch(err=>{
    return response.status(500).json({error:"Internal Server Error.."});
  })
}

export const generateToken = (payload)=>{
    return jwt.sign(payload,process.env.TOKEN_SECRET);
}

export const fetch = async(request,response,next)=>{
    return response.status(200).json({fruitList:["Banana","Apple","Mango","Grapes"]});
}