import { useState, useRef } from 'react'
import { Turnstile } from '@marsidev/react-turnstile'
import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/LanguageContext'

const content = {
  nl: {
    label: '— Contact —',
    title: 'Neem Contact Op',
    sub: 'Gevestigd in Lokeren. We dekken Gent, Serskamp & Wetteren.\nSnel een vraag? Stuur gewoon een WhatsApp.',
    name: 'Naam',
    namePh: 'Uw naam',
    phone: 'Telefoon',
    phonePh: 'Uw telefoonnummer',
    email: 'E-mail',
    emailPh: 'Uw e-mailadres',
    message: 'Bericht',
    messagePh: 'Waarmee kunnen we u helpen?',
    send: 'Stuur Bericht',
    sending: 'Bezig met verzenden...',
    captcha: 'Wacht tot de beveiligingscheck klaar is.',
    success: '✓ Bericht verzonden. We nemen snel contact op.',
    error: '✕ Er ging iets mis. Probeer WhatsApp of bel ons.',
    footer: '© 2026 Rombaut Solutions — RO Digital',
  },
  en: {
    label: '— Contact —',
    title: 'Get In Touch',
    sub: 'Based in Lokeren. We cover Gent, Serskamp & Wetteren.\nQuick question? Just send a WhatsApp.',
    name: 'Name',
    namePh: 'Your name',
    phone: 'Phone',
    phonePh: 'Your phone number',
    email: 'Email',
    emailPh: 'Your email address',
    message: 'Message',
    messagePh: 'What can we help you with?',
    send: 'Send Message',
    sending: 'Sending...',
    captcha: 'Please wait for the security check to complete.',
    success: '✓ Message sent. We will get back to you soon.',
    error: '✕ Something went wrong. Try WhatsApp or call us directly.',
    footer: '© 2026 Rombaut Solutions — RO Digital',
  },
}

function Contact() {
  const { theme } = useTheme()
  const { lang } = useLang()
  const t = content[lang]
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState(null)
  const turnstileRef = useRef()

  const inputStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-card)',
    color: 'var(--text-primary)',
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
    if (!turnstileToken) { setStatus('captcha'); return }
    setLoading(true); setStatus(null)
    try {
      const res = await fetch('/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, turnstileToken }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        turnstileRef.current?.reset(); setTurnstileToken(null)
      } else {
        setStatus('error'); turnstileRef.current?.reset(); setTurnstileToken(null)
      }
    } catch {
      setStatus('error'); turnstileRef.current?.reset(); setTurnstileToken(null)
    }
    setLoading(false)
  }

  return (
    <section id="contact" style={{ padding: '6rem 1.5rem', maxWidth: '640px', margin: '0 auto', transition: 'background 0.3s' }}>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.4em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          {t.label}
        </p>
        <h2 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '2rem', fontWeight: '700', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          {t.title}
        </h2>
        <div style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)', height: '1px', width: '12rem', margin: '0 auto 1.5rem' }} />
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
          {t.sub}
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        <a href="https://wa.me/32483318412" style={{ fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid var(--gold-dark)', paddingBottom: '2px' }}>
          📱 WhatsApp
        </a>
        <a href="tel:0483318412" style={{ fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid var(--gold-dark)', paddingBottom: '2px' }}>
          📞 {lang === 'nl' ? 'Bel ons' : 'Call us'}
        </a>
        <a href="https://www.instagram.com/rombaut.solutions" style={{ fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid var(--gold-dark)', paddingBottom: '2px' }}>
          📸 Instagram
        </a>
      </div>

      <div style={{ border: '1px solid var(--border-card)', padding: '2.5rem', background: 'var(--bg-card)', transition: 'background 0.3s, border-color 0.3s' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>{t.name}</label>
              <input name="name" type="text" required placeholder={t.namePh} value={formData.name} onChange={handleChange} className="form-input" style={inputStyle}
                onFocus={e => { e.target.style.borderColor = 'var(--gold)' }}
                onBlur={e => { e.target.style.borderColor = 'var(--border-card)' }}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>{t.phone}</label>
              <input name="phone" type="tel" placeholder={t.phonePh} value={formData.phone} onChange={handleChange} className="form-input" style={inputStyle}
                onFocus={e => { e.target.style.borderColor = 'var(--gold)' }}
                onBlur={e => { e.target.style.borderColor = 'var(--border-card)' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>{t.email}</label>
            <input name="email" type="email" required placeholder={t.emailPh} value={formData.email} onChange={handleChange} className="form-input" style={inputStyle}
              onFocus={e => { e.target.style.borderColor = 'var(--gold)' }}
              onBlur={e => { e.target.style.borderColor = 'var(--border-card)' }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>{t.message}</label>
            <textarea name="message" required rows={5} placeholder={t.messagePh} value={formData.message} onChange={handleChange}
              className="form-input" style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => { e.target.style.borderColor = 'var(--gold)' }}
              onBlur={e => { e.target.style.borderColor = 'var(--border-card)' }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <Turnstile
              ref={turnstileRef}
              siteKey="0x4AAAAAADYcqOrPkuFgEb5O"
              onSuccess={token => setTurnstileToken(token)}
              onExpire={() => setTurnstileToken(null)}
              onError={() => setTurnstileToken(null)}
              options={{ theme: theme === 'dark' ? 'dark' : 'light' }}
            />
          </div>

          <button
            type="submit"
            disabled={loading || !turnstileToken}
            style={{
              width: '100%',
              padding: '0.85rem',
              background: loading || !turnstileToken ? 'var(--border-card)' : 'var(--gold)',
              color: loading || !turnstileToken ? 'var(--text-muted)' : 'var(--bg-primary)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontFamily: 'Georgia, Times New Roman, serif',
              fontWeight: '700',
              border: 'none',
              cursor: loading || !turnstileToken ? 'not-allowed' : 'pointer',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => { if (!loading && turnstileToken) e.currentTarget.style.background = '#f5d060' }}
            onMouseLeave={e => { if (!loading && turnstileToken) e.currentTarget.style.background = 'var(--gold)' }}
          >
            {loading ? t.sending : t.send}
          </button>

          {status === 'captcha' && <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--gold)', textAlign: 'center', letterSpacing: '0.1em' }}>{t.captcha}</p>}
          {status === 'success' && <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--gold)', textAlign: 'center', letterSpacing: '0.1em' }}>{t.success}</p>}
          {status === 'error' && <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#c0392b', textAlign: 'center', letterSpacing: '0.1em' }}>{t.error}</p>}
        </form>
      </div>

      <p style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.65rem', color: 'var(--border-dark)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
        {t.footer}
      </p>

    </section>
  )
}

export default Contact