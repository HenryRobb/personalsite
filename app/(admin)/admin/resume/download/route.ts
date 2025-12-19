import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const current = await prisma.resume.findFirst({
    where: { isCurrent: true },
    orderBy: { createdAt: "desc" },
  })

  if (!current) {
    return NextResponse.json(
      { error: "No resume uploaded yet." },
      { status: 404 }
    )
  }

  // Redirect user to the stored PDF (Blob URL)
  return NextResponse.redirect(current.url, 302)
}
