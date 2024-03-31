import React from 'react'
import useConversationStore from "../../zustand/useConversation"
import { UseAuthContext } from '../../contextApi/Context'
import {extractTime} from "../../utils/extractTime"

const Message = ({message}) => {
  const {selectedConversation} = useConversationStore()
  const {authUser} = UseAuthContext();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-start" : "chat-end";
  const ProfilePicture = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;
  const chatBgBlue = fromMe ? "bg-blue-500" : "";
  const formattedTime = extractTime(message.createdAt)
  
  return (
    <div className={`chat ${chatClassName}`}>
     <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="avatar" src="https://avatar.iran.liara.run/public/9" />
    </div>
  </div>
  <div className={`chat-bubble text-white ${chatBgBlue}`}>{message.message}</div>
  <div className="chat-footer opacity-50 text-xs text-white flex gap-1 items-center">{formattedTime}</div>
    </div>
  )
}

export default Message