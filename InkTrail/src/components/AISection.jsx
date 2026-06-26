import { useState } from 'react'
import { useLang } from '../context/LanguageContext'

const content = {
  nl: {
    label: '— Binnenkort —',
    title: 'AI Tattoo Designer',
    body: 'Onze AI tattoo designer is momenteel in ontwikkeling. Binnenkort kan je ideeën direct omzetten naar tattoo concepten — beschrijf het gewoon en laat de AI het uitwerken.',
    btn: '✦ Open AI Designer',
    modalTitle: 'AI Tattoo Designer',
    modalSub: 'Binnenkort beschikbaar',
    modalBody: 'Onze lokale AI workflow is in ontwikkeling. Binnenkort kan je hier jouw eigen tattoo design genereren op basis van een beschrijving.',
    close: 'Sluiten',
  },
  en: {
    label: '— Coming Soon —',
    title: 'AI Tattoo Designer',
    body: 'Our AI tattoo designer is currently in development. Soon you will be able to transform ideas into tattoo concepts directly — just describe it and let the AI handle the rest.',
    btn: '✦ Open AI Designer',
    modalTitle: 'AI Tattoo Designer',
    modalSub: 'Coming Soon',
    modalBody: 'Our local AI workflow is currently in development. Soon you will be able to generate your own tattoo design from a simple description, right here.',
    close: 'Close',
  },
}

function AISection() {
  const { lang } = useLang()
  const t = content[lang]
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {showModal && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(242,237,228,0.97)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '2rem',
          backdropFilter: 'blur(8px)',
        }}>
          <div style={{
            background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
            height: '1px', width: '12rem', marginBottom: '2.5rem',
          }} />
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem', color: 'var(--gold)' }}>✦</span>
          <h2 style={{
            fontFamily: "'Cinzel', Georgia, serif",
            fontSize: '1.4rem', fontWeight: 700,
            color: 'var(--ink)', letterSpacing: '0.2em',
            textTransform: 'uppercase', marginBottom: '0.5rem',
          }}>
            {t.modalTitle}
          </h2>
          <p style={{
            fontSize: '0.65rem', letterSpacing: '0.35em',
            color: 'var(--text-muted)', textTransform: 'uppercase',
            marginBottom: '1.5rem', fontFamily: 'Georgia, serif',
          }}>
            — {t.modalSub} —
          </p>
          <div style={{
            background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
            height: '1px', width: '12rem', marginBottom: '2rem',
          }} />
          <p style={{
            fontSize: '0.85rem', color: 'var(--text-secondary)',
            lineHeight: 1.85, maxWidth: '400px', marginBottom: '2.5rem',
            fontFamily: "'IM Fell English', Georgia, serif", fontStyle: 'italic',
          }}>
            {t.modalBody}
          </p>
          <button
            onClick={() => setShowModal(false)}
            style={{
              padding: '0.75rem 2rem',
              border: '1px solid var(--gold)',
              color: 'var(--gold)', background: 'transparent',
              fontSize: '0.72rem', letterSpacing: '0.18em',
              textTransform: 'uppercase', cursor: 'pointer',
              fontFamily: 'Georgia, serif', transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--bg-primary)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
          >
            {t.close}
          </button>
        </div>
      )}

      <section id="ai" style={{ padding: '4rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{
          border: '1px solid var(--gold)',
          padding: '3.5rem 2.5rem',
          background: 'var(--bg-card)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(138,101,0,0.04) 0%, transparent 70%)',
          }} />
          <p style={{
            fontSize: '0.65rem', letterSpacing: '0.45em',
            color: 'var(--text-muted)', textTransform: 'uppercase',
            marginBottom: '0.75rem', fontFamily: 'Georgia, serif',
          }}>
            {t.label}
          </p>
          <h2 style={{
            fontFamily: "'Cinzel', Georgia, serif",
            fontSize: '1.8rem', fontWeight: 700,
            color: 'var(--ink)', letterSpacing: '0.2em',
            textTransform: 'uppercase', marginBottom: '1.25rem',
          }}>
            ✦ {t.title}
          </h2>
          <div style={{
            background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
            height: '1px', width: '10rem', margin: '0 auto 1.75rem',
          }} />
          <p style={{
            fontSize: '0.88rem', color: 'var(--text-secondary)',
            lineHeight: 1.85, maxWidth: '560px', margin: '0 auto 2.25rem',
            fontFamily: "'IM Fell English', Georgia, serif", fontStyle: 'italic',
          }}>
            {t.body}
          </p>
          <button
            onClick={() => setShowModal(true)}
            style={{
              padding: '0.8rem 2.4rem',
              border: '1px solid var(--gold)',
              background: 'transparent',
              color: 'var(--gold)',
              fontSize: '0.72rem', letterSpacing: '0.2em',
              textTransform: 'uppercase', cursor: 'pointer',
              fontFamily: 'Georgia, serif', transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--bg-primary)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
          >
            {t.btn}
          </button>
        </div>
      </section>
    </>
  )
}

export default AISection