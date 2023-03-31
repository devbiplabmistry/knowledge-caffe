import './NavBar.css'
import React from 'react';

const NavBar = () => {
    return (
        <div className='Nav'>
            <div className="logo">
                <h1>Knowledge Cafe</h1>
            </div>
            <div className="menu">
               <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Login</a></li>
               <li><a href="#">Contact Us</a></li>
               </ul>
            </div>
        </div>
    );
};

export default NavBar;