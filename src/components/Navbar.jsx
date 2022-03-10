import React from 'react'

import {NavLink} from 'react-router-dom'

const Navbar =() => {
  return (
    <div className='navbar'>
      <h1>Zarlish kotwal</h1>

<div className='navlink'>

<NavLink activeClassName="active" className="link" to  ="/home" >Home</NavLink>
<NavLink activeClassName="active" className="link" to ="/about" >About</NavLink>
<NavLink activeClassName="active" className="link" to ="/contact" >Contact</NavLink>
</div>
    </div>
  )
}

export default Navbar
