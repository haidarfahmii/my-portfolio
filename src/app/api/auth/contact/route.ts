import Backendless from "@/utils/backendless";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message, subject } = await request.json();

    if (!name || !email || !message || !subject) {
      return NextResponse.json(
        { error: "Nama, email, subject dan pesan harus diisi" },
        { status: 400 }
      );
    }

    const savedMessage = await Backendless.Data.of("ContactMessage").save({
      name,
      email,
      message,
      subject,
    });
    return NextResponse.json(
      {
        success: true,
        message: "Pesan berhasil di kirim",
        data: savedMessage,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Gagal mengirim pesan, Coba lagi nanti...",
      },
      {
        status: 500,
      }
    );
  }
}
