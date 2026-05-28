import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function ServicePage({ icon, title, description, details }) {
  const navigate = useNavigate()
  const { theme } = useTheme()

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', padding: '4rem 1.5rem', transition: 'background 0.3s' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        <button
          onClick={() => navigate('/')}
          style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', marginBottom: '3rem', padding: 0 }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)' }}
        >
          ← Back to Home
        </button>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>{icon}</span>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.4em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>— RO Digital —</p>
          <h1 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '2rem', fontWeight: '700', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            {title}
          </h1>
          <div style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)', height: '1px', width: '12rem', margin: '0 auto 1.5rem' }} />
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '500px', margin: '0 auto' }}>
            {description}
          </p>
        </div>

        <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '4rem' }}>
          {details.map((item) => (
            <div key={item.title}
              style={{ border: '1px solid var(--border-card)', padding: '2rem', background: 'var(--bg-card)', transition: 'border-color 0.3s, background 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-card)' }}
            >
              <h3 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '1rem', fontWeight: '700', color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                {item.title}
              </h3>
              <div style={{ width: '2rem', height: '1px', background: 'var(--gold-dark)', marginBottom: '0.75rem' }} />
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.8', margin: 0 }}>{item.description}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', border: '1px solid var(--gold)', padding: '2.5rem', background: 'var(--bg-card)', transition: 'background 0.3s' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.4em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>{details.cta || '— Get In Touch —'}</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            Lokeren, Gent, Serskamp & Wetteren.<br />Contact us and we will take it from there.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/32483318412" style={{ padding: '0.75rem 2rem', background: 'var(--gold)', color: 'var(--bg-primary)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: '700' }}>
              WhatsApp Us
            </a>
            <button onClick={() => navigate('/#contact')} style={{ padding: '0.75rem 2rem', border: '1px solid var(--gold)', background: 'none', color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer' }}>
              Send a Message
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ServicePage
