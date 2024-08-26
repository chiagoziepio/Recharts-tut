import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Aside from './Aside'

const Layout = () => {
  return (
    <div className='bg-[#141313] h-full text-white flex flex-col relative '>
        <Header/>
        <div className='flex gap-x-[24px] h-[90%]'>
        <Aside />
        <div className='w-[80%] h-full'>
            <Outlet/> 
        </div>
        </div>
        
    </div>
  )
}

export default Layout