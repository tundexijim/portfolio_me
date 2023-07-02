import React from 'react'
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className='navbar'>
    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path fill="#33323D" fill-rule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/></svg>
    <div className="nav">
    <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")}to='/'>HOME</NavLink>
    <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")}  to='/projects'>PROJECTS</NavLink>
    <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")}  to='/contact'>CONTACT ME</NavLink>
    </div>
    </div>
  )
}

export default Navbar