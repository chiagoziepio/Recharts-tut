import {Routes,Route} from "react-router-dom"
import Login from "./components/Login"
import Layout from "./components/Layout"
import Home from "./components/Home"
import DashBoard from "./components/DashBoard"
import AdminPanel from "./components/AdminPanel"
import SuperAdminPanel from "./components/SuperAdminPanel"
import ContextProvider from "./Utils/context"
import Loader from "./Loader/Loader"
import { useEffect, useState } from "react"
function App() {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  if(loading){
    return <Loader/>
  }
  return (
      <div className="min-h-[100vh]">
    <ContextProvider>

        <Routes>
          <Route path="/" element ={<Login/>}/>
          <Route path="/main" element = {<Layout/>}>
              <Route index element = {<Home/>}/>
              <Route path="/main/dashbord" element ={<DashBoard/>}/>
              <Route path = "/main/adminpanel" element = {<AdminPanel/>}/>
              <Route path = "/main/superadminpanel" element = {<SuperAdminPanel/>}/>
          </Route>
        </Routes>
    </ContextProvider>
      </div>
  )
}

export default App
