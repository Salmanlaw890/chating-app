import React from 'react'
import MessageInput from './MessageInput'
import AllMessages from './AllMessages'
import NoSelectedChat from "./NoSelectedChat"

const MessageContainer = () => {
    let noChatSelected = true;
  return (
    <div className='md:min-w-[450px] flex flex-col'>
    {noChatSelected ? <NoSelectedChat/> : 
    <>
        {/* Header */}
        <div className='bg-slate-500 px-4 py-2 mb-2'>
          <span className='label-text'>To: </span>
          <span className='text-gray-900 font-bold'>John Snow</span>
        </div>

        <AllMessages/>
        <MessageInput/>
      </>
    }
      
    </div>
  )
}

export default MessageContainer



