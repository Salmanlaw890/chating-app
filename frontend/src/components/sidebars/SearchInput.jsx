import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import useGetConversation from '../../hooks/useGetConversation';
import useConversationStore from "../../zustand/useConversation"
import toast from 'react-hot-toast';


const SearchInput = () => {
  const [search, setSearch] = useState("")
    const {setSelectedConversation} = useConversationStore();
    const {TotalConversations} = useGetConversation()

    const handleSearch = (e)=>{
        e.preventDefault();
        if(!search) return;
        if(search.length < 3 ){
          return toast.error("please enter correct name")
        }
        const conversation = TotalConversations.find((name) => 
        name.fullName.toLowerCase().includes(search.toLowerCase()))
        //find fullName and check if it is included(present) in search or not

        if(conversation){
          setSelectedConversation(conversation)
          setSearch("")
        }
        if(!conversation){
          toast('User Not Exist',
          {
            icon: '😞',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }
        );
        }
    }

  return (
    
      <form onSubmit={handleSearch} className='flex items-center gap-2 overflow-hidden'>
      <input type="text" placeholder='Search...' className='input h-[2.5rem] input-bordered rounded-full bg-gray-800 text-white my-2'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
       />
      <button type='submit' className=' w-[2.5rem] h-[2.4rem] flex justify-center items-center rounded-full bg-sky-500 text-white hover:bg-blue-300'>
      <IoSearch className='w-6 h-6 outline-none '/>
      </button>
      </form>
    
  )
}

export default SearchInput