import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'

const content = {
  nl: {
    eyebrow: '— AI Tijdelijke Tattoo Studio —',
    tagline: 'Probeer het\nvóór het voor altijd is.',
    sub: 'Upload een design, beschrijf een idee of stuur een schets. Inktrail maakt jouw concept tattoo-klaar — zonder permanente inkt.',
    cta1: 'Bekijk onze services',
    cta2: 'Neem contact op',
    scroll: 'Scroll om meer te ontdekken',
    byLine: '— by Rombaut Solutions —',
  },
  en: {
    eyebrow: '— AI Temporary Tattoo Studio —',
    tagline: 'Try it before\nit\'s forever.',
    sub: 'Upload a design, describe an idea, or send a sketch. Inktrail transforms your concept into a wearable temporary tattoo — no permanent commitment.',
    cta1: 'See our services',
    cta2: 'Get in touch',
    scroll: 'Scroll to explore',
    byLine: '— by Rombaut Solutions —',
  },
}

// Decorative tattoo flash SVG elements
function FlashDagger({ style }) {
  return (
    <svg viewBox="0 0 40 120" style={{ width: 24, opacity: 0.22, ...style }} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4 L26 30 L24 90 L20 116 L16 90 L14 30 Z" stroke="var(--gold)" strokeWidth="1.5" fill="none"/>
      <path d="M20 4 L24 14 L20 12 L16 14 Z" fill="var(--gold)" opacity="0.6"/>
      <path d="M14 50 L8 44 L14 48 M26 50 L32 44 L26 48" stroke="var(--gold)" strokeWidth="1"/>
    </svg>
  )
}

function FlashRose({ style }) {
  return (
    <svg viewBox="0 0 80 80" style={{ width: 36, opacity: 0.2, ...style }} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="32" r="18" stroke="var(--gold)" strokeWidth="1.2" fill="none"/>
      <path d="M40 14 Q48 22 40 32 Q32 22 40 14Z" stroke="var(--gold)" strokeWidth="1" fill="none"/>
      <path d="M22 32 Q30 24 40 32 Q30 40 22 32Z" stroke="var(--gold)" strokeWidth="1" fill="none"/>
      <path d="M58 32 Q50 24 40 32 Q50 40 58 32Z" stroke="var(--gold)" strokeWidth="1" fill="none"/>
      <path d="M40 50 Q48 42 40 32 Q32 42 40 50Z" stroke="var(--gold)" strokeWidth="1" fill="none"/>
      <path d="M38 50 Q36 58 34 72 M42 50 Q44 58 46 72" stroke="var(--gold)" strokeWidth="1"/>
      <path d="M30 62 Q36 58 34 72 M50 62 Q44 58 46 72" stroke="var(--gold)" strokeWidth="0.8"/>
    </svg>
  )
}

function FlashEagle({ style }) {
  return (
    <svg viewBox="0 0 100 70" style={{ width: 52, opacity: 0.2, ...style }} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10 Q60 20 70 18 Q80 16 88 22 Q76 24 68 30 Q72 38 68 44 Q60 36 50 40 Q40 36 32 44 Q28 38 32 30 Q24 24 12 22 Q20 16 30 18 Q40 20 50 10Z" stroke="var(--gold)" strokeWidth="1.2" fill="none"/>
      <path d="M44 40 L42 56 L50 52 L58 56 L56 40" stroke="var(--gold)" strokeWidth="1" fill="none"/>
      <path d="M47 10 L50 4 L53 10" stroke="var(--gold)" strokeWidth="1"/>
      <circle cx="44" cy="22" r="2" stroke="var(--gold)" strokeWidth="1"/>
    </svg>
  )
}

function FlashSnake({ style }) {
  return (
    <svg viewBox="0 0 30 100" style={{ width: 18, opacity: 0.2, ...style }} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 8 Q22 18 15 28 Q8 38 15 48 Q22 58 15 68 Q8 78 15 88" stroke="var(--gold)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M12 6 Q15 2 18 6 L16 12 L14 12 Z" fill="var(--gold)" opacity="0.5"/>
      <path d="M13 88 L10 96 M17 88 L20 96" stroke="var(--gold)" strokeWidth="1"/>
    </svg>
  )
}

