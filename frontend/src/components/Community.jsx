import React, { useState } from "react";
import { FaUsers, FaLightbulb, FaHandshake } from "react-icons/fa";
import useScrollAnimation from '../hooks/useScrollAnimation';
import JoinModal from './JoinModal';
import "./Community.css";

const Community = () => {
  const ref = useScrollAnimation();
  const [modalOpen, setModalOpen] = useState(false);

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
      description: "We believe in learning by building real-world projects and sharing knowledge with the community."
    },
    {
      id: 3,
      icon: FaHandshake,
      title: "Collaborate",
      description: "Join our community to collaborate, learn, and build amazing projects together with developers worldwide."
    }
  ];

  return (
    <section className="community" ref={ref}>
      <div className="community-container">
        <div className="section-header">
          <p className="section-eyebrow reveal reveal-delay-1">Community</p>
          <h2 className="section-title reveal reveal-delay-2">Our Community</h2>
          <p className="section-subtitle reveal reveal-delay-3">
            Join thousands of developers and learners worldwide
          </p>
        </div>

        <div className="community-grid">
          {features.map((feature, i) => {
            const IconComponent = feature.icon;
            return (
              <div className={`community-card reveal reveal-delay-${i + 1}`} key={feature.id}>
                <div className="community-icon">
                  <IconComponent size={28} />
                </div>
                <h3 className="community-card-title">{feature.title}</h3>
                <p className="community-card-description">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="community-cta reveal reveal-delay-4">
          <h3>Ready to grow with us?</h3>
          <p>Connect with developers, access resources, and level up your skills.</p>
          <button className="btn-cta" onClick={() => setModalOpen(true)}>
            Join Our Community <span className="cta-arrow">→</span>
          </button>
        </div>
      </div>

      <JoinModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Community;
