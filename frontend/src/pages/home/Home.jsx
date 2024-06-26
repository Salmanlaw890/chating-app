import React from 'react'
import MessageContainer from '../../components/message/MessageContainer'
import MySidebar from '../../components/sidebars/MySidebar'



const Home = () => {
  return (
    <>
        <div className='flex sm:h-[450px] md-h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <MySidebar/>
        <MessageContainer/>
        </div>
    </>
  )
}

export default Home