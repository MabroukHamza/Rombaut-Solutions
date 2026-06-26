import { useLang } from '../context/LanguageContext'

const content = {
  nl: {
    label: '— De Reden —',
    title: 'Waarom Inktrail?',
    body: 'Een tattoo is permanent. Een idee niet. Inktrail laat je testen hoe een ontwerp eruitziet en aanvoelt voordat je ooit permanente inkt zet. Test plaatsing, grootte en visuele impact — op jouw huid, jouw manier.',
    quote: 'Try it before it\'s forever.',
    pillars: [
      { icon: '⚡', label: 'Snel', text: 'Van idee naar draagbaar design in 24u.' },
      { icon: '✦', label: 'AI-Aangedreven', text: 'Onze AI helpt je idee uitwerken tot strak design.' },
      { icon: '🔒', label: 'Geen Risico', text: 'Tijdelijk. Volledig uitwasbaar. Geen spijt.' },
    ],
  },
  en: {
    label: '— The Reason —',
    title: 'Why Inktrail?',
    body: 'A tattoo is permanent. An idea is not. Inktrail lets you test how a design looks and feels before you ever commit to permanent ink. Test placement, scale, and visual impact — on your skin, your terms.',
    quote: 'Try it before it\'s forever.',
    pillars: [
      { icon: '⚡', label: 'Fast', text: 'From idea to wearable design in 24 hours.' },
      { icon: '✦', label: 'AI-Powered', text: 'Our AI helps shape your idea into a refined design.' },
      { icon: '🔒', label: 'No Risk', text: 'Temporary. Fully washable. No regrets.' },
    ],
  },
}

function Why() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <section id="why" style={{ padding: '6rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{
          fontSize: '0.65rem', letterSpacing: '0.45em',
          color: 'var(--text-muted)', textTransform: 'uppercase',
          marginBottom: '0.75rem', fontFamily: 'Georgia, serif',
        }}>
          {t.label}
        </p>
        <h2 style={{
          fontFamily: "'Cinzel', Georgia, serif",
          fontSize: '2rem', fontWeight: 700,
          color: 'var(--gold)', letterSpacing: '0.2em',
          textTransform: 'uppercase', marginBottom: '1rem',
        }}>
          {t.title}
        </h2>
        <div style={{
          background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
          height: '1px', width: '12rem', margin: '0 auto',
        }} />
      </div>

      {/* Main manifesto card */}
      <div style={{
        border: '1px solid var(--gold)',
        padding: '3rem 2.5rem',
        background: 'var(--bg-card)',
        textAlign: 'center',
        marginBottom: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Corner decorations */}
        <div style={{
          position: 'absolute', top: '0.75rem', left: '0.75rem',
          width: '16px', height: '16px',
          borderTop: '1px solid var(--gold-dark)', borderLeft: '1px solid var(--gold-dark)',
        }} />
        <div style={{
          position: 'absolute', top: '0.75rem', right: '0.75rem',
          width: '16px', height: '16px',
          borderTop: '1px solid var(--gold-dark)', borderRight: '1px solid var(--gold-dark)',
        }} />
        <div style={{
          position: 'absolute', bottom: '0.75rem', left: '0.75rem',
          width: '16px', height: '16px',
          borderBottom: '1px solid var(--gold-dark)', borderLeft: '1px solid var(--gold-dark)',
        }} />
        <div style={{
          position: 'absolute', bottom: '0.75rem', right: '0.75rem',
          width: '16px', height: '16px',
          borderBottom: '1px solid var(--gold-dark)', borderRight: '1px solid var(--gold-dark)',
        }} />

        <p style={{
          fontSize: '0.9rem', color: 'var(--text-secondary)',
          lineHeight: 1.9, maxWidth: '640px', margin: '0 auto 2rem',
          fontFamily: "'IM Fell English', Georgia, serif",
          fontStyle: 'italic',
        }}>
          {t.body}
        </p>

        <div style={{
          background: 'linear-gradient(to right, transparent, var(--gold-dark), transparent)',
          height: '1px', width: '8rem', margin: '0 auto 1.5rem',
        }} />

        <p style={{
          fontFamily: "'Cinzel', Georgia, serif",
          fontSize: '1.1rem', fontStyle: 'italic',
          color: 'var(--gold)', letterSpacing: '0.05em',
        }}>
          "{t.quote}"
        </p>
      </div>

      {/* Three pillars */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
      }}>
        {t.pillars.map((p) => (
          <div key={p.label} style={{
            border: '1px solid var(--border-card)',
            padding: '1.5rem',
            background: 'var(--bg-card)',
            textAlign: 'center',
            transition: 'border-color 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-card)' }}
          >
            <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.75rem' }}>{p.icon}</span>
            <p style={{
              fontFamily: "'Cinzel', Georgia, serif",
              fontSize: '0.75rem', letterSpacing: '0.18em',
              color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.6rem',
            }}>
              {p.label}
            </p>
            <div style={{ width: '1.5rem', height: '1px', background: 'var(--gold-dark)', margin: '0 auto 0.75rem' }} />
            <p style={{
              fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.65,
              fontFamily: "'IM Fell English', Georgia, serif", fontStyle: 'italic',
            }}>
              {p.text}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Why