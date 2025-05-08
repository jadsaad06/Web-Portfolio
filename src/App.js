import React, { useEffect } from 'react';
import './index.css';
import './assets/css/normalize.css';
import './assets/css/styles.css';
import './assets/css/personalization.css';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RecruiterNav from './components/RecruiterNav';

function App() {
  // Add font-awesome
  useEffect(() => {
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesome);
    
    // Add Google Fonts
    const googleFonts = document.createElement('link');
    googleFonts.rel = 'stylesheet';
    googleFonts.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Poppins:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap';
    document.head.appendChild(googleFonts);
    
    // Add signature font
    const signatureFont = document.createElement('link');
    signatureFont.rel = 'stylesheet';
    signatureFont.href = 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap';
    document.head.appendChild(signatureFont);
    
    // Cleanup function
    return () => {
      try {
        document.head.removeChild(fontAwesome);
        document.head.removeChild(googleFonts);
        document.head.removeChild(signatureFont);
      } catch (error) {
        console.error('Error cleaning up dynamic styles:', error);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <RecruiterNav />
    </>
  );
}

export default App;
