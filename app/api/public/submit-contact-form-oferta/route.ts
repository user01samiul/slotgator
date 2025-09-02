// app/api/public/submit-contact-form-oferta/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import { ContactFormSchemaOferta } from "@/schemas/oferta";
import Oferta from "@/models/Oferta.model";

const cooldownMap = new Map<string, number>();
const COOLDOWN_DURATION = 60 * 1000;

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  const lastSubmitTime = cooldownMap.get(ip);
  const now = Date.now();

  if (lastSubmitTime && now - lastSubmitTime < COOLDOWN_DURATION) {
    const waitTime = Math.ceil(
      (COOLDOWN_DURATION - (now - lastSubmitTime)) / 1000
    );
    return NextResponse.json(
      {
        success: false,
        message: `Please wait ${waitTime} seconds before submitting again.`,
      },
      { status: 429 }
    );
  }

  const body = await req.json();
  console.log("API received body:", body);

  const validatedData = ContactFormSchemaOferta.safeParse(body);

  if (!validatedData.success) {
    console.log("API validation errors:", validatedData.error.flatten().fieldErrors);
    return NextResponse.json(
      {
        success: false,
        message: "Invalid form data",
      },
      { status: 400 }
    );
  }

  const {
    fullName,
    email,
    phone,
    extension,
    company,
    website,
    collaborationType,
    otherCollaboration,
    needsDescription,
    technologies, // Now a string
    budget,
    startTimeline,
    consultPreference,
    agreeTerms,
    receiveUpdates,
  } = validatedData.data;

  try {
    await connectDB();
    const submit = await Oferta.create({
      fullName,
      email,
      phone,
      extension,
      company,
      website,
      collaborationType,
      otherCollaboration,
      needsDescription,
      technologies, // Save as string
      budget,
      startTimeline,
      consultPreference,
      agreeTerms,
      receiveUpdates,
    });
    console.log("Saved document:", submit);

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