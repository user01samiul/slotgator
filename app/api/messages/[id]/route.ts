import { auth } from "@/auth";
import connectDB from "@/lib/connectDB";
import Contact from "@/models/ContactForm.model";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
        //protect
      const session = await auth();

        if (!session?.user) {
          return NextResponse.json(
            { success: false, message: "request failed" },
            { status: 500 }
          );
        }
    
    const { id } = await params;

    const message = await Contact.findByIdAndDelete(id);

    if (!message) {
      return NextResponse.json({ error: "Message not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Message deleted successfully" });
  } catch (error) {
    console.error("Error deleting message:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}