import React, { useEffect } from 'react';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#hero">Jad Saad</a>
            <p>Computer Science Student & Developer</p>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <a href="https://github.com/jadsaad06" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/jad-saad-" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="mailto:jadsaad896@gmail.com"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Jad Saad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 