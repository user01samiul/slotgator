import { NextResponse } from 'next/server';
import connectDB from '@/lib/connectDB';
import Contact from '@/models/ContactForm.model';
import { auth } from '@/auth';

export async function GET(request: Request) {
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
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const skip = (page - 1) * limit;

    const messages = await Contact.find()
      .sort({ createdAt: -1 }) 
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await Contact.countDocuments();

    return NextResponse.json({
      messages,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}