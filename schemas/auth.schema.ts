import { z } from "zod";

//login
export const SigninFormSchma = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(6, { message: "Be at least 6 characters long" })
    .regex(/[a-zA-Z]/, {
      message: "Contain at least one letter. Your password might be wrong.",
    })
    .regex(/[0-9]/, {
      message: "Contain at least one number. Your password might be wrong.",
    })
    .trim(),
});

export type SigninFormState = {
  success: boolean;
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string;
};

//register

export const RegisterFormSchma = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(6, { message: "Be at least 6 characters long" })
    .regex(/[a-zA-Z]/, {
      message: "Password must Contain at least one letter.",
    })
    .regex(/[0-9]/, { message: "Password must Contain at least one number." })
    .trim(),
});

export type RegisterFormState = {
  success: boolean;
  errors?: {
    email?: string[];
    fristName?: string[];
    lastName?: string[];
    password?: string[];
  };
  message?: string;
};
