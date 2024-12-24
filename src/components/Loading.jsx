import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loading() {
  return (
    <div className='absolute flex justify-center items-center w-full h-full bg-white z-50'>
        <AiOutlineLoading3Quarters className="text-6xl animate-spin" />
    </div>
  )
}

export default Loading