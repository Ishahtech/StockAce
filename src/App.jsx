import { useState } from "react"
import "./index.css"
import SideBar from "./Components/SideBar"
import Overview from "./Components/Overview"


function App() {
const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

const OpenSidebar = () => {
  setOpenSidebarToggle(!openSidebarToggle)
}

  return (
    <>
    <div className="grid-container">
    <SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
    { <Overview /> }
    </div>
    </>
  )
}

export default App

