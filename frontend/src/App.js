import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tools from "./components/Tools";
import Community from "./components/Community";
import ResourceCard from "./components/ResourceCard";
import ContactForm from "./components/ContactForm";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import ToolsPage from "./pages/ToolsPage";
import CommunityPage from "./pages/CommunityPage";
import Contact from "./pages/Contact";
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'resources':
        return <Resources />;
      case 'tools':
        return <ToolsPage />;
      case 'community':
        return <CommunityPage />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
