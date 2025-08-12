import React from "react";
import "./App.css";
import { Link } from 'react-scroll';
 

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="text-logo">
        ruG<span className="logo-red">ema</span>
      </span>
      <div className="nav-links">
        <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListitem">Home</Link>
        <Link activeClass='active' to="Skills" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListitem">About</Link>
        <Link activeClass='active' to="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListitem">Portfolio</Link>
        <Link activeClass='active' to="client" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListitem">Clients</Link>
      </div>
      <button className="desktopMenuBtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});

      }}
      
      >Contact Me</button>
    </nav>
  );
};

export default Navbar;
