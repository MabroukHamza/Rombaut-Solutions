import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem', transition: 'background 0.3s' }}>

      <div style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)', height: '1px', width: '12rem', marginBottom: '2.5rem' }} />

      <span style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '6rem', fontWeight: '700', color: 'var(--gold)', lineHeight: '1', display: 'block', marginBottom: '1rem' }}>
        404
      </span>

      <h1 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '1.25rem', fontWeight: '700', color: 'var(--gold)', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
        Page Not Found
      </h1>

      <p style={{ fontSize: '0.7rem', letterSpacing: '0.4em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '2.5rem' }}>
        — This page doesn't exist —
      </p>

      <button
        onClick={() => navigate('/')}
        style={{ padding: '0.75rem 2rem', background: 'var(--gold)', color: 'var(--bg-primary)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', fontFamily: 'Georgia, Times New Roman, serif', fontWeight: '700', transition: 'background 0.3s' }}
        onMouseEnter={e => { e.currentTarget.style.background = '#f5d060' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)' }}
      >
        Back to Home
      </button>

      <div style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)', height: '1px', width: '12rem', marginTop: '2.5rem' }} />

    </div>
  )
}

export default NotFound