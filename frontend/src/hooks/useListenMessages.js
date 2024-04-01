import { useEffect } from "react"
import {useSocketContext} from "../contextApi/SocketContext"
import useConversationStore from "../zustand/useConversation"

const useListenMessages = () => {
 const {socket} =   useSocketContext()
 const {messages , setMessages} = useConversationStore()

    useEffect(() => {
        //the io of newMEssage is in message Controller
     socket.on("newMessages",(newMessage)=>{
        setMessages([...messages , newMessage])   
     })
    
      return () => {
        socket?.off("newMessage")
      }
    }, [socket,setMessages,messages])
}

export default useListenMessages