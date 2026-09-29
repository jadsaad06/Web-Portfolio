import React, { useState } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

/*
 * Add a new role by dropping another object at the top of this array.
 * Only `id`, `role`, `company`, `dates` and `summary` are required — every
 * other field is optional and its block is skipped when omitted.
 *
 * `tier: 'current'` elevates the card; `growth` renders a promotion connector
 * linking a role down to the one that came before it. `accent` is the company
 * colour, `accentDark` its lighter twin for dark mode (defaults to `accent`).
 */
const EXPERIENCES = [
  {
    id: 'tmobile-aie',
    role: 'Associate AI Engineer',
    company: 'T-Mobile',
    accent: '#E20074',
    accentDark: '#FF5CA8',
    tier: 'current',
    dates: 'Sept 2026 – Present',
    location: 'Bellevue, WA',
    badge: { label: 'Current Role', icon: 'fas fa-bolt', pulse: true },
    defaultOpen: true,
    summary:
      "I'm back on IntentCX — T-Mobile's AI chatbot platform — full-time as an Associate AI Engineer. My current focus is building an e2e testing automation pipeline: the internal tooling that automates evaluation, release, and debugging so engineers spend time on the agent, not the process around it.",
    body: [
      "I'm back on IntentCX — T-Mobile's AI chatbot platform — this time full-time. Same product, same team, now as an Associate AI Engineer. I'm continuing to ship production agents, tools, and evaluation work that sits in front of real customers, not a demo environment.",
      'My current focus is an e2e testing automation pipeline — the internal tooling the team runs on. Automating the manual steps around evaluation, release, and debugging means engineers spend their time on the agent, not the process around it.',
      'The internship is what got me here. I liked the problem enough to come back: conversational AI at the scale of hundreds of thousands of daily chats, with the kind of constraints that make you actually care about evals, latency, and whether a feature is safe to ship.',
    ],
    highlights: [
      { icon: 'fas fa-brain', label: 'Focus', text: 'Production agents, tools, and evals on IntentCX' },
      { icon: 'fas fa-robot', label: 'Building', text: 'E2E testing automation pipeline for the engineering team' },
      { icon: 'fas fa-map-marker-alt', label: 'Location', text: 'Bellevue, WA' },
      { icon: 'fas fa-comments', label: 'Team', text: 'IntentCX Customer Service Platform' },
    ],
    tags: ['E2E Testing', 'Internal Tooling', 'Automation', 'Agent Development', 'IntentCX'],
    primaryTags: 3,
    // Connector drawn beneath this card, linking it to the role below.
    growth: {
      label: 'Intern → Full-time',
      detail: 'The summer internship below converted into a full-time return offer on the same team and platform.',
      icon: 'fas fa-arrow-up',
    },
  },
  {
    id: 'tmobile-intern',
    role: 'AI Engineer Intern',
    company: 'T-Mobile',
    accent: '#E20074',
    accentDark: '#FF5CA8',
    tier: 'past',
    dates: 'May – August 2026',
    location: 'Bellevue, WA',
    badge: { label: 'Internship Program', icon: 'fas fa-rocket' },
    summary:
      'Built agents, custom tools, and an LLM-as-judge eval pipeline on IntentCX — and turned the summer into a full-time offer.',
    body: [
      'I spent the summer building on IntentCX using the OpenAI Agents SDK with SSE streaming. Most of my time went into prompt engineering and custom tools — including one that calculated account tenure so we could automatically surface onboarding content for newer customers.',
      'I also built and maintained an LLM-as-judge evaluation pipeline that gated every feature before it reached production. Alongside it I shipped an internal analytics tool that scans a batch of conversations for a given behavior and reports how often it actually occurs — the number the team needs to rank a production bug instead of guessing at its blast radius. Through cross-team bug bashes, I resolved 15 bugs, including a critical defect that would have hit all ~150K daily conversations before it shipped.',
    ],
    impact: [
      {
        icon: 'fas fa-wrench',
        title: 'Prompt Engineering & Custom Tools',
        text: 'Designed agent prompts and tools on the OpenAI Agents SDK, including a tenure tool that automatically surfaced onboarding content for newer customers.',
      },
      {
        icon: 'fas fa-balance-scale',
        title: 'LLM-as-Judge Evaluation Pipeline',
        text: 'Built and maintained the eval gate that every feature had to pass before production — the boring, necessary work that keeps a chatbot from going sideways at scale.',
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Behavior Detection for Bug Triage',
        text: 'Shipped an internal tool that detects a behavior across a batch of conversations and reports how often it occurs, turning "is this bug worth fixing now?" into a number instead of an argument.',
      },
      {
        icon: 'fas fa-bug',
        title: 'Cross-Team Bug Bashes',
        text: 'Resolved 15 bugs, including a critical defect affecting all ~150K daily conversations, caught before it shipped.',
      },
    ],
    tags: [
      'Prompt Engineering',
      'OpenAI Agents SDK',
      'LLM-as-Judge',
      'SSE Streaming',
      'Custom Agent Tools',
      'Conversation Analytics',
      'Production Evals',
    ],
    primaryTags: 2,
  },
];

/*
 * What I personally shipped at T-Mobile — every tile is my own work, not
 * platform scale. Numbers describing the platform belong in the role copy,
 * where the surrounding sentence gives them context.
 */
const IMPACT = [
  {
    value: '100+',
    label: 'Production bugs identified with my analytics tool',
    detail: 'Measures how often a behavior shows up across a batch of conversations, so the team knows what to fix first',
  },
  {
    value: '50+',
    label: 'Evals written',
    detail: 'LLM-as-judge cases in the pipeline that gates every feature before production',
  },
  {
    value: '15',
    label: 'Production bugs I fixed',
    detail: 'Including one critical defect, caught before it shipped',
  },
];

