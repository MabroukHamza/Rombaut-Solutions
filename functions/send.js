import { Resend } from 'resend'
import { escapeHtml, checkRateLimit, jsonResponse, isValidEmail } from './_utils.js'

const MAX_NAME_LENGTH = 100
const MAX_PHONE_LENGTH = 30
const MAX_MESSAGE_LENGTH = 2000

export async function onRequestPost(context) {
  const { request, env } = context

  if (!request.headers.get('Content-Type')?.includes('application/json')) {
    return jsonResponse({ success: false, error: 'Invalid content type' }, 400)
  }

  const allowed = await checkRateLimit(env, request, 'send')
  if (!allowed) {
    return jsonResponse({ success: false, error: 'Too many requests. Please try again later.' }, 429)
  }

  let body
  try {
    body = await request.json()
  } catch {
    return jsonResponse({ success: false, error: 'Invalid request body' }, 400)
  }

  const { name, email, phone, message, turnstileToken } = body

  const trimmedName = (name || '').trim().slice(0, MAX_NAME_LENGTH)
  const trimmedEmail = (email || '').trim()
  const trimmedPhone = (phone || '').trim().slice(0, MAX_PHONE_LENGTH)
  const trimmedMessage = (message || '').trim().slice(0, MAX_MESSAGE_LENGTH)

  if (!trimmedName || !trimmedMessage) {
    return jsonResponse({ success: false, error: 'Name and message are required' }, 400)
  }

  if (!isValidEmail(trimmedEmail)) {
    return jsonResponse({ success: false, error: 'Invalid email address' }, 400)
  }

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

  try {
    const resend = new Resend(env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'contact@rombautsolutions.be',
      to: 'info@rombautsolutions.be',
      replyTo: trimmedEmail,
      subject: `New contact form message from ${escapeHtml(trimmedName)}`,
      html: `
        <div style="font-family:Georgia,serif;background:#111;color:#d4a017;padding:2rem;border:1px solid #b8860b;">
          <h2 style="color:#d4a017;letter-spacing:0.2em;text-transform:uppercase;">New Message — RO Digital</h2>
          <hr style="border-color:#3a2e00;margin:1rem 0;" />
          <p><strong style="color:#8a6d00;">Name:</strong> ${escapeHtml(trimmedName)}</p>
          <p><strong style="color:#8a6d00;">Email:</strong> ${escapeHtml(trimmedEmail)}</p>
          <p><strong style="color:#8a6d00;">Phone:</strong> ${escapeHtml(trimmedPhone) || 'Not provided'}</p>
          <hr style="border-color:#3a2e00;margin:1rem 0;" />
          <p><strong style="color:#8a6d00;">Message:</strong></p>
          <p style="color:#c9a227;">${escapeHtml(trimmedMessage)}</p>
        </div>
      `,
    })

    return jsonResponse({ success: true })
  } catch (error) {
    return jsonResponse({ success: false, error: error.message }, 500)
  }
}
