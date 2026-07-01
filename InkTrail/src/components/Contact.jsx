import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

let turnstileScriptPromise

function loadTurnstileScript() {
  if (window.turnstile) return Promise.resolve(window.turnstile)
  if (turnstileScriptPromise) return turnstileScriptPromise

  turnstileScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector('script[data-turnstile-script]')
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(window.turnstile), { once: true })
      existingScript.addEventListener('error', reject, { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.defer = true
    script.dataset.turnstileScript = 'true'
    script.onload = () => resolve(window.turnstile)
    script.onerror = reject
    document.head.appendChild(script)
  })

  return turnstileScriptPromise
}

const TurnstileWidget = forwardRef(function TurnstileWidget({ siteKey, options, onSuccess, onExpire, onError }, ref) {
  const containerRef = useRef(null)
  const widgetIdRef = useRef(null)
  const callbacksRef = useRef({ onSuccess, onExpire, onError })

  useEffect(() => {
    callbacksRef.current = { onSuccess, onExpire, onError }
  }, [onSuccess, onExpire, onError])

  useImperativeHandle(ref, () => ({
    reset() {
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current)
      }
    },
  }), [])

  useEffect(() => {
    let cancelled = false

    loadTurnstileScript()
      .then(turnstile => {
        if (cancelled || !containerRef.current || widgetIdRef.current) return

        widgetIdRef.current = turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: options?.theme || 'light',
          callback: token => callbacksRef.current.onSuccess?.(token),
          'expired-callback': () => callbacksRef.current.onExpire?.(),
          'error-callback': () => callbacksRef.current.onError?.(),
        })
      })
      .catch(() => callbacksRef.current.onError?.())

    return () => {
      cancelled = true
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [siteKey, options?.theme])

  return <div ref={containerRef} />
})

const content = {
  nl: {
    label: '— Contact —',
    title: 'Neem Contact Op',
    sub: 'Interesse in een custom tattoo ontwerp of event pack?\nStuur ons je idee en we reageren binnen 24 uur.',
    name: 'Naam',
    namePh: 'Uw naam',
    phone: 'Telefoon',
    phonePh: 'Uw telefoonnummer',
    email: 'E-mail',
    emailPh: 'Uw e-mailadres',
    message: 'Bericht',
    messagePh: 'Vertel ons welk tattoo concept of event pack je zoekt.',
    send: 'Stuur Bericht',
    sending: 'Bezig met verzenden...',
    captcha: 'Wacht tot de beveiligingscheck klaar is.',
    success: '✓ Bericht verzonden. We nemen snel contact op.',
    error: '✕ Er ging iets mis. Probeer WhatsApp of e-mail.',
    call: 'Bel ons',
    built: 'Een project van Rombaut Solutions',
    footer: '© 2026 Inktrail — by Rombaut Solutions',
    footerSub: 'inktrail.rombautsolutions.be',
  },
  en: {
    label: '— Contact —',
    title: 'Get In Touch',
    sub: 'Interested in a custom tattoo design or event pack?\nSend us your idea and we will respond within 24 hours.',
    name: 'Name',
    namePh: 'Your name',
    phone: 'Phone',
    phonePh: 'Your phone number',
    email: 'Email',
    emailPh: 'Your email address',
    message: 'Message',
    messagePh: 'Tell us what tattoo concept or event pack you are looking for.',
    send: 'Send Message',
    sending: 'Sending...',
    captcha: 'Please wait for the security check to complete.',
    success: '✓ Message sent. We will get back to you soon.',
    error: '✕ Something went wrong. Try WhatsApp or email.',
    call: 'Call us',
    built: 'A project by Rombaut Solutions',
    footer: '© 2026 Inktrail — by Rombaut Solutions',
    footerSub: 'inktrail.rombautsolutions.be',
  },
}

