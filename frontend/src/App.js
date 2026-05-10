import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

// ── Lazy load pages (only downloaded when first visited) ──
const Home        = lazy(() => import("./pages/Home"));
const Resources   = lazy(() => import("./pages/Resources"));
const ToolsPage   = lazy(() => import("./pages/ToolsPage"));
const CommunityPage = lazy(() => import("./pages/CommunityPage"));
const Contact     = lazy(() => import("./pages/Contact"));

// ── Minimal loading fallback ──────────────────────────────
const PageLoader = () => (
  <div className="page-loader" aria-label="Loading">
    <span className="loader-dot"></span>
    <span className="loader-dot"></span>
    <span className="loader-dot"></span>
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [isDark]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

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
      <Suspense fallback={<PageLoader />}>
        {renderPage()}
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
