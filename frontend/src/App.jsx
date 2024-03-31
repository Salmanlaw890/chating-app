import React from 'react'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import { Navigate ,Routes, Route } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import { UseAuthContext } from './contextApi/Context'


const App = () => {
  const {authUser} = UseAuthContext();
  return (
    <>
    <div className='p-4 h-screen flex justify-center items-center'>
      <Routes>
      {/* if authUser i.e user is authenticated(present) then Navigate */}
        <Route path="/" element={ authUser ? <Home/> : <Navigate to={"/login"}/> } />
        <Route path="/login" element={ authUser ? <Navigate to={"/"}/> : <Login/> } />
        <Route path="/signup" element={authUser ? <Navigate to={"/"}/> :  <Signup/> } />
      </Routes>
      <Toaster/>

    </div>
    </>
  )
}

export default App
