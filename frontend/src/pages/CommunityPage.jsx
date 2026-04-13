import React from 'react';
import { 
  FaUsers, 
  FaLightbulb, 
  FaHandshake,
  FaGlobeAmericas,
  FaRocket,
  FaHeart,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaDiscord
} from 'react-icons/fa';
import './CommunityPage.css';

const CommunityPage = () => {
  const features = [
    {
      id: 1,
      icon: FaUsers,
      title: 'Learn Together',
      description: 'Join thousands of developers and learners worldwide. Share knowledge, ask questions, and grow together in a supportive environment.'
    },
    {
      id: 2,
      icon: FaLightbulb,
      title: 'Build Projects',
      description: 'We believe in learning by building real-world projects. Collaborate on open-source initiatives and create amazing applications.'
    },
    {
      id: 3,
      icon: FaHandshake,
      title: 'Collaborate',
      description: 'Connect with like-minded developers, find mentors, and build meaningful professional relationships in our vibrant community.'
    },
    {
      id: 4,
      icon: FaGlobeAmericas,
      title: 'Global Network',
      description: 'Be part of a global community of developers from different backgrounds and expertise levels.'
    },
    {
      id: 5,
      icon: FaRocket,
      title: 'Career Growth',
      description: 'Access job opportunities, internships, and career guidance from experienced professionals in the industry.'
    },
    {
      id: 6,
      icon: FaHeart,
      title: 'Support & Mentorship',
      description: 'Get personalized mentorship and support from experienced developers to accelerate your learning journey.'
    }
  ];

  const socialLinks = [
    { icon: FaTwitter, link: 'https://twitter.com', label: 'Twitter' },
    { icon: FaLinkedin, link: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaGithub, link: 'https://github.com', label: 'GitHub' },
    { icon: FaDiscord, link: 'https://discord.com', label: 'Discord' }
  ];

  return (
    <main className="community-page">
      <div className="community-header">
        <h1>Our Community</h1>
        <p>Join thousands of developers and learners worldwide</p>
      </div>

      <div className="community-container">
        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              At UDTech, our mission is to empower students and developers by providing free, 
              high-quality learning resources, tools, and guidance. We believe that everyone 
              deserves access to quality education and mentorship, regardless of their background 
              or financial situation.
            </p>
            <p>
              We're committed to fostering a collaborative environment where developers can learn, 
              grow, and build amazing projects together. Our community is built on the principles 
              of inclusivity, knowledge sharing, and mutual support.
            </p>
          </div>
          <div className="mission-image">
            <div className="mission-graphic">
              <div className="graphic-circle circle-1"></div>
              <div className="graphic-circle circle-2"></div>
              <div className="graphic-circle circle-3"></div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="features-section">
          <h2 className="section-title">Why Join UDTech?</h2>
          <div className="features-grid">
            {features.map(feature => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.id} className="feature-card">
                  <div className="feature-icon">
                    <IconComponent size={40} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Developer Collaboration Section */}
        <section className="collaboration-section">
          <h2 className="section-title">Developer Collaboration</h2>
          <div className="collaboration-content">
            <div className="collaboration-card">
              <h3>Open Source Projects</h3>
              <p>
                Contribute to open-source projects and gain real-world experience. 
                Our community maintains several projects that welcome contributors of all levels.
              </p>
              <ul>
                <li>✓ Beginner-friendly issues</li>
                <li>✓ Code review and feedback</li>
                <li>✓ Portfolio building opportunities</li>
              </ul>
            </div>
            <div className="collaboration-card">
              <h3>Mentorship Program</h3>
              <p>
                Get paired with experienced developers who can guide you through your 
                learning journey and help you overcome challenges.
              </p>
              <ul>
                <li>✓ 1-on-1 mentoring sessions</li>
                <li>✓ Career guidance</li>
                <li>✓ Technical skill development</li>
              </ul>
            </div>
            <div className="collaboration-card">
              <h3>Community Events</h3>
              <p>
                Participate in webinars, workshops, and hackathons organized by our community. 
                Network with developers and learn from industry experts.
              </p>
              <ul>
                <li>✓ Weekly webinars</li>
                <li>✓ Monthly hackathons</li>
                <li>✓ Networking events</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Ready to Join Our Community?</h2>
          <p>Start your journey with UDTech today and connect with developers worldwide</p>
          <button className="cta-btn">Join Now</button>
        </section>

        {/* Social Links */}
        <section className="social-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a 
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  title={social.label}
                >
                  <IconComponent size={32} />
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default CommunityPage;
