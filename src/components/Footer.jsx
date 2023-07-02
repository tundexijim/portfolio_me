import React from 'react'
import { NavLink } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
function Footer() {
  return (
    <div className='footer'>
        <div className="nav">
        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path fill="#ffffff" fill-rule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/></svg>
        <div className='navlink'>
        <NavLink className='link'>HOME</NavLink>
        <NavLink className='link'>PROJECTS</NavLink>
        <NavLink className='link'>CONTACT ME</NavLink>
        </div>
        </div>
        <div className="socials">
           <a><AiFillGithub size={25}/></a>
           <a><AiFillLinkedin size={25}/></a>
           <a><BsTwitter size={25}/></a>
        </div>
    </div>
  )
}

export default Footer