import ServicePage from './ServicePage'

const details = [
  { title: 'New Laptop Setup', description: 'OS configuration, essential software, security settings, and everything transferred from your old machine — ready to use from day one.' },
  { title: 'RAM & SSD Upgrades', description: 'More RAM fixes slow multitasking. An SSD fixes slow boot times. Often the cheapest way to make an old machine feel new.' },
  { title: 'Software Installation', description: 'Clean install of the tools you actually need — productivity apps, security software, drivers, and custom configurations for your workflow.' },
  { title: 'Data Migration', description: 'All your files, settings, and applications moved safely to your new device without losing anything.' },
]

function SetupUpgrades() {
  return (
    <ServicePage
      icon="⚙️"
      title="Setup & Upgrades"
      description="New device or old hardware — we make sure it runs exactly how it should."
      details={details}
    />
  )
}

export default SetupUpgrades
