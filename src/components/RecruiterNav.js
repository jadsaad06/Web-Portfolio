import React, { useEffect, useState } from 'react';

const RecruiterNav = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const sections = ['hero', 'about', 'skills', 'leadership', 'projects', 'education', 'contact'];
  
  useEffect(() => {
    // Update active nav item on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Find which section is currently visible
      sections.forEach(section => {
        const element = document.getElementById(section);
        
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="recruiter-nav">
      {sections.map(section => (
        <div 
          key={section}
          className={`recruiter-nav-item ${section === activeSection ? 'active' : ''}`}
          data-section={section.charAt(0).toUpperCase() + section.slice(1)}
          onClick={() => handleClick(section)}
        ></div>
      ))}
    </div>
  );
};

export default RecruiterNav; 