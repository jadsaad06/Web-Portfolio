import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // Animation for slide-up elements
    const animateElements = document.querySelectorAll('.slide-up');
    
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
    <section id="about" className="section-alt">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text slide-up">
            <p>I'm a Junior studying Computer Science at Portland State University, passionate about building creative, efficient, and impactful software solutions. Whether it's crafting immersive games, dynamic web applications, or algorithms that solve real-world problems, I enjoy every step of the journey.</p>
            <p>My academic journey includes simultaneously earning an Associate of Science degree while completing high school through the Early College High School Program. Now at Portland State University's Honor's College, I'm expanding my knowledge in data structures, algorithms, operating systems, and database management.</p>
          </div>
          <div className="about-interests slide-up">
            <h3>Interests</h3>
            <div className="interests-grid">
              <div className="interest-item">
                <i className="fas fa-dumbbell"></i>
                <span>Weightlifting</span>
              </div>
              <div className="interest-item">
                <i className="fas fa-mountain"></i>
                <span>Rock Climbing</span>
              </div>
              <div className="interest-item">
                <i className="fas fa-snowboarding"></i>
                <span>Snowboarding</span>
              </div>
              <div className="interest-item">
                <i className="fas fa-gamepad"></i>
                <span>Gaming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 