import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // TODO: Replace with your actual Web3Forms Access Key
          access_key: "88c2d455-4991-4574-a723-66a07fe6a72e",
          name: form.name,
          email: form.email,
          subject: form.subject || 'Portfolio Inquiry',
          message: form.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSent(false), 6000);
      } else {
        setErrorMsg(result.message || "Failed to send message.");
      }
    } catch (error) {
      setErrorMsg("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    { icon: '📧', label: 'Email', value: 'sejalgohil001@gmail.com', href: 'mailto:sejalgohil001@gmail.com' },
    { icon: '📞', label: 'Phone', value: '+91 992-440-2211', href: 'tel:+919924402211' },
    { icon: '📍', label: 'Location', value: 'Surat, Gujarat, India', href: null },
    { icon: '💼', label: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/sejal-gohil' },
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

        <div className="contact-grid">
          {/* Left: Info */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              Get In Touch
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7, marginBottom: '28px' }}>
              I'm currently open to new opportunities and collaborations. Whether you need a Flutter developer for a long-term project or a short-term engagement, I'm here to help.
            </p>

            <div className="contact-info-items">
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

            {/* Languages */}
            <div style={{ marginTop: '32px' }}>
              <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                Languages
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['🇮🇳 Gujarati', '🇮🇳 Hindi', '🇬🇧 English'].map(lang => (
                  <span key={lang} className="info-badge purple" style={{ fontSize: '13px' }}>{lang}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form">
            {sent ? (
              <div className="form-success">
                <div className="form-success-icon">🚀</div>
                <div className="form-success-title">Message Sent!</div>
                <div className="form-success-msg">Your message has been delivered to my inbox. I'll get back to you soon!</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="contact-form">
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '24px' }}>
                  Send a Message
                </h3>

                {errorMsg && (
                  <div style={{ color: '#ff6b9d', fontSize: '14px', marginBottom: '16px', padding: '12px', background: 'rgba(255,107,157,0.1)', borderRadius: '8px' }}>
                    ⚠️ {errorMsg}
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="form-input"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Your Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="form-input"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Flutter project collaboration..."
                    className="form-input"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    className="form-textarea"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="form-submit" id="submit-message-btn" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1 }}>
                  <span>{isSubmitting ? '⏳' : '📩'}</span> {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
