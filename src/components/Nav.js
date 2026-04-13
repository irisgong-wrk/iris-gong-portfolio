import React, { useState, useEffect } from 'react';
import './Nav.css';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo">
          <span className="nav__logo-bracket">&lt;</span>
          iris
          <span className="nav__logo-accent">Gong</span>
          <span className="nav__logo-bracket"> /&gt;</span>
        </a>

        <nav className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}>
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`nav__link${active === href.slice(1) ? ' nav__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className={`nav__burger${menuOpen ? ' nav__burger--open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
