import Backendless from "@/services/backendless";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, subject } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({
        success: false,
        message: "Name, email, and message are required",
        data: null,
      });
    }

    const response = await Backendless.Data.of("ContactMessages").save({
      name,
      email,
      message,
      subject,
    });
    return NextResponse.json(
      {
        success: true,
        message: "message sent successfully",
        data: response,
      },
      {
        status: 201,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "failed to send message, try again later",
      },
      {
        status: 500,
      }
    );
  }
}
