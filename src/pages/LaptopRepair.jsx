import ServicePage from './ServicePage'

const details = [
  { title: 'Hardware Diagnostics', description: 'Full system scan to identify failing components, overheating issues, and hardware conflicts before any work is done.' },
  { title: 'Screen & Keyboard Repair', description: 'Cracked screen, dead pixels, unresponsive or broken keys — replaced and restored to full working condition.' },
  { title: 'Virus & Malware Removal', description: 'Deep clean of all malicious software and bloatware, with security hardening to prevent future infections.' },
  { title: 'Performance Cleanup', description: 'Slow laptop brought back to speed — startup programs cleared, system settings optimized, resources freed up.' },
]

function LaptopRepair() {
  return (
    <ServicePage
      icon="💻"
      title="Laptop Repair"
      description="Fast diagnostics, honest pricing. No unnecessary replacements — we fix what's actually broken."
      details={details}
    />
  )
}

export default LaptopRepair
