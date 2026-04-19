import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      let current = 'hero';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="navbar-inner">
          <a href="#hero" className="navbar-logo">SG</a>
          <ul className="navbar-links">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={activeSection === l.href.replace('#', '') ? 'active' : ''}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-btn"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-menu">
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}

      </div>
    </>
  );
}
