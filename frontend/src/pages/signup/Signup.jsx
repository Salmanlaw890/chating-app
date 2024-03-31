import React, { useState } from 'react'
import GenderCheck from './GenderCheck'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";


const Signup = () => {
    const [input, setInput] = useState({
        fullName:"",
        userName:"",
        password:"",
        conformPassword:"",
        gender:""
    })
    const [eyeShow, setEyeShow] = useState(true)

    //this is our costum hook
    const {loading,signup} = useSignup();

    const handleGender = (gender)=>{
        setInput({...input,gender})
        console.log(setInput);
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
    //this signup function is coming from useSignup.js hook and when we submit it well signup us
        await signup(input)
        console.log("Signup",signup);
    }

    const handelEyeShow = ()=>{
        setEyeShow(!eyeShow)
    }

  return (
    <div className='flex flex-col justify-center items-center min-w-72 mx-auto '>
        <div className='w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0 p-3'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Signup  
        <span className='text-blue-500'> Chap App</span>
        </h1>

        <form onSubmit={handleSubmit}>
        <div>
                <label className='label p2'>
                    <span className='text-base label-text text-white'>Name</span>
                </label>
                <input type="text" placeholder="Enter Name" className="input input-bordered w-full max-w-xs bg-gray-800 text-white h-10" value={input.fullName} 
                onChange={(e)=>setInput({...input,fullName:e.target.value})}/>
            </div>

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
                <input type={eyeShow ? "password" : "text"} placeholder="Enter Password" className="input input-bordered w-full max-w-xs bg-gray-800 text-white h-10" value={input.password}
                    onChange={(e)=>setInput({...input,password:e.target.value})}
                />

                <div onClick={handelEyeShow}>
                {eyeShow ? (<FaRegEye className='outline-none text-gray-400 font-bold hover:text-white absolute right-2 bottom-2.5'/>)
                :
                (<FaRegEyeSlash  className='outline-none text-gray-400 font-bold hover:text-white absolute right-2 bottom-2.5'/>)}
                </div>
            </div>

            <div className='relative'>
                <label className='label p2'>
                    <span className='text-base label-text text-white'>Conform Password</span>
                </label>
                <input type={eyeShow ? "password" : "text"} placeholder="Conform Password" className="input input-bordered w-full max-w-xs bg-gray-800 text-white h-10" value={input.conformPassword}
                    onChange={(e)=>setInput({...input,conformPassword:e.target.value})}
                />

                <div onClick={handelEyeShow}>
                {eyeShow ? (<FaRegEye className='outline-none text-gray-400 font-bold hover:text-white absolute right-2 bottom-2.5'/>)
                :
                (<FaRegEyeSlash  className='outline-none text-gray-400 font-bold hover:text-white absolute right-2 bottom-2.5'/>)}
                </div>
            </div>

            <GenderCheck onCheckBoxChange = {handleGender} SelectedGender = {input.gender} />

            <Link to={"/login"} className="link text-sm text-white hover:underline hover:text-blue-600 mt-2">Account Already Created</Link>
            <div>
            <button type='submit' className="btn btn-block btn-sm mt-2 bg-gray-800 text-white hover:bg-gray-600" disabled={loading}>
                {loading ? 
                <span className='loading loading-spinner'></span>
                : "Signup" }
            </button>
            </div>

        </form>

        </div>

    </div>
  )
}

export default Signup

