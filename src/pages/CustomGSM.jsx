import ServicePage from './ServicePage'

const details = [
  { title: 'Custom Service Plan', description: 'We assess your phone, usage, and goals — then build a service plan around that instead of a one-size-fits-all approach.' },
  { title: 'Troubleshooting', description: 'Battery issues, crashes, connectivity problems, slow performance — we find the root cause and fix it.' },
  { title: 'App & Storage Management', description: 'Cluttered storage, background apps draining battery, bloatware taking up space — cleaned up and organized.' },
  { title: 'Privacy Phones', description: 'Devices configured with privacy-first operating systems and tools for people who want control over their own data.' },
]

function CustomGSM() {
  return (
    <ServicePage
      icon="📱"
      title="Custom GSM Service"
      description="Mobile service built around your situation — from everyday fixes to full privacy setups."
      details={details}
    />
  )
}

export default CustomGSM
