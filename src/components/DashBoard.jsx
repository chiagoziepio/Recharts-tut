import React, { useContext } from 'react'
import { context } from '../Utils/context'
const DashBoard = () => {
  const {user} = useContext(context)
  console.log(user);
  
  return (
    <div>DashBoard</div>
  )
}

export default DashBoard