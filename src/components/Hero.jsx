import { useLang } from '../context/LanguageContext'

const content = {
  nl: {
    tagline: '— RO Digital —',
    sub1: 'Jouw lokale technologie-expert in Lokeren & omgeving.',
    sub2: 'Laptops · Telefoons · Websites — Geregeld.',
    services: 'Onze Services',
    contact: 'Neem Contact Op',
  },
  en: {
    tagline: '— RO Digital —',
    sub1: 'Your local tech fix in Lokeren & surroundings.',
    sub2: 'Laptops · Phones · Websites — Handled.',
    services: 'Our Services',
    contact: 'Get In Touch',
  },
}

const goldLine = {
  background: 'linear-gradient(to right, transparent, #d4a017, transparent)',
  height: '1px',
  width: '12rem',
  marginBottom: '2.5rem',
}

const glowBg = {
  position: 'absolute',
  inset: 0,
  background: 'radial-gradient(ellipse at center, rgba(122,92,0,0.13) 0%, transparent 70%)',
  pointerEvents: 'none',
}

const btnOutline = {
  padding: '0.75rem 2rem',
  fontSize: '0.75rem',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  border: '1px solid #d4a017',
  color: '#d4a017',
  background: 'transparent',
  cursor: 'pointer',
  transition: 'all 0.3s',
  textDecoration: 'none',
  display: 'inline-block',
}

const btnFilled = {
  padding: '0.75rem 2rem',
  fontSize: '0.75rem',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  border: '1px solid #d4a017',
  color: '#000',
  background: '#d4a017',
  cursor: 'pointer',
  transition: 'all 0.3s',
  textDecoration: 'none',
  display: 'inline-block',
}

function Hero() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 1.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>

      <div style={glowBg} />
      <div style={goldLine} />

      <span style={{
        fontFamily: 'Georgia, Times New Roman, serif',
        fontSize: '6rem',
        fontWeight: '700',
        color: '#d4a017',
        lineHeight: '1',
        letterSpacing: '-0.05em',
        display: 'block',
        marginBottom: '1rem',
      }}>
        RO
      </span>

      <h1 style={{
        fontFamily: 'Georgia, Times New Roman, serif',
        fontSize: '1.5rem',
        fontWeight: '700',
        letterSpacing: '0.3em',
        color: '#d4a017',
        textTransform: 'uppercase',
        marginBottom: '0.25rem',
      }}>
        Rombaut Solutions
      </h1>

      <p style={{
        fontSize: '0.7rem',
        letterSpacing: '0.4em',
        color: '#8a6d00',
        textTransform: 'uppercase',
        marginBottom: '1.5rem',
      }}>
        {t.tagline}
      </p>

      <p style={{
        fontSize: '0.9rem',
        color: '#a08020',
        marginBottom: '0.5rem',
        lineHeight: '1.6',
      }}>
        {t.sub1}
      </p>

      <p style={{
        fontSize: '0.8rem',
        letterSpacing: '0.1em',
        color: '#8a6d00',
        textTransform: 'uppercase',
        marginBottom: '2.5rem',
      }}>
        {t.sub2}
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
        <a
          href="#services"
          style={btnOutline}
          onMouseEnter={e => { e.currentTarget.style.background = '#d4a017'; e.currentTarget.style.color = '#000'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#d4a017'; }}
        >
          {t.services}
        </a>
        <a
          href="#contact"
          style={btnFilled}
          onMouseEnter={e => { e.currentTarget.style.background = '#f5d060'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#d4a017'; }}
        >
          {t.contact}
        </a>
      </div>

      <div style={goldLine} />

    </section>
  )
}

export default Hero