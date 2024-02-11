import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import img from '../../src/images/logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='Navbar'>
         <div className='logo'>
           <img src={img} alt="" />
         </div>
          <div className='Home'>
            <Link to='/'>Home</Link>
            <Link to='/'>Login</Link>
            <a className='Hamburger' href=""><RxHamburgerMenu /></a>
          </div>
        </div>
    );
};

export default Navbar;