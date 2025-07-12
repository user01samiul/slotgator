import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Phone number must be at least 7 digits"),
  company: z.string().min(1, "Company name is required"),
  serviceType: z
    .array(z.enum(["Outsourcing IT", "DevOps", "Software Development", "Asistență tehnică", "Altele"]))
    .min(1, "At least one service type must be selected"),
  otherService: z.string().optional(),
  budget: z.enum(["Sub 1000€", "1000€ - 3000€", "Peste 3000€", "Nu doresc să specific"]).optional(),
  message: z.string().max(500, "Message must be 500 characters or less").optional(),
}).refine(
  (data) => !data.serviceType.includes("Altele") || (data.serviceType.includes("Altele") && data.otherService && data.otherService.trim().length > 0),
  {
    message: "Other service description is required when 'Altele' is selected",
    path: ["otherService"],
  }
);