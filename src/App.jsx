import {Routes,Route} from "react-router-dom"
import Login from "./components/Login"
import Layout from "./components/Layout"
import Home from "./components/Home"
import DashBoard from "./components/DashBoard"
import AdminPanel from "./components/AdminPanel"
import SuperAdminPanel from "./components/SuperAdminPanel"
function App() {
  
  return (
    <>
      <div className="h-[100vh]">

        <Routes>
          <Route path="/" element ={<Login/>}/>
          <Route path="/main" element = {<Layout/>}>
              <Route index element = {<Home/>}/>
              <Route path="/main/dashbord" element ={<DashBoard/>}/>
              <Route path = "/main/adminpanel" element = {<AdminPanel/>}/>
              <Route path = "/main/superadminpanel" element = {<SuperAdminPanel/>}/>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
