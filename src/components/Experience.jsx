const EXPERIENCE = [
  {
    period: 'Jan 2024 – May 2026',
    title: 'Flutter Developer',
    org: 'Elaunch Solutions Pvt. Ltd.',
    desc: (
      <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <li>Designed and developed 3 scalable Flutter applications across Android, iOS, Windows, and macOS</li>
        <li>Implemented clean architecture using Bloc/Cubit for maintainable and testable code</li>
        <li>Integrated REST APIs and WebSocket-based real-time systems</li>
        <li>Optimized Flutter applications by resolving performance bottlenecks, improving UI responsiveness, and reducing production issues through advanced debugging techniques</li>
        <li>Managed app releases, updates, and deployments on Play Store</li>
      </ul>
    ),
    tags: ['Flutter', 'Bloc', 'WebSockets', 'REST API', 'Clean Architecture'],
    icon: '🚀',
    color: 'var(--primary)',
    border: 'rgba(108,99,255,0.4)',
    bg: 'rgba(108,99,255,0.08)',
    period_color: 'var(--primary-light)',
    period_bg: 'rgba(108,99,255,0.1)',
  },
  {
    period: 'Jan 2022 – Jan 2024',
    title: 'Associate Flutter Developer',
    org: 'Elaunch Solutions Pvt. Ltd.',
    desc: (
      <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <li>Built 2–3 cross-platform Flutter applications with responsive UI/UX across Android and iOS</li>
        <li>Integrated Firebase services (Authentication, Firestore, FCM) across 2–3 applications</li>
        <li>Built reusable UI components and optimized app performance</li>
      </ul>
    ),
    tags: ['Flutter', 'Firebase', 'Firestore', 'FCM', 'Responsive UI'],
    icon: '💻',
    color: 'var(--accent)',
    border: 'rgba(255,107,157,0.4)',
    bg: 'rgba(255,107,157,0.08)',
    period_color: 'var(--accent-light)',
    period_bg: 'rgba(255,107,157,0.1)',
  },
];

const EDUCATION = [
  {
    period: '2019 – 2022',
    title: 'Bachelor of Computer Applications (BCA)',
    org: 'Sutex Bank College of Computer Applications & Science',
    desc: 'CGPA: 7.74/10',
    icon: '🎓',
    color: 'var(--teal)',
    border: 'rgba(0,212,170,0.4)',
    bg: 'rgba(0,212,170,0.08)',
    period_color: 'var(--teal-light)',
    period_bg: 'rgba(0,212,170,0.1)',
  },
  {
    period: '2018 – 2019',
    title: 'Higher Secondary Certificate (HSC)',
    org: 'Navchetan Vidhyabhavan',
    desc: 'Percentage: 82.14%',
    icon: '📚',
    color: '#ffb347',
    border: 'rgba(255,179,71,0.4)',
    bg: 'rgba(255,179,71,0.08)',
    period_color: '#ffcc80',
    period_bg: 'rgba(255,179,71,0.1)',
  },
];

function TimelineItem({ item }) {
  return (
    <div className="timeline-item">
      <div
        className="timeline-dot"
        style={{ background: item.bg, borderColor: item.border, color: 'var(--text-primary)' }}
      >
        {item.icon}
      </div>
      <div className="timeline-content">
        <span
          className="timeline-period"
          style={{ color: item.period_color, background: item.period_bg }}
        >
          {item.period}
        </span>
        <div className="timeline-title">{item.title}</div>
        <div className="timeline-subtitle" style={{ color: item.period_color }}>{item.org}</div>
        <div className="timeline-desc">{item.desc}</div>
        {item.tags && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '16px' }}>
            {item.tags.map(t => (
              <span className="project-tech-tag" key={t}>{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="section" id="experience"
      style={{ background: 'linear-gradient(180deg, var(--bg-dark) 0%, #080b1f 50%, var(--bg-dark) 100%)' }}
    >
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Journey</span>
          <h2 className="section-title">Experience & <span>Education</span></h2>
          <p className="section-subtitle">
            A track record of professional growth, shipped apps, and continuous learning.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
          {/* Experience */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <span style={{ fontSize: '24px' }}>🚀</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Work Experience
              </h3>
            </div>
            <div className="timeline">
              {EXPERIENCE.map(item => <TimelineItem key={item.title} item={item} />)}
            </div>
          </div>

          {/* Education */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <span style={{ fontSize: '24px' }}>🎓</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Education
              </h3>
            </div>
            <div className="timeline">
              {EDUCATION.map(item => <TimelineItem key={item.title} item={item} />)}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #experience .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
