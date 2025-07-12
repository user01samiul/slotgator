// schemas/oferta.ts
import { z } from "zod";

export const ContactFormSchemaOferta = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Phone number must be at least 7 digits"),
  extension: z.string().optional(),
  company: z.string().min(1, "Company name is required"),
  website: z.string().url("Invalid website URL").optional().or(z.literal("")),
  collaborationType: z
    .array(
      z.enum([
        "Outsourcing IT",
        "Dezvoltare software custom",
        "DevOps & Cloud Engineering",
        "Securitate IT & Cybersecurity",
        "Asistență tehnică continuă",
        "Consultanță IT",
        "Altele",
      ])
    )
    .min(1, "At least one collaboration type must be selected"),
  otherCollaboration: z.string().optional(),
  needsDescription: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must be 500 characters or less"),
  technologies: z.string().optional(), 
  budget: z
    .enum([
      "Sub 1000€",
      "1000€ - 3000€",
      "3000€ - 5000€",
      "Peste 5000€",
      "Nu doresc să specific",
    ])
    .optional(),
  startTimeline: z
    .enum([
      "Immediăt",
      "În următoarele 1-2 luni",
      "Analizăm pentru viitor",
      "Nu am stabilit încă",
    ])
    .optional(),
  consultPreference: z
    .enum(["Da, doresc o întâlnire online", "Doar prin email", "Nu sunt disponibil"])
    .optional(),
  agreeTerms: z.literal(true, {
    message: "You must agree to the terms and privacy policy", // Changed from errorMap to message
  }),
  receiveUpdates: z.boolean().optional(),
}).refine(
  (data) =>
    !data.collaborationType.includes("Altele") ||
    (data.collaborationType.includes("Altele") &&
      data.otherCollaboration &&
      data.otherCollaboration.trim().length > 0),
  {
    message: "Other collaboration description is required when 'Altele' is selected",
    path: ["otherCollaboration"],
  }
);
