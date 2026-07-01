export default function Contact() {
  const contactItems = [
    { icon: '📧', label: 'Email', value: 'sejalgohil001@gmail.com', href: 'mailto:sejalgohil001@gmail.com' },
    { icon: '📞', label: 'Phone', value: '+91 992-440-2211', href: 'tel:+919924402211' },
    { icon: '📍', label: 'Location', value: 'Surat, Gujarat, India', href: null },
    { icon: '💼', label: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/sejal-gohil-411143244' },
  ];

  return (
    <section className="section contact-bg" id="contact">
      <div className="contact-orb contact-orb-1" />
      <div className="contact-orb contact-orb-2" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Let's <span>Work Together</span></h2>
          <p className="section-subtitle">
            Have a project in mind? I'd love to hear about it. Let's build something amazing.
          </p>
        </div>

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              Get In Touch
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7, marginBottom: '28px' }}>
              I'm currently open to new opportunities and collaborations. Whether you need a Flutter developer for a long-term project or a short-term engagement, I'm here to help.
            </p>

            <div className="contact-info-items" style={{ textAlign: 'left' }}>
              {contactItems.map(item => (
                item.href ? (
                  <a className="contact-info-item" href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" key={item.label} id={`contact-${item.label.toLowerCase()}`}>
                    <div className="contact-info-icon">{item.icon}</div>
                    <div>
                      <div className="contact-info-label">{item.label}</div>
                      <div className="contact-info-value">{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="contact-info-item" key={item.label} style={{ cursor: 'default' }}>
                    <div className="contact-info-icon">{item.icon}</div>
                    <div>
                      <div className="contact-info-label">{item.label}</div>
                      <div className="contact-info-value">{item.value}</div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
