import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from 'cors'

import connectMongoDB from "./DB/connectMongoDB.js";
import authRouter from "./Routers/auth.router.js"
import messageRouter from "./Routers/message.router.js"
import userRouter from "./Routers/user.router.js"
import { app, server } from "./Socket/socket.js";


dotenv.config();
const port = process.env.PORT || 5000;
app.use(express.json())
app.use(cookieParser());



app.use("/api/auth",authRouter);
app.use("/api/message",messageRouter);
app.use("/api/user",userRouter)


server.listen(port,()=>{
    connectMongoDB()
    console.log(`listening at port ${port}`);
})