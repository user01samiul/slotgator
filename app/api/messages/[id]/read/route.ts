import { auth } from "@/auth";
import connectDB from "@/lib/connectDB";
import Contact from "@/models/ContactForm.model";
import { NextResponse } from "next/server";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    //protect
  const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        { success: false, message: "request failed" },
        { status: 500 }
      );
    }

    await connectDB();
    const { id } = await params;
    const { read } = await request.json();

    const message = await Contact.findByIdAndUpdate(
      id,
      { read: read === true },
      { new: true }
    );

    if (!message) {
      return NextResponse.json({ error: "Message not found" }, { status: 404 });
    }

    return NextResponse.json({ message });
  } catch (error) {
    console.error("Error updating message read status:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
