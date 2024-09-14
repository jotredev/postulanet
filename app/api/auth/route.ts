import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Sin autorización", { status: 403 });
    }

    const user = await db.user.findUnique({
      where: {
        userId,
      },
    });

    if (!user) {
      return new NextResponse("Usuario no encontrado", { status: 404 });
    }

    return NextResponse.json({ response: "success", user });
  } catch (error) {
    console.log("[ERROR_GET_AUTH]", error);
    return new NextResponse("Error del servidor", { status: 500 });
  }
}
