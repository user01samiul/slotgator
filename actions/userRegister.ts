"use server";
import connectDB from "@/lib/connectDB";
import User from "@/models/User.model";
import { RegisterFormSchma, RegisterFormState } from "@/schemas/auth.schema";
import { hash } from "bcryptjs";

export async function userRegister(
  formState: RegisterFormState,
  formData: FormData
): Promise<RegisterFormState> {
  const validatedFields = RegisterFormSchma.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { firstName, lastName, email, password } = validatedFields.data;

  try {
    await connectDB();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { success: false, message: "User already registered" };
    }

    const hashedPassword = await hash(password, 12);
    await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    return {
      success: true,
      message: "Registration successful go to Login page to continue login.",
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
