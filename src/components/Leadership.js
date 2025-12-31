import React, { useEffect } from 'react';

const Leadership = () => {
  useEffect(() => {
    // Animation for slide-up elements
    const animateElements = document.querySelectorAll('.leadership-section .slide-up');
    
    const checkAnimations = () => {
      const triggerBottom = window.innerHeight * 0.8;
      
      animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < triggerBottom) {
          element.style.animation = 'slideUp 0.5s ease forwards';
        }
      });
    };
    
    // Initial check
    checkAnimations();
    
    // Add scroll event listener
    window.addEventListener('scroll', checkAnimations);
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', checkAnimations);
    };
  }, []);

  return (
    <section id="leadership" className="section leadership-section">
      <div className="container">
        <h2 className="section-title">Leadership Experience</h2>
        
        <div className="leadership-cards-grid">
          {/* AI Fishbowl - Team Lead */}
          <div className="leadership-card slide-up">
            <div className="leadership-header">
              <div className="leadership-badge">
                <i className="fas fa-users-cog"></i>
                <span>Team Lead</span>
              </div>
              <div className="leadership-title-block">
                <h3>Team Lead & Product Lead</h3>
                <p className="leadership-project">AI Fishbowl — Senior Capstone Project</p>
                <p className="leadership-timeframe">
                  <i className="far fa-calendar-alt"></i>
                  Sept 2024 – Present
                </p>
              </div>
            </div>
            
            <div className="leadership-overview">
              <p>
                Leading a 6-person interdisciplinary team building an AI-powered aquaculture monitoring system. 
                Serving as both technical architect and product manager, driving end-to-end delivery across 
                frontend, backend, ML, and hardware workstreams.
              </p>
            </div>
            
            <div className="leadership-content">
              <div className="leadership-impact">
                <h4>Key Contributions</h4>
                <ul className="impact-list">
                  <li>
                    <span className="impact-icon"><i className="fas fa-sitemap"></i></span>
                    <div className="impact-text">
                      <strong>Team Leadership & Delegation</strong>
                      <p>Orchestrated sprint planning and task allocation across 4 functional teams, establishing clear ownership and accountability for each workstream.</p>
                    </div>
                  </li>
                  <li>
                    <span className="impact-icon"><i className="fas fa-project-diagram"></i></span>
                    <div className="impact-text">
                      <strong>Architecture & System Design</strong>
                      <p>Designed scalable system architecture integrating real-time sensor data, ML inference pipelines, and cloud infrastructure for production deployment.</p>
                    </div>
                  </li>
                  <li>
                    <span className="impact-icon"><i className="fas fa-code-branch"></i></span>
                    <div className="impact-text">
                      <strong>Cross-Functional Coordination</strong>
                      <p>Bridged communication between frontend, backend, ML, and hardware engineers—ensuring seamless API contracts and integration milestones.</p>
                    </div>
                  </li>
                  <li>
                    <span className="impact-icon"><i className="fas fa-comments"></i></span>
                    <div className="impact-text">
                      <strong>Stakeholder Communication</strong>
                      <p>Presented progress updates to faculty advisors and external stakeholders, translating technical complexity into actionable insights.</p>
                    </div>
                  </li>
                  <li>
                    <span className="impact-icon"><i className="fas fa-tools"></i></span>
                    <div className="impact-text">
                      <strong>Modern Tooling & DevOps</strong>
                      <p>Implemented CI/CD pipelines, MCP integration for AI workflows, and cloud services to streamline development and ensure reliable deployments.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="leadership-skills">
                <h4>Skills & Tools</h4>
                <div className="leadership-tags">
                  <span className="leadership-tag leadership-tag-primary">Team Leadership</span>
                  <span className="leadership-tag leadership-tag-primary">Product Management</span>
                  <span className="leadership-tag">Agile/Scrum</span>
                  <span className="leadership-tag">System Design</span>
                  <span className="leadership-tag">CI/CD</span>
                  <span className="leadership-tag">Cloud Services</span>
                  <span className="leadership-tag">MCP</span>
                  <span className="leadership-tag">Cross-functional Collaboration</span>
                </div>
              </div>
            </div>
            
            <div className="leadership-metrics">
              <div className="metric-item">
                <span className="metric-number">6</span>
                <span className="metric-label">Team Members</span>
              </div>
              <div className="metric-item">
                <span className="metric-number">4</span>
                <span className="metric-label">Workstreams</span>
              </div>
              <div className="metric-item">
                <span className="metric-number">10+</span>
                <span className="metric-label">Sprints Planned</span>
              </div>
            </div>
          </div>

          {/* Prep & Count - Tech Lead */}
          <div className="leadership-card slide-up">
            <div className="leadership-header">
              <div className="leadership-badge leadership-badge-alt">
                <i className="fas fa-laptop-code"></i>
                <span>Tech Lead</span>
              </div>
              <div className="leadership-title-block">
                <h3>Technical Lead & Designer</h3>
                <p className="leadership-project">Prep & Count — AI Nutrition Application</p>
                <p className="leadership-timeframe">
                  <i className="far fa-calendar-alt"></i>
                  Jan 2024 – May 2024
                </p>
              </div>
            </div>
            
            <div className="leadership-overview">
              <p>
                Designed and built a 3-in-1 fitness application end-to-end—meal prep planning, macro tracking, 
                and AI-powered recipe recommendations. Led a team of 3, owning both technical architecture 
                and product direction from concept to deployment.
              </p>
            </div>
            
            <div className="leadership-content">
              <div className="leadership-impact">
                <h4>Key Contributions</h4>
                <ul className="impact-list">
                  <li>
                    <span className="impact-icon"><i className="fas fa-layer-group"></i></span>
                    <div className="impact-text">
                      <strong>Full-Stack Architecture</strong>
                      <p>Designed RESTful API layer with Express.js and MongoDB, implementing efficient data models for nutrition logging and user preferences.</p>
                    </div>
                  </li>
                  <li>
                    <span className="impact-icon"><i className="fas fa-robot"></i></span>
                    <div className="impact-text">
                      <strong>AI Integration & Prompt Engineering</strong>
                      <p>Integrated OpenAI API for intelligent meal recommendations, crafting prompts that balance nutritional constraints with user taste preferences.</p>
                    </div>
                  </li>
                  <li>
                    <span className="impact-icon"><i className="fas fa-mobile-alt"></i></span>
                    <div className="impact-text">
                      <strong>Mobile-First Development</strong>
                      <p>Built responsive React Native frontend with intuitive UX for daily logging, implementing state management patterns for offline-first functionality.</p>
                    </div>
                  </li>
                  <li>
                    <span className="impact-icon"><i className="fas fa-database"></i></span>
                    <div className="impact-text">
                      <strong>Data Modeling & APIs</strong>
                      <p>Structured MongoDB schemas for nutrition data, meal plans, and user progress—enabling complex queries and aggregation pipelines.</p>
                    </div>
                  </li>
                  <li>
                    <span className="impact-icon"><i className="fas fa-pencil-ruler"></i></span>
                    <div className="impact-text">
                      <strong>Product Design & User Research</strong>
                      <p>Conducted user interviews to validate features, iterating on UI/UX based on feedback to reduce friction in daily meal tracking workflows.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="leadership-skills">
                <h4>Skills & Tools</h4>
                <div className="leadership-tags">
                  <span className="leadership-tag leadership-tag-primary">Full-Stack Development</span>
                  <span className="leadership-tag leadership-tag-primary">AI Integration</span>
                  <span className="leadership-tag">React Native</span>
                  <span className="leadership-tag">Node.js</span>
                  <span className="leadership-tag">MongoDB</span>
                  <span className="leadership-tag">OpenAI API</span>
                  <span className="leadership-tag">REST APIs</span>
                  <span className="leadership-tag">Product Design</span>
                </div>
              </div>
            </div>
            
            <div className="leadership-metrics">
              <div className="metric-item">
                <span className="metric-number">3</span>
                <span className="metric-label">Team Members</span>
              </div>
              <div className="metric-item">
                <span className="metric-number">3-in-1</span>
                <span className="metric-label">Integrated Features</span>
              </div>
              <div className="metric-item">
                <span className="metric-number">E2E</span>
                <span className="metric-label">Ownership</span>
              </div>
            </div>
            
            <div className="leadership-links">
              <a href="https://github.com/michmich242/PrepAndCount" target="_blank" rel="noopener noreferrer" className="leadership-link">
                <i className="fab fa-github"></i> View Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
