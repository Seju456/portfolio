const PROJECTS = [
  {
    emoji: '🎉',
    title: 'Leylix',
    subtitle: 'Event Management & Communication Platform',
    desc: (
      <>
        Developed an all-in-one event solution facilitating event creation, sponsorship tracking, and real-time networking. Integrated high-fidelity audio/video calling and group communication features (polls, chats, and channels).
        <ul style={{ paddingLeft: '1.2rem', marginTop: '8px', marginBottom: 0 }}>
          <li>Built a data-driven sponsorship module providing real-time analytics on reach, engagement, and global market targeting.</li>
        </ul>
      </>
    ),
    tags: ['Flutter', 'Windows', 'Socket.IO'],
    color: '#00d4aa',
    gradient: 'linear-gradient(135deg, #001f1a 0%, #0d1026 100%)',
    category: 'Social',
    catColor: 'var(--teal-light)',
    catBorder: 'rgba(0,212,170,0.35)',
  },
  {
    emoji: '🔐',
    title: 'Oppi Wallet',
    subtitle: 'Onchain Non-Custodial Crypto Wallet',
    desc: (
      <>
        Oppi Wallet is a secure, non-custodial onchain crypto wallet that gives users full control of their private keys and digital assets. It supports Bitcoin and 40+ cryptocurrencies, enabling secure storage, instant token swaps, and direct blockchain transactions.
        <ul style={{ paddingLeft: '1.2rem', marginTop: '8px', marginBottom: 0 }}>
          <li>The app includes a free virtual Mastercard for spending crypto globally, biometric security, multi-chain support, real-time portfolio tracking, and crypto-based travel bookings.</li>
        </ul>
      </>
    ),
    tags: ['Flutter', 'Dart', 'Blockchain', 'Biometrics', 'REST API'],
    color: '#6c63ff',
    gradient: 'linear-gradient(135deg, #1a1652 0%, #0d1026 100%)',
    category: 'FinTech',
    catColor: 'var(--primary-light)',
    catBorder: 'rgba(108,99,255,0.35)',
  },
  {
    emoji: '💬',
    title: 'Nexus Chat',
    subtitle: 'Team Collaboration Platform',
    desc: (
      <>
        Nexus Chat is an all-in-one application for team communication, project management, time tracking, and attendance management. It supports real-time chat, Agile/Scrum sprint and task tracking, task-based time logging, bug reporting, and clock-in/clock-out attendance.
        <ul style={{ paddingLeft: '1.2rem', marginTop: '8px', marginBottom: 0 }}>
          <li>Built using Flutter, it runs smoothly on Android, iOS, Windows, and macOS.</li>
        </ul>
      </>
    ),
    tags: ['Flutter', 'Socket.IO', 'WebSockets', 'Real-Time', 'Desktop'],
    color: '#34d399',
    gradient: 'linear-gradient(135deg, #0d2a1f 0%, #0d1026 100%)',
    category: 'Productivity',
    catColor: 'var(--teal-light)',
    catBorder: 'rgba(52,211,153,0.35)',
  },
  {
    emoji: '💘',
    title: 'Stumble Crush',
    subtitle: 'Dating Application',
    desc: (
      <>
        Developed a one-tap dating app focused on converting real-life missed connections into instant, meaningful matches. Built a scalable Flutter architecture with real-time interactions.
        <ul style={{ paddingLeft: '1.2rem', marginTop: '8px', marginBottom: 0 }}>
          <li>Secure authentication, and smooth UI/UX to enable fast, genuine connections without profile browsing or fake representations.</li>
        </ul>
      </>
    ),
    tags: ['Flutter', 'Firebase', 'Bloc', 'Real-Time'],
    color: '#ff6b9d',
    gradient: 'linear-gradient(135deg, #2a0a18 0%, #0d1026 100%)',
    category: 'Social',
    catColor: 'var(--accent-light)',
    catBorder: 'rgba(255,107,157,0.35)',
  },
  {
    emoji: '🥗',
    title: 'Plant Based Love',
    subtitle: 'Meal Planning App',
    desc: (
      <>
        Developed a Flutter mobile app for Whole Food Plant-Based (WFPB) meal planning. Implemented personalized weekly/monthly meal plans with 200+ recipes. Built smart recipe search with dietary filters (Vegan, WFPB, Raw).
        <ul style={{ paddingLeft: '1.2rem', marginTop: '8px', marginBottom: 0 }}>
          <li>Created meal planner for daily meals and special occasions.</li>
          <li>Integrated E-Shop for digital cookbook and content sales.</li>
        </ul>
      </>
    ),
    tags: ['Flutter', 'SQLite', 'Provider', 'E-Commerce'],
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #302008 0%, #0d1026 100%)',
    category: 'Health',
    catColor: '#fcd34d',
    catBorder: 'rgba(245,158,11,0.35)',
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">Featured <span>Work</span></h2>
          <p className="section-subtitle">
            Real-world Flutter applications shipped to production — from FinTech to Social platforms.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <article className="project-card" key={p.title} id={`project-${i + 1}`}>
              <div className="project-card-banner" style={{ background: p.gradient }}>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(circle at 60% 40%, ${p.color}22 0%, transparent 65%)`,
                  }}
                />
                <span className="project-card-banner-emoji">{p.emoji}</span>
                <div
                  className="project-card-category"
                  style={{
                    color: p.catColor,
                    borderColor: p.catBorder,
                    background: `${p.color}18`,
                  }}
                >
                  {p.category}
                </div>
              </div>

              <div className="project-card-body">
                <div>
                  <h3 className="project-card-title">{p.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--primary-light)', fontWeight: 600, marginBottom: '10px' }}>
                    {p.subtitle}
                  </p>
                </div>
                <div className="project-card-desc">{p.desc}</div>
                <div className="project-card-tags">
                  {p.tags.map(t => (
                    <span className="project-tech-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
