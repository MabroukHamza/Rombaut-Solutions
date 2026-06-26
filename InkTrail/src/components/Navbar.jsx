import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'

const navContent = {
  nl: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Waarom', href: '#why' },
    { label: 'AI', href: '#ai' },
    { label: 'Contact', href: '#contact' },
  ],
  en: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Why', href: '#why' },
    { label: 'AI', href: '#ai' },
    { label: 'Contact', href: '#contact' },
  ],
}

function Navbar() {
  const { lang, toggle } = useLang()
  const links = navContent[lang]
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 500,
      padding: '0.85rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(255,255,255,0.94)' : 'transparent',
      borderBottom: scrolled ? '1px solid #c0ccdc' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'background 0.4s, border-color 0.4s',
    }}>
      {/* Logo */}
      <a href="#home" style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: "'UnifrakturMaguntia', Georgia, serif",
          fontSize: '1.5rem',
          color: 'var(--gold)',
          lineHeight: 1,
        }}>
          Inktrail
        </span>
      </a>

      {/* Nav links + lang toggle together */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            style={{
              fontSize: '0.62rem',
              letterSpacing: '0.22em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontFamily: 'Georgia, serif',
              transition: 'color 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)' }}
          >
            {l.label}
          </a>
        ))}

        {/* Divider */}
        <div style={{ width: '1px', height: '14px', background: '#c0ccdc' }} />

        {/* Language toggle inline */}
        <button
          onClick={toggle}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.3rem 0.7rem',
            background: 'transparent',
            border: '1px solid #c0ccdc',
            borderRadius: '20px',
            color: 'var(--text-muted)',
            fontSize: '0.62rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontFamily: 'Georgia, serif',
            transition: 'all 0.25s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#c8b888'; e.currentTarget.style.color = 'var(--text-muted)' }}
        >
          <span>{lang === 'nl' ? '🇬🇧 EN' : '🇧🇪 NL'}</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar