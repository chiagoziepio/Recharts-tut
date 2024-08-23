import React from 'react'
import { IoSettings } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { BiLogoBitcoin } from "react-icons/bi";

const Header = () => {
  return (
    <header className='h-[70px] flex justify-between items-center bg-black px-[25px]'>
      <div>
        <h3 className='font-bold text-[30px]'><BiLogoBitcoin size={70}/></h3>
      </div>
      <div className=' w-[20%] flex justify-evenly '>
        <FaRegUserCircle size={27}/>
        <IoSettings size={27}/>
        <IoMdLogOut size={27} className='text-red-800'/>
      </div>
    </header>
  )
}

export default Header