import { useLang } from '../context/LanguageContext'

const content = {
  nl: {
    label: '— Wat We Doen —',
    title: 'Services',
    services: [
      {
        icon: '🖼',
        num: 'I',
        title: 'Upload Jouw Design',
        text: 'Heb je al artwork? Wij maken het klaar voor tijdelijke tattoo productie — precies zoals jij het wilt.',
      },
      {
        icon: '✍',
        num: 'II',
        title: 'Beschrijf Jouw Idee',
        text: 'Beschrijf jouw tattoo-idee en onze AI vertaalt het naar een visueel concept dat je meteen kan dragen.',
      },
      {
        icon: '🎨',
        num: 'III',
        title: 'Schets Opkuisen',
        text: 'Upload een ruwe schets. Wij maken hem clean, strak en tattoo-ready — zonder kwaliteitsverlies.',
      },
      {
        icon: '🎪',
        num: 'IV',
        title: 'Event Packs',
        text: 'Custom tijdelijke tattoos voor events, studentenverenigingen, merken en content creators.',
      },
    ],
  },
  en: {
    label: '— What We Do —',
    title: 'Services',
    services: [
      {
        icon: '🖼',
        num: 'I',
        title: 'Upload Your Design',
        text: 'Already have artwork? We prepare it for temporary tattoo production — exactly the way you envisioned it.',
      },
      {
        icon: '✍',
        num: 'II',
        title: 'Describe Your Idea',
        text: 'Describe your tattoo concept and our AI translates it into a visual design you can wear immediately.',
      },
      {
        icon: '🎨',
        num: 'III',
        title: 'Sketch Cleanup',
        text: 'Upload a rough sketch. We make it clean, sharp, and tattoo-ready — without losing your original style.',
      },
      {
        icon: '🎪',
        num: 'IV',
        title: 'Event Packs',
        text: 'Custom temporary tattoos for events, student clubs, brands, and content creators.',
      },
    ],
  },
}

function Services() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <section id="services" style={{
      padding: '6rem 1.5rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>

      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
        gap: '1.25rem',
      }}>
        {t.services.map((s) => (
          <div
            key={s.num}
            style={{
              border: '1px solid var(--border-card)',
              padding: '2rem 1.75rem',
              background: 'var(--bg-card)',
              transition: 'border-color 0.3s, transform 0.3s, background 0.3s',
              position: 'relative',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--gold)'
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.background = 'var(--bg-card-hover)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border-card)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.background = 'var(--bg-card)'
            }}
          >
            {/* Roman numeral watermark */}
            <span style={{
              position: 'absolute', top: '1rem', right: '1.25rem',
              fontFamily: "'Cinzel', Georgia, serif",
              fontSize: '0.65rem', letterSpacing: '0.15em',
              color: 'var(--gold-dark)', opacity: 0.6,
            }}>
              {s.num}
            </span>

            <span style={{ fontSize: '1.75rem', display: 'block', marginBottom: '1.25rem' }}>
              {s.icon}
            </span>

            <h3 style={{
              fontFamily: "'Cinzel', Georgia, serif",
              fontSize: '0.85rem', fontWeight: 600,
              color: 'var(--gold)', letterSpacing: '0.12em',
              textTransform: 'uppercase', marginBottom: '0.75rem',
            }}>
              {s.title}
            </h3>

            <div style={{
              width: '2rem', height: '1px',
              background: 'var(--gold-dark)', marginBottom: '1rem',
            }} />

            <p style={{
              fontSize: '0.83rem', color: 'var(--text-secondary)',
              lineHeight: 1.75, fontFamily: "'IM Fell English', Georgia, serif",
              fontStyle: 'italic',
            }}>
              {s.text}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Services
