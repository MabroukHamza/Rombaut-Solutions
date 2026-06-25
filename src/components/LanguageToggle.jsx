import { useLang } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { useLocation } from 'react-router-dom'

function LanguageToggle() {
  const { lang, toggle } = useLang()
  const { theme } = useTheme()
  const location = useLocation()

  // Only show on cosmetics page
 // if (!location.pathname.startsWith('/cosmetics')) return null

  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      style={{
        position: 'fixed',
        top: '1.25rem',
        right: '8rem',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '0.4rem 0.85rem',
        background: isDark ? '#1a1a1a' : '#faf7f2',
        border: `1px solid ${isDark ? '#3a2e00' : '#d4b896'}`,
        borderRadius: '20px',
        color: isDark ? '#d4a017' : '#7a5c00',
        fontSize: '0.7rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.3s',
      }}
    >
      <span>{lang === 'nl' ? '🇬🇧 EN' : '🇧🇪 NL'}</span>
    </button>
  )
}

export default LanguageToggle