import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('ro-lang') || 'nl'
  })

  const toggle = () => {
    const next = lang === 'nl' ? 'en' : 'nl'
    localStorage.setItem('ro-lang', next)
    setLang(next)
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}