import User from "../Models/user.model.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookies from "../utils/generateTokens.js";


export const signup = async(req,res)=>{
    try {
        const {fullName , userName , password , confirmPassword , gender} = req.body;
        if(password !== confirmPassword){
            return res.status(400).json({error:"password not matching"})
        }

        const user = await User.findOne({userName});
        if(user){
            return res.status(400).json({error:"user already exist"})
        }

        //todo Hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt)

        //todo put random profilePic using https://avatar-placeholder.iran.liara.run/
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = new User({
            fullName,
            userName,
            password: hashPassword,
            gender,
            profilePic: gender === "MALE"?boyProfilePic : girlProfilePic
        })

      if(newUser){
        //generate tokens here
        generateTokenAndSetCookies(newUser._id,res)

        await newUser.save();

        return res.status(200).json({
            _id:newUser._id,
            userName:newUser.userName,
            fullName:newUser.fullName,
        })
      }else{
        return res.status(500).json({error:"invalid user data"})
      }

    } catch (error) {
        console.log("error in signup" ,error.message);
        res.status(500).json({error:"internal Server Error"})
    }
}


export const login = async(req,res)=>{
    try {
        const {userName,password} = req.body;
        const user = await User.findOne({userName})
        const passwordIsCorrect = await bcrypt.compare(password,user?.password || "")
        if(!user && !passwordIsCorrect){
            return  res.status(400).json({error:"invalid user and password"})
        }
        generateTokenAndSetCookies(user._id,res);
        
        return res.status(200).json({
            _id:user._id,
            userName:user.userName,
            password:user.password,
        })

        
    } catch (error) {
        console.log("login error",error.message);
        res.status(400).json({error:"internal Server Error"})
    }
}


export const logout = async(req,res)=>{
    try {
       
        res.cookie("jwt","",{maxAge:0})

        return res.status(200).json({message:"logout success"})
        
    } catch (error) {
        console.log("logout error",error);
        res.status(400).json({error:"internal Server Error"})
    }
}

