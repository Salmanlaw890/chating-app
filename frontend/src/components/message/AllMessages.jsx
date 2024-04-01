import React, { useEffect, useRef } from 'react'
import useGetMessage from '../../hooks/useGetMessage'
import Message from "./Message"
import MessageSkeleton from "../Skeleton/MessageSkeleton"
import useListenMessages from '../../hooks/useListenMessages'


const AllMessages = () => {
  const {loading,messages} = useGetMessage()
  //* this will listen to message coming from socket(user to DB & DB to here)
  useListenMessages();
  const lastMessageRef = useRef()

  useEffect(()=>{
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior : "smooth"})
      // current ref value, scrollIntoView is a builtIn DOM method
    }, 100);
  },[messages])
  
  
  return (
    <div className='px-4 flex-1 overflow-auto'>

{!loading && messages.length > 0 && messages.map((message)=>{
      return (
        <React.Fragment key={message._id}>
          <div key={message._id} ref={lastMessageRef}>
          <Message message={message}/>
          </div>
        </React.Fragment>
      )
    })}

    {loading && [...Array(3)].map((_ , index)=>(
      <MessageSkeleton key={index}/>
    ))}
    
    {!loading && messages.length === 0 && (
      <p className='text-center text-white m-3'>Send a message to start conversation</p>
    )}

    </div>
  )
}

export default AllMessages