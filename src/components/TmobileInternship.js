import React, { useEffect } from 'react';

const TmobileInternship = () => {
  useEffect(() => {
    const animateElements = document.querySelectorAll('.tmobile-section .slide-up');
    
    const checkAnimations = () => {
      const triggerBottom = window.innerHeight * 0.8;
      
      animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < triggerBottom) {
          element.style.animation = 'slideUp 0.5s ease forwards';
        }
      });
    };
    
    checkAnimations();
    window.addEventListener('scroll', checkAnimations);
    
    return () => {
      window.removeEventListener('scroll', checkAnimations);
    };
  }, []);

  return (
    <section id="upcoming-experience" className="section tmobile-section" aria-labelledby="tmobile-title">
      <div className="container">
        <h2 className="section-title" id="tmobile-title">Upcoming Experience</h2>
        
        <div className="tmobile-card slide-up">
          <div className="tmobile-header">
            <div className="tmobile-logo-wrapper">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/T-Mobile_logo_2022.svg/250px-T-Mobile_logo_2022.svg.png" 
                alt="T-Mobile Logo" 
                className="tmobile-logo"
              />
            </div>
            <div className="tmobile-title-block">
              <div className="tmobile-badge-wrapper">
                <span className="tmobile-badge" aria-label="Starting Summer 2026">
                  <i className="fas fa-rocket" aria-hidden="true"></i>
                  Summer 2026
                </span>
              </div>
              <h3>Incoming AI Engineering Intern @ T-Mobile</h3>
              <p className="tmobile-subtitle">
                <i className="far fa-calendar-alt" aria-hidden="true"></i>
                Starting May 2026
              </p>
            </div>
          </div>
          
          <div className="tmobile-content">
            <p className="tmobile-description">
              I'll be joining T-Mobile as a Summer 2026 AI Engineering Intern, where I'll be working on 
              real-world AI systems at scale, contributing directly to T-Mobile's IntentCX customer service 
              platform. I'm excited to contribute to production-grade machine learning systems, collaborate 
              with experienced engineers, and deepen my understanding of applied AI in high-impact environments.
            </p>
            
            <div className="tmobile-highlights">
              <h4>
                <i className="fas fa-star" aria-hidden="true"></i>
                Highlights
              </h4>
              <ul className="tmobile-highlight-list" role="list">
                <li>
                  <span className="highlight-icon" aria-hidden="true">
                    <i className="fas fa-brain"></i>
                  </span>
                  <span className="highlight-text">
                    <strong>Focus:</strong> Applied AI & Production ML Systems
                  </span>
                </li>
                <li>
                  <span className="highlight-icon" aria-hidden="true">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <span className="highlight-text">
                    <strong>Location:</strong> Frisco, TX
                  </span>
                </li>
                <li>
                  <span className="highlight-icon" aria-hidden="true">
                    <i className="fas fa-users"></i>
                  </span>
                  <span className="highlight-text">
                    <strong>Team:</strong> IntentCX Customer Service Platform
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="tmobile-footer">
            <a 
              href="#leadership" 
              className="btn-tmobile"
              aria-label="View my leadership experience"
            >
              <i className="fas fa-briefcase" aria-hidden="true"></i>
              View Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TmobileInternship;
