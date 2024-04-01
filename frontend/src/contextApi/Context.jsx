import { createContext, useContext, useState } from "react";

export const authContext = createContext();

 // eslint-disable-next-line react-refresh/only-export-components
export const UseAuthContext = ()=>{
    return useContext(authContext)
}

export const AuthContextProvider = ({children})=>{
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null)

    return <authContext.Provider value={{authUser,setAuthUser}}> 
             {children} 
        </authContext.Provider>
}


    /** Here is all what happening:
        1)we created a context and pass children as a props in it
        2)we created a authUser useState and pass it in value so we can use it any where and set out own values using setAuthUSer
        3)JSON.parse converts string to object. it is taking user values(fullName,userName etc) from localStorage and if no user value it return null
        NOTE:the chat-user is a costum key  used to store data in localStorage you can write anyName
     */