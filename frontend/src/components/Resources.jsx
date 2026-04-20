import React, { useState } from "react";
import ResourceCard from "./ResourceCard";
import "./Resource.css";
import {
  FaReact,
  FaNode,
  FaDatabase,
  FaTools,
  FaGraduationCap,
  FaCss3Alt,
  FaDocker,
  FaGithub
} from "react-icons/fa";

const Resources = () => {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const data = [
    {
      title: "React Docs",
      description: "Official React documentation with comprehensive guides and tutorials",
      category: "Frontend",
      link: "https://react.dev",
      icon: FaReact
    },
    {
      title: "Node.js Guide",
      description: "Backend learning resource for server-side development with Node.js",
      category: "Backend",
      link: "https://nodejs.org",
      icon: FaNode
    },
    {
      title: "CSS Tricks",
      description: "CSS tips, tricks and advanced styling techniques for modern web",
      category: "Frontend",
      link: "https://css-tricks.com",
      icon: FaCss3Alt
    },
    {
      title: "MongoDB",
      description: "NoSQL database for modern applications with flexible data models",
      category: "Database",
      link: "https://mongodb.com",
      icon: FaDatabase
    },
    {
      title: "Express.js",
      description: "Minimal and flexible Node.js web application framework",
      category: "Backend",
      link: "https://expressjs.com",
      icon: FaNode
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development",
      category: "Frontend",
      link: "https://tailwindcss.com",
      icon: FaCss3Alt
    },
    {
      title: "Docker",
      description: "Containerization platform for deploying applications",
      category: "DevOps",
      link: "https://docker.com",
      icon: FaDocker
    },
    {
      title: "GitHub",
      description: "Version control and collaboration platform for developers",
      category: "Tools",
      link: "https://github.com",
      icon: FaGithub
    },
    {
      title: "Udemy Courses",
      description: "Comprehensive online courses for learning web development",
      category: "Learning",
      link: "https://udemy.com",
      icon: FaGraduationCap
    },
    {
      title: "PostgreSQL",
      description: "Advanced open-source relational database system",
      category: "Database",
      link: "https://postgresql.org",
      icon: FaDatabase
    }
  ];

  const filtered = data.filter((item) => {
    const matchCategory = category === "All" || item.category === category;
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const categories = ["All", ...new Set(data.map(item => item.category))];

  return (
    <div className="resources">
      <div className="resources-header">
        <h2>Resources</h2>
        <p className="subtitle">Discover and explore learning materials</p>
      </div>

      <div className="search-container">
        <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <input
          type="text"
          placeholder="Search resources by title or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        {search && (
          <button 
            className="clear-btn"
            onClick={() => setSearch("")}
          >
            ✕
          </button>
        )}
      </div>

      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`filter-btn ${category === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="results-info">
        {search && <span className="search-term">"{search}"</span>}
        <span className="result-count">{filtered.length} resource{filtered.length !== 1 ? "s" : ""} found</span>
      </div>

      <div className="grid">
        {filtered.length === 0 ? (
          <div className="empty-state">
            <p className="empty-icon">🔎</p>
            <p className="empty-title">No resources found</p>
            <p className="empty-desc">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          filtered.map((item, index) => (
            <ResourceCard key={index} {...item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Resources;