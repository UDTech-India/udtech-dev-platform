import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaTimes, FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";
import "./JoinModal.css";

const JoinModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors]     = useState({});
  const [loading, setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const validate = () => {
    const e = {};
    if (!formData.name.trim())    e.name    = "Name is required";
    if (!formData.email.trim())   e.email   = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
                                  e.email   = "Enter a valid email";
    if (!formData.message.trim()) e.message = "Message is required";
    else if (formData.message.trim().length < 10)
                                  e.message = "Minimum 10 characters";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    try {
      setLoading(true);
      const res  = await fetch("http://localhost:5000/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => { setSubmitted(false); onClose(); }, 3000);
      }
    } catch {
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        {/* Close button */}
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <FaTimes size={18} />
        </button>

        {/* Header */}
        <div className="modal-header">
          <div className="modal-icon-wrap">
            <FaEnvelope size={22} />
          </div>
          <h2 className="modal-title">Join UDTech Community</h2>
          <p className="modal-subtitle">
            Fill in your details and we'll get back to you shortly.
          </p>
        </div>

        {/* Success state */}
        {submitted ? (
          <div className="modal-success">
            <FaCheckCircle size={48} />
            <h3>Message Sent!</h3>
            <p>Thanks for reaching out. We'll be in touch soon.</p>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit} noValidate>

            {/* Name */}
            <div className={`modal-field ${errors.name ? "has-error" : ""}`}>
              <label htmlFor="m-name">
                <FaUser size={12} /> Full Name
              </label>
              <input
                id="m-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                autoComplete="name"
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>

            {/* Email */}
            <div className={`modal-field ${errors.email ? "has-error" : ""}`}>
              <label htmlFor="m-email">
                <FaEnvelope size={12} /> Email Address
              </label>
              <input
                id="m-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            {/* Message */}
            <div className={`modal-field ${errors.message ? "has-error" : ""}`}>
              <label htmlFor="m-message">
                <FaCommentDots size={12} /> Message
              </label>
              <textarea
                id="m-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about yourself or ask a question..."
                rows={4}
              />
              {errors.message && <span className="field-error">{errors.message}</span>}
            </div>

            <button type="submit" className="modal-submit" disabled={loading}>
              {loading ? (
                <><span className="spinner"></span> Sending…</>
              ) : (
                "Send Message →"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default JoinModal;
