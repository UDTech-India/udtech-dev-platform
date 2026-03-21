import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false);
  return (
    <nav className="nav">
      <h2 className="logo">UDTech</h2>
      <ul className={`menu ${showMenu ? "menu-mobile":"menu-web"}`}>
        <li>Home</li>
        <li>Resources</li>
        <li>Tools</li>
        <li>Community</li>
        <li>Contact</li>
      </ul>
      <div className="hambur">
        <button onClick={()=>setShowMenu(!showMenu)}>
        <GiHamburgerMenu />
      </button >
      </div>
    </nav>
    
  )
}

export default Navbar;