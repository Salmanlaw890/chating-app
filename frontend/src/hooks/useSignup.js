import { useState } from "react"
import toast from 'react-hot-toast';
import { UseAuthContext } from "../contextApi/Context";


const useSignup = () => {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = UseAuthContext()

    // this signup function is accessed in handelSubmit() in Signup.jsx
    const signup = async({fullName,userName,password,conformPassword,gender}) => {

       const success =  handelInputError({fullName,userName,password,conformPassword,gender})
       if(!success) return;
       /** These above two lines is for checking that the input values are correct !Just as we checks userId in our backend! if not i.e(!success)
        then we simply return out of this signup function and do not execute below code.
        */

        try {
            const res = await fetch('/api/auth/signup',{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify({fullName,userName,password,conformPassword,gender})
                //The Fetch sends user data to backend for processing
            })

            const data = await res.json()//awaits the response from the server, parsing it as JSON.
            if(data.error){//if any error in response from server
                throw new Error(data.error)
            }
            //todo 1) set/save user values in local storage
            //because when we refresh the page we go to Home page not come to signup again when we are logged in already.
            //stores <data> in localStorage using setItem,by chat-user key in stringFormat.
            localStorage.setItem("chat-user",JSON.stringify(data))

            //todo 2) then we use contextApi to send user values to all pages.
            setAuthUser(data);
            //now send the <data> of authenticated-user(bc all the checks are passed and then it creates data finally)using setAuth ContextApi
        } catch (error) {
            toast.error(error.message)

        }finally{
            setLoading(false)
        }
    }

    return {loading, signup}
    //at end return loading if data not camed or function signup if camed
}

export default useSignup


function handelInputError({fullName,userName,password,conformPassword,gender}){
    if(!(fullName || userName || password || conformPassword || gender)){
       toast.error('please fill in all fields') 
       return false //function signup will not continue further code.
    }

    if(password !== conformPassword){
        toast.error('password does not match')
        return false
    }

    if(password.length < 6){
        toast.error('password must be at least 6 characters')
        return false
    }

    //and if all the checks are passed then
    return true 
    //and if return true the the above if(!success) will also not run and try-catch runs
}