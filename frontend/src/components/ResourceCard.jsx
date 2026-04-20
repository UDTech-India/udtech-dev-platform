import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./ResourceCard.css";

const ResourceCard = ({ title, description, category, link, icon: Icon }) => {
  const getCategoryColor = (cat) => {
    const colors = {
      'Frontend': '#3b82f6',
      'Backend': '#10b981',
      'DevOps': '#f59e0b',
      'Database': '#8b5cf6',
      'Tools': '#ec4899',
      'Learning': '#06b6d4'
    };
    return colors[cat] || '#3b82f6';
  };

  return (
    <div className="resource-card">
      <div className="resource-header">
        {Icon && <div className="resource-icon" style={{ color: getCategoryColor(category) }}>
          <Icon size={32} />
        </div>}
        <span 
          className="resource-category" 
          style={{ backgroundColor: getCategoryColor(category) }}
        >
          {category}
        </span>
      </div>
      <h3 className="resource-title">{title}</h3>
      <p className="resource-description">{description}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noreferrer"
        className="resource-link"
      >
        Learn More <FaExternalLinkAlt size={14} />
      </a>
    </div>
  );
};

export default ResourceCard;