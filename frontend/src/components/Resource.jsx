import React, { useState } from "react";
import ResourceCard from "./ResourceCard";
import "./Resource.css";   // 👈 ADD THIS

const Resources = () => {
  const [category, setCategory] = useState("All");

  const data = [
    {
      title: "React Docs",
      description: "Official React documentation",
      category: "Frontend",
      link: "https://react.dev"
    },
    {
      title: "Node.js Guide",
      description: "Backend learning resource",
      category: "Backend",
      link: "https://nodejs.org"
    },
    {
      title: "CSS Tricks",
      description: "CSS tips and tricks",
      category: "Frontend",
      link: "https://css-tricks.com"
    }
  ];

  const filtered =
    category === "All"
      ? data
      : data.filter(item => item.category === category);

  return (
    <div className="resources">
      <h2>Resources</h2>

      {/* Filters */}
      <div className="filters">
        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("Frontend")}>Frontend</button>
        <button onClick={() => setCategory("Backend")}>Backend</button>
      </div>

      {/* Grid */}
      <div className="grid">
        {filtered.map((item, index) => (
          <ResourceCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Resources;