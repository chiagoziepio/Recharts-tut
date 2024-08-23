import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Aside from './Aside'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Aside/>
        <Outlet/>
    </div>
  )
}

export default Layout