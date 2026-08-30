import { useTheme } from '../context/ThemeContext'

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '0.4rem 0.85rem',
        background: 'transparent',
        border: `1px solid ${isDark ? '#3a2e00' : '#d4b896'}`,
        borderRadius: '20px',
        color: isDark ? '#d4a017' : '#7a5c00',
        fontSize: '0.7rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = isDark ? '#3a2e00' : '#d4b896' }}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <span style={{ fontSize: '0.9rem' }}>{isDark ? '☀' : '🌙'}</span>
      <span>{isDark ? 'Light' : 'Dark'}</span>
    </button>
  )
}

export default ThemeToggle
