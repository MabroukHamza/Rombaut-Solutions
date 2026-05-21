import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Services />
    <Contact />
  </StrictMode>,
)