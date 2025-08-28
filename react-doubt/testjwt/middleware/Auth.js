import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const auth = async(request,response,next)=>{
   try{
      let token = request.headers.authorization;
      if(!token)
        throw new Error();
      token = token.split(" ")[1];
      jwt.verify(token,process.env.TOKEN_SECRET);
      console.log(jwt.decode(token));
      next();
    }
   catch(err){
    return response.status(401).json({error: "Unauthrized access"});
   }
}