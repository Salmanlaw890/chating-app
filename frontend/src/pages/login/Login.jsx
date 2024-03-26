import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center min-w-72 mx-auto'>
    <div className='w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0 p-3'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Login  
        <span className='text-blue-500'> Chap App</span>
        </h1>
        <form>
            <div>
                <label className='label p2'>
                    <span className='text-base label-text text-white'>Username</span>
                </label>
                <input type="text" placeholder="Enter Username" className="input input-bordered w-full max-w-xs bg-gray-800 text-white h-10" />
            </div>

            <div>
                <label className='label p2'>
                    <span className='text-base label-text text-white'>Password</span>
                </label>
                <input type="text" placeholder="Enter Password" className="input input-bordered w-full max-w-xs bg-gray-800 text-white h-10" />
            </div>

            <a href='#' className="link text-sm text-white hover:underline hover:text-blue-600 mt-2">Don't have an account</a>
            <div>
            <button className="btn btn-block btn-sm mt-2 bg-gray-800 text-white hover:bg-gray-600">Login</button>
            </div>

        </form>

    </div>

    </div>
  )
}

export default Login








//! Starter code
// const Login = () => {
//     return (
//       <div className='flex flex-col justify-center items-center min-w-72 mx-auto'>
//       <div className='w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0 p-3'>
//           <h1 className='text-3xl font-semibold text-center text-gray-300'>Login  
//           <span className='text-blue-500'> Chap App</span>
//           </h1>
//           <form>
//               <div>
//                   <label className='label p2'>
//                       <span className='text-base label-text text-white'>Username</span>
//                   </label>
//                   <input type="text" placeholder="Enter Username" className="input input-bordered w-full max-w-xs bg-gray-800 text-white h-10" />
//               </div>
  
//               <div>
//                   <label className='label p2'>
//                       <span className='text-base label-text text-white'>Password</span>
//                   </label>
//                   <input type="text" placeholder="Enter Password" className="input input-bordered w-full max-w-xs bg-gray-800 text-white h-10" />
//               </div>
  
//               <a href='#' className="link text-sm text-white hover:underline hover:text-blue-600 mt-2">Don't have an account</a>
//               <div>
//               <button className="btn btn-block btn-sm mt-2 bg-gray-800 text-white hover:bg-gray-600">Login</button>
//               </div>
  
//           </form>
  
//       </div>
  
//       </div>
//     )
//   }