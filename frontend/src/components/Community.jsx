import React from "react";
import { FaUsers, FaLightbulb, FaHandshake } from "react-icons/fa";
import "./Community.css";

const Community = () => {
  const features = [
    {
      id: 1,
      icon: FaUsers,
      title: "Learn Together",
      description: "Our mission is to help students and developers grow by providing free learning resources, tools, and guidance."
    },
    {
      id: 2,
      icon: FaLightbulb,
      title: "Build Projects",
      description: "We believe in learning by building real-world projects and sharing knowledge with others."
    },
    {
      id: 3,
      icon: FaHandshake,
      title: "Collaborate",
      description: "Join our community to collaborate, learn, and build amazing projects together."
    }
  ];

  return (
    <section className="community">
      <div className="community-container">
        <div className="section-header">
          <h2 className="section-title">Our Community</h2>
          <p className="section-subtitle">
            Join thousands of developers and learners worldwide
          </p>
        </div>

        <div className="community-grid">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div className="community-card" key={feature.id}>
                <div className="community-icon">
                  <IconComponent size={32} />
                </div>
                <h3 className="community-card-title">{feature.title}</h3>
                <p className="community-card-description">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="community-cta">
          <button className="btn btn-secondary">Join Our Community</button>
        </div>
      </div>
    </section>
  );
};

export default Community;
