import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='name' >
            Travelity
          </Link>
          <ul className='nav-menu active'>
            <li className='nav-item'>
              <Link to='/' className='nav-links' >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/map'
                className='nav-links'
              >
                Map
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/discover'
                className='nav-links'
                
              >
                Discover
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/login'
                className='nav-links'
                
              >
                Log in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;