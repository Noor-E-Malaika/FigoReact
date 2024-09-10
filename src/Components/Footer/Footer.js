import React from 'react';
import './Footer.css'; 
import logo from '../../assets/logo.png'; 


const Footer = () => {
  return (
    <footer className="foot">
      <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p className="footer-subscribe">
          Don't miss to subscribe to our new <br /> feeds, kindly fill the form below.
        </p>
        


        <div className="footer-sections">
          <ul className="footer-menu">
            <h5>Our Menu</h5>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Catering</li>
          </ul>

          <ul className="footer-links">
            <h5>Links</h5>
            <li>About Us</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>

          <ul className="footer-contact">
            <h5>Contact</h5>
            <li>+92345678187</li>
            <li>abc@restaurant.com</li>
            <li>Karachi, Pakistan</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
