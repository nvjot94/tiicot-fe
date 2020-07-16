import React from 'react'
import {Link} from 'react-router-dom';
 const Navbar = () => {
    return (
        <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Students</a>
      <ul id="nav-mobile" class="right ">
      <li><Link to='/'>Home</Link></li>
        <li><Link to='/search'>Search</Link></li>
      </ul> 
    </div>
  </nav>
    )
}

export default Navbar;