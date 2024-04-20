import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Footer.css";
import { GiBunkBeds } from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer">
        <hr />
        <div className="footer-sections">
          <div className="footer-logo-section">
            <div className="footer-logo-contents">
              <NavLink to="/" className="nav-logo">
                <GiBunkBeds className="logo-icon" />
                <span> Dev~</span> hostels
              </NavLink>
              <p>
                Your one-stop shop for all your hostel needs. Explore our wide
                range of affordable accommodations, from cozy dormitories to
                private rooms with stunning views. Start your adventure with
                Dev~ hostels today!
              </p>
            </div>
          </div>
          <div className="pages-section">
            <div className="pages-section-list">
              <h3>Pages</h3>
              <ul>
                <li>
                  <NavLink to="/" className="footer-links">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/host" className="footer-links">
                    Host
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hostels" className="footer-links">
                    Hostels
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" className="footer-links">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/signup" className="footer-links">
                    Signup
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="help-section">
            <h3>Help</h3>
            <ul>
              <li>
                <NavLink to="/contact-us" className="footer-links">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="footer-links">
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink to="/pricing" className="footer-links">
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink to="/location" className="footer-links">
                  Location
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="privacy-policy-section">
            <div className="privacy-policy-link-list">
              <h3>Privacy Policy</h3>
              <ul>
                <li>
                  <NavLink to="/privacy-policy" className="footer-links">
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/terms-and-conditions" className="footer-links">
                    Terms and Conditions
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="email-and-social-icons-section">
            <h3> Drop us an email</h3>
            <div className="input-with-button">
              <input type="email" placeholder="Email" />
              <button type="submit">Submit</button>
            </div>

            <div className="social-icons-section">
              <h3>Keep in touch with us on social media</h3>
              <div className="social-icons-list">
                <NavLink to="/linkedin" style={{ fontSize: "24px" }}>
                  <FaLinkedin />
                </NavLink>
                <NavLink to="/twitter" style={{ fontSize: "24px" }}>
                  <FaXTwitter />
                </NavLink>
                <NavLink to="/facebook" style={{ fontSize: "24px" }}>
                  <FaFacebook />
                </NavLink>
                <NavLink to="/instagram" style={{ fontSize: "24px" }}>
                  <FaInstagram />
                </NavLink>
                <NavLink to="/discord" style={{ fontSize: "24px" }}>
                  <FaDiscord />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div></div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
