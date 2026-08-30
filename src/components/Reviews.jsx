import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Turnstile } from '@marsidev/react-turnstile'
import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/LanguageContext'

const content = {
  nl: {
    label: '— Reviews —',
    title: 'Wat Klanten Zeggen',
    sub: 'Eerlijke ervaringen van échte klanten. Deel ook die van jou.',
    basedOn: n => `Gebaseerd op ${n} review${n === 1 ? '' : 's'}`,
    loading: 'Reviews laden...',
    empty: 'Nog geen reviews. Wees de eerste!',
    writeReview: '✍️ Schrijf een Review',
    cancel: 'Annuleren',
    name: 'Naam',
    namePh: 'Uw naam',
    nameHint: 'Optioneel — blijft anoniem indien leeg',
    rating: 'Beoordeling',
    comment: 'Uw Ervaring',
    commentPh: 'Vertel over uw ervaring met Rombaut Solutions...',
    submit: 'Plaats Review',
    submitting: 'Bezig met plaatsen...',
    captcha: 'Wacht tot de beveiligingscheck klaar is.',
    success: '✓ Bedankt voor uw review!',
    error: '✕ Er ging iets mis. Probeer het later opnieuw.',
    rateLimited: '✕ Te veel pogingen. Probeer het later opnieuw.',
    consentRequired: 'Gelieve akkoord te gaan met het privacybeleid.',
    consentLabel: 'Ik ga akkoord met het',
    consentLink: 'privacybeleid',
    anonymous: 'Anoniem',
  },
  en: {
    label: '— Reviews —',
    title: 'What Clients Say',
    sub: 'Honest experiences from real clients. Share yours too.',
    basedOn: n => `Based on ${n} review${n === 1 ? '' : 's'}`,
    loading: 'Loading reviews...',
    empty: 'No reviews yet. Be the first!',
    writeReview: '✍️ Write a Review',
    cancel: 'Cancel',
    name: 'Name',
    namePh: 'Your name',
    nameHint: 'Optional — stays anonymous if left blank',
    rating: 'Rating',
    comment: 'Your Experience',
    commentPh: 'Tell us about your experience with Rombaut Solutions...',
    submit: 'Post Review',
    submitting: 'Posting...',
    captcha: 'Please wait for the security check to complete.',
    success: '✓ Thank you for your review!',
    error: '✕ Something went wrong. Please try again later.',
    rateLimited: '✕ Too many attempts. Please try again later.',
    consentRequired: 'Please agree to the privacy policy.',
    consentLabel: 'I agree to the',
    consentLink: 'privacy policy',
    anonymous: 'Anonymous',
  },
}

function Stars({ rating, size = '1rem' }) {
  return (
    <span style={{ letterSpacing: '0.15em' }}>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} style={{ color: i <= rating ? 'var(--gold)' : 'var(--border-card)', fontSize: size }}>★</span>
      ))}
    </span>
  )
}

