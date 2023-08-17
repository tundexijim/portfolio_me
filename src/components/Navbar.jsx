import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
function Navbar() {
  const [showNav, setshowNav] = useState(false)
  return (
    <div className='navbar'>
    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path fill="#33323D" fill-rule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/></svg>
    <div className={!showNav ? "nav" : "nav navshow"}>
    <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")}to='/' onClick={()=> setshowNav(!showNav)}>HOME</NavLink>
    <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")}  to='/projects' onClick={()=> setshowNav(!showNav)}>PROJECTS</NavLink>
    <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")}  to='/contact' onClick={()=> setshowNav(!showNav)}>CONTACT ME</NavLink>
    </div>
    <div className='menu' onClick={()=> setshowNav(!showNav)}>{!showNav ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30} />}</div>
    </div>
  )
}

export default Navbar