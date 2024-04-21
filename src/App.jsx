// import { useState } from "react"
import "./index.css"
import SideBar from "./Components/SideBar"
import Overview from "./Components/Overview"
import Header from "./Components/Header"


function App() {
// const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

// const OpenSidebar = () => {
//   setOpenSidebarToggle(!openSidebarToggle)
// }

  return (
    <>
    <div className="grid-container">
    <SideBar />
    <Header />
    <Overview /> 
    </div>
    </>
  )
}

export default App

