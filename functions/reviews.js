import { Resend } from 'resend'

const MAX_REVIEWS = 100
const MAX_COMMENT_LENGTH = 600
const MAX_NAME_LENGTH = 60

export async function onRequestGet(context) {
  const reviews = (await context.env.REVIEWS_KV.get('reviews', 'json')) || []
  return new Response(JSON.stringify({ success: true, reviews }), {
    headers: { 'Content-Type': 'application/json' },
  })
}

export async function onRequestPost(context) {
  const body = await context.request.json()
  const { name, rating, comment, turnstileToken } = body

  const numericRating = Number(rating)
  if (!Number.isInteger(numericRating) || numericRating < 1 || numericRating > 5) {
    return new Response(JSON.stringify({ success: false, error: 'Invalid rating' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const trimmedComment = (comment || '').trim()
  if (!trimmedComment || trimmedComment.length > MAX_COMMENT_LENGTH) {
    return new Response(JSON.stringify({ success: false, error: 'Invalid comment' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const trimmedName = (name || '').trim().slice(0, MAX_NAME_LENGTH)

  const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: context.env.TURNSTILE_SECRET_KEY,
      response: turnstileToken,
    }),
  })
  const turnstileData = await turnstileRes.json()

  if (!turnstileData.success) {
    return new Response(JSON.stringify({ success: false, error: 'Security check failed' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const review = {
    id: crypto.randomUUID(),
    name: trimmedName,
    rating: numericRating,
    comment: trimmedComment,
    date: new Date().toISOString(),
  }

  const existing = (await context.env.REVIEWS_KV.get('reviews', 'json')) || []
  const updated = [review, ...existing].slice(0, MAX_REVIEWS)
  await context.env.REVIEWS_KV.put('reviews', JSON.stringify(updated))

  try {
    const resend = new Resend(context.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'contact@rombautsolutions.be',
      to: 'info@rombautsolutions.be',
      subject: `New ${numericRating}-star review${trimmedName ? ` from ${trimmedName}` : ' (anonymous)'}`,
      html: `
        <div style="font-family:Georgia,serif;background:#111;color:#d4a017;padding:2rem;border:1px solid #b8860b;">
          <h2 style="color:#d4a017;letter-spacing:0.2em;text-transform:uppercase;">New Review — RO Digital</h2>
          <hr style="border-color:#3a2e00;margin:1rem 0;" />
          <p><strong style="color:#8a6d00;">Name:</strong> ${trimmedName || 'Anonymous'}</p>
          <p><strong style="color:#8a6d00;">Rating:</strong> ${'★'.repeat(numericRating)}${'☆'.repeat(5 - numericRating)}</p>
          <hr style="border-color:#3a2e00;margin:1rem 0;" />
          <p style="color:#c9a227;">${trimmedComment}</p>
        </div>
      `,
    })
  } catch {
    // Notification email is best-effort; the review is already saved.
  }

  return new Response(JSON.stringify({ success: true, review }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
