// app/api/oferta/route.ts
import connectDB from "@/lib/connectDB";

import { auth } from "@/auth";
import Oferta from "@/models/Oferta.model";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Protect
  const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        { success: false, message: "request failed" },
        { status: 500 }
      );
    }

    await connectDB();
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    const skip = (page - 1) * limit;
    const ofertas = await Oferta.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await Oferta.countDocuments();
    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      ofertas,
      totalPages,
      total,
      currentPage: page,
    });
  } catch (error) {
    console.error("Error fetching ofertas:", error);
    return NextResponse.json(
      { error: "Failed to fetch ofertas" },
      { status: 500 }
    );
  }
}