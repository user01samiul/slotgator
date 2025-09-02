import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.json();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Request</h2>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
            <p>${formData.message}</p>
          </div>
          <p style="margin-top: 2rem;">This message was sent from the contact form on your website.</p>
        </div>
      `,
    };

    // Email to customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: "Thank you for contacting us!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for reaching out, ${formData.name}!</h2>
          <p>We've received your message and our team will get back to you shortly.</p>
          
          <div style="margin: 2rem 0; padding: 1rem; background: #f3f4f6; border-radius: 0.5rem;">
            <p><strong>Your message:</strong></p>
            <p>${formData.message}</p>
          </div>
          
          <p>For your reference, here are our official contact details:</p>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 0.5rem;">Email: hello@slotegrator.com</li>
            <li style="margin-bottom: 0.5rem;">Phone: +357 24 030 557</li>
            <li style="margin-bottom: 0.5rem;">Telegram: @slotegrator_info_bot</li>
          </ul>
          
          <p style="margin-top: 2rem;">Best regards,</p>
          <p><strong>Slotegrator Team</strong></p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
