import React from 'react'

const MessageSkeleton = () => {
  return (
    <>
    <div className="flex flex-col gap-4 w-52 mb-10">
      <div className="flex gap-4 items-center">
        <div className="skeleton w-10 h-10 rounded-full shrink-0 bg-gray-600"></div>
        <div className="flex flex-col gap-2">
          <div className="skeleton h-5 w-20  bg-gray-600"></div>
          <div className="skeleton h-5 w-28  bg-gray-600"></div>
        </div>
      </div>
    </div>


    <div className="flex flex-col gap-4 w-52 mt-10 float-end">
      <div className="flex gap-4 items-center">
        <div className="skeleton w-10 h-10 rounded-full shrink-0 bg-gray-600"></div>
        <div className="flex flex-col gap-2">
          <div className="skeleton h-5 w-20  bg-gray-600"></div>
          <div className="skeleton h-5 w-28  bg-gray-600"></div>
        </div>
      </div>
    </div>
  </>
  )
}

export default MessageSkeleton