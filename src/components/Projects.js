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
        highlight2.className = 'project-highlight';
        highlight2.textContent = 'Latest';
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
          {/* Project 1: Prep&Count */}
          <div className="project-card slide-up">
            <div className="project-content">
              <h3>Prep&Count</h3>
              <p>3-in-1 Fitness AI Application integrating workout tracking, nutrition logging, and AI-powered meal-prepping using OpenAI API.</p>
              <div className="project-tech">
                <span className="tech-tag">React Native</span>
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
          
          {/* Project 2: Bond */}
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
          
          {/* Project 3: Discord Server Remake */}
          <div className="project-card slide-up">
            <div className="project-content">
              <h3>Discord Server Remake</h3>
              <p>Engineered a scalable communication server in Python utilizing a custom 2-3 Tree data structure with O(log n) search complexity for channel operations.</p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Data Structures</span>
                <span className="tech-tag">Testing</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/jadsaad06/Discord-Server-Remake" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fab fa-github"></i> View Code
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 4: Pokemon Dupe */}
          <div className="project-card slide-up">
            <div className="project-content">
              <h3>Pokemon Dupe</h3>
              <p>A turn-based Pokémon battle game in C++ using a Binary Search Tree (BST) for Pokémon management, featuring dynamic binding, strategic combat, and interactive gameplay.</p>
              <div className="project-tech">
                <span className="tech-tag">C++</span>
                <span className="tech-tag">Unique Pointers</span>
                <span className="tech-tag">STL</span>
                <span className="tech-tag">Data Structures</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/jadsaad06/Pokemon-Dupe" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fab fa-github"></i> View Code
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 5: Elemental-Battles */}
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
          
          {/* Project 6: Shortest-Maze-Path */}
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