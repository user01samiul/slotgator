import Contact from "@/models/ContactForm.model";
import { NextResponse } from "next/server";
import { ContactFormSchema } from "@/schemas/contactForm.schema";
import connectDB from "@/lib/connectDB";

// Memory cooldown store
const cooldownMap = new Map<string, number>();
const COOLDOWN_DURATION = 60 * 1000;

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  // Check if the IP is currently in cooldown
  const lastSubmitTime = cooldownMap.get(ip);
  const now = Date.now();

  if (lastSubmitTime && now - lastSubmitTime < COOLDOWN_DURATION) {
    const waitTime = Math.ceil((COOLDOWN_DURATION - (now - lastSubmitTime)) / 1000);
    return NextResponse.json(
      {
        success: false,
        message: `Please wait ${waitTime} seconds before submitting again.`,
      },
      { status: 429 } // Too Many Requests
    );
  }

  const body = await req.json();
  console.log("API received body:", body); 

  const validatedData = ContactFormSchema.safeParse(body);

  if (!validatedData.success) {
    console.log("API validation errors:", validatedData.error.flatten().fieldErrors); // Debug log
    return NextResponse.json(
      {
        success: false,
        message: "Invalid form data",
      },
      { status: 400 }
    );
  }

  const { name, email, phone, company, serviceType, otherService, budget, message } = validatedData.data;
  // console.log("Data to save:", { name, email, phone, company, serviceType, otherService, budget, message });

  try {
    await connectDB();
    const submit = await Contact.create({ name, email, phone, company, serviceType, otherService, budget, message });
    console.log("Saved document:", submit); // Debug log

    if (!submit) {
      return NextResponse.json(
        {
          success: false,
          message: "Internal server error.",
        },
        { status: 500 }
      );
    }

    cooldownMap.set(ip, now);

    return NextResponse.json(
      {
        success: true,
        message: "Submitted Successfully. You'll hear from us shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error.",
      },
      { status: 500 }
    );
  }
}