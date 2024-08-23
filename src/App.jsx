import {Routes,Route} from "react-router-dom"
import Login from "./components/Login"
import Layout from "./components/Layout"
import Home from "./components/Home"
import DashBoard from "./components/DashBoard"
import AdminPanel from "./components/AdminPanel"
function App() {
  
  return (
    <>
      <div className="App">

        <Routes>
          <Route path="/" element ={<Login/>}/>
          <Route path="/main" element = {<Layout/>}>
              <Route index element = {<Home/>}/>
              <Route path="/main/dashbord" element ={<DashBoard/>}/>
              <Route path = "/main/adminpanel" element = {<AdminPanel/>}/>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
