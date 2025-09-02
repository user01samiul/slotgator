// app/api/auth/forgot-password/route.ts
import connectDB from "@/lib/connectDB";
import User from "@/models/User.model";
import crypto from "crypto";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  await connectDB();
  const { email } = await req.json();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json(
      { success: false, message: "User not found. Email doesn't exist." },
      { status: 404 }
    );
  }

  const token = crypto.randomBytes(32).toString("hex");
  const expires = Date.now() + 1000 * 60 * 30; // 30 minutes

  // Store token in DB
  user.resetPasswordToken = token;
  user.resetPasswordExpires = expires;
  await user.save();

  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}&email=${email}`;

  // Send email
  const transporter = nodemailer.createTransport({
    service: "Gmail", // or use SMTP settings
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetUrl}">here</a> to reset your password. This link will expire in 30 minutes.</p>`,
  });

  return NextResponse.json(
    {
      success: true,
      message:
        "A reset link was sent to your email. Use the link to reset your password.",
    },
    { status: 200 }
  );
}
