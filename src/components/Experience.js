import React from 'react';
import useInView from './useInView';
import './Experience.css';

const jobs = [
  {
    company: 'vArmour Networks, Inc.',
    role: 'Software Engineer',
    location: 'San Mateo, CA',
    period: '2022 – 2024',
    bullets: [
      'Architected and maintained Apache Airflow pipelines processing 14K+ daily records across AWS S3, Glue, and Hasura (GraphQL), reducing manual effort by 80% and enabling real-time data sync across partner companies.',
      'Designed and deployed ETL pipelines to migrate performance test data to PostgreSQL on AWS EC2, reducing performance report turnaround from 5 to 2 days per release.',
      'Implemented automated UI test validation framework using Cypress, increasing test reliability and reducing end-to-end test time by 30%.',
      'Built CI/CD pipelines with Jenkins and GitHub Actions for web application testing, improving test coverage and accelerating development cycles.',
    ],
    tags: ['Apache Airflow', 'AWS S3', 'Glue', 'GraphQL', 'PostgreSQL', 'Cypress', 'Jenkins', 'GitHub Actions'],
  },
  {
    company: 'Institutional Shareholder Services, Inc.',
    role: 'Data QA Analyst',
    location: 'San Diego, CA',
    period: '2017 – 2020',
    bullets: [
      'Optimized 401(k) metric generation using Python, reducing report time from 24 hours to 8 hours and improving delivery speed to clients.',
      'Optimized SQL queries for large datasets, reducing query execution time from 20 minutes to under 1 minute.',
      'Extracted and validated financial data across MS SQL Server and MySQL using SQLyog and Python-based QA scripts.',
      'Built data quality checks using Pandas and NumPy, increasing early detection of data corruption in client deliverables.',
    ],
    tags: ['Python', 'SQL', 'MS SQL Server', 'MySQL', 'Pandas', 'NumPy', 'SQLyog'],
  },
];

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <p className={`section-label${inView ? ' visible' : ''}`}>03. Experience</p>
        <h2 className={`section-title${inView ? ' visible' : ''}`}>
          Where I've <span>Worked</span>
        </h2>

        <div ref={ref} className="exp__timeline">
          {jobs.map((job, i) => (
            <div
              key={job.company}
              className={`exp__item fade-up${inView ? ' visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="exp__line-col">
                <div className="exp__dot" />
                {i < jobs.length - 1 && <div className="exp__vline" />}
              </div>

              <div className="glass-card exp__card">
                <div className="exp__header">
                  <div className="exp__meta">
                    <h3 className="exp__role">{job.role}</h3>
                    <p className="exp__company">
                      <span className="exp__company-name">{job.company}</span>
                      <span className="exp__sep">·</span>
                      <span className="exp__location">{job.location}</span>
                    </p>
                  </div>
                  <span className="exp__period">{job.period}</span>
                </div>

                <ul className="exp__bullets">
                  {job.bullets.map((b, bi) => (
                    <li key={bi} className="exp__bullet">
                      <span className="exp__bullet-dot" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="exp__tags">
                  {job.tags.map(t => (
                    <span key={t} className="exp__tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
