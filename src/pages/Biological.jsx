function Biological() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem', transition: 'background 0.3s' }}>

      <div style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)', height: '1px', width: '12rem', marginBottom: '2.5rem' }} />

      <span style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '5rem', fontWeight: '700', color: 'var(--gold)', lineHeight: '1', display: 'block', marginBottom: '1rem', letterSpacing: '-0.05em' }}>
        RO
      </span>

      <h1 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '1.5rem', fontWeight: '700', color: 'var(--gold)', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
        Rombaut Biological
      </h1>

      <p style={{ fontSize: '0.7rem', letterSpacing: '0.4em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '2rem' }}>
        — Coming Soon —
      </p>

      <div style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)', height: '1px', width: '12rem', marginBottom: '2rem' }} />

      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '420px', marginBottom: '2.5rem' }}>
        Lifestyle reset. Performance coaching. Discipline systems. Body & mind optimization. launching soon.
      </p>

      <a
        href="https://www.instagram.com/rombaut.solutions"
        style={{ fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid var(--gold-dark)', paddingBottom: '2px' }}
      >
        📸 Follow us for updates
      </a>

    </div>
  )
}

export default Biological