import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

export async function POST(
  req: Request,
  { params }: { params: { comapnyId: string } }
) {
  try {
    const { userId } = auth();
    const data = await req.json();

    if (!userId) {
      return new NextResponse("Sin autorización", { status: 403 });
    }

    if (!params.comapnyId) {
      return new NextResponse("El ID de la empresa es requerido", {
        status: 400,
      });
    }

    const vacancie = await db.vacancie.create({
      data: {
        ...data,
        userId,
        // companyId: params.comapnyId,
      },
    });

    return NextResponse.json({ response: "success", vacancie });
  } catch (error) {
    console.log("[ERROR_VACANCIES_POST]", error);
    return new NextResponse("Error del servidor", { status: 500 });
  }
}
