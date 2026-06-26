import { useLang } from '../context/LanguageContext'

const content = {
  nl: {
    label: '— Neem Contact Op —',
    title: 'Contact',
    body: 'Interesse in een custom tattoo ontwerp of event pack? Neem contact op via WhatsApp of e-mail. We reageren binnen 24 uur.',
    whatsapp: '📱 WhatsApp',
    email: '✉ E-mail',
    instagram: '📸 Instagram',
    built: 'Een project van Rombaut Solutions',
    footer: '© 2025 Inktrail — by Rombaut Solutions',
    footerSub: 'inktrail.rombautsolutions.be',
  },
  en: {
    label: '— Get In Touch —',
    title: 'Contact',
    body: 'Interested in a custom tattoo design or event pack? Reach out via WhatsApp or email. We respond within 24 hours.',
    whatsapp: '📱 WhatsApp',
    email: '✉ Email',
    instagram: '📸 Instagram',
    built: 'A project by Rombaut Solutions',
    footer: '© 2025 Inktrail — by Rombaut Solutions',
    footerSub: 'inktrail.rombautsolutions.be',
  },
}

function Contact() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <section id="contact" style={{ padding: '6rem 1.5rem 4rem', maxWidth: '700px', margin: '0 auto' }}>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{
          fontSize: '0.65rem', letterSpacing: '0.45em',
          color: 'var(--text-muted)', textTransform: 'uppercase',
          marginBottom: '0.75rem', fontFamily: 'Georgia, serif',
        }}>
          {t.label}
        </p>
        <h2 style={{
          fontFamily: "'Cinzel', Georgia, serif",
          fontSize: '2rem', fontWeight: 700,
          color: 'var(--gold)', letterSpacing: '0.2em',
          textTransform: 'uppercase', marginBottom: '1rem',
        }}>
          {t.title}
        </h2>
        <div style={{
          background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
          height: '1px', width: '12rem', margin: '0 auto',
        }} />
      </div>

      <div style={{
        border: '1px solid var(--gold)',
        padding: '3rem 2.5rem',
        background: 'var(--bg-card)',
        textAlign: 'center',
        position: 'relative',
      }}>
        {/* Corner decorations */}
        {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => {
          const [v, h] = pos.split('-')
          return (
            <div key={pos} style={{
              position: 'absolute',
              [v]: '0.75rem', [h]: '0.75rem',
              width: '16px', height: '16px',
              [`border${v.charAt(0).toUpperCase() + v.slice(1)}`]: '1px solid var(--gold-dark)',
              [`border${h.charAt(0).toUpperCase() + h.slice(1)}`]: '1px solid var(--gold-dark)',
            }} />
          )
        })}

        <p style={{
          fontSize: '0.88rem', color: 'var(--text-secondary)',
          lineHeight: 1.85, marginBottom: '2rem',
          fontFamily: "'IM Fell English', Georgia, serif", fontStyle: 'italic',
        }}>
          {t.body}
        </p>

        <div style={{
          display: 'flex', gap: '1rem',
          justifyContent: 'center', flexWrap: 'wrap',
          marginBottom: '2rem',
        }}>
          <a
            href="https://wa.me/32483318412"
            style={{
              padding: '0.8rem 2rem',
              background: 'var(--gold)', color: '#000',
              fontSize: '0.72rem', letterSpacing: '0.18em',
              textTransform: 'uppercase', textDecoration: 'none',
              fontWeight: 700, fontFamily: 'Georgia, serif',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-bright)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)' }}
          >
            {t.whatsapp}
          </a>
          <a
            href="mailto:info@rombautsolutions.be"
            style={{
              padding: '0.8rem 2rem',
              border: '1px solid var(--gold)', color: 'var(--gold)',
              background: 'transparent',
              fontSize: '0.72rem', letterSpacing: '0.18em',
              textTransform: 'uppercase', textDecoration: 'none',
              fontFamily: 'Georgia, serif', transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#000' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
          >
            {t.email}
          </a>
        </div>

        <div style={{
          background: 'linear-gradient(to right, transparent, var(--gold-dark), transparent)',
          height: '1px', margin: '0 auto 1.5rem', width: '8rem',
        }} />

        <a
          href="https://www.instagram.com/rombaut.solutions"
          style={{
            fontSize: '0.7rem', color: 'var(--text-muted)',
            letterSpacing: '0.15em', textTransform: 'uppercase',
            textDecoration: 'none', fontFamily: 'Georgia, serif',
            borderBottom: '1px solid var(--gold-dark)', paddingBottom: '2px',
            transition: 'color 0.3s, border-color 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderColor = 'var(--gold)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--gold-dark)' }}
        >
          {t.instagram}
        </a>
      </div>

      {/* Built by */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p style={{
          fontSize: '0.65rem', color: 'var(--text-muted)',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          fontFamily: 'Georgia, serif', marginBottom: '0.25rem',
        }}>
          {t.built}
        </p>
        <a
          href="https://rombautsolutions.be"
          style={{
            fontSize: '0.6rem', color: 'var(--gold-dark)',
            letterSpacing: '0.15em', textDecoration: 'none',
            fontFamily: 'Georgia, serif', textTransform: 'uppercase',
          }}
        >
          rombautsolutions.be
        </a>
      </div>

      {/* Footer */}
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <div style={{
          background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
          height: '1px', width: '12rem', margin: '0 auto 1.5rem',
        }} />
        <p style={{
          fontSize: '0.6rem', color: 'var(--gold-dark)',
          letterSpacing: '0.25em', textTransform: 'uppercase',
          fontFamily: 'Georgia, serif', marginBottom: '0.25rem',
        }}>
          {t.footer}
        </p>
        <p style={{
          fontSize: '0.55rem', color: 'var(--text-muted)',
          letterSpacing: '0.15em', fontFamily: 'Georgia, serif',
        }}>
          {t.footerSub}
        </p>
      </div>

    </section>
  )
}

export default Contact