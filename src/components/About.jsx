export default function About() {
  const highlights = [
    { icon: '🎯', title: 'Clean Code', desc: 'Writing maintainable, scalable architecture with clear separation of concerns.' },
    { icon: '⚡', title: 'Performance', desc: 'Obsessed with app stability, start-up time, and smooth 60fps animations.' },
    { icon: '🔔', title: 'Real-Time', desc: 'Expert in WebSockets, Socket.IO & Firebase for live data experiences.' },
    { icon: '🧩', title: 'State Mgmt', desc: 'Provider, Cubit and Bloc — choosing the right pattern for each problem.' },
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Crafting <span>Digital Experiences</span></h2>
          <p className="section-subtitle">
            Passionate Flutter developer turning ideas into polished, production-ready mobile apps.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="about-text" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem' }}>
              Results-driven <strong>Senior Flutter Developer</strong> with <strong>4+ years of experience</strong> building scalable, high-performance cross-platform applications for Android, iOS, and desktop. Expertise in state management, real-time systems, and API integrations.
            </p>
            <p style={{ fontSize: '1.1rem' }}>
              Proven ability to deliver production-ready applications with strong focus on <strong>performance optimization</strong>, <strong>clean architecture</strong>, and <strong>user experience</strong>. Experienced in fintech, real-time communication, and e-commerce domains.
            </p>

            <div className="about-highlights" style={{ textAlign: 'left', marginTop: '32px' }}>
              {highlights.map(h => (
                <div className="about-highlight" key={h.title}>
                  <div className="about-highlight-icon">{h.icon}</div>
                  <div className="about-highlight-title">{h.title}</div>
                  <div className="about-highlight-desc">{h.desc}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px', justifyContent: 'center' }}>
              <a href="#contact" className="btn-primary" id="about-contact-btn">📩 Get in Touch</a>
              <a href="#projects" className="btn-outline" id="about-projects-btn">🚀 My Projects</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
