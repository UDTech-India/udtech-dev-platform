import React from 'react';
import ContactForm from '../components/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: 'Tech Hub, Innovation Street\nDevelopment City, DC 12345'
    },
    {
      id: 2,
      icon: FaPhone,
      title: 'Phone',
      details: '+1 (555) 123-4567\n+1 (555) 987-6543'
    },
    {
      id: 3,
      icon: FaEnvelope,
      title: 'Email',
      details: 'hello@udtech.com\nsupport@udtech.com'
    },
    {
      id: 4,
      icon: FaClock,
      title: 'Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat - Sun: Closed'
    }
  ];

  return (
    <main className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Have questions? We'd love to hear from you. Get in touch with our team.</p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info-section">
          <h2>Get In Touch</h2>
          <div className="contact-info-grid">
            {contactInfo.map(info => {
              const IconComponent = info.icon;
              return (
                <div key={info.id} className="contact-info-card">
                  <div className="contact-icon">
                    <IconComponent size={32} />
                  </div>
                  <h3>{info.title}</h3>
                  <p>{info.details}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="contact-form-section">
          <ContactForm />
        </div>
      </div>

      <div className="map-section">
        <h2>Find Us</h2>
        <div className="map-container">
          <iframe
            title="UDTech Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Contact;
