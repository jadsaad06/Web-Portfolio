import React, { useEffect } from 'react';

const Skills = () => {
  useEffect(() => {
    // Function to animate skill bars
    const animateSkillBars = () => {
      const skillBars = document.querySelectorAll('.skill-level');
      
      skillBars.forEach((bar, index) => {
        const width = bar.getAttribute('data-skill-level');
        if (width) {
          // Reset width to 0
          bar.style.width = '0'; 
          // Set CSS variable for the animation
          bar.style.setProperty('--skill-percent', width);
          
          // Add slight delay between each skill bar animation
          setTimeout(() => {
            bar.style.transition = 'width 1.5s ease-out';
            bar.style.width = width;
            bar.classList.add('animate');
          }, 200 + (index * 150)); // Stagger the animations
        }
      });
    };
    
    // Observe when the skills section comes into view
    const skillsSection = document.getElementById('skills');
    
    if (skillsSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      }, { threshold: 0.2 });
      
      observer.observe(skillsSection);
      
      // Cleanup function
      return () => {
        if (skillsSection) {
          observer.unobserve(skillsSection);
        }
      };
    }
  }, []);
  
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          <div className="skills-category slide-up">
            <h3>Programming Languages</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <span className="skill-name">Python</span>
                <div className="skill-bar">
                  <div className="skill-level" data-skill-level="90%"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">C++</span>
                <div className="skill-bar">
                  <div className="skill-level" data-skill-level="88%"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">JavaScript/TypeScript</span>
                <div className="skill-bar">
                  <div className="skill-level" data-skill-level="85%"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">SQL</span>
                <div className="skill-bar">
                  <div className="skill-level" data-skill-level="80%"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">C</span>
                <div className="skill-bar">
                  <div className="skill-level" data-skill-level="75%"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">HTML/CSS</span>
                <div className="skill-bar">
                  <div className="skill-level" data-skill-level="85%"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skills-category slide-up">
            <h3>Frameworks & Tools</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <span className="skill-name">React / React Native</span>
                <div className="skill-bar">
                  <div className="skill-level" data-skill-level="88%"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Node.js / Express</span>
                <div className="skill-bar">
                  <div className="skill-level" data-skill-level="85%"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">FastAPI</span>
                <div className="skill-bar">
                  <div className="skill-level" data-skill-level="80%"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">MongoDB / Postgres</span>
                <div className="skill-bar">
                  <div className="skill-level" data-skill-level="80%"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Docker</span>
                <div className="skill-bar">
                  <div className="skill-level" data-skill-level="75%"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Git / GitHub Actions</span>
                <div className="skill-bar">
                  <div className="skill-level" data-skill-level="85%"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skills-category slide-up">
            <h3>AI & Data Engineering</h3>
            <div className="skills-tags">
              <span className="skill-tag">OpenAI API</span>
              <span className="skill-tag">HuggingFace Transformers</span>
              <span className="skill-tag">Sentence Embeddings</span>
              <span className="skill-tag">NLP / Text Classification</span>
              <span className="skill-tag">Prompt Engineering</span>
              <span className="skill-tag">Redis Caching</span>
              <span className="skill-tag">Data Pipelines</span>
              <span className="skill-tag">Clustering (HDBSCAN)</span>
            </div>
          </div>
          
          <div className="skills-category slide-up">
            <h3>Technical Skills</h3>
            <div className="skills-tags">
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">System Design</span>
              <span className="skill-tag">Data Structures</span>
              <span className="skill-tag">Algorithms</span>
              <span className="skill-tag">Object-Oriented Programming</span>
              <span className="skill-tag">WebSockets</span>
              <span className="skill-tag">CI/CD Pipelines</span>
              <span className="skill-tag">Microservices</span>
              <span className="skill-tag">Testing</span>
            </div>
          </div>
          
          <div className="skills-category slide-up">
            <h3>Soft Skills</h3>
            <div className="skills-tags">
              <span className="skill-tag">Team Leadership</span>
              <span className="skill-tag">Product Thinking</span>
              <span className="skill-tag">Problem Solving</span>
              <span className="skill-tag">Cross-functional Collaboration</span>
              <span className="skill-tag">Agile / Scrum</span>
              <span className="skill-tag">Technical Writing</span>
              <span className="skill-tag">Stakeholder Communication</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
