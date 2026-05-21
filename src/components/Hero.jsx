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
        — RO Digital —
      </p>

      <p style={{
        fontSize: '0.8rem',
        letterSpacing: '0.2em',
        color: '#a08020',
        textTransform: 'uppercase',
        marginBottom: '0.5rem',
      }}>
        System Repair — Biological or Digital
      </p>

      <p style={{
        fontSize: '0.7rem',
        letterSpacing: '0.2em',
        color: '#8a6d00',
        textTransform: 'uppercase',
        marginBottom: '2.5rem',
      }}>
        Restore. Optimize. Elevate.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
        <a
          href="#services"
          style={btnOutline}
          onMouseEnter={e => { e.currentTarget.style.background = '#d4a017'; e.currentTarget.style.color = '#000'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#d4a017'; }}
        >
          Our Services
        </a>
        <a
          href="#contact"
          style={btnFilled}
          onMouseEnter={e => { e.currentTarget.style.background = '#f5d060'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#d4a017'; }}
        >
          Get In Touch
        </a>
      </div>

      <div style={goldLine} />

    </section>
  )
}

export default Hero