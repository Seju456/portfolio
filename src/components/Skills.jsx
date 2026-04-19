const SKILLS = [
  {
    name: 'Languages & Frameworks',
    icon: '🐦',
    desc: 'Core mobile framework & language',
    color: '#6c63ff',
    bg: 'linear-gradient(135deg, rgba(108,99,255,0.15) 0%, rgba(108,99,255,0.04) 100%)',
    border: 'rgba(108,99,255,0.35)',
    tags: ['Flutter', 'Dart'],
  },
  {
    name: 'State Management',
    icon: '🧩',
    desc: 'Scalable app architecture',
    color: '#ff6b9d',
    bg: 'linear-gradient(135deg, rgba(255,107,157,0.15) 0%, rgba(255,107,157,0.04) 100%)',
    border: 'rgba(255,107,157,0.35)',
    tags: ['Bloc', 'Cubit', 'Provider'],
  },
  {
    name: 'Backend & Integration',
    icon: '🔌',
    desc: 'Networking & cloud services',
    color: '#00d4aa',
    bg: 'linear-gradient(135deg, rgba(0,212,170,0.15) 0%, rgba(0,212,170,0.04) 100%)',
    border: 'rgba(0,212,170,0.35)',
    tags: ['REST APIs', 'WebSockets (Socket.IO)', 'Firebase (Auth, Firestore, FCM)'],
  },
  {
    name: 'Database',
    icon: '🗄️',
    desc: 'Local & offline data management',
    color: '#60b4ff',
    bg: 'linear-gradient(135deg, rgba(96,180,255,0.15) 0%, rgba(96,180,255,0.04) 100%)',
    border: 'rgba(96,180,255,0.35)',
    tags: ['Drift', 'SQLite', 'Shared Preferences'],
  },
  {
    name: 'Tools & Platforms',
    icon: '🛠️',
    desc: 'Version control & IDEs',
    color: '#ffb347',
    bg: 'linear-gradient(135deg, rgba(255,179,71,0.15) 0%, rgba(255,179,71,0.04) 100%)',
    border: 'rgba(255,179,71,0.35)',
    tags: ['Git', 'Android Studio'],
  },
  {
    name: 'Other Skills',
    icon: '🎨',
    desc: 'Engineering & best practices',
    color: '#c084fc',
    bg: 'linear-gradient(135deg, rgba(192,132,252,0.15) 0%, rgba(192,132,252,0.04) 100%)',
    border: 'rgba(192,132,252,0.35)',
    tags: ['Clean Architecture', 'Responsive UI Design', 'Performance Optimization', 'Debugging'],
  },
];

const CORE_BADGES = [
  { label: 'Flutter', icon: '🐦', color: '#6c63ff' },
  { label: 'Dart', icon: '🎯', color: '#7c6ef5' },
  { label: 'Android', icon: '🤖', color: '#3ddc84' },
  { label: 'iOS', icon: '🍎', color: '#afafaf' },
  { label: 'Bloc', icon: '🔷', color: '#00b4d8' },
  { label: 'Firebase', icon: '🔥', color: '#ffca28' },
  { label: 'WebSockets', icon: '⚡', color: '#00d4aa' },
  { label: 'SQLite', icon: '💾', color: '#60b4ff' },
  { label: 'Git', icon: '🌿', color: '#f05032' },
  { label: 'REST API', icon: '🌐', color: '#ff6b9d' },
];

export default function Skills() {
  return (
    <section className="section skills-bg" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">My <span>Tech Stack</span></h2>
          <p className="section-subtitle">
            A comprehensive toolkit built through extensive professional Flutter development.
          </p>
        </div>

        {/* Core badges ticker */}
        <div className="skills-ticker-wrap">
          <div className="skills-ticker">
            {[...CORE_BADGES, ...CORE_BADGES].map((b, i) => (
              <span
                key={i}
                className="skills-ticker-item"
                style={{ '--badge-color': b.color }}
              >
                <span>{b.icon}</span>
                {b.label}
              </span>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="skills-grid">
          {SKILLS.map((cat, i) => (
            <div
              className="skill-card"
              key={cat.name}
              style={{
                '--card-color': cat.color,
                '--card-bg': cat.bg,
                '--card-border': cat.border,
                animationDelay: `${i * 0.07}s`,
              }}
            >
              {/* Header */}
              <div className="skill-card-header">
                <div className="skill-card-icon">{cat.icon}</div>
                <div className="skill-card-meta">
                  <div className="skill-card-name">{cat.name}</div>
                  <div className="skill-card-desc">{cat.desc}</div>
                </div>
              </div>

              {/* Tags */}
              <div className="skill-card-tags">
                {cat.tags.map(tag => (
                  <span className="skill-card-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