function Contact() {
  const { lang } = useLang()
  const { theme } = useTheme()
  const t = content[lang]
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState(null)
  const turnstileRef = useRef()

  const inputStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    background: 'rgba(255,255,255,0.7)',
    border: '1px solid var(--border-card)',
    color: 'var(--ink)',
    fontSize: '0.88rem',
    lineHeight: 1.6,
    outline: 'none',
    transition: 'border-color 0.3s, background 0.3s',
    boxSizing: 'border-box',
    fontFamily: "'IM Fell English', Georgia, serif",
  }

  const labelStyle = {
    fontSize: '0.65rem',
    letterSpacing: '0.2em',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '0.5rem',
    fontFamily: 'Georgia, serif',
  }

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const resetTurnstile = () => {
    turnstileRef.current?.reset()
    setTurnstileToken(null)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!turnstileToken) {
      setStatus('captcha')
      return
    }

    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch('/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          message: `[Inktrail] ${formData.message}`,
          turnstileToken,
        }),
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

    resetTurnstile()
    setLoading(false)
  }

  return (
    <section id="contact" style={{ padding: '6rem 1.5rem 4rem', maxWidth: '700px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{
          fontSize: '0.65rem',
          letterSpacing: '0.45em',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
          fontFamily: 'Georgia, serif',
        }}>
          {t.label}
        </p>
        <h2 style={{
          fontFamily: "'Cinzel', Georgia, serif",
          fontSize: '2rem',
          fontWeight: 700,
          color: 'var(--gold)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          {t.title}
        </h2>
        <div style={{
          background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
          height: '1px',
          width: '12rem',
          margin: '0 auto 1.5rem',
        }} />
        <p style={{
          fontSize: '0.88rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.85,
          whiteSpace: 'pre-line',
          fontFamily: "'IM Fell English', Georgia, serif",
          fontStyle: 'italic',
        }}>
          {t.sub}
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        <a href="https://wa.me/32483318412" style={{ fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid var(--gold-dark)', paddingBottom: '2px', fontFamily: 'Georgia, serif' }}>
          📱 WhatsApp
        </a>
        <a href="tel:0483318412" style={{ fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid var(--gold-dark)', paddingBottom: '2px', fontFamily: 'Georgia, serif' }}>
          📞 {t.call}
        </a>
        <a href="https://www.instagram.com/rombaut.solutions" style={{ fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid var(--gold-dark)', paddingBottom: '2px', fontFamily: 'Georgia, serif' }}>
          📸 Instagram
        </a>
      </div>

      <div style={{
        border: '1px solid var(--gold)',
        padding: '2.5rem',
        background: 'var(--bg-card)',
        position: 'relative',
      }}>
        {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => {
          const [v, h] = pos.split('-')
          return (
            <div key={pos} style={{
              position: 'absolute',
              [v]: '0.75rem',
              [h]: '0.75rem',
              width: '16px',
              height: '16px',
              [`border${v.charAt(0).toUpperCase() + v.slice(1)}`]: '1px solid var(--gold-dark)',
              [`border${h.charAt(0).toUpperCase() + h.slice(1)}`]: '1px solid var(--gold-dark)',
            }} />
          )
        })}

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={labelStyle}>{t.name}</label>
              <input name="name" type="text" required placeholder={t.namePh} value={formData.name} onChange={handleChange} style={inputStyle}
                onFocus={e => { e.target.style.borderColor = 'var(--gold)' }}
                onBlur={e => { e.target.style.borderColor = 'var(--border-card)' }}
              />
            </div>
            <div>
              <label style={labelStyle}>{t.phone}</label>
              <input name="phone" type="tel" placeholder={t.phonePh} value={formData.phone} onChange={handleChange} style={inputStyle}
                onFocus={e => { e.target.style.borderColor = 'var(--gold)' }}
                onBlur={e => { e.target.style.borderColor = 'var(--border-card)' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={labelStyle}>{t.email}</label>
            <input name="email" type="email" required placeholder={t.emailPh} value={formData.email} onChange={handleChange} style={inputStyle}
              onFocus={e => { e.target.style.borderColor = 'var(--gold)' }}
              onBlur={e => { e.target.style.borderColor = 'var(--border-card)' }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle}>{t.message}</label>
            <textarea name="message" required rows={5} placeholder={t.messagePh} value={formData.message} onChange={handleChange}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => { e.target.style.borderColor = 'var(--gold)' }}
              onBlur={e => { e.target.style.borderColor = 'var(--border-card)' }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <TurnstileWidget
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
              padding: '0.9rem',
              background: loading || !turnstileToken ? 'var(--border-card)' : 'var(--gold)',
              color: loading || !turnstileToken ? 'var(--text-muted)' : '#fff',
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontFamily: 'Georgia, serif',
              fontWeight: 700,
              border: 'none',
              cursor: loading || !turnstileToken ? 'not-allowed' : 'pointer',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => { if (!loading && turnstileToken) e.currentTarget.style.background = 'var(--gold-bright)' }}
            onMouseLeave={e => { if (!loading && turnstileToken) e.currentTarget.style.background = 'var(--gold)' }}
          >
            {loading ? t.sending : t.send}
          </button>

          {status === 'captcha' && <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--gold)', textAlign: 'center', letterSpacing: '0.1em', fontFamily: "'IM Fell English', Georgia, serif" }}>{t.captcha}</p>}
          {status === 'success' && <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--gold)', textAlign: 'center', letterSpacing: '0.1em', fontFamily: "'IM Fell English', Georgia, serif" }}>{t.success}</p>}
          {status === 'error' && <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#8a2f2f', textAlign: 'center', letterSpacing: '0.1em', fontFamily: "'IM Fell English', Georgia, serif" }}>{t.error}</p>}
        </form>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p style={{
          fontSize: '0.65rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          fontFamily: 'Georgia, serif',
          marginBottom: '0.25rem',
        }}>
          {t.built}
        </p>
        <a href="https://rombautsolutions.be" style={{
          fontSize: '0.6rem',
          color: 'var(--gold-dark)',
          letterSpacing: '0.15em',
          textDecoration: 'none',
          fontFamily: 'Georgia, serif',
          textTransform: 'uppercase',
        }}>
          rombautsolutions.be
        </a>
      </div>

      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <div style={{
          background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
          height: '1px',
          width: '12rem',
          margin: '0 auto 1.5rem',
        }} />
        <p style={{
          fontSize: '0.6rem',
          color: 'var(--gold-dark)',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          fontFamily: 'Georgia, serif',
          marginBottom: '0.25rem',
        }}>
          {t.footer}
        </p>
        <p style={{
          fontSize: '0.55rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.15em',
          fontFamily: 'Georgia, serif',
        }}>
          {t.footerSub}
        </p>
      </div>
    </section>
  )
}

export default Contact
