import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, message } = req.body

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

    res.status(200).json({ success: true })
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' })
  }
}