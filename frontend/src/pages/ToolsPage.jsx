import React from 'react';
import { 
  FaCode, 
  FaGithub, 
  FaRocket, 
  FaPalette,
  FaTerminal,
  FaDatabase,
  FaServer,
  FaShieldAlt,
  FaChartLine,
  FaBox,
  FaWrench,
  FaCloud
} from 'react-icons/fa';
import './ToolsPage.css';

const ToolsPage = () => {
  const tools = [
    {
      id: 1,
      name: 'VS Code',
      description: 'Lightweight and powerful code editor with extensive extensions.',
      category: 'Editor',
      link: 'https://code.visualstudio.com',
      icon: FaCode,
      color: '#3b82f6'
    },
    {
      id: 2,
      name: 'GitHub',
      description: 'Version control and collaboration platform for developers.',
      category: 'Version Control',
      link: 'https://github.com',
      icon: FaGithub,
      color: '#10b981'
    },
    {
      id: 3,
      name: 'Postman',
      description: 'API testing and development platform for REST APIs.',
      category: 'API Testing',
      link: 'https://postman.com',
      icon: FaRocket,
      color: '#ff6b6b'
    },
    {
      id: 4,
      name: 'Figma',
      description: 'Collaborative UI/UX design tool for modern teams.',
      category: 'Design',
      link: 'https://figma.com',
      icon: FaPalette,
      color: '#a78bfa'
    },
    {
      id: 5,
      name: 'Terminal/CLI',
      description: 'Command-line interface for system administration and development.',
      category: 'Development',
      link: 'https://www.gnu.org/software/bash',
      icon: FaTerminal,
      color: '#f59e0b'
    },
    {
      id: 6,
      name: 'MongoDB',
      description: 'NoSQL database for flexible and scalable data storage.',
      category: 'Database',
      link: 'https://www.mongodb.com',
      icon: FaDatabase,
      color: '#06b6d4'
    },
    {
      id: 7,
      name: 'Node.js',
      description: 'JavaScript runtime for building server-side applications.',
      category: 'Runtime',
      link: 'https://nodejs.org',
      icon: FaServer,
      color: '#ec4899'
    },
    {
      id: 8,
      name: 'Docker',
      description: 'Containerization platform for consistent deployments.',
      category: 'DevOps',
      link: 'https://www.docker.com',
      icon: FaBox,
      color: '#8b5cf6'
    },
    {
      id: 9,
      name: 'Git',
      description: 'Distributed version control system for tracking code changes.',
      category: 'Version Control',
      link: 'https://git-scm.com',
      icon: FaWrench,
      color: '#f97316'
    },
    {
      id: 10,
      name: 'AWS',
      description: 'Cloud computing services for scalable infrastructure.',
      category: 'Cloud',
      link: 'https://aws.amazon.com',
      icon: FaCloud,
      color: '#14b8a6'
    },
    {
      id: 11,
      name: 'Jenkins',
      description: 'Continuous integration and deployment automation tool.',
      category: 'CI/CD',
      link: 'https://www.jenkins.io',
      icon: FaChartLine,
      color: '#64748b'
    },
    {
      id: 12,
      name: 'Kubernetes',
      description: 'Container orchestration platform for managing deployments.',
      category: 'DevOps',
      link: 'https://kubernetes.io',
      icon: FaShieldAlt,
      color: '#3b82f6'
    }
  ];

  const categories = [...new Set(tools.map(tool => tool.category))];

  return (
    <main className="tools-page">
      <div className="tools-header">
        <h1>Developer Tools</h1>
        <p>Essential tools and platforms to enhance your development workflow</p>
      </div>

      <div className="tools-container">
        {categories.map(category => (
          <div key={category} className="tools-category">
            <h2 className="category-title">{category}</h2>
            <div className="tools-grid">
              {tools
                .filter(tool => tool.category === category)
                .map(tool => {
                  const IconComponent = tool.icon;
                  return (
                    <div key={tool.id} className="tool-card">
                      <div className="tool-icon-wrapper" style={{ color: tool.color }}>
                        <IconComponent size={48} />
                      </div>
                      <h3 className="tool-name">{tool.name}</h3>
                      <p className="tool-description">{tool.description}</p>
                      <a 
                        href={tool.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="tool-btn"
                      >
                        Visit Website →
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ToolsPage;
