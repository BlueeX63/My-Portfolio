import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const brevoApiKey = process.env.BREVO_API_KEY;

    if (!brevoApiKey) {
      console.error('BREVO_API_KEY is not defined in environment variables.');
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': brevoApiKey,
      },
      body: JSON.stringify({
        sender: {
          name: name || 'Portfolio Contact',
          email: 'quorvoxed@gmail.com', // Must be verified in Brevo
        },
        replyTo: {
          email: email,
          name: name,
        },
        to: [
          {
            email: 'quorvoxed@gmail.com',
            name: 'Bhavit',
          },
        ],
        subject: `New Contact Form Submission from ${name}`,
        htmlContent: `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #000000; color: #ffffff; margin: 0; padding: 40px 20px; }
  .container { max-width: 600px; margin: 0 auto; background-color: #1c1c1e; border: 1px solid #333333; border-radius: 16px; overflow: hidden; }
  .header { padding: 32px; background-color: #2c2c2e; text-align: center; border-bottom: 1px solid #333333; }
  .header h1 { margin: 0; font-size: 24px; font-weight: 500; letter-spacing: -0.5px; color: #ffffff; }
  .content { padding: 40px 32px; }
  .field { margin-bottom: 24px; }
  .label { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #8e8e93; margin-bottom: 8px; font-weight: 600; }
  .value { font-size: 16px; line-height: 1.5; color: #f2f2f7; background-color: #2c2c2e; padding: 16px; border-radius: 12px; }
  .message-body { font-size: 16px; line-height: 1.6; color: #f2f2f7; background-color: #2c2c2e; padding: 24px; border-radius: 12px; white-space: pre-wrap; }
  .footer { padding: 24px; text-align: center; font-size: 12px; color: #8e8e93; }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Transmission Received</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Sender Identity</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Return Address</div>
        <div class="value">${email}</div>
      </div>
      <div class="field">
        <div class="label">Decrypted Message</div>
        <div class="message-body">${message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    <div class="footer">
      Sent securely from your Portfolio Infrastructure.
    </div>
  </div>
</body>
</html>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API error:', errorData);
      return NextResponse.json(
        { error: 'Brevo Error: ' + JSON.stringify(errorData) },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact API route:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
