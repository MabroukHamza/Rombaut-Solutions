import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

const content = {
  nl: {
    comingSoon: 'Binnenkort beschikbaar.',
    comingSoonSub: 'Beauty, met zorg gemaakt.',
    previewBtn: 'Bekijk preview',
    backBtn: '← Terug',
    previewLabel: 'Preview',
    previewNote: 'Dit is een preview. De volledige shop opent binnenkort.',
    orderLabel: '— Bestellen —',
    orderText: 'Geïnteresseerd? Neem contact op via WhatsApp of e-mail.',
    orderBtn: 'Bestellen →',
    back: '← Terug naar home',
    aiBtn: '✦ Genereer Design met AI',
    aiComingSoon: 'AI Design Generator — Binnenkort beschikbaar',
    aiComingSoonSub: 'Onze lokale AI model is in ontwikkeling. Binnenkort kan je hier je eigen tattoo design genereren.',
    aiClose: 'Sluiten',
  },
  en: {
    comingSoon: 'Coming soon.',
    comingSoonSub: 'Beauty, crafted with care.',
    previewBtn: 'Take a look',
    backBtn: '← Back',
    previewLabel: 'Preview',
    previewNote: 'This is a preview. Full shop opening soon.',
    orderLabel: '— Order —',
    orderText: 'Interested? Contact us via WhatsApp or email.',
    orderBtn: 'Order →',
    back: '← Back to home',
    aiBtn: '✦ Generate Design with AI',
    aiComingSoon: 'AI Design Generator — Coming Soon',
    aiComingSoonSub: 'Our local AI model is in development. Soon you will be able to generate your own tattoo design right here.',
    aiClose: 'Close',
  }
}

const products = [
  {
    category: { nl: 'Tijdelijke Tattoos', en: 'Temporary Tattoos' },
    icon: '🖋',
    hasAI: true,
    items: [
      {
        name: { nl: 'Classic Tattoo Design', en: 'Classic Tattoo Design' },
        price: 'vanaf €19,99',
        description: { nl: 'Klant beschrijft tattoo met woorden. Wij maken het design.', en: 'Customer describes the tattoo in words. We create the design.' }
      },
      {
        name: { nl: 'Photo-to-Tattoo', en: 'Photo-to-Tattoo' },
        price: 'vanaf €29,99',
        description: { nl: 'Klant uploadt foto. Wij verwerken het tot een tattoo design. Foto\'s vragen meer verwerking.', en: 'Customer uploads a photo. We turn it into a tattoo design. Photos require more processing.' }
      },
      {
        name: { nl: 'Sketch Cleanup', en: 'Sketch Cleanup' },
        price: 'vanaf €24,99',
        description: { nl: 'Klant uploadt schets. Wij maken het clean en tattoo-ready.', en: 'Customer uploads a sketch. We clean it up and make it tattoo-ready.' }
      },
      {
        name: { nl: 'Upload Ready Design', en: 'Upload Ready Design' },
        price: 'vanaf €9,99',
        description: { nl: 'Klant heeft al een perfecte tattoo/design. Wij maken het print-ready.', en: 'Customer already has a perfect tattoo/design. We make it print-ready.' }
      },
    ]
  },
  {
    category: { nl: 'Gel Nagels', en: 'Gel Nails' },
    icon: '💅',
    hasAI: false,
    items: [
      { name: { nl: 'Nude Collectie', en: 'Nude Collection' }, price: '€6,99', description: { nl: 'Natuurlijke tinten, klaar om aan te brengen.', en: 'Natural tones, ready to apply.' } },
      { name: { nl: 'Glitter Set', en: 'Glitter Set' }, price: '€7,99', description: { nl: 'Sprankelende glitternagels voor elke gelegenheid.', en: 'Sparkling glitter nails for every occasion.' } },
      { name: { nl: 'Franse Tips', en: 'French Tips' }, price: '€6,99', description: { nl: 'Klassieke Franse manicure, vooraf gemaakt.', en: 'Classic French manicure, pre-made.' } },
    ]
  },
  {
    category: { nl: 'Pre-Made Items', en: 'Pre-Made Items' },
    icon: '✨',
    hasAI: false,
    items: [
      { name: { nl: 'Beauty Kit', en: 'Beauty Kit' }, price: '€12,99', description: { nl: 'Samengestelde beauty essentials in één kit.', en: 'Curated beauty essentials in one kit.' } },
      { name: { nl: 'Glow Set', en: 'Glow Set' }, price: '€9,99', description: { nl: 'Alles voor een natuurlijke glow.', en: 'Everything you need for a natural glow.' } },
      { name: { nl: 'Geschenkdoos', en: 'Gift Box' }, price: '€14,99', description: { nl: 'Kant-en-klare beauty collectie als cadeau.', en: 'Ready-to-gift beauty collection.' } },
    ]
  },
  {
    category: { nl: 'Mini Parfum', en: 'Mini Perfume Capsules' },
    icon: '🌸',
    hasAI: false,
    items: [
      { name: { nl: 'Roos & Oud', en: 'Rose & Oud' }, price: '€8,99', description: { nl: 'Warme bloemen met een oosterse basis.', en: 'Warm floral with an oriental base.' } },
      { name: { nl: 'Frisse Citrus', en: 'Fresh Citrus' }, price: '€7,99', description: { nl: 'Licht en energiek citrusmengsel.', en: 'Light and energizing citrus blend.' } },
      { name: { nl: 'Fluweelzacht Musk', en: 'Velvet Musk' }, price: '€8,99', description: { nl: 'Zacht, sensueel musk voor dagelijks gebruik.', en: 'Soft, sensual musk for everyday wear.' } },
    ]
  },
]

