import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ✅ Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  // ✅ Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  // ✅ Submit + API call
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      try {
        setLoading(true);

        const res = await fetch("http://localhost:5000/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });

        const data = await res.json();

        if (data.success) {
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });

          setTimeout(() => setSubmitted(false), 5000);
        } else {
          alert("Failed to send message ❌");
        }

        setLoading(false);

      } catch (error) {
        console.log(error);
        setLoading(false);
        setSubmitted(false);
        alert("Server error ❌");
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="form-wrapper">
        <h2 className="form-title">Get In Touch</h2>
        <p className="form-subtitle">
          We'd love to hear from you. Send us a message!
        </p>

        {/* ✅ Success Message */}
        {submitted && (
          <div className="success-message">
            <FaCheckCircle size={24} />
            <p>Thank you! Your message has been sent successfully.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          
          {/* Name */}
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={errors.name ? "error" : ""}
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={errors.email ? "error" : ""}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          {/* Message */}
          <div className="form-group">
            <label>Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message (minimum 10 characters)"
              rows="6"
              className={errors.message ? "error" : ""}
            />
            {errors.message && (
              <span className="error-message">{errors.message}</span>
            )}
          </div>

          {/* Button */}
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactForm;