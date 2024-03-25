import User from "../Models/user.model.js";

export const getUserForSidebar = async(req,res)=>{
    try {
        const loggedInUserId = req.user._id 

        const filteredUser = await User.find({
            _id:{$ne: loggedInUserId} 
    //$ne(not equal to) is a mongoDB operator used to remove a field from output. Here The logInUser(me) will be removed from output(sidebar)i.e we cannot send message to us only other users will be shown and send messages to them.
        }).select("-password")

        return res.status(200).json(filteredUser)
        
    } catch (error) {
        console.log("Error in getting UserForSidebar",error.message);
    }
}