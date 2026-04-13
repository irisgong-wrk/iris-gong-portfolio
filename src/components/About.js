import React from 'react';
import useInView from './useInView';
import './About.css';

const highlights = [
  { label: 'AWS Cloud', desc: 'Lambda, CDK, Athena, CloudFront & more' },
  { label: 'GenAI', desc: 'Amazon Bedrock & LLM-powered applications' },
  { label: 'Backend', desc: 'Python, REST APIs, GraphQL, Flask' },
  { label: 'CI/CD', desc: 'Jenkins, GitHub Actions, Docker, Kubernetes' },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="section about">
      <div className="container">
        <p className={`section-label${inView ? ' visible' : ''}`}>01. About Me</p>
        <h2 className={`section-title${inView ? ' visible' : ''}`}>
          Crafting <span>Scalable Systems</span>
        </h2>

        <div ref={ref} className={`about__grid fade-up${inView ? ' visible' : ''}`}>
          <div className="about__text">
            <p>
              I'm a Software Engineer passionate about building robust backend systems and
              cloud-native architectures. At <strong>vArmour Networks</strong> I architected
              data pipelines processing 14K+ daily records, built automated testing frameworks,
              and deployed full-stack applications on AWS. Earlier at{' '}
              <strong>Institutional Shareholder Services</strong>, I cut 401(k) report generation
              from 24 hours to 8 and reduced SQL query times from 20 minutes to under 1 minute.
            </p>
            <p>
              My most recent work involves{' '}
              <span className="about__highlight">Generative AI</span> — I built{' '}
              <em>Headline Haiku</em>, a serverless GenAI platform that transforms news into
              poetry using Amazon Bedrock, achieving a <strong>70% reduction</strong> in AI
              inference costs through intelligent batch processing.
            </p>
            <p>
              I hold an <strong>M.S. in Computer Information Science</strong> from{' '}
              <strong>Syracuse University</strong> and a <strong>B.S. in Applied Mathematics</strong>{' '}
              from <strong>UC San Diego</strong>, and I thrive on solving complex engineering
              challenges with clean, scalable code.
            </p>
          </div>

          <div className="about__cards">
            {highlights.map(({ icon, label, desc }, i) => (
              <div
                key={label}
                className="glass-card about__card fade-up"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.6s ease ${0.1 + i * 0.1}s, transform 0.6s ease ${0.1 + i * 0.1}s`,
                }}
              >
                <span className="about__card-icon">{icon}</span>
                <h3 className="about__card-label">{label}</h3>
                <p className="about__card-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
