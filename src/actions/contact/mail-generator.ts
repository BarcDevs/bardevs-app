export const generateOwnerEmail = (
    name: string,
    email: string,
    message: string = ''
): string => (
    `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; color: #333;">
  <h2 style="color: #0070f3;">📩 New Contact Form Submission</h2>

  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email || 'Not provided'}</p>

  <div style="margin-top: 24px; padding: 16px; background-color: #f9f9f9; border-left: 4px solid #0070f3;">
    <strong>📝 Message:</strong><br />
    ${message.replace(/\n/g, '<br />')}
  </div>

  <hr style="margin: 32px 0;" />

  <small style="color: #888;">
    This message was sent from your website contact form.
  </small>
</div>
  `
)

export const generateUserConfirmationEmail = (
    name: string,
    message: string
) => (
    `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; color: #333;">
  <h2 style="color: #0070f3;">Thanks for reaching out, ${name}!</h2>

  <p>We’ve received your message and will get back to you shortly.</p>

  <div style="margin-top: 24px; padding: 16px; background-color: #f1f5f9; border-left: 4px solid #0070f3;">
    <p><strong>📝 Message:</strong><br />
      ${message.replace(/\n/g, '<br />')}
    </p>
  </div>

  <p style="margin-top: 32px;">
    Best regards,<br />
    BarDevs Team
  </p>
</div>
  `
)

