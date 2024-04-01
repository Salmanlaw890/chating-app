import { createContext, useEffect, useState,useContext } from "react";
import { UseAuthContext } from "./Context";
import io from "socket.io-client"



export const socketContext = createContext();

export const useSocketContext = ()=>{
    return useContext(socketContext);
}

export const SocketContextProvider = ({children})=>{
    const [socket, setSocket] = useState(null)
    const [onlineUser, setOnlineUser] = useState([])
    const {authUser} = UseAuthContext()


    useEffect(() => {
     if(authUser){
        const socket = io("http://localhost:5000",{
            //for online check
            query:{
                userId : authUser._id
            }
        }
      );
        // once connection is completed setSocket to connection
        setSocket(socket)

        socket.on("getOnlineUser",(user)=>{
            setOnlineUser(user)
        })


        return ()=>{
            //cleanUp at last close connection
            socket.close();
        }

     }else {
        //if already a connection is present then close that 
        if(socket){
            socket.close()
            setSocket(null)
        }
    }
      
    }, [authUser])
    

    return   <socketContext.Provider value={{socket,onlineUser}}>
                {children}
            </socketContext.Provider>
}