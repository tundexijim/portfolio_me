import React from 'react'
import { NavLink } from "react-router-dom";
function TextContact() {
  return (
    <div className="contact-me">
          <h1>Interested in doing a project together?</h1>
          <hr />
          <NavLink to='/contact'><button className='btn contact-btn'>CONTACT ME</button></NavLink>
        </div>
  )
}

export default TextContact