import { useNavigate } from 'react-router-dom'

function LaptopRepair() {
  const navigate = useNavigate()

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#d4a017' }}>
      <section style={{ padding: '4rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: 'none',
            color: '#d4a017',
            cursor: 'pointer',
            fontSize: '1rem',
            letterSpacing: '0.1em',
            marginBottom: '2rem',
            textTransform: 'uppercase',
          }}
        >
          ← Back
        </button>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.4em', color: '#8a6d00', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            — Laptop Repair Service —
          </p>
          <h1 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '2.5rem', fontWeight: '700', color: '#d4a017', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Professional Laptop Repair
          </h1>
          <div style={{ background: 'linear-gradient(to right, transparent, #d4a017, transparent)', height: '1px', width: '12rem', margin: '0 auto' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '3rem' }}>
          <div>
            <h2 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '1.5rem', color: '#d4a017', marginBottom: '1.5rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              💻 What We Offer
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Hardware diagnostics', 'Screen & keyboard repair', 'Virus removal', 'Performance cleanup', 'Battery replacement', 'Data recovery'].map((item) => (
                <li key={item} style={{ fontSize: '1rem', color: '#a08020', marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '1.5rem', color: '#d4a017', marginBottom: '1.5rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Why Choose Us
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Expert technicians', 'Certified parts', 'Competitive pricing', 'Fast turnaround', 'Local support', 'Warranty included'].map((item) => (
                <li key={item} style={{ fontSize: '1rem', color: '#a08020', marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ background: '#111111', border: '1px solid #3a2e00', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '1.2rem', color: '#d4a017', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Need Your Laptop Fixed?
          </h3>
          <p style={{ color: '#a08020', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Contact us today for a free consultation and quote
          </p>
          <button
            style={{
              background: '#d4a017',
              color: '#0a0a0a',
              border: 'none',
              padding: '0.75rem 2rem',
              fontSize: '0.85rem',
              fontWeight: '700',
              cursor: 'pointer',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              transition: 'opacity 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  )
}

export default LaptopRepair
