import { useState } from 'react'

const inputStyle = {
  width: '100%',
  padding: '0.85rem 1rem',
  background: '#111111',
  border: '1px solid #3a2e00',
  color: '#d4a017',
  fontSize: '0.85rem',
  letterSpacing: '0.05em',
  outline: 'none',
  transition: 'border-color 0.3s',
  boxSizing: 'border-box',
  fontFamily: 'Georgia, Times New Roman, serif',
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY',
          ...formData,
          to: 'info@rombautsolutions.be',
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
    setLoading(false)
  }

  return (
    <section id="contact" style={{ padding: '6rem 1.5rem', maxWidth: '640px', margin: '0 auto' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.4em', color: '#8a6d00', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          — Reach Out —
        </p>
        <h2 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '2rem', fontWeight: '700', color: '#d4a017', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Get In Touch
        </h2>
        <div style={{ background: 'linear-gradient(to right, transparent, #d4a017, transparent)', height: '1px', width: '12rem', margin: '0 auto 1.5rem' }} />
        <p style={{ fontSize: '0.8rem', color: '#8a6d00', letterSpacing: '0.1em', lineHeight: '1.8' }}>
          Available in Lokeren, Gent, Serskamp & Wetteren.<br />
          Prefer quick contact? Reach us on WhatsApp.
        </p>
      </div>

      {/* Quick contact links */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        <a href="https://wa.me/32483318412" style={{ fontSize: '0.75rem', color: '#d4a017', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid #7a5c00', paddingBottom: '2px' }}>
          📱 WhatsApp
        </a>
        <a href="tel:0483318412" style={{ fontSize: '0.75rem', color: '#d4a017', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid #7a5c00', paddingBottom: '2px' }}>
          📞 0483 31 84 12
        </a>
        <a href="https://www.instagram.com/rombaut.solutions" style={{ fontSize: '0.75rem', color: '#d4a017', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid #7a5c00', paddingBottom: '2px' }}>
          📸 Instagram
        </a>
      </div>

      {/* Form */}
      <div style={{ border: '1px solid #3a2e00', padding: '2.5rem', background: '#111111' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: '#8a6d00', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Name</label>
              <input
                name="name"
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = '#d4a017'; }}
                onBlur={e => { e.target.style.borderColor = '#3a2e00'; }}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: '#8a6d00', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Phone</label>
              <input
                name="phone"
                type="tel"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = '#d4a017'; }}
                onBlur={e => { e.target.style.borderColor = '#3a2e00'; }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: '#8a6d00', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              onFocus={e => { e.target.style.borderColor = '#d4a017'; }}
              onBlur={e => { e.target.style.borderColor = '#3a2e00'; }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: '#8a6d00', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Message</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Describe your issue or question..."
              value={formData.message}
              onChange={handleChange}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => { e.target.style.borderColor = '#d4a017'; }}
              onBlur={e => { e.target.style.borderColor = '#3a2e00'; }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.85rem',
              background: loading ? '#3a2e00' : '#d4a017',
              color: '#000',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontFamily: 'Georgia, Times New Roman, serif',
              fontWeight: '700',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#f5d060'; }}
            onMouseLeave={e => { if (!loading) e.currentTarget.style.background = '#d4a017'; }}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#d4a017', textAlign: 'center', letterSpacing: '0.1em' }}>
              ✓ Message sent successfully. We'll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#8a0000', textAlign: 'center', letterSpacing: '0.1em' }}>
              Something went wrong. Please try WhatsApp or call directly.
            </p>
          )}
        </form>
      </div>

      {/* Footer note */}
      <p style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.65rem', color: '#3a2e00', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
        © 2025 Rombaut Solutions — RO Digital
      </p>

    </section>
  )
}

export default Contact