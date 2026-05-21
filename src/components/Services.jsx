const services = [
  {
    icon: '💻',
    title: 'Laptop Repair',
    items: ['Hardware diagnostics', 'Screen & keyboard repair', 'Virus removal', 'Performance cleanup'],
  },
  {
    icon: '⚙️',
    title: 'Setup & Upgrades',
    items: ['New laptop setup', 'RAM & SSD upgrades', 'Software installation', 'Data migration'],
  },
  {
    icon: '📱',
    title: 'Custom GSM Service',
    items: ['Tailored to your needs', 'Troubleshooting', 'Optimization', 'Privacy phones'],
  },
  {
    icon: '🌐',
    title: 'Digital Solutions',
    items: ['Website & landing pages', 'AI tools integration', 'Business systems', 'IT support'],
  },
]

function Services() {
  return (
    <section id="services" style={{
      padding: '6rem 1.5rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.4em', color: '#8a6d00', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          — What We Do —
        </p>
        <h2 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '2rem', fontWeight: '700', color: '#d4a017', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Our Services
        </h2>
        <div style={{ background: 'linear-gradient(to right, transparent, #d4a017, transparent)', height: '1px', width: '12rem', margin: '0 auto' }} />
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.5rem',
      }}>
        {services.map((service) => (
          <div
            key={service.title}
            style={{
              border: '1px solid #3a2e00',
              padding: '2rem 1.5rem',
              background: '#111111',
              transition: 'border-color 0.3s',
              cursor: 'default',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#d4a017'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#3a2e00'; }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{service.icon}</div>
            <h3 style={{
              fontFamily: 'Georgia, Times New Roman, serif',
              fontSize: '1rem',
              fontWeight: '700',
              color: '#d4a017',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>
              {service.title}
            </h3>
            <div style={{ width: '2rem', height: '1px', background: '#7a5c00', marginBottom: '1rem' }} />
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {service.items.map((item) => (
                <li key={item} style={{
                  fontSize: '0.8rem',
                  color: '#a08020',
                  letterSpacing: '0.05em',
                  paddingBottom: '0.4rem',
                  lineHeight: '1.6',
                }}>
                  · {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Service area note */}
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <p style={{ fontSize: '0.75rem', color: '#8a6d00', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          📍 Lokeren · Gent · Serskamp · Wetteren
        </p>
      </div>

    </section>
  )
}

export default Services