import React from 'react';
import useInView from './useInView';
import './Projects.css';

const projects = [
  {
    title: 'Headline Haiku',
    subtitle: 'GenAI-Powered News Poetry Platform',
    year: '2025',
    url: 'https://d2r3tszfom3s6c.cloudfront.net/',
    description:
      'Serverless, event-driven platform that aggregates news via RSS feeds and generates AI-crafted poetry using Amazon Bedrock. Achieved 70% reduction in AI inference costs through asynchronous batch processing.',
    highlights: [
      'Built on Amazon Web Services (AWS)',
      '70% reduction in AI inference costs',
      'Globally distributed via CloudFront CDN',
      'Fully IaC automated with AWS CDK',
    ],
    tags: ['AWS CDK', 'Lambda', 'Bedrock', 'React', 'S3', 'CloudFront', 'API Gateway', 'EventBridge', 'DeepSeek R1'],
    accent: 'cyan',
    featured: true,
  },
];

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <p className={`section-label${inView ? ' visible' : ''}`}>04. Projects</p>
        <h2 className={`section-title${inView ? ' visible' : ''}`}>
          Things I've <span>Built</span>
        </h2>

        <div ref={ref} className="projects__list">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`glass-card project-card fade-up${inView ? ' visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {p.featured && (
                <span className="project-card__badge">Featured Project</span>
              )}

              <div className="project-card__body">
                <div className="project-card__info">
                  <div className="project-card__title-row">
                    <h3 className="project-card__title">{p.title}</h3>
                    <span className="project-card__year">{p.year}</span>
                  </div>
                  <p className="project-card__subtitle">{p.subtitle}</p>

                  <p className="project-card__desc">{p.description}</p>

                  <ul className="project-card__highlights">
                    {p.highlights.map(h => (
                      <li key={h}>
                        <span className="project-card__check">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="project-card__tags">
                    {p.tags.map(t => (
                      <span key={t} className="project-card__tag">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="project-card__visual">
                  <div className="project-card__mockup">
                    <div className="mockup__bar">
                      <span /><span /><span />
                    </div>
                    <div className="mockup__body">
                      <div className="mockup__line mockup__line--wide" />
                      <div className="mockup__line" />
                      <div className="mockup__haiku">
                        <span className="mockup__haiku-line">Breaking news unfolds —</span>
                        <span className="mockup__haiku-line">seventeen syllables bloom</span>
                        <span className="mockup__haiku-line">AI finds beauty</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-card__footer">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  View Live <ExternalIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
