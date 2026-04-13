import React from 'react';
import useInView from './useInView';
import './Skills.css';

const categories = [
  {
    title: 'Languages',
    icon: '</>',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
  },
  {
    title: 'AWS Cloud',
    icon: '☁',
    skills: ['Lambda', 'API Gateway', 'CDK', 'S3', 'DynamoDB', 'EC2', 'Bedrock', 'CloudFront', 'Glue', 'Athena', 'EventBridge'],
  },
  {
    title: 'Data & Analytics',
    icon: '⚡',
    skills: ['Apache Airflow', 'PostgreSQL', 'MySQL', 'NoSQL', 'Pandas', 'ETL Pipelines'],
  },
  {
    title: 'Frontend',
    icon: '🖥',
    skills: ['React', 'HTML', 'CSS', 'Cypress'],
  },
  {
    title: 'Backend & APIs',
    icon: '⚙️',
    skills: ['REST API', 'GraphQL', 'Flask', 'Hasura'],
  },
  {
    title: 'CI/CD & DevOps',
    icon: '🛠',
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions'],
  },
];

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <p className={`section-label${inView ? ' visible' : ''}`}>02. Technical Skills</p>
        <h2 className={`section-title${inView ? ' visible' : ''}`}>
          My <span>Toolkit</span>
        </h2>

        <div ref={ref} className="skills__grid">
          {categories.map((cat, ci) => (
            <div
              key={cat.title}
              className="glass-card skills__card fade-up"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.6s ease ${ci * 0.1}s, transform 0.6s ease ${ci * 0.1}s`,
              }}
            >
              <div className="skills__card-header">
                <span className="skills__icon">{cat.icon}</span>
                <h3 className="skills__category">{cat.title}</h3>
              </div>
              <div className="skills__tags">
                {cat.skills.map((skill, si) => (
                  <span
                    key={skill}
                    className="skills__tag"
                    style={{
                      opacity: inView ? 1 : 0,
                      transition: `opacity 0.4s ease ${ci * 0.1 + si * 0.05}s`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
