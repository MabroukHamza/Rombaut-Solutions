import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

const content = {
  nl: {
    comingSoon: 'Binnenkort beschikbaar.',
    comingSoonSub:
      'Custom tijdelijke tattoos. Test je idee vóór permanente inkt.',

    previewBtn: 'Bekijk preview',
    backBtn: '← Terug',

    back: '← Terug naar home',

    heroTitle: 'INKTRIAL',
    heroSub: '— AI TEMPORARY TATTOO STORE —',

    heroText:
      'Upload een design, beschrijf een idee of stuur een schets. InkTrial helpt jouw concept om te zetten naar een draagbare tijdelijke tattoo.',

    servicesTitle: 'Services',

    uploadTitle: 'Upload Your Design',
    uploadText:
      'Heb je al een design? Wij maken het klaar voor tijdelijke tattoo productie.',

    describeTitle: 'Describe Your Idea',
    describeText:
      'Beschrijf jouw tattoo-idee en wij helpen het visueel uitwerken.',

    sketchTitle: 'Sketch Cleanup',
    sketchText:
      'Upload een schets en wij maken hem proper en tattoo-ready.',

    eventTitle: 'Event Packs',
    eventText:
      'Voor events, studentenverenigingen, merken en creators.',

    whyTitle: 'Waarom InkTrial?',

    whyText:
      'Een tattoo is permanent. Een idee niet. InkTrial laat je testen hoe een ontwerp eruitziet en aanvoelt voordat je ooit permanente inkt zet.',

    quote: 'Try it before it’s forever.',

    aiTitle: 'AI Tattoo Designer',

    aiText:
      'Onze AI tattoo designer is momenteel in ontwikkeling. Binnenkort kan je ideeën direct omzetten naar tattoo concepten.',

    aiBtn: '✦ Open AI Designer',

    aiComingSoon: 'AI Tattoo Designer — Binnenkort beschikbaar',

    aiComingSoonSub:
      'Onze AI workflow is momenteel in ontwikkeling. Binnenkort kan je jouw ideeën direct laten omzetten naar tattoo concepten.',

    aiClose: 'Sluiten',

    builtTitle: 'Built by Rombaut Solutions',

    builtText:
      'InkTrial is een experimenteel project van Rombaut Solutions dat AI, design en fysieke producten samenbrengt.',

    contactTitle: '— Contact —',

    contactText:
      'Interesse in een custom tattoo ontwerp of een event pack? Neem contact op via WhatsApp of e-mail.',

    whatsapp: '📱 WhatsApp',
    email: '✉ E-mail',
  },

  en: {
    comingSoon: 'Coming soon.',

    comingSoonSub:
      'Custom temporary tattoos. Test your idea before permanent ink.',

    previewBtn: 'Take a look',
    backBtn: '← Back',

    back: '← Back to home',

    heroTitle: 'INKTRIAL',
    heroSub: '— AI TEMPORARY TATTOO STORE —',

    heroText:
      'Upload a design, describe an idea or send a sketch. InkTrial helps transform your concept into a wearable temporary tattoo.',

    servicesTitle: 'Services',

    uploadTitle: 'Upload Your Design',

    uploadText:
      'Already have artwork? We prepare it for temporary tattoo production.',

    describeTitle: 'Describe Your Idea',

    describeText:
      'Describe your tattoo concept and we help shape it visually.',

    sketchTitle: 'Sketch Cleanup',

    sketchText:
      'Upload a sketch and we clean it up for production.',

    eventTitle: 'Event Packs',

    eventText:
      'For brands, events, student clubs and creators.',

    whyTitle: 'Why InkTrial?',

    whyText:
      'A tattoo is permanent. An idea is not. InkTrial lets you test placement, size and visual impact before making a lifelong commitment.',

    quote: 'Try it before it’s forever.',

    aiTitle: 'AI Tattoo Designer',

    aiText:
      'Our AI tattoo designer is currently under development. Soon you will be able to transform ideas into tattoo concepts.',

    aiBtn: '✦ Open AI Designer',

    aiComingSoon: 'AI Tattoo Designer — Coming Soon',

    aiComingSoonSub:
      'Our AI workflow is currently under development. Soon you will be able to transform ideas directly into tattoo concepts.',

    aiClose: 'Close',

    builtTitle: 'Built by Rombaut Solutions',

    builtText:
      'InkTrial is an experimental Rombaut Solutions project combining AI, design and physical products.',

    contactTitle: '— Contact —',

    contactText:
      'Interested in a custom tattoo design or event pack? Contact us through WhatsApp or email.',

    whatsapp: '📱 WhatsApp',
    email: '✉ E-mail',
  },
}

