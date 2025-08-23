import React from "react";
import "./Navbar.css";
import bgImage from '../assets/navbar.jpg';


function Navbar(){
    return(
        <nav className="navbar"
         style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
            <div className="navbar-logo">My Portfolio!</div>
            <ul className="navbar-links">
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#projects">PROJECT</a></li>
                <li><a href="#skills">SKILLS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>

        </nav>
    )
}
export default Navbar;