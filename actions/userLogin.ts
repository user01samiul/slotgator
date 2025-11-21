"use server";

import { signIn } from "@/auth";
import { SigninFormSchma, SigninFormState } from "@/schemas/auth.schema";

export async function userLogin(
  formState: SigninFormState,
  formData: FormData
): Promise<SigninFormState> {
  const validatedFields = SigninFormSchma.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      return {
        success: false,
        errors: {
          email: [result.error],
        },
      };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Login error:", error);

    let message = "Invalid email or password";

    // Remove authjs error doc link from the message (if exists)
    message = message
      .replace(/https:\/\/errors\.authjs\.dev[^\s]*/g, "")
      .trim();

    return {
      success: false,
      errors: {
        email: [message],
      },
    };
  }
}

export async function SignInWithGoogle() {
  await signIn("google", { redirectTo: "/dashboard" });
}
