import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Why from './components/Why'
import AITeaser from './components/AITeaser'
import AISection from './components/AISection'
import Contact from './components/Contact'

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Why />
        <AITeaser />
        <Contact />
      </main>
    </>
  )
}

function AIPage() {
  return (
    <>
      <Navbar />
      <main>
        <AISection />
      </main>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ai-designer" element={<AIPage />} />
    </Routes>
  )
}

export default App
