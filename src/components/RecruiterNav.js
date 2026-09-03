import React, { useEffect, useState, useMemo } from 'react';

const RecruiterNav = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = useMemo(
    () => ['hero', 'about', 'experience', 'skills', 'leadership', 'projects', 'education', 'contact'],
    []
  );

  const labelFor = (section) =>
    section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1);

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
  }, [sections]);

  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      // Move keyboard focus with the scroll so the section is reachable next tab.
      element.setAttribute('tabindex', '-1');
      element.focus({ preventScroll: true });
    }
  };

  return (
    <nav className="recruiter-nav" aria-label="Section navigation">
      {sections.map(section => (
        <button
          type="button"
          key={section}
          className={`recruiter-nav-item ${section === activeSection ? 'active' : ''}`}
          data-section={labelFor(section)}
          aria-label={`Jump to ${labelFor(section)}`}
          aria-current={section === activeSection ? 'true' : undefined}
          onClick={() => handleClick(section)}
        ></button>
      ))}
    </nav>
  );
};

export default RecruiterNav;
