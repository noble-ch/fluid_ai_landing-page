import React from 'react';
import './Footer.css';
import logo from './logo.png'; // Replace with your actual logo path

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="logo-section">
          <img src={logo} alt="Fluid AI Logo" className="footer-logo" />
          <p className="copyright"> 2024 Fluid AI</p>
        </div>
        <div className="links-section">
          <ul className="links-list">
            <li><a href="/features">Our Features</a></li>
            <li><a href="/areas">Areas</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/waitlist">The Waitlist</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
          <ul className="legal-links">
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;