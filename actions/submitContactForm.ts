"use server";

import { ContactFormSchema } from "@/schemas/contactForm.schema";

interface FormState {
  success: boolean;
  message?: string;
  error?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    company?: string[];
    serviceType?: string[];
    otherService?: string[];
    budget?: string[];
    message?: string[];
  };
}

export async function submitContactForm(_prevState: FormState, formData: FormData): Promise<FormState> {
  const formDataObject = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    serviceType: formData.getAll("serviceType"),
    otherService: formData.get("otherService"),
    budget: formData.get("budget"),
    message: formData.get("message"),
  };
  console.log("FormData received:", formDataObject); // Debug log

  const validatedData = ContactFormSchema.safeParse(formDataObject);

  if (!validatedData.success) {
    console.log("Validation errors:", validatedData.error.flatten().fieldErrors); // Debug log
    return {
      success: false,
      error: validatedData.error.flatten().fieldErrors,
      message: "Vă rugăm să verificați câmpurile formularului.",
    };
  }

  const data = validatedData.data;
  console.log("Validated data:", data); // Debug log

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/public/submit-contact-form`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    console.log("API response:", result); // Debug log

    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Eroare la trimiterea formularului.",
      };
    }

    return {
      success: true,
      message: result.message || "Formular trimis cu succes. Vă vom contacta în curând!",
    };
  } catch (error) {
    console.error("Server error:", error);
    return {
      success: false,
      message: "Eroare internă a serverului. Vă rugăm să încercați din nou mai târziu.",
    };
  }
}