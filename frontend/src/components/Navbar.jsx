import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import "./Navbar.css";

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setShowMenu(false);
  };

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Resources', page: 'resources' },
    { label: 'Tools', page: 'tools' },
    { label: 'Community', page: 'community' },
    { label: 'Contact', page: 'contact' }
  ];

  return (
    <nav className="nav">
      <h2 className="logo" onClick={() => handleNavClick('home')}>UDTech</h2>
      <ul className={`menu ${showMenu ? "menu-mobile" : "menu-web"}`}>
        {navItems.map((item) => (
          <li 
            key={item.page}
            onClick={() => handleNavClick(item.page)}
            className={currentPage === item.page ? 'active' : ''}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div className="hambur">
        <button 
          className="hamburger-btn" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {showMenu ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
