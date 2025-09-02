"use server";


import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
// import { signIn } from "@/auth";
import connectDB from './connectDB';
import User from "@/models/User.model";

// export const login = async (formData: FormData) => {
//   const email = formData.get("email") as string;
//   const password = formData.get("password") as string;

//   try {
//     await signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//     });
//   } catch (error) {
//     throw new Error("Invalid email or password");
//     console.log(error)
//   }
//   redirect("/dashboard");
// };

export const register = async (formData: FormData) => {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!firstName || !lastName || !email || !password) {
    throw new Error("Please fill all fields");
  }

  await connectDB();
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await hash(password, 12);
  await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    role: "user",
  });

  redirect("/login");
};

