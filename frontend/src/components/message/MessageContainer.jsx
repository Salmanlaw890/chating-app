import React, { useEffect } from 'react'
import MessageInput from './MessageInput'
import AllMessages from './AllMessages'
import NoSelectedChat from "./NoSelectedChat"
import useConversationStore from '../../zustand/useConversation'

const MessageContainer = () => {
     const {selectedConversation,setSelectedConversation} = useConversationStore();

    useEffect(() => {
      return ()=> setSelectedConversation(null)
    }, [setSelectedConversation])
    
  return (
    <div className='md:min-w-[450px] flex flex-col'>
    {!selectedConversation ? <NoSelectedChat/> : 
    <>
        {/* Header */}
        <div className='bg-slate-500 px-4 py-2 mb-2'>
          <span className='label-text'>To: </span>
          <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
        </div>

        <AllMessages/>
        <MessageInput/>
      </>
    }
      
    </div>
  )
}

export default MessageContainer



