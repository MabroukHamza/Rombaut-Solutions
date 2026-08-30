export function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char])
}

const RATE_LIMIT_WINDOW_SECONDS = 60
const RATE_LIMIT_MAX_REQUESTS = 5

export async function checkRateLimit(env, request, bucket) {
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown'
  const key = `ratelimit:${bucket}:${ip}`
  const current = Number(await env.REVIEWS_KV.get(key)) || 0

  if (current >= RATE_LIMIT_MAX_REQUESTS) {
    return false
  }

  await env.REVIEWS_KV.put(key, String(current + 1), { expirationTtl: RATE_LIMIT_WINDOW_SECONDS })
  return true
}

export function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isValidEmail(email) {
  return typeof email === 'string' && email.length <= 200 && EMAIL_RE.test(email)
}
