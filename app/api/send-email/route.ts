import { NextRequest, NextResponse } from 'next/server'

const RECIPIENT_EMAIL = 'us.gestaltgardens@gmail.com'

interface EmailPayload {
  name: string
  email: string
  phone?: string
  address?: string
  message: string
  source?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: EmailPayload = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create email content
    const emailContent = `
New inquiry from Gestalt Gardens website

Name: ${body.name}
Email: ${body.email}
${body.phone ? `Phone: ${body.phone}` : ''}
${body.address ? `Address: ${body.address}` : ''}
Source: ${body.source || 'Contact Form'}

Message:
${body.message}

---
This email was sent from the Gestalt Gardens website.
    `.trim()

    // For development/testing, log the email instead of sending
    console.log('[v0] Email would be sent to:', RECIPIENT_EMAIL)
    console.log('[v0] Email content:', emailContent)

    // In production, you would integrate with a service like:
    // - Resend (resend.com)
    // - SendGrid
    // - AWS SES
    // - Mailgun
    // - nodemailer
    //
    // Example with Resend:
    // const { data, error } = await resend.emails.send({
    //   from: 'noreply@gestaltgardens.com',
    //   to: RECIPIENT_EMAIL,
    //   replyTo: body.email,
    //   subject: `New Inquiry from ${body.name}`,
    //   html: htmlContent,
    // })
    //
    // For now, we'll return success to allow the form to work
    // Update this once you've set up your email service

    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out. We will be in touch soon.',
    })
  } catch (error) {
    console.error('[v0] Email error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
