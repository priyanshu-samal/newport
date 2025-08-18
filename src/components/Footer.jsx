import React from "react";
import "./Footer.scss";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-container">
        <div className="footer-top">
          <h2 className="footer-title">Want to connect?</h2>
          <p className="footer-text">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
          </p>
          <a href="https://cal.com/priyanshu-samal" target="_blank" rel="noopener noreferrer" className="footer-button">
            Get Connected
          </a>
        </div>
        <div className="footer-bottom">
          <div className="footer-socials">
            <a href="https://x.com/PriyanshuS92042" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
            <a href="https://github.com/PriyanshuSamal" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/priyanshu-samal-358657233/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <p className="footer-email">samalpriyanshu966@gmail.com</p>
          <p className="footer-copy">
            &copy; 2024 Priyanshu Samal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
