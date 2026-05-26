import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LaptopRepair from './pages/LaptopRepair'
import SetupUpgrades from './pages/SetupUpgrades'

import DigitalSolution from './pages/DigitalSolution'
import CustomGSM from './pages/CustomGSM'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/laptop-repair" element={<LaptopRepair />} />
      <Route path="/setup-upgrades" element={<SetupUpgrades />} />
      <Route path="/custom-gsm" element={<CustomGSM />} />
      <Route path="/digital-solutions" element={<DigitalSolution />} />
    </Routes>
  )
}

export default App