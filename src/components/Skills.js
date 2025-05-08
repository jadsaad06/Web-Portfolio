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
                <span className="skill-name">C++</span>
                <div className="skill-bar">
                  <div className="skill-level" data-skill-level="90%"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Python</span>
                <div className="skill-bar">
                  <div className="skill-level" data-skill-level="85%"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">JavaScript</span>
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
                  <div className="skill-level" data-skill-level="80%"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">SQL</span>
                <div className="skill-bar">
                  <div className="skill-level" data-skill-level="70%"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skills-category slide-up">
            <h3>Frameworks & Tools</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <span className="skill-name">React</span>
                <div className="skill-bar">
                  <div className="skill-level" data-skill-level="85%"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">React Native</span>
                <div className="skill-bar">
                  <div className="skill-level" data-skill-level="80%"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Node.js</span>
                <div className="skill-bar">
                  <div className="skill-level" data-skill-level="75%"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Express</span>
                <div className="skill-bar">
                  <div className="skill-level" data-skill-level="75%"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">MongoDB</span>
                <div className="skill-bar">
                  <div className="skill-level" data-skill-level="70%"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Git</span>
                <div className="skill-bar">
                  <div className="skill-level" data-skill-level="85%"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skills-category slide-up">
            <h3>Technical Skills</h3>
            <div className="skills-tags">
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">Data Structures</span>
              <span className="skill-tag">Algorithms</span>
              <span className="skill-tag">Object-Oriented Programming</span>
              <span className="skill-tag">AI/ML Integration</span>
              <span className="skill-tag">Debugging</span>
              <span className="skill-tag">Microservices</span>
              <span className="skill-tag">Testing</span>
            </div>
          </div>
          
          <div className="skills-category slide-up">
            <h3>Soft Skills</h3>
            <div className="skills-tags">
              <span className="skill-tag">Problem Solving</span>
              <span className="skill-tag">Team Collaboration</span>
              <span className="skill-tag">Agile Development</span>
              <span className="skill-tag">Time Management</span>
              <span className="skill-tag">Technical Writing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 