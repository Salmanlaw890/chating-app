import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation';
import {getFunEmoji} from "../../utils/funEmoji"

const AllConversations = () => {
  const  {loading , TotalConversations} = useGetConversation()
  
  return (
    <div className='py-2 flex flex-col overflow-auto'>

        {/* conversations from useGetConversation has user data(name,pic etc) from DB and we are mapping on them and sending each one key and all user data(name,pic etc) in DB into to the  <Conversation> as props to use our desired values i.e name and avatar from it. 
        also random emoji from utils and lastIndex is for not putting the divider line in last*/}
        {TotalConversations.map((userData , idx)=>{
          return (  
              <React.Fragment key={userData._id}>
                <Conversation 
                  key={userData._id}
                  userData={userData}
                  emoji={getFunEmoji()}
                  lastIndex={idx === TotalConversations.length - 1}
          />
          </React.Fragment>
          )
        })}
           
        {loading ? <span className='loading loading-spinner'></span> : ""}
    </div>
  )
}

export default AllConversations