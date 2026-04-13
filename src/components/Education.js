import React from 'react';
import useInView from './useInView';
import './Education.css';

const degrees = [
  {
    badge: 'M.S.',
    degree: 'Master of Science in Computer Information Science',
    school: 'Syracuse University',
    location: 'Syracuse, NY',
    period: '2020 – 2021',
    courses: [
      'Design & Analysis of Algorithms',
      'Structured Programming & Formal Methods',
      'Principles of Operating Systems',
      'Object-Oriented Design',
      'Mobile Application Programming',
      'Computer Security',
      'Big Data Algorithms',
      'Computer Architecture',
      'Database Management',
    ],
  },
  {
    badge: 'B.S.',
    degree: 'Bachelor of Science in Applied Mathematics',
    school: 'University of California, San Diego',
    location: 'La Jolla, CA',
    period: '2015 – 2017',
    courses: [
      'Introduction to Computational Statistics',
      'Basic Data Structures & Object-Oriented Design',
      'Applicable Math and Computing',
      'Discrete Math & Graph Theory',
      'Engineering Computation',
    ],
  },
];

export default function Education() {
  const [ref, inView] = useInView();

  return (
    <section id="education" className="section education">
      <div className="container">
        <p className={`section-label${inView ? ' visible' : ''}`}>05. Education</p>
        <h2 className={`section-title${inView ? ' visible' : ''}`}>
          Academic <span>Foundation</span>
        </h2>

        <div ref={ref} className="edu__list">
          {degrees.map((d, di) => (
            <div
              key={d.degree}
              className={`edu__card glass-card fade-up${inView ? ' visible' : ''}`}
              style={{ transitionDelay: `${di * 0.15}s` }}
            >
              <div className="edu__left">
                <div className="edu__degree-badge">{d.badge}</div>
                {di < degrees.length - 1 && <div className="edu__vline" />}
              </div>

              <div className="edu__body">
                <div className="edu__header">
                  <div>
                    <h3 className="edu__degree">{d.degree}</h3>
                    <p className="edu__school">
                      <span className="edu__school-name">{d.school}</span>
                      <span className="edu__sep">·</span>
                      <span className="edu__location">{d.location}</span>
                    </p>
                  </div>
                  <span className="edu__period">{d.period}</span>
                </div>

                <div className="edu__section-title">Key Coursework</div>
                <div className="edu__courses">
                  {d.courses.map((c, ci) => (
                    <span
                      key={c}
                      className="edu__course"
                      style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'translateY(0)' : 'translateY(10px)',
                        transition: `opacity 0.4s ease ${di * 0.15 + 0.3 + ci * 0.04}s, transform 0.4s ease ${di * 0.15 + 0.3 + ci * 0.04}s`,
                      }}
                    >
                      {c}
                    </span>
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
