import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [timestamp, setTimestamp] = useState(Date.now());
  const [forceReload, setForceReload] = useState(0);
  
  // Profile image URL with cache-busting parameters
  const profileImageUrl = `${process.env.PUBLIC_URL}/assets/images/profile.jpg?nocache=${timestamp}&reload=${forceReload}`;
  
  // Define inline styles with headshot positioning
  const profileImageStyle = {
    objectFit: 'cover',
    objectPosition: '35% 30%', // Adjusted to focus specifically on the face
    transform: 'scale(2.0)', // More dramatic zoom for headshot effect
    transition: 'transform 0.5s ease',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    border: '5px solid #A7F3D0'
  };
  
  const heroImageContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    width: '280px',
    height: '280px',
    margin: '0 auto',
    borderRadius: '50%'
  };
  
  // Background animation setup
  useEffect(() => {
    const hero = document.querySelector('.hero');
    if (hero) {
      const bgAnimation = document.createElement('div');
      bgAnimation.className = 'hero-bg-animation';
      
      // Create canvas for animation
      const canvas = document.createElement('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      bgAnimation.appendChild(canvas);
      
      hero.appendChild(bgAnimation);
      
      // Initialize animation
      const ctx = canvas.getContext('2d');
      const particles = [];
      
      // Create particles
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          color: Math.random() > 0.5 ? '#2DD4BF' : '#7C3AED',
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25
        });
      }
      
      // Animation loop
      function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          
          // Update position
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) {
            particle.speedX *= -1;
          }
          
          if (particle.y < 0 || particle.y > canvas.height) {
            particle.speedY *= -1;
          }
        });
      }
      
      animate();
      
      // Resize canvas on window resize
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      window.addEventListener('resize', handleResize);
      
      // Force image to reload
      const forceImageReload = () => {
        setTimestamp(Date.now());
        setForceReload(prev => prev + 1);
      };
      
      // Force reload after mounting and again after a delay
      forceImageReload();
      
      setTimeout(() => {
        forceImageReload();
      }, 300);
      
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
    
  }, []);

  // Handle manual reload of the image
  const handleImageReload = () => {
    setTimestamp(Date.now());
    setForceReload(prev => prev + 1);
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="fade-in">Hi, I'm <span className="accent-teal">Jad Saad</span></h1>
          <h2 className="fade-in">Computer Science Student & Developer</h2>
          <p className="fade-in">Building creative, efficient, and impactful software solutions.</p>
          <div className="hero-buttons fade-in">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href={`${process.env.PUBLIC_URL}/assets/resume/Jad_Saad_Resume.pdf`} className="btn-secondary resume-download" download>Download Resume</a>
          </div>
        </div>
        <div 
          className="hero-image fade-in" 
          style={heroImageContainerStyle}
          onClick={handleImageReload}  // Allow clicking to force reload
          key={`container-${forceReload}`}
        >
          <img 
            src={profileImageUrl}
            alt="Jad Saad" 
            key={`profile-${timestamp}-${forceReload}`}
            className="profile-image-focused"
            style={profileImageStyle}
            onLoad={() => console.log('Image loaded with headshot focus')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 