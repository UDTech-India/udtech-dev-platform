import React from "react";
import { FaCode, FaGithub, FaRocket, FaPalette } from "react-icons/fa";
import "./Tools.css";

const Tools = () => {
  const tools = [
    {
      id: 1,
      name: "VS Code",
      description: "Code editor for developers",
      link: "https://code.visualstudio.com",
      icon: FaCode,
      color: "#3b82f6"
    },
    {
      id: 2,
      name: "GitHub",
      description: "Code hosting & version control",
      link: "https://github.com",
      icon: FaGithub,
      color: "#10b981"
    },
    {
      id: 3,
      name: "Postman",
      description: "API testing tool",
      link: "https://postman.com",
      icon: FaRocket,
      color: "#ff6b6b"
    },
    {
      id: 4,
      name: "Figma",
      description: "UI/UX design tool",
      link: "https://figma.com",
      icon: FaPalette,
      color: "#a78bfa"
    }
  ];

  return (
    <section className="tools">
      <div className="tools-container">
        <div className="section-header">
          <h2 className="section-title">Developer Tools</h2>
          <p className="section-subtitle">
            Essential tools to boost your development workflow
          </p>
        </div>

        <div className="tools-grid">
          {tools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <div className="tool-card" key={tool.id}>
                <div className="tool-icon" style={{ color: tool.color }}>
                  <IconComponent size={40} />
                </div>
                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-description">{tool.description}</p>
                <a 
                  href={tool.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="tool-link"
                >
                  Explore →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tools;
