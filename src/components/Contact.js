import React from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'jadsaad896@gmail.com',
    href: 'mailto:jadsaad896@gmail.com',
    icon: 'fas fa-envelope',
  },
  {
    label: 'GitHub',
    value: 'github.com/jadsaad06',
    href: 'https://github.com/jadsaad06',
    icon: 'fab fa-github',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jad-saad-',
    href: 'https://linkedin.com/in/jad-saad-',
    icon: 'fab fa-linkedin',
    external: true,
  },
];

const Contact = () => {
  const sectionRef = useRevealOnScroll();

  return (
    <section id="contact" className="section-alt" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-content">
          <div className="contact-text slide-up">
            <h3>Open to new opportunities</h3>
            <p>
              I'm always up for a conversation about AI engineering, product work, or whatever
              you're building. Email is the fastest way to reach me, but feel free to connect with me on LinkedIn or check out my GitHub.
            </p>
            <a
              href={`${process.env.PUBLIC_URL}/assets/resume/Resume_Updated.pdf`}
              className="btn-secondary resume-download resume-swe"
              download
            >
              <i className="fas fa-file-alt" aria-hidden="true"></i> Download Resume
            </a>
          </div>

          <ul className="contact-info slide-up">
            {CONTACT_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  className="contact-item"
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="contact-item-icon" aria-hidden="true">
                    <i className={link.icon}></i>
                  </span>
                  <span className="contact-item-text">
                    <span className="contact-item-label">{link.label}</span>
                    <span className="contact-item-value">{link.value}</span>
                  </span>
                  <i className="fas fa-arrow-right contact-item-arrow" aria-hidden="true"></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
