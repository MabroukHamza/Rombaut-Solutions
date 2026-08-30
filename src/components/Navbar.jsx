import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/LanguageContext'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'

const labels = {
  nl: { services: 'Services', reviews: 'Reviews', contact: 'Contact' },
  en: { services: 'Services', reviews: 'Reviews', contact: 'Contact' },
}

function Navbar() {
  const { theme } = useTheme()
  const { lang } = useLang()
  const [open, setOpen] = useState(false)
  const isDark = theme === 'dark'
  const t = labels[lang]

  const links = [
    { to: '/#services', label: t.services },
    { to: '/#reviews', label: t.reviews },
    { to: '/#contact', label: t.contact },
  ]

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: isDark ? 'rgba(14,14,14,0.85)' : 'rgba(250,247,242,0.85)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${isDark ? '#3a2e00' : '#d4b896'}`,
      transition: 'background 0.3s, border-color 0.3s',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0.9rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
      }}>
        <Link to="/" style={{
          fontFamily: 'Georgia, Times New Roman, serif',
          fontSize: '1.1rem',
          fontWeight: '700',
          letterSpacing: '0.1em',
          color: 'var(--gold)',
          textDecoration: 'none',
        }}>
          RO
        </Link>

        <nav className="nav-links" style={{ alignItems: 'center', gap: '2rem' }}>
          {links.map(l => (
            <Link
              key={l.label}
              to={l.to}
              className="nav-link"
              style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav-links" style={{ alignItems: 'center', gap: '0.75rem' }}>
          <ThemeToggle />
          <LanguageToggle />
        </div>

        <button
          className="nav-hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '2.25rem',
            height: '2.25rem',
            background: 'transparent',
            border: `1px solid ${isDark ? '#3a2e00' : '#d4b896'}`,
            borderRadius: '6px',
            color: 'var(--gold)',
            fontSize: '1.1rem',
            cursor: 'pointer',
          }}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div
          className="nav-hamburger"
          style={{
            flexDirection: 'column',
            gap: '1.25rem',
            padding: '1.5rem',
            borderTop: `1px solid ${isDark ? '#3a2e00' : '#d4b896'}`,
            background: isDark ? '#0e0e0e' : '#faf7f2',
          }}
        >
          {links.map(l => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              style={{ fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', textDecoration: 'none' }}
            >
              {l.label}
            </Link>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
