import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendLeadNotificationEmail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, phone, email, message } = body;

    if (!fullName || !phone || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const lead = await prisma.lead.create({
      data: {
        fullName,
        phone,
        email,
        message,
        source: "website",
      },
    });

    await sendLeadNotificationEmail({
      fullName,
      phone,
      email,
      message
    })

    return NextResponse.json(
      { success: true, leadId: lead.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