const services = (t) => [
  {
    icon: '🖼',
    title: t.uploadTitle,
    text: t.uploadText,
  },
  {
    icon: '✍',
    title: t.describeTitle,
    text: t.describeText,
  },
  {
    icon: '🎨',
    title: t.sketchTitle,
    text: t.sketchText,
  },
  {
    icon: '🎪',
    title: t.eventTitle,
    text: t.eventText,
  },
]

function InkTrial() {
  const [showPreview, setShowPreview] = useState(false)
  const [showAI, setShowAI] = useState(false)

  const navigate = useNavigate()
  const { lang } = useLang()
  const t = content[lang]

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg-primary)',
        transition: 'background 0.3s',
        position: 'relative',
      }}
    >
      {showAI && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(10, 8, 4, 0.97)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div
            style={{
              background:
                'linear-gradient(to right, transparent, #d4a017, transparent)',
              height: '1px',
              width: '12rem',
              marginBottom: '2.5rem',
            }}
          />

          <span
            style={{
              fontSize: '3rem',
              display: 'block',
              marginBottom: '1rem',
            }}
          >
            ✦
          </span>

          <h2
            style={{
              fontFamily: 'Georgia, Times New Roman, serif',
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#d4a017',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            {t.aiComingSoon}
          </h2>

          <div
            style={{
              background:
                'linear-gradient(to right, transparent, #d4a017, transparent)',
              height: '1px',
              width: '12rem',
              marginBottom: '2rem',
            }}
          />

          <p
            style={{
              fontSize: '0.85rem',
              color: '#a08020',
              lineHeight: '1.8',
              maxWidth: '420px',
              marginBottom: '2.5rem',
            }}
          >
            {t.aiComingSoonSub}
          </p>

          <button
            onClick={() => setShowAI(false)}
            style={{
              padding: '0.75rem 2rem',
              border: '1px solid #d4a017',
              color: '#d4a017',
              background: 'transparent',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontFamily: 'Georgia, Times New Roman, serif',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#d4a017'
              e.currentTarget.style.color = '#000'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#d4a017'
            }}
          >
            {t.aiClose}
          </button>
        </div>
      )}

      {!showPreview && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10, 8, 4, 0.96)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
            backdropFilter: 'blur(6px)',
          }}
        >
          <div
            style={{
              background:
                'linear-gradient(to right, transparent, #d4a017, transparent)',
              height: '1px',
              width: '12rem',
              marginBottom: '2.5rem',
            }}
          />

          <span
            style={{
              fontFamily: 'Georgia, Times New Roman, serif',
              fontSize: '5rem',
              fontWeight: '700',
              color: '#d4a017',
              lineHeight: '1',
              display: 'block',
              marginBottom: '0.5rem',
              letterSpacing: '-0.05em',
            }}
          >
            RO
          </span>

          <h1
            style={{
              fontFamily: 'Georgia, Times New Roman, serif',
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#d4a017',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '0.25rem',
            }}
          >
            InkTrial
          </h1>

          <p
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.4em',
              color: '#8a6d00',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            — by Rombaut Solutions —
          </p>

          <div
            style={{
              background:
                'linear-gradient(to right, transparent, #d4a017, transparent)',
              height: '1px',
              width: '12rem',
              marginBottom: '2rem',
            }}
          />

          <p
            style={{
              fontSize: '0.9rem',
              color: '#a08020',
              lineHeight: '1.8',
              maxWidth: '420px',
              marginBottom: '0.5rem',
            }}
          >
            {t.comingSoon}
          </p>

          <p
            style={{
              fontSize: '0.8rem',
              color: '#8a6d00',
              lineHeight: '1.8',
              maxWidth: '420px',
              marginBottom: '2.5rem',
            }}
          >
            {t.comingSoonSub}
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <button
              onClick={() => setShowPreview(true)}
              style={{
                padding: '0.75rem 2rem',
                border: '1px solid #d4a017',
                color: '#d4a017',
                background: 'transparent',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Georgia, Times New Roman, serif',
              }}
            >
              {t.previewBtn}
            </button>

            <button
              onClick={() => navigate('/')}
              style={{
                padding: '0.75rem 2rem',
                background: '#d4a017',
                color: '#000',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Georgia, Times New Roman, serif',
                fontWeight: '700',
                border: '1px solid #d4a017',
              }}
            >
              {t.backBtn}
            </button>
          </div>
        </div>
      )}

      <div
        style={{
          padding: '4rem 1.5rem',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            marginBottom: '2rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          {t.back}
        </button>

        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span
            style={{
              fontFamily: 'Georgia, Times New Roman, serif',
              fontSize: '5rem',
              color: 'var(--gold)',
              display: 'block',
              lineHeight: 1,
            }}
          >
            RO
          </span>

          <h1
            style={{
              fontFamily: 'Georgia, Times New Roman, serif',
              color: 'var(--gold)',
              letterSpacing: '0.3em',
              fontSize: '2rem',
            }}
          >
            {t.heroTitle}
          </h1>

          <p
            style={{
              color: 'var(--text-muted)',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
            }}
          >
            {t.heroSub}
          </p>

          <div
            style={{
              height: '1px',
              width: '12rem',
              margin: '2rem auto',
              background:
                'linear-gradient(to right, transparent, var(--gold), transparent)',
            }}
          />

          <p
            style={{
              maxWidth: '650px',
              margin: '0 auto',
              color: 'var(--text-secondary)',
              lineHeight: '1.8',
            }}
          >
            {t.heroText}
          </p>
        </div>

        <div
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          <h2
            style={{
              color: 'var(--gold)',
              fontFamily: 'Georgia, Times New Roman, serif',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            {t.servicesTitle}
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
            marginBottom: '5rem',
          }}
        >
          {services(t).map((service) => (
            <div
              key={service.title}
              style={{
                border: '1px solid var(--border-card)',
                padding: '1.5rem',
                background: 'var(--bg-card)',
                transition: 'all 0.3s',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>
                {service.icon}
              </span>

              <h3
                style={{
                  color: 'var(--gold)',
                  marginTop: '1rem',
                  marginBottom: '1rem',
                  fontFamily:
                    'Georgia, Times New Roman, serif',
                }}
              >
                {service.title}
              </h3>

              <div
                style={{
                  width: '2rem',
                  height: '1px',
                  background: 'var(--gold-dark)',
                  marginBottom: '1rem',
                }}
              />

              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7',
                }}
              >
                {service.text}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            border: '1px solid var(--gold)',
            padding: '3rem',
            marginBottom: '4rem',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              color: 'var(--gold)',
              marginBottom: '1rem',
              fontFamily: 'Georgia, Times New Roman, serif',
            }}
          >
            {t.whyTitle}
          </h2>

          <p
            style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.8',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            {t.whyText}
          </p>

          <p
            style={{
              marginTop: '2rem',
              color: 'var(--gold)',
              fontSize: '1.2rem',
              fontStyle: 'italic',
            }}
          >
            "{t.quote}"
          </p>
        </div>

        <div
          style={{
            border: '1px solid var(--gold)',
            padding: '3rem',
            textAlign: 'center',
            marginBottom: '4rem',
          }}
        >
          <h2
            style={{
              color: 'var(--gold)',
              marginBottom: '1rem',
              fontFamily: 'Georgia, Times New Roman, serif',
            }}
          >
            ✦ {t.aiTitle}
          </h2>

          <p
            style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.8',
              maxWidth: '700px',
              margin: '0 auto 2rem',
            }}
          >
            {t.aiText}
          </p>

          <button
            onClick={() => setShowAI(true)}
            style={{
              padding: '0.75rem 2rem',
              border: '1px solid var(--gold)',
              background: 'transparent',
              color: 'var(--gold)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            {t.aiBtn}
          </button>
        </div>

        <div
          style={{
            textAlign: 'center',
            border: '1px solid var(--border-card)',
            padding: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          <h2
            style={{
              color: 'var(--gold)',
              marginBottom: '1rem',
              fontFamily: 'Georgia, Times New Roman, serif',
            }}
          >
            {t.builtTitle}
          </h2>

          <p
            style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.8',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            {t.builtText}
          </p>
        </div>

        <div
          style={{
            textAlign: 'center',
            border: '1px solid var(--gold)',
            padding: '2.5rem',
            background: 'var(--bg-card)',
          }}
        >
          <p
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.4em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            {t.contactTitle}
          </p>

          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.8',
              marginBottom: '1.5rem',
            }}
          >
            {t.contactText}
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://wa.me/32483318412"
              style={{
                padding: '0.75rem 2rem',
                background: 'var(--gold)',
                color: 'var(--bg-primary)',
                textDecoration: 'none',
                fontWeight: '700',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              {t.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InkTrial