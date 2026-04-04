import React from 'react'
import "./ResourceCard.css";

const ResourceCard = ({ title, description, category, link }) => {
  return (
    <div className="card">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{category}</p>
        <a href={link} target="_blank" rel="noreferrer">Visit</a>
    </div>
  )
};
export default ResourceCard;