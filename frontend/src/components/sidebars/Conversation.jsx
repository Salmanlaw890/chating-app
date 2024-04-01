import React from 'react'
import useConversationStore from '../../zustand/useConversation'
import { useSocketContext } from '../../contextApi/SocketContext';

const Conversation = ({userData,emoji,lastIndex}) => {
    const {selectedConversation , setSelectedConversation} = useConversationStore();
    // when we click on dev the userData becomes equal to selectedConversation just like setInput(value) in useState (value) equal to input.Additionally zustand is a globalState so we can use UsedData values(_id name etc) anyWhere in any component now by using just as useState [const {selectedConversation , setSelectedConversation} = useConversation();] 
    const isSelected = selectedConversation?._id === userData._id

    const {onlineUser} = useSocketContext();
    const isOnline = onlineUser.includes(userData._id)
    


  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-400 rounded p-2 py-1 cursor-pointer 
      ${isSelected ? "bg-sky-600" : ""}`} onClick={()=>setSelectedConversation(userData)}>
          <div className={`avatar ${isOnline ? "online" : "" }`}>
          <div className='w-12 rounded-full'>
          <img src={userData.profilePic} alt='profilePic'/>
          </div>
          </div>

          <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
              <p className='font-bold text-gray-200'>{userData.fullName}</p>
              <span className='text-xl'>{emoji}</span>
            </div>
          </div>
      </div>


      { !lastIndex && <div className='divider my-0 py-0 h-1'/>}
    </>
  )
}

export default Conversation