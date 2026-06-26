import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Why from './components/Why'
import AISection from './components/AISection'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Why />
        <AISection />
        <Contact />
      </main>
    </>
  )
}

export default App