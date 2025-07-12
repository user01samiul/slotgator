// actions/submitContactFormOferta.ts
"use server";
import { ContactFormSchemaOferta } from "./../schemas/oferta";

interface FormState {
  success: boolean;
  message?: string;
  error?: {
    fullName?: string[];
    email?: string[];
    phone?: string[];
    extension?: string[];
    company?: string[];
    website?: string[];
    collaborationType?: string[];
    otherCollaboration?: string[];
    needsDescription?: string[];
    technologies?: string[];
    budget?: string[];
    startTimeline?: string[];
    consultPreference?: string[];
    agreeTerms?: string[];
    receiveUpdates?: string[];
  };
}

export async function submitContactFormOferta(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const formDataObject = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    extension: formData.get("extension"),
    company: formData.get("company"),
    website: formData.get("website"),
    collaborationType: formData.getAll("collaborationType"),
    otherCollaboration: formData.get("otherCollaboration"),
    needsDescription: formData.get("needsDescription"),
    technologies: formData.get("technologies"), // Treat as single string
    budget: formData.get("budget"),
    startTimeline: formData.get("startTimeline"),
    consultPreference: formData.get("consultPreference"),
    agreeTerms: formData.get("agreeTerms") === "on",
    receiveUpdates: formData.get("receiveUpdates") === "on",
  };
  console.log("FormData received:", formDataObject);

  const validatedData = ContactFormSchemaOferta.safeParse(formDataObject);

  if (!validatedData.success) {
    return {
      success: false,
      error: validatedData.error.flatten().fieldErrors,
      message: "Vă rugăm să verificați câmpurile formularului.",
    };
  }

  const data = validatedData.data;
  console.log("Validated data:", data);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/public/submit-contact-form-oferta`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    console.log("API response:", result);

    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Eroare la trimiterea formularului.",
      };
    }

    return {
      success: true,
      message:
        result.message ||
        "Formular trimis cu succes. Vă vom contacta în curând!",
    };
  } catch (error) {
    console.error("Server error:", error);
    return {
      success: false,
      message:
        "Eroare internă a serverului. Vă rugăm să încercați din nou mai târziu.",
    };
  }
}