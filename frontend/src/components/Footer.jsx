import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub,   href: "https://github.com",   label: "GitHub"   },
    { icon: FaTwitter,  href: "https://twitter.com",  label: "Twitter"  },
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/udtech-india", label: "LinkedIn" },
    { icon: FaDiscord,  href: "https://discord.com",  label: "Discord"  },
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Social Media Links */}
        <div className="footer-socials">
          {socialLinks.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                aria-label={s.label}
              >
                <Icon size={20} />
                <span>{s.label}</span>
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <p className="footer-copy">
          © {currentYear} UDTech Dev Platform. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
