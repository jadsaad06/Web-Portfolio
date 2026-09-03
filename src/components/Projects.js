import React from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

/*
 * Projects render straight from this array — add one by appending an object.
 * `badge` draws the corner ribbon; hover styling lives in CSS.
 */
const PROJECTS = [
  {
    name: 'AI Fishbowl',
    badge: { label: 'Featured', variant: 'featured' },
    description:
      "An interactive conversational AI installation featuring a voice-driven digital fish. Uses real-time speech recognition, LLM reasoning with Gemini 2.5 Flash, and text-to-speech for natural spoken conversations in PSU's CS lounge.",
    tech: ['Python', 'FastAPI', 'Gemini', 'Google Cloud STT/TTS', 'React', 'MCP'],
    repo: 'https://github.com/jadsaad06/AI-Fishbowl',
  },
  {
    name: 'Media Lens',
    badge: { label: 'AI/ML', variant: 'ai' },
    description:
      'News stance and coverage explorer that clusters articles into events, quantifies stance (pro/neutral/anti) using NLP, and visualizes coverage diversity across outlets with explainable ML.',
    tech: ['Python', 'FastAPI', 'HuggingFace', 'Postgres', 'Redis', 'Docker', 'React'],
    repo: 'https://github.com/jadsaad06/Media-Lens',
  },
  {
    name: 'Prep & Count',
    description:
      'A 3-in-1 fitness application combining macro tracking, fitness progress monitoring, and AI-powered meal prep planning. Built with MERN stack and Expo for cross-platform mobile support.',
    tech: ['React Native', 'Expo', 'Node.js', 'Express', 'MongoDB', 'OpenAI API'],
    repo: 'https://github.com/michmich242/PrepAndCount',
  },
  {
    name: 'Bond',
    description:
      'Real-time messaging platform designed to bridge communication gaps across generations with sleek design, customizable features, and seamless connectivity.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets'],
    repo: 'https://github.com/jadsaad06/BOND-Real-Time-Messaging',
  },
  {
    name: 'Elemental-Battles',
    description:
      'A turn-based card game using a Doubly Linked List as the deck and templates to bring it all together, demonstrating advanced C++ knowledge.',
    tech: ['C++', 'Templates', 'Data Structures'],
    repo: 'https://github.com/jadsaad06/Elemental-Battles',
  },
  {
    name: 'Shortest-Maze-Path',
    description:
      'A C++ application that generates mazes and finds the shortest path through them using efficient algorithms and data structures.',
    tech: ['C++', 'Algorithms', 'Path Finding'],
    repo: 'https://github.com/jadsaad06/Shortest-Maze-Path',
  },
];

const Projects = () => {
  const sectionRef = useRevealOnScroll();

  return (
    <section id="projects" className="section-alt" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div
              className={`project-card slide-up${project.badge ? ' project-card--badged' : ''}`}
              key={project.name}
            >
              {project.badge && (
                <div className={`project-highlight project-highlight-${project.badge.variant}`}>
                  {project.badge.label}
                </div>
              )}
              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span className="tech-tag" key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`View the ${project.name} source on GitHub`}
                  >
                    <i className="fab fa-github" aria-hidden="true"></i> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
