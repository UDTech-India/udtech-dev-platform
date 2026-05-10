import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FiSun, FiMoon } from "react-icons/fi";
import "./Navbar.css";

const Navbar = ({ currentPage, setCurrentPage, isDark, toggleTheme }) => {
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
      {/* Logo */}
      <h2 className="logo" onClick={() => handleNavClick('home')}>
        UD<span className="logo-accent">Tech</span>
      </h2>

      {/* Desktop menu */}
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

      {/* Right side: theme toggle + hamburger */}
      <div className="nav-right">
        {/* Theme toggle button */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDark ? 'Light mode' : 'Dark mode'}
        >
          <span className={`toggle-track ${isDark ? 'dark' : 'light'}`}>
            <span className="toggle-thumb">
              {isDark ? <FiMoon size={11} /> : <FiSun size={11} />}
            </span>
          </span>
        </button>

        {/* Hamburger (mobile only) */}
        <div className="hambur">
          <button
            className="hamburger-btn"
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Toggle menu"
          >
            {showMenu ? <MdClose size={22} /> : <GiHamburgerMenu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
