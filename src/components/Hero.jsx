export default function Hero() {

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-grid" />
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Left: Text */}
          <div className="hero-text">
            <div className="hero-badge">
              <span className="dot" />
              Open to Opportunities
            </div>

            <h1 className="hero-name">
              Sejal Gohil
            </h1>

            <div className="hero-title" aria-label="Sr. Flutter Developer">
              Sr. Flutter Developer
            </div>

            <p className="hero-description">
              I build scalable Flutter apps with <strong>real-time features</strong>, clean architecture,
              and production-grade performance. Skilled in chat systems,
              WebSockets, and complex state management using Bloc &amp; Cubit.
            </p>

            {/* Strength pills */}
            <div className="hero-strengths">
              <span className="hero-strength-pill">🔗 Real-Time Systems</span>
              <span className="hero-strength-pill">🏛️ Clean Architecture</span>
              <span className="hero-strength-pill">📦 Bloc / Cubit</span>
              <span className="hero-strength-pill">💬 Chat Systems</span>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary" id="view-projects-btn">
                🚀 View Projects
              </a>
              <a href="#contact" className="btn-outline" id="contact-btn">
                📩 Let's Talk
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <span className="hero-stat-value">4+</span>
                <span className="hero-stat-label">Years Exp.</span>
              </div>
              <div>
                <span className="hero-stat-value">5+</span>
                <span className="hero-stat-label">Apps Built</span>
              </div>
              <div>
                <span className="hero-stat-value">5+</span>
                <span className="hero-stat-label">Projects</span>
              </div>
            </div>

            {/* Platform badges */}
            <div className="hero-platforms">
              <span className="hero-platform-label">Works on</span>
              <div className="hero-platform-badges">
                <span className="hero-platform-badge" title="Android">
                  <span>🤖</span> Android
                </span>
                <span className="hero-platform-badge" title="iOS">
                  <span>🍎</span> iOS
                </span>
                <span className="hero-platform-badge" title="Windows">
                  <span>🪟</span> Windows
                </span>
                <span className="hero-platform-badge" title="macOS">
                  <span>🖥️</span> macOS
                </span>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hero-visual">
            <div className="hero-avatar-wrap">
              <div className="hero-avatar" style={{ overflow: 'hidden', padding: 0, background: 'transparent' }}>
                <img src="/flutter-code.png" alt="Flutter Code" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* Floating Card 1 */}
              <div className="hero-floating-card hero-floating-card-1">
                <div className="hero-floating-icon" style={{ background: 'rgba(108,99,255,0.15)' }}>📱</div>
                <div>
                  <div style={{ color: 'var(--text-primary)', marginBottom: '2px' }}>Flutter Expert</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '11px' }}>Dart &amp; Cross-Platform</div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="hero-floating-card hero-floating-card-2">
                <div className="hero-floating-icon" style={{ background: 'rgba(0,212,170,0.15)' }}>⚡</div>
                <div>
                  <div style={{ color: 'var(--text-primary)', marginBottom: '2px' }}>Proven Results</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '11px' }}>High-Performance Apps</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
