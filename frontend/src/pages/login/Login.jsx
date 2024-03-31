import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";



const Login = () => {
    const {loading,login} = useLogin();

    const [eyeShow, setEyeShow] = useState(true)
    const [input, setInput] = useState({
        userName:"",
        password:""
    })

    const handleSubmit = async (e)=>{
        e.preventDefault();
        await login(input)
    }

    const handelEyeShow = ()=>{
        setEyeShow(!eyeShow)
    }

  return (
    <div className='flex flex-col justify-center items-center min-w-72 mx-auto'>
    <div className='w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0 p-3'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Login  
        <span className='text-blue-500'> Chap App</span>
        </h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label className='label p2'>
                    <span className='text-base label-text text-white'>Username</span>
                </label>
                <input type="text" placeholder="Enter Username" className="input input-bordered w-full max-w-xs bg-gray-800 text-white h-10" value={input.userName}
                    onChange={(e)=>setInput({...input,userName:e.target.value})}
                />
            </div>

            <div className='relative'>
                <label className='label p2'>
                    <span className='text-base label-text text-white'>Password</span>
                </label>
                <input
                type={eyeShow ? "password" : "text"} 
                placeholder="Enter Password" 
                className="input input-bordered w-full max-w-xs bg-gray-800 text-white h-10" 
                value={input.password}
                onChange={(e)=>setInput({...input,password:e.target.value})}/>

                <div onClick={handelEyeShow}>
                {eyeShow ? (<FaRegEye className='outline-none text-gray-400 font-bold hover:text-white absolute right-2 bottom-2.5'/>)
                :
                (<FaRegEyeSlash  className='outline-none text-gray-400 font-bold hover:text-white absolute right-2 bottom-2.5'/>)}
                </div>
            </div>

            <Link to={"/signup"} className="link text-sm text-white hover:underline hover:text-blue-600 mt-2">Don't have an account</Link>
            <div>
            <button type='submit' className="btn btn-block btn-sm mt-2 bg-gray-800 text-white hover:bg-gray-600" disabled={loading}>
                {loading ? <span className='loading loading-spinner'></span>
                : "Login"
                }
            </button>
            </div>

        </form>

    </div>

    </div>
  )
}

export default Login








