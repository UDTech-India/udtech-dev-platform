import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import "./Navbar.css";

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setShowMenu(false);
  };

  const navItems = [
    { label: 'Home',      page: 'home' },
    { label: 'Resources', page: 'resources' },
    { label: 'Tools',     page: 'tools' },
    { label: 'Community', page: 'community' },
    { label: 'Contact',   page: 'contact' }
  ];

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <h2 className="logo" onClick={() => handleNavClick('home')}>
        UD<span className="logo-accent">Tech</span>
      </h2>

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
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle menu"
        >
          {showMenu ? <MdClose size={22} /> : <GiHamburgerMenu size={22} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
