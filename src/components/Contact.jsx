import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const inputStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-card)',
    color: 'var(--text-primary)',
    fontSize: '0.85rem',
    letterSpacing: '0.05em',
    outline: 'none',
    transition: 'border-color 0.3s, background 0.3s',
    boxSizing: 'border-box',
    fontFamily: 'Georgia, Times New Roman, serif',
  }

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch('/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
    setLoading(false)
  }

  return (
    <section id="contact" style={{ padding: '6rem 1.5rem', maxWidth: '640px', margin: '0 auto', transition: 'background 0.3s' }}>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.4em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          — Contact —
        </p>
        <h2 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '2rem', fontWeight: '700', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Get In Touch
        </h2>
        <div style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)', height: '1px', width: '12rem', margin: '0 auto 1.5rem' }} />
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
          Based in Lokeren. We cover Gent, Serskamp & Wetteren.<br />
          Quick question? Just send a WhatsApp.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        <a href="https://wa.me/32483318412" style={{ fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid var(--gold-dark)', paddingBottom: '2px' }}>
          📱 WhatsApp
        </a>
        <a href="tel:0483318412" style={{ fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid var(--gold-dark)', paddingBottom: '2px' }}>
          📞 0483 31 84 12
        </a>
        <a href="https://www.instagram.com/rombaut.solutions" style={{ fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid var(--gold-dark)', paddingBottom: '2px' }}>
          📸 Instagram
        </a>
      </div>

      <div style={{ border: '1px solid var(--border-card)', padding: '2.5rem', background: 'var(--bg-card)', transition: 'background 0.3s, border-color 0.3s' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Name</label>
              <input name="name" type="text" required placeholder="Your name" value={formData.name} onChange={handleChange} style={inputStyle}
                onFocus={e => { e.target.style.borderColor = 'var(--gold)' }}
                onBlur={e => { e.target.style.borderColor = 'var(--border-card)' }}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Phone</label>
              <input name="phone" type="tel" placeholder="Your phone number" value={formData.phone} onChange={handleChange} style={inputStyle}
                onFocus={e => { e.target.style.borderColor = 'var(--gold)' }}
                onBlur={e => { e.target.style.borderColor = 'var(--border-card)' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Email</label>
            <input name="email" type="email" required placeholder="Your email address" value={formData.email} onChange={handleChange} style={inputStyle}
              onFocus={e => { e.target.style.borderColor = 'var(--gold)' }}
              onBlur={e => { e.target.style.borderColor = 'var(--border-card)' }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Message</label>
            <textarea name="message" required rows={5} placeholder="What can we help you with?" value={formData.message} onChange={handleChange}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => { e.target.style.borderColor = 'var(--gold)' }}
              onBlur={e => { e.target.style.borderColor = 'var(--border-card)' }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.85rem',
              background: loading ? 'var(--border-card)' : 'var(--gold)',
              color: loading ? 'var(--text-muted)' : 'var(--bg-primary)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontFamily: 'Georgia, Times New Roman, serif',
              fontWeight: '700',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#f5d060' }}
            onMouseLeave={e => { if (!loading) e.currentTarget.style.background = 'var(--gold)' }}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--gold)', textAlign: 'center', letterSpacing: '0.1em' }}>
              ✓ Message sent. We will get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#c0392b', textAlign: 'center', letterSpacing: '0.1em' }}>
              ✕ Something went wrong. Try WhatsApp or call us directly.
            </p>
          )}
        </form>
      </div>

      <p style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.65rem', color: 'var(--border-dark)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
        © 2025 Rombaut Solutions — RO Digital
      </p>

    </section>
  )
}

export default Contact