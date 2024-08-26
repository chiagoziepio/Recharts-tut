import React from 'react'
import { FaEllo } from "react-icons/fa";

const Loader = () => {
  return (
    <div className='h-[100vh] bg-slate-800 flex justify-center items-center'>
        <div>
                <FaEllo size={50} className='text-slate-100'/>
        </div>
    </div>
  )
}

export default Loader