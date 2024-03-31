import React from 'react'
import SearchInput from "./SearchInput"
import LogoutButton from "./LogoutButton"
import AllConversations from './AllConversations'


const MySidebar = () => {
  return (
    <div className='flex flex-col border-r bg-slate-500 p-4 '>
        <SearchInput/>
        <div className='divider px-3 mb-0'></div>
        <AllConversations/>
        <LogoutButton/>
        
    </div>
  )
}

export default MySidebar