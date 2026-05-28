import ServicePage from './ServicePage'

const details = [
  { title: 'Websites & Landing Pages', description: 'Fast, clean websites built to convert visitors into customers — from single promo pages to full business sites.' },
  { title: 'AI Tools Integration', description: 'We identify where AI can save your business time and money, then set it up and hand it over ready to use.' },
  { title: 'Business Systems', description: 'Email, domain, communication tools, internal workflows — the digital backbone your business actually needs.' },
  { title: 'IT Support', description: 'Network problems, software issues, security concerns — ongoing support for individuals and small businesses.' },
]

function DigitalSolutions() {
  return (
    <ServicePage
      icon="🌐"
      title="Digital Solutions"
      description="We build and support the digital side of your business — websites, tools, systems, and ongoing IT."
      details={details}
    />
  )
}

export default DigitalSolutions
