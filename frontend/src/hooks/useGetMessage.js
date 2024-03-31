
import { useEffect, useState } from 'react'
import useConversationStore from '../zustand/useConversation'
import toast from 'react-hot-toast'

const useGetMessage = () => {
  const [loading, setLoading] = useState(false)
  const {messages,setMessages,selectedConversation}  = useConversationStore();

  useEffect(() => {
    const getMessages = async ()=>{
        try {
            setLoading(true)
    
            const res =await fetch(`/api/message/${selectedConversation?._id}`)
    
            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }
    
            setMessages(data)
            
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
      }
      
      getMessages()
      
   
  }, [selectedConversation?._id,messages.length])
  

  return { messages,loading}
}

export default useGetMessage