function Cosmetics() {
  const [showPreview, setShowPreview] = useState(false)
  const [showAI, setShowAI] = useState(false)
  const navigate = useNavigate()
  const { lang } = useLang()
  const t = content[lang]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', transition: 'background 0.3s', position: 'relative' }}>

      {/* AI Coming Soon Modal */}
      {showAI && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(10, 8, 4, 0.97)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '2rem', backdropFilter: 'blur(8px)',
        }}>
          <div style={{ background: 'linear-gradient(to right, transparent, #d4a017, transparent)', height: '1px', width: '12rem', marginBottom: '2.5rem' }} />
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>✦</span>
          <h2 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '1.5rem', fontWeight: '700', color: '#d4a017', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            {t.aiComingSoon}
          </h2>
          <div style={{ background: 'linear-gradient(to right, transparent, #d4a017, transparent)', height: '1px', width: '12rem', marginBottom: '2rem' }} />
          <p style={{ fontSize: '0.85rem', color: '#a08020', lineHeight: '1.8', maxWidth: '420px', marginBottom: '2.5rem' }}>
            {t.aiComingSoonSub}
          </p>
          <button
            onClick={() => setShowAI(false)}
            style={{ padding: '0.75rem 2rem', border: '1px solid #d4a017', color: '#d4a017', background: 'transparent', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'Georgia, Times New Roman, serif', transition: 'all 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#d4a017'; e.currentTarget.style.color = '#000' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#d4a017' }}
          >
            {t.aiClose}
          </button>
          <div style={{ background: 'linear-gradient(to right, transparent, #d4a017, transparent)', height: '1px', width: '12rem', marginTop: '2.5rem' }} />
        </div>
      )}

      {/* Coming Soon Overlay */}
      {!showPreview && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(10, 8, 4, 0.96)', zIndex: 99,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '2rem', backdropFilter: 'blur(6px)',
        }}>
          <div style={{ background: 'linear-gradient(to right, transparent, #d4a017, transparent)', height: '1px', width: '12rem', marginBottom: '2.5rem' }} />
          <span style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '5rem', fontWeight: '700', color: '#d4a017', lineHeight: '1', display: 'block', marginBottom: '0.5rem', letterSpacing: '-0.05em' }}>RO</span>
          <h1 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '1.5rem', fontWeight: '700', color: '#d4a017', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Cosmetics</h1>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.4em', color: '#8a6d00', textTransform: 'uppercase', marginBottom: '1.5rem' }}>— by Rombaut Solutions —</p>
          <div style={{ background: 'linear-gradient(to right, transparent, #d4a017, transparent)', height: '1px', width: '12rem', marginBottom: '2rem' }} />
          <p style={{ fontSize: '0.9rem', color: '#a08020', lineHeight: '1.8', maxWidth: '380px', marginBottom: '0.5rem' }}>{t.comingSoon}</p>
          <p style={{ fontSize: '0.8rem', color: '#8a6d00', lineHeight: '1.8', maxWidth: '380px', marginBottom: '2.5rem' }}>{t.comingSoonSub}</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button onClick={() => setShowPreview(true)}
              style={{ padding: '0.75rem 2rem', border: '1px solid #d4a017', color: '#d4a017', background: 'transparent', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'Georgia, Times New Roman, serif', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#d4a017'; e.currentTarget.style.color = '#000' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#d4a017' }}
            >{t.previewBtn}</button>
            <button onClick={() => navigate('/')}
              style={{ padding: '0.75rem 2rem', background: '#d4a017', color: '#000', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'Georgia, Times New Roman, serif', fontWeight: '700', border: '1px solid #d4a017', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#f5d060' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#d4a017' }}
            >{t.backBtn}</button>
          </div>
          <div style={{ background: 'linear-gradient(to right, transparent, #d4a017, transparent)', height: '1px', width: '12rem', marginTop: '2.5rem' }} />
        </div>
      )}

      {/* Preview Content */}
      <div style={{ padding: '4rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <button onClick={() => navigate('/')}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', padding: 0, display: 'block', margin: '0 auto 2rem' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)' }}
          >{t.back}</button>
          <span style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '4rem', fontWeight: '700', color: 'var(--gold)', lineHeight: '1', display: 'block', marginBottom: '0.5rem', letterSpacing: '-0.05em' }}>RO</span>
          <h1 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '1.5rem', fontWeight: '700', color: 'var(--gold)', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Cosmetics</h1>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.4em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>— {t.previewLabel} —</p>
          <div style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)', height: '1px', width: '12rem', margin: '0 auto 1rem' }} />
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: '1.8' }}>{t.previewNote}</p>
        </div>

        {products.map((cat) => (
          <div key={cat.category.nl} style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{cat.icon}</span>
                <h2 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '1.1rem', fontWeight: '700', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0 }}>
                  {cat.category[lang]}
                </h2>
              </div>
              {cat.hasAI && (
                <button
                  onClick={() => setShowAI(true)}
                  style={{ padding: '0.5rem 1.25rem', border: '1px solid var(--gold)', color: 'var(--gold)', background: 'transparent', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'Georgia, Times New Roman, serif', transition: 'all 0.3s', borderRadius: '20px' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--bg-primary)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
                >
                  {t.aiBtn}
                </button>
              )}
            </div>
            <div style={{ height: '1px', background: 'linear-gradient(to right, var(--gold), transparent)', marginBottom: '1.5rem' }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {cat.items.map((item) => (
                <div key={item.name.en}
                  style={{ border: '1px solid var(--border-card)', padding: '1.5rem', background: 'var(--bg-card)', transition: 'border-color 0.3s, transform 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-card)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '0.9rem', fontWeight: '700', color: 'var(--gold)', margin: 0 }}>{item.name[lang]}</h3>
                    <span style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '0.85rem', fontWeight: '700', color: 'var(--gold)', whiteSpace: 'nowrap', marginLeft: '0.5rem' }}>{item.price}</span>
                  </div>
                  <div style={{ width: '2rem', height: '1px', background: 'var(--gold-dark)', marginBottom: '0.75rem' }} />
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>{item.description[lang]}</p>
                  <a
                    href={`https://wa.me/32483318412?text=${encodeURIComponent(`Hallo, ik ben geïnteresseerd in: ${item.name.nl} (${item.price})`)}`}
                    style={{ display: 'inline-block', marginTop: '1rem', fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid var(--gold-dark)', paddingBottom: '2px' }}
                  >{t.orderBtn}</a>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{ textAlign: 'center', border: '1px solid var(--gold)', padding: '2.5rem', background: 'var(--bg-card)', marginTop: '2rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.4em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.orderLabel}</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>{t.orderText}</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/32483318412" style={{ padding: '0.75rem 2rem', background: 'var(--gold)', color: 'var(--bg-primary)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: '700' }}>📱 WhatsApp</a>
            <a href="mailto:info@rombautsolutions.be" style={{ padding: '0.75rem 2rem', border: '1px solid var(--gold)', color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}>✉ E-mail</a>
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.65rem', color: 'var(--border-dark)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          © 2025 RO Cosmetics — Rombaut Solutions
        </p>
      </div>
    </div>
  )
}

export default Cosmetics
