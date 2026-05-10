import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import ToolsPage from "./pages/ToolsPage";
import CommunityPage from "./pages/CommunityPage";
import Contact from "./pages/Contact";
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Initialise from localStorage, default = dark
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  // Apply data-theme to <html> whenever isDark changes
  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':      return <Home />;
      case 'resources': return <Resources />;
      case 'tools':     return <ToolsPage />;
      case 'community': return <CommunityPage />;
      case 'contact':   return <Contact />;
      default:          return <Home />;
    }
  };

  return (
    <div className="app">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
