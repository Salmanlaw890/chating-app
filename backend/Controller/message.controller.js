import mongoose from "mongoose";
import Conversation from "../Models/conversation.model.js"
import Message from "../Models/message.model.js"
import { getReceiverSocketId } from "../Socket/socket.js";
import {io} from "../Socket/socket.js"



export const getMEssagesOfSpecificUsers = async (req,res)=>{
    try {
       const senderId = req.user._id
       const {id: receiverId} = req.params;

       const conversation = await Conversation.findOne({
        participants:{$all:[senderId,receiverId]}
       }).populate("messages")
       //Just like .select("-password") removes things from output .populate("") it sends things to the output. Here the messages only of that participants well be shown.

       if(!conversation){
        return res.status(400).json([])
       }
       
       return res.status(200).json(conversation.messages)
        
    } catch (error) {
        console.log("getMessages bw users error",error.message);
    }
}




export const sendMessage = async(req,res)=>{
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id


        let conversation = await Conversation.findOne({
            participants: {$all:[senderId,receiverId]}
            //it well return elements which contain both sender/receiver id. if an array contain one it well not returned.
        })
        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })//this is in nodejs execution and then we send it to Db using .save()

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }
        
        
        //This well run in parallel
        await Promise.all([conversation.save(),newMessage.save()])
        
        //first we take message from user save it in DB as well as conversation.Now send it to receiver
        //todo socket.io creation
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            //io.to(<socketID>).emit() used to send message ot 1 specific client
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }


        return res.status(200).json({newMessage});
        
    } catch (error) {
        console.log("message sending Error" , error.message);
         
    }
}