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
            <p>I'm a Computer Science student at Portland State University who enjoys building things that actually get used. I'm especially interested in AI, product-driven engineering, and systems that connect software with real-world interaction. Right now, I'm leading product design and development on AI Fishbowl, a multi-modal system combining LLMs, speech, and hardware to create interactive experiences, soon to be available in Portland State University's computer science lounge!</p>
            <p>Outside of coding, I'm big on staying active and competitive. You'll usually find me weightlifting, rock climbing, or snowboarding when I'm not at my desk. I also love gaming, both as a way to unwind and as inspiration for how good systems feel when they're well designed.</p>
            <p>I enjoy working in collaborative environments, thinking through both the technical and human side of products, and turning rough ideas into something clean, usable, and impactful.</p>
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