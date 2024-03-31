import React, { useState } from 'react'
import { BsSend } from "react-icons/bs";
import useSendMessage from '../../hooks/useSendMessage';


const MessageInput = () => {
  const [input, setInput] = useState("")
   const {loading,sendMessage} = useSendMessage()

   const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!input) return;
   await sendMessage(input);
   setInput("")
   }
  return (
    <>
      <form className='px-4 my-3'>
        <div className='w-full relative'>
          <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 text-white' placeholder='Send message'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
          />

          <button onClick={handleSubmit} type='submit' className='text-white absolute inset-y-0 end-0 flex items-center pe-3'>
          {loading ? <span className='loading loading-spinner'></span> : <BsSend /> }
          </button>
        </div>
      </form>
    </>
  )
}

export default MessageInput