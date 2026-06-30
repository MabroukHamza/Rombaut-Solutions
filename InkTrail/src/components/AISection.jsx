import { useState } from 'react'
import { useLang } from '../context/LanguageContext'

const content = {
  nl: {
    label: '— AI Prompt Studio —',
    title: 'AI Tattoo Designer',
    body: 'Vul de onderdelen van je tattoo in en Inktrail zet ze om naar een prompt en directe afbeelding voor een strak tijdelijk tattoo concept.',
    symbol: 'Symbool',
    symbolPh: 'Slang rond zwaard',
    style: 'Stijl',
    stylePh: 'Cartoon, tribal, realistic...',
    colorMode: 'Kleurmodus',
    blackWhite: 'Zwart/wit',
    color: 'Kleur',
    colors: 'Kleuren',
    colorsPh: 'Rood, goud en zwart',
    placement: 'Plaats',
    placementPh: 'Arm, rug, nek...',
    size: 'Grootte',
    sizePh: 'Klein, medium, groot, 10 cm...',
    copy: 'Kopieer Prompt',
    copied: 'Gekopieerd',
    generateImage: 'Genereer Afbeelding',
    generatingImage: 'Afbeelding laden...',
    imagePreview: 'Afbeelding preview',
    imageEmpty: 'Vul een symbool in en genereer een afbeelding.',
    imageError: 'De afbeelding kon niet geladen worden. Probeer opnieuw.',
    btn: '✦ Meer over AI Designer',
    modalTitle: 'AI Tattoo Designer',
    modalSub: 'Binnenkort beschikbaar',
    modalBody: 'De automatische beeldgeneratie zelf is nog in ontwikkeling. Tot die live staat, kan je hier alvast een sterke prompt maken voor ChatGPT.',
    close: 'Sluiten',
  },
  en: {
    label: '— AI Prompt Studio —',
    title: 'AI Tattoo Designer',
    body: 'Fill in the parts of your tattoo and Inktrail turns them into a prompt and direct image for a refined temporary tattoo concept.',
    symbol: 'Symbol',
    symbolPh: 'Snake wrapped around a sword',
    style: 'Style',
    stylePh: 'Cartoon, tribal, realistic...',
    colorMode: 'Color mode',
    blackWhite: 'Black/white',
    color: 'Color',
    colors: 'Colors',
    colorsPh: 'Red, gold and black',
    placement: 'Placement',
    placementPh: 'Arm, back, neck...',
    size: 'Size',
    sizePh: 'Small, medium, large, 10 cm...',
    copy: 'Copy Prompt',
    copied: 'Copied',
    generateImage: 'Generate Image',
    generatingImage: 'Loading image...',
    imagePreview: 'Image preview',
    imageEmpty: 'Enter a symbol and generate an image.',
    imageError: 'The image could not be loaded. Try again.',
    btn: '✦ About AI Designer',
    modalTitle: 'AI Tattoo Designer',
    modalSub: 'Coming Soon',
    modalBody: 'The automatic image generation flow is still in development. Until that goes live, you can already create a strong prompt for ChatGPT here.',
    close: 'Close',
  },
}

function createTattooPrompt(form, lang) {
  const symbol = form.symbol.trim()
  if (!symbol) return ''

  const style = form.style.trim() || (lang === 'nl' ? 'passende tattoo stijl' : 'suitable tattoo style')
  const placement = form.placement.trim() || (lang === 'nl' ? 'vrij te kiezen plaatsing' : 'flexible placement')
  const size = form.size.trim() || (lang === 'nl' ? 'medium formaat' : 'medium size')
  const colorText = form.colorMode === 'color'
    ? (form.colors.trim() || (lang === 'nl' ? 'kleur, met een harmonieus palet' : 'color, with a harmonious palette'))
    : (lang === 'nl' ? 'zwart/wit zonder kleuraccenten' : 'black and white without color accents')

  if (lang === 'en') {
    return `Create a professional temporary tattoo design prompt for ChatGPT and an AI image generator. Design must be optimized for thermal heat printer output, suitable for an AIMO R3-style tattoo stencil printer.

Tattoo concept:
- Main symbol/composition: ${symbol}
- Style: ${style}
- Color direction: ${colorText}
- Body placement: ${placement}
- Size: ${size}

Write a clear visual prompt that includes composition, linework, shading, detail level, readability on skin, and what to avoid. Keep the design stylish, wearable, and suitable as a temporary tattoo.`
  }

  return `Maak een professionele prompt voor ChatGPT en een AI image generator voor een tijdelijk tattoo design. Design moet geoptimaliseerd zijn voor een thermal heat printer output, geschikt voor een AIMO R3-style tattoo stencil printer.

Tattoo concept:
- Hoofdsymbool/compositie: ${symbol}
- Stijl: ${style}
- Kleurkeuze: ${colorText}
- Plaats op het lichaam: ${placement}
- Grootte: ${size}

Schrijf een duidelijke visuele prompt met compositie, lijnwerk, schaduw, detailniveau, leesbaarheid op de huid en wat vermeden moet worden. Houd het design stijlvol, draagbaar en geschikt als tijdelijke tattoo.`
}

function createImagePrompt(form) {
  const symbol = form.symbol.trim()
  if (!symbol) return ''

  const style = form.style.trim() || 'clean professional tattoo style'
  const placement = form.placement.trim() || 'flexible body placement'
  const size = form.size.trim() || 'medium size'
  const colorText = form.colorMode === 'color'
    ? (form.colors.trim() || 'harmonious color palette')
    : 'black and white only, no color accents'

  return [
    'professional temporary tattoo flash design',
    `main symbol and composition: ${symbol}`,
    `style: ${style}`,
    `color: ${colorText}`,
    `optimized for placement on: ${placement}`,
    `size impression: ${size}`,
    'clean readable silhouette',
    'crisp linework',
    'balanced composition',
    'tattoo stencil ready',
    'centered on a plain white background',
    'no skin photo',
    'no mockup',
    'no text',
    'no watermark',
    'high contrast',
  ].join(', ')
}

function createImageUrl(imagePrompt) {
  const encodedPrompt = encodeURIComponent(imagePrompt)
  const seed = Date.now()
  return `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&private=true&seed=${seed}`
}

function AISection() {
  const { lang } = useLang()
  const t = content[lang]
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({
    symbol: '',
    style: '',
    colorMode: 'blackWhite',
    colors: '',
    placement: '',
    size: '',
  })
  const [copied, setCopied] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [imageLoading, setImageLoading] = useState(false)
  const [imageError, setImageError] = useState(false)
  const hasSymbol = Boolean(form.symbol.trim())

  const updateField = (name, value) => {
    setForm(current => ({ ...current, [name]: value }))
    setCopied(false)
    setImageError(false)
  }

  const handleCopy = async () => {
    const prompt = createTattooPrompt(form, lang)
    if (!prompt) return
    console.log('Inktrail ChatGPT prompt:', prompt)
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  const handleGenerateImage = () => {
    const prompt = createTattooPrompt(form, lang)
    const imagePrompt = createImagePrompt(form)
    if (!imagePrompt) return
    console.log('Inktrail ChatGPT prompt:', prompt)
    console.log('Inktrail image prompt:', imagePrompt)
    setImageError(false)
    setImageLoading(true)
    setImageUrl(createImageUrl(imagePrompt))
  }

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

          <div style={{
            display: 'grid',
            gap: '1rem',
            maxWidth: '680px',
            margin: '0 auto 1.75rem',
            textAlign: 'left',
            position: 'relative',
            zIndex: 1,
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
            }}>
              <div>
                <label htmlFor="tattoo-symbol" style={{
                  display: 'block',
                  fontSize: '0.65rem',
                  letterSpacing: '0.22em',
                  color: 'var(--gold)',
                  textTransform: 'uppercase',
                  fontFamily: 'Georgia, serif',
                  marginBottom: '0.45rem',
                }}>
                  {t.symbol}
                </label>
                <input
                  id="tattoo-symbol"
                  value={form.symbol}
                  onChange={e => updateField('symbol', e.target.value)}
                  placeholder={t.symbolPh}
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '0.85rem 1rem',
                    border: '1px solid var(--border-card)',
                    background: 'rgba(255,255,255,0.7)',
                    color: 'var(--ink)',
                    fontSize: '0.88rem',
                    fontFamily: "'IM Fell English', Georgia, serif",
                    outline: 'none',
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--border-card)' }}
                />
              </div>

              <div>
                <label htmlFor="tattoo-style" style={{
                  display: 'block',
                  fontSize: '0.65rem',
                  letterSpacing: '0.22em',
                  color: 'var(--gold)',
                  textTransform: 'uppercase',
                  fontFamily: 'Georgia, serif',
                  marginBottom: '0.45rem',
                }}>
                  {t.style}
                </label>
                <input
                  id="tattoo-style"
                  value={form.style}
                  onChange={e => updateField('style', e.target.value)}
                  placeholder={t.stylePh}
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '0.85rem 1rem',
                    border: '1px solid var(--border-card)',
                    background: 'rgba(255,255,255,0.7)',
                    color: 'var(--ink)',
                    fontSize: '0.88rem',
                    fontFamily: "'IM Fell English', Georgia, serif",
                    outline: 'none',
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--border-card)' }}
                />
              </div>

              <div>
                <p style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.22em',
                  color: 'var(--gold)',
                  textTransform: 'uppercase',
                  fontFamily: 'Georgia, serif',
                  marginBottom: '0.45rem',
                }}>
                  {t.colorMode}
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  border: '1px solid var(--border-card)',
                  background: 'rgba(255,255,255,0.7)',
                }}>
                  {[
                    ['blackWhite', t.blackWhite],
                    ['color', t.color],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => updateField('colorMode', value)}
                      style={{
                        padding: '0.85rem 0.7rem',
                        border: 'none',
                        borderRight: value === 'blackWhite' ? '1px solid var(--border-card)' : 'none',
                        background: form.colorMode === value ? 'var(--gold)' : 'transparent',
                        color: form.colorMode === value ? '#fff' : 'var(--text-secondary)',
                        fontSize: '0.68rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        fontFamily: 'Georgia, serif',
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{
                visibility: form.colorMode === 'color' ? 'visible' : 'hidden',
                opacity: form.colorMode === 'color' ? 1 : 0,
                pointerEvents: form.colorMode === 'color' ? 'auto' : 'none',
                transition: 'opacity 0.25s',
              }}>
                <label htmlFor="tattoo-colors" style={{
                  display: 'block',
                  fontSize: '0.65rem',
                  letterSpacing: '0.22em',
                  color: 'var(--gold)',
                  textTransform: 'uppercase',
                  fontFamily: 'Georgia, serif',
                  marginBottom: '0.45rem',
                }}>
                  {t.colors}
                </label>
                <input
                  id="tattoo-colors"
                  value={form.colors}
                  onChange={e => updateField('colors', e.target.value)}
                  placeholder={t.colorsPh}
                  disabled={form.colorMode !== 'color'}
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '0.85rem 1rem',
                    border: '1px solid var(--border-card)',
                    background: 'rgba(255,255,255,0.7)',
                    color: 'var(--ink)',
                    fontSize: '0.88rem',
                    fontFamily: "'IM Fell English', Georgia, serif",
                    outline: 'none',
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--border-card)' }}
                />
              </div>

              <div>
                <label htmlFor="tattoo-placement" style={{
                  display: 'block',
                  fontSize: '0.65rem',
                  letterSpacing: '0.22em',
                  color: 'var(--gold)',
                  textTransform: 'uppercase',
                  fontFamily: 'Georgia, serif',
                  marginBottom: '0.45rem',
                }}>
                  {t.placement}
                </label>
                <input
                  id="tattoo-placement"
                  value={form.placement}
                  onChange={e => updateField('placement', e.target.value)}
                  placeholder={t.placementPh}
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '0.85rem 1rem',
                    border: '1px solid var(--border-card)',
                    background: 'rgba(255,255,255,0.7)',
                    color: 'var(--ink)',
                    fontSize: '0.88rem',
                    fontFamily: "'IM Fell English', Georgia, serif",
                    outline: 'none',
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--border-card)' }}
                />
              </div>

              <div>
                <label htmlFor="tattoo-size" style={{
                  display: 'block',
                  fontSize: '0.65rem',
                  letterSpacing: '0.22em',
                  color: 'var(--gold)',
                  textTransform: 'uppercase',
                  fontFamily: 'Georgia, serif',
                  marginBottom: '0.45rem',
                }}>
                  {t.size}
                </label>
                <input
                  id="tattoo-size"
                  value={form.size}
                  onChange={e => updateField('size', e.target.value)}
                  placeholder={t.sizePh}
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '0.85rem 1rem',
                    border: '1px solid var(--border-card)',
                    background: 'rgba(255,255,255,0.7)',
                    color: 'var(--ink)',
                    fontSize: '0.88rem',
                    fontFamily: "'IM Fell English', Georgia, serif",
                    outline: 'none',
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--border-card)' }}
                />
              </div>
            </div>

          </div>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            position: 'relative',
            zIndex: 1,
            marginBottom: '1rem',
          }}>
            <button
              type="button"
              onClick={handleCopy}
              disabled={!hasSymbol}
              style={{
                padding: '0.8rem 2.4rem',
                border: '1px solid var(--gold)',
                background: hasSymbol ? 'var(--gold)' : 'transparent',
                color: hasSymbol ? '#fff' : 'var(--text-muted)',
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: hasSymbol ? 'pointer' : 'not-allowed',
                fontFamily: 'Georgia, serif',
                fontWeight: 700,
                transition: 'all 0.3s',
              }}
            >
              {copied ? t.copied : t.copy}
            </button>
            <button
              type="button"
              onClick={handleGenerateImage}
              disabled={!hasSymbol || imageLoading}
              style={{
                padding: '0.8rem 2.4rem',
                border: '1px solid var(--gold)',
                background: 'transparent',
                color: !hasSymbol || imageLoading ? 'var(--text-muted)' : 'var(--gold)',
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: !hasSymbol || imageLoading ? 'not-allowed' : 'pointer',
                fontFamily: 'Georgia, serif',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                if (hasSymbol && !imageLoading) {
                  e.currentTarget.style.background = 'var(--gold)'
                  e.currentTarget.style.color = '#fff'
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = !hasSymbol || imageLoading ? 'var(--text-muted)' : 'var(--gold)'
              }}
            >
              {imageLoading ? t.generatingImage : t.generateImage}
            </button>
          </div>

          <div style={{
            maxWidth: '680px',
            margin: '0 auto 1.75rem',
            border: '1px solid var(--border-card)',
            background: 'rgba(255,255,255,0.56)',
            padding: '1.25rem',
            position: 'relative',
            zIndex: 1,
            textAlign: 'left',
          }}>
            <p style={{
              fontSize: '0.62rem',
              letterSpacing: '0.22em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              fontFamily: 'Georgia, serif',
              marginBottom: '0.85rem',
            }}>
              {t.imagePreview}
            </p>

            {!imageUrl && (
              <div style={{
                minHeight: '220px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px dashed var(--border-card)',
                color: 'var(--text-muted)',
                fontSize: '0.82rem',
                lineHeight: 1.6,
                fontFamily: "'IM Fell English', Georgia, serif",
                fontStyle: 'italic',
                textAlign: 'center',
                padding: '1rem',
              }}>
                {t.imageEmpty}
              </div>
            )}

            {imageUrl && (
              <div style={{
                position: 'relative',
                border: '1px solid var(--border-card)',
                background: '#fff',
                overflow: 'hidden',
              }}>
                {imageLoading && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.82)',
                    color: 'var(--text-muted)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontFamily: 'Georgia, serif',
                  }}>
                    {t.generatingImage}
                  </div>
                )}
                <img
                  src={imageUrl}
                  alt={t.imagePreview}
                  style={{
                    display: 'block',
                    width: '100%',
                    aspectRatio: '1 / 1',
                    objectFit: 'contain',
                  }}
                  onLoad={() => setImageLoading(false)}
                  onError={() => {
                    setImageLoading(false)
                    setImageError(true)
                  }}
                />
              </div>
            )}

            {imageError && (
              <p style={{
                marginTop: '0.85rem',
                color: '#8a2f2f',
                fontSize: '0.8rem',
                lineHeight: 1.6,
                fontFamily: "'IM Fell English', Georgia, serif",
              }}>
                {t.imageError}
              </p>
            )}
          </div>

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
