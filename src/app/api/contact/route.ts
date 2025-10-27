import Backendless from "@/services/backendless";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, subject } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({
        success: false,
        message: "Nama, email, pesan harus diisi",
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
        message: "Pesan berhasil di kirim",
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
        message: error.message || "Gagal mengirim pesan, Coba lagi nanti...",
      },
      {
        status: 500,
      }
    );
  }
}
