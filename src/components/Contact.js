import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    // In a real implementation, you would send this data to a server
    // For now, we'll just show a success message
    alert(`Thank you for your message, ${formData.name}! I'll get back to you soon.`);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  
  // Function to add a recruiter CTA section
  const renderRecruiterCTA = () => {
    return (
      <div className="recruiter-cta">
        <h3>Looking for a Talented Developer?</h3>
        <p>I'm currently open to new opportunities and would love to discuss how my skills and experience can benefit your team.</p>
        <div className="cta-buttons">
          <a href="#contact" className="btn-primary">Contact Me</a>
          <a 
            href={`${process.env.PUBLIC_URL}/assets/resume/Jad_Saad_Resume.pdf`} 
            className="btn-secondary resume-download" 
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    );
  };

  return (
    <section id="contact" className="section-alt">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-text slide-up">
            <p>I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to connect!</p>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:jadsaad896@gmail.com">jadsaad896@gmail.com</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Portland, OR</span>
              </div>
              <div className="contact-item">
                <i className="fab fa-github"></i>
                <a href="https://github.com/jadsaad06" target="_blank" rel="noopener noreferrer">github.com/jadsaad06</a>
              </div>
              <div className="contact-item">
                <i className="fab fa-linkedin"></i>
                <a href="https://linkedin.com/in/jad-saad-" target="_blank" rel="noopener noreferrer">linkedin.com/in/jad-saad-</a>
              </div>
            </div>
          </div>
          
          <div className="contact-form slide-up">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
        
        {/* Recruiter Call-to-Action */}
        {renderRecruiterCTA()}
      </div>
    </section>
  );
};

export default Contact; 