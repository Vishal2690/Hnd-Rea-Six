import React from 'react'
import { Link } from 'react-router-dom'
import './Css/Style.css'
function Nav() {
  return (
      <div>
      
          <div className='nav'>
              <ul>
              <h3><li><Link className='link' to="/">Home</Link></li></h3>
              <h3><li><Link className='link' to="/Student">Student</Link></li></h3>
              <h3><li><Link className='link' to="/Contact">Contact</Link></li></h3>              
              </ul>
          </div>

      </div>
  )
}

export default Nav