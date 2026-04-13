import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import './App.css';

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <footer className="footer">
        <p>
          Built with React &amp; deployed on GitHub Pages &mdash;{' '}
          <span className="footer-name">Iris Gong</span> &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