const ExperienceEntry = ({ experience, isOpen, onToggle }) => {
  const {
    id,
    role,
    company,
    accent,
    accentDark,
    tier = 'past',
    dates,
    location,
    badge,
    summary,
    body,
    highlights,
    impact,
    tags,
    primaryTags = 0,
    growth,
  } = experience;

  const panelId = `${id}-panel`;
  const headingId = `${id}-heading`;

  return (
    <article
      className={`exp-item exp-item--${tier} slide-up${isOpen ? ' is-open' : ''}`}
      style={
        accent
          ? {
              // Two tones: the stylesheet picks one per theme. The dark tone
              // is lightened so it stays legible on a dark card.
              '--exp-accent-src': accent,
              '--exp-accent-src-dark': accentDark || accent,
            }
          : undefined
      }
    >
      <span className="exp-marker" aria-hidden="true"></span>

      <div className="exp-card">
        <button
          type="button"
          className="exp-toggle"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="exp-toggle-main">
            {badge && (
              <span className={`exp-badge${badge.pulse ? ' exp-badge-live' : ''}`}>
                <i className={badge.icon} aria-hidden="true"></i>
                {badge.label}
              </span>
            )}
            <h3 className="exp-role" id={headingId}>
              {role} <span className="exp-at">@</span> {company}
            </h3>
            <p className="exp-meta">
              <span>
                <i className="far fa-calendar-alt" aria-hidden="true"></i>
                {dates}
              </span>
              {location && (
                <span>
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                  {location}
                </span>
              )}
            </p>
            {!isOpen && summary && <p className="exp-summary">{summary}</p>}
          </span>
          <span className="exp-chevron" aria-hidden="true">
            <i className="fas fa-chevron-down"></i>
            <span className="exp-chevron-label">{isOpen ? 'Less' : 'Details'}</span>
          </span>
        </button>

        <div className="exp-panel" id={panelId} role="region" aria-labelledby={headingId} hidden={!isOpen}>
          <div className="exp-panel-inner">
            {body && body.map((paragraph, i) => (
              <p key={i} className={`exp-description${i > 0 ? ' exp-description-follow' : ''}`}>
                {paragraph}
              </p>
            ))}

            {highlights && (
              <div className="exp-highlights">
                <h4>
                  <i className="fas fa-star" aria-hidden="true"></i>
                  Highlights
                </h4>
                <ul className="exp-highlight-list">
                  {highlights.map((item) => (
                    <li key={item.label}>
                      <span className="exp-icon" aria-hidden="true">
                        <i className={item.icon}></i>
                      </span>
                      <span className="exp-highlight-text">
                        <strong>{item.label}:</strong> {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {impact && (
              <div className="exp-block">
                <h4>What I worked on</h4>
                <ul className="exp-impact-list">
                  {impact.map((item) => (
                    <li key={item.title}>
                      <span className="exp-icon" aria-hidden="true">
                        <i className={item.icon}></i>
                      </span>
                      <div className="exp-impact-text">
                        <strong>{item.title}</strong>
                        <p>{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {tags && (
              <div className="exp-block">
                <h4>Skills &amp; Tools</h4>
                <div className="exp-tags">
                  {tags.map((tag, i) => (
                    <span key={tag} className={`exp-tag${i < primaryTags ? ' exp-tag-primary' : ''}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {growth && (
        <div className="exp-growth">
          <span className="exp-growth-chip">
            <i className={growth.icon} aria-hidden="true"></i>
            {growth.label}
          </span>
          {growth.detail && <p className="exp-growth-detail">{growth.detail}</p>}
        </div>
      )}
    </article>
  );
};

const Experience = () => {
  const sectionRef = useRevealOnScroll();
  const [openIds, setOpenIds] = useState(() =>
    EXPERIENCES.filter((item) => item.defaultOpen).map((item) => item.id)
  );

  const toggle = (id) =>
    setOpenIds((current) =>
      current.includes(id) ? current.filter((openId) => openId !== id) : [...current, id]
    );

  const allOpen = openIds.length === EXPERIENCES.length;
  const toggleAll = () => setOpenIds(allOpen ? [] : EXPERIENCES.map((item) => item.id));

  return (
    <section
      id="experience"
      className="section experience-section"
      aria-labelledby="experience-title"
      ref={sectionRef}
    >
      <div className="container">
        <div className="exp-section-head">
          <h2 className="section-title" id="experience-title">Experience</h2>
          {EXPERIENCES.length > 1 && (
            <button type="button" className="exp-expand-all" onClick={toggleAll}>
              <i className={`fas ${allOpen ? 'fa-compress-alt' : 'fa-expand-alt'}`} aria-hidden="true"></i>
              {allOpen ? 'Collapse all' : 'Expand all'}
            </button>
          )}
        </div>

        <div className="exp-impact" aria-label="What I shipped as a T-Mobile intern">
          {IMPACT.map((metric) => (
            <div className="exp-impact-metric" key={metric.label}>
              <span className="exp-impact-value">{metric.value}</span>
              <span className="exp-impact-label">{metric.label}</span>
              {metric.detail && <span className="exp-impact-detail">{metric.detail}</span>}
            </div>
          ))}
        </div>

        <div className="exp-timeline">
          {EXPERIENCES.map((experience) => (
            <ExperienceEntry
              key={experience.id}
              experience={experience}
              isOpen={openIds.includes(experience.id)}
              onToggle={() => toggle(experience.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
