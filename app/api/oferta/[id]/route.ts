// app/api/oferta/[id]/route.ts
import { auth } from "@/auth";
import connectDB from "@/lib/connectDB";
import Oferta from "@/models/Oferta.model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, { params }) {
  try {
    // Protect
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();
    const { id } = await params;
    const body = await request.json();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid oferta ID" }, { status: 400 });
    }

    const oferta = await Oferta.findByIdAndUpdate(
      id,
      { $set: { read: body.read } },
      { new: true }
    );

    if (!oferta) {
      return NextResponse.json({ error: "Oferta not found" }, { status: 404 });
    }

    return NextResponse.json(oferta);
  } catch (error) {
    console.error("Error updating oferta:", error);
    return NextResponse.json(
      { error: "Failed to update oferta" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, { params }) {
  try {
    // Protect
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid oferta ID" }, { status: 400 });
    }

    const oferta = await Oferta.findByIdAndDelete(id);

    if (!oferta) {
      return NextResponse.json({ error: "Oferta not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Oferta deleted successfully" });
  } catch (error) {
    console.error("Error deleting oferta:", error);
    return NextResponse.json(
      { error: "Failed to delete oferta" },
      { status: 500 }
    );
  }
}
