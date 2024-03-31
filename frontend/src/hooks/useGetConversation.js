import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversation = () => {
    const [loading, setLoading] = useState(false)
    const [TotalConversations, setTotalConversations] = useState([])

    useEffect(() => {
        const getConversation = async () => {
            try {
                setLoading(true)
                
                const res = await fetch("/api/user")

                const data = await res.json()
                if(data.error){
                    throw new Error(data.error);
                }
                setTotalConversations(data)
                
    
            } catch (error) {
                toast.error(error.message)
            }finally{
                setLoading(false)
            }
        }
    
      getConversation();
    }, [])

    return {loading,TotalConversations}
    
}

export default useGetConversation;