export const revealTransition = 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s, box-shadow 0.35s, background 0.3s'

export const staggerDelay = (visible, index, step = 80) => (visible ? `${index * step}ms` : '0ms')

export function cardHoverIn(e) {
  e.currentTarget.style.borderColor = 'var(--gold)'
  e.currentTarget.style.transform = 'translateY(-6px)'
  e.currentTarget.style.boxShadow = '0 16px 36px -16px rgba(212,160,23,0.4)'
}

export function cardHoverOut(e) {
  e.currentTarget.style.borderColor = 'var(--border-card)'
  e.currentTarget.style.transform = 'translateY(0)'
  e.currentTarget.style.boxShadow = 'none'
}