function Hero() {
  const { lang } = useLang()
  const t = content[lang]
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '6rem 1.5rem 4rem',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Radial glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 45%, rgba(138,101,0,0.06) 0%, transparent 70%)',
      }} />

      {/* Corner flash ornaments */}
      <FlashDagger style={{ position: 'absolute', top: '8%', left: '6%', transform: 'rotate(-15deg)' }} />
      <FlashRose style={{ position: 'absolute', top: '12%', left: '12%' }} />
      <FlashDagger style={{ position: 'absolute', top: '8%', right: '6%', transform: 'rotate(15deg) scaleX(-1)' }} />
      <FlashRose style={{ position: 'absolute', top: '12%', right: '12%', transform: 'scaleX(-1)' }} />
      <FlashEagle style={{ position: 'absolute', top: '6%', left: '50%', transform: 'translateX(-50%)' }} />
      <FlashSnake style={{ position: 'absolute', bottom: '15%', left: '5%' }} />
      <FlashSnake style={{ position: 'absolute', bottom: '15%', right: '5%', transform: 'scaleX(-1)' }} />

      {/* Top gold line */}
      <div style={{
        background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
        height: '1px', width: '14rem', marginBottom: '2rem',
        opacity: mounted ? 1 : 0, transition: 'opacity 0.8s ease',
      }} />

      {/* Fraktur logo */}
      <div style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
      }}>
        <span style={{
          fontFamily: "'UnifrakturMaguntia', Georgia, serif",
          fontSize: 'clamp(4rem, 12vw, 7rem)',
          color: 'var(--gold)',
          lineHeight: 1,
          display: 'block',
          letterSpacing: '0.02em',
          textShadow: '0 0 40px rgba(138,101,0,0.2)',
        }}>
          Inktrail
        </span>
      </div>

      {/* Eyebrow */}
      <p style={{
        fontSize: '0.65rem',
        letterSpacing: '0.45em',
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        marginTop: '0.5rem',
        marginBottom: '2rem',
        fontFamily: 'Georgia, serif',
        opacity: mounted ? 1 : 0,
        transition: 'opacity 0.7s ease 0.25s',
      }}>
        {t.eyebrow}
      </p>

      {/* Gold divider */}
      <div style={{
        background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
        height: '1px', width: '10rem', marginBottom: '2.5rem',
        opacity: mounted ? 1 : 0, transition: 'opacity 0.8s ease 0.3s',
      }} />

      {/* Main tagline */}
      <h1 style={{
        fontFamily: "'Cinzel', Georgia, serif",
        fontSize: 'clamp(1.8rem, 5vw, 3.2rem)',
        fontWeight: 700,
        color: 'var(--text-primary)',
        letterSpacing: '0.05em',
        lineHeight: 1.2,
        maxWidth: '620px',
        marginBottom: '1.75rem',
        whiteSpace: 'pre-line',
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s',
      }}>
        {t.tagline}
      </h1>

      {/* Subtitle */}
      <p style={{
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.85,
        maxWidth: '480px',
        marginBottom: '2.75rem',
        fontFamily: "'IM Fell English', Georgia, serif",
        fontStyle: 'italic',
        opacity: mounted ? 1 : 0,
        transition: 'opacity 0.7s ease 0.5s',
      }}>
        {t.sub}
      </p>

      {/* CTAs */}
      <div style={{
        display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center',
        marginBottom: '3rem',
        opacity: mounted ? 1 : 0,
        transition: 'opacity 0.7s ease 0.6s',
      }}>
        <a
          href="#services"
          style={{
            padding: '0.8rem 2.2rem',
            border: '1px solid var(--gold)',
            color: 'var(--gold)',
            background: 'transparent',
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontFamily: 'Georgia, serif',
            transition: 'all 0.3s',
            display: 'inline-block',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#000' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
        >
          {t.cta1}
        </a>
        <a
          href="#contact"
          style={{
            padding: '0.8rem 2.2rem',
            background: 'var(--gold)',
            color: '#000',
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontFamily: 'Georgia, serif',
            fontWeight: 700,
            border: '1px solid var(--gold)',
            transition: 'all 0.3s',
            display: 'inline-block',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-bright)'; e.currentTarget.style.borderColor = 'var(--gold-bright)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.borderColor = 'var(--gold)' }}
        >
          {t.cta2}
        </a>
      </div>

      {/* Bottom line + by line */}
      <div style={{
        opacity: mounted ? 1 : 0, transition: 'opacity 0.8s ease 0.7s',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
      }}>
        <div style={{
          background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
          height: '1px', width: '14rem',
        }} />
        <p style={{
          fontSize: '0.6rem', letterSpacing: '0.4em', color: 'var(--text-muted)',
          textTransform: 'uppercase', fontFamily: 'Georgia, serif',
        }}>
          {t.byLine}
        </p>
      </div>

    </section>
  )
}

export default Hero