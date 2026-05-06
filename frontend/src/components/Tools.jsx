import React from "react";
import { FaCode, FaGithub, FaRocket, FaPalette } from "react-icons/fa";
import useScrollAnimation from '../hooks/useScrollAnimation';
import "./Tools.css";

const Tools = () => {
  const ref = useScrollAnimation();

  const tools = [
    { id: 1, name: "VS Code",  description: "Powerful code editor with rich extensions ecosystem.", link: "https://code.visualstudio.com", icon: FaCode,    color: "#818cf8" },
    { id: 2, name: "GitHub",   description: "Code hosting & version control for teams.",            link: "https://github.com",           icon: FaGithub,  color: "#34d399" },
    { id: 3, name: "Postman",  description: "API testing and development made simple.",              link: "https://postman.com",          icon: FaRocket,  color: "#fb7185" },
    { id: 4, name: "Figma",    description: "Collaborative UI/UX design for modern teams.",         link: "https://figma.com",            icon: FaPalette, color: "#a78bfa" },
  ];

  return (
    <section className="tools" ref={ref}>
      <div className="tools-container">
        <div className="section-header">
          <p className="section-eyebrow reveal reveal-delay-1">Curated Picks</p>
          <h2 className="section-title reveal reveal-delay-2">Developer Tools</h2>
          <p className="section-subtitle reveal reveal-delay-3">Essential tools to boost your development workflow</p>
        </div>

        <div className="tools-grid">
          {tools.map((tool, i) => {
            const IconComponent = tool.icon;
            return (
              <div
                className={`tool-card reveal reveal-delay-${i + 1}`}
                key={tool.id}
                style={{ '--icon-color': tool.color }}
              >
                <div className="tool-icon-glow"></div>
                <div className="tool-icon" style={{ color: tool.color }}>
                  <IconComponent size={38} />
                </div>
                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-description">{tool.description}</p>
                <a href={tool.link} target="_blank" rel="noreferrer" className="tool-link">
                  Explore <span className="link-arrow">→</span>
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
