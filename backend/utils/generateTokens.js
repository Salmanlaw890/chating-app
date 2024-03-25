import  Jwt  from "jsonwebtoken";

const generateTokenAndSetCookies = (userId,res)=>{
    const token = Jwt.sign({userId},process.env.ACCESS_TOKEN_SECRET,{expiresIn:"15d"})


    res.cookie("jwt",token, {
        maxAge:15*24*60*60*1000, //in mile second
        httpOnly:true, //prevent xss attack cross-site scripting attack
        sameSite:"strict" //prevent csrf attack cross-site attack request forgery attacks
    })
}



export default generateTokenAndSetCookies;