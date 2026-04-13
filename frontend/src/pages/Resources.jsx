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

  const filteredResources = selectedCategory === 'All' 
    ? resources 
    : resources.filter(r => r.category === selectedCategory);

  return (
    <main className="resources-page">
      <div className="resources-header">
        <h1>Learning Resources</h1>
        <p>Curated collection of resources to accelerate your development journey</p>
      </div>

      <div className="resources-container">
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
            <p>No resources found in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Resources;
