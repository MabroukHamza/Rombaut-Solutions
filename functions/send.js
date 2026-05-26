import { Resend } from 'resend'

export async function onRequestPost(context) {
  const resend = new Resend(context.env.RESEND_API_KEY)
  const body = await context.request.json()
  const { name, email, phone, message } = body

  try {
    await resend.emails.send({
      from: 'contact@rombautsolutions.be',
      to: 'info@rombautsolutions.be',
      replyTo: email,
      subject: `New contact form message from ${name}`,
      html: `
        <div style="font-family:Georgia,serif;background:#111;color:#d4a017;padding:2rem;border:1px solid #b8860b;">
          <h2 style="color:#d4a017;letter-spacing:0.2em;text-transform:uppercase;">New Message — RO Digital</h2>
          <hr style="border-color:#3a2e00;margin:1rem 0;" />
          <p><strong style="color:#8a6d00;">Name:</strong> ${name}</p>
          <p><strong style="color:#8a6d00;">Email:</strong> ${email}</p>
          <p><strong style="color:#8a6d00;">Phone:</strong> ${phone || 'Not provided'}</p>
          <hr style="border-color:#3a2e00;margin:1rem 0;" />
          <p><strong style="color:#8a6d00;">Message:</strong></p>
          <p style="color:#c9a227;">${message}</p>
        </div>
      `,
    })

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}