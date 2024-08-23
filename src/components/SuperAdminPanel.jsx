import React, { useContext } from 'react'
import { context } from "../Utils/context";
const SuperAdminPanel = () => {
  const {user,setUser} = useContext(context)
  console.log(user);
  
  return (
    <div className=''>SuperAdminPanel</div>
  )
}

export default SuperAdminPanel