function Reviews() {
  const { theme } = useTheme()
  const { lang } = useLang()
  const t = content[lang]

  const [reviews, setReviews] = useState([])
  const [loadingReviews, setLoadingReviews] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ name: '', comment: '' })
  const [rating, setRating] = useState(5)
  const [hoverRating, setHoverRating] = useState(0)
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState(null)
  const [consent, setConsent] = useState(false)
  const turnstileRef = useRef()

  useEffect(() => {
    fetch('/reviews')
      .then(res => res.json())
      .then(data => setReviews(data.reviews || []))
      .catch(() => setReviews([]))
      .finally(() => setLoadingReviews(false))
  }, [])

  const average = reviews.length ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0

  const inputStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-card)',
    color: 'var(--text-primary)',
    outline: 'none',
    transition: 'border-color 0.3s, background 0.3s',
    boxSizing: 'border-box',
    fontFamily: 'Georgia, Times New Roman, serif',
  }

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!turnstileToken) { setStatus('captcha'); return }
    if (!consent) { setStatus('consent'); return }

    const trimmed = { name: formData.name.trim(), comment: formData.comment.trim() }
    if (!trimmed.comment) { setStatus('error'); return }

    setLoading(true); setStatus(null)
    try {
      const res = await fetch('/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...trimmed, rating, turnstileToken }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setReviews(prev => [data.review, ...prev])
        setFormData({ name: '', comment: '' })
        setRating(5)
        setConsent(false)
        turnstileRef.current?.reset(); setTurnstileToken(null)
      } else {
        setStatus(res.status === 429 ? 'rateLimited' : 'error')
        turnstileRef.current?.reset(); setTurnstileToken(null)
      }
    } catch {
      setStatus('error'); turnstileRef.current?.reset(); setTurnstileToken(null)
    }
    setLoading(false)
  }

  return (
    <section id="reviews" style={{ padding: '6rem 1.5rem', maxWidth: '900px', margin: '0 auto', transition: 'background 0.3s' }}>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.4em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          {t.label}
        </p>
        <h2 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '2rem', fontWeight: '700', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          {t.title}
        </h2>
        <div style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)', height: '1px', width: '12rem', margin: '0 auto 1.5rem' }} />
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: reviews.length ? '1rem' : 0 }}>
          {t.sub}
        </p>
        {reviews.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '1.5rem', fontWeight: '700', color: 'var(--gold)' }}>
              {average.toFixed(1)}
            </span>
            <Stars rating={Math.round(average)} size="1.1rem" />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
              {t.basedOn(reviews.length)}
            </span>
          </div>
        )}
      </div>

      {loadingReviews ? (
        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>{t.loading}</p>
      ) : reviews.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '2rem' }}>{t.empty}</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {reviews.map(r => (
            <div
              key={r.id}
              style={{
                border: '1px solid var(--border-card)',
                padding: '1.75rem',
                background: 'var(--bg-card)',
                transition: 'border-color 0.3s, background 0.3s',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-card)' }}
            >
              <Stars rating={r.rating} />
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.7', margin: '1rem 0', flexGrow: 1 }}>
                “{r.comment}”
              </p>
              <div style={{ width: '2rem', height: '1px', background: 'var(--gold-dark)', marginBottom: '0.75rem' }} />
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', margin: 0 }}>
                {r.name || t.anonymous}
              </p>
              <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', margin: '0.25rem 0 0' }}>
                {new Date(r.date).toLocaleDateString(lang === 'nl' ? 'nl-BE' : 'en-GB', { year: 'numeric', month: 'short', day: 'numeric' })}
              </p>
            </div>
          ))}
        </div>
      )}

      <div style={{ textAlign: 'center' }}>
        <button
          onClick={() => setShowForm(s => !s)}
          style={{
            padding: '0.75rem 2rem',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            border: '1px solid var(--gold)',
            color: 'var(--gold)',
            background: 'transparent',
            cursor: 'pointer',
            transition: 'all 0.3s',
            fontFamily: 'Georgia, Times New Roman, serif',
            fontWeight: '700',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--bg-primary)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
        >
          {showForm ? t.cancel : t.writeReview}
        </button>
      </div>

      {showForm && (
        <div style={{ border: '1px solid var(--border-card)', padding: '2.5rem', background: 'var(--bg-card)', marginTop: '2rem', transition: 'background 0.3s, border-color 0.3s' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>{t.name}</label>
              <input name="name" type="text" placeholder={t.namePh} value={formData.name} onChange={handleChange} className="form-input" style={inputStyle}
                onFocus={e => { e.target.style.borderColor = 'var(--gold)' }}
                onBlur={e => { e.target.style.borderColor = 'var(--border-card)' }}
              />
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>{t.nameHint}</p>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>{t.rating}</label>
              <div>
                {[1, 2, 3, 4, 5].map(i => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setRating(i)}
                    onMouseEnter={() => setHoverRating(i)}
                    onMouseLeave={() => setHoverRating(0)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '1.6rem',
                      padding: '0 0.1rem',
                      color: i <= (hoverRating || rating) ? 'var(--gold)' : 'var(--border-card)',
                      transition: 'color 0.15s',
                    }}
                    aria-label={`${i} star`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>{t.comment}</label>
              <textarea name="comment" required rows={4} maxLength={600} placeholder={t.commentPh} value={formData.comment} onChange={handleChange}
                className="form-input" style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => { e.target.style.borderColor = 'var(--gold)' }}
                onBlur={e => { e.target.style.borderColor = 'var(--border-card)' }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <Turnstile
                ref={turnstileRef}
                siteKey="0x4AAAAAADYcqOrPkuFgEb5O"
                onSuccess={token => setTurnstileToken(token)}
                onExpire={() => setTurnstileToken(null)}
                onError={() => setTurnstileToken(null)}
                options={{ theme: theme === 'dark' ? 'dark' : 'light' }}
              />
            </div>

            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.75rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={consent}
                onChange={e => setConsent(e.target.checked)}
                style={{ marginTop: '0.15rem' }}
              />
              <span>
                {t.consentLabel}{' '}
                <Link to="/privacy" style={{ color: 'var(--gold)' }}>{t.consentLink}</Link>
              </span>
            </label>

            <button
              type="submit"
              disabled={loading || !turnstileToken || !consent}
              style={{
                width: '100%',
                padding: '0.85rem',
                background: loading || !turnstileToken || !consent ? 'var(--border-card)' : 'var(--gold)',
                color: loading || !turnstileToken || !consent ? 'var(--text-muted)' : 'var(--bg-primary)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontFamily: 'Georgia, Times New Roman, serif',
                fontWeight: '700',
                border: 'none',
                cursor: loading || !turnstileToken || !consent ? 'not-allowed' : 'pointer',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => { if (!loading && turnstileToken && consent) e.currentTarget.style.background = '#f5d060' }}
              onMouseLeave={e => { if (!loading && turnstileToken && consent) e.currentTarget.style.background = 'var(--gold)' }}
            >
              {loading ? t.submitting : t.submit}
            </button>

            {status === 'captcha' && <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--gold)', textAlign: 'center', letterSpacing: '0.1em' }}>{t.captcha}</p>}
            {status === 'consent' && <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--gold)', textAlign: 'center', letterSpacing: '0.1em' }}>{t.consentRequired}</p>}
            {status === 'rateLimited' && <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#c0392b', textAlign: 'center', letterSpacing: '0.1em' }}>{t.rateLimited}</p>}
            {status === 'success' && <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--gold)', textAlign: 'center', letterSpacing: '0.1em' }}>{t.success}</p>}
            {status === 'error' && <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#c0392b', textAlign: 'center', letterSpacing: '0.1em' }}>{t.error}</p>}
          </form>
        </div>
      )}

    </section>
  )
}

export default Reviews
