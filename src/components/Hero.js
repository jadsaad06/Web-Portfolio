import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  const profileImageUrl = `${process.env.PUBLIC_URL}/assets/images/profile.jpg`;

  // Determine scaling based on screen size
  const getScaleFactor = () => {
    if (windowWidth <= 576) return 1.3;
    if (windowWidth <= 768) return 1.4;
    if (windowWidth <= 992) return 1.6;
    return 2.0;
  };

  // Define inline styles with headshot positioning
  const profileImageStyle = {
    objectFit: 'cover',
    objectPosition: '35% 30%', // Adjusted to focus specifically on the face
    transform: `scale(${getScaleFactor()})`, // Responsive zoom based on screen size
    transition: 'transform 0.5s ease',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    boxShadow: '0 10px 30px var(--card-shadow)',
    border: '5px solid var(--ring-accent)'
  };

  // Adjust container size based on screen width
  const heroImageContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    width: windowWidth <= 576 ? '220px' : windowWidth <= 768 ? '250px' : '280px',
    height: windowWidth <= 576 ? '220px' : windowWidth <= 768 ? '250px' : '280px',
    margin: windowWidth <= 992 ? '0 auto' : '0',
    borderRadius: '50%',
    marginBottom: windowWidth <= 992 ? '2rem' : '0'
  };

  // Container flex styles for desktop
  const containerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: windowWidth <= 992 ? 'column-reverse' : 'row',
    width: '100%',
    maxWidth: '1200px'
  };

  // Content styles to maintain space
  const contentStyles = {
    flex: windowWidth <= 992 ? 'none' : '1',
    marginTop: windowWidth <= 992 ? 'var(--spacing-xl)' : '0',
    textAlign: windowWidth <= 992 ? 'center' : 'left',
    width: windowWidth <= 992 ? '100%' : '55%', // Control width on larger screens
    paddingRight: windowWidth <= 992 ? '0' : 'var(--spacing-md)'
  };

  // Image container styles to maintain space
  const imageWrapperStyles = {
    flex: windowWidth <= 992 ? 'none' : '1',
    display: 'flex',
    justifyContent: windowWidth <= 992 ? 'center' : 'flex-end',
    alignItems: 'center',
    width: windowWidth <= 992 ? '100%' : '45%', // Control width on larger screens
    paddingLeft: windowWidth <= 992 ? '0' : 'var(--spacing-md)'
  };

  // Drifting particle backdrop, skipped when the visitor prefers reduced motion.
  useEffect(() => {
    const hero = document.querySelector('.hero');
    if (!hero) return undefined;

    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const bgAnimation = document.createElement('div');
    bgAnimation.className = 'hero-bg-animation';
    bgAnimation.setAttribute('aria-hidden', 'true');

    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    bgAnimation.appendChild(canvas);
    hero.appendChild(bgAnimation);

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      // No 2D context (blocked, unsupported, or a non-browser renderer).
      bgAnimation.remove();
      return undefined;
    }

    const particles = [];
    let frameId = null;

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

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
      });
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Tear the canvas down on unmount so StrictMode can't stack two loops.
    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameId) cancelAnimationFrame(frameId);
      bgAnimation.remove();
    };
  }, []);

  // Listen for window resizing
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container" style={containerStyles}>
        <div className="hero-content" style={contentStyles}>
          <h1 className="fade-in">Hi, I'm <span className="accent-teal">Jad Saad</span></h1>
          <h2 className="fade-in">Associate AI Engineer @ T-Mobile</h2>
          <p className="fade-in">
            I build conversational AI in production — agents, evals, and internal tooling on a platform
            handling ~150K customer conversations a day.
          </p>
          <div className="hero-buttons fade-in">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a
              href={`${process.env.PUBLIC_URL}/assets/resume/Resume_Updated.pdf`}
              className="btn-secondary resume-download resume-swe"
              download
            >
              <i className="fas fa-file-alt" aria-hidden="true"></i> Resume
            </a>
          </div>
        </div>
        <div style={imageWrapperStyles}>
          <div className="hero-image fade-in" style={heroImageContainerStyle}>
            <img
              src={profileImageUrl}
              alt="Jad Saad"
              className="profile-image-focused"
              style={profileImageStyle}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
