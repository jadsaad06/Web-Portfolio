import React, { useState } from 'react';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();

    // Close mobile menu if open
    if (isActive) {
      setIsActive(false);
    }

    // Scroll to target
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="#hero" onClick={(e) => handleLinkClick(e, 'hero')}>JS</a>
        </div>
        <nav className="nav">
          <ul className={`nav-list ${isActive ? 'active' : ''}`}>
            <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a></li>
            <li><a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')}>Skills</a></li>
            <li><a href="#leadership" onClick={(e) => handleLinkClick(e, 'leadership')}>Leadership</a></li>
            <li><a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a></li>
            <li><a href="#education" onClick={(e) => handleLinkClick(e, 'education')}>Education</a></li>
            <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a></li>
          </ul>
        </nav>
        <div className="nav-toggle" onClick={toggleNav}>
          <span className={isActive ? 'active' : ''}></span>
          <span className={isActive ? 'active' : ''}></span>
          <span className={isActive ? 'active' : ''}></span>
        </div>
      </div>
    </header>
  );
};

export default Header; 