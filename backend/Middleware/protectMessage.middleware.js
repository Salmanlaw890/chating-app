import  jwt  from "jsonwebtoken";
import User from "../Models/user.model.js";

const protectMessage = async(req,res,next)=>{
    try {
        const token = req.cookies?.jwt;
        if(!token){
           return res.status(400).json({error:"token not exist"}) 
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        if(!decoded){
            return res.status(400).json({error:"token decoding error"}) 
        }

        const user = await User.findById(decoded.userId) //userId is came form generateToken.js
        if(!user){
            return res.status(400).json({error:"user does not exist"}) 
        }

        req.user = user;

        next();

    } catch (error) {
        console.log("protectMessage middleware error",error.message);
        
    }
}

export default protectMessage;