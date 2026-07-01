import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

const content = {
  nl: {
    label: '- Binnenkort -',
    title: 'AI Tattoo Designer',
    body: 'Onze AI tattoo designer is momenteel in ontwikkeling. Binnenkort kan je ideeën direct omzetten naar tattoo concepten - beschrijf het gewoon en laat de AI het uitwerken.',
    cta: 'Open AI Designer',
  },
  en: {
    label: '- Coming Soon -',
    title: 'AI Tattoo Designer',
    body: 'Our AI tattoo designer is currently in development. Soon you will be able to turn ideas directly into tattoo concepts - just describe it and let AI shape the design.',
    cta: 'Open AI Designer',
  },
}

function AITeaser() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <section id="ai" style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{
        border: '1px solid var(--gold)',
        padding: '4.5rem 2rem',
        background: 'rgba(244,246,250,0.72)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 70% 55% at 50% 45%, rgba(27,47,82,0.05) 0%, transparent 72%)',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{
            fontSize: '0.68rem',
            letterSpacing: '0.48em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
            fontFamily: 'Georgia, serif',
          }}>
            {t.label}
          </p>
          <h2 style={{
            fontFamily: "'Cinzel', Georgia, serif",
            fontSize: 'clamp(1.5rem, 4vw, 2.35rem)',
            fontWeight: 700,
            color: 'var(--ink)',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            <span style={{ marginRight: '0.65rem' }}>✦</span>{t.title}
          </h2>
          <div style={{
            background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
            height: '1px', width: '12rem', margin: '0 auto 2.25rem',
          }} />
          <p style={{
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.9,
            maxWidth: '620px',
            margin: '0 auto 2.75rem',
            fontFamily: "'IM Fell English', Georgia, serif",
            fontStyle: 'italic',
          }}>
            {t.body}
          </p>
          <Link
            to="/ai-designer"
            style={{
              display: 'inline-block',
              minWidth: '240px',
              padding: '1rem 2.4rem',
              border: '1px solid var(--gold)',
              color: 'var(--gold)',
              background: 'transparent',
              fontSize: '0.72rem',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontFamily: 'Georgia, serif',
              fontWeight: 700,
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
          >
            ✦ {t.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AITeaser
