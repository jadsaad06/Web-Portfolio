import React, { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    // Add project highlight badges
    const addProjectHighlights = () => {
      // Highlight first two projects as featured
      const projectCards = document.querySelectorAll('.project-card');
      
      if (projectCards.length >= 1) {
        const highlight1 = document.createElement('div');
        highlight1.className = 'project-highlight';
        highlight1.textContent = 'Featured';
        projectCards[0].style.position = 'relative';
        projectCards[0].style.overflow = 'visible';
        projectCards[0].querySelector('.project-content').style.position = 'relative';
        projectCards[0].appendChild(highlight1);
      }
      
      if (projectCards.length >= 2) {
        const highlight2 = document.createElement('div');
        highlight2.className = 'project-highlight project-highlight-ai';
        highlight2.textContent = 'AI/ML';
        projectCards[1].style.position = 'relative';
        projectCards[1].style.overflow = 'visible';
        projectCards[1].querySelector('.project-content').style.position = 'relative';
        projectCards[1].appendChild(highlight2);
      }
    };
    
    // Project card hover effects
    const addProjectCardEffects = () => {
      const projectCards = document.querySelectorAll('.project-card');
      
      projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-10px)';
          this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
          this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
      });
    };
    
    // Call the initialization functions
    addProjectHighlights();
    addProjectCardEffects();
    
    // No cleanup needed as these are just initial setup
  }, []);

  return (
    <section id="projects" className="section-alt">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {/* Project 1: AI Fishbowl - Featured */}
          <div className="project-card slide-up">
            <div className="project-content">
              <h3>AI Fishbowl</h3>
              <p>An interactive conversational AI installation featuring a voice-driven digital fish. Uses real-time speech recognition, LLM reasoning with Gemini 2.5 Flash, and text-to-speech for natural spoken conversations in PSU's CS lounge.</p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">FastAPI</span>
                <span className="tech-tag">Gemini</span>
                <span className="tech-tag">Google Cloud STT/TTS</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">MCP</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/jadsaad06/AI-Fishbowl" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fab fa-github"></i> View Code
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 2: Media Lens - ML/NLP News Analysis */}
          <div className="project-card slide-up">
            <div className="project-content">
              <h3>Media Lens</h3>
              <p>News stance and coverage explorer that clusters articles into events, quantifies stance (pro/neutral/anti) using NLP, and visualizes coverage diversity across outlets with explainable ML.</p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">FastAPI</span>
                <span className="tech-tag">HuggingFace</span>
                <span className="tech-tag">Postgres</span>
                <span className="tech-tag">Redis</span>
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">React</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/jadsaad06/Media-Lens" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fab fa-github"></i> View Code
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 3: Prep & Count - AI Nutrition App */}
          <div className="project-card slide-up">
            <div className="project-content">
              <h3>Prep & Count</h3>
              <p>A 3-in-1 fitness application combining macro tracking, fitness progress monitoring, and AI-powered meal prep planning. Built with MERN stack and Expo for cross-platform mobile support.</p>
              <div className="project-tech">
                <span className="tech-tag">React Native</span>
                <span className="tech-tag">Expo</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">OpenAI API</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/michmich242/PrepAndCount" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fab fa-github"></i> View Code
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 4: Bond - Real-time Messaging */}
          <div className="project-card slide-up">
            <div className="project-content">
              <h3>Bond</h3>
              <p>Real-time messaging platform designed to bridge communication gaps across generations with sleek design, customizable features, and seamless connectivity.</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">WebSockets</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/jadsaad06/BOND-Real-Time-Messaging" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fab fa-github"></i> View Code
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 6: Elemental-Battles */}
          <div className="project-card slide-up">
            <div className="project-content">
              <h3>Elemental-Battles</h3>
              <p>A turn-based card game using a Doubly Linked List as the deck and templates to bring it all together, demonstrating advanced C++ knowledge.</p>
              <div className="project-tech">
                <span className="tech-tag">C++</span>
                <span className="tech-tag">Templates</span>
                <span className="tech-tag">Data Structures</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/jadsaad06/Elemental-Battles" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fab fa-github"></i> View Code
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 7: Shortest-Maze-Path */}
          <div className="project-card slide-up">
            <div className="project-content">
              <h3>Shortest-Maze-Path</h3>
              <p>A C++ application that generates mazes and finds the shortest path through them using efficient algorithms and data structures.</p>
              <div className="project-tech">
                <span className="tech-tag">C++</span>
                <span className="tech-tag">Algorithms</span>
                <span className="tech-tag">Path Finding</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/jadsaad06/Shortest-Maze-Path" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fab fa-github"></i> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
