// Recruiter-focused enhancements for Jad Saad's Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Add personalization CSS link to head
    const head = document.querySelector('head');
    const personalCss = document.createElement('link');
    personalCss.rel = 'stylesheet';
    personalCss.href = 'css/personalization.css';
    head.appendChild(personalCss);
    
    // Add Google Font for signature
    const signatureFont = document.createElement('link');
    signatureFont.rel = 'stylesheet';
    signatureFont.href = 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap';
    head.appendChild(signatureFont);
    
    // Create recruiter quick navigation
    createRecruiterNav();
    
    // Add project highlight badges
    addProjectHighlights();
    
    // Add recruiter call-to-action
    addRecruiterCTA();
    
    // Add signature to footer
    addSignature();
    
    // Add resume download functionality
    enhanceResumeButton();
    
    // Add animated background to hero section
    addHeroBgAnimation();
});

// Create recruiter quick navigation
function createRecruiterNav() {
    const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
    const recruiterNav = document.createElement('div');
    recruiterNav.className = 'recruiter-nav';
    
    sections.forEach(section => {
        const navItem = document.createElement('div');
        navItem.className = 'recruiter-nav-item';
        navItem.setAttribute('data-section', section.charAt(0).toUpperCase() + section.slice(1));
        navItem.addEventListener('click', () => {
            document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
        });
        recruiterNav.appendChild(navItem);
    });
    
    document.body.appendChild(recruiterNav);
    
    // Update active nav item on scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        sections.forEach((section, index) => {
            const element = document.getElementById(section);
            const navItem = document.querySelectorAll('.recruiter-nav-item')[index];
            
            if (element) {
                const offsetTop = element.offsetTop - 100;
                const offsetBottom = offsetTop + element.offsetHeight;
                
                if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                    navItem.classList.add('active');
                } else {
                    navItem.classList.remove('active');
                }
            }
        });
    });
}

// Add project highlight badges
function addProjectHighlights() {
    // Highlight first two projects as featured
    const projectCards = document.querySelectorAll('.project-card');
    
    if (projectCards.length >= 1) {
        const highlight1 = document.createElement('div');
        highlight1.className = 'project-highlight';
        highlight1.textContent = 'Featured';
        projectCards[0].style.position = 'relative';
        projectCards[0].appendChild(highlight1);
    }
    
    if (projectCards.length >= 2) {
        const highlight2 = document.createElement('div');
        highlight2.className = 'project-highlight';
        highlight2.textContent = 'Latest';
        projectCards[1].style.position = 'relative';
        projectCards[1].appendChild(highlight2);
    }
}

// Add recruiter call-to-action
function addRecruiterCTA() {
    const contactSection = document.getElementById('contact');
    
    if (contactSection) {
        const container = contactSection.querySelector('.container');
        const recruiterCTA = document.createElement('div');
        recruiterCTA.className = 'recruiter-cta';
        
        recruiterCTA.innerHTML = `
            <h3>Looking for a Talented Developer?</h3>
            <p>I'm currently open to new opportunities and would love to discuss how my skills and experience can benefit your team.</p>
            <div class="cta-buttons">
                <a href="#contact" class="btn-primary">Contact Me</a>
                <a href="resume/Jad_Saad_Resume.pdf" class="btn-secondary resume-download" download>Download Resume</a>
            </div>
        `;
        
        container.appendChild(recruiterCTA);
    }
}

// Add signature to footer
function addSignature() {
    const footerLogo = document.querySelector('.footer-logo');
    
    if (footerLogo) {
        const signature = document.createElement('div');
        signature.className = 'signature';
        signature.textContent = 'Jad Saad';
        
        footerLogo.insertBefore(signature, footerLogo.firstChild);
    }
}

// Enhance resume download button
function enhanceResumeButton() {
    const resumeButtons = document.querySelectorAll('.resume-download, a[href="#"][class*="btn-secondary"]');
    
    resumeButtons.forEach(button => {
        button.classList.add('resume-download');
        button.setAttribute('download', '');
        button.setAttribute('href', 'resume/Jad_Saad_Resume.pdf');
        
        // Add animation effect
        button.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Add animated background to hero section
function addHeroBgAnimation() {
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
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
}
