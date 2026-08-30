import { useNavigate, Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { useReveal } from '../hooks/useReveal'
import { revealTransition, staggerDelay, cardHoverIn, cardHoverOut } from '../styles/reveal'

const labels = {
  nl: {
    back: '← Terug naar Home',
    tag: '— RO Digital —',
    cta: '— Neem Contact Op —',
    location: 'Lokeren, Gent, Serskamp & Wetteren.\nNeem contact op en we regelen de rest.',
    whatsapp: 'WhatsApp',
    message: 'Stuur een Bericht',
    privacy: 'Privacybeleid',
  },
  en: {
    back: '← Back to Home',
    tag: '— RO Digital —',
    cta: '— Get In Touch —',
    location: 'Lokeren, Gent, Serskamp & Wetteren.\nContact us and we will take it from there.',
    whatsapp: 'WhatsApp Us',
    message: 'Send a Message',
    privacy: 'Privacy Policy',
  },
}

function ServicePage({ icon, title, description, details }) {
  const navigate = useNavigate()
  const { lang } = useLang()
  const l = labels[lang]
  const [gridRef, gridVisible] = useReveal()

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', padding: '4rem 1.5rem', transition: 'background 0.3s' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        <button
          onClick={() => navigate('/')}
          style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', marginBottom: '3rem', padding: 0 }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)' }}
        >
          {l.back}
        </button>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>{icon}</span>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.4em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{l.tag}</p>
          <h1 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '2rem', fontWeight: '700', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            {title}
          </h1>
          <div style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)', height: '1px', width: '12rem', margin: '0 auto 1.5rem' }} />
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '500px', margin: '0 auto' }}>
            {description}
          </p>
        </div>

        <div ref={gridRef} style={{ display: 'grid', gap: '1.5rem', marginBottom: '4rem' }}>
          {details.map((item, i) => (
            <div key={item.title}
              className={`reveal ${gridVisible ? 'is-visible' : ''}`}
              style={{ border: '1px solid var(--border-card)', padding: '2rem', background: 'var(--bg-card)', transition: revealTransition, transitionDelay: staggerDelay(gridVisible, i) }}
              onMouseEnter={cardHoverIn}
              onMouseLeave={cardHoverOut}
            >
              <h3 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '1rem', fontWeight: '700', color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                {item.title}
              </h3>
              <div style={{ width: '2rem', height: '1px', background: 'var(--gold-dark)', marginBottom: '0.75rem' }} />
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.8', margin: 0 }}>{item.description}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', border: '1px solid var(--gold)', padding: '2.5rem', background: 'var(--bg-card)', transition: 'background 0.3s' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.4em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>{l.cta}</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
            {l.location}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/32483318412" style={{ padding: '0.75rem 2rem', background: 'var(--gold)', color: 'var(--bg-primary)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: '700' }}>
              {l.whatsapp}
            </a>
            <button onClick={() => navigate('/#contact')} style={{ padding: '0.75rem 2rem', border: '1px solid var(--gold)', background: 'none', color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer' }}>
              {l.message}
            </button>
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/privacy" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            {l.privacy}
          </Link>
        </p>

      </div>
    </div>
  )
}

export default ServicePage
