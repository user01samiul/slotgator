// app/api/auth/reset-password/route.ts
import connectDB from "@/lib/connectDB";
import User from "@/models/User.model";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectDB();
  const { email, token, password } = await req.json();

  const user = await User.findOne({ email, resetPasswordToken: token });

  if (!user || user.resetPasswordExpires! < Date.now()) {
    return NextResponse.json(
      { sucess: false, message: "Invalid or expired token" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  user.password = hashedPassword;
  user.resetPasswordToken = undefined; // undefinemd removes the field  | null sets null
  user.resetPasswordExpires = undefined;
  await user.save();

  return NextResponse.json(
    {
      success: true,
      message: "Password reset successfully",
    },
    { status: 200 }
  );
}
