import { Routes, Route } from 'react-router-dom'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import LaptopRepair from './pages/LaptopRepair'
import SetupUpgrades from './pages/SetupUpgrades'
import CustomGSM from './pages/CustomGSM'
import DigitalSolutions from './pages/DigitalSolutions'

function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laptop-repair" element={<LaptopRepair />} />
        <Route path="/setup-upgrades" element={<SetupUpgrades />} />
        <Route path="/custom-gsm" element={<CustomGSM />} />
        <Route path="/digital-solutions" element={<DigitalSolutions />} />
      </Routes>
    </>
  )
}

export default App