import { Server } from "socket.io";
import http from "http";
import express from "express";
import cors from "cors"


// Here, you're creating an Express application (app) and then creating an HTTP server using Node.js's built-in http module (http.createServer(app)).
const app = express();
const server = http.createServer(app);

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))



//You're then creating a Socket.IO server (io) by passing the previously created HTTP server (server) to it.
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

 

// todo for user online check create an obj where userId is key and socketId is value
//creating object on which we can map to get everySingle user
const userSocketMap = {}; //{userId:socketId}


export const getReceiverSocketId = (receiverId)=>{
  return userSocketMap[receiverId];
}


io.on("connection", (socket) => {
  console.log("connected User is :", socket.id)


  //handshake is a process that occurs when a client initially connects to the server the client and server exchange information necessary to establish the connection  the userId query parameter sent by the client during the connection handshake.
  const userId = socket.handshake.query.userId;
  if(userId != "undefined") {
    userSocketMap[userId] = socket.id;
  }

  // io.emit is used to send event to all the connected users
  //*Object.keys() is a built-in JavaScript method that takes an object as its argument and returns an array containing the keys of that object. userSocketMap are the user IDs. Object.keys(userSocketMap) returns an array containing all the keys (user IDs) of the userSocketMap object.
  io.emit("getOnlineUser",Object.keys(userSocketMap))




  //socket.on is used to listen to events(socket:created above) and it can be used on both server and client side.
    socket.on("disconnect", () => {
    console.log("disconnected User is:", socket.id);

    delete userSocketMap[userId];
    io.emit("getOnlineUser",Object.keys(userSocketMap ))
  })
  
})
//* io.on for connection events because io represents the Socket.IO server instance, while socket.on is used within the connection event handler to listen for disconnection events on individual client sockets.

export { app, io, server };
