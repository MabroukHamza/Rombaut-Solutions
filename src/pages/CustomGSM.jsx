import { useNavigate } from 'react-router-dom'

const details = [
  {
    title: 'Tailored GSM Service',
    description: 'No cookie-cutter solutions. We assess your situation and build a service plan around your specific needs, usage, and goals.',
  },
  {
    title: 'Troubleshooting',
    description: 'Battery draining fast, apps crashing, connectivity issues, slow performance — we diagnose and fix the root cause, not just the symptoms.',
  },
  {
    title: 'Optimization',
    description: 'Your phone fine-tuned for maximum performance and battery life. We strip out the bloat, configure settings, and make it run the way it should.',
  },
  {
    title: 'Privacy Phones',
    description: 'For those who take their digital privacy seriously. We configure devices with privacy-first operating systems and tools to minimize data exposure.',
  },
]

function CustomGSM() {
  const navigate = useNavigate()

  return (
    <div style={{ minHeight: '100vh', background: '#0e0e0e', padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        <button
          onClick={() => navigate('/')}
          style={{ background: 'none', border: 'none', color: '#8a6d00', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', marginBottom: '3rem', padding: 0 }}
          onMouseEnter={e => { e.currentTarget.style.color = '#d4a017' }}
          onMouseLeave={e => { e.currentTarget.style.color = '#8a6d00' }}
        >
          ← Back to Home
        </button>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>📱</span>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.4em', color: '#8a6d00', textTransform: 'uppercase', marginBottom: '0.75rem' }}>— RO Digital —</p>
          <h1 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '2rem', fontWeight: '700', color: '#d4a017', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Custom GSM Service
          </h1>
          <div style={{ background: 'linear-gradient(to right, transparent, #d4a017, transparent)', height: '1px', width: '12rem', margin: '0 auto 1.5rem' }} />
          <p style={{ fontSize: '0.9rem', color: '#a08020', lineHeight: '1.8', maxWidth: '500px', margin: '0 auto' }}>
            Mobile service built around you. From everyday troubleshooting to advanced privacy configurations — we handle it all.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '4rem' }}>
          {details.map((item) => (
            <div key={item.title} style={{ border: '1px solid #3a2e00', padding: '2rem', background: '#111111', transition: 'border-color 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#d4a017' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#3a2e00' }}
            >
              <h3 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '1rem', fontWeight: '700', color: '#d4a017', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                {item.title}
              </h3>
              <div style={{ width: '2rem', height: '1px', background: '#7a5c00', marginBottom: '0.75rem' }} />
              <p style={{ fontSize: '0.85rem', color: '#a08020', lineHeight: '1.8', margin: 0 }}>{item.description}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', border: '1px solid #b8860b', padding: '2.5rem', background: '#111111' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.4em', color: '#8a6d00', textTransform: 'uppercase', marginBottom: '1rem' }}>— Get In Touch —</p>
          <p style={{ fontSize: '0.9rem', color: '#a08020', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            Available in Lokeren, Gent, Serskamp & Wetteren.<br />Tell us what you need and we will take it from there.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/32483318412" style={{ padding: '0.75rem 2rem', background: '#d4a017', color: '#000', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: '700' }}>
              WhatsApp Us
            </a>
            <button onClick={() => navigate('/#contact')} style={{ padding: '0.75rem 2rem', border: '1px solid #d4a017', background: 'none', color: '#d4a017', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer' }}>
              Send Message
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CustomGSM