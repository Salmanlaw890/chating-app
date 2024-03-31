import { useState } from "react"
import { UseAuthContext } from "../contextApi/Context";
import toast from "react-hot-toast";


const useLogin = ()=>{
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = UseAuthContext();

    const login = async ({userName,password})=>{
        const success = handleLoginError({userName,password})
        if(!success) return;

        try {
            setLoading(true)
    
            const res = await fetch("/api/auth/login",{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body:JSON.stringify({userName,password})
            })

            const data =await res.json();
            if(data.error){//if any error in response from server
                throw new Error(data.error)
            }

            localStorage.setItem("chat-user",JSON.stringify(data))
            setAuthUser(data);
            
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    return {loading,login}
    
}

export default useLogin;

function handleLoginError({userName,password}){
    if(!(userName || password)){
        toast.error("please fill all the inputs")
        return false
    }
    return true;
}