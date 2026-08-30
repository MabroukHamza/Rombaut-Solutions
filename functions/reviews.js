import { Resend } from 'resend'
import { escapeHtml, checkRateLimit, jsonResponse } from './_utils.js'

const MAX_REVIEWS = 100
const MAX_COMMENT_LENGTH = 600
const MAX_NAME_LENGTH = 60

export async function onRequestGet(context) {
  const reviews = (await context.env.REVIEWS_KV.get('reviews', 'json')) || []
  return jsonResponse({ success: true, reviews })
}

export async function onRequestPost(context) {
  const { request, env } = context

  if (!request.headers.get('Content-Type')?.includes('application/json')) {
    return jsonResponse({ success: false, error: 'Invalid content type' }, 400)
  }

  const allowed = await checkRateLimit(env, request, 'reviews')
  if (!allowed) {
    return jsonResponse({ success: false, error: 'Too many requests. Please try again later.' }, 429)
  }

  let body
  try {
    body = await request.json()
  } catch {
    return jsonResponse({ success: false, error: 'Invalid request body' }, 400)
  }

  const { name, rating, comment, turnstileToken } = body

  const numericRating = Number(rating)
  if (!Number.isInteger(numericRating) || numericRating < 1 || numericRating > 5) {
    return jsonResponse({ success: false, error: 'Invalid rating' }, 400)
  }

  const trimmedComment = (comment || '').trim()
  if (!trimmedComment || trimmedComment.length > MAX_COMMENT_LENGTH) {
    return jsonResponse({ success: false, error: 'Invalid comment' }, 400)
  }

  const trimmedName = (name || '').trim().slice(0, MAX_NAME_LENGTH)

  if (typeof turnstileToken !== 'string' || !turnstileToken) {
    return jsonResponse({ success: false, error: 'Security check failed' }, 403)
  }

  const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: env.TURNSTILE_SECRET_KEY,
      response: turnstileToken,
    }),
  })
  const turnstileData = await turnstileRes.json()

  if (!turnstileData.success) {
    return jsonResponse({ success: false, error: 'Security check failed' }, 403)
  }

  const review = {
    id: crypto.randomUUID(),
    name: trimmedName,
    rating: numericRating,
    comment: trimmedComment,
    date: new Date().toISOString(),
  }

  const existing = (await env.REVIEWS_KV.get('reviews', 'json')) || []
  const updated = [review, ...existing].slice(0, MAX_REVIEWS)
  await env.REVIEWS_KV.put('reviews', JSON.stringify(updated))

  try {
    const resend = new Resend(env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'contact@rombautsolutions.be',
      to: 'info@rombautsolutions.be',
      subject: `New ${numericRating}-star review${trimmedName ? ` from ${escapeHtml(trimmedName)}` : ' (anonymous)'}`,
      html: `
        <div style="font-family:Georgia,serif;background:#111;color:#d4a017;padding:2rem;border:1px solid #b8860b;">
          <h2 style="color:#d4a017;letter-spacing:0.2em;text-transform:uppercase;">New Review — RO Digital</h2>
          <hr style="border-color:#3a2e00;margin:1rem 0;" />
          <p><strong style="color:#8a6d00;">Name:</strong> ${escapeHtml(trimmedName) || 'Anonymous'}</p>
          <p><strong style="color:#8a6d00;">Rating:</strong> ${'★'.repeat(numericRating)}${'☆'.repeat(5 - numericRating)}</p>
          <hr style="border-color:#3a2e00;margin:1rem 0;" />
          <p style="color:#c9a227;">${escapeHtml(trimmedComment)}</p>
        </div>
      `,
    })
  } catch {
    // Notification email is best-effort; the review is already saved.
  }

  return jsonResponse({ success: true, review })
}
