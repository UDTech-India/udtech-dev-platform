import React, { useState } from 'react';
import ResourceCard from '../components/ResourceCard';
import { 
  FaReact, 
  FaNode, 
  FaDatabase, 
  FaDocker, 
  FaGitAlt, 
  FaBook,
  FaJs,
  FaPython,
  FaAws,
  FaLinux,
  FaCode,
  FaServer
} from 'react-icons/fa';
import './Resources.css';

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const resources = [
    {
      id: 1,
      title: 'React Documentation',
      description: 'Official React documentation with guides, API reference, and best practices.',
      category: 'Frontend',
      link: 'https://react.dev',
      icon: FaReact
    },
    {
      id: 2,
      title: 'Node.js Guide',
      description: 'Complete guide to Node.js for building server-side applications.',
      category: 'Backend',
      link: 'https://nodejs.org/docs',
      icon: FaNode
    },
    {
      id: 3,
      title: 'MongoDB Tutorial',
      description: 'Learn MongoDB - a popular NoSQL database for modern applications.',
      category: 'Database',
      link: 'https://docs.mongodb.com',
      icon: FaDatabase
    },
    {
      id: 4,
      title: 'Docker Basics',
      description: 'Master containerization with Docker for consistent deployments.',
      category: 'DevOps',
      link: 'https://docs.docker.com',
      icon: FaDocker
    },
    {
      id: 5,
      title: 'Git & GitHub',
      description: 'Version control essentials and collaborative development workflows.',
      category: 'Tools',
      link: 'https://git-scm.com/doc',
      icon: FaGitAlt
    },
    {
      id: 6,
      title: 'Web Development Roadmap',
      description: 'Comprehensive roadmap for becoming a full-stack web developer.',
      category: 'Learning',
      link: 'https://roadmap.sh',
      icon: FaBook
    },
    {
      id: 7,
      title: 'JavaScript ES6+',
      description: 'Modern JavaScript features and best practices for web development.',
      category: 'Frontend',
      link: 'https://javascript.info',
      icon: FaJs
    },
    {
      id: 8,
      title: 'Python for Backend',
      description: 'Python programming for backend development and data science.',
      category: 'Backend',
      link: 'https://python.org/doc',
      icon: FaPython
    },
    {
      id: 9,
      title: 'AWS Cloud Services',
      description: 'Learn cloud computing with Amazon Web Services.',
      category: 'DevOps',
      link: 'https://aws.amazon.com/documentation',
      icon: FaAws
    },
    {
      id: 10,
      title: 'Linux Fundamentals',
      description: 'Essential Linux commands and system administration skills.',
      category: 'Tools',
      link: 'https://linux.org',
      icon: FaLinux
    },
    {
      id: 11,
      title: 'REST API Design',
      description: 'Best practices for designing scalable and maintainable REST APIs.',
      category: 'Backend',
      link: 'https://restfulapi.net',
      icon: FaCode
    },
    {
      id: 12,
      title: 'Database Design',
      description: 'Learn database design principles and SQL optimization techniques.',
      category: 'Database',
      link: 'https://sqlzoo.net',
      icon: FaServer
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps', 'Tools', 'Learning'];

  const filteredResources = resources.filter(r => {
    const matchesCategory = selectedCategory === 'All' || r.category === selectedCategory;
    const matchesSearch =
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="resources-page">
      <div className="resources-header">
        <h1>Learning Resources</h1>
        <p>Curated collection of resources to accelerate your development journey</p>
      </div>

      <div className="resources-container">
        <div className="search-section">
          <div className="search-wrapper">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search resources by title or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search resources"
            />
            {searchQuery && (
              <button
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="search-results-info">
              Showing <strong>{filteredResources.length}</strong> result{filteredResources.length !== 1 ? 's' : ''} for <span className="search-term">"{searchQuery}"</span>
            </p>
          )}
        </div>

        <div className="filter-section">
          <h3>Filter by Category</h3>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="resources-grid">
          {filteredResources.map(resource => (
            <ResourceCard
              key={resource.id}
              title={resource.title}
              description={resource.description}
              category={resource.category}
              link={resource.link}
              icon={resource.icon}
            />
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="no-resources">
            <p className="no-resources-icon">🔎</p>
            <p className="no-resources-title">No resources found</p>
            <p className="no-resources-desc">
              {searchQuery
                ? `No results for "${searchQuery}". Try a different search term or category.`
                : 'No resources found in this category.'}
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Resources